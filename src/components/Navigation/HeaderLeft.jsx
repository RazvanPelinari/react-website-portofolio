import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  BiRightArrowAlt,
  BiHome,
  BiCode,
  BiBriefcase,
  BiMailSend,
  BiInfoCircle,
} from "react-icons/bi";

const NAV_ITEMS = [
  { href: "#Home", icon: BiHome, label: "Home" },
  { href: "#MoreInfo", icon: BiInfoCircle, label: "More Info" },
  { href: "#Experience", icon: BiBriefcase, label: "Experience" },
  { href: "#Projects", icon: BiCode, label: "Projects" },
  { href: "#Contact", icon: BiMailSend, label: "Contact" },
];

// Mobile bar portal component (safe for SSR)
function MobileTopBarPortal() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed left-0 right-0 top-0 z-[9999] flex justify-evenly
                 text-white dark:text-gray-100 md:hidden border-b
                 border-purple-400 dark:border-purple-600
                 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
                 dark:from-indigo-900 dark:via-purple-900 dark:to-fuchsia-900
                 animate-gradient bg-[length:300%_300%] h-14 transition-colors duration-500"
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
    </div>,
    document.body
  );
}

const HeaderLeft = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-[0.8]">
        <div
          className="min-h-screen w-full text-white dark:text-gray-100 top-0 sticky flex items-center justify-center
                     border-purple-400 dark:border-purple-600
                     bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
                     dark:from-indigo-900 dark:via-purple-900 dark:to-fuchsia-900
                     animate-gradient bg-[length:400%_400%] backdrop-filter backdrop-blur-sm
                     transition-colors duration-500"
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
                    href={`#${item.replace(/\s+/g, "")}`}
                    className="transition-all duration-200 hover:translate-x-2"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Mobile Top Bar rendered via portal */}
      <MobileTopBarPortal />
    </>
  );
};

export default HeaderLeft;
