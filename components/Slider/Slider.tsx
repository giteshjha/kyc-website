import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface Props {
  slides: any;
  autoStart?: boolean;
  title?: string;
}

const Slider = ({ slides, autoStart = false, title = "Gallery" }: Props) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const sliderRef = React.useRef<any>();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  useEffect(() => {
    sliderRef.current = setInterval(() => {
      autoStart && nextSlide();
    }, 4000);
    return () => {
      clearInterval(sliderRef.current);
    };
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4 py-0">{title}</h1>
      <div className="relative flex justify-center p-4">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={index === current ? "" : "opacity-0 image"}
            >
              {slides?.length > 1 && (
                <FaArrowCircleLeft
                  onClick={prevSlide}
                  className="absolute m-auto top-0 bottom-0 left-[20px] text-white/70 cursor-pointer select-none z-[2] w-6 lg:w-16 md:w-10"
                  size={50}
                />
              )}
              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width="1440"
                  height="600"
                  objectFit="fill"
                />
              )}
              {slides?.length > 1 && (
                <FaArrowCircleRight
                  onClick={nextSlide}
                  className="absolute m-auto top-0 bottom-0  right-[20px] text-white/70 cursor-pointer select-none z-[2] w-6 lg:w-16 md:w-10"
                  size={50}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
