"use client";

import { motion } from "framer-motion";
import { Beaker, ChevronRight } from "lucide-react";

const roadmap = {
  now: {
    label: "NOW",
    title: "Multi-Agent Browser Automation Platform",
    description: "Autonomous browser agents, workflow orchestration, enterprise automation, and intelligent document systems.",
  },
  next: [
    "MCP Integration",
    "Agent2Agent Protocol",
    "Computer Use",
    "Long-term Memory",
    "Knowledge Graphs",
  ],
};

export default function CurrentlyBuilding() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7C5CFF] mb-6 block">
            Roadmap
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            What&apos;s next.
          </h2>
        </motion.div>

        <div className="space-y-8">

          {/* NOW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#060608] border border-white/[0.06] rounded-2xl p-8 sm:p-10 group hover:border-[#00F0FF]/20 transition-all duration-500"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="shrink-0">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#00F0FF]/[0.06] border border-[#00F0FF]/20">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F0FF]" />
                  </div>
                  <span className="text-xs font-bold text-[#00F0FF] uppercase tracking-wider">{roadmap.now.label}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {roadmap.now.title}
                </h3>
                <p className="text-white/40 text-base leading-relaxed max-w-2xl">
                  {roadmap.now.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* NEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#060608] border border-white/[0.04] rounded-2xl p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <Beaker className="w-4 h-4 text-white/30" />
              <span className="text-xs font-bold text-white/30 uppercase tracking-wider">Next</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {roadmap.next.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-sm font-medium text-white/50 hover:text-white/70 hover:border-white/[0.12] transition-all duration-300"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#7C5CFF]/50" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
