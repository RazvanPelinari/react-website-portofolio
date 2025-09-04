import React, { useState } from "react";
import ProjectModal from "./ProjectModal"; // Import the new modal component

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProjectUrl, setCurrentProjectUrl] = useState("");

  const handleOpenModal = (url) => {
    setCurrentProjectUrl(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProjectUrl("");
  };

  return (
    <div
      id="Projects"
      className="min-h-screen w-full flex flex-col 
    items-center justify-center gap-20 p-10 md:p-16 xl:p-32 scroll-mt-14 md:scroll-mt-0 bg-gray-100/75"
    >
      <h1 className="text-center text-5xl font-light scroll-mt-14 md:scroll-mt-0 ">
        Projects
      </h1>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
      gap-5"
      >
        <div
          className="text-left space-y-4 border-2 hover:scale-105 
  transition-all duration-200 cursor-pointer px-8 py-10
  border-purple-500 rounded-lg hover:bg-purple-100 flex flex-col justify-between"
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">Villa Otto</h1>
            <h3 className="text-xl text-gray-700">React • Tailwind • Vite</h3>
            <p className="text-sm text-gray-600">
              A personal project built for a tourism hiring business. The
              website presents{" "}
              <span className="font-black text-purple-500">Villa Otto</span>.
              With a modern, responsive design, highlighting accommodation
              details, contact information, and booking opportunities. Created
              to practice full-stack concepts while solving real-world needs in
              the hospitality sector.
            </p>
          </div>

          {/* Buttons section */}
          <div className="pt-6 flex justify-center gap-4">
            {/* 🔗 This button now opens the modal */}
            <button
              onClick={() => handleOpenModal("https://villaotto.netlify.app")}
              className="px-6 py-2 text-white bg-purple-500 rounded-lg shadow-md 
      hover:bg-purple-600 hover:shadow-lg transition-all duration-200"
            >
              View Project
            </button>
            <a
              href="https://github.com/RazvanPelinari/villa-otto"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-purple-600 border border-purple-500 rounded-lg 
      hover:bg-purple-500 hover:text-white transition-all duration-200"
            >
              GitHub
            </a>
          </div>
        </div>

        <div
          className="text-left space-y-4 border-2 hover:scale-105 
  transition-all duration-200 cursor-pointer px-8 py-10
  border-purple-500 rounded-lg hover:bg-purple-100 flex flex-col justify-between"
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">Kultur Clothing</h1>
            <h3 className="text-xl text-gray-700">
              React • Tailwind • Vite • i18n
            </h3>
            <p className="text-sm text-gray-600">
              <span className="font-black text-purple-500">
                Kultur Clothing
              </span>{" "}
              is a modern-luxury e-commerce website designed to showcase and
              sell premium fashion items. The project features a sleek shopping
              experience with a multilingual interface, interactive cart, smooth
              animations, and responsive layouts. Built to explore advanced
              front-end development and branding for online retail.
            </p>
          </div>

          {/* Buttons section */}
          <div className="pt-6 flex justify-center gap-4">
            {/* 🔗 This button also opens the modal */}
            <button
              onClick={() =>
                handleOpenModal("https://kulturclothing.netlify.app")
              }
              className="px-6 py-2 text-white bg-purple-500 rounded-lg shadow-md 
      hover:bg-purple-600 hover:shadow-lg transition-all duration-200"
            >
              View Project
            </button>
            <a
              href="https://github.com/RazvanPelinari/Kultur-Shop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-purple-600 border border-purple-500 rounded-lg 
      hover:bg-purple-500 hover:text-white transition-all duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* The Modal */}
      <ProjectModal
        show={showModal}
        onClose={handleCloseModal}
        projectUrl={currentProjectUrl}
      />
    </div>
  );
};

export default Projects;
