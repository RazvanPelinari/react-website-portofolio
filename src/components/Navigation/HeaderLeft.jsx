import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  BiMenu,
  BiX,
  BiHome,
  BiCode,
  BiBriefcase,
  BiMailSend,
  BiInfoCircle,
  BiBookAlt,
} from "react-icons/bi";
import { Sun, Moon } from "lucide-react";

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

  const x = useMotionValue(300); // start offscreen
  const drawerWidth = 300;

  useEffect(() => setMounted(true), []);

  const handleTouchStart = (e) => {
    x.set(open ? 0 : drawerWidth); // ensure correct start
    e.target.startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const diff = touchX - e.target.startX;

    if (!open && e.target.startX < 30) {
      // swiping from left edge to open
      const newX = Math.max(drawerWidth - diff, 0);
      x.set(Math.min(drawerWidth, newX));
    }

    if (open) {
      // swiping drawer to close
      const newX = Math.min(Math.max(diff, 0), drawerWidth);
      x.set(newX);
    }
  };

  const handleTouchEnd = (e) => {
    const currentX = x.get();
    if (!open) {
      if (currentX < drawerWidth / 2) setOpen(true);
      else x.set(drawerWidth);
    } else {
      if (currentX > drawerWidth / 2) setOpen(false);
      else x.set(0);
    }
  };

  useEffect(() => {
    x.set(open ? 0 : drawerWidth);
  }, [open, x]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[999]"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <motion.div
        style={{ x }}
        className="fixed top-0 left-0 h-full w-[300px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 text-white shadow-lg z-[1000] p-6 backdrop-filter backdrop-blur-sm"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex justify-between items-center mb-10">
          <span className="font-bold text-lg">{`</Razvan>`}</span>
          <button onClick={() => setOpen(!open)} className="text-3xl">
            {open ? <BiX /> : <BiMenu />}
          </button>
        </div>
        <ul className="flex flex-col gap-6">
          {NAV_ITEMS.map(({ href, icon: Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-lg hover:translate-x-2 transition-transform"
              >
                <Icon className="text-2xl" /> {label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggle}
              className="flex items-center gap-3 text-lg"
            >
              {dark ? (
                <Moon className="text-2xl" />
              ) : (
                <Sun className="text-2xl" />
              )}{" "}
              Theme
            </button>
          </li>
        </ul>
      </motion.div>
    </>,
    document.body
  );
}

const HeaderLeft = () => {
  const { dark, toggle } = useDarkMode();

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-[0.8]">
        <div className="min-h-screen w-full text-white top-0 sticky flex items-center justify-center border-purple-400 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 animate-gradient bg-[length:400%_400%] backdrop-filter backdrop-blur-sm">
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
                className="flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg md:text-xl xl:text-3xl"
              >
                <BiRightArrowAlt className="text-4xl -translate-x-5 opacity-0 transform transition-all duration-200 group-hover:opacity-100 group-hover:translate-0" />
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
