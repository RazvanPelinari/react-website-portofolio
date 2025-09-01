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
  const [copiedMessage, setCopiedMessage] = useState(""); // State to store the message to display

  const handleCopy = (text, message) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedMessage(message); // Set the message
        setTimeout(() => {
          setCopiedMessage(""); // Clear the message after 1.5 seconds
        }, 1500);
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
            className="border-purple-400 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
  animate-gradient bg-[length:400%_400%] bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl drop-shadow-sm"
          >
            Răzvan Pelinari
          </h1>
          <h3
            className="border-purple-400 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
  animate-gradient bg-[length:400%_400%] bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl"
          >
            {" "}
            <p classname="justify-center">Web Developer</p>
            {"JavaScript | React.js | Tailwind CSS"}
          </h3>
          <p className="max-w-[500px] text-sm text-gray-600">
            A passionate and detail-oriented junior web developer dedicated to
            building responsive and user-friendly web applications. This
            portfolio showcases my projects, demonstrating a strong foundation
            in HTML, CSS, JavaScript, React.js and Tailwind CSS, and a
            commitment to creating clean, efficient, and modern code.
          </p>
        </div>

        {/* This container now holds two separate rows for icons */}
        <div className="flex flex-col items-center gap-3">
          {/* Top row for social icons */}
          <div className="flex items-center gap-3">
            {/* All Icons have consistent styling now */}

            {/* GitHub Icon */}
            <a
              href="https://github.com/xwaspy"
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

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/razvan-pelinari-454445381/"
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

            {/* Instagram Icon */}
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

          {/* Bottom row for contact info */}
          <div className="flex items-center flex-wrap justify-center gap-3">
            {/* Phone Icon and Number */}
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

            {/* Email Icon and Address */}
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
        <div className="fixed bottom-4 translate-x-1 transform rounded-lg border border-purple-300 bg-white/30 px-4 py-2 text-sm text-gray-800 backdrop-blur-md shadow-lg transition-opacity duration-300 animate-fade-in z-50">
          {copiedMessage}
        </div>
      )}
    </div>
  );
};
export default Home;
