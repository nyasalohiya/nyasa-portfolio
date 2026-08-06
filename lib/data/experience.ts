export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  impact: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "adrta",
    role: "AI Engineer (Internship)",
    company: "Adrta Technologies",
    period: "February 2026 – July 2026",
    responsibilities: [
      "Architected enterprise Generative AI applications using Azure OpenAI and LangGraph to automate document-centric workflows.",
      "Engineered an AI-powered document generation system capable of producing structured reports from dynamic user-defined templates.",
      "Implemented multi-agent orchestration workflows enabling autonomous task execution and contextual decision-making.",
      "Integrated LLMs with backend APIs and external tools to automate business processes and improve operational efficiency."
    ],
    impact: "Automated core enterprise business processes and document generation, driving operational efficiency and intelligent decision-making.",
    technologies: ["Azure OpenAI", "LangGraph", "Generative AI", "AI Agents", "Python", "FastAPI", "LLMs"]
  }
];
