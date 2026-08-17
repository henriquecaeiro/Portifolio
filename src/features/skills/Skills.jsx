import { useTranslation } from "react-i18next";
import Container from "../../shared/ui/Container";
import SectionHeader from "../../shared/ui/SectionHeader";

const Skills = () => {
  const { t } = useTranslation();
  const groups = t("skills.groups", { returnObjects: true });
  const list = Array.isArray(groups) ? groups : [];

  return (
    <section className="section pt-8" aria-labelledby="skills-title">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title")}
          description={t("skills.subtitle")}
          id="skills-title"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {list.map((group) => (
            <div key={group.title} className="card p-6 md:p-7">
              <h3 className="font-display text-lg text-ink-900">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-bg px-3 py-1.5 text-sm text-ink-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
