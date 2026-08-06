import AnimatedSection from "@/components/shared/AnimatedSection";
import { Terminal } from "lucide-react";

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 border-t border-border/50 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am an AI Engineer passionate about pushing the boundaries of what's possible with LLMs. 
                I don't just use APIs; I build robust, intelligent systems that solve complex enterprise problems.
              </p>
              <p>
                My expertise lies in designing agentic workflows using LangGraph and building highly accurate RAG pipelines. 
                I thrive in the intersection of software engineering and machine learning, ensuring that AI solutions are not only smart but scalable, reliable, and production-ready.
              </p>
              <p>
                When I'm not architecting AI agents, you'll find me exploring the latest advancements in open-source models, contributing to the community, or optimizing backend systems for maximum efficiency.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-5 h-5 text-muted-foreground" />
                <span className="font-mono text-sm text-muted-foreground">engineering_mindset.py</span>
              </div>
              <pre className="font-mono text-sm text-primary overflow-x-auto">
                <code>
{`class AI_Engineer:
    def __init__(self):
        self.focus = "Production-grade AI"
        self.stack = ["LLMs", "Agents", "RAG"]
        
    def solve_problem(self, problem):
        plan = self.analyze(problem)
        architecture = self.design(plan)
        return self.implement(architecture)
        
    @property
    def philosophy(self):
        return "Build systems that reason."`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
