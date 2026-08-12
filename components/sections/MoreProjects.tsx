"use client";

import { motion } from "framer-motion";
import {
  moreProjects,
  labStats,
  type LabModule,
  type ModuleStatus,
} from "@/lib/data/more-projects";
import { Github } from "@/components/shared/Icons";
import { Activity, Beaker, Cpu, FlaskConical } from "lucide-react";
import Link from "next/link";

const statusStyles: Record<
  ModuleStatus,
  { dot: string; text: string; bg: string; border: string; pulse?: boolean }
> = {
  Live: {
    dot: "bg-[#00F0FF]",
    text: "text-[#00F0FF]",
    bg: "bg-[#00F0FF]/[0.08]",
    border: "border-[#00F0FF]/25",
    pulse: true,
  },
  Building: {
    dot: "bg-[#F59E0B]",
    text: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/[0.08]",
    border: "border-[#F59E0B]/25",
    pulse: true,
  },
  Research: {
    dot: "bg-[#A78BFA]",
    text: "text-[#A78BFA]",
    bg: "bg-[#7C5CFF]/[0.08]",
    border: "border-[#7C5CFF]/25",
  },
  Archived: {
    dot: "bg-white/30",
    text: "text-white/40",
    bg: "bg-white/[0.03]",
    border: "border-white/[0.08]",
  },
};

function StatusBadge({ status }: { status: ModuleStatus }) {
  const s = statusStyles[status];
  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${s.bg} ${s.border} ${s.text}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        {s.pulse && (
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${s.dot}`}
          />
        )}
        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${s.dot}`} />
      </span>
      {status}
    </span>
  );
}

function ModuleVisual({ module }: { module: LabModule }) {
  const { visual, accent } = module;

  if (visual === "graph") {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity duration-500">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          {[
            [30, 40, 80, 60],
            [80, 60, 140, 40],
            [140, 40, 170, 90],
            [80, 60, 100, 120],
            [100, 120, 160, 140],
            [30, 40, 60, 130],
            [60, 130, 100, 120],
          ].map(([x1, y1, x2, y2], i) => (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={accent}
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
          {[
            [30, 40],
            [80, 60],
            [140, 40],
            [170, 90],
            [100, 120],
            [160, 140],
            [60, 130],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="3"
              fill={accent}
              animate={{ opacity: [0.4, 1, 0.4], r: [2.5, 4, 2.5] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (visual === "scan") {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-20 group-hover:opacity-35 transition-opacity duration-500">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${accent}15 3px, ${accent}15 4px)`,
          }}
        />
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (visual === "chart") {
    return (
      <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-25 group-hover:opacity-40 transition-opacity duration-500">
        <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
          <motion.path
            d="M0,60 L25,45 L50,55 L75,25 L100,35 L125,15 L150,30 L175,10 L200,20 L200,80 L0,80 Z"
            fill={accent}
            fillOpacity="0.15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.polyline
            points="0,60 25,45 50,55 75,25 100,35 125,15 150,30 175,10 200,20"
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>
    );
  }

  if (visual === "document") {
    return (
      <div className="absolute top-4 right-4 flex flex-col gap-1.5 opacity-20 group-hover:opacity-35 transition-opacity duration-500">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-16 h-20 rounded-sm border"
            style={{ borderColor: `${accent}40`, background: `${accent}08` }}
            animate={{ y: [0, -2, 0], x: [0, i * 2, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
          >
            <div className="p-2 space-y-1">
              {[...Array(4)].map((_, j) => (
                <div
                  key={j}
                  className="h-0.5 rounded-full"
                  style={{ background: accent, opacity: 0.3 + j * 0.1, width: `${70 - j * 10}%` }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (visual === "wave") {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-20 group-hover:opacity-35 transition-opacity duration-500">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{ background: accent, top: `${30 + i * 20}%` }}
            animate={{ scaleX: [0.3, 1, 0.3], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 70% 50%, ${accent}20, transparent 60%)`,
          }}
        />
      </div>
    );
  }

  // terminal
  return (
    <div className="absolute bottom-3 right-3 font-mono text-[9px] leading-relaxed opacity-25 group-hover:opacity-45 transition-opacity duration-500 select-none">
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ color: accent }}
      >
        <span className="text-white/30">&gt; </span>audit --strict
        <br />
        <span className="text-white/20">  ✓ lint passed</span>
        <br />
        <span className="text-white/20">  ✓ types ok</span>
        <br />
        <motion.span
          className="inline-block w-1.5 h-2.5 ml-0.5 align-middle"
          style={{ background: accent }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}

function LabModuleCard({ module, index }: { module: LabModule; index: number }) {
  const isHero = module.gridClass.includes("col-span-7");

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className={`group relative ${module.gridClass} min-h-[160px]`}
    >
      <div
        className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#060608] p-5 sm:p-6 transition-all duration-500 hover:border-white/[0.14] hover:-translate-y-1"
        style={{
          boxShadow: "0 0 0 0 transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 8px 40px ${module.accent}18, inset 0 1px 0 ${module.accent}15`;
          e.currentTarget.style.borderColor = `${module.accent}35`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        }}
      >
        {/* Accent corner */}
        <div
          className="absolute top-0 left-0 w-12 h-12 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${module.accent}30 0%, transparent 60%)`,
          }}
        />

        <ModuleVisual module={module} />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between gap-3 mb-auto">
            <div className="space-y-2">
              <span
                className="text-[10px] font-mono tracking-widest uppercase"
                style={{ color: `${module.accent}99` }}
              >
                {module.code}
              </span>
              <StatusBadge status={module.status} />
            </div>
            <Link
              href={module.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${module.title} on GitHub`}
              className="shrink-0 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/30 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 hover:scale-105"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </Link>
          </div>

          <div className={`mt-4 ${isHero ? "mt-auto" : ""}`}>
            <h4
              className={`font-bold text-white tracking-tight mb-1.5 group-hover:transition-colors duration-300 ${
                isHero ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
              }`}
              style={{ transitionProperty: "color" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = module.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "white";
              }}
            >
              {module.title}
            </h4>
            <p
              className={`text-white/40 leading-relaxed ${
                isHero ? "text-sm sm:text-base max-w-md" : "text-xs sm:text-sm"
              }`}
            >
              {module.purpose}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/[0.04]">
            {module.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md border text-white/35"
                style={{
                  borderColor: `${module.accent}20`,
                  background: `${module.accent}08`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function LabConsolePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: 0.35 }}
      className="md:col-span-4 flex flex-col gap-3 min-h-[160px]"
    >
      <div className="flex-1 rounded-2xl border border-white/[0.06] bg-[#060608] p-5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#7C5CFF]/60" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
              Lab Console
            </span>
          </div>
          <div className="space-y-3 font-mono text-[11px]">
            <div className="flex justify-between text-white/25">
              <span>active_modules</span>
              <span className="text-[#00F0FF]">{labStats.activeModules}</span>
            </div>
            <div className="flex justify-between text-white/25">
              <span>live_modules</span>
              <span className="text-[#10B981]">{labStats.liveCount}</span>
            </div>
            <div className="flex justify-between text-white/25">
              <span>completion_rate</span>
              <span className="text-[#00F0FF]">100%</span>
            </div>
          </div>
          <motion.div
            className="mt-4 h-1 rounded-full bg-white/[0.04] overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#7C5CFF] via-[#00F0FF] to-[#10B981]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </motion.div>
          <p className="mt-2 text-[9px] font-mono text-white/20">all modules complete</p>
        </div>
      </div>

      <div className="rounded-2xl border border-[#7C5CFF]/15 bg-[#7C5CFF]/[0.04] p-4 flex items-center gap-3">
        <FlaskConical className="w-4 h-4 text-[#A78BFA] shrink-0" />
        <p className="text-[11px] text-white/40 leading-relaxed">
          Every module in the archive is complete and available on GitHub.
        </p>
      </div>
    </motion.div>
  );
}

export default function MoreProjects() {
  const heroModule = moreProjects.find((m) => m.gridClass.includes("col-span-7"))!;
  const otherModules = moreProjects.filter((m) => !m.gridClass.includes("col-span-7"));

  return (
    <section className="relative py-8 md:py-12 bg-transparent overflow-hidden">
      {/* Lab atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,92,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#7C5CFF]/[0.04] blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#00F0FF]/[0.03] blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#7C5CFF] mb-4">
                <Beaker className="w-3 h-3" />
                Experiment Hub
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Engineering Archive
              </h3>
              <p className="mt-3 text-white/35 text-sm sm:text-base max-w-lg leading-relaxed">
                Completed AI modules in the archive — retrieval systems, agents, and
                NLP pipelines, all shipped and available on GitHub.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] shrink-0">
              <Activity className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span className="text-xs font-mono text-white/40">
                <span className="text-[#00F0FF] font-bold">{labStats.liveCount}</span> modules
                <span className="text-white/20 mx-2">·</span>
                <span className="text-[#10B981] font-bold">all complete</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bento grid — asymmetric lab layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 auto-rows-fr">
          <LabModuleCard module={heroModule} index={0} />
          {otherModules.slice(0, 2).map((module, i) => (
            <LabModuleCard key={module.id} module={module} index={i + 1} />
          ))}
          {otherModules[2] && (
            <LabModuleCard module={otherModules[2]} index={3} />
          )}
          <LabConsolePanel />
          {otherModules[4] && (
            <LabModuleCard module={otherModules[4]} index={5} />
          )}
          {otherModules[3] && (
            <LabModuleCard module={otherModules[3]} index={4} />
          )}
        </div>
      </div>
    </section>
  );
}
