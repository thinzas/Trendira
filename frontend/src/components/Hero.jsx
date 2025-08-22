import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-pink-200">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="iceland-regular font-medium text-sm md:text-base">
              OUR BESTSELLERS
            </p>
          </div>
          <h1 className="fascinate-regular text-4xl sm:py-3 lg:text-5xl leading-relaxed text-d97d9a">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="iceland-regular font-semibold text-sm md:text-base">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}

      <img
        className="w-full sm:w-1/2 scale-x-[-1] object-cover object-center"
        src={assets.hero_img}
        alt=""
      />
    </div>
  );
};

export default Hero;
