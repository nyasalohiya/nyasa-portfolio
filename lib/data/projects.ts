export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  tags: string[];
  architecture: string;
  challenges: string[];
  features: string[];
  github?: string;
  demo?: string;
  status: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    id: "uiverse",
    title: "UIVerse",
    description:
      "Autonomous UI exploration platform with intelligent web crawling, UI state graph generation, execution dashboards, and enterprise reporting.",
    longDescription:
      "UIVerse is an autonomous UI exploration platform designed for enterprise QA teams. It combines intelligent web crawling with AI-powered state graph generation to automatically explore and document UI flows without manual scripting. The platform features real-time execution dashboards, comprehensive reporting, and integrates with enterprise CI/CD pipelines.",
    thumbnail: "/projects/uiverse.png",
    tags: ["FastAPI", "Playwright", "NetworkX", "Chart.js", "Vis.js", "Python"],
    architecture:
      "Microservices architecture with a FastAPI backend orchestrating LangGraph-based AI agents for autonomous navigation. The UI state graph is generated using NetworkX and visualised with Vis.js and Chart.js dashboards.",
    challenges: [
      "Building reliable autonomous UI navigation across diverse web applications",
      "Designing an efficient graph data structure using NetworkX for UI state representation",
      "Handling dynamic content, SPAs, and complex authentication flows",
      "Scaling concurrent exploration sessions in enterprise environments",
    ],
    features: [
      "Autonomous web crawling with Playwright & AI-driven decision making",
      "UI state graph generation (NetworkX) and visualization (Vis.js)",
      "Real-time execution monitoring dashboard with Chart.js",
      "Enterprise reporting with PDF/Excel export",
      "CI/CD pipeline integration",
      "Multi-session parallel execution",
    ],
    github: "https://github.com/nyasalohiya",
    status: "completed",
  },
  {
    id: "personalai",
    title: "PersonalAI",
    description:
      "Multi-persona AI assistant with document Q&A, semantic search, RAG, and persistent memory.",
    longDescription:
      "PersonalAI is a sophisticated multi-persona AI assistant built with FastAPI, React, and Azure OpenAI that maintains distinct conversation personalities, long-term memory, and knowledge bases. Users can upload documents, which are processed through a RAG pipeline for semantic search and contextual Q&A.",
    thumbnail: "/projects/personalai.png",
    tags: ["FastAPI", "React", "Azure OpenAI", "Python", "RAG", "Semantic Search"],
    architecture:
      "RAG pipeline with document ingestion, chunking, and embedding via Azure OpenAI. Vector store manages semantic embeddings for fast retrieval. React frontend communicates with a FastAPI async backend.",
    challenges: [
      "Maintaining coherent persona consistency across long conversations",
      "Efficient retrieval from large document collections",
      "Balancing retrieval precision with response latency",
      "Implementing persistent memory without privacy leakage between users",
    ],
    features: [
      "Multiple AI personas with distinct personalities",
      "Document upload and semantic Q&A",
      "Persistent conversation memory",
      "Semantic search across knowledge base",
      "Context-aware response generation",
    ],
    github: "https://github.com/nyasalohiya",
    status: "completed",
  },
  {
    id: "fastapi-rag",
    title: "FastAPI RAG Document QA System",
    description:
      "Document Q&A platform using Retrieval-Augmented Generation (RAG) and semantic search powered by Sentence Transformers & PyPDF2.",
    longDescription:
      "A production-ready RAG system built on FastAPI that enables organizations to deploy document Q&A capabilities at scale. The system ingests documents in multiple formats (PDF, DOCX, TXT) via PyPDF2, creates semantic embeddings using Sentence Transformers, and provides contextual question answering.",
    thumbnail: "/projects/fastapi-rag.png",
    tags: ["FastAPI", "Python", "Sentence Transformers", "PyPDF2", "Embeddings", "RAG"],
    architecture:
      "FastAPI serves as the REST API layer with async request handling. Documents are parsed with PyPDF2, chunked, embedded using Sentence Transformers, and indexed into a vector store for fast RAG retrieval.",
    challenges: [
      "Optimizing chunk size and overlap for retrieval quality with Sentence Transformers",
      "Handling diverse document formats consistently with PyPDF2",
      "Managing token limits in context window construction",
      "Designing a clean REST API layer with FastAPI",
    ],
    features: [
      "Multi-format document ingestion via PyPDF2",
      "Sentence Transformers vector embeddings",
      "Semantic search with relevance scoring",
      "Contextual question answering REST API",
      "Rate limiting and usage monitoring",
    ],
    github: "https://github.com/nyasalohiya",
    status: "completed",
  },
];
