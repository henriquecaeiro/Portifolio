import { useTranslation } from "react-i18next";
import Container from "../../shared/ui/Container";
import SectionHeader from "../../shared/ui/SectionHeader";

const LlmRag = () => {
  const { t } = useTranslation();
  const items = t("llm.items", { returnObjects: true });
  const list = Array.isArray(items) ? items : [];
  const built = list.filter((item) => item.status === "built");
  const building = list.filter((item) => item.status === "building");

  return (
    <section id="ai" className="section pt-4">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={t("llm.eyebrow")}
          title={t("llm.title")}
          description={t("llm.subtitle")}
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card space-y-5 p-6 md:p-8">
            <h3 className="font-display text-xl text-ink-900">{t("llm.builtTitle")}</h3>
            <ul className="space-y-5">
              {built.map((item) => (
                <li key={item.title}>
                  <p className="text-sm font-semibold text-sage-300">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-700">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 rounded-2xl border border-dashed border-line p-6 md:p-8">
            <h3 className="font-display text-xl text-ink-900">{t("llm.buildingTitle")}</h3>
            <ul className="space-y-5">
              {building.map((item) => (
                <li key={item.title}>
                  <p className="text-sm font-semibold text-ink-800">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LlmRag;
