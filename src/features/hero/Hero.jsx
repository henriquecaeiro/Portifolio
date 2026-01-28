import { useTranslation } from "react-i18next";
import Container from "../../shared/ui/Container";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language || "en";
  const isEnglish = language.startsWith("en");
  const baseUrl = import.meta.env.BASE_URL || "/";
  const cvHref = `${baseUrl}${isEnglish ? "CV_EN.pdf" : "CV_PT.pdf"}`;

  return (
    <section id="hero" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-60" />
      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="badge">{t("hero.label")}</span>
          <h1 className="font-display text-4xl leading-tight text-ink-900 md:text-5xl lg:text-6xl">
            {t("hero.headline")}
          </h1>
          <p className="max-w-xl text-base text-ink-700 md:text-lg">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="primary-button" href="#projects">
              {t("hero.primaryCta")}
            </a>
            <a className="secondary-button" href={cvHref} download>
              {t("hero.secondaryCta")}
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-ink-700">
            <div>
              <p className="font-semibold text-ink-900">{t("hero.highlightOneTitle")}</p>
              <p>{t("hero.highlightOneDesc")}</p>
            </div>
            <div>
              <p className="font-semibold text-ink-900">{t("hero.highlightTwoTitle")}</p>
              <p>{t("hero.highlightTwoDesc")}</p>
            </div>
          </div>
        </div>

        <div className="card relative flex min-h-[320px] items-center justify-center border border-indigo-100 bg-white/90">
          <div className="absolute -right-6 top-8 hidden h-20 w-20 rounded-3xl bg-indigo-500/20 lg:block" />
          <div className="absolute -bottom-6 left-8 hidden h-16 w-16 rounded-2xl bg-indigo-600/20 lg:block" />
          <div className="text-center">
            <img
              src="/profile.png"
              alt="Henrique Caeiro"
              className="mx-auto mb-4 h-40 w-40 rounded-full object-cover shadow-soft"
            />
            <p className="font-semibold text-ink-800">Henrique Caeiro</p>
            <p className="text-sm text-ink-600">Machine Learning & AI</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
