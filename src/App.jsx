import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import More from "./components/More";
import useScrollMagic from "../hooks/useScrollMagic";

function App() {
  
  useScrollMagic();

  return (
    <div className="flex min-h-screen w-full subpixel-antialiased bg-gray-100/75">
      <HeaderLeft />

      <main className="flex-[3]">
        <section id="Home" className="scroll-anim min-h-screen">
          <Home />
        </section>

        <section id="MoreInfo" className="scroll-anim min-h-screen">
          <More />
        </section>

        <section id="Experience" className="scroll-anim min-h-screen">
          <Experience />
        </section>

        <section id="Projects" className="scroll-anim min-h-screen">
          <Projects />
        </section>

        <section id="Contact" className="scroll-anim min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
