export default {
  nav: {
    home: "Home",
    projects: "Projects",
    ai: "AI / ML",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    menu: "Open menu",
    close: "Close menu",
  },
  skip: "Skip to content",
  hero: {
    label: "AI Engineer · ML · LLMs",
    name: "Henrique Caeiro",
    headline:
      "AI Engineer building intelligent systems with LLMs, RAG and Machine Learning.",
    description:
      "I connect machine learning, retrieval-augmented generation and software engineering — from experimentation to APIs, evaluation and production systems people can actually use.",
    primaryCta: "View Projects",
    githubCta: "GitHub",
    linkedinCta: "LinkedIn",
    contactCta: "Contact Me",
    photoAlt: "Portrait of Henrique Caeiro, AI and Machine Learning Engineer",
    highlightOneTitle: "AI systems, not demos",
    highlightOneDesc: "Models, retrieval, APIs and evaluation in the same loop.",
    highlightTwoTitle: "Software engineering base",
    highlightTwoDesc: "Full-stack delivery so intelligent systems can ship.",
  },
  projects: {
    eyebrow: "Selected work",
    title: "Engineering case studies",
    subtitle:
      "Projects framed as problems, architecture and evidence — with AI/ML work first.",
    problem: "Problem",
    approach: "Approach",
    engineering: "Engineering",
    results: "Results",
    stack: "Stack",
    viewRepo: "GitHub",
    visitSite: "Demo",
    related: "Related",
  },
  llm: {
    eyebrow: "Focus area",
    title: "LLM & RAG Engineering",
    subtitle:
      "I am building depth here with working systems, not only API wrappers. Language below matches what the projects actually prove.",
    builtTitle: "What I have already built",
    buildingTitle: "Currently developing",
    items: [
      {
        status: "built",
        title: "Retrieval-Augmented Generation",
        body: "In MotoStock AI: curated Markdown knowledge, chunking, Ollama embeddings, a local vector index and source metadata on answers.",
      },
      {
        status: "built",
        title: "Grounded tools vs. generation",
        body: "Current business values come from allowlisted read-only tools. The model explains; it does not invent stock or forecasts.",
      },
      {
        status: "built",
        title: "Agent orchestration",
        body: "In CodeConductor: deterministic control flow, isolated worktrees, independent review and human gates on irreversible Git actions.",
      },
      {
        status: "building",
        title: "Context engineering",
        body: "Studying how to bound retrieved context, mark it as untrusted, and keep prompts from becoming the system of record.",
      },
      {
        status: "building",
        title: "RAG evaluation",
        body: "Developing expertise in retrieval checks, provenance and safety cases — already started with deterministic/live evaluation assets in MotoStock.",
      },
      {
        status: "building",
        title: "Reranking & IR",
        body: "Exploring reranking and stronger information-retrieval setups beyond a first cosine pass.",
      },
    ],
  },
  skills: {
    eyebrow: "Stack",
    title: "Technologies by domain",
    subtitle:
      "Grouped by how I actually use them — not percentage bars.",
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
        items: ["Git", "GitHub", "Docker", "Testing", "Software Architecture", "CI-oriented workflows"],
      },
    ],
  },
  experience: {
    eyebrow: "Work",
    title: "Professional experience",
    subtitle:
      "Traditional software engineering in production — the foundation I apply to AI systems.",
    education: "Education",
  },
  about: {
    eyebrow: "About",
    title: "Software engineer, moving into AI systems.",
    body: [
      "I am a software engineer applying that production background to machine learning, LLMs and RAG. I care about systems that survive contact with real data, APIs and users — not only notebooks.",
      "Full-stack experience is a complement, not the headline: it is how models become products. I am directing my career toward AI Engineering, with a strong interest in retrieval, evaluation and backend design for intelligent systems.",
    ],
  },
  mindset: {
    eyebrow: "How I work",
    title: "Build → Evaluate → Iterate → Deploy",
    items: [
      {
        step: "Build",
        body: "Prototype models and AI pipelines with a clear contract: data in, decision or prediction out.",
      },
      {
        step: "Evaluate",
        body: "Measure with metrics that match the problem — F1, error, coverage, reconstruction, expectancy — not vanity scores.",
      },
      {
        step: "Iterate",
        body: "Change architecture, retrieval, thresholds or features when evidence says so. Negative results still count.",
      },
      {
        step: "Deploy",
        body: "Turn experiments into software: APIs, versioned artifacts, tests and interfaces that other systems can trust.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build intelligent systems.",
    subtitle:
      "Open to AI/ML and LLM engineering roles where software quality and model quality are the same job.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    rights: "Henrique Caeiro",
  },
};
