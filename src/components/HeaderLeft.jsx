import {
  BiRightArrowAlt,
  BiHome,
  BiCode,
  BiBriefcase,
  BiMailSend,
  BiInfoCircle,
} from "react-icons/bi";

const HeaderLeft = () => {
  return (
    <div className="md:flex-[0.8]">
      {/* Desktop Sidebar */}
      <div
        className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center
        text-white border border-purple-400 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
        animate-gradient bg-[length:400%_400%] backdrop-filter backdrop-blur-sm"
      >
        <ul className="flex flex-col gap-10">
          {["Home", "More Info", "Experience", "Projects", "Contact"].map(
            (item) => (
              <li
                key={item}
                className="flex items-center justify-start cursor-pointer font-medium 
                transition-all duration-200 group sm:text-lg md:text-xl xl:text-3xl"
              >
                <BiRightArrowAlt
                  className="text-4xl -translate-x-5 opacity-0 transform transition-all duration-200 
                  group-hover:opacity-100 group-hover:translate-0"
                />
                <a
                  href={`#${item}`}
                  className="transition-all duration-200 hover:translate-x-2"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Top Bar */}
      <div
        className="fixed top-0 left-0 w-full z-50 flex justify-evenly 
        text-white md:hidden border-b border-purple-400 
        bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 
        animate-gradient bg-[length:300%_300%]"
        style={{
          paddingTop: "var(--safe-top)",
          backgroundColor: "black", // fallback under gradient
        }}
      >
        <a href="#Home" className="flex flex-col items-center justify-center">
          <BiHome className="text-2xl" />
          <span className="text-xs">Home</span>
        </a>

        <a
          href="#More Info"
          className="flex flex-col items-center justify-center"
        >
          <BiInfoCircle className="text-xl" />
          <span className="text-xs">More Info</span>
        </a>

        <a
          href="#Experience"
          className="flex flex-col items-center justify-center"
        >
          <BiBriefcase className="text-2xl" />
          <span className="text-xs">Experience</span>
        </a>

        <a
          href="#Projects"
          className="flex flex-col items-center justify-center"
        >
          <BiCode className="text-2xl" />
          <span className="text-xs">Projects</span>
        </a>

        <a
          href="#Contact"
          className="flex flex-col items-center justify-center"
        >
          <BiMailSend className="text-2xl" />
          <span className="text-xs">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderLeft;
