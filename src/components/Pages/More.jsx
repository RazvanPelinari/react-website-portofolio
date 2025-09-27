import React from "react";
import Artwork from "../../assets/artwork2.jpg";

const MoreInfo = () => {
  return (
    <div
      id="MoreInfo"
      className="w-full px-2 py-12 md:px-4 lg:px-6 min-h-screen scroll-mt-20 md:scroll-mt-0 
                 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Main "About Me" Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-medium text-gray-800 dark:text-gray-100 border-b-2 border-purple-400">
              A Little More About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I’m a web developer based in Galați, Romania, with a strong
              focus on building clean, efficient, and user-friendly websites. My
              journey into coding started with a curiosity about how the web
              works and quickly developed into a passion for creating thoughtful
              digital solutions.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="box2 overflow-visible m-4">
              <img
                src={Artwork}
                alt="A personal artistic illustration of myself"
                className="object-cover rounded-full w-60 h-60 overflow-hidden shadow-lg dark:shadow-purple-900/50 transition-shadow duration-500"
              />
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 dark:border-gray-700" />

        {/* Skills & Expertise */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-400 border-b border-gray-300 dark:border-gray-700 pb-1">
            My Skills & Expertise
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
            <p>
              I specialize in creating modern, responsive web applications using{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                React.js
              </span>
              . I have a strong understanding of core{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                JavaScript
              </span>{" "}
              principles and am adept at building dynamic user interfaces that
              are both intuitive and visually appealing. For styling, I
              primarily use{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                Tailwind CSS
              </span>{" "}
              to build custom, responsive designs efficiently.
            </p>
            <p>
              My workflow is built on a solid foundation of{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                Git
              </span>{" "}
              for version control, and I am comfortable using{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                GitHub
              </span>{" "}
              for collaborative projects and code management. I'm a firm
              believer in clean code and organized development practices.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-300 dark:border-gray-700" />

        {/* Learning Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-400 border-b border-gray-300 dark:border-gray-700 pb-1">
            What I'm Learning Right Now
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
            <p>
              I believe in continuous learning. Currently, I'm diving deep into
              <span className="font-bold text-purple-600 dark:text-purple-400">
                {" "}
                TypeScript
              </span>{" "}
              to improve the scalability and reliability of my React projects.
              I'm also exploring{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                Docker
              </span>{" "}
              to streamline my development workflow and better understand
              containerization.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MoreInfo;
