export interface TechCategory {
  title: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    title: "AI & Machine Learning",
    items: [
      "Azure OpenAI",
      "LangChain",
      "LangGraph",
      "AutoGen",
      "Prompt Engineering",
      "RAG",
      "GraphRAG",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy"
    ]
  },
  {
    title: "Programming",
    items: [
      "Python",
      "SQL",
      "Java",
      "TypeScript"
    ]
  },
  {
    title: "Backend & APIs",
    items: [
      "FastAPI",
      "REST APIs",
      "Django",
      "PostgreSQL"
    ]
  },
  {
    title: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker"
    ]
  }
];
