import { useTranslation } from "react-i18next";
import Container from "./Container";
import { persistLanguage } from "../i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    persistLanguage(language);
  };

  const isEnglish = i18n.language === "en";

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100/70 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500 text-white shadow-glow">
            HC
          </div>
          <div>
            <p className="font-display text-base text-ink-900">Henrique Caeiro</p>
            <p className="text-xs text-ink-700">Machine Learning & AI</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-ink-700 md:flex">
          <a href="#skills" className="transition hover:text-indigo-600">
            {t("nav.skills")}
          </a>
          <a href="#projects" className="transition hover:text-indigo-600">
            {t("nav.projects")}
          </a>
          <a href="#contact" className="transition hover:text-indigo-600">
            {t("nav.contact")}
          </a>
        </nav>

        <div className="flex items-center gap-3 rounded-full border border-indigo-100 bg-white px-3 py-1 text-xs font-semibold text-ink-700 shadow-soft">
          <button
            className={`rounded-full px-3 py-1 transition ${
              isEnglish ? "bg-indigo-500 text-white" : "hover:text-indigo-600"
            }`}
            onClick={() => handleLanguageChange("en")}
            type="button"
          >
            EN
          </button>
          <button
            className={`rounded-full px-3 py-1 transition ${
              !isEnglish ? "bg-indigo-500 text-white" : "hover:text-indigo-600"
            }`}
            onClick={() => handleLanguageChange("pt")}
            type="button"
          >
            PT
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
