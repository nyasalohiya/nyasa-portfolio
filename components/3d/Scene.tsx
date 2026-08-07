"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { NeuralNetwork } from "./NeuralNetwork";
import { useTransitionStore } from "@/lib/store/useTransitionStore";
import * as THREE from "three";
import { useRouter } from "next/navigation";

function CameraController() {
  const { isTransitioning, targetPath, endTransition } = useTransitionStore();
  const router = useRouter();
  
  // Keep track of original position
  const startZ = 12;
  const targetZ = -20; // Fly through the network
  
  useFrame((state, delta) => {
    if (isTransitioning) {
      // Accelerate camera forward
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, delta * 3);
      
      // If we've flown through, navigate and reset
      if (state.camera.position.z < -10 && targetPath) {
        router.push(targetPath);
        endTransition();
      }
    } else {
      // Smoothly return to start position when not transitioning
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, startZ, delta * 2);
    }
  });

  return null;
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#030305]">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,92,255,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,240,255,0.03)_0%,transparent_50%)]" />
      
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 2]} // Optimize for devices
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#030305", 5, 25]} />
        <ambientLight intensity={0.5} />
        
        <NeuralNetwork />
        
        <CameraController />
      </Canvas>
    </div>
  );
}
