"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { Star } from "@/constants/types";

gsap.registerPlugin(useGSAP);

// Deterministic star generation: guaranteed to match 100% between SSR and client hydration
const STARS: Star[] = Array.from({ length: 95 }, (_, i) => {
  const pseudo1 = Math.abs(Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1;
  const pseudo2 = Math.abs(Math.sin(i * 93.9898 + 67.345) * 24634.6345) % 1;
  const pseudo3 = Math.abs(Math.sin(i * 45.1234 + 12.456) * 12345.6789) % 1;
  return {
    x: `${(pseudo1 * 100).toFixed(2)}%`,
    y: `${(pseudo2 * 58).toFixed(2)}%`,
    size: pseudo3 > 0.85 ? 2 : 1,
    opacity: Number((0.25 + pseudo3 * 0.75).toFixed(2)),
  };
});

const HeroScene = () => {
  const root = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const shootingStarRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useGSAP(
    () => {
      // On mobile / reduced motion: remain strictly static (0% CPU, 0% RAF loops)
      if (!isDesktop) return;

      // 1. Smooth forward perspective grid glide
      if (gridRef.current) {
        gsap.to(gridRef.current, {
          backgroundPosition: "0px 60px",
          duration: 1.8,
          ease: "none",
          repeat: -1,
        });
      }

      // 2. Ambient cosmic nebulae breathing
      gsap.to(".nebula-glow", {
        scale: 1.08,
        opacity: 0.5,
        duration: 6.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      // 4. Starfield twinkle
      gsap.to(".star-twinkle", {
        opacity: 0.4,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      // 5. Horizon beam shimmer
      gsap.to(".horizon-beam", {
        opacity: 0.7,
        duration: 2.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      // 6. Occasional shooting stars
      if (shootingStarRef.current) {
        const shootingStarTl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
        shootingStarTl.fromTo(
          shootingStarRef.current,
          { x: "105vw", y: "-5vh", opacity: 0, scale: 0.6 },
          {
            x: "-20vw",
            y: "35vh",
            duration: 1.3,
            ease: "power2.in",
            keyframes: [
              { opacity: 0 },
              { opacity: 0.9 },
              { opacity: 0.9 },
              { opacity: 0 },
            ],
          }
        );
      }
    },
    { scope: root, dependencies: [isDesktop] }
  );

  return (
    <div
      ref={root}
      className="absolute inset-0 z-0 overflow-hidden bg-[#030412] select-none pointer-events-none"
    >
      {/* Deep Space Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02030f] via-[#060a22] to-[#030412]" />

      {/* Ambient Cosmic Nebula Lights */}
      <div className="nebula-glow absolute top-[6%] left-[30%] size-[60vmin] rounded-full bg-[radial-gradient(circle,rgba(92,51,204,0.22)_0%,transparent_65%)] blur-2xl opacity-40 will-change-transform" />
      <div className="nebula-glow absolute top-[12%] -left-[5%] size-[50vmin] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14)_0%,transparent_65%)] blur-3xl opacity-35 will-change-transform" />

      {/* Deterministic Starfield: 0% Hydration Errors */}
      <div className="star-twinkle absolute inset-x-0 top-0 h-[60vh] overflow-hidden" suppressHydrationWarning>
        {STARS.map((star, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white will-change-opacity"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              boxShadow: star.size > 1 ? "0 0 5px rgba(255,255,255,0.8)" : "none",
            }}
          />
        ))}
      </div>

      {/* Shooting Star */}
      <div
        ref={shootingStarRef}
        className="absolute h-[2px] w-[90px] rounded-full bg-gradient-to-r from-transparent via-[#22d3ee] to-white shadow-[0_0_12px_2px_#22d3ee] rotate-[-25deg] opacity-0 pointer-events-none"
      />

      {/* Perspective 3D Cyber Grid Floor (Subtle Ground Horizon) */}
      <div className="absolute inset-x-0 bottom-0 h-[18%] overflow-hidden bg-gradient-to-b from-[#06091f] to-[#02030f] [perspective:380px] pointer-events-none">
        {/* Grid plane */}
        <div
          ref={gridRef}
          className="grid-floor absolute top-0 left-[-100%] h-[320%] w-[300%] origin-top opacity-30 [transform:rotateX(72deg)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
          }}
        />
        {/* Horizon fade gradient */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#06091f] via-[#06091f]/80 to-transparent" />
      </div>

      {/* Subtle Horizon Ground Line (Masked so it NEVER cuts across text on the left) */}
      <div
        className="horizon-beam absolute inset-x-0 bottom-[18%] h-px bg-gradient-to-r from-transparent via-[#22d3ee]/60 via-[#f43f5e]/60 to-transparent opacity-60 pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, transparent 40%, white 65%, white 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, transparent 40%, white 65%, white 90%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default HeroScene;