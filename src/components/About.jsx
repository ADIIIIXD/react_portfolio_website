import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-zinc-900 text-gray-400 flex items-center justify-center"
    >
      <div className="max-w-[1000px] w-full h-full flex flex-col gap-4 items-center justify-center">
        <p className="text-3xl font-bold md:text-4xl">ABOUT</p>
        <div className="w-96 border-[1px] border-pink-600"></div>
        <p className="w-[85%] md:w-[70%] text-[16px] text-justify">
          I am <span className="text-pink-600">ADITYA VIKRAM SINGH</span>, a
          Bachelor of Commerce graduate with a strong passion for technology and
          a skill set that includes HTML, CSS, JavaScript, and React. My journey
          from commerce to tech has given me a unique blend of analytical
          thinking and programming abilities. I love learning and facing new
          challenges in the tech world, and my positive, goal-oriented mindset
          makes me a natural collaborator on cutting-edge projects. If you need
          a dedicated and adaptable front-end developer with a passion for
          technology, I'm here to bring your digital projects to life.
        </p>
      </div>
    </div>
  );
}

export default About;
