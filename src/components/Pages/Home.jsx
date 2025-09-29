import React, { useState } from "react";
import Artwork from "../assets/logo.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Typewriter from "../Animations/Typewriter";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("razvanpelinari@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="Home"
      className="relative flex flex-col items-center justify-center py-12 text-center"
    >
      {/* Avatar with animation */}
      <motion.img
        src={Artwork}
        alt="Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-[250px] sm:w-[300px] rounded-full shadow-lg dark:shadow-purple-900/50"
      />

      {/* Heading with waving emoji */}
      <h1
        className="mt-6 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
        animate-gradient bg-[length:400%_400%] bg-clip-text text-4xl font-semibold text-transparent 
        md:text-5xl lg:text-6xl flex items-center justify-center gap-2
        drop-shadow-[0_-4px_6px_rgba(255,255,255,0.8)]
        dark:drop-shadow-[0_-4px_6px_rgba(147,51,234,0.3)]"
      >
        Hi, I'm Răzvan
        <span className="inline-block align-middle text-4xl md:text-5xl lg:text-6xl">
          👋
        </span>
      </h1>

      {/* Inline Typewriter */}
      <h3
        className="mt-3 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
        animate-gradient bg-[length:400%_400%] bg-clip-text text-xl font-semibold text-transparent 
        md:text-2xl lg:text-3xl flex items-center justify-center gap-2
        drop-shadow-[0_-4px_6px_rgba(255,255,255,0.8)]
        dark:drop-shadow-[0_-4px_6px_rgba(147,51,234,0.3)]"
      >
        <span>I'm a</span>
        <Typewriter
          options={{
            strings: ["Web Developer", "Frontend Developer", "Programmer"],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>

      {/* Short bio */}
      <p className="mt-4 max-w-xl text-base md:text-lg text-gray-700 dark:text-gray-300 mx-auto leading-relaxed">
        Passionate about crafting modern, performant web apps with{" "}
        <span className="font-semibold">Next.js, React & Tailwind</span>. I
        focus on building interactive experiences with clean code and sleek
        design.
      </p>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center gap-6">
        <a
          href="https://github.com/razvanpelinari"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:shadow-[0_0_10px_rgba(236,72,153,0.7)]"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/razvanpelinari"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:shadow-[0_0_10px_rgba(236,72,153,0.7)]"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://instagram.com/razvan.peli"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:shadow-[0_0_10px_rgba(236,72,153,0.7)]"
        >
          <FaInstagram size={28} />
        </a>
      </div>

      {/* Copy Email Button */}
      <button
        onClick={handleCopyEmail}
        className="mt-6 rounded-lg bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 
        animate-gradient bg-[length:400%_400%] px-5 py-2 text-white font-medium shadow-md 
        hover:scale-105 transition-transform"
      >
        Copy Email
      </button>

      {/* Copy confirmation */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="mt-3 rounded-lg bg-green-500 px-4 py-2 text-white shadow-md"
          >
            Email copied!
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Button */}
      <a
        href="#Projects"
        className="mt-8 inline-block rounded-lg bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
        animate-gradient bg-[length:400%_400%] px-6 py-3 font-semibold text-white shadow-md 
        hover:scale-105 transition-transform"
      >
        View My Projects
      </a>
    </section>
  );
}
