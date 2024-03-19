import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobNav, setMobNav] = useState(false);

  const handleClick = () => setMobNav(!mobNav);

  return (
    <div className="fixed w-full h-[80px] z-10 flex justify-between items-center px-4 font-raleway bg-zinc-900">
      <div>
        <img src={Logo} alt="logo" className="w-[70px]" />
      </div>

      {/* BROWSER MENU STARTS */}
      <ul className="hidden md:flex">
        {["HOME", "ABOUT", "SKILLS", "WORK", "CONTACT"].map((item, index) => {
          return (
            <li
              key={index}
              className="px-4 cursor-pointer text-[#d9d9d9] text-sm hover:text-pink-600"
            >
              <Link
                to={item.toLowerCase()} // Using lowercase version of the names
                smooth={true}
                duration={500}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* BROWSER MENU ENDS */}

      {/* MOBILE MENU STARTS */}
      <div
        onClick={handleClick}
        className="md:hidden text-[#d9d9d9] text-[17px] z-10 cursor-pointer"
      >
        {!mobNav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={`${
          mobNav ? "flex flex-col" : "hidden"
        } md:hidden w-full h-screen flex flex-col justify-center items-center absolute top-0 left-0 bg-[#0a192f] text-white transition-all duration-500`}
      >
        {["HOME", "ABOUT", "SKILLS", "WORK", "CONTACT"].map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.toLowerCase()} // Using lowercase version of the names
                smooth={true}
                duration={500}
                className="py-6 text-4xl font-semibold cursor-pointer font-futura hover:text-[#969696]"
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* MOBILE MENNU ENDS */}

      {/* SOCIAL ICONS */}
      <div className="hidden md:flex flex-col fixed top-[40%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[0] px-1 duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-[130px] text-gray-300"
              href="https://www.linkedin.com/in/adii0412/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[0] px-1 duration-300 bg-[#2b3137]">
            <a
              className="flex justify-between items-center w-[130px] text-gray-300"
              href="https://github.com/ADIIIIXD"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[0] px-1 duration-300 bg-[#31a289]">
            <a
              className="flex justify-between items-center w-[130px] text-gray-300"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
