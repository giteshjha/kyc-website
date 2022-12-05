import React from "react";
import Image from "next/image";

export default function donate() {
  return (
    <div>
      <Image
        src={
          "https://kycfoundation.in/static/media/payment.47bf776ef24cec5c21d2.jpeg"
        }
        alt="/"
        layout="fill"
        objectFit="contain"
        className="h-full max-w-[500px]"
      />
    </div>
  );
}
