import React from "react";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 
                 p-10 md:p-15 lg:p-20 scroll-mt-20 md:scroll-mt-0 
                 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      <h1 className="text-center text-5xl font-light">Experience</h1>

      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10 w-full max-w-4xl">
        <div className="flex-1 space-y-0">
          {/* Experience 1 */}
          <div className="relative space-y-1 border-l-2 border-gray-300 dark:border-gray-700 p-8 text-left transition-colors">
            <h3 className="text-xl md:text-2xl font-semibold">Experience 1</h3>
            <p className="font-light text-lg text-gray-600 dark:text-gray-300">
              University Danubius
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Along university, I have worked on several projects that have
              allowed me to apply and enhance my web development skills. These
              projects range from personal websites to collaborative team
              efforts, showcasing my ability to create responsive and
              user-friendly web applications.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-purple-500"></span>
          </div>

          {/* Experience 2 */}
          <div className="relative space-y-1 border-l-2 border-gray-300 dark:border-gray-700 p-8 text-left transition-colors">
            <h3 className="text-xl md:text-2xl font-semibold">Experience 2</h3>
            <p className="font-light text-lg text-gray-600 dark:text-gray-300">
              Freelancing
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              While freelancing, I have had the opportunity to work with diverse
              clients, delivering tailored web solutions that meet their
              specific needs. This experience has honed my skills in client
              communication, project management, and adapting to various project
              requirements. As a web developer, I am committed to continuous
              learning and staying updated with the latest industry trends and
              technologies to provide the best solutions for my clients.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-purple-500"></span>
          </div>

          {/* Experience 3 */}
          <div className="relative space-y-1 border-l-2 border-gray-300 dark:border-gray-700 p-8 text-left transition-colors">
            <h3 className="text-xl md:text-2xl font-semibold">Experience 3</h3>
            <p className="font-light text-lg text-gray-600 dark:text-gray-300">
              Personal Projects
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              For personal projects, I have taken the initiative to design and
              develop various web applications that reflect my creativity and
              technical skills. These projects serve as a testament to my
              passion for web development and my ability to bring ideas to life
              through code. This hands-on experience has been invaluable in my
              business endeavors.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-purple-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
