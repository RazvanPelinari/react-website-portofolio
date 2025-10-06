import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Code, Rocket } from "lucide-react";

// react-icons
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiSass,
  SiNextdotjs,
  SiDocker,
  SiNodedotjs,
  SiMongodb,
  SiNetlify,
  SiVercel,
  SiGit,
  SiGithub,
  SiAngular,
  SiPostgresql,
  SiFlutter,
  SiVuedotjs,
  SiPhp,
} from "react-icons/si";

export default function AboutMe() {
  const [showMore, setShowMore] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Core and extra skills
  const coreSkills = [
    {
      name: "JavaScript",
      percent: 90,
      icon: <SiJavascript className="text-yellow-500 w-5 h-5" />,
    },
    {
      name: "React.js",
      percent: 85,
      icon: <SiReact className="text-blue-500 w-5 h-5" />,
    },
    {
      name: "TypeScript",
      percent: 70,
      icon: <SiTypescript className="text-blue-600 w-5 h-5" />,
    },
    {
      name: "SCSS",
      percent: 75,
      icon: <SiSass className="text-pink-400 w-5 h-5" />,
    },
  ];

  const extraSkills = [
    {
      name: "Next.js",
      percent: 60,
      icon: (
        <SiNextdotjs className="text-gray-900 dark:text-gray-100 w-5 h-5" />
      ),
    },
    {
      name: "Docker",
      percent: 50,
      icon: <SiDocker className="text-blue-400 w-5 h-5" />,
    },
    {
      name: "Node.js",
      percent: 55,
      icon: <SiNodedotjs className="text-green-600 w-5 h-5" />,
    },
    {
      name: "MongoDB",
      percent: 55,
      icon: <SiMongodb className="text-green-500 w-5 h-5" />,
    },
    {
      name: "Netlify",
      percent: 65,
      icon: <SiNetlify className="text-cyan-500 w-5 h-5" />,
    },
    {
      name: "Vercel",
      percent: 65,
      icon: <SiVercel className="text-black dark:text-white w-5 h-5" />,
    },
    {
      name: "Git",
      percent: 80,
      icon: <SiGit className="text-orange-500 w-5 h-5" />,
    },
    {
      name: "GitHub",
      percent: 80,
      icon: <SiGithub className="text-gray-800 dark:text-gray-200 w-5 h-5" />,
    },
  ];

  const learningNow = [
    {
      name: "Angular",
      level: "Learning",
      reason:
        "Understanding another major front-end framework to broaden perspective.",
      icon: <SiAngular className="text-red-600 w-5 h-5" />,
    },
    {
      name: "PostgreSQL",
      level: "Learning",
      reason: "Strengthening backend with relational databases.",
      icon: <SiPostgresql className="text-blue-600 w-5 h-5" />,
    },
    {
      name: "Flutter",
      level: "Learning",
      reason: "Cross-platform mobile apps with one codebase.",
      icon: <SiFlutter className="text-sky-500 w-5 h-5" />,
    },
    {
      name: "Vue 3",
      level: "Learning",
      reason: "Expanding front-end versatility with another modern framework.",
      icon: <SiVuedotjs className="text-green-500 w-5 h-5" />,
    },
    {
      name: "PHP",
      level: "Learning",
      reason:
        "Building a stronger backend foundation with a widely-used language.",
      icon: <SiPhp className="text-indigo-600 w-5 h-5" />,
    },
  ];

  // Function to determine level based on percentage
  const getLevel = (percent) => {
    if (percent >= 85) return "Advanced";
    if (percent >= 65) return "Intermediate";
    return "Beginner";
  };

  // Sort skills by percentage descending
  const sortedCore = [...coreSkills].sort((a, b) => b.percent - a.percent);
  const sortedExtra = [...extraSkills].sort((a, b) => b.percent - a.percent);

  const renderSkill = (skill) => (
    <div key={skill.name} className="space-y-1">
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          {skill.icon}
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
        </div>
        <span className="text-purple-600 dark:text-purple-400">
          {getLevel(skill.percent)}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.percent}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );

  return (
    <div
      id="MoreInfo"
      className="p-6 lg:p-12 max-w-6xl mx-auto space-y-8 scroll-mt-20 md:scroll-mt-0"
    >
      {/* Top row: About + Learning */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* About Me */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-4 flex flex-col h-full">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-500" />A Little More About
            Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Hello! I’m a web developer based in Galați, Romania, with a strong
            focus on building clean, efficient, and user-friendly websites.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My journey into coding started with a curiosity about how the web
            works and quickly developed into a passion for creating thoughtful
            digital solutions.
          </p>
        </section>

        {/* Learning Now Section */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 flex flex-col h-full">
          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400 flex items-center gap-2">
            <Rocket className="w-6 h-6" />
            What I’m Learning Right Now
          </h2>

          <ul className="space-y-4">
            <AnimatePresence>
              {learningNow
                .slice(0, expanded ? learningNow.length : 3)
                .map((tech, i) => (
                  <motion.li
                    key={tech.name}
                    className="space-y-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className="flex justify-between items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                      <span className="text-purple-600 dark:text-purple-400">
                        {tech.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {tech.reason}
                    </p>
                  </motion.li>
                ))}
            </AnimatePresence>
          </ul>

          {learningNow.length > 3 && (
            <motion.button
              onClick={() => setExpanded(!expanded)}
              className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline self-start"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              {expanded ? "View Less" : "View More"}
            </motion.button>
          )}
        </section>
      </div>

      {/* Skills & Expertise */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400 flex items-center gap-2">
          <Code className="w-6 h-6" />
          My Skills & Expertise
        </h2>

        <div className="space-y-4">
          {sortedCore.map(renderSkill)}

          <AnimatePresence>
            {showMore &&
              sortedExtra.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  {renderSkill(skill)}
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          {showMore ? "View Less" : "View More"}
        </motion.button>
      </section>
    </div>
  );
}
