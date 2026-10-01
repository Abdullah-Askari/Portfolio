"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { easing } from "maath";
import type { Group, Mesh } from "three";

interface HeroModelProps {
  isAnimated?: boolean;
  scale?: number;
  position?: [number, number, number];
}

export default function HeroModel({
  isAnimated = true,
  scale = 1.0,
  position = [0, 0, 0],
}: HeroModelProps) {
  const group = useRef<Group>(null);
  const coreRef = useRef<Mesh>(null);
  const cageRef = useRef<Mesh>(null);
  const ring1Ref = useRef<Group>(null);
  const ring2Ref = useRef<Group>(null);
  const crystalGroup = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!isAnimated) return;

    // Smooth rotation of gyroscopic rings and cyber cage
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.35;
      ring1Ref.current.rotation.x += delta * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.28;
      ring2Ref.current.rotation.x -= delta * 0.12;
    }
    if (cageRef.current) {
      cageRef.current.rotation.y -= delta * 0.2;
      cageRef.current.rotation.x += delta * 0.1;
    }
    if (crystalGroup.current) {
      crystalGroup.current.rotation.y += delta * 0.15;
    }

    // Gentle magnetic tilt towards pointer (NO CAMERA MOVEMENT)
    if (group.current) {
      easing.dampE(
        group.current.rotation,
        [state.pointer.y * 0.15, -state.pointer.x * 0.22, 0],
        0.25,
        delta
      );
    }
  });

  const content = (
    <group ref={group} scale={scale} position={position} dispose={null}>
      {/* Studio Sci-Fi Lighting */}
      <ambientLight intensity={1.2} color="#0f172a" />
      <pointLight position={[3, 3, 3]} intensity={50} color="#22d3ee" />
      <pointLight position={[-3, -2, -2]} intensity={55} color="#f43f5e" />
      <pointLight position={[0, -3, 2]} intensity={30} color="#8b5cf6" />
      <directionalLight position={[2, 4, 3]} intensity={1.8} color="#ffffff" />

      {/* Central Iridescent Liquid Quantum Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.72, 64, 64]} />
        <MeshDistortMaterial
          color="#2e1065"
          emissive="#06b6d4"
          emissiveIntensity={0.7}
          roughness={0.12}
          metalness={0.88}
          distort={0.36}
          speed={isAnimated ? 2.4 : 0}
        />
      </mesh>

      {/* Inner Glowing Crystal Core */}
      <mesh scale={0.42}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#38bdf8" wireframe />
      </mesh>

      {/* Geodesic Cyber Wireframe Cage */}
      <mesh ref={cageRef} scale={1.05}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.6}
          emissive="#06b6d4"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Gyroscopic Ring 1 (Cyan) */}
      <group ref={ring1Ref} rotation={[1.15, 0.2, 0.25]}>
        <mesh>
          <torusGeometry args={[1.38, 0.018, 16, 80]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#06b6d4"
            emissiveIntensity={0.9}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Orbiting Satellite Nodes on Ring 1 */}
        <mesh position={[1.38, 0, 0]}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        <mesh position={[-1.38, 0, 0]}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      </group>

      {/* Gyroscopic Ring 2 (Fuchsia) */}
      <group ref={ring2Ref} rotation={[-0.85, 0.7, -0.45]}>
        <mesh>
          <torusGeometry args={[1.65, 0.015, 16, 80]} />
          <meshStandardMaterial
            color="#f43f5e"
            emissive="#e11d48"
            emissiveIntensity={0.9}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Orbiting Satellite Nodes on Ring 2 */}
        <mesh position={[0, 1.65, 0]}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshBasicMaterial color="#fb7185" />
        </mesh>
        <mesh position={[0, -1.65, 0]}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshBasicMaterial color="#fb7185" />
        </mesh>
      </group>

      {/* Floating 3D Data Polyhedra (Pure Three.js: 0% Hydration Errors) */}
      <group ref={crystalGroup}>
        {/* React Node (Cyan) */}
        <mesh position={[1.35, 0.75, 0.2]} scale={0.1}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#06b6d4"
            emissiveIntensity={1}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        {/* Next.js Node (White / Slate) */}
        <mesh position={[-1.25, -0.7, 0.3]} scale={0.09}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#f8fafc"
            emissive="#ffffff"
            emissiveIntensity={0.9}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        {/* TypeScript Node (Blue) */}
        <mesh position={[-1.2, 0.8, -0.25]} scale={0.095}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#2563eb"
            emissiveIntensity={1}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        {/* Full-Stack Node (Pink) */}
        <mesh position={[1.25, -0.75, -0.2]} scale={0.09}>
          <tetrahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#db2777"
            emissiveIntensity={1}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </group>

      {/* Cosmic Stardust Sparkles */}
      <Sparkles
        count={isAnimated ? 35 : 12}
        scale={3.6}
        size={2.5}
        speed={isAnimated ? 0.35 : 0}
        color="#22d3ee"
        opacity={0.65}
      />
    </group>
  );

  if (isAnimated) {
    return (
      <Float
        speed={1.6}
        rotationIntensity={0.15}
        floatIntensity={0.3}
        floatingRange={[-0.07, 0.07]}
      >
        {content}
      </Float>
    );
  }

  return content;
}