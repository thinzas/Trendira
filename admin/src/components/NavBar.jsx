import React from "react";
import { assets } from "../assets/assets";

const navBar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img
        className=" w-[max(10%,80px] h-20 w-28 object-cover object-center"
        src={assets.logo}
      />
      <div className="text-gray-600 font-semibold">
        Admin Panel
        <hr className="border-[#e586a5] border-opacity-80" />
      </div>
      <button
        onClick={() => {
          setToken("");
        }}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default navBar;
