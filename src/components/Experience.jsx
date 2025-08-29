import React from "react";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36"
    >
      <h1 className="text-center text-5xl font-light">Experience</h1>

      <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-16">
        {/* Experience 1 */}
        <div className="relative flex-1 rounded-xl border-l-2 border-purple-500 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg md:p-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800 md:text-2xl">
              Experience 1
            </h3>
            <p className="text-lg font-light text-gray-600">
              University Danubius
            </p>
            <p className="text-sm leading-relaxed text-gray-600">
              Along university, I have worked on several projects that have
              allowed me to apply and enhance my web development skills. These
              projects range from personal websites to collaborative team
              efforts, showcasing my ability to create responsive and
              user-friendly web applications.
            </p>
          </div>
          <span className="absolute -left-[10px] top-8 h-4 w-4 rounded-full bg-purple-500"></span>
        </div>

        {/* Experience 2 */}
        <div className="relative flex-1 rounded-xl border-l-2 border-purple-500 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg md:p-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800 md:text-2xl">
              Experience 2
            </h3>
            <p className="text-lg font-light text-gray-600">
              Freelancing & Personal Projects
            </p>
            <p className="text-sm leading-relaxed text-gray-600">
              While freelancing, I have had the opportunity to work with diverse
              clients, delivering tailored web solutions that meet their
              specific needs. This experience has honed my skills in client
              communication, project management, and adapting to various project
              requirements.
            </p>
          </div>
          <span className="absolute -left-[10px] top-8 h-4 w-4 rounded-full bg-purple-500"></span>
        </div>

        {/* Experience 3 */}
        <div className="relative flex-1 rounded-xl border-l-2 border-purple-500 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg md:p-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800 md:text-2xl">
              Experience 3
            </h3>
            <p className="text-lg font-light text-gray-600">
              Personal Projects
            </p>
            <p className="text-sm leading-relaxed text-gray-600">
              For personal projects, I have taken the initiative to design and
              develop various web applications that reflect my creativity and
              technical skills. These projects serve as a testament to my
              passion for web development.
            </p>
          </div>
          <span className="absolute -left-[10px] top-8 h-4 w-4 rounded-full bg-purple-500"></span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
