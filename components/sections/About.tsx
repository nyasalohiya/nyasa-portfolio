"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Terminal, Cpu, Network, Layers } from "lucide-react";

type TerminalCommand = "whoami" | "stack" | "philosophy";

export default function About() {
  const [activeCommand, setActiveCommand] = useState<TerminalCommand>("philosophy");
  const [terminalOutput, setTerminalOutput] = useState<React.ReactNode>(
    "Build systems that reason, execute, and scale without manual intervention."
  );

  const handleCommand = (cmd: TerminalCommand) => {
    setActiveCommand(cmd);
    if (cmd === "whoami") {
      setTerminalOutput(
        <div>
          <span className="text-[#A78BFA]">Role:</span> AI Systems Engineer<br />
          <span className="text-[#A78BFA]">Location:</span> Ahmedabad, India<br />
          <span className="text-[#A78BFA]">Specialization:</span> Multi-agent Orchestration
        </div>
      );
    } else if (cmd === "stack") {
      setTerminalOutput(
        <div>
          <span className="text-emerald-400">Loading modules...</span><br />
          [LangGraph, Azure OpenAI, FastAPI, React, Django]<br />
          <span className="text-white/40">Dependencies resolved.</span>
        </div>
      );
    } else {
      setTerminalOutput("Build systems that reason, execute, and scale without manual intervention.");
    }
  };

  return (
    <section id="about" className="relative py-40 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 max-w-3xl"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7C5CFF] mb-6 block">
            Engineering Identity
          </span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-[-0.04em] text-white leading-tight mb-8">
            Architecture<br />Over Hype.
          </h2>
          <p className="text-lg sm:text-xl text-white/50 leading-relaxed font-medium">
            I don&apos;t just string APIs together. I build autonomous pipelines, robust retrieval systems, and multi-agent workflows that solve complex business problems at scale.
          </p>
        </motion.div>

        {/* Interactive Terminal Experience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Command Menu */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {(["philosophy", "whoami", "stack"] as TerminalCommand[]).map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className={`group relative flex items-center gap-4 p-5 rounded-2xl border transition-all duration-500 text-left ${activeCommand === cmd
                    ? "bg-[#7C5CFF]/[0.08] border-[#7C5CFF]/30 text-white"
                    : "bg-white/[0.02] border-white/[0.05] text-white/40 hover:bg-white/[0.04] hover:text-white/80"
                  }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${activeCommand === cmd ? "bg-[#7C5CFF]/20 text-[#7C5CFF]" : "bg-white/[0.05] text-white/40 group-hover:text-white/80"
                  }`}>
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono opacity-50 block mb-0.5">{">"} {cmd}</span>
                  <span className="text-sm font-semibold tracking-wide capitalize">{cmd === "whoami" ? "Identity" : cmd}</span>
                </div>
                {activeCommand === cmd && (
                  <motion.div layoutId="active-indicator" className="absolute left-0 w-1 h-1/2 bg-[#7C5CFF] rounded-r-full top-1/4" />
                )}
              </button>
            ))}
          </div>

          {/* Terminal Output */}
          <div className="lg:col-span-8 bg-[#060608] border border-white/[0.08] rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-[#7C5CFF]/20 transition-all duration-500">
            {/* Window chrome */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]/20 border border-[#FF5F56]/30" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/20 border border-[#FFBD2E]/30" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]/20 border border-[#27C93F]/30" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/30 ml-2">
                  bash — ai_engineer
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 font-mono text-sm leading-[1.8] text-white/70">
              <div className="flex gap-3 mb-4">
                <span className="text-[#7C5CFF] shrink-0">~</span>
                <span className="text-white/30 shrink-0">$</span>
                <span className="text-emerald-400">./execute {activeCommand}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCommand}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="pl-6"
                >
                  {terminalOutput}
                </motion.div>
              </AnimatePresence>

              {/* Blinking Cursor */}
              <div className="flex gap-3 mt-4">
                <span className="text-[#7C5CFF] shrink-0">~</span>
                <span className="text-white/30 shrink-0">$</span>
                <motion.span
                  className="w-2.5 h-6 bg-[#00F0FF] inline-block ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#7C5CFF]/5 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
