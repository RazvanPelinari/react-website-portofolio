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

  const projects = [
    {
      title: "Villa Otto",
      tech: "React • Tailwind • Vite",
      desc: `A personal project built for a tourism hiring business. The website presents 
             Villa Otto with a modern, responsive design highlighting accommodation 
             details, contact information, and booking opportunities.`,
      projectUrl: "https://villaotto.netlify.app",
      github: "https://github.com/RazvanPelinari/villa-otto",
      url: "https://villaotto.netlify.app",
    },
    {
      title: "Kultur Clothing",
      tech: "React • Tailwind • Vite • i18n",
      desc: `Kultur Clothing is a modern-luxury e-commerce website designed to showcase 
             and sell premium fashion items with multilingual support, interactive cart, 
             smooth animations, and responsive layouts.`,
      projectUrl: "https://kulturclothing.netlify.app",
      github: "https://github.com/RazvanPelinari/Kultur-Shop",
      url: "https://kulturclothing.netlify.app",
    },

    {
      title: "Pizzeria Next",
      tech: "Next.js • Tailwind CSS • React Context",
      desc: "Pizzeria Next is a full-featured, responsive e-commerce application for ordering pizza. It features a modern interface, a functional shopping cart, and a realistic, client-side order tracking page with live status and progress simulation.",
      projectUrl: "https://pizzeria-next.netlify.app/",
      github: "https://github.com/razvanpelinari/pizzeria-app",
      url: "https://pizzeria-next.netlify.app",
    },

    {
      title: "Your Project Here",
      tech: "Let's Talk!",
      desc: `Interested in collaborating on a project? I'm open to freelance work
             and new opportunities. Reach out and let's build something amazing together!`,
      contact: "#Contact",
    },
  ];

  return (
    <div
      id="Projects"
      className="min-h-screen w-full flex flex-col 
                 items-center justify-center gap-20 p-10 md:p-12 xl:p-24 
                 bg-white dark:bg-gray-900 text-black dark:text-white 
                 transition-colors duration-500 scroll-mt-20 md:scroll-mt-0 "
    >
      <h1 className="text-center text-5xl font-light translate-y-0 md:translate-y-[-0px] xl:translate-y-[-140px]">
        Projects
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-2xl p-8 space-y-4
                       border border-purple-400 bg-white dark:bg-gray-800
                       shadow-md hover:shadow-xl transition-all duration-300
                       hover:-translate-y-1"
          >
            {/* Content */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                {project.title}
              </h2>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {project.tech}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.desc}
              </p>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap justify-center items-center gap-1 flex-col">
              {project.projectUrl && (
                <button
                  onClick={() => handleOpenModal(project.projectUrl)}
                  className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 
                             animate-gradient bg-[length:400%_400%]
                             shadow-md hover:shadow-lg transition-all duration-200 w-57"
                >
                  View Project
                </button>
              )}
              <div className="pt-2 flex flex-wrap justify-center gap-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg border border-purple-500 text-purple-600 
                             dark:text-purple-400 hover:bg-purple-500 hover:text-white 
                             transition-all duration-200"
                  >
                    GitHub
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg border border-purple-500 text-purple-600 
                             dark:text-purple-400 hover:bg-purple-500 hover:text-white 
                             transition-all duration-200"
                  >
                    Go to site
                  </a>
                )}
                {project.contact && (
                  <a
                    href={project.contact}
                    className="px-5 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-600 
                             dark:text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white 
                             transition-all duration-200"
                  >
                    Contact Me
                  </a>
                )}
              </div>
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
