import React from "react";

const More = () => {
  return (
    <div
      id="MoreInfo"
      className="w-full bg-white px-4 py-12 md:px-10 lg:px-20 min-h-screen translate-y-10"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Main "About Me" Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-medium text-gray-800 border-b-2 border-purple-400 top-20 translate-y-2 gap-2">
              A Little More About Me
            </h2>
            <p className="text-gray-700 leading-relaxed top-0 translate-y-0">
              Hello! I'm a passionate web developer based in Galați, Romania,
              with a deep love for creating clean, efficient, and user-friendly
              websites. My journey into coding began out of a curiosity for how
              things work on the web, and it quickly grew into a full-fledged
              passion for building and problem-solving.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, I enjoy exploring new places, listening to
              hip-hop music, and playing strategy video games. I believe that
              creativity and a desire to learn are the keys to a successful
              project, and I bring that mindset to every project I undertake.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            {/* Placeholder for an image or graphic */}
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Your Image Here</span>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300" />

        {/* Skills & Technologies Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-800 border-b border-gray-300 pb-1">
            Skills & Technologies
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              My expertise lies in{" "}
              <span className="font-bold text-purple-600">JavaScript</span>,{" "}
              <span className="font-bold text-purple-600">React</span>, and{" "}
              <span className="font-bold text-purple-600">Node.js</span>. I
              specialize in building responsive and dynamic user interfaces with{" "}
              <span className="font-bold text-purple-600">React</span>, ensuring
              they are both intuitive and visually appealing. For styling, I
              primarily use{" "}
              <span className="font-bold text-purple-600">Tailwind CSS</span> to
              build custom, responsive designs efficiently.
            </p>
            <p>
              My workflow is built on a solid foundation of{" "}
              <span className="font-bold text-purple-600">Git</span> for version
              control, and I am comfortable using GitHub for collaborative
              projects and code management. I'm a firm believer in clean code
              and organized development practices.
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

export default More;
