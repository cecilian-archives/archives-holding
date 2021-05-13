import Head from "next/head";
import { useState } from "react";
import tw, { styled, css, theme } from "twin.macro";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useConfetti from "../hooks/useConfetti";
import ImageFader from "../components/ImageFader";

const HomePage = () => {
  const { register, handleSubmit, setError, clearErrors, errors } = useForm({
    mode: "onBlur",
  });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const fireConfetti = useConfetti();

  const onSubmit = async (data) => {
    clearErrors();
    setSaving(true);
    try {
      const [response] = await Promise.all([
        await fetch("/api/addToMailingList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }),
        new Promise((resolve) => setTimeout(resolve, 1000)),
      ]);
      if (!response.ok) {
        throw new Error("Fetch response was not OK");
      } else {
        setSuccess(true);
      }
    } catch (error) {
      setError("save", {
        type: "manual",
        message: "Something went wrong. Please try again.",
      });
      console.error("Error saving:", error);
    }
    setSaving(false);
  };

  return (
    <PageContainer>
      <ImageFader switchTime={process.env.IMAGE_DISPLAY_DURATION} />
      <HeroContainer>
        <Head>
          <title>Cecilian Archives</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Animate
          animate={{ y: ["7%", "0%"], opacity: [0, 1] }}
          transition={{ duration: 0.9 }}
        >
          <SizedLogo src="/images/logo.svg" alt="" onClick={fireConfetti} />
          <Welcome>
            <h2>Welcome to the</h2>
            <h1>Cecilian Archives</h1>
          </Welcome>
        </Animate>
        <Animate
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <ButtonGroup>
            {success ? (
              <Thanks>
                <ThanksText>Thank You!</ThanksText>
                <ConfirmText>
                  We have your email address and will be in touch soon.
                </ConfirmText>
                <SpamText>No spam, we promise</SpamText>
              </Thanks>
            ) : (
              <>
                <HoldingText>
                  The Archives will soon be open for browsing.
                </HoldingText>
                <HoldingText>
                  Leave us your email to be the first to hear!
                </HoldingText>
                <FormGroup onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Fields>
                    <FieldLabel>Name</FieldLabel>
                    <TextInput
                      type="text"
                      name="cecilianName"
                      placeholder="Jean Valjean"
                      ref={register({ required: false })}
                    />
                    <FieldLabel>Email</FieldLabel>
                    <TextInput
                      type="email"
                      name="emailAddress"
                      placeholder="prisoner24601@gmail.com"
                      ref={register({
                        required: true,
                        pattern: {
                          value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        },
                      })}
                    />
                    {errors.emailAddress && (
                      <ErrorText>
                        That doesn't look like a valid email address
                      </ErrorText>
                    )}
                  </Fields>
                  <SaveButton type="submit" disabled={saving}>
                    {saving ? "Saving..." : "Sign Up"}
                  </SaveButton>
                  {errors.save && <SaveError>{errors.save.message}</SaveError>}
                </FormGroup>
              </>
            )}
          </ButtonGroup>
        </Animate>
      </HeroContainer>
    </PageContainer>
  );
};

const PageContainer = tw.div`
  relative
  w-screen
  min-h-screen
`;

const HeroContainer = styled.div(() => [
  tw`absolute
  inset-0
  flex
  flex-col
  justify-center
  items-center
  p-8
  border-b-8
  border-brightYellow`,
  css`
    background-image: linear-gradient(
      to top,
      ${theme`colors.deepBlue.heroBase`},
      ${theme`colors.deepBlue.heroTop`}
    );
    min-height: calc(var(--vh, 1vh) * 100);
    /* See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */
  `,
]);

const SizedLogo = styled.img`
  ${tw`w-auto
  max-h-14
  border
  border-deepBlue-105
  rounded-xl
  mt-8
  md:mt-0`}
`;

const Welcome = styled.div`
  ${tw`text-center
  p-8`}
  h1 {
    ${tw`
    text-white
    text-7xl
    pt-3`}
  }
  h2 {
    ${tw`
    text-white
    text-4xl
    border-b
    border-brightYellow
    pb-4`}
  }
`;

const ButtonGroup = tw.div`
  p-8
  flex-grow-0
  flex
  flex-col
  md:py-8 md:px-0 md:max-w-full md:justify-between
`;

const HoldingText = tw.span`
  text-center
  text-white
  text-lg
  md:text-base
`;

const Thanks = tw.div`
  flex
  flex-col
  items-center
  space-y-2
`;
const ThanksText = tw.h4`
  text-center
  text-white
  text-3xl
`;
const ConfirmText = tw.p`
  text-center
  text-white
  text-xl
  md:text-lg
`;
const SpamText = tw.p`
  text-center
  text-white
  text-lg
  md:text-base
  text-grey-light
`;

const Animate = tw(motion.div)`
  flex
  flex-col
  justify-center
  items-center
`;

const FormGroup = tw.form`
  w-full
  max-w-5xl
  mx-auto
  my-2
  flex
  flex-col
  justify-start
  items-center
`;

const Fields = tw.div`
  flex
  flex-col
  justify-start
  items-start
  w-full
  px-3
  md:px-0
  pt-3
  pb-5
`;

const FieldLabel = tw.label`
  text-base
  text-white
  first:mt-1
  mt-4
  mb-1
`;

const TextInput = tw.input`
  w-full
  rounded
  border
  border-deepBlue-110
  focus:outline-none
  focus:border-transparent
  focus:ring-2
  focus:ring-deepBlue
`;

const ErrorText = styled.span(() => [
  tw`text-base
  max-w-prose
  text-deepRed
  mt-1`,
  css`
    &::first-letter {
      text-transform: uppercase;
    }
  `,
]);

const SaveButton = styled.button(({ disabled }) => [
  tw`mt-2
  relative hover:shadow-lg hover:-top-0.5
  text-white
  rounded-md shadow-md
  focus:outline-none focus:ring-2 focus:ring-opacity-50
  py-2 px-6 text-lg md:text-base
  border border-brightYellow
  hover:bg-brightYellow focus:ring-brightYellow`,
  disabled && tw`opacity-60 hover:top-0`,
]);

const SaveError = tw.span`
  text-base
  max-w-prose
  text-deepRed
  mt-2`;

export default HomePage;
