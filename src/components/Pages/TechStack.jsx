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
  {
    name: "JavaScript",
    category: "Language",
    description: "The core programming language for web development.",
    icon: <SiJavascript className="text-yellow-400" />,
    main: true,
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "JavaScript with static typing for safer and scalable apps.",
    icon: <SiTypescript className="text-blue-500" />,
    main: true,
  },
  {
    name: "React",
    category: "Library",
    description: "UI library for building modern, component-based interfaces.",
    icon: <SiReact className="text-sky-400" />,
    main: true,
  },
  {
    name: "Next.js",
    category: "Framework",
    description: "React framework for SSR, SSG, and optimized web apps.",
    icon: <SiNextdotjs />,
  },
  {
    name: "TailwindCSS",
    category: "CSS Framework",
    description: "Utility-first CSS framework for fast and responsive design.",
    icon: <SiTailwindcss className="text-teal-400" />,
  },
  {
    name: "HTML5",
    category: "Markup",
    description: "Standard markup language for creating web pages.",
    icon: <SiHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS3",
    category: "Styling",
    description: "Stylesheet language for designing web pages.",
    icon: <SiCss3 className="text-blue-600" />,
  },
  {
    name: "Node.js",
    category: "Runtime",
    description: "JavaScript runtime for building server-side applications.",
    icon: <SiNodedotjs className="text-green-500" />,
  },
  {
    name: "Express",
    category: "Framework",
    description: "Minimal Node.js framework for building APIs.",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL database for scalable applications.",
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Powerful open-source relational database.",
    icon: <SiPostgresql className="text-blue-700" />,
  },
  {
    name: "Git",
    category: "Version Control",
    description: "Tool for tracking code changes and collaboration.",
    icon: <SiGit className="text-red-500" />,
  },
  {
    name: "Figma",
    category: "Design Tool",
    description: "Collaborative interface design and prototyping tool.",
    icon: <SiFigma className="text-pink-500" />,
  },
  {
    name: "Vercel",
    category: "Deployment",
    description: "Platform for deploying Next.js and frontend apps.",
    icon: <SiVercel />,
  },
  {
    name: "Netlify",
    category: "Deployment",
    description: "Hosting for static websites and serverless functions.",
    icon: <SiNetlify className="text-green-500" />,
  },
  {
    name: "Railway",
    category: "Deployment",
    description: "Cloud platform for deploying apps and databases.",
    icon: <SiRailway className="text-purple-500" />,
  },
];

export default function TechLibrary() {
  const [showMore, setShowMore] = useState(false);

  const mainStack = stackData.filter((item) => item.main);
  const moreStack = stackData.filter((item) => !item.main);

  return (
    <section
      id="TechStack"
      className="max-w-6xl mx-auto py-20 px-6 text-center"
    >
      <h2
        className="text-4xl md:text-5xl font-bold mb-6 
        bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 
        bg-clip-text text-transparent animate-gradient bg-[length:2000%_200%]"
      >
        📚 Tech Stack
      </h2>

      <p className="text-neutral-700 dark:text-neutral-300 mb-16 max-w-2xl mx-auto">
        A collection of languages, frameworks, databases, tools, and platforms I
        use to build modern and scalable applications.
      </p>

      {/* Main Stack */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
        {mainStack.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06 }}
            className="flex flex-col items-center p-6 rounded-2xl shadow-lg 
                       bg-white/70 dark:bg-purple-900/10
                       border border-purple-400/40 
                       backdrop-blur-md transition-all hover:shadow-purple-500/40"
          >
            <div className="text-5xl mb-4">{tech.icon}</div>
            <h3 className="text-xl font-semibold text-black dark:text-neutral-50">
              {tech.name}
            </h3>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              {tech.category}
            </p>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              {tech.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* More Stack */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6"
          >
            {moreStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06 }}
                className="flex flex-col items-center p-6 rounded-2xl shadow-lg 
                           bg-white/70 dark:bg-purple-900/10 
                           border border-purple-400/40 
                           backdrop-blur-md transition-all hover:shadow-purple-500/40"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-black dark:text-neutral-50">
                  {tech.name}
                </h3>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  {tech.category}
                </p>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
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
                   shadow-md hover:scale-105 transition-transform animate-gradient bg-[length:400%_400%]"
      >
        {showMore ? "View Less" : "View More"}
      </button>
    </section>
  );
}
