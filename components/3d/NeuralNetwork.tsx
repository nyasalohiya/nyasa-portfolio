"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTransitionStore } from "@/lib/store/useTransitionStore";

export function NeuralNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { isTransitioning } = useTransitionStore();

  const particleCount = 200;
  const maxDistance = 3.5;

  // Generate random positions
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      vel.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      });
    }
    return { positions: pos, velocities: vel };
  }, []);

  const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const linePositions = [];
    const lineColors = [];

    // Slow movement, but fast if transitioning
    const speedMultiplier = isTransitioning ? 15 : 1;

    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += velocities[i].x * speedMultiplier;
      positions[i * 3 + 1] += velocities[i].y * speedMultiplier;
      positions[i * 3 + 2] += velocities[i].z * speedMultiplier;

      // Bounce off boundaries
      if (Math.abs(positions[i * 3]) > 10) velocities[i].x *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 10) velocities[i].y *= -1;
      if (Math.abs(positions[i * 3 + 2]) > 7.5) velocities[i].z *= -1;
    }

    // Connect close particles
    let connectionCount = 0;
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );

          const alpha = 1 - Math.sqrt(distSq) / maxDistance;
          // Subtly mix white and electric cyan
          const color = new THREE.Color(Math.random() > 0.95 ? "#00F0FF" : "#ffffff");
          
          lineColors.push(color.r, color.g, color.b, alpha * 0.4);
          lineColors.push(color.r, color.g, color.b, alpha * 0.4);
          connectionCount++;
        }
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 4));

    // Rotate the whole network slightly based on mouse
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;

    pointsRef.current.rotation.y += (targetX - pointsRef.current.rotation.y) * 0.05;
    pointsRef.current.rotation.x += (targetY - pointsRef.current.rotation.x) * 0.05;
    
    linesRef.current.rotation.y = pointsRef.current.rotation.y;
    linesRef.current.rotation.x = pointsRef.current.rotation.x;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.6} sizeAttenuation />
      </points>

      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}
