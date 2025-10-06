import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiRailway,
} from "react-icons/si";

const stackData = [
  // --- Languages & Core ---
  {
    name: "JavaScript",
    category: "Language",
    group: "Languages & Core",
    description: "The core programming language for web development.",
    icon: <SiJavascript className="text-yellow-400" />,
    main: true,
  },
  {
    name: "TypeScript",
    category: "Language",
    group: "Languages & Core",
    description: "JavaScript with static typing for safer and scalable apps.",
    icon: <SiTypescript className="text-blue-500" />,
    main: true,
  },
  {
    name: "HTML5",
    category: "Markup",
    group: "Languages & Core",
    description: "Semantic markup for structuring content.",
    icon: <SiHtml5 className="text-orange-500" />,
    main: true,
  },
  {
    name: "CSS3",
    category: "Styling",
    group: "Languages & Core",
    description: "Styling and animation for modern, responsive designs.",
    icon: <SiCss3 className="text-blue-600" />,
    main: true,
  },

  // --- Frontend Frameworks ---
  {
    name: "React",
    category: "Library",
    group: "Frontend Frameworks",
    description: "UI library for building modern, component-based interfaces.",
    icon: <SiReact className="text-sky-400" />,
    main: true,
  },
  {
    name: "Next.js",
    category: "Framework",
    group: "Frontend Frameworks",
    description:
      "React framework for production-grade, full-stack applications.",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    main: true,
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    group: "Frontend Frameworks",
    description: "Utility-first CSS framework for rapid UI development.",
    icon: <SiTailwindcss className="text-cyan-500" />,
    main: true,
  },

  // --- Backend & Databases ---
  {
    name: "Node.js",
    category: "Runtime",
    group: "Backend & Databases",
    description:
      "JavaScript runtime for building fast, scalable server-side applications.",
    icon: <SiNodedotjs className="text-green-500" />,
    main: false,
  },
  {
    name: "Express.js",
    category: "Framework",
    group: "Backend & Databases",
    description: "Minimalist web framework for Node.js to build APIs.",
    icon: <SiExpress className="text-gray-700 dark:text-gray-400" />,
    main: false,
  },
  {
    name: "MongoDB",
    category: "Database",
    group: "Backend & Databases",
    description: "NoSQL database used for flexible, high-volume data storage.",
    icon: <SiMongodb className="text-green-600" />,
    main: false,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    group: "Backend & Databases",
    description: "Powerful, open-source relational database system.",
    icon: <SiPostgresql className="text-blue-700" />,
    main: false,
  },

  // --- Tools & Deployment ---
  {
    name: "Git",
    category: "Version Control",
    group: "Tools & Deployment",
    description:
      "System for tracking changes in code during software development.",
    icon: <SiGit className="text-orange-600" />,
    main: false,
  },
  {
    name: "Figma",
    category: "Design",
    group: "Tools & Deployment",
    description: "Vector graphics editor for UI/UX design and prototyping.",
    icon: <SiFigma className="text-fuchsia-500" />,
    main: false,
  },
  {
    name: "Vercel",
    category: "Deployment",
    group: "Tools & Deployment",
    description:
      "Platform for automatic deployment of Next.js and other frontend applications.",
    icon: <SiVercel className="text-black dark:text-white" />,
    main: false,
  },
  {
    name: "Netlify",
    category: "Deployment",
    group: "Tools & Deployment",
    description: "Serverless platform for hosting static sites and frontends.",
    icon: <SiNetlify className="text-teal-500" />,
    main: false,
  },
  {
    name: "Railway",
    category: "Deployment",
    group: "Tools & Deployment",
    description:
      "Platform for deploying full-stack applications and databases quickly.",
    icon: <SiRailway className="text-sky-600" />,
    main: false,
  },
];

const mainStack = stackData.filter((tech) => tech.main);
const moreStack = stackData.filter((tech) => !tech.main);

const groupedMainStack = mainStack.reduce((acc, tech) => {
  (acc[tech.group] = acc[tech.group] || []).push(tech);
  return acc;
}, {});

const TechStack = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      id="TechStack"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-10 p-10 
                 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500 scroll-mt-20 md:scroll-mt-0"
    >
      <h1 className="text-center text-5xl font-light">My Technical Stack</h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
        I prioritize a modern, type-safe, and highly performant stack. Here are
        the core technologies I work with daily.
      </p>

      {/* Main Stack: Grouped by Category */}
      <div className="w-full max-w-4xl space-y-8">
        {Object.entries(groupedMainStack).map(([groupName, technologies]) => (
          <div key={groupName}>
            <h2 className="text-2xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              {groupName}
            </h2>
            <motion.div
              layout
              // ⭐️ CHANGE 1: Use 3 columns by default on mobile, 4 on small, 5 on medium
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
            >
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  // ⭐️ Change 2: Reduced padding on mobile (p-4 vs original p-6)
                  className="flex flex-col items-center p-4 rounded-2xl shadow-xl 
                             bg-white dark:bg-gray-800 border border-purple-400/40 
                             transition-all duration-300 hover:shadow-purple-500/40"
                >
                  <div className="text-3xl sm:text-5xl mb-3">{tech.icon}</div>
                  <h3 className="text-sm sm:text-xl font-semibold text-black dark:text-neutral-50 text-center">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                    {tech.category}
                  </p>

                  {/* ⭐️ CHANGE 3: Hide description on the smallest screens, show from sm: up */}
                  <p className="mt-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 text-center hidden sm:block">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Secondary Stack: Toggle to view more */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            // Apply 3-column layout to the secondary stack as well
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 w-full max-w-4xl mt-8"
          >
            {moreStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06 }}
                className="flex flex-col items-center p-4 rounded-2xl shadow-lg 
                           bg-white/70 dark:bg-purple-900/10 
                           border border-purple-400/40 
                           backdrop-blur-md transition-all hover:shadow-purple-500/40"
              >
                <div className="text-3xl sm:text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-sm sm:text-lg font-semibold text-black dark:text-neutral-50 text-center">
                  {tech.name}
                </h3>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  {tech.category}
                </p>
                {/* Hide description on the smallest screens, show from sm: up */}
                <p className="mt-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 text-center hidden sm:block">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-12 px-8 py-3 rounded-lg font-medium text-white 
                   bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 
                   animate-gradient bg-[length:400%_400%] transition-all duration-300 
                   hover:scale-[1.02] active:scale-95 shadow-lg shadow-purple-500/50 dark:shadow-fuchsia-500/30"
      >
        {showMore ? "Hide Secondary Tools" : "Show More Tools & Infrastructure"}
      </button>
    </div>
  );
};

export default TechStack;
