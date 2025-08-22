import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm border-t-2 border-t-pink-300 py-3">
        <div>
          <img
            src={assets.logo}
            className="h-20 w-28 object-cover object-center"
            alt=""
          />
          <p className="w-full md:w-2/3 text-gray-600 text-justify">
            where timeless style meets modern elegance, bringing together
            designs that are both classic and contemporary. Each piece is
            thoughtfully crafted with care, blending quality and detail to
            create fashion that not only elevates your wardrobe but also
            inspires confidence and celebrates individuality.
          </p>
        </div>

        <div className="mt-8">
          <p className="iceland-regular text-2xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 @text-gray-600">
            <Link to={"/"} onClick={scrollToTop}>
              <li>Home</li>
            </Link>
            <Link to={"/about"} onClick={scrollToTop}>
              <li>About Us</li>
            </Link>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="mt-8">
          <p className="iceland-regular text-2xl font-medium mb-5">
            GET IN TOUCH
          </p>
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
