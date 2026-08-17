const text = (en, pt) => ({ en, pt });

const experience = [
  {
    id: "cnm",
    period: "2025 — Present",
    company: "Confederação Nacional dos Municípios (CNM)",
    role: text("Full-Stack Developer", "Desenvolvedor Full-Stack"),
    points: [
      text(
        "Maintain and evolve production web systems across backend, frontend, REST APIs, integrations and SQL databases.",
        "Manutenção e evolução de sistemas web em produção: backend, frontend, APIs REST, integrações e bancos SQL."
      ),
      text(
        "Build Laravel/PHP endpoints and React/Vue interfaces with validation, filters, pagination, permissions, reporting and document generation.",
        "Construção de endpoints Laravel/PHP e interfaces React/Vue com validação, filtros, paginação, permissões, relatórios e geração de documentos."
      ),
      text(
        "This production software-engineering base is what I now apply when turning ML and LLM prototypes into reliable systems.",
        "Essa base de engenharia de software em produção é o que aplico hoje para transformar protótipos de ML e LLM em sistemas confiáveis."
      ),
    ],
  },
  {
    id: "evolue",
    period: "2023 — 2024",
    company: "Grupo Evolue",
    role: text("Full-Stack Developer (Jr)", "Desenvolvedor Full-Stack Júnior"),
    points: [
      text(
        "Developed REST APIs, integrations, dashboards and reports with Laravel, React, JavaScript/TypeScript and SQL.",
        "Desenvolvimento de APIs REST, integrações, dashboards e relatórios com Laravel, React, JavaScript/TypeScript e SQL."
      ),
      text(
        "Contributed to service-based integrations and reusable UI connected to APIs.",
        "Contribuição em integrações orientadas a serviços e UI reutilizável conectada a APIs."
      ),
    ],
  },
  {
    id: "nt-jr",
    period: "2022 — 2023",
    company: "NT Editora",
    role: text("Front-End Developer (Jr)", "Desenvolvedor Front-End Júnior"),
    points: [
      text(
        "Built React/JavaScript components and screens for digital products and educational platforms.",
        "Construção de componentes e telas em React/JavaScript para produtos digitais e plataformas educacionais."
      ),
      text(
        "Implemented responsive layouts, maintained interfaces and integrated front-end flows with services.",
        "Layouts responsivos, manutenção de interfaces e integração de fluxos de front-end com serviços."
      ),
    ],
  },
  {
    id: "nt-intern",
    period: "2021 — 2022",
    company: "NT Editora",
    role: text("Front-End Intern", "Estagiário de Front-End"),
    points: [
      text(
        "Supported development of educational courses and games, implementing layouts and interface adjustments.",
        "Apoio ao desenvolvimento de cursos e jogos educacionais, com layouts e ajustes de interface."
      ),
    ],
  },
];

export const education = {
  period: "2020 — 2022",
  school: "Estácio",
  title: text(
    "Associate Degree, Systems Analysis and Development",
    "Análise e Desenvolvimento de Sistemas"
  ),
};

export default experience;
