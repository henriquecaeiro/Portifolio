import { useTranslation } from "react-i18next";
import { localize } from "../../shared/lib/localize";
import Tag from "../../shared/ui/Tag";
import { cn } from "../../shared/lib/cn";

const CaseBlock = ({ label, children }) => {
  if (!children) return null;

  return (
    <div className="space-y-1.5">
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-300">
        {label}
      </h4>
      <p className="text-sm leading-relaxed text-ink-700">{children}</p>
    </div>
  );
};

const ProjectCard = ({ project, isEnglish }) => {
  const { t } = useTranslation();
  const isPrimary = project.featured === "primary";
  const isCompact = project.featured === "compact";

  return (
    <article
      className={cn(
        "card flex h-full flex-col p-6 md:p-8",
        isPrimary && "md:col-span-2 lg:p-10"
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-display text-2xl text-ink-900 md:text-[1.7rem]">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-700 md:text-base">
        {localize(project.summary, isEnglish)}
      </p>

      {!isCompact ? (
        <div className={cn("mt-6 grid gap-5", isPrimary && "lg:grid-cols-2")}>
          <CaseBlock label={t("projects.problem")}>
            {localize(project.problem, isEnglish)}
          </CaseBlock>
          <CaseBlock label={t("projects.approach")}>
            {localize(project.approach, isEnglish)}
          </CaseBlock>
          <CaseBlock label={t("projects.engineering")}>
            {localize(project.engineering, isEnglish)}
          </CaseBlock>
          <CaseBlock label={t("projects.results")}>
            {localize(project.results, isEnglish)}
          </CaseBlock>
        </div>
      ) : null}

      <p className="mt-6 text-xs leading-relaxed text-muted">
        <span className="sr-only">{t("projects.stack")}: </span>
        {project.stack.join(" · ")}
      </p>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {project.github ? (
          <a
            className={isPrimary ? "primary-button" : "secondary-button"}
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            {t("projects.viewRepo")}
          </a>
        ) : null}
        {project.demo ? (
          <a
            className="secondary-button"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            {t("projects.visitSite")}
          </a>
        ) : null}
        {project.related ? (
          <a
            className="secondary-button"
            href={project.related.url}
            target="_blank"
            rel="noreferrer"
          >
            {t("projects.related")}: {project.related.label}
          </a>
        ) : null}
      </div>
    </article>
  );
};

export default ProjectCard;
