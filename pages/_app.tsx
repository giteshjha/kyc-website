import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import Ad from "../components/Ad/Ad";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="md:hidden  relative mb-10 mt-[140px] sm:mt-[110px] flex justify-center w-full">
        <Ad />
      </div>
      <div className="pb-30 md:pb-52" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
