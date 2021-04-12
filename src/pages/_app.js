import "../styles/fonts.css";
import GlobalStyles from "../styles/GlobalStyles";
import useVh from "../hooks/useVh";

const MyApp = ({ Component, pageProps }) => {
  useVh();
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
