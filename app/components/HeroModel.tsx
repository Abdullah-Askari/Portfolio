"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import type { Group, Mesh } from "three";
import type { HeroModelProps } from "@/constants/types";

export default function HeroModel({ isAnimated = true, scale = 1, position = [0, 0, 0] }: HeroModelProps) {
  const sculpture = useRef<Mesh>(null);
  const group = useRef<Group>(null);
  const orbit = useRef<Group>(null);
  const elapsed = useRef(0);

  useFrame((state, delta) => {
    if (!isAnimated) return;
    const step = Math.min(delta, 0.05);
    elapsed.current += step;
    if (sculpture.current) {
      sculpture.current.rotation.y += step * 0.16;
      sculpture.current.rotation.z += step * 0.035;
    }
    if (orbit.current) orbit.current.rotation.z -= step * 0.12;
    if (group.current) {
      group.current.position.y = position[1] + Math.sin(elapsed.current * 0.75) * 0.07;
      easing.dampE(group.current.rotation, [state.pointer.y * 0.2, state.pointer.x * 0.3, 0], 0.3, step);
    }
  });

  return (
    <group ref={group} scale={scale} position={position}>
      <ambientLight intensity={0.65} color="#d3e7ff" />
      <directionalLight position={[3, 4, 5]} intensity={3.4} color="#e0fffa" />
      <directionalLight position={[-3, 1, 2]} intensity={2.6} color="#b6a4ed" />
      <directionalLight position={[1, -3, -2]} intensity={3} color="#56c8b9" />
      <mesh ref={sculpture} rotation={[0.6, 0.3, -0.35]}>
        <torusKnotGeometry args={[0.8, 0.23, 240, 32, 2, 3]} />
        <meshPhysicalMaterial color="#9bdfcf" metalness={0.32} roughness={0.24} clearcoat={1} clearcoatRoughness={0.2} />
      </mesh>
      <group rotation={[1.05, -0.3, 0.2]}>
        <group ref={orbit}>
          <mesh>
            <torusGeometry args={[1.48, 0.012, 8, 160]} />
            <meshBasicMaterial color="#a7cfc5" transparent opacity={0.65} />
          </mesh>
          <mesh position={[1.48, 0, 0]}>
            <sphereGeometry args={[0.085, 24, 16]} />
            <meshStandardMaterial color="#d2c7ff" metalness={0.35} roughness={0.25} />
          </mesh>
          <mesh position={[-1.48, 0, 0]}>
            <sphereGeometry args={[0.045, 16, 12]} />
            <meshBasicMaterial color="#a3e8d6" />
          </mesh>
        </group>
      </group>
      <mesh rotation={[0.7, 0.5, -0.6]}>
        <torusGeometry args={[1.65, 0.006, 6, 160]} />
        <meshBasicMaterial color="#b8a7e2" transparent opacity={0.3} />
      </mesh>
      <mesh position={[1.1, 1.05, -0.3]} rotation={[0.4, 0.2, 0.4]}>
        <octahedronGeometry args={[0.11]} />
        <meshStandardMaterial color="#c6b9fa" metalness={0.3} roughness={0.25} />
      </mesh>
    </group>
  );
}
