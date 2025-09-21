import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MoreInfo from "./components/More";
import Section from "./components/Animation";

function App() {
  return (
    <div className="flex min-h-screen w-full subpixel-antialiased">
      <HeaderLeft />

      <main className="flex-[3] h-screen overflow-y-scroll snap-y snap-mandatory">
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
