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

export default function TechStack() {
  const [showMore, setShowMore] = useState(false);

  const mainStack = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <SiReact className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  ];

  const moreStack = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "Git", icon: <SiGit className="text-red-500" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Netlify", icon: <SiNetlify className="text-green-500" /> },
    { name: "Railway", icon: <SiRailway className="text-purple-500" /> },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">⚡ Tech Stack</h2>

      {/* Main Stack */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {mainStack.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white dark:bg-neutral-900 transition"
          >
            <div className="text-4xl mb-2">{tech.icon}</div>
            <p className="text-lg font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>

      {/* More Stack - toggle */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6"
          >
            {moreStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white dark:bg-neutral-900 transition"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="text-sm font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-10 px-6 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition"
      >
        {showMore ? "View Less" : "View More"}
      </button>
    </section>
  );
}
