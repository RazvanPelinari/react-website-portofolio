import React, { useState } from "react";
import Artwork from "../assets/artwork.png";
import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiPhone,
  BiEnvelope,
} from "react-icons/bi";

const Home = () => {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopy = (text, setter) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setter(true);
        setTimeout(() => {
          setter(false);
        }, 1500); // Reset the message after 1.5 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      id="Home"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img src={Artwork} alt="Logo" className="w-[250px] sm:w-[300px]" />

        <div className="space-y-1 sm:space-y-3">
          <h1
            className="bg-gradient-to-r from-purple-800
          to-purple-400 bg-clip-text 
        text-4xl font-semibold text-transparent
        md:text-5xl lg:text-6xl drop-s"
          >
            Răzvan Pelinari
          </h1>
          <h3
            className="bg-gradient-to-r from-purple-800
          to-purple-400 bg-clip-text 
        text-xl font-semibold text-transparent
        md:text-2xl lg:text-3xl"
          >
            {" "}
            Web Developer{" "}
          </h3>
          <p className="max-w-[500px] text-sm text-gray-600">
            A passionate and detail-oriented junior web developer dedicated to
            building responsive and user-friendly web applications. This
            portfolio showcases my projects, demonstrating a strong foundation
            in HTML, CSS, JavaScript, React.js and Tailwind CSS, and a
            commitment to creating clean, efficient, and modern code.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* All Icons have consistent styling now */}

          {/* GitHub Icon */}
          <a
            href="https://github.com/xwaspy"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 cursor-pointer rounded-full p-2 
    border-2 border-transparent bg-purple-500 text-white
    transition-all duration-200 hover:scale-110
    hover:border-purple-600 hover:bg-white
    hover:text-purple-600 hover:translate-y-3 md:h-12 md:w-12"
          >
            <BiLogoGithub className="h-6 w-6 md:h-8 md:w-8" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/razvan-pelinari-454445381/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 cursor-pointer rounded-full p-2
  border-2 border-transparent bg-purple-500 text-white
  transition-all duration-200 hover:scale-110
  hover:border-purple-600 hover:bg-white
  hover:text-purple-600 hover:translate-y-3 md:h-12 md:w-12"
          >
            <BiLogoLinkedin className="h-6 w-6 md:h-8 md:w-8" />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/razvan.peli"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 cursor-pointer rounded-full p-2
  border-2 border-transparent bg-purple-500 text-white
  transition-all duration-200 hover:scale-110
  hover:border-purple-600 hover:bg-white
  hover:text-purple-600 hover:translate-y-3 md:h-12 md:w-12"
          >
            <BiLogoInstagram className="h-6 w-6 md:h-8 md:w-8" />
          </a>

          {/* Phone Icon and Number */}
          <div className="relative group">
            <div
              onClick={() => handleCopy("+40729244375", setPhoneCopied)}
              className="flex cursor-pointer items-center justify-center rounded-full border-2 border-transparent bg-purple-500 text-white transition-all duration-500 hover:scale-105 hover:border-purple-600 hover:bg-white hover:text-purple-600 p-2 md:p-3"
            >
              <BiPhone className="h-6 w-6 md:h-8 md:w-8" />
              <span className="max-w-xs overflow-hidden transition-all duration-500 pl-2 md:max-w-0 md:group-hover:max-w-xs">
                +40729244375
              </span>
            </div>
            {phoneCopied && (
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white">
                Copied!
              </span>
            )}
          </div>

          {/* Email Icon and Address */}
          <div className="relative group">
            <div
              onClick={() =>
                handleCopy("razvan.pelinari@gmail.com", setEmailCopied)
              }
              className="flex cursor-pointer items-center justify-center rounded-full border-2 border-transparent bg-purple-500 text-white transition-all duration-200 hover:scale-105 hover:border-purple-600 hover:bg-white hover:text-purple-600 p-2 md:p-3"
            >
              <BiEnvelope className="h-6 w-6 md:h-8 md:w-8" />
              <span className="max-w-xs overflow-hidden transition-all duration-500 pl-2 md:max-w-0 md:group-hover:max-w-xs">
                razvan.pelinari@gmail.com
              </span>
            </div>
            {emailCopied && (
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white">
                Copied!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
