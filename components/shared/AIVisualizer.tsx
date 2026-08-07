"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Generate random points for nodes
const generateNodes = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage
    y: Math.random() * 100, // percentage
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    isCyan: Math.random() > 0.75, // 25% chance to be cyan
  }));
};

export default function AIVisualizer() {
  const [nodes, setNodes] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setNodes(generateNodes(25));
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-cyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connections (Reasoning Graph / LangGraph representation) */}
        {nodes.map((node, i) => {
          // Connect to the next 2 nodes to create a graph-like structure
          const targets = [nodes[(i + 1) % nodes.length], nodes[(i + 2) % nodes.length]];
          
          return targets.map((target, j) => {
            const isCyanLine = node.isCyan || target.isCyan;
            return (
              <motion.line
                key={`line-${i}-${j}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke={isCyanLine ? "#00F0FF" : "#7C5CFF"}
                strokeWidth={isCyanLine ? "1" : "0.5"}
                strokeOpacity="0.15"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, isCyanLine ? 0.6 : 0.3, isCyanLine ? 0.6 : 0.3, 0],
                }}
                transition={{
                  duration: node.duration * 0.8,
                  repeat: Infinity,
                  delay: node.delay,
                  ease: "linear",
                }}
              />
            );
          });
        })}

        {/* Nodes (Vector Embeddings) */}
        {nodes.map((node) => (
          <motion.g
            key={`node-${node.id}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
              x: [`${node.x}%`, `${node.x + (Math.random() * 4 - 2)}%`, `${node.x}%`],
              y: [`${node.y}%`, `${node.y + (Math.random() * 4 - 2)}%`, `${node.y}%`]
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut",
            }}
          >
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size * 2}
              fill={node.isCyan ? "url(#glow-cyan)" : "url(#glow)"}
              opacity="0.5"
            />
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size / 2}
              fill={node.isCyan ? "#00F0FF" : "#A78BFA"}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
