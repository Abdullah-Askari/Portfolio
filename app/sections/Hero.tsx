"use client";


import { Suspense, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroText from "../components/HeroText";
import HeroModel from "../components/HeroModel";
import Loader from "../components/Loader";
import HeroRenderLoop from "../components/HeroRenderLoop";
import GraphicsBoundary from "../components/GraphicsBoundary";

const ModelFallback = () => <div className="portfolio-hero-fallback" aria-hidden="true"><span /><i /></div>;

const emptySubscribe = () => () => {};
const useMounted = () => useSyncExternalStore(emptySubscribe, () => true, () => false);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const mounted = useMounted();
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const reducedMotion = useMediaQuery({ query: "(prefers-reduced-motion: reduce)" });
  const [isInView, setIsInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [contextLost, setContextLost] = useState(false);

  useEffect(() => {
    const sync = () => setPageVisible(!document.hidden);
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  // Pause rendering when the hero is offscreen to avoid unnecessary GPU work.
  useEffect(() => {
    const target = heroRef.current;
    if (!target || !("IntersectionObserver" in window)) return;

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
      className={['relative w-full min-h-screen overflow-hidden flex items-center justify-center', "portfolio-hero-hero"].join(" ")}
    >
      {/* Quiet ambient backdrop */}
      <div className="portfolio-hero-atmosphere" aria-hidden="true" />

      {/* Main Hero Content Container (contained in max-w-7xl, aligned with page) */}
      <div className={['w-full container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between relative z-10 pt-24 pb-12 lg:py-0', "portfolio-hero-layout"].join(" ")}>
        
        {/* Left: Headline & Introduction */}
        <div className="relative z-20 w-full lg:w-1/2 flex flex-col justify-center">
          <HeroText />
        </div>

        {/* Sculptural 3D study */}
        <div className={['relative z-10 w-full lg:w-1/2 h-[380px] sm:h-[460px] lg:h-[560px] flex items-center justify-center mt-6 lg:mt-0', "portfolio-hero-stage"].join(" ")}>
          <div className="portfolio-hero-halo" aria-hidden="true" />
          {(!mounted || contextLost) && <ModelFallback />}

          {/* Rendering pauses when this section leaves the viewport. */}
          {mounted && (
            <GraphicsBoundary fallback={<ModelFallback />}>
            <Canvas
              camera={{ position: [0, 0, 4.6], fov: 44 }}
              dpr={1}
              frameloop={isInView && pageVisible ? "demand" : "never"}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: isDesktop ? "high-performance" : "default",
                preserveDrawingBuffer: false,
              }}
              fallback={<ModelFallback />}
              className="w-full h-full relative z-10"
              style={{ touchAction: "pan-y" }}
            >
              <HeroRenderLoop active={isInView && pageVisible && !reducedMotion} fps={30} maxDpr={isDesktop ? 4 : 2} onContextChange={setContextLost} />
              <Suspense fallback={<Loader />}>
                <HeroModel
                  isAnimated={!reducedMotion}
                  scale={isDesktop ? 1 : 0.9}
                  position={[0, 0, 0]}
                />
              </Suspense>
            </Canvas>
            </GraphicsBoundary>
          )}
        </div>

      </div>
    </section>
  );
};

export default Hero;
