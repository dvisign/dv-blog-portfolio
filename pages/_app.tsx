import { AppProps } from "next/app";
import { NextPage } from "next";
import Head from "next/head";
import GlobalStyle from "@styles/globalStyle";

const Reactproject: NextPage<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>DVISIGN :: 웹 퍼블리셔 정문채 포트폴리오</title>
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap&subset=korean" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default Reactproject;
