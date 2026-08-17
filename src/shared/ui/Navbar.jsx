import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { persistLanguage } from "../i18n";
import Container from "./Container";

const links = [
  { href: "#home", key: "nav.home" },
  { href: "#projects", key: "nav.projects" },
  { href: "#ai", key: "nav.ai" },
  { href: "#experience", key: "nav.experience" },
  { href: "#about", key: "nav.about" },
  { href: "#contact", key: "nav.contact" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const isEnglish = (i18n.language || "en").startsWith("en");

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "pt-BR";
  }, [isEnglish]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    persistLanguage(language);
  };

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/80 backdrop-blur-md">
      <Container className="flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-3" onClick={close}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-sage-400/30 bg-surface text-xs font-semibold tracking-wide text-sage-200">
            HC
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-sm text-ink-900">Henrique Caeiro</span>
            <span className="block text-[11px] text-muted">AI / ML Engineer</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="flex rounded-full border border-line bg-surface p-0.5 text-[11px] font-semibold"
            role="group"
            aria-label="Language"
          >
            <button
              className={`rounded-full px-2.5 py-1 transition ${
                isEnglish ? "bg-sage-400 text-bg" : "text-muted hover:text-ink-900"
              }`}
              onClick={() => handleLanguageChange("en")}
              type="button"
              aria-pressed={isEnglish}
            >
              EN
            </button>
            <button
              className={`rounded-full px-2.5 py-1 transition ${
                !isEnglish ? "bg-sage-400 text-bg" : "text-muted hover:text-ink-900"
              }`}
              onClick={() => handleLanguageChange("pt")}
              type="button"
              aria-pressed={!isEnglish}
            >
              PT
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("nav.close") : t("nav.menu")}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? t("nav.close") : t("nav.menu")}</span>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className={`h-px w-4 bg-ink-800 transition ${open ? "translate-y-1 rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-ink-800 transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-4 bg-ink-800 transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-bg md:hidden"
          aria-label="Mobile"
        >
          <Container className="flex flex-col py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-sm font-medium text-ink-800"
                onClick={close}
              >
                {t(link.key)}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
};

export default Navbar;
