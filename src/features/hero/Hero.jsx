import { useTranslation } from "react-i18next";
import { social } from "../../shared/content/social";
import Container from "../../shared/ui/Container";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = (i18n.language || "en").startsWith("en");
  const cvHref = `${import.meta.env.BASE_URL}${isEnglish ? "CV_EN.pdf" : "CV_PT.pdf"}`;

  return (
    <section id="home" className="section relative overflow-hidden pt-16 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[length:48px_48px] opacity-40" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="space-y-8">
          <p className="badge">{t("hero.label")}</p>
          <div className="space-y-5">
            <p className="text-sm font-medium tracking-wide text-sage-300">{t("hero.name")}</p>
            <h1 className="font-display text-[2rem] leading-[1.12] tracking-tight text-ink-900 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {t("hero.headline")}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-ink-700 md:text-lg">
              {t("hero.description")}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a className="primary-button" href="#projects">
              {t("hero.primaryCta")}
            </a>
            <a
              className="secondary-button"
              href={social.github}
              target="_blank"
              rel="noreferrer"
            >
              {t("hero.githubCta")}
            </a>
            <a
              className="secondary-button"
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {t("hero.linkedinCta")}
            </a>
            <a className="secondary-button" href="#contact">
              {t("hero.contactCta")}
            </a>
          </div>

          <a className="inline-flex text-sm text-muted underline-offset-4 hover:text-sage-300 hover:underline" href={cvHref} download>
            {t("hero.cvCta")}
          </a>

          <div className="grid max-w-xl gap-6 border-t border-line pt-6 sm:grid-cols-2">
            <div>
              <p className="font-medium text-ink-900">{t("hero.highlightOneTitle")}</p>
              <p className="mt-1 text-sm text-muted">{t("hero.highlightOneDesc")}</p>
            </div>
            <div>
              <p className="font-medium text-ink-900">{t("hero.highlightTwoTitle")}</p>
              <p className="mt-1 text-sm text-muted">{t("hero.highlightTwoDesc")}</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-sage-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-6 top-10 hidden h-24 w-24 rounded-full border border-sage-400/20 lg:block" />
          <div className="pointer-events-none absolute -left-4 bottom-16 hidden h-16 w-16 rotate-12 border border-line lg:block" />
          <figure className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-glow">
            <div className="absolute inset-0 bg-gradient-to-tr from-bg/40 via-transparent to-sage-400/10" />
            <img
              src={`${import.meta.env.BASE_URL}henrique-caeiro.webp`}
              alt={t("hero.photoAlt")}
              width="1400"
              height="933"
              fetchPriority="high"
              decoding="async"
              className="relative z-10 aspect-[4/5] w-full object-cover object-[center_18%]"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
