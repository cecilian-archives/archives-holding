import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
/* Brawler - Regular */
@font-face {
  font-family: "Brawler";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/Brawler.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* Lato - Regular */
@font-face {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/LatoRegular.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* Lato - Regular - Extended */
@font-face {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/LatoRegularExtended.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* Lato - Bold */
@font-face {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts/LatoBold.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* Lato - Bold - Extended */
@font-face {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts/LatoBoldExtended.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* Lato - Italic */
@font-face {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/LatoItalic.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* Lato - Italic - Extended */
@font-face {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/LatoItalicExtended.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* Lato - Bold/Italic */
@font-face {
  font-family: "Lato";
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts/LatoBoldItalic.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

/* Lato - Bold/Italic - Extended */
@font-face {
  font-family: "Lato";
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts/LatoBoldItalicExtended.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

body {
  ${tw`font-body bg-grey-lighter`}
}
h1, h2, h3, h4, h5, h6 {
  ${tw`font-title`}
}
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
