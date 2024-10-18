import Image from "next/image";
import React from "react";
import { Spinner } from "./spinner";

const LoadingSpinner = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src="./images/logo.svg"
            alt="logo_image"
            width={230}
            height={80}
          />
          <Spinner size={"lg"} />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
