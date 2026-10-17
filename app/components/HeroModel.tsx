"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import type { Group, Mesh } from "three";
import type { HeroModelProps } from "@/constants/types";

export default function HeroModel({ isAnimated = true, scale = 1, position = [0, 0, 0] }: HeroModelProps) {
  const sculpture = useRef<Mesh>(null);
  const group = useRef<Group>(null);
  useFrame((state, delta) => {
    if (!isAnimated) return;
    const step = Math.min(delta, 0.05);
    if (sculpture.current) {
      sculpture.current.rotation.y += step * 0.18;
      sculpture.current.rotation.z += step * 0.06;
    }
    if (group.current) easing.dampE(group.current.rotation, [state.pointer.y * 0.12, state.pointer.x * 0.18, 0], 0.3, step);
  });
  const content = (
    <group ref={group} scale={scale} position={position}>
      <ambientLight intensity={0.9} color="#d3e7ff" />
      <directionalLight position={[3, 4, 5]} intensity={4} color="#e0fffa" />
      <directionalLight position={[-3, 1, 2]} intensity={3} color="#aa9aff" />
      <pointLight position={[0, -2, 2]} intensity={12} color="#42d4ce" />
      <mesh ref={sculpture} rotation={[0.45, 0.3, -0.3]}>
        <torusKnotGeometry args={[0.88, 0.27, 160, 24, 2, 3]} />
        <meshPhysicalMaterial color="#7adbd5" metalness={0.48} roughness={0.22} clearcoat={1} clearcoatRoughness={0.15} />
      </mesh>
      <group rotation={[1.2, -0.25, 0.15]}>
        <mesh><torusGeometry args={[1.65, 0.008, 8, 120]} /><meshBasicMaterial color="#7896b2" transparent opacity={0.5} /></mesh>
        <mesh position={[1.65, 0, 0]}><sphereGeometry args={[0.065, 16, 16]} /><meshStandardMaterial color="#e2e9ff" emissive="#a797ed" emissiveIntensity={0.3} /></mesh>
        <mesh position={[-1.65, 0, 0]}><sphereGeometry args={[0.035, 12, 12]} /><meshBasicMaterial color="#79ddd6" /></mesh>
      </group>
      <mesh position={[1.2, 1.05, -0.3]} rotation={[0.4, 0.2, 0.4]}><octahedronGeometry args={[0.13]} /><meshStandardMaterial color="#c6b9fa" metalness={0.3} roughness={0.25} /></mesh>
      <mesh position={[-1.2, -0.85, 0.1]}><sphereGeometry args={[0.1, 24, 24]} /><meshStandardMaterial color="#72dcd2" metalness={0.4} roughness={0.2} /></mesh>
    </group>
  );
  return isAnimated ? <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.3}>{content}</Float> : content;
}
