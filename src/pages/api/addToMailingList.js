import Mailgun from "mailgun-js";

const config = {
  apiKey: process.env.MAILGUN_API_KEY,
  domain: "cecilianarchives.com",
  host: "api.eu.mailgun.net",
};
const mailgun = Mailgun(config);

export default (req, res) => {
  try {
    const newMember = {
      subscribed: true,
      address: req.body.emailAddress,
      name: req.body.cecilianName,
      upsert: "yes",
    };

    const list = mailgun.lists(`alumni@${config.domain}`);

    new Promise((resolve, reject) =>
      list
        .members()
        .create(newMember, (error, data) =>
          error ? reject(error) : resolve(data)
        )
    )
      .then((data) => {
        console.log("CREATED:", data);
        res.status(200).json({ success: true });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ success: false });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};
