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
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen overflow-hidden c-space"
    >
      {/* Background synthwave / deep space scene */}
      <HeroScene />

      {/* Hero Left Content: Text Container (Dedicated clear space) */}
      <div className="relative z-20 w-full lg:w-1/2 flex flex-col justify-center pt-24 lg:pt-0">
        <HeroText />
      </div>

      {/* Hero Right Content: 3D Model Container (Desktop - Isolated to right half) */}
      {mounted && isDesktop && (
        <div className="hidden lg:flex absolute right-0 top-0 w-1/2 h-full items-center justify-center pointer-events-none z-10">
          <Canvas
            camera={{ position: [0, 0, 4.4], fov: 45 }}
            dpr={[1, 1.5]}
            frameloop="always"
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          >
            <Suspense fallback={<Loader />}>
              <HeroModel isAnimated={true} scale={1.05} position={[0, 0, 0]} />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Hero Mobile 3D Model: Static presentation below text */}
      {mounted && !isDesktop && (
        <div className="flex lg:hidden w-full h-52 items-center justify-center pointer-events-none z-10 mt-6">
          <Canvas
            camera={{ position: [0, 0, 4.4], fov: 45 }}
            dpr={1}
            frameloop="demand"
            gl={{ antialias: true, alpha: true }}
          >
            <Suspense fallback={<Loader />}>
              <HeroModel isAnimated={false} scale={0.7} position={[0, 0, 0]} />
            </Suspense>
          </Canvas>
        </div>
      )}
    </section>
  );
};

export default Hero;