"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techNodes, TechNode } from "@/lib/data/tech-stack";

export default function TechStack() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Get active connections when a node is hovered
  const activeConnections = hoveredNode 
    ? techNodes.find(n => n.id === hoveredNode)?.connections || []
    : [];

  return (
    <section id="tech-stack" className="relative py-40 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00F0FF] mb-6 block">
            Ecosystem
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-white leading-tight">
            Engineering<br />Graph.
          </h2>
          <p className="mt-6 text-white/40 max-w-2xl mx-auto text-lg">
            Hover over a node to reveal its architectural relationships and dependencies across the stack.
          </p>
        </motion.div>

        {/* Interactive Node Graph */}
        <div className="relative w-full aspect-[4/3] md:aspect-video rounded-3xl bg-[#060608] border border-white/[0.04] overflow-hidden">
          
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <AnimatePresence>
              {hoveredNode && activeConnections.map((targetId) => {
                const source = techNodes.find(n => n.id === hoveredNode);
                const target = techNodes.find(n => n.id === targetId);
                
                if (!source || !target) return null;

                return (
                  <motion.line
                    key={`${source.id}-${target.id}`}
                    x1={`${source.x}%`}
                    y1={`${source.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    stroke="#00F0FF"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                );
              })}
            </AnimatePresence>
          </svg>

          {/* Nodes */}
          <div className="absolute inset-0 z-20">
            {techNodes.map((node) => {
              const isHovered = hoveredNode === node.id;
              const isConnected = activeConnections.includes(node.id) || (hoveredNode && techNodes.find(n => n.id === hoveredNode)?.connections.includes(node.id));
              const isFaded = hoveredNode !== null && !isHovered && !isConnected;

              return (
                <div
                  key={node.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  style={{ 
                    left: `${node.x}%`, 
                    top: `${node.y}%`,
                    opacity: isFaded ? 0.2 : 1,
                    zIndex: isHovered ? 30 : isConnected ? 25 : 20
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <motion.div
                    className={`relative px-4 py-2 rounded-xl backdrop-blur-md border cursor-crosshair transition-all duration-300 flex flex-col items-center gap-1 ${
                      isHovered 
                        ? "bg-[#00F0FF]/10 border-[#00F0FF]/50 text-white shadow-[0_0_30px_-5px_rgba(0,240,255,0.3)] scale-110"
                        : isConnected
                          ? "bg-white/[0.05] border-white/20 text-white"
                          : "bg-white/[0.02] border-white/[0.05] text-white/60 hover:border-white/20"
                    }`}
                  >
                    <span className="text-sm font-semibold tracking-wide whitespace-nowrap">{node.name}</span>
                    <span className={`text-[9px] uppercase tracking-wider font-mono ${isHovered ? "text-[#00F0FF]" : "text-white/30"}`}>
                      {node.category}
                    </span>
                  </motion.div>

                  {/* Pulsing glow under hovered node */}
                  {isHovered && (
                    <motion.div 
                      className="absolute inset-0 bg-[#00F0FF]/20 rounded-xl blur-md -z-10"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
