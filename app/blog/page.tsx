import { PenLine } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Nyasa Lohiya",
  description: "Writing about AI Engineering, LangGraph, RAG, and building intelligent systems.",
};

export default function Blog() {
  return (
    <div className="pt-24 pb-16 min-h-[80vh] flex flex-col">
      <AnimatedSection className="container mx-auto px-6 max-w-5xl flex-1 flex flex-col">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
          Blog
        </h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
          Writing about AI Engineering, agentic architectures, and lessons learned from building production LLM applications.
        </p>
        
        <div className="flex-1 flex flex-col items-center justify-center text-center py-20 bg-card border border-border rounded-xl shadow-sm border-dashed">
          <div className="p-4 bg-secondary rounded-full mb-6">
            <PenLine className="w-8 h-8 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
          <p className="text-muted-foreground max-w-md">
            I'm currently writing my first few articles. Check back soon for deep dives into RAG architectures and LangGraph agent design.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
