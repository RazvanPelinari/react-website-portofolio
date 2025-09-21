import React from "react";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36 scroll-mt-14 md:scroll-mt-0 "
    >
      <h1 className="text-center text-5xl font-light ">Experience</h1>

      <div className="flex flex-wrap gap-o md:flex:nowrap md:gap-10">
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl scroll-mt-14 md:scroll-mt-0 ">
              Experience 1
            </h3>
            <p className="font-light text-lg text-gray-600">
              University Danubius
            </p>
            <p className="text-sm text-gray-600">
              Along university, I have worked on several projects that have
              allowed me to apply and enhance my web development skills. These
              projects range from personal websites to collaborative team
              efforts, showcasing my ability to create responsive and
              user-friendly web applications.
            </p>
            <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-purple-500"></span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl ">Experience 2</h3>
            <p className="font-light text-lg text-gray-600">Freelancing</p>
            <p className="text-sm text-gray-600">
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
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className="text-xl font-semibold md:text-2xl ">Experience 3</h3>
            <p className="font-light text-lg text-gray-600">
              Personal Projects
            </p>
            <p className="text-sm text-gray-600">
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
