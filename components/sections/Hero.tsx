"use client";

import { motion, AnimatePresence } from "framer-motion";
import AIVisualizer from "@/components/shared/AIVisualizer";
import { useState, useEffect } from "react";

const rotatingPhrases = [
  "AI Agents",
  "LLM Applications",
  "Document Intelligence",
  "Workflow Automation",
  "Enterprise AI",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 40;
    const y = (clientY / window.innerHeight - 0.5) * 40;
    setMousePos({ x, y });
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Ambient Lighting */}
      <motion.div 
        className="absolute w-[800px] h-[600px] bg-[#7C5CFF]/[0.08] blur-[120px] rounded-full pointer-events-none"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      
      {/* The 3D Scene handles the background now */}

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_50%,transparent_100%)] pointer-events-none" />

      <div className="container relative z-10 px-6 flex flex-col items-center text-center max-w-5xl mx-auto pt-20">
        
        {/* Main Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(12px)", scale: 0.95 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black tracking-[-0.05em] text-white leading-[1.05] mb-8"
        >
          Building Intelligent<br />AI Systems.
        </motion.h1>

        {/* Rotating Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-3 text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-white/50 mt-4"
        >
          <span>Engineering</span>
          <span className="relative inline-flex w-[260px] sm:w-[320px] h-[36px] sm:h-[44px] items-center text-left">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)", y: -10 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white font-bold whitespace-nowrap"
              >
                {rotatingPhrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>
      </div>

    </section>
  );
}
