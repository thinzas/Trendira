import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm border-t-2 border-t-pink-300 py-3">
        <div>
          <img
            src={assets.logo}
            className="h-20 w-28 object-cover object-center mb-5"
            alt=""
          />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 @text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 @text-gray-600">
            <li>+1-212-456-9875</li>
            <li>contact@trendira.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="py-5 text-sm text-center">
        Copyright 2025@ trendira.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
