import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = () => {
    event.preventDefault();
  };
  return (
    <div className="text-center mt-20">
      <p className="iceland-regular text-4xl font-medium text-gray-800 ">
        Subscribe now & get 20% off
      </p>
      <p className="iceland-regular text-l text-gray-400 mt-3">
        {" "}
        Be the first to discover new arrivals, exclusive offers, and style
        inspiration—straight to your inbox{" "}
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="rounded-lg w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border  pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none "
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 rounded-r-lg"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
