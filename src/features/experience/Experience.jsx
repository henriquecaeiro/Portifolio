import { useTranslation } from "react-i18next";
import Container from "../../shared/ui/Container";
import SectionHeader from "../../shared/ui/SectionHeader";
import experience, { education } from "./data";
import { localize } from "../../shared/lib/localize";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = (i18n.language || "en").startsWith("en");

  return (
    <section id="experience" className="section">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={t("experience.eyebrow")}
          title={t("experience.title")}
          description={t("experience.subtitle")}
        />

        <ol className="space-y-0 divide-y divide-line border-y border-line">
          {experience.map((item) => (
            <li
              key={item.id}
              className="grid gap-4 py-8 md:grid-cols-[8.5rem_1fr] md:gap-10"
            >
              <p className="text-sm text-muted">{item.period}</p>
              <div>
                <h3 className="font-display text-xl text-ink-900">
                  {localize(item.role, isEnglish)}
                </h3>
                <p className="mt-1 text-sm text-sage-300">{item.company}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point.en} className="text-sm leading-relaxed text-ink-700">
                      {localize(point, isEnglish)}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="grid gap-4 md:grid-cols-[8.5rem_1fr] md:gap-10">
          <p className="text-sm text-muted">{education.period}</p>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-sage-300">
              {t("experience.education")}
            </p>
            <h3 className="mt-2 font-display text-xl text-ink-900">
              {localize(education.title, isEnglish)}
            </h3>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
