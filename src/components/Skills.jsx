import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import rct from "../assets/react.png";
import github from "../assets/github.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-zinc-900 text-gray-400">
      <div className="max-w-[1000px] w-full h-full mx-auto p-4 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="w-full text-3xl font-bold md:text-4xl text-center">
            MY TOOLBOX
          </p>
          <div className="w-96 border-[1px] border-pink-600"></div>
          <p className="text-[16px] font-semibold">
            These are the technologies I have worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <SkillCard image={html} title="HTML" />
          <SkillCard image={css} title="CSS" />
          <SkillCard image={js} title="JavaScript" />
          <SkillCard image={rct} title="React" />
          <SkillCard image={tailwind} title="Tailwind CSS" />
          <SkillCard image={github} title="GitHub" />
        </div>
      </div>
    </div>
  );
}

const SkillCard = ({ image, title }) => (
  <div className="shadow-md shadow-[#010c16] hover:shadow-lg transition duration-300">
    <img src={image} alt={title} className="w-20 mx-auto" />
    <p className="my-4 text-center">{title}</p>
  </div>
);

export default Skills;
