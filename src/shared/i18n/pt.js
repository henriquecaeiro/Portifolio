export default {
  nav: {
    home: "Início",
    projects: "Projetos",
    ai: "IA / ML",
    experience: "Experiência",
    about: "Sobre",
    contact: "Contato",
    menu: "Abrir menu",
    close: "Fechar menu",
  },
  skip: "Pular para o conteúdo",
  hero: {
    label: "AI Engineer · ML · LLMs",
    name: "Henrique Caeiro",
    headline:
      "AI Engineer construindo sistemas inteligentes com LLMs, RAG e Machine Learning.",
    description:
      "Conecto machine learning, retrieval-augmented generation e engenharia de software — da experimentação a APIs, avaliação e sistemas em produção que dá para usar de verdade.",
    primaryCta: "Ver projetos",
    githubCta: "GitHub",
    linkedinCta: "LinkedIn",
    contactCta: "Falar comigo",
    photoAlt: "Retrato de Henrique Caeiro, engenheiro de IA e Machine Learning",
    highlightOneTitle: "Sistemas de IA, não demos",
    highlightOneDesc: "Modelos, retrieval, APIs e avaliação no mesmo ciclo.",
    highlightTwoTitle: "Base de software engineering",
    highlightTwoDesc: "Entrega full-stack para sistemas inteligentes saírem do papel.",
  },
  projects: {
    eyebrow: "Trabalho selecionado",
    title: "Case studies de engenharia",
    subtitle:
      "Projetos apresentados como problema, arquitetura e evidência — com AI/ML na frente.",
    problem: "Problema",
    approach: "Abordagem",
    engineering: "Engenharia",
    results: "Resultados",
    stack: "Stack",
    viewRepo: "GitHub",
    visitSite: "Demo",
    related: "Relacionado",
  },
  llm: {
    eyebrow: "Área de foco",
    title: "LLM & RAG Engineering",
    subtitle:
      "Estou construindo profundidade aqui com sistemas que funcionam, não só wrappers de API. A linguagem abaixo reflete o que os projetos realmente comprovam.",
    builtTitle: "O que já construí",
    buildingTitle: "Em desenvolvimento",
    items: [
      {
        status: "built",
        title: "Retrieval-Augmented Generation",
        body: "No MotoStock AI: base Markdown curada, chunking, embeddings Ollama, índice vetorial local e metadados de fonte nas respostas.",
      },
      {
        status: "built",
        title: "Tools fundamentadas vs. geração",
        body: "Valores de negócio atuais vêm de tools somente leitura. O modelo explica; não inventa estoque nem previsão.",
      },
      {
        status: "built",
        title: "Orquestração de agentes",
        body: "No CodeConductor: fluxo determinístico, worktrees isoladas, review independente e gates humanos em ações Git irreversíveis.",
      },
      {
        status: "building",
        title: "Context engineering",
        body: "Estudando como limitar o contexto recuperado, marcá-lo como não confiável e impedir que o prompt vire a fonte da verdade.",
      },
      {
        status: "building",
        title: "Avaliação de RAG",
        body: "Desenvolvendo expertise em checagens de retrieval, proveniência e casos de segurança — já iniciado com assets de avaliação no MotoStock.",
      },
      {
        status: "building",
        title: "Reranking & IR",
        body: "Explorando reranking e retrieval mais forte além de um primeiro passe por cosine similarity.",
      },
    ],
  },
  skills: {
    eyebrow: "Stack",
    title: "Tecnologias por domínio",
    subtitle: "Agrupadas pelo uso real — sem barras de porcentagem.",
    groups: [
      {
        title: "AI / ML",
        items: [
          "Python",
          "PyTorch",
          "Scikit-learn",
          "XGBoost",
          "Machine Learning",
          "NLP",
          "LLMs",
          "RAG",
          "Embeddings",
          "Information Retrieval",
        ],
      },
      {
        title: "Backend",
        items: ["Python", "FastAPI", "PHP", "Laravel", "Node.js", "APIs", "REST", "SQL"],
      },
      {
        title: "Frontend",
        items: ["React", "Vue.js", "JavaScript", "TypeScript"],
      },
      {
        title: "Engineering",
        items: ["Git", "GitHub", "Docker", "Testing", "Software Architecture", "Fluxos orientados a CI"],
      },
    ],
  },
  experience: {
    eyebrow: "Trabalho",
    title: "Experiência profissional",
    subtitle:
      "Engenharia de software tradicional em produção — a base que aplico a sistemas de IA.",
    education: "Formação",
  },
  about: {
    eyebrow: "Sobre",
    title: "Engenheiro de software, rumo a sistemas de IA.",
    body: [
      "Sou engenheiro de software aplicando essa base de produção a machine learning, LLMs e RAG. Me importo com sistemas que sobrevivem a dados reais, APIs e usuários — não só notebooks.",
      "A experiência full-stack é complemento, não o título: é assim que modelos viram produto. Estou direcionando a carreira para AI Engineering, com interesse forte em retrieval, avaliação e backend para sistemas inteligentes.",
    ],
  },
  mindset: {
    eyebrow: "Como trabalho",
    title: "Build → Evaluate → Iterate → Deploy",
    items: [
      {
        step: "Build",
        body: "Prototipar modelos e pipelines de IA com um contrato claro: dados entram, decisão ou predição sai.",
      },
      {
        step: "Evaluate",
        body: "Medir com métricas que batem com o problema — F1, erro, cobertura, reconstrução, expectativa — não vanity metrics.",
      },
      {
        step: "Iterate",
        body: "Mudar arquitetura, retrieval, thresholds ou features quando a evidência pede. Resultado negativo também conta.",
      },
      {
        step: "Deploy",
        body: "Transformar experimentos em software: APIs, artefatos versionados, testes e interfaces em que outros sistemas confiam.",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos construir sistemas inteligentes.",
    subtitle:
      "Aberto a papéis de AI/ML e LLM engineering em que qualidade de software e qualidade de modelo são o mesmo trabalho.",
    email: "E-mail",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    rights: "Henrique Caeiro",
  },
};
