"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-28 bg-[#050508] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7C5CFF] mb-3 block">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-white">
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-transparent/80 border border-white/[0.06] rounded-2xl p-8 hover:border-[#7C5CFF]/20 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex justify-between items-center mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#7C5CFF]/[0.1] border border-[#7C5CFF]/20 flex items-center justify-center text-[#7C5CFF]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/30">
                2024 – 2026
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
              M.Sc. Information Technology
            </h3>
            <p className="text-sm font-semibold text-[#A78BFA] mb-1">SKIPS University</p>
            <p className="text-xs text-white/30">Data Science Specialization</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-transparent/80 border border-white/[0.06] rounded-2xl p-8 hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex justify-between items-center mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/30">
                2021 – 2024
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
              Bachelor of Computer Applications
            </h3>
            <p className="text-sm font-semibold text-[#A78BFA]/70 mb-1">Umiya BCA College</p>
            <p className="text-xs text-white/30">CGPA: 7.55 / 8.0</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
