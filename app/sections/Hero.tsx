"use client";

import styles from "./Hero.module.css";

import { Suspense, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroText from "../components/HeroText";
import HeroModel from "../components/HeroModel";
import Loader from "../components/Loader";

const emptySubscribe = () => () => {};
const useMounted = () => useSyncExternalStore(emptySubscribe, () => true, () => false);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const mounted = useMounted();
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const reducedMotion = useMediaQuery({ query: "(prefers-reduced-motion: reduce)" });
  const [isInView, setIsInView] = useState(true);
  const [canvasKey, setCanvasKey] = useState(0);

  // Pause rendering when Hero is completely off-screen to free mobile GPU memory
  useEffect(() => {
    const target = heroRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className={['relative w-full min-h-screen overflow-hidden flex items-center justify-center', styles.hero].join(" ")}
    >
      {/* Quiet ambient backdrop */}
      <div className={styles.atmosphere} aria-hidden="true" />

      {/* Main Hero Content Container (contained in max-w-7xl, aligned with page) */}
      <div className={['w-full container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between relative z-10 pt-24 pb-12 lg:py-0', styles.layout].join(" ")}>
        
        {/* Left: Headline & Introduction */}
        <div className="relative z-20 w-full lg:w-1/2 flex flex-col justify-center">
          <HeroText />
        </div>

        {/* Sculptural 3D study */}
        <div className={['relative z-10 w-full lg:w-1/2 h-[380px] sm:h-[460px] lg:h-[560px] flex items-center justify-center mt-6 lg:mt-0', styles.stage].join(" ")}>
          <div className={styles.halo} aria-hidden="true" />

          {/* Rendering pauses when this section leaves the viewport. */}
          {mounted && (
            <Canvas
              key={canvasKey}
              camera={{ position: [0, 0, 4.6], fov: 44 }}
              dpr={isDesktop ? [1, 1.5] : 1}
              frameloop={isInView ? (reducedMotion ? "demand" : "always") : "never"}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: isDesktop ? "high-performance" : "default",
                preserveDrawingBuffer: false,
              }}
              onCreated={({ gl, invalidate }) => {
                const canvasEl = gl.domElement;
                const handleContextLost = (event: Event) => {
                  event.preventDefault();
                  console.warn("Hero WebGL context lost - restoring...");
                  setTimeout(() => {
                    setCanvasKey((k) => k + 1);
                  }, 200);
                };
                const handleContextRestored = () => {
                  console.log("Hero WebGL context restored");
                  invalidate();
                };
                canvasEl.addEventListener("webglcontextlost", handleContextLost);
                canvasEl.addEventListener("webglcontextrestored", handleContextRestored);
              }}
              className="w-full h-full relative z-10 pointer-events-none"
            >
              <Suspense fallback={<Loader />}>
                <HeroModel
                  isAnimated={!reducedMotion}
                  scale={isDesktop ? 1 : 0.9}
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