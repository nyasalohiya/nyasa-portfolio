"use client";

import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { projects } from "@/lib/data/projects";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Github } from "@/components/shared/Icons";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <AnimatedSection id="projects" className="py-24 border-t border-border/50 bg-background/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-center">
          Featured Work
        </h2>
        
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <Link 
                        href={project.github} 
                        target="_blank"
                        className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-secondary rounded-full"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    )}
                    {project.demo && (
                      <Link 
                        href={project.demo} 
                        target="_blank"
                        className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-secondary rounded-full"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => toggleProject(project.id)}
                  className="flex items-center gap-2 text-primary font-medium hover:underline focus:outline-none"
                >
                  {expandedProject === project.id ? "Show Less" : "Read Deep Dive"}
                  {expandedProject === project.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 mt-8 border-t border-border grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 text-lg">Architecture</h4>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {project.architecture}
                          </p>
                          
                          <h4 className="font-semibold text-foreground mb-3 text-lg">Key Challenges</h4>
                          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                            {project.challenges.map((challenge, i) => (
                              <li key={i}>{challenge}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 text-lg">Key Features</h4>
                          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
                            {project.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
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
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
