import React, { useState } from "react";
import ProjectModal from "../Navigation/ProjectModal";
import { motion, AnimatePresence } from "framer-motion";
import { BiLinkExternal, BiCodeAlt, BiMouse } from "react-icons/bi";

// --- PROJECT DATA STRUCTURE ---
const projects = [
  {
    title: "Villa Otto",
    category: "Client Work",
    tags: ["React", "Tailwind CSS", "Vite", "Netlify"],
    desc: `A personal project built for a tourism hiring business. The website presents 
             Villa Otto with a modern, responsive design highlighting accommodation 
             details, contact information, and booking opportunities.`,
    projectUrl: "https://villaotto.netlify.app",
    github: "https://github.com/RazvanPelinari/villa-otto",
    url: "https://villaotto.netlify.app",
  },
  {
    title: "Kultur Clothing",
    category: "Personal Project",
    tags: ["Next.js", "Tailwind CSS", "Redux", "i18n"],
    desc: `Kultur Clothing is a modern-luxury e-commerce website designed to showcase 
             and sell premium fashion items with multilingual support, interactive cart, 
             smooth animations, and responsive layouts.`,
    projectUrl: "https://kulturclothing.netlify.app",
    github: "https://github.com/RazvanPelinari/Kultur-Shop",
    url: "https://kulturclothing.netlify.app",
  },
  {
    title: "Pizzeria Next",
    category: "Personal Project",
    tags: ["Next.js", "Tailwind CSS", "React Context"],
    desc: "Pizzeria Next is a full-featured, responsive e-commerce application for ordering pizza. It features a modern interface, a functional shopping cart, and a realistic, client-side order tracking page with live status and progress simulation.",
    projectUrl: "https://pizzeria-next.netlify.app/",
    github: "https://github.com/razvanpelinari/pizzeria-app",
    url: "https://pizzeria-next.netlify.app",
  },
  {
    title: "University Management System",
    category: "University Project",
    tags: ["Java", "Spring Boot", "PostgreSQL", "React"],
    desc: "A final year project focused on building a robust full-stack application for managing student enrollments, course schedules, and grades. This project emphasized backend security, relational database schema design, and API optimization.",
    projectUrl: "https://github.com/razvanpelinari/uni-management-system",
    github: "https://github.com/razvanpelinari/uni-management-system",
    url: null,
  },
  {
    title: "Start Your Project",
    category: "Open for Work",
    tags: ["Let's Talk!", "Freelance"],
    desc: `Interested in collaborating on a project? I'm open to freelance work
             and new opportunities. Reach out and let's build something amazing together!`,
    contact: "#Contact",
    url: null,
    github: null,
    projectUrl: null,
  },
];

const FILTER_OPTIONS = [
  "All",
  "Client Work",
  "Personal Project",
  "University Project",
  "Open for Work",
];

// --- PROJECT CARD COMPONENT ---
const ProjectCard = ({ project, idx, handleOpenModal }) => {
  const isDemoAvailable = !!project.projectUrl;
  const isLiveSiteAvailable = !!project.url;
  const isContactCard = !!project.contact;

  let primaryActionText = "View Details";
  if (isContactCard) {
    primaryActionText = "Start a Project";
  } else if (isDemoAvailable) {
    primaryActionText = "View Demo";
  }

  const primaryActionUrl = project.contact || project.projectUrl || "#";

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      className="relative flex flex-col rounded-xl shadow-2xl bg-white dark:bg-gray-800 
                 border border-purple-400/50 hover:shadow-purple-500/40 
                 hover:-translate-y-1 transition-all duration-300 overflow-hidden group min-h-[300px]"
    >
      {/* CATEGORY TAG */}
      <span
        className="absolute top-0 right-0 px-4 py-1.5 text-xs font-semibold rounded-tr-xl rounded-bl-xl
                       bg-fuchsia-600 text-white shadow-md z-10"
      >
        {project.category}
      </span>

      {/* CONTENT & ACTIONS AREA */}
      <div className="p-6 pt-10 flex flex-col flex-grow space-y-4">
        <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          {project.title}
        </h2>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-medium px-3 py-1 rounded-full 
                                       bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
          {project.desc}
        </p>

        {/* BUTTONS (Always at the bottom) */}
        <div className="pt-4 flex flex-col gap-3">
          {/* PRIMARY ACTION: View Demo / Start a Project */}
          {(isDemoAvailable || isContactCard) && (
            <a
              href={primaryActionUrl}
              target={isContactCard ? "_self" : "_blank"}
              rel="noopener noreferrer"
              onClick={
                !isContactCard && isDemoAvailable
                  ? (e) => {
                      e.preventDefault();
                      handleOpenModal(project.projectUrl);
                    }
                  : undefined
              }
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white 
                             bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 
                             animate-gradient bg-[length:400%_400%] shadow-xl shadow-fuchsia-500/50
                             hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full text-center font-bold text-lg"
            >
              {primaryActionText}
              {isContactCard ? <BiLinkExternal /> : <BiMouse />}
            </a>
          )}

          {/* ⭐️ SECONDARY ACTIONS ROW (Visit Site and GitHub) ⭐️ */}
          {/* Only render this container if at least one link is available */}
          {(isLiveSiteAvailable || project.github) && (
            <div
              className={`flex ${
                isLiveSiteAvailable && project.github
                  ? "justify-between"
                  : "justify-center"
              } gap-3`}
            >
              {/* Visit Site Button */}
              {isLiveSiteAvailable && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-purple-400 text-purple-600 
                                 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/40
                                 transition-all duration-200 text-sm font-medium flex-1 justify-center" // flex-1 ensures even spacing
                >
                  <BiLinkExternal /> Site
                </a>
              )}

              {/* GitHub Button */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-400 text-gray-600 
                                 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 
                                 transition-all duration-200 text-sm font-medium flex-1 justify-center" // flex-1 ensures even spacing
                >
                  <BiCodeAlt /> GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN PROJECTS COMPONENT ---
const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProjectUrl, setCurrentProjectUrl] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const handleOpenModal = (url) => {
    setCurrentProjectUrl(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProjectUrl("");
  };

  // Filter logic
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <div
      id="Projects"
      className="min-h-screen w-full flex flex-col items-center justify-start gap-10 p-10 md:p-12 xl:p-24 
                 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500 
                 scroll-mt-20 md:scroll-mt-0"
    >
      <h1 className="text-center text-5xl font-light">Featured Projects</h1>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 w-full max-w-4xl px-4">
        {FILTER_OPTIONS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
              ${
                activeFilter === filter
                  ? "bg-fuchsia-600 text-white shadow-md shadow-fuchsia-500/40 hover:bg-fuchsia-700"
                  : "bg-gray-200 text-gray-700 hover:bg-fuchsia-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-fuchsia-900/50"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              idx={idx}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </AnimatePresence>

        {/* Display message if filter results in no projects */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key="no-results"
            className="md:col-span-2 lg:col-span-3 text-center p-10 text-gray-500 dark:text-gray-400 w-full"
          >
            No **{activeFilter}** projects found. Try selecting another filter.
          </motion.div>
        )}
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
