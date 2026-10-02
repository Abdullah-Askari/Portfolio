"use client";

import { Suspense, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroText from "../components/HeroText";
import HeroScene from "../components/HeroScene";
import HeroModel from "../components/HeroModel";
import Loader from "../components/Loader";

const emptySubscribe = () => () => {};
const useMounted = () => useSyncExternalStore(emptySubscribe, () => true, () => false);

const Hero = () => {
  const mounted = useMounted();
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background synthwave / deep space scene (edge-to-edge) */}
      <HeroScene />

      {/* Main Hero Content Container (contained in max-w-7xl, aligned with page) */}
      <div className="w-full container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between relative z-10 pt-24 pb-12 lg:py-0">
        
        {/* Left: Headline & Introduction */}
        <div className="relative z-20 w-full lg:w-1/2 flex flex-col justify-center">
          <HeroText />
        </div>

        {/* Right: 3D Quantum Model + Co-Centered Cosmic Sun Backdrop */}
        <div className="relative z-10 w-full lg:w-1/2 h-[380px] sm:h-[460px] lg:h-[560px] flex items-center justify-center mt-6 lg:mt-0">
          {/* Centered Sun Backdrop: Exactly behind the 3D Model epicenter */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            {/* Outer radial sun halo glow */}
            <div className="absolute size-64 sm:size-80 lg:size-96 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.35)_0%,rgba(34,211,238,0.14)_45%,transparent_70%)] blur-2xl" />

            {/* Glowing Sun Orb with Synthwave Horizontal Slats */}
            <div className="relative size-44 sm:size-52 lg:size-60 rounded-full bg-gradient-to-b from-[#ffd391] via-[#f43f5e] to-[#6366f1] shadow-[0_0_80px_16px_rgba(244,63,94,0.5),0_0_35px_6px_rgba(34,211,238,0.3)] overflow-hidden">
              <div className="absolute inset-0 flex flex-col justify-end space-y-[3px] pb-3 opacity-40">
                <div className="h-[2px] w-full bg-[#030412]" />
                <div className="h-[3px] w-full bg-[#030412]" />
                <div className="h-[4px] w-full bg-[#030412]" />
                <div className="h-[5px] w-full bg-[#030412]" />
                <div className="h-[6px] w-full bg-[#030412]" />
              </div>
            </div>
          </div>

          {/* 3D Model Canvas: Centered directly in front of the Sun */}
          {mounted && (
            <Canvas
              camera={{ position: [0, 0, 4.6], fov: 44 }}
              dpr={isDesktop ? [1, 1.5] : 1}
              frameloop={isDesktop ? "always" : "demand"}
              gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
              className="w-full h-full relative z-10 pointer-events-none"
            >
              <Suspense fallback={<Loader />}>
                <HeroModel
                  isAnimated={isDesktop}
                  scale={isDesktop ? 0.95 : 0.75}
                  position={[0, 0, 0]}
                />
              </Suspense>
            </Canvas>
          )}
        </div>

      </div>
    </section>
  );
};

export default Hero;