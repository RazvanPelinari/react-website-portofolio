import React from "react";

const experienceData = [
  {
    title: "Freelance Full Stack Developer & Personal Projects",
    company: "Active Development",
    timeframe: "Jan 2023 - Present (Ongoing)", // Updated timeframe
    description:
      "Successfully delivering **full-stack web solutions** for clients and driving my own **personal projects** (like this portfolio). Specializing in modern MERN/Next.js stack applications, I manage the full development lifecycle from design to secure deployment. This hands-on work ensures I am constantly sharp with the latest industry standards.",
    focus: "MERN Stack, Next.js, Secure APIs, Deployment (Netlify/Vercel)",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Final Year: Computer Science (B.S.)",
    company: "University Danubius",
    timeframe: "Oct 2023 - Present (Final Year)", // Updated start year
    description:
      "Currently in the final year, building on a strong foundation in **core Computer Science principles**, including algorithms, data structures, and object-oriented programming. University projects involve team collaboration and applying complex logic in C++ and Java, complementing my front-end expertise.",
    focus: "Software Engineering, Advanced Algorithms, Team Project Management",
    color: "text-fuchsia-600 dark:text-fuchsia-400",
  },
  {
    title: "Introductory Programming & Logic",
    company: "Self-Guided Study & Projects",
    timeframe: "2019 - 2022",
    description:
      "The initial phase of my development journey. This period was dedicated to mastering the fundamentals of HTML, CSS, and basic JavaScript. It laid the crucial groundwork for understanding web standards and structure before moving to modern frameworks.",
    focus: "HTML5, CSS3, Vanilla JavaScript Fundamentals, Web Standards",
    color: "text-blue-600 dark:text-blue-400",
  },
];

const Experience = () => {
  return (
    <div
      id="Experience"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 
                 p-10 md:p-15 lg:p-20 scroll-mt-20 md:scroll-mt-0 
                 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      <h1 className="text-center text-5xl font-light">Professional Timeline</h1>

      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10 w-full max-w-4xl">
        <div className="flex-1 space-y-0">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative space-y-1 border-l-2 border-gray-300 dark:border-gray-700 p-8 text-left transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-400">
                {exp.title}
              </h3>
              <p className="font-light text-lg text-gray-600 dark:text-gray-300">
                {exp.company}
                <span className="text-sm ml-4 font-normal text-fuchsia-500 dark:text-fuchsia-400">
                  ({exp.timeframe})
                </span>
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
                {exp.description}
              </p>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500 mt-1">
                **Focus:** {exp.focus}
              </p>

              {/* Timeline dot */}
              <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-purple-500 ring-4 ring-white dark:ring-gray-900"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
