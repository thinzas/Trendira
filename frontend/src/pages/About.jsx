import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] scale-x-[-1]"
          src={assets.about_img}
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-justify">
          <p>
            Trendira was founded with a vision to create a space where timeless
            elegance meets modern fashion. Our collections are carefully curated
            to reflect a balance of sophistication and versatility, offering
            pieces that transcend fleeting trends. Each design is crafted with
            attention to detail, ensuring quality and comfort while allowing
            individuals to express their unique style with confidence.
          </p>
          <p>
            More than just a clothing store, Trendira represents a philosophy of
            self-expression and individuality. We believe that fashion is not
            only about what you wear, but how it makes you feel. With creativity
            at our core and a passion for design, we strive to empower our
            community to embrace their own identity through fashion that
            inspires and endures.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our Mission is to inspire confidence and individuality through
            fashion that blends timeless elegance with modern trends. We are
            committed to delivering high-quality, thoughtfully designed pieces
            that not only elevate style but also celebrate self-expression and
            creativity.
          </p>
        </div>
      </div>
      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={" CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border  border-pink-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-justify">
          <b className="text-gray-800">Quality Assurance:</b>
          <p className="text-gray-600">
            At Trendira, every piece is crafted and selected with meticulous
            care to ensure lasting quality. We believe clothing should not only
            look beautiful but also stand the test of time.
          </p>
        </div>

        <div className="border  border-pink-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-justify">
          <b className="text-gray-800">Convenience:</b>
          <p className="text-gray-600">
            We make fashion effortless by offering a seamless shopping
            experience—bringing style to your fingertips with ease and
            reliability.
          </p>
        </div>
        <div className="border  border-pink-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-justify">
          <b className="text-gray-800">Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our customers are at the heart of everything we do. From
            personalized support to attentive care, we are dedicated to making
            every Trendira experience exceptional.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
