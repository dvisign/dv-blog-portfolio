import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "@styles/globalStyle";
import wrapper from "@store/storeConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import { getSeason } from "@utils/index";

const Reactproject = ({ Component, pageProps }: AppProps) => {
  getSeason(new Date());
  return (
    <>
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
    </>
  );
};

export default wrapper.withRedux(Reactproject);
