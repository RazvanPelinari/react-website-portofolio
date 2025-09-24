import HeaderLeft from "./components/Navigation/HeaderLeft";
import Home from "./components/Pages/Home";
import Experience from "./components/Pages/Experience";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import MoreInfo from "./components/Pages/More";
import Section from "./components/Animations/ScrollAnimation";

function App() {
  return (
    <div className="flex min-h-screen w-full subpixel-antialiased">
      <HeaderLeft />

      <main className="flex-[3] h-screen overflow-y-scroll snap-y snap-mandatory overflow-x-hidden scroll-smooth">
        <Section>
          <Home />
        </Section>
        <Section>
          <MoreInfo />
        </Section>
        <Section>
          <Experience />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Contact />
        </Section>
      </main>
    </div>
  );
}

export default App;
