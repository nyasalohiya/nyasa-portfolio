"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Code2 } from "lucide-react";
import Image from "next/image";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32 bg-transparent overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7C5CFF] mb-3 block">
            Recognition
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.03em] text-white">
            Engineering Highlights
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-transparent/80 border border-white/[0.06] rounded-2xl p-8 hover:border-[#7C5CFF]/20 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#7C5CFF]/[0.1] border border-[#7C5CFF]/20 flex items-center justify-center text-[#7C5CFF]">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Hackathons</h3>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#7C5CFF] shrink-0" />
                <div>
                  <p className="font-semibold text-white text-[15px]">The Ingenious hackathon 6.0 </p>
                  <p className="text-xs text-white/35 mt-0.5">Team Void Null • Top 20 Finalist</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#7C5CFF]/60 shrink-0" />
                <div>
                  <p className="font-semibold text-white text-[15px]">Enterprise AI Challenge</p>
                  <p className="text-xs text-white/35 mt-0.5">Finalist — High-Throughput Document QA Pipeline</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-transparent/80 border border-white/[0.06] rounded-2xl p-8 hover:border-[#7C5CFF]/20 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#7C5CFF]/[0.1] border border-[#7C5CFF]/20 flex items-center justify-center text-[#7C5CFF]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Certifications</h3>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#7C5CFF] shrink-0" />
                <div>
                  <p className="font-semibold text-white text-[15px]">Azure AI Engineer Associate</p>
                  <p className="text-xs text-white/35 mt-0.5">Microsoft</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#7C5CFF]/60 shrink-0" />
                <div>
                  <p className="font-semibold text-white text-[15px]">Deep Learning Specialization</p>
                  <p className="text-xs text-white/35 mt-0.5">DeepLearning.AI</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Engineering Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#060608] border border-white/[0.06] rounded-3xl p-8 sm:p-12 hover:border-[#7C5CFF]/30 transition-all duration-500 overflow-hidden relative group"
        >
          {/* subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#7C5CFF]/[0.02] blur-3xl pointer-events-none group-hover:bg-[#7C5CFF]/[0.05] transition-colors duration-700" />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-[#7C5CFF]" />
                <h3 className="text-xl font-bold text-white tracking-tight">Engineering Metrics</h3>
              </div>
              <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-[0.2em] px-4 py-2 bg-[#00F0FF]/10 rounded-full border border-[#00F0FF]/20">
                System Status: Nominal
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/[0.04]">

              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tighter">
                  12<span className="text-[#7C5CFF]">+</span>
                </div>
                <div className="text-sm font-medium text-white/50">AI Projects Built</div>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tighter">
                  4
                </div>
                <div className="text-sm font-medium text-white/50">Production Systems</div>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tighter">
                  6<span className="text-[#00F0FF]">+</span>
                </div>
                <div className="text-sm font-medium text-white/50">AI Frameworks</div>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tighter">
                  100<span className="text-[#7C5CFF]">+</span>
                </div>
                <div className="text-sm font-medium text-white/50">Commits This Year</div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
