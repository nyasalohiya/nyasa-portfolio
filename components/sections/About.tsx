import AnimatedSection from "@/components/shared/AnimatedSection";
import { Terminal, Cpu, Network, Layers } from "lucide-react";

const pillars = [
  {
    icon: Network,
    number: "01",
    title: "Agentic Systems",
    description: "Designing multi-agent orchestration workflows with LangGraph & AutoGen for contextual decision-making."
  },
  {
    icon: Layers,
    number: "02",
    title: "Production RAG",
    description: "Building high-precision semantic retrieval pipelines, GraphRAG, and vector search systems."
  },
  {
    icon: Cpu,
    number: "03",
    title: "Enterprise AI",
    description: "Integrating Azure OpenAI & LLMs into mission-critical APIs and document automation workflows."
  }
];

export default function About() {
  return (
    <AnimatedSection id="about" className="py-28 border-t border-white/[0.06] bg-[#050508] relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C5CFF] mb-2">
            Engineering Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Architecture Over Hype.
          </h2>
        </div>
        
        {/* Core Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title} 
                className="ai-glow-card rounded-2xl p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#7C5CFF]/10 border border-[#7C5CFF]/20 flex items-center justify-center text-[#7C5CFF] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground/60">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Story Statement + Interactive Code Terminal */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 ai-glow-card rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Building AI that reasons, executes, and scales.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 font-normal">
              I am an AI Engineer specializing in transforming complex manual processes into intelligent, autonomous software workflows. I focus on building systems that don't just generate text, but reliably execute actions in production environments.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-[#A78BFA]">
              <span className="px-3 py-1.5 rounded-lg bg-[#7C5CFF]/10 border border-[#7C5CFF]/20">
                Ahmedabad, India
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#7C5CFF]/10 border border-[#7C5CFF]/20">
                Data Science M.Sc.
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#08080c] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden font-mono text-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#7C5CFF]" />
                <span>ai_engineer.py</span>
              </div>
              <span className="text-emerald-400 font-semibold">● ACTIVE SYSTEM</span>
            </div>
            <pre className="text-xs text-muted-foreground leading-relaxed overflow-x-auto">
              <code>
                <span className="text-[#7C5CFF]">class</span> <span className="text-white font-semibold">AIEngineer</span>:<br/>
                &nbsp;&nbsp;<span className="text-[#7C5CFF]">def</span> <span className="text-blue-400">__init__</span>(self):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.focus = <span className="text-emerald-300">"Production AI Systems"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;self.stack = [<span className="text-emerald-300">"LangGraph"</span>, <span className="text-emerald-300">"Azure OpenAI"</span>, <span className="text-emerald-300">"FastAPI"</span>]<br/>
                <br/>
                &nbsp;&nbsp;<span className="text-[#7C5CFF]">def</span> <span className="text-blue-400">execute_workflow</span>(self, task):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;agent = self.build_agent(task)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7C5CFF]">return</span> agent.run_until_complete()<br/>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
