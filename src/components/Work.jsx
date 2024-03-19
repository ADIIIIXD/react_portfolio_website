import React from "react";
import apple from "../assets/appleVision.png";
import sidcup from "../assets/sidcup.png";
import netflix from "../assets/netflix.png";
import weather from "../assets/weather.png";
import translator from "../assets/translator.png";
import internet from "../assets/internetTracker.png";

const projects = [
  {
    id: 1,
    title: "APPLE VISION CLONE",
    imageUrl: apple,
    liveDemoUrl: "https://apple-vision-clone-rouge.vercel.app/",
    codeUrl: "https://github.com/ADIIIIXD/apple_vision_clone",
  },
  {
    id: 2,
    title: "SIDCUP GOLF CLONE",
    imageUrl: sidcup,
    liveDemoUrl: "https://sidcup-family-golf-clone-rho.vercel.app/",
    codeUrl: "https://github.com/ADIIIIXD/sidcup_family_golf_clone",
  },
  {
    id: 3,
    title: "NETFLIX CLONE",
    imageUrl: netflix,
    liveDemoUrl: "https://netflix-clone-six-silk.vercel.app/",
    codeUrl: "https://github.com/ADIIIIXD/Netflix_clone",
  },
  {
    id: 4,
    title: "WEATHER APP",
    imageUrl: weather,
    liveDemoUrl: "https://weather-app-nu-woad.vercel.app/",
    codeUrl: "https://github.com/ADIIIIXD/weather_app",
  },
  {
    id: 5,
    title: "TRANSLATOR APP",
    imageUrl: translator,
    liveDemoUrl: "https://translator-gold-one.vercel.app/",
    codeUrl: "https://github.com/ADIIIIXD/translator_app",
  },
  {
    id: 6,
    title: "INTERNET SPEED APP",
    imageUrl: internet,
    liveDemoUrl: "https://internet-speed-scanner.vercel.app/",
    codeUrl: "https://github.com/ADIIIIXD/internet_speed_tester",
  },
];

const Work = () => {
  return (
    <div
      name="work"
      className="w-full bg-zinc-900 text-gray-400 flex flex-col items-center justify-center py-8 px-4"
    >
      <div className="w-full max-w-[1000px] mb-8 text-center">
        <p className="text-3xl font-bold md:text-4xl">MY WORK</p>
        <div className="w-24 h-1 mx-auto my-2 bg-pink-600"></div>
        <p className="text-sm font-semibold">
          Here are some projects I developed using HTML, CSS, and JavaScript,
          contributing to the enhancement of my skill set within web
          development.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-[1000px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full overflow-hidden rounded-lg aspect-w-16 aspect-h-9"
            style={{ maxWidth: "300px" }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-90 transition-opacity duration-300 hover:opacity-100">
              <div className="text-center">
                <p className="font-semibold text-white">{project.title}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-600 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white rounded-md bg-gray-800 hover:bg-gray-900 transition-colors"
                  >
                    Get Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
