"use client";

import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { projects } from "@/lib/data/projects";
import { ExternalLink, ChevronDown, ChevronUp, Layers, Sparkles, Network, FileText, Bot } from "lucide-react";
import { Github } from "@/components/shared/Icons";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const projectVisuals: Record<string, { icon: typeof Sparkles; title: string; color: string }> = {
  uiverse: {
    icon: Network,
    title: "AUTONOMOUS AGENT GRAPH EXPLORER",
    color: "from-purple-500/20 via-[#7C5CFF]/15 to-transparent",
  },
  personalai: {
    icon: Bot,
    title: "MULTI-PERSONA CONTEXTUAL ENGINE",
    color: "from-indigo-500/20 via-[#7C5CFF]/15 to-transparent",
  },
  "fastapi-rag": {
    icon: FileText,
    title: "SEMANTIC VECTOR RAG PIPELINE",
    color: "from-blue-500/20 via-[#7C5CFF]/15 to-transparent",
  },
};

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <AnimatedSection id="projects" className="py-28 border-t border-white/[0.06] bg-[#050508]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C5CFF] mb-2">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Product Showcase
          </h2>
        </div>
        
        <div className="flex flex-col gap-10">
          {projects.map((project) => {
            const visual = projectVisuals[project.id] || projectVisuals.uiverse;
            const VisualIcon = visual.icon;

            return (
              <div 
                key={project.id} 
                className="ai-glow-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300"
              >
                {/* Visual Header Mockup */}
                <div className={`h-48 sm:h-56 bg-gradient-to-br ${visual.color} relative p-8 flex flex-col justify-between overflow-hidden border-b border-white/10`}>
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                  <div className="flex justify-between items-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[11px] font-mono tracking-widest text-white/80 uppercase">
                      <VisualIcon className="w-3.5 h-3.5 text-[#7C5CFF]" />
                      {visual.title}
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#7C5CFF]/20 border border-[#7C5CFF]/30 text-[#A78BFA]">
                      PRODUCTION READY
                    </span>
                  </div>

                  <div className="z-10 mt-auto">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 sm:p-10">
                  <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed font-normal">
                    {project.description}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1.5 bg-white/[0.04] text-white/90 text-xs font-medium rounded-lg border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons & Expand CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <button 
                      onClick={() => toggleProject(project.id)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A78BFA] hover:text-white transition-colors"
                    >
                      {expandedProject === project.id ? "Close Case Study" : "View Architecture & Deep Dive"}
                      {expandedProject === project.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    <div className="flex items-center gap-3">
                      {project.github && (
                        <Link 
                          href={project.github} 
                          target="_blank"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white border border-white/10 transition-all"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </Link>
                      )}
                      {project.demo && (
                        <Link 
                          href={project.demo} 
                          target="_blank"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7C5CFF] hover:bg-[#6C4CEF] text-xs font-semibold text-white transition-all shadow-[0_0_20px_rgba(124,92,255,0.3)]"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
                  
                  {/* Expandable Deep Dive Case Study */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 mt-8 border-t border-white/10 grid md:grid-cols-2 gap-8 text-sm">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-white mb-2 text-base flex items-center gap-2">
                                <Layers className="w-4 h-4 text-[#7C5CFF]" /> System Architecture
                              </h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {project.architecture}
                              </p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-white mb-2 text-base">Key Engineering Challenges</h4>
                              <ul className="list-disc pl-5 text-muted-foreground space-y-1.5">
                                {project.challenges.map((challenge, i) => (
                                  <li key={i}>{challenge}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-white mb-2 text-base">Key Capabilities</h4>
                              <ul className="list-disc pl-5 text-muted-foreground space-y-1.5 mb-4">
                                {project.features.map((feature, i) => (
                                  <li key={i}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {project.longDescription}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
