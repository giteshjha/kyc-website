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
        title="Home: Kyc Foundation"
        description="Welcome to Kyc Foundation homepage."
        canonical="https://kycfoundation.in/"
        openGraph={{
          url: "https://kycfoundation.in/",
        }}
      />
      <Head>
        <title>Kyc Foundation</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
