import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const STORAGE_KEY = "portfolio_lang";

const resources = {
  en: {
    translation: {
      nav: {
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        label: "AI • Machine Learning • Data",
        headline: "Hi, I'm Henrique — I build AI systems, not just apps.",
        description:
          "Focused on machine learning models, deep learning workflows, and data pipelines that power real products. I design APIs that serve intelligent systems with measurable impact.",
        primaryCta: "View Projects",
        secondaryCta: "Download CV",
        photoCard: "Your professional photo here",
        highlightOneTitle: "ML/AI Transition",
        highlightOneDesc: "Applied models, pipelines, and APIs.",
        highlightTwoTitle: "Full-Stack Edge",
        highlightTwoDesc: "React, Laravel, and production delivery.",
      },
      skills: {
        title: "Core Skills",
        mlTitle: "Machine Learning & AI",
        mlSubtitle:
          "Primary focus on intelligent systems, experimentation, and deployment.",
        mlCardNote: "Building robust AI capability for real-world products.",
        fsTitle: "Full-Stack Development",
        fsSubtitle: "Complementary engineering skills for product delivery.",
      },
      projects: {
        title: "Selected Projects",
        subtitle: "ML-first work highlighted, with full-stack delivery proof.",
        viewRepo: "View Repository",
        visitSite: "Visit Website",
      },
      contact: {
        title: "Let’s build intelligent systems together",
        subtitle:
          "Open to ML/AI roles and collaborative product builds. Let’s talk.",
        button: "Start a conversation",
        location: "Brasília - DF",
      },
    },
  },
  pt: {
    translation: {
      nav: {
        skills: "Competências",
        projects: "Projetos",
        contact: "Contato",
      },
      hero: {
        label: "IA • Machine Learning • Dados",
        headline: "Oi, eu sou o Henrique — eu construo sistemas de IA, não só aplicações.",
        description:
          "Foco em modelos de ML, fluxos de Deep Learning e pipelines de dados que movem produtos reais. Eu desenho APIs que entregam sistemas inteligentes com impacto mensurável.",
        primaryCta: "Ver Projetos",
        secondaryCta: "Baixar CV",
        photoCard: "Sua foto profissional aqui",
        highlightOneTitle: "Transição para ML/IA",
        highlightOneDesc: "Modelos aplicados, pipelines e APIs.",
        highlightTwoTitle: "Diferencial Full-Stack",
        highlightTwoDesc: "React, Laravel e entrega em produção.",
      },
      skills: {
        title: "Competências-chave",
        mlTitle: "Machine Learning & IA",
        mlSubtitle:
          "Foco principal em sistemas inteligentes, experimentação e deploy.",
        mlCardNote: "Construindo capacidade de IA robusta para produtos reais.",
        fsTitle: "Desenvolvimento Full-Stack",
        fsSubtitle: "Habilidades complementares para entregar produto.",
      },
      projects: {
        title: "Projetos Selecionados",
        subtitle: "Trabalhos de ML em destaque, com prova de entrega full-stack.",
        viewRepo: "Ver Repositório",
        visitSite: "Visitar Site",
      },
      contact: {
        title: "Vamos construir sistemas inteligentes juntos",
        subtitle:
          "Aberto a vagas de ML/IA e projetos colaborativos. Vamos conversar.",
        button: "Iniciar conversa",
        location: "Brasília - DF",
      },
    },
  },
};

const storedLanguage =
  typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;

i18n.use(initReactI18next).init({
  resources,
  lng: storedLanguage || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const persistLanguage = (language) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, language);
  }
};

export default i18n;
