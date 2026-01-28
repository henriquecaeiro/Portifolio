import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../shared/ui/Container";
import projects from "./data/projects.json";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language || "en";
  const isEnglish = language.startsWith("en");

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      if (a.category === b.category) return 0;
      return a.category === "ml" ? -1 : 1;
    });
  }, []);

  const getButtonLabel = (type) =>
    type === "github" ? t("projects.viewRepo") : t("projects.visitSite");

  const getCategoryBadge = (category) => {
    const map = {
      ml: { label: "ML", className: "bg-indigo-500/10 text-indigo-600" },
      frontend: { label: "Front-End", className: "bg-emerald-50 text-emerald-700" },
      backend: { label: "Back-End", className: "bg-sky-50 text-sky-700" },
      fullstack: { label: "Full-Stack", className: "bg-slate-100 text-ink-700" },
    };

    return map[category] || { label: category, className: "bg-slate-100 text-ink-700" };
  };

  return (
    <section id="projects" className="section">
      <Container className="space-y-10">
        <div className="space-y-3">
          <p className="badge">{t("projects.title")}</p>
          <h2 className="section-title">{t("projects.title")}</h2>
          <p className="max-w-2xl text-ink-700">{t("projects.subtitle")}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {sortedProjects.map((project) => {
            const isMl = project.category === "ml";
            const badge = getCategoryBadge(project.category);

            const description = isEnglish
              ? project.description
              : project.description_pt || project.description;

            return (
              <article
                key={project.title}
                className={`card overflow-hidden border ${
                  isMl ? "border-indigo-200 shadow-glow" : "border-slate-100"
                }`}
              >
                <div className="h-52 w-full overflow-hidden">
                  <img
                    alt={project.title}
                    className="h-full w-full object-cover"
                    src={project.image}
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-xl text-ink-900">{project.title}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badge.className}`}>
                        {badge.label}
                      </span>
                    </div>
                  </div>
                  <p className="text-ink-700">{description}</p>
                  <a
                    className={isMl ? "primary-button" : "secondary-button"}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {getButtonLabel(project.type)}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
