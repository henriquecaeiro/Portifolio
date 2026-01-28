import Navbar from "../shared/ui/Navbar";
import Hero from "../features/hero/Hero";
import Skills from "../features/skills/Skills";
import Projects from "../features/projects/Projects";
import Contact from "../features/contact/Contact";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
