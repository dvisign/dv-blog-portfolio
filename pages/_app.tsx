import { AppProps } from "next/app";
import { NextPage } from "next";
import Head from "next/head";

const Reactproject: NextPage<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>DVISIGN :: 웹 퍼블리셔 정문채 포트폴리오</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Reactproject;
