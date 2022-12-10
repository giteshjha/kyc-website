/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function News({
  images = [],
  title = "KYC Foundation In News",
}: {
  images?: string[];
  title?: string;
}) {
  const [selectedImage, setSelectedImage] = useState<undefined | number>(
    undefined
  );
  const modal = useRef<any>(null);
  const onClickOutside = (event: any) => {
    if (modal.current && !modal.current?.contains(event?.target)) {
      setSelectedImage(undefined);
    }
  };

  useEffect(() => {
    if (selectedImage !== undefined) {
      setTimeout(() => window.addEventListener("click", onClickOutside), 0);
    }
    return () => {
      window.removeEventListener("click", onClickOutside);
    };
  }, [selectedImage]);

  const nextSlide = () => {
    setSelectedImage(
      selectedImage === images?.length - 1 ? 0 : (selectedImage || 0) + 1
    );
  };
  const prevSlide = () => {
    setSelectedImage(
      selectedImage === 0 ? images?.length - 1 : (selectedImage || 1) - 1
    );
  };
  return (
    <div className="w-full  max-w-[1240px] mx-auto px-4 mb-4">
      <h2 className="pt-10 md:pt-8 mb-8 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-5xl md:text-4xl">
        {title}
      </h2>
      <div className="flex flex-wrap">
        {images?.map((image, idx) => (
          <div key={idx} className="">
            <img
              src={image}
              alt="/"
              className="w-[100px] h-[150px] md:w-[300px] md:h-[400px] object-fill"
              onClick={() => {
                setSelectedImage(idx);
              }}
            />
          </div>
        ))}
      </div>
      {selectedImage != undefined && (
        <div className="w-full h-full m-auto left-0 right-0 flex justify-center items-center fixed bottom-0 overflow-auto z-50 bg-[#8A8A8F]/50">
          <button
            type="button"
            className="flex rounded-md p-2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 absolute right-4 top-0  mt-2"
            onClick={() => setSelectedImage(undefined)}
          >
            <span className="sr-only">Dismiss</span>
            <i className="fa-solid fa-xmark text-[30px] text-black"></i>
          </button>

          <div className="p-10 w-full flex justify-center" ref={modal}>
            {images?.length > 1 && (
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute m-auto top-0 bottom-0 left-[20px] text-white/70 cursor-pointer select-none z-[2] w-6 lg:w-16 md:w-10"
                size={50}
              />
            )}
            <img
              src={images[selectedImage]}
              alt="/"
              className="min-w-[50%] max-h-[1200px] object-fill"
            />
            {images?.length > 1 && (
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute m-auto top-0 bottom-0  right-[20px] text-white/70 cursor-pointer select-none z-[2] w-6 lg:w-16 md:w-10"
                size={50}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
