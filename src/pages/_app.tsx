import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import localFont from "next/font/local";
import { yellow, blue } from "@mui/material/colors";

const futura = localFont({
  src: [
    {
      path: "../../public/fonts/FuturaBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/FuturaBoldfont.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/futura_medium_bt.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#35A839",
      100: "#8DCD95",
      200: "#63BB71",
      300: "#2C9A48",
      400: "#43B02A",
      500: "#1F6935",
      600: "#175C33",
      light: "#f4f4f4",
      dark: "#636161",
    },
    secondary: {
      main: "#E62634",
      100: "#E93755",
      200: "#E71E40",
      300: "#CD0527",
      400: "#B60422",
      500: "#A0041E",
      600: "#FF0D8A",
      700: "#BA1A1A",
      800: "#FFC700",
      900: "#A22DF8",
      light: "#fff",
      dark: "#f9f9f9",
    },
    error: {
      main: "#E93755",
    },
    info: {
      main: blue[500],
    },
    warning: {
      main: yellow[600],
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "#2D2D2D",
      secondary: "#515151",
      disabled: "#636161",
    },
    action: {
      active: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCardActionArea: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "red",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "#E3E3E3",
        },
      },
    },
    // MuiCssBaseline: {
    //   styleOverrides: `
    //     @font-face {
    //       font-family: "'futura'";
    //       font-style: normal;
    //       font-display: swap;
    //       font-weight: 400;
    //       src: local('futura'), local('futura-Regular'), url(${FuturaTtf}) format('truetype');
    //       unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    //     }
    //     @font-face {
    //       font-family: "'futura-bold'";
    //       font-style: normal;
    //       font-display: swap;
    //       font-weight: 700;
    //       src: local('futura-bold'), local('futura-Bold'), url(${FuturaBoldTtf}) format('truetype');
    //       unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    //     }
    //     @font-face {
    //       font-family: "'futura-medium'";
    //       font-style: normal;
    //       font-display: swap;
    //       font-weight: 600;
    //       src: local('futura-medium'), local('futura-Medium'), url(${FuturaMediumWoff2}) format('woff2');
    //       unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    //     }
    //     @font-face {
    //       font-family: "'futura-light'";
    //       font-style: normal;
    //       font-display: swap;
    //       font-weight: 200;
    //       src: local('futura-light'), local('futura-Light'), url(${FuturaLightWoff2}) format('woff2');
    //       unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    //     }
    //   `,
    // },
  },
  // typography: {
  //   fontFamily: ["futura", "montserrat"].join(","),
  // },
  // typography: {
  //   fontFamily: [futura].join(","),
  // },
  // typography: {
  //   fontFamily: montserrat.style.fontFamily,
  // },
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Head>...</Head>
      <ThemeProvider theme={theme}>
        {/* <main className={futura.className}> */}
          <Component {...pageProps} />
        {/* </main> */}
      </ThemeProvider>
    </AppCacheProvider>
  );
}
