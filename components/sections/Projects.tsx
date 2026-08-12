"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data/projects";
import { ArrowRight } from "lucide-react";
import { Github } from "@/components/shared/Icons";
import Link from "next/link";

import { useTransitionStore } from "@/lib/store/useTransitionStore";

export default function Projects() {
  const { startTransition } = useTransitionStore();

  return (
    <section id="projects" className="relative py-8 md:py-12 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7C5CFF] mb-6 block">
            Product Showcase
          </span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-[-0.04em] text-white leading-tight">
            Systems I&apos;ve Built.
          </h2>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group bg-[#060608]/80 backdrop-blur-md border border-white/[0.06] rounded-3xl overflow-hidden hover:border-[#00F0FF]/30 transition-all duration-500"
            >
              {/* Hero Screenshot */}
              <div className="relative h-[280px] sm:h-[380px] overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} Interface`}
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10">
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 group-hover:text-[#00F0FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-3xl">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-semibold text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => startTransition(`/systems/${project.id}`)}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 group/btn"
                  >
                    Explore System
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/70 font-semibold text-sm hover:bg-white/[0.06] hover:text-white transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
