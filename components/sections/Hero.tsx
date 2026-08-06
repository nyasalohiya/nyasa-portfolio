"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Bot, Cpu } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-[#030305]">
      {/* AI Ambient Lighting & Beam Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#7C5CFF]/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-[#A78BFA]/20 blur-[80px] rounded-full pointer-events-none"></div>

      {/* Vercel/Linear-style grid overlay with radial mask */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_60%,transparent_100%)] pointer-events-none"></div>

      <div className="container relative z-10 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full ai-badge text-xs font-semibold tracking-wide uppercase mb-8 shadow-[0_0_15px_rgba(124,92,255,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C5CFF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C5CFF]"></span>
          </span>
          AI Engineer · Generative AI & Agentic Systems
        </motion.div>

        {/* Giant Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 text-white leading-[1.05]"
        >
          Nyasa Lohiya
        </motion.h1>

        {/* Sub-headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-[#A78BFA] max-w-3xl"
        >
          Building Intelligent AI Systems.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-normal"
        >
          Architecting enterprise Generative AI applications, multi-agent workflows with LangGraph, production RAG pipelines, and LLM-powered systems.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#7C5CFF] text-white font-medium hover:bg-[#6C4CEF] transition-all duration-300 w-full sm:w-auto shadow-[0_0_30px_rgba(124,92,255,0.4)] hover:shadow-[0_0_40px_rgba(124,92,255,0.6)]"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium transition-all duration-300 w-full sm:w-auto border border-white/10 hover:border-white/20 backdrop-blur-md"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </Link>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex items-center gap-6"
        >
          <Link
            href="https://github.com/nyasalohiya"
            target="_blank"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-muted-foreground hover:text-white transition-all duration-200"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nyasa-lohiya-486751283"
            target="_blank"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-muted-foreground hover:text-white transition-all duration-200"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator glow line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#7C5CFF]/60 via-[#7C5CFF]/20 to-transparent"></div>
      </motion.div>
    </section>
  );
}
