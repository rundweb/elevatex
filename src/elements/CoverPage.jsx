import React from "react";
// icon
import { BsArrowRight } from "react-icons/bs";
const CoverPage = ({ text }) => {
  return (
    <div className=" max-w-screen-xl h-60 sm:h-80 m-auto p-4">
      <div
        className="bg-all bg-cover h-full bg-no-repeat bg-center rounded-2xl flex items-center justify-center text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col gap-3 sm:gap-5 items-center justify-center">
          <h1 className="text-gray-800 font-bold text-4xl sm:text-5xl">
            {text}
          </h1>
          <p className="flex items-center gap-4 text-gray-800 font-medium">
            Home <BsArrowRight /> {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
