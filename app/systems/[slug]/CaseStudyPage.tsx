"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Lightbulb, AlertTriangle, Rocket, Layers } from "lucide-react";
import { Github } from "@/components/shared/Icons";
import type { Project } from "@/lib/data/projects";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function CaseStudyPage({ project }: { project: Project }) {
  return (
    <article className="relative bg-[#030305] min-h-screen">

      {/* ─── 1. HERO ─── */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Back */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Systems
            </Link>
          </motion.div>

          {/* Title & Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {project.status === "completed" ? "Production" : "In Progress"}
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-white leading-[0.95] mb-8">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl text-white/50 leading-relaxed max-w-3xl mb-12">
              {project.longDescription}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors"
                >
                  Live Demo
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white font-bold text-sm hover:bg-white/[0.08] transition-all"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </Link>
              )}
            </div>
          </motion.div>

          {/* Hero Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#060608]"
          >
            <div className="relative h-[300px] sm:h-[500px] lg:h-[600px]">
              <Image
                src={project.thumbnail}
                alt={`${project.title} Dashboard`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={100}
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Results Bar ─── */}
      <section className="py-16 border-y border-white/[0.04]">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {project.results.map((result) => (
              <div key={result.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                  {result.value}
                </div>
                <div className="text-sm text-white/40 font-medium">{result.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 2. PROBLEM ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7C5CFF] mb-6 block">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-8">
              Why this system exists.
            </h2>
            <p className="text-xl text-white/50 leading-relaxed max-w-3xl">
              {project.problem}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. ARCHITECTURE ─── */}
      <section className="py-24 bg-[#060608]">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00F0FF] mb-6 block">
                Architecture
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-8">
                How it works under the hood.
              </h2>
              <p className="text-xl text-white/50 leading-relaxed max-w-3xl">
                {project.architecture}
              </p>
            </div>

            {/* Architecture Diagram */}
            <div className="relative rounded-2xl border border-white/[0.06] bg-[#030305] overflow-hidden group">
              <div className="relative w-full aspect-video">
                <Image
                  src={`/projects/${project.id}-arch.png`}
                  alt={`${project.title} Architecture Diagram`}
                  fill
                  className="object-contain p-2 sm:p-8 group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 1000px"
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. IMPLEMENTATION ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7C5CFF] mb-6 block">
                Implementation
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-8">
                Engineering decisions & tradeoffs.
              </h2>
              <p className="text-xl text-white/50 leading-relaxed max-w-3xl mb-12">
                {project.rationale}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm font-medium text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Key Capabilities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-white/60 text-[15px] leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 5. CHALLENGES ─── */}
      <section className="py-24 bg-[#060608]">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 mb-6 block">
                Challenges
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                Real engineering problems.
              </h2>
            </div>

            <div className="space-y-4">
              {project.challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-[#030305] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
                >
                  <AlertTriangle className="w-5 h-5 text-amber-400/60 shrink-0 mt-0.5" />
                  <p className="text-white/60 text-[15px] leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 6. LESSONS LEARNED ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400 mb-6 block">
              Lessons Learned
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-8">
              What this system taught me.
            </h2>
            <div className="flex items-start gap-5 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04] max-w-3xl">
              <Lightbulb className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <p className="text-lg text-white/60 leading-relaxed">
                {project.lessons}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 7. FUTURE ROADMAP ─── */}
      <section className="py-24 bg-[#060608]">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7C5CFF] mb-6 block">
                Roadmap
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                What&apos;s next.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {project.futureRoadmap.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-[#030305] border border-white/[0.04]"
                >
                  <Rocket className="w-5 h-5 text-[#7C5CFF]/60 shrink-0 mt-0.5" />
                  <p className="text-white/60 text-[15px] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-white/30 text-sm mb-6">Explore another system</p>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white font-bold text-sm hover:bg-white/[0.08] transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Systems
            </Link>
          </motion.div>
        </div>
      </section>

    </article>
  );
}
