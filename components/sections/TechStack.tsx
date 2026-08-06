import AnimatedSection from "@/components/shared/AnimatedSection";
import { techStack } from "@/lib/data/tech-stack";
import { Cpu, Code2, Server, Wrench } from "lucide-react";

const categoryIcons: Record<string, typeof Cpu> = {
  "AI & Machine Learning": Cpu,
  "Programming": Code2,
  "Backend & APIs": Server,
  "Developer Tools": Wrench,
};

export default function TechStack() {
  return (
    <AnimatedSection id="tech-stack" className="py-28 border-t border-white/[0.06] bg-[#030305]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C5CFF] mb-2">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Technical Stack
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category) => {
            const Icon = categoryIcons[category.title] || Cpu;
            return (
              <div 
                key={category.title} 
                className="ai-glow-card rounded-2xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-[#7C5CFF]/10 border border-[#7C5CFF]/20 flex items-center justify-center text-[#7C5CFF] group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-muted-foreground hover:text-white border border-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
