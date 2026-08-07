export type ModuleStatus = "Live" | "Building" | "Research" | "Archived";

export interface LabModule {
  id: string;
  code: string;
  title: string;
  purpose: string;
  status: ModuleStatus;
  tags: string[];
  github: string;
  accent: string;
  gridClass: string;
  visual: "graph" | "scan" | "chart" | "document" | "wave" | "terminal";
}

export const moreProjects: LabModule[] = [
  {
    id: "graphrag-gnn",
    code: "MOD-GR-01",
    title: "GraphRAG using GNN",
    purpose: "Relational retrieval over knowledge graphs via graph neural networks.",
    status: "Live",
    tags: ["PyTorch Geometric", "Neo4j", "FastAPI"],
    github: "https://github.com/nyasalohiya/GraphRAG-GNN",
    accent: "#7C5CFF",
    gridClass: "md:col-span-7 md:row-span-2",
    visual: "graph",
  },
  {
    id: "resume-scanner",
    code: "MOD-NLP-02",
    title: "AI Resume Scanner",
    purpose: "NLP pipeline that extracts skills and ranks candidates against job specs.",
    status: "Live",
    tags: ["SpaCy", "Scikit-Learn", "Streamlit"],
    github: "https://github.com/nyasalohiya/resume-scanner-nlp",
    accent: "#00F0FF",
    gridClass: "md:col-span-5",
    visual: "scan",
  },
  {
    id: "stock-analysis",
    code: "MOD-TS-03",
    title: "Algorithmic Stock Analysis",
    purpose: "Time-series forecasting fused with FinBERT sentiment signals.",
    status: "Live",
    tags: ["Pandas", "Prophet", "FinBERT"],
    github: "https://github.com/nyasalohiya/LLM-Stock-Analysis",
    accent: "#10B981",
    gridClass: "md:col-span-5",
    visual: "chart",
  },
  {
    id: "rag-document-qa-langchain",
    code: "MOD-RAG-04",
    title: "RAG Document QA",
    purpose: "LangChain-powered Q&A over PDF corpora with vector retrieval.",
    status: "Live",
    tags: ["LangChain", "Vector DBs", "RAG"],
    github: "https://github.com/nyasalohiya/RAG-Document-QA-LangChain",
    accent: "#F59E0B",
    gridClass: "md:col-span-4 md:row-span-2",
    visual: "document",
  },
  {
    id: "vectorless-rag",
    code: "MOD-RAG-05",
    title: "Vectorless RAG",
    purpose: "Retrieval without traditional vector stores — experimental architecture.",
    status: "Live",
    tags: ["Python", "LLMs", "RAG"],
    github: "https://github.com/nyasalohiya/Vectorless_Rag",
    accent: "#EC4899",
    gridClass: "md:col-span-8",
    visual: "wave",
  },
  {
    id: "python-code-review-agent",
    code: "MOD-AGT-06",
    title: "Code Review Agent",
    purpose: "Autonomous agent that audits Python and enforces best practices.",
    status: "Live",
    tags: ["Agents", "Python", "Code Review"],
    github: "https://github.com/nyasalohiya/python_code_review_agent",
    accent: "#6366F1",
    gridClass: "md:col-span-4",
    visual: "terminal",
  },
];

export const labStats = {
  activeModules: moreProjects.length,
  liveCount: moreProjects.length,
};
