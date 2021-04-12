import GlobalStyles from "../components/GlobalStyles";
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
