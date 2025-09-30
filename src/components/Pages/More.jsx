import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Code, Rocket } from "lucide-react";

export default function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  const coreSkills = [
    { name: "JavaScript", level: "Advanced", percent: 90 },
    { name: "React.js", level: "Advanced", percent: 85 },
    { name: "TypeScript", level: "Intermediate", percent: 70 },
    { name: "SCSS", level: "Intermediate", percent: 75 },
  ];

  const extraSkills = [
    { name: "Docker", level: "Intermediate", percent: 40 },
    { name: "Node.js", level: "Intermediate", percent: 35 },
    { name: "MongoDB", level: "Intermediate", percent: 30 },
  ];

  const learningNow = [
    {
      name: "Angular",
      level: "Learning",
      reason:
        "I want to understand another major front-end framework and broaden my perspective beyond React. This helps me compare approaches and improve as a well-rounded developer.",
    },
    {
      name: "PostgreSQL",
      level: "Learning",
      reason:
        "To gain stronger experience in relational databases, improve my backend skills, and handle structured data more effectively in full-stack applications.",
    },
    {
      name: "Flutter",
      level: "Learning",
      reason:
        "To expand into cross-platform mobile development and build apps that run seamlessly on both iOS and Android using a single codebase.",
    },
  ];

  const renderSkill = (skill) => (
    <div key={skill.name} className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-purple-600 dark:text-purple-400">
          {skill.level}
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
      className="p-6 lg:p-12 max-w-6xl mx-auto space-y-8 scroll-mt-10 md:scroll-mt-0"
    >
      {/* Top row: About + Learning */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* About Me */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-4 flex flex-col h-full transition-colors duration-500">
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

        {/* Learning Now */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 flex flex-col h-full">
          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400 flex items-center gap-2">
            <Rocket className="w-6 h-6" />
            What I’m Learning Right Now
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I believe in continuous learning. Exploring new tools not only helps
            me grow technically but also gives me the flexibility to adapt to
            different project needs. Right now, I’m focusing on technologies
            that complement my front-end skills and open doors to full-stack and
            cross-platform development.
          </p>
          <ul className="space-y-4">
            {learningNow.map((tech) => (
              <li key={tech.name} className="space-y-1">
                <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                  <span>{tech.name}</span>
                  <span className="text-purple-600 dark:text-purple-400">
                    {tech.level}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tech.reason}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Skills & Expertise - full width */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400 flex items-center gap-2">
          <Code className="w-6 h-6" />
          My Skills & Expertise
        </h2>
        <div className="space-y-4">
          {coreSkills.map(renderSkill)}

          <AnimatePresence>
            {showMore &&
              extraSkills.map((skill, i) => (
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
