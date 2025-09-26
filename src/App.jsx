import HeaderLeft from "./components/Navigation/HeaderLeft";
import Home from "./components/Pages/Home";
import Experience from "./components/Pages/Experience";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import MoreInfo from "./components/Pages/More";

function App() {
  return (
    <div className="flex min-h-screen w-full subpixel-antialiased">
      <HeaderLeft />

      {/* IMPORTANT: give top padding on small screens to avoid overlap */}
      <main className="flex-[3] h-screen overflow-y-scroll scroll-smooth pt-14 md:pt-0 relative z-0">
        <Home />
        <MoreInfo />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
