import { useTranslation } from "react-i18next";
import Container from "../../shared/ui/Container";
import SectionHeader from "../../shared/ui/SectionHeader";
import ProjectCard from "./ProjectCard";
import projects from "./data/projects";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = (i18n.language || "en").startsWith("en");
  const featured = projects.filter((project) => project.featured === "primary");
  const secondary = projects.filter((project) => project.featured === "secondary");
  const compact = projects.filter((project) => project.featured === "compact");

  return (
    <section id="projects" className="section">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          description={t("projects.subtitle")}
        />

        <div className="grid gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} isEnglish={isEnglish} />
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {secondary.map((project) => (
            <ProjectCard key={project.id} project={project} isEnglish={isEnglish} />
          ))}
        </div>

        {compact.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {compact.map((project) => (
              <ProjectCard key={project.id} project={project} isEnglish={isEnglish} />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
};

export default Projects;
