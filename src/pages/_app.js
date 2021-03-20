import GlobalStyles from "../styles/GlobalStyles";

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default MyApp;
