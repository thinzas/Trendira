import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className=" w-full rounded-lg  md:max-w-[480px]"
          src={assets.contact_img}
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="iceland-regular font-semibold text-3xl text-gray-700">
            Our Store
          </p>
          <p className=" text-gray-500">
            82314 Harper Lane <br />
            Suite 210, New York, USA
          </p>
          <p className=" text-gray-500">
            <span className="text-gray-700">Tel:</span> (+1)-212-456-9875
            <br /> <span className="text-gray-700">Email:</span>{" "}
            contact@trendira.com
          </p>
          <p className="iceland-regular font-semibold text-3xl text-gray-700">
            Careers at Trendira
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className=" rounded-lg border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
