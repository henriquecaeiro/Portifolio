import { useTranslation } from "react-i18next";
import Container from "../../shared/ui/Container";
import SectionHeader from "../../shared/ui/SectionHeader";

const About = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = (i18n.language || "en").startsWith("en");
  const paragraphs = t("about.body", { returnObjects: true });
  const body = Array.isArray(paragraphs) ? paragraphs : [paragraphs];
  const cvHref = `${import.meta.env.BASE_URL}${isEnglish ? "CV_EN.pdf" : "CV_PT.pdf"}`;

  return (
    <section id="about" className="section">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-sage-400/10 blur-2xl" />
          <img
            src={`${import.meta.env.BASE_URL}henrique-caeiro.webp`}
            alt={t("hero.photoAlt")}
            width="1400"
            height="933"
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/5] w-full rounded-3xl border border-line object-cover object-[center_18%]"
          />
        </div>

        <div className="space-y-6">
          <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} />
          {body.map((paragraph) => (
            <p key={paragraph} className="max-w-2xl text-base leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
          <a className="secondary-button" href={cvHref} download>
            {t("about.cv")}
          </a>
        </div>
      </Container>
    </section>
  );
};

export default About;
