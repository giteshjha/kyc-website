import News from "../News/News";
import { NewsData } from "../News/NewsData";
import Slider from "../Slider/Slider";
import { SliderData } from "../Slider/SliderData";
import { EventData } from "./EventData";

/* eslint-disable @next/next/no-html-link-for-pages */
export default function Main() {
  return (
    <section className="text-gray-600 body-font px-2 md:px-auto">
      <div className="max-w-5xl pb-10 md:pb-24 mx-auto">
        <h1 className="text-30  md:text-60 lg:text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          Create your best version with our physical training programs
        </h1>
        <p className="mx-4 sm:mx-auto text-sm md:text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
          Gallery images are collection of initiatives taken by KYC Foundation.
        </p>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <Slider slides={SliderData} autoStart={true} />
      </div>
      <h2 className="pt-20 md:pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Events
      </h2>
      <br></br>
      <p className="mx-auto text-sm text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3 md:text-xl">
        Current and upcoming events.
      </p>
      <Slider slides={EventData} autoStart={true} title={""} />
      <News images={NewsData} />
      {/* <div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
        <div className="ktq4">
          <img src="https://nine4.app/images/nine4-3.png"></img>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
        <div className="ktq4">
          <img src="https://nine4.app/images/nine4-3.png"></img>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
      </div> */}
      {/* <section className="relative pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-200">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section> */}
    </section>
  );
}
