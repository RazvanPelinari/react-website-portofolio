import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import More from "./components/More";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased bg-gray-100/75">
        <HeaderLeft />

        <main className="flex-[3]">
          <Home />
          <div id="MoreInfo">
            <More />
          </div>
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
