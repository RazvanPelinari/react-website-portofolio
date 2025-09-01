import React from "react";

const MoreInfo = () => {
  return (
    <div className="w-full bg-white px-4 py-12 md:px-10 lg:px-20 top-0">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Main "About Me" Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 top-0]">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-medium text-gray-800 border-b-2 border-purple-400">
              A Little More About Me
            </h2>
            <p className="text-gray-700 leading-relaxed">
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
              project, and I bring that mindset to every line of code I write.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            {/* Placeholder for a profile picture or personal graphic */}
            <div className="w-64 h-64 bg-purple-500/30 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="./assets/artwork-BEUAy-aG.png"
                alt="A personal artistic illustration of myself"
                className="w-70 h-70 object-cover rounded-full"
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

export default MoreInfo;
