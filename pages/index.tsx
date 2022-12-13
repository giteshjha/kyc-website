import type { NextPage } from "next";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Ad from "../components/Ad/Ad";
import News from "../components/News/News";

const Home: NextPage = () => {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Home: nine4"
        description="Welcome to nine4 homepage."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>KYC</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
