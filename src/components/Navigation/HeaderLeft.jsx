import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  BiRightArrowAlt,
  BiHome,
  BiCode,
  BiBriefcase,
  BiMailSend,
  BiInfoCircle,
  BiBookAlt, // new icon for Tech Stack
} from "react-icons/bi";
import { Sun, Moon } from "lucide-react";

const NAV_ITEMS = [
  { href: "#Home", icon: BiHome, label: "Home" },
  { href: "#MoreInfo", icon: BiInfoCircle, label: "More Info" },
  { href: "#Experience", icon: BiBriefcase, label: "Experience" },
  { href: "#Projects", icon: BiCode, label: "Projects" },
  { href: "#TechStack", icon: BiBookAlt, label: "Tech Stack" }, // added here
  { href: "#Contact", icon: BiMailSend, label: "Contact" },
];

function useDarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggle = () => {
    const newTheme = !dark;
    setDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return { dark, toggle };
}

// Mobile bar portal component
function MobileTopBarPortal({ dark, toggle }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed left-0 right-0 top-0 z-[9999] flex justify-evenly
                 text-white md:hidden border-b border-purple-400
                 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
                 animate-gradient bg-[length:300%_300%] h-14"
    >
      {NAV_ITEMS.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          className="flex flex-col items-center justify-center"
        >
          <Icon className="text-2xl" />
          <span className="text-xs">{label}</span>
        </a>
      ))}

      {/* Dark mode toggle as nav item */}
      <button
        onClick={toggle}
        className="flex flex-col items-center justify-center"
      >
        {dark ? <Moon className="text-2xl" /> : <Sun className="text-2xl" />}
        <span className="text-xs">Theme</span>
      </button>
    </div>,
    document.body
  );
}

const HeaderLeft = () => {
  const { dark, toggle } = useDarkMode();

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-[0.8]">
        <div
          className="min-h-screen w-full text-white top-0 sticky flex items-center justify-center
                   border-purple-400 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
                   animate-gradient bg-[length:400%_400%] backdrop-filter backdrop-blur-sm"
        >
          <ul className="flex flex-col gap-10">
            {[
              "Home",
              "More Info",
              "Experience",
              "Projects",
              "Tech Stack", // added here
              "Contact",
            ].map((item) => (
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
                  href={`#${item.replace(/\s+/g, "")}`}
                  className="transition-all duration-200 hover:translate-x-2"
                >
                  {item}
                </a>
              </li>
            ))}

            {/* Dark mode toggle as nav item */}
            <li
              className="flex items-center justify-start cursor-pointer font-medium
                         transition-all duration-200 group sm:text-lg md:text-xl xl:text-3xl"
            >
              <BiRightArrowAlt
                className="text-4xl -translate-x-5 opacity-0 transform transition-all duration-200
                           group-hover:opacity-100 group-hover:translate-0"
              />
              <button
                onClick={toggle}
                className="flex items-center gap-2 transition-all duration-200 hover:translate-x-2"
              >
                {dark ? (
                  <Moon className="text-2xl" />
                ) : (
                  <Sun className="text-2xl" />
                )}
                <span>Theme</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <MobileTopBarPortal dark={dark} toggle={toggle} />
    </>
  );
};

export default HeaderLeft;
