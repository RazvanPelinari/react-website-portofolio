import HeaderLeft from "./components/Navigation/HeaderLeft";
import Home from "./components/Pages/Home";
import Experience from "./components/Pages/Experience";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import MoreInfo from "./components/Pages/More";
import DarkModeToggle from "./components/DarkModeToggle"; // 👈 import toggle
import TechStack from "./components/Pages/TechStack";

function App() {
  return (
    <div className="flex min-h-screen w-full subpixel-antialiased relative  bg-white dark:bg-gray-900">
      {/* Sidebar / Navbar */}
      <HeaderLeft />

      {/* Main Content */}
      <main className="flex-[3] h-screen overflow-y-scroll scroll-smooth pt-14 md:pt-0 relative z-0">
        <Home />
        <MoreInfo />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      {/* Dark Mode Toggle (always floating above everything) */}
      <div className="fixed top-4 right-4 z-[9999] md:translate-y-0 translate-y-8 md:translate-x-0 translate-x-4">
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default App;
