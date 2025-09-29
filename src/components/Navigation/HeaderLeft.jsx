import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  BiRightArrowAlt,
  BiHome,
  BiCode,
  BiBriefcase,
  BiMailSend,
  BiInfoCircle,
  BiBookAlt,
  BiMenu,
  BiX,
} from "react-icons/bi";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { href: "#Home", icon: BiHome, label: "Home" },
  { href: "#MoreInfo", icon: BiInfoCircle, label: "More Info" },
  { href: "#Experience", icon: BiBriefcase, label: "Experience" },
  { href: "#Projects", icon: BiCode, label: "Projects" },
  { href: "#TechStack", icon: BiBookAlt, label: "Tech Stack" },
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

function MobileOffCanvasNav({ dark, toggle }) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  // swipe gesture state
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchCurrentX, setTouchCurrentX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    setTouchCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchCurrentX === null) return;

    const diff = touchStartX - touchCurrentX;

    // Swipe right-to-left → open menu
    if (!open && diff > 80) {
      setOpen(true);
    }

    // Swipe left-to-right → close menu
    if (open && diff < -80) {
      setOpen(false);
    }

    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  return createPortal(
    <div className="md:hidden fixed top-0 left-0 right-0 z-[9999]">
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 h-14 
                   bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
                   border-b border-purple-400 text-white animate-gradient bg-[length:400%_400%]"
      >
        <span className="font-bold text-lg">{`</Razvan>`}</span>

        <button onClick={() => setOpen(!open)} className="text-3xl">
          {open ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {/* Overlay + Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black"
              onClick={() => setOpen(false)}
            />

            {/* Right Drawer */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 
                         bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500
                         animate-gradient bg-[length:400%_400%]
                         text-white shadow-lg z-[10000] p-6 backdrop-filter backdrop-blur-sm"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <ul className="flex flex-col gap-6 mt-10">
                {NAV_ITEMS.map(({ href, icon: Icon, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 text-lg hover:translate-x-2 transition-transform"
                    >
                      <Icon className="text-2xl" />
                      {label}
                    </a>
                  </li>
                ))}

                {/* Dark mode toggle (only in mobile) */}
                <li>
                  <button
                    onClick={() => {
                      toggle();
                      setOpen(false);
                    }}
                    className="flex items-center gap-3 text-lg"
                  >
                    {dark ? (
                      <Moon className="text-2xl" />
                    ) : (
                      <Sun className="text-2xl" />
                    )}
                    Theme
                  </button>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
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
              "Tech Stack",
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
          </ul>
        </div>
      </div>

      {/* Mobile Off-Canvas Navbar */}
      <MobileOffCanvasNav dark={dark} toggle={toggle} />
    </>
  );
};

export default HeaderLeft;
