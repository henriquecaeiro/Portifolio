import { useTranslation } from "react-i18next";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Container from "../../shared/ui/Container";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section">
      <Container>
        <div className="card grid gap-10 border border-indigo-100 bg-white/90 p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-ink-900 md:text-4xl">
              {t("contact.title")}
            </h2>
            <p className="text-ink-700">{t("contact.subtitle")}</p>
            <a
              className="primary-button"
              href="https://wa.me/5561998449383"
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.button")}
            </a>
          </div>
          <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6">
            <p className="text-sm font-semibold text-ink-800">{t("contact.location")}</p>
            <div className="mt-4 space-y-3 text-sm text-ink-700">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-soft">
                  <AiOutlineMail className="h-4 w-4" aria-hidden="true" />
                </span>
                <p>
                  Email:{" "}
                  <a className="font-semibold text-indigo-600" href="mailto:henriquecaeiro.dev@gmail.com">
                    henriquecaeiro.dev@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-soft">
                  <FaGithub className="h-4 w-4" aria-hidden="true" />
                </span>
                <p>
                  GitHub:{" "}
                  <a
                    className="font-semibold text-indigo-600"
                    href="https://github.com/henriquecaeiro"
                    target="_blank"
                    rel="noreferrer"
                  >
                    /henriquecaeiro
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-soft">
                  <FaLinkedinIn className="h-4 w-4" aria-hidden="true" />
                </span>
                <p>
                  LinkedIn:{" "}
                  <a
                    className="font-semibold text-indigo-600"
                    href="https://www.linkedin.com/in/henrique-caeiro-a28135269/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    /henrique-caeiro
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
