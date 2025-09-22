import React from "react";
import Artowrk from "../../assets/artwork2.jpg";

const MoreInfo = () => {
  return (
    <div
      id="MoreInfo"
      className="w-full px-2 py-12 md:px-4 lg:px-6 min-h-screen pt-2 scroll-mt-20 md:scroll-mt-0"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Main "About Me" Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-medium text-gray-800 border-b-2 border-purple-400">
              A Little More About Me
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Hello! I’m a web developer based in Galați, Romania, with a strong
              focus on building clean, efficient, and user-friendly websites. My
              journey into coding started with a curiosity about how the web
              works and quickly developed into a passion for creating thoughtful
              digital solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond coding, I enjoy exploring new places, listening to hip-hop,
              and playing strategy video games. I believe that continuous
              learning, creativity, and attention to detail are essential to
              delivering successful projects, and I bring that mindset to every
              line of code I write.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            {/* The new image container with a purple background */}
            <div className="box2 overflow-visible m-4 border-1 border-transparent p-0 z-20">
              <img
                src={Artowrk}
                alt="A personal artistic illustration of myself"
                className="object-cover rounded-full list-image-none w-60 h-60 overflow-hidden"
              />
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300" />

        {/* New Section for a Narrative-Style CV */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-800 border-b border-gray-300 pb-1">
            My Skills & Expertise
          </h2>
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              I specialize in creating modern, responsive web applications using{" "}
              <span className="font-bold text-purple-600">React.js</span>. I
              have a strong understanding of core{" "}
              <span className="font-bold text-purple-600">JavaScript</span>{" "}
              principles and am adept at building dynamic user interfaces that
              are both intuitive and visually appealing. For styling, I
              primarily use{" "}
              <span className="font-bold text-purple-600">Tailwind CSS</span> to
              build custom, responsive designs efficiently.
            </p>
            <p>
              My workflow is built on a solid foundation of{" "}
              <span className="font-bold text-purple-600">Git</span> for version
              control, and I am comfortable using{" "}
              <span className="font-bold text-purple-600">GitHub</span> for
              collaborative projects and code management. I'm a firm believer in
              clean code and organized development practices.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-300" />

        {/* What I'm Currently Learning Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-800 border-b border-gray-300 pb-1">
            What I'm Learning Right Now
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              I believe in continuous learning. Currently, I'm diving deep into
              **TypeScript** to improve the scalability and reliability of my
              React projects. I'm also exploring **Docker** to streamline my
              development workflow and better understand containerization.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MoreInfo;
