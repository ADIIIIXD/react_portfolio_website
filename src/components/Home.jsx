import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-900 flex items-center justify-center"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#ccd6f6]">
          ADITYA VIKRAM SINGH
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0]">
          I'm a Front-End Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Welcome to my website. I'm a front-end developer passionate about
          creating exceptional digital experiences.
        </p>
        <div>
          <button className="text-white group border-2 rounded-lg px-6 py-3 my-2 flex items-center hover:bg-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
