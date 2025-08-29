import React from "react";
import Artwork from "../assets/artwork.png";
import {
  BiLogoGit,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const Home = () => {
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
            Waspy
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
        <div className="flex gap-3">
          <BiLogoGithub
            className="h-10 w-10 cursor-pointer rounded-full 
        border-2 border-transparent bg-purple-500 text-white
        transition-all duration-200 hover:scale-110
         hover:border-purple-600 hover:bg-white
         hover:text-purple-600 hover:translate-y-3 md:h-12 md:w-12"
          />

          <BiLogoLinkedin
            className="h-10 w-10 cursor-pointer rounded-full 
        border-2 border-transparent bg-purple-500 text-white
        transition-all duration-200 hover:scale-110
         hover:border-purple-600 hover:bg-white
         hover:text-purple-600 hover:translate-y-3 md:h-12 md:w-12"
          />

          <BiLogoInstagram
            className="h-10 w-10 cursor-pointer rounded-full 
        border-2 border-transparent bg-purple-500 text-white
        transition-all duration-200 hover:scale-110
         hover:border-purple-600 hover:bg-white
         hover:text-purple-600 hover:translate-y-3 md:h-12 md:w-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
