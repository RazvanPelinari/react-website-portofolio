import React, { useState } from "react";
import Artwork from "../../assets/artwork2.jpg";
import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiPhone,
  BiEnvelope,
  BiDownload,
  BiCodeAlt,
} from "react-icons/bi";
import Typewriter from "../Animations/Typewriter";
import { motion, AnimatePresence } from "framer-motion";

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
      className="w-full px-4 py-12 md:px-10 lg:px-20 min-h-screen relative bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center scroll-mt-20 md:scroll-mt-0">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="box overflow-visible m-4"
        >
          <img
            src={Artwork}
            alt="Logo"
            className="w-[250px] sm:w-[300px] rounded-full scroll-mt-14 md:scroll-mt-0 overflow-hidden shadow-lg dark:shadow-purple-900/50"
          />
        </motion.div>

        {/* Headings */}
        <div className="space-y-1 sm:space-y-3">
          <h1
            className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 
             animate-gradient bg-[length:400%_400%] bg-clip-text 
             text-4xl md:text-5xl lg:text-6xl font-semibold text-transparent 
             drop-shadow-[0_-4px_6px_rgba(255,255,255,0.8)] 
             dark:drop-shadow-[0_-4px_6px_rgba(147,51,234,0.3)] 
             flex items-center justify-center gap-2"
          >
            Hi, I'm Răzvan
            <span className="inline-block align-middle text-neutral-50">
              👋
            </span>
          </h1>

          <h3 className="flex items-center justify-center-safe gap-2 text-xl md:text-2xl lg:text-3xl font-semibold">
            <span
              className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 
               animate-gradient bg-[length:400%_400%] bg-clip-text text-transparent 
               drop-shadow-[0_-4px_6px_rgba(255,255,255,0.8)] 
               dark:drop-shadow-[0_-4px_6px_rgba(147,51,234,0.3)]
               inline-block min-w-[180px] text-xl md:text-2xl lg:text-3xl"
            >
              <Typewriter />
            </span>
          </h3>

          <p className="max-w-[500px] text-sm md:text-base text-gray-600 dark:text-gray-300 mx-auto leading-relaxed">
            A passionate and detail-oriented junior web developer dedicated to
            building responsive and user-friendly web applications. This
            portfolio showcases my projects, demonstrating a strong foundation
            in HTML, CSS, JavaScript, React.js and Tailwind CSS, and a
            commitment to creating clean, efficient, and modern code.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            {[
              {
                href: "https://github.com/RazvanPelinari",
                icon: BiLogoGithub,
              },
              {
                href: "https://www.linkedin.com/in/razvan-pelinari/",
                icon: BiLogoLinkedin,
              },
              {
                href: "https://www.instagram.com/razvan.peli",
                icon: BiLogoInstagram,
              },
            ].map(({ href, icon: Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 cursor-pointer rounded-full p-2
                  border-2 border-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
                  animate-gradient bg-[length:400%_400%] text-white dark:text-gray-100
                  transition-all duration-200 hover:scale-110
                  hover:border-fuchsia-500 hover:bg-fuchsia-500 hover:text-white hover:translate-y-1 md:h-12 md:w-12"
              >
                <Icon className="h-full w-full" />
              </a>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Copy Phone */}
            <button
              onClick={() => handleCopy("+40729244375", "Phone number copied!")}
              className=" flex items-center gap-2 rounded-full px-4 py-2 border-2 border-transparent
                bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 animate-gradient bg-[length:400%_400%]
                text-white dark:text-gray-100 transition-all duration-300 hover:scale-105 hover:border-fuchsia-500 hover:bg-fuchsia-500 hover:translate-y-1"
            >
              <BiPhone className="text-lg" /> Call Me!
            </button>

            {/* Copy Email */}
            <button
              onClick={() =>
                handleCopy("razvanpelinari@gmail.com", "Email address copied!")
              }
              className="flex items-center gap-2 rounded-full px-4 py-2 border-2 border-transparent
                bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 animate-gradient bg-[length:400%_400%]
                text-white dark:text-gray-100 transition-all duration-300 hover:scale-105 hover:border-fuchsia-500 hover:bg-fuchsia-500 hover:translate-y-1"
            >
              <BiEnvelope className="text-lg" /> Email Me!
            </button>

            {/* View Projects */}
            <a
              href="#Projects"
              className="flex items-center gap-2 rounded-full px-4 py-2 border-2 border-transparent
                bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 animate-gradient bg-[length:400%_400%]
                text-white dark:text-gray-100 transition-all duration-300 hover:scale-105 hover:border-fuchsia-500 hover:bg-fuchsia-500 hover:translate-y-1"
            >
              <BiCodeAlt className="text-lg" /> View Projects
            </a>

            {/* Download CV */}
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 rounded-full px-4 py-2 border-2 border-transparent
                bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 animate-gradient bg-[length:400%_400%]
                text-white dark:text-gray-100 transition-all duration-300 hover:scale-105 hover:border-fuchsia-500 hover:bg-fuchsia-500 hover:translate-y-1"
            >
              <BiDownload className="text-lg" /> View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Copy Feedback */}
      <AnimatePresence>
        {copiedMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-4 z-50"
          >
            <div className="rounded-lg border border-purple-300 bg-white/30 dark:bg-gray-800/50 px-4 py-2 text-sm text-gray-800 dark:text-gray-200 backdrop-blur-md shadow-lg">
              {copiedMessage}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
