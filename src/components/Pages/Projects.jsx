import React, { useState } from "react";
import ProjectModal from "../Navigation/ProjectModal";

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
                 items-center justify-center gap-20 p-10 md:p-16 xl:p-32 scroll-mt-20 md:scroll-mt-0
                 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500"
    >
      <h1 className="text-center text-5xl font-light scroll-mt-14 md:scroll-mt-0">
        Projects
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {[
          {
            title: "Villa Otto",
            tech: "React • Tailwind • Vite",
            desc: `A personal project built for a tourism hiring business. The website presents 
                 Villa Otto. With a modern, responsive design, highlighting accommodation 
                 details, contact information, and booking opportunities. Created 
                 to practice full-stack concepts while solving real-world needs in 
                 the hospitality sector.`,
            projectUrl: "https://villaotto.netlify.app",
            github: "https://github.com/RazvanPelinari/villa-otto",
          },
          {
            title: "Kultur Clothing",
            tech: "React • Tailwind • Vite • i18n",
            desc: `Kultur Clothing is a modern-luxury e-commerce website designed to showcase 
                 and sell premium fashion items. The project features a sleek shopping 
                 experience with a multilingual interface, interactive cart, smooth 
                 animations, and responsive layouts. Built to explore advanced 
                 front-end development and branding for online retail.`,
            projectUrl: "https://kulturclothing.netlify.app",
            github: "https://github.com/RazvanPelinari/Kultur-Shop",
          },
        ].map((project, idx) => (
          <div
            key={idx}
            className="text-left space-y-4 border-2 border-purple-500 rounded-lg
                       px-8 py-10 flex flex-col justify-between cursor-pointer
                       transition-all duration-200 hover:scale-105
                       hover:bg-purple-100 dark:hover:bg-purple-900/50
                       hover:text-black dark:hover:text-white"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">{project.title}</h1>
              <h3 className="text-xl text-gray-700 dark:text-gray-300">
                {project.tech}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.desc}
              </p>
            </div>

            <div className="pt-6 flex justify-center gap-4">
              <button
                onClick={() => handleOpenModal(project.projectUrl)}
                className="px-6 py-2 text-white bg-purple-500 rounded-lg shadow-md
                           hover:bg-purple-600 hover:shadow-lg transition-all duration-200"
              >
                View Project
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-purple-600 border border-purple-500 rounded-lg
                           hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        show={showModal}
        onClose={handleCloseModal}
        projectUrl={currentProjectUrl}
      />
    </div>
  );
};

export default Projects;
