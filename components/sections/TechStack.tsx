"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techNodes } from "@/lib/data/tech-stack";

// Group nodes by category for mobile view
const categoryOrder = ["AI & ML", "Core", "Backend", "Database", "Tools"] as const;
const categoryColors: Record<string, string> = {
  "AI & ML": "#00F0FF",
  "Core": "#7C5CFF",
  "Backend": "#A78BFA",
  "Database": "#34D399",
  "Tools": "#F59E0B",
};

export default function TechStack() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [tappedNode, setTappedNode] = useState<string | null>(null);

  const activeId = hoveredNode ?? tappedNode;
  const activeConnections = activeId
    ? techNodes.find((n) => n.id === activeId)?.connections || []
    : [];

  const handleTap = (id: string) => {
    setTappedNode((prev) => (prev === id ? null : id));
  };

  return (
    <section id="tech-stack" className="relative py-8 md:py-12 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-24 text-center"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00F0FF] mb-6 block">
            Ecosystem
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-white leading-tight">
            Engineering<br />Graph.
          </h2>
          <p className="mt-6 text-white/40 max-w-2xl mx-auto text-base lg:text-lg hidden lg:block">
            Hover over a node to reveal its architectural relationships and dependencies across the stack.
          </p>
          <p className="mt-6 text-white/40 max-w-2xl mx-auto text-base lg:hidden">
            Tap a node to reveal its architectural connections.
          </p>
        </motion.div>

        {/* ─── DESKTOP: Interactive Graph ─── */}
        <div className="hidden lg:block relative w-full aspect-video rounded-3xl bg-[#060608] border border-white/[0.04] overflow-hidden">

          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <AnimatePresence>
              {activeId && activeConnections.map((targetId) => {
                const source = techNodes.find((n) => n.id === activeId);
                const target = techNodes.find((n) => n.id === targetId);
                if (!source || !target) return null;
                return (
                  <motion.line
                    key={`${source.id}-${target.id}`}
                    x1={`${source.x}%`} y1={`${source.y}%`}
                    x2={`${target.x}%`} y2={`${target.y}%`}
                    stroke="#00F0FF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                );
              })}
            </AnimatePresence>
          </svg>

          {/* Nodes */}
          <div className="absolute inset-0 z-20">
            {techNodes.map((node) => {
              const isActive = activeId === node.id;
              const isConnected = activeConnections.includes(node.id);
              const isFaded = activeId !== null && !isActive && !isConnected;
              const color = categoryColors[node.category] ?? "#fff";

              return (
                <div
                  key={`desktop-${node.id}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    opacity: isFaded ? 0.15 : 1,
                    zIndex: isActive ? 30 : isConnected ? 25 : 20,
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div
                    className={`relative px-4 py-2 rounded-xl backdrop-blur-md border cursor-crosshair transition-all duration-300 flex flex-col items-center gap-0.5 ${
                      isActive
                        ? "text-white scale-110"
                        : isConnected
                        ? "text-white/90"
                        : "text-white/55"
                    }`}
                    style={{
                      borderColor: isActive ? color : isConnected ? `${color}55` : "rgba(255,255,255,0.06)",
                      backgroundColor: isActive ? `${color}18` : isConnected ? `${color}08` : "rgba(255,255,255,0.02)",
                      boxShadow: isActive ? `0 0 24px -4px ${color}55` : "none",
                    }}
                  >
                    <span className="text-sm font-semibold tracking-wide whitespace-nowrap">{node.name}</span>
                    <span className="text-[9px] uppercase tracking-wider font-mono" style={{ color: isActive ? color : "rgba(255,255,255,0.3)" }}>
                      {node.category}
                    </span>
                  </div>
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-xl blur-lg -z-10"
                      style={{ backgroundColor: `${color}30` }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── MOBILE: Categorized Tag Grid ─── */}
        <div className="lg:hidden space-y-6">
          {categoryOrder.map((category, catIdx) => {
            const nodes = techNodes.filter((n) => n.category === category);
            if (!nodes.length) return null;
            const color = categoryColors[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.07 }}
                className="rounded-2xl bg-[#060608] border border-white/[0.05] p-5"
              >
                {/* Category label */}
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] mb-4" style={{ color }}>
                  {category}
                </p>

                {/* Nodes */}
                <div className="flex flex-wrap gap-2">
                  {nodes.map((node) => {
                    const isActive = tappedNode === node.id;
                    const isConnected = tappedNode
                      ? techNodes.find((n) => n.id === tappedNode)?.connections.includes(node.id) ?? false
                      : false;
                    const isFaded = tappedNode !== null && !isActive && !isConnected;

                    return (
                      <button
                        key={`mobile-${node.id}`}
                        onClick={() => handleTap(node.id)}
                        className="px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-300 active:scale-95"
                        style={{
                          opacity: isFaded ? 0.25 : 1,
                          borderColor: isActive ? color : isConnected ? `${color}55` : "rgba(255,255,255,0.07)",
                          backgroundColor: isActive ? `${color}18` : isConnected ? `${color}08` : "rgba(255,255,255,0.02)",
                          color: isActive ? "#fff" : isConnected ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)",
                          boxShadow: isActive ? `0 0 16px -4px ${color}66` : "none",
                        }}
                      >
                        {node.name}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
          {tappedNode && (
            <p className="text-center text-xs text-white/30 font-mono pt-2">
              Tap again to deselect
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
