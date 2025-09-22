import React, { useState } from "react";
import Artwork from "../assets/artwork2.jpg";
import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiPhone,
  BiEnvelope,
} from "react-icons/bi";

const Home = () => {
  const [copiedMessage, setCopiedMessage] = useState("");

  const handleCopy = (text, message) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedMessage(message);
        setTimeout(() => {
          setCopiedMessage("");
        }, 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      id="Home"
      className="w-full px-4 py-12 md:px-10 lg:px-20 min-h-screen relative mt-10" // Added relative here
    >
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center scroll-mt-20 md:scroll-mt-0">
        <div className="box">
          <img
            src={Artwork}
            alt="Logo"
            className="w-[250px] sm:w-[300px] rounded-full scroll-mt-14 md:scroll-mt-0"
          />
        </div>

        <div className="space-y-1 sm:space-y-3">
          <h1
            className="border-purple-400 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
  animate-gradient bg-[length:400%_400%] bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl drop-shadow-[0_-4px_6px_rgba(255,255,255,0.8)]"
          >
            Răzvan Pelinari
          </h1>
          <h3
            className="border-purple-400 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
  animate-gradient bg-[length:400%_400%] bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl drop-shadow-[0_-4px_6px_rgba(255,255,255,0.8)]"
          >
            <p className="justify-center">Web Developer</p>
            {"JavaScript | React.js | Tailwind CSS"}
            <p />
          </h3>
          <p className="max-w-[500px] text-sm text-gray-600">
            A passionate and detail-oriented junior web developer dedicated to
            building responsive and user-friendly web applications. This
            portfolio showcases my projects, demonstrating a strong foundation
            in HTML, CSS, JavaScript, React.js and Tailwind CSS, and a
            commitment to creating clean, efficient, and modern code.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/RazvanPelinari"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 cursor-pointer rounded-full p-2
            border-2 border-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
  animate-gradient bg-[length:400%_400%]  text-white
            transition-all duration-200 hover:scale-110
            hover:border-fuchsia-500 hover:bg-fuchsia-500
            hover:text-white hover:translate-y-1 md:h-12 md:w-12"
            >
              <BiLogoGithub className="h-full w-full" />
            </a>

            <a
              href="https://www.linkedin.com/in/razvan-pelinari/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 cursor-pointer rounded-full p-2
            border-2 border-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
  animate-gradient bg-[length:400%_400%]  text-white
            transition-all duration-200 hover:scale-110
            hover:border-fuchsia-500 hover:bg-fuchsia-500
            hover:text-white hover:translate-y-1 md:h-12 md:w-12"
            >
              <BiLogoLinkedin className="h-full w-full" />
            </a>

            <a
              href="https://www.instagram.com/razvan.peli"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 cursor-pointer rounded-full p-2
            border-2 border-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
  animate-gradient bg-[length:400%_400%]  text-white
            transition-all duration-200 hover:scale-110
            hover:border-fuchsia-500 hover:bg-fuchsia-500
            hover:text-white hover:translate-y-1 md:h-12 md:w-12"
            >
              <BiLogoInstagram className="h-full w-full" />
            </a>
          </div>

          <div className="flex items-center flex-wrap justify-center gap-3">
            <div className="relative group flex items-center">
              <div
                onClick={() =>
                  handleCopy("+40729244375", "Phone number copied!")
                }
                className="flex cursor-pointer items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
  animate-gradient bg-[length:400%_400%]  text-white transition-all duration-500 hover:scale-105 hover:border-fucshia-500
   hover:bg-fuchsia-500 hover:text-white p-2 md:p-3"
              >
                <BiPhone className="h-6 w-6 md:h-8 md:w-8 translate-x-1" />
                <span className="max-w-xs overflow-hidden transition-all duration-1000 pl-2 md:max-w-0 md:group-hover:max-w-xs">
                  +40729244375
                </span>
              </div>
            </div>

            <div className="relative group flex items-center">
              <div
                onClick={() =>
                  handleCopy(
                    "razvan.pelinari@gmail.com",
                    "Email address copied!"
                  )
                }
                className="flex cursor-pointer items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
  animate-gradient bg-[length:400%_400%]  text-white transition-all duration-500 hover:scale-105 hover:border-fuchsia-500 hover:bg-fuchsia-500 hover:text-white p-2 md:p-3"
              >
                <BiEnvelope className="h-6 w-6 md:h-8 md:w-8 translate-x-1" />
                <span className="max-w-xs overflow-hidden transition-all duration-1000 pl-2 md:max-w-0 md:group-hover:max-w-xs">
                  razvan.pelinari@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {copiedMessage && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-50">
          <div className="rounded-lg border border-purple-300 bg-white/30 px-4 py-2 text-sm text-gray-800 backdrop-blur-md shadow-lg transition-opacity duration-300 animate-fade-in">
            {copiedMessage}
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
