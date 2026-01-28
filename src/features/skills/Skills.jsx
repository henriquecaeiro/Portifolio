import { useTranslation } from "react-i18next";
import {
  AiOutlineBarChart,
  AiOutlineBulb,
  AiOutlineCloudUpload,
  AiOutlineCode,
  AiOutlineExperiment,
  AiOutlineFund,
  AiOutlinePartition,
  AiOutlineRobot,
  AiOutlineSliders,
} from "react-icons/ai";
import {
  FaDatabase,
  FaGitAlt,
  FaLaravel,
  FaNodeJs,
  FaPlug,
  FaReact,
} from "react-icons/fa";
import Container from "../../shared/ui/Container";

const mlSkills = [
  { label: "Machine Learning", icon: AiOutlinePartition },
  { label: "Deep Learning", icon: AiOutlineRobot },
  { label: "Python for ML", icon: AiOutlineCode },
  { label: "Data Analysis", icon: AiOutlineBarChart },
  { label: "Model Deployment (APIs)", icon: AiOutlineCloudUpload },
  { label: "Feature Engineering", icon: AiOutlineSliders },
  { label: "Evaluation & Metrics", icon: AiOutlineFund },
  { label: "Experimentation", icon: AiOutlineExperiment },
];

const fullStackSkills = [
  { label: "React", icon: FaReact },
  { label: "Laravel / PHP", icon: FaLaravel },
  { label: "Node.js", icon: FaNodeJs },
  { label: "APIs & REST", icon: FaPlug },
  { label: "MySQL / Databases", icon: FaDatabase },
  { label: "Git / Versioning", icon: FaGitAlt },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section">
      <Container className="space-y-10">
        <div className="space-y-3">
          <p className="badge">{t("skills.title")}</p>
          <h2 className="section-title">{t("skills.mlTitle")}</h2>
          <p className="max-w-2xl text-ink-700">{t("skills.mlSubtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mlSkills.map((skill) => (
            <div
              key={skill.label}
              className="card border border-indigo-200/70 p-6 shadow-glow"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600">
                  <skill.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">{skill.label}</p>
                  <p className="mt-2 text-sm text-ink-600">
                    {t("skills.mlCardNote")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 rounded-3xl border border-indigo-100 bg-white/70 p-8 md:grid-cols-[0.6fr_1fr]">
          <div>
            <h3 className="font-display text-2xl text-ink-900">{t("skills.fsTitle")}</h3>
            <p className="mt-3 text-ink-700">{t("skills.fsSubtitle")}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fullStackSkills.map((skill) => (
              <div key={skill.label} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                    <skill.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="font-semibold text-ink-900">{skill.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
