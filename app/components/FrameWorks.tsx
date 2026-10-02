"use client";

import { useEffect, useState } from "react";
import { OrbitingCircles } from "./OrbitingCircles";
import Image from "next/image";
import type { IconProps } from "@/constants/types";

const outerSkills = [
  "react-native",
  "nextjs",
  "react",
  "typescript",
  "expo",
  "tailwindcss",
  "firebase",
];

const innerSkills = [
  "javascript",
  "git",
  "github",
  "vitejs",
  "html5",
  "microsoft",
];

export function Frameworks() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const outerRadius = isDesktop ? 115 : 98;
  const outerIconSize = isDesktop ? 40 : 34;
  const innerRadius = isDesktop ? 65 : 54;
  const innerIconSize = isDesktop ? 32 : 26;

  return (
    <div className="relative flex size-full min-h-[250px] sm:min-h-[280px] md:min-h-[300px] flex-col items-center justify-center select-none">
      {/* Central Tech Core Hub */}
      <div className="size-11 sm:size-12 rounded-2xl bg-[#06091f] border border-aqua/40 shadow-[0_0_25px_rgba(51,194,204,0.35)] flex items-center justify-center pointer-events-none select-none z-10">
        <span className="text-aqua font-mono font-bold text-xs sm:text-sm tracking-wider">&lt;/&gt;</span>
      </div>

      {/* Outer Orbit */}
      <OrbitingCircles
        iconSize={outerIconSize}
        radius={outerRadius}
        duration={32}
      >
        {outerSkills.map((skill) => (
          <Icon key={skill} src={`/assets/logos/${skill}.svg`} size={outerIconSize} />
        ))}
      </OrbitingCircles>

      {/* Inner Reverse Orbit */}
      <OrbitingCircles
        iconSize={innerIconSize}
        radius={innerRadius}
        reverse
        speed={1.3}
        duration={22}
      >
        {innerSkills.map((skill) => (
          <Icon key={skill} src={`/assets/logos/${skill}.svg`} size={innerIconSize} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, size = 32 }: IconProps & { size?: number }) => (
  <div className="size-full p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-[#080d26] border border-white/20 shadow-[0_0_15px_rgba(51,194,204,0.2)] flex items-center justify-center transition-all duration-300 hover:scale-125 hover:border-aqua/60 hover:shadow-[0_0_20px_rgba(51,194,204,0.4)] select-none">
    <Image
      src={src}
      width={size}
      height={size}
      alt="Tech skill"
      className="size-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
    />
  </div>
);