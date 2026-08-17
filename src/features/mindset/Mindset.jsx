import { useTranslation } from "react-i18next";
import Container from "../../shared/ui/Container";
import SectionHeader from "../../shared/ui/SectionHeader";

const Mindset = () => {
  const { t } = useTranslation();
  const items = t("mindset.items", { returnObjects: true });
  const list = Array.isArray(items) ? items : [];

  return (
    <section className="section pt-4" aria-labelledby="mindset-title">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={t("mindset.eyebrow")}
          title={t("mindset.title")}
          id="mindset-title"
        />

        <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {list.map((item, index) => (
            <li key={item.step} className="bg-surface p-6 md:p-7">
              <p className="text-[11px] font-medium tracking-[0.18em] text-muted">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-display text-xl text-ink-900">{item.step}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default Mindset;
