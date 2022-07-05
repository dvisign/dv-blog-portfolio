import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "@styles/globalStyle";
import theme from "@styles/theme";
import wrapper from "@store/storeConfig";

const Reactproject = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <title>DVISIGN :: 웹 퍼블리셔 정문채 포트폴리오</title>
        <link rel="shortcut icon" href="/img/common/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap&subset=korean"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(Reactproject);
