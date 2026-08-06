"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/Icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background animated grid (Vercel style) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container relative z-10 px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 border border-border"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          AI Engineer · Ahmedabad, India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          Nyasa Lohiya
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-muted-foreground tracking-tight mb-6"
        >
          Building Intelligent AI Systems.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          Specializing in Generative AI, AI Agents, LangGraph, and LLM-powered Applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors w-full sm:w-auto border border-border"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex items-center gap-6"
        >
          <Link href="https://github.com/nyasalohiya" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/nyasa-lohiya-486751283" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-border to-transparent"></div>
      </motion.div>
    </section>
  );
}
