import React, { useState } from "react";
import Artwork from "../../assets/artwork2.jpg";
import resume from "../../assets/Razvan_Pelinari_CV.pdf";

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
import { motion } from "framer-motion";

// Modern gradient button
const ModernGradientButton = ({
  icon: Icon,
  children,
  onClick,
  href,
  download,
  ariaLabel,
}) => {
  const baseClasses = `flex items-center gap-2 rounded-full px-4 py-2 border-2 border-transparent 
     bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 animate-gradient 
     bg-[length:400%_400%] text-white dark:text-gray-100 transition-all duration-300 
     hover:scale-105 hover:translate-y-0.5 hover:shadow-[0_8px_20px_rgba(147,51,234,0.4)]`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={baseClasses}
        aria-label={ariaLabel}
      >
        {Icon && <Icon className="text-lg" />} {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} aria-label={ariaLabel}>
      {Icon && <Icon className="text-lg" />} {children}
    </button>
  );
};

// Copy button with internal feedback
const CopyButton = ({ icon: Icon, copyText, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 rounded-full px-4 py-2 border-2 border-transparent 
        bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 animate-gradient 
        bg-[length:400%_400%] text-white dark:text-gray-100 transition-all duration-300 
        hover:scale-105 hover:translate-y-0.5 hover:shadow-[0_8px_20px_rgba(147,51,234,0.4)]`}
    >
      {Icon && <Icon className="text-lg" />}
      {copied ? "Copied!" : label}
    </button>
  );
};

const Home = () => {
  const socialLinks = [
    {
      href: "https://github.com/RazvanPelinari",
      icon: BiLogoGithub,
      label: "GitHub Profile",
    },
    {
      href: "https://www.linkedin.com/in/razvan-pelinari/",
      icon: BiLogoLinkedin,
      label: "LinkedIn Profile",
    },
    {
      href: "https://www.instagram.com/razvan.peli",
      icon: BiLogoInstagram,
      label: "Instagram Profile",
    },
  ];

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
          className="overflow-visible m-4 box"
        >
          <img
            src={Artwork}
            alt="Răzvan Pelinari Portrait"
            loading="lazy"
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

          <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl lg:text-3xl font-semibold">
            <span
              className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 
               animate-gradient bg-[length:400%_400%] bg-clip-text text-transparent 
               drop-shadow-[0_-4px_6px_rgba(255,255,255,0.8)] 
               dark:drop-shadow-[0_-4px_6px_rgba(147,51,234,0.3)]
               inline-block min-w-[180px]"
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
            {socialLinks.map(({ href, icon: Icon, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
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

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <CopyButton
              icon={BiPhone}
              copyText="+40729244375"
              label="Call Me!"
            />
            <CopyButton
              icon={BiEnvelope}
              copyText="razvanpelinari@gmail.com"
              label="Email Me!"
            />
            <ModernGradientButton
              icon={BiCodeAlt}
              href="#Projects"
              ariaLabel="View Projects Section"
            >
              View Projects
            </ModernGradientButton>
            <ModernGradientButton
              icon={BiDownload}
              href={resume}
              download
              ariaLabel="Download Resume"
            >
              View Resume
            </ModernGradientButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
