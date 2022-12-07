import React from "react";
import Image from "next/image";

export default function donate() {
  return (
    <div>
      <Image
        src={
          "https://ik.imagekit.io/kyc/static/payment.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1670429892115"
        }
        alt="/"
        layout="fill"
        objectFit="contain"
        className="h-full max-w-[500px]"
      />
    </div>
  );
}
