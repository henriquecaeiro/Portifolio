import { useTranslation } from "react-i18next";
import Navbar from "../shared/ui/Navbar";
import Footer from "../shared/ui/Footer";
import Hero from "../features/hero/Hero";
import Projects from "../features/projects/Projects";
import LlmRag from "../features/llm/LlmRag";
import Skills from "../features/skills/Skills";
import Experience from "../features/experience/Experience";
import About from "../features/about/About";
import Mindset from "../features/mindset/Mindset";
import Contact from "../features/contact/Contact";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-bg">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sage-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
      >
        {t("skip")}
      </a>
      <Navbar />
      <main id="content">
        <Hero />
        <Projects />
        <LlmRag />
        <Skills />
        <Mindset />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
