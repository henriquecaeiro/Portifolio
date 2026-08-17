import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { social } from "../../shared/content/social";
import Container from "../../shared/ui/Container";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = (i18n.language || "en").startsWith("en");
  const cvHref = `${import.meta.env.BASE_URL}${isEnglish ? "CV_EN.pdf" : "CV_PT.pdf"}`;

  const channels = [
    {
      href: `mailto:${social.email}`,
      label: t("contact.email"),
      value: social.email,
      icon: AiOutlineMail,
      external: false,
    },
    {
      href: social.github,
      label: t("contact.github"),
      value: social.githubLabel,
      icon: FaGithub,
      external: true,
    },
    {
      href: social.linkedin,
      label: t("contact.linkedin"),
      value: social.linkedinLabel,
      icon: FaLinkedinIn,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section">
      <Container>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface px-6 py-12 md:px-12 md:py-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sage-400/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-2xl space-y-5">
              <p className="badge">{t("contact.eyebrow")}</p>
              <h2 className="font-display text-3xl tracking-tight text-ink-900 md:text-5xl">
                {t("contact.title")}
              </h2>
              <p className="text-base leading-relaxed text-ink-700 md:text-lg">
                {t("contact.subtitle")}
              </p>
              <p className="text-sm text-muted">{social.location}</p>
              <a className="secondary-button" href={cvHref} download>
                {t("contact.cv")}
              </a>
            </div>

            <ul className="space-y-4">
              {channels.map((channel) => (
                <li key={channel.href}>
                  <a
                    href={channel.href}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-bg/60 px-4 py-3 transition hover:border-sage-400/30"
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noreferrer" : undefined}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-sage-300">
                      <channel.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.14em] text-muted">
                        {channel.label}
                      </span>
                      <span className="text-sm font-medium text-ink-900">{channel.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
