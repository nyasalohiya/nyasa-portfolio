export type TechCategory = "AI & ML" | "Backend" | "Core" | "Database" | "Tools";

export interface TechNode {
  id: string;
  name: string;
  category: TechCategory;
  connections: string[];
  x: number;
  y: number;
}

export const techNodes: TechNode[] = [
  // AI & ML (Center-left cluster)
  { id: "langgraph", name: "LangGraph", category: "AI & ML", connections: ["python", "azure-openai", "rag", "fastapi"], x: 30, y: 35 },
  { id: "langchain", name: "LangChain", category: "AI & ML", connections: ["python", "azure-openai", "rag"], x: 20, y: 50 },
  { id: "azure-openai", name: "Azure OpenAI", category: "AI & ML", connections: ["langgraph", "langchain", "prompt-eng"], x: 25, y: 20 },
  { id: "rag", name: "RAG", category: "AI & ML", connections: ["langgraph", "langchain", "postgresql", "ssms"], x: 35, y: 60 },
  { id: "graphrag", name: "GraphRAG", category: "AI & ML", connections: ["python", "azure-openai"], x: 15, y: 35 },
  { id: "prompt-eng", name: "Prompt Engineering", category: "AI & ML", connections: ["azure-openai"], x: 10, y: 20 },

  // Core Programming (Center cluster)
  { id: "python", name: "Python", category: "Core", connections: ["fastapi", "django", "langgraph", "langchain"], x: 50, y: 40 },
  { id: "typescript", name: "TypeScript", category: "Core", connections: ["react"], x: 50, y: 60 },

  // Backend & APIs (Center-right cluster)
  { id: "fastapi", name: "FastAPI", category: "Backend", connections: ["python", "postgresql", "langgraph"], x: 65, y: 35 },
  { id: "django", name: "Django", category: "Backend", connections: ["python", "postgresql"], x: 70, y: 50 },

  // Database (Bottom right)
  { id: "postgresql", name: "PostgreSQL", category: "Database", connections: ["fastapi", "django", "rag"], x: 75, y: 70 },
  { id: "ssms", name: "SSMS", category: "Database", connections: ["postgresql", "python"], x: 60, y: 75 },

  // Tools (Edges)
  { id: "docker", name: "Docker", category: "Tools", connections: ["fastapi", "django", "postgresql"], x: 85, y: 45 },
  { id: "git", name: "Git", category: "Tools", connections: [], x: 80, y: 25 }
];
