"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data/experience";
import { Target, Layers, Zap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-8 md:py-12 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7C5CFF] mb-6 block">
            Career Progression
          </span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-[-0.04em] text-white leading-tight">
            Engineering<br />Journey.
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-[#060608] border border-white/[0.06] rounded-3xl p-8 sm:p-12 hover:border-[#7C5CFF]/30 transition-all duration-700 relative overflow-hidden"
            >
              {/* Subtle background element */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#7C5CFF]/[0.03] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/[0.04] pb-8">
                  <div>
                    <div className="text-sm font-mono text-[#A78BFA] mb-3">{exp.company}</div>
                    <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{exp.role}</h3>
                  </div>
                  <div className="px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-white/50 whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  
                  {/* Left Column: Impact & Execution */}
                  <div className="space-y-10">
                    <div>
                      <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white/60 mb-5">
                        <Target className="w-4 h-4 text-[#7C5CFF]" />
                        Strategic Impact
                      </h4>
                      <p className="text-white/80 text-lg leading-relaxed font-medium">
                        {exp.impact}
                      </p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white/60 mb-5">
                        <Zap className="w-4 h-4 text-[#7C5CFF]" />
                        Key Execution
                      </h4>
                      <ul className="space-y-4">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0 group-hover:bg-[#7C5CFF] transition-colors duration-500" />
                            <span className="text-white/50 text-[15px] leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Architecture & Tech */}
                  <div className="space-y-10 lg:pl-12 lg:border-l border-white/[0.04]">
                    <div>
                      <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white/60 mb-5">
                        <Layers className="w-4 h-4 text-emerald-400" />
                        Architecture & Core Tech
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-xl text-[13px] font-medium bg-white/[0.02] border border-white/[0.05] text-white/60 hover:bg-white/[0.06] hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Simulated "Problems Solved" / Architecture notes - based on the data we have */}
                    <div className="p-6 rounded-2xl bg-transparent border border-white/[0.04]">
                      <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">System Notes</div>
                      <p className="text-sm text-white/40 leading-relaxed">
                        Engineered production-grade workflows integrating LLMs for automated reasoning, robust data pipelines for high-accuracy RAG, and scalable microservices capable of handling enterprise loads.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
