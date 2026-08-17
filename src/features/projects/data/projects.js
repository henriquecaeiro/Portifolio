const text = (en, pt) => ({ en, pt });

const projects = [
  {
    id: "motostock-ai",
    featured: "primary",
    title: "MotoStock AI",
    tags: ["Machine Learning", "RAG", "LLM", "AI Engineering", "XGBoost", "FastAPI"],
    github: "https://github.com/henriquecaeiro/motostock-ai",
    related: {
      label: "MotoBoy POS",
      url: "https://github.com/henriquecaeiro/motoboy-pos",
    },
    summary: text(
      "Demand forecasting and stock replenishment for a motorcycle and delivery-gear retail operation, connected to a desktop POS and a grounded local assistant.",
      "Previsão de demanda e reposição de estoque para uma operação de varejo de motos e equipamentos de entrega, conectada a um POS desktop e a um assistente local fundamentado."
    ),
    problem: text(
      "A small motorcycle-accessories store needed help deciding which products to replenish, and in what quantity, without relying only on intuition or the most recent sales.",
      "Uma loja pequena de acessórios para motos precisava decidir quais produtos repor, e em que quantidade, sem depender só da intuição ou das vendas mais recentes."
    ),
    approach: text(
      "The system separates forecasting from decision support. XGBoost predicts daily product demand. A deterministic engine then applies safety stock and supplier lead time. FastAPI and SQLite persist operational data. A local Ollama assistant explains results using RAG over curated docs and allowlisted read-only tools for current values.",
      "O sistema separa previsão de apoio à decisão. O XGBoost prevê a demanda diária por produto. Um motor determinístico aplica estoque de segurança e lead time do fornecedor. FastAPI e SQLite persistem dados operacionais. Um assistente local com Ollama explica resultados usando RAG sobre documentos curados e tools somente leitura para valores atuais."
    ),
    engineering: text(
      "Feature engineering is leakage-safe (lags and rolling means shifted before the target). Training uses a date-disjoint 80/20 split. Model promotion is explicit, with evaluation gates and rollback. RAG uses Markdown chunks, Ollama embeddings and a local NumPy cosine index — not a hosted vector database. The LLM never becomes the source of current inventory; tools return service JSON. The POS is offline-first and syncs sales later if the API is unavailable.",
      "A engenharia de features evita vazamento (lags e médias móveis deslocadas antes do alvo). O treino usa split temporal 80/20. A promoção do modelo é explícita, com gates de avaliação e rollback. O RAG usa chunks Markdown, embeddings Ollama e um índice local NumPy com cosine similarity — não um vector database hospedado. O LLM não é fonte de estoque atual; as tools devolvem JSON dos serviços. O POS é offline-first e sincroniza vendas depois se a API estiver indisponível."
    ),
    results: text(
      "On the recorded temporal holdout, XGBoost was selected over Random Forest (MAE 1.297 vs 1.322; MAPE 62.58% vs 63.50%; WAPE 80.29% vs 81.85%). Product-level error still matters: Bag Delivery 45L was underpredicted by about 64 units, which is why safety stock and human review are part of the design. Forecasts are decision support, not a guarantee of future sales.",
      "No holdout temporal registrado, o XGBoost foi escolhido em vez de Random Forest (MAE 1.297 vs 1.322; MAPE 62,58% vs 63,50%; WAPE 80,29% vs 81,85%). O erro por produto ainda importa: Bag Delivery 45L foi subestimado em cerca de 64 unidades, por isso estoque de segurança e revisão humana fazem parte do desenho. As previsões são apoio à decisão, não garantia de vendas futuras."
    ),
    stack: ["Python", "XGBoost", "FastAPI", "SQLite", "Ollama", "Qwen3", "RAG", "Docker", "Tauri", "React", "TypeScript"],
  },
  {
    id: "code-conductor",
    featured: "primary",
    title: "CodeConductor",
    tags: ["Agents", "LLM Engineering", "Backend", "FastAPI"],
    github: "https://github.com/henriquecaeiro/code-conductor",
    summary: text(
      "A multi-agent software-engineering orchestrator with a deterministic control flow, isolated Git worktrees, independent review, and human gates on every irreversible step.",
      "Um orquestrador multiagente de engenharia de software com fluxo de controle determinístico, worktrees Git isoladas, review independente e gates humanos em cada passo irreversível."
    ),
    problem: text(
      "Unsupervised coding agents tend to edit the working tree, review their own work, and commit before a human can intervene.",
      "Agentes de código sem supervisão tendem a editar o working tree, revisar o próprio trabalho e fazer commit antes de um humano intervir."
    ),
    approach: text(
      "The orchestrator is a pure state machine — no model is asked what to do next. Roles are split: Product Owner, Investigator, Implementer and Reviewer. Writes happen only in a dedicated worktree. Review runs on a different provider from the implementer. Commit and push are separate human authorizations.",
      "O orquestrador é uma máquina de estados pura — nenhum modelo decide o próximo passo. Os papéis são separados: Product Owner, Investigator, Implementer e Reviewer. Escrita só acontece em uma worktree dedicada. O review roda em um provider diferente do implementer. Commit e push são autorizações humanas separadas."
    ),
    engineering: text(
      "FastAPI exposes runs and resumable SSE events. Persistence uses SQLAlchemy and Alembic. Providers wrap local CLIs already signed in on the machine (Codex, Cursor, optional Claude) — no API keys stored in the project. Destructive Git verbs are refused. CLI output is redacted before storage. A proof-of-life command exercises the full loop against a throwaway repository.",
      "O FastAPI expõe runs e eventos SSE resumíveis. Persistência usa SQLAlchemy e Alembic. Providers encapsulam CLIs locais já autenticadas (Codex, Cursor, Claude opcional) — sem API keys no projeto. Verbos Git destrutivos são recusados. A saída das CLIs é redigida antes de ser armazenada. Um comando de proof-of-life exercita o loop completo contra um repositório descartável."
    ),
    results: text(
      "The MVP is demonstrable: persistence, API, SSE, approvals, worktrees, cancellation, resume, and a reproducible proof of life against real providers. The default test suite is fully offline.",
      "O MVP é demonstrável: persistência, API, SSE, aprovações, worktrees, cancelamento, resume e um proof of life reproduzível contra providers reais. A suíte padrão de testes é totalmente offline."
    ),
    stack: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "SSE", "Git worktrees", "React"],
  },
  {
    id: "ticket-triage",
    featured: "secondary",
    title: "Ticket Triage",
    tags: ["NLP", "Machine Learning", "FastAPI"],
    github: "https://github.com/henriquecaeiro/ticket-triage",
    demo: "https://effulgent-naiad-81a0da.netlify.app",
    summary: text(
      "Automatic queue prediction for English support tickets, with abstention when the model is not confident.",
      "Predição automática de fila para tickets de suporte em inglês, com abstenção quando o modelo não está confiante."
    ),
    problem: text(
      "Manual triage is slow. The goal is to suggest the right queue and warn when the model should not auto-route.",
      "A triagem manual é lenta. O objetivo é sugerir a fila certa e avisar quando o modelo não deve rotear sozinho."
    ),
    approach: text(
      "Subject and body are cleaned into a single text field. Baseline TF-IDF models (Logistic Regression and Linear SVC) are trained, then gap-based confidence profiles are calibrated: strict, balanced and aggressive. A FastAPI service serves predictions.",
      "Assunto e corpo são limpos em um único campo de texto. Modelos baseline TF-IDF (Logistic Regression e Linear SVC) são treinados e perfis de confiança baseados em gap são calibrados: strict, balanced e aggressive. Um serviço FastAPI serve as predições."
    ),
    engineering: text(
      "The selected model is tfidf_svc_word, chosen by highest macro F1. Confidence is a score gap between top-1 and top-2, not a probability. Very short tickets can request more information. The companion front-end consumes the API; free-tier hosting may cold-start.",
      "O modelo selecionado é tfidf_svc_word, escolhido pelo maior macro F1. A confiança é o gap de score entre top-1 e top-2, não uma probabilidade. Tickets muito curtos podem pedir mais informação. O front-end consome a API; o hosting em free tier pode ter cold start."
    ),
    results: text(
      "Best baseline: macro F1 0.720, top-3 accuracy 0.878. Calibrated profiles — strict: coverage 1.0% / auto accuracy 1.00; balanced: coverage 60.0% / auto accuracy 0.965 / auto macro F1 0.966; aggressive: coverage 100% / auto accuracy 0.798 / auto macro F1 0.802.",
      "Melhor baseline: macro F1 0,720, top-3 accuracy 0,878. Perfis calibrados — strict: cobertura 1,0% / acurácia automática 1,00; balanced: cobertura 60,0% / acurácia automática 0,965 / auto macro F1 0,966; aggressive: cobertura 100% / acurácia automática 0,798 / auto macro F1 0,802."
    ),
    stack: ["Python", "TF-IDF", "Linear SVC", "Logistic Regression", "FastAPI", "React"],
  },
  {
    id: "fraud-detection",
    featured: "secondary",
    title: "Fraud Detection",
    tags: ["PyTorch", "Machine Learning", "Anomaly Detection"],
    github: "https://github.com/henriquecaeiro/fraud_detection",
    summary: text(
      "Autoencoder-based anomaly detection for fraud in transaction data, using reconstruction error and percentile thresholds.",
      "Detecção de anomalias com autoencoder para fraude em dados de transações, usando erro de reconstrução e thresholds por percentil."
    ),
    problem: text(
      "Fraud is rare. A supervised classifier trained on labels can miss unusual patterns; the project treats fraud as an anomaly in a heavily imbalanced transaction set.",
      "Fraude é rara. Um classificador supervisionado treinado só em labels pode perder padrões incomuns; o projeto trata fraude como anomalia em um conjunto de transações fortemente desbalanceado."
    ),
    approach: text(
      "A PyTorch autoencoder learns a latent representation of normal transactions. Reconstruction MSE becomes the anomaly score. A percentile threshold (also expressible as an alert rate) flags is_anomaly. Evaluation reports precision, recall, F1, AUPRC and precision at a 1% alert rate.",
      "Um autoencoder em PyTorch aprende uma representação latente de transações normais. O MSE de reconstrução vira o score de anomalia. Um threshold por percentil (também expresso como taxa de alerta) marca is_anomaly. A avaliação reporta precision, recall, F1, AUPRC e precision a 1% de alerta."
    ),
    engineering: text(
      "The preprocessor is fit on the training split only to avoid leakage. Split indices are persisted for reproducible evaluation. A FastAPI service scores raw transaction fields with the saved threshold. Percentile-based thresholds make alert-rate tradeoffs explicit.",
      "O preprocessor é ajustado só no split de treino para evitar vazamento. Índices de split são persistidos para avaliação reproduzível. Um serviço FastAPI pontua os campos brutos da transação com o threshold salvo. Thresholds por percentil deixam o tradeoff da taxa de alerta explícito."
    ),
    results: text(
      "Recorded test-set operating point: precision 0.531, recall 0.874, F1 0.661, AUPRC 0.780, precision@1% 0.124, threshold 0.093. The confusion counts (TP 1,037 / TN 950,576 / FP 917 / FN 149) show the imbalance the threshold has to negotiate.",
      "Ponto de operação registrado no teste: precision 0,531, recall 0,874, F1 0,661, AUPRC 0,780, precision@1% 0,124, threshold 0,093. As contagens (TP 1.037 / TN 950.576 / FP 917 / FN 149) mostram o desbalanceamento que o threshold precisa negociar."
    ),
    stack: ["Python", "PyTorch", "Autoencoder", "scikit-learn", "FastAPI"],
  },
  {
    id: "crypto-analyst",
    featured: "secondary",
    title: "Crypto Analyst",
    tags: ["AI Engineering", "Feature Engineering", "Evaluation"],
    github: "https://github.com/henriquecaeiro/crypto-analyst",
    summary: text(
      "A market-analysis engine for crypto futures: candle pipelines, technical features, a deterministic decision layer, backtesting, and an optional agent layer for audit — not a money-making bot.",
      "Um motor de análise de mercado para futures de cripto: pipelines de candles, features técnicas, camada de decisão determinística, backtesting e uma camada opcional de agentes para auditoria — não um robô de ganhar dinheiro."
    ),
    problem: text(
      "Discretionary trading notes are hard to evaluate. The engineering problem is to turn market structure into reproducible features, decisions and post-hoc evaluation — including when expected value is negative.",
      "Anotações discricionárias de trading são difíceis de avaliar. O problema de engenharia é transformar estrutura de mercado em features, decisões e avaliação reproduzíveis — inclusive quando a expectativa é negativa."
    ),
    approach: text(
      "Public Binance candles feed a pipeline that computes EMA, RSI, ATR, volume and market structure. A deterministic engine scores setups and emits actions. Agents, when used, refine or audit the JSON; they do not silently overwrite the score. Historical replay evaluates WIN/LOSS/EXPIRED paths without look-ahead.",
      "Candles públicos da Binance alimentam um pipeline que calcula EMA, RSI, ATR, volume e estrutura de mercado. Um motor determinístico pontua setups e emite ações. Agentes, quando usados, refinam ou auditam o JSON; não sobrescrevem o score em silêncio. Replay histórico avalia caminhos WIN/LOSS/EXPIRED sem look-ahead."
    ),
    engineering: text(
      "The same input produces the same score. Costs and slippage can be deducted in evaluation. Identifying a strategy with negative expectancy is treated as a valid engineering outcome, not a failure to hide. The system analyzes; it does not place orders.",
      "O mesmo input produz o mesmo score. Custos e slippage podem ser descontados na avaliação. Identificar uma estratégia com expectativa negativa é um resultado válido de engenharia, não algo a esconder. O sistema analisa; não envia ordens."
    ),
    results: text(
      "The work is framed as evaluation infrastructure for market hypotheses. Historical results are not a promise of future performance.",
      "O trabalho é enquadrado como infraestrutura de avaliação para hipóteses de mercado. Resultados históricos não são promessa de desempenho futuro."
    ),
    stack: ["Python", "Feature engineering", "EMA / RSI / ATR", "Backtesting", "Agents"],
  },
  {
    id: "rent-estimator",
    featured: "secondary",
    title: "Brazil Rent Price Estimator",
    tags: ["Machine Learning", "FastAPI"],
    github: "https://github.com/henriquecaeiro/brazil-rent-price-estimator",
    summary: text(
      "Rent-price estimation for São Paulo properties, from feature engineering and stacking to a FastAPI prediction service.",
      "Estimativa de aluguel para imóveis em São Paulo, da engenharia de features e stacking até um serviço FastAPI de predição."
    ),
    problem: text(
      "Tenants and landlords need a structured estimate from property features and location, not only comparable listings.",
      "Inquilinos e proprietários precisam de uma estimativa estruturada a partir de características e localização, não só de anúncios comparáveis."
    ),
    approach: text(
      "A StackingRegressor combines Random Forest and CatBoost, with Ridge as the final estimator. KMeans clusters latitude/longitude after a geocoding step. The model is served through FastAPI.",
      "Um StackingRegressor combina Random Forest e CatBoost, com Ridge como estimador final. KMeans agrupa latitude/longitude após geocodificação. O modelo é servido via FastAPI."
    ),
    engineering: text(
      "Notebooks own EDA, feature creation and model export. Geocoding is cached to rents_geocoded.csv so later runs skip the slow lookup. The dataset is from 1 May 2023 and is used for educational purposes.",
      "Notebooks concentram EDA, criação de features e export do modelo. A geocodificação é cacheada em rents_geocoded.csv para as execuções seguintes. O dataset é de 1º de maio de 2023 e é usado para fins educacionais."
    ),
    results: text(
      "Recorded metrics: MAE R$ 998.47, MedAE R$ 588.84, R² 0.7793.",
      "Métricas registradas: MAE R$ 998,47, MedAE R$ 588,84, R² 0,7793."
    ),
    stack: ["Python", "StackingRegressor", "Random Forest", "CatBoost", "Ridge", "KMeans", "FastAPI"],
  },
  {
    id: "sentiment-analysis",
    featured: "secondary",
    title: "Sentiment Analysis",
    tags: ["NLP", "Machine Learning", "FastAPI"],
    github: "https://github.com/henriquecaeiro/sentiment-analysis",
    summary: text(
      "Sentiment140 baseline study: TF-IDF plus Logistic Regression, model selection by validation macro F1, and a FastAPI inference API.",
      "Estudo baseline no Sentiment140: TF-IDF com Logistic Regression, seleção por F1-macro de validação e uma API FastAPI de inferência."
    ),
    problem: text(
      "The task is to classify tweet sentiment with a reproducible classical baseline before reaching for heavier models.",
      "A tarefa é classificar sentimento de tweets com um baseline clássico reproduzível antes de partir para modelos mais pesados."
    ),
    approach: text(
      "Light cleaning, a stratified 80/10/10 split, small OFAT grids over TF-IDF and Logistic Regression, then export of vectorizer, model and metrics. The API supports single, batch and file predictions with request IDs and timing middleware.",
      "Limpeza leve, split estratificado 80/10/10, grids OFAT pequenos sobre TF-IDF e Logistic Regression, depois export de vectorizer, modelo e métricas. A API suporta predição única, em lote e por arquivo, com request ID e middleware de timing."
    ),
    engineering: text(
      "Selection is by validation F1-macro to keep both classes honest. Artifacts are versioned under artifacts/v1. The stack stays classical on purpose: a reference before embeddings or deep models.",
      "A seleção usa F1-macro de validação para não favorecer uma classe. Artefatos são versionados em artifacts/v1. A stack permanece clássica de propósito: uma referência antes de embeddings ou modelos profundos."
    ),
    results: text(
      "Selected config: TF-IDF word/bigram, 100k features, Logistic Regression (liblinear, C=2.0). Test F1-macro 0.798, accuracy 0.798. Validation ROC-AUC 0.875.",
      "Configuração selecionada: TF-IDF palavra/bigram, 100 mil features, Logistic Regression (liblinear, C=2.0). Teste: F1-macro 0,798, accuracy 0,798. Validação: ROC-AUC 0,875."
    ),
    stack: ["Python", "TF-IDF", "Logistic Regression", "scikit-learn", "FastAPI"],
  },
  {
    id: "ecommerce",
    featured: "compact",
    title: "GraphQL E-commerce Backend",
    tags: ["Backend", "PHP"],
    github: "https://github.com/henriquecaeiro/ecommerce-project-scandiweb",
    summary: text(
      "PHP backend for catalog operations: persistence, GraphQL queries and mutations, and associations for images, prices and attributes, using PDO and PSR-oriented OOP.",
      "Backend PHP para operações de catálogo: persistência, queries e mutations GraphQL, e associações de imagens, preços e atributos, com PDO e OOP orientada a PSR."
    ),
    stack: ["PHP", "GraphQL", "PDO"],
  },
];

export default projects;
