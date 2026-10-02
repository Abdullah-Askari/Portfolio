import { OrbitingCircles } from "./OrbitingCircles";
import Image from "next/image";
import type { IconProps } from "@/constants/types";

export function Frameworks() {
  const skills = [
    "react-native",
    "git",
    "github",
    "expo",
    "firebase",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "tailwindcss",
    "vitejs",
  ];

  const reversedSkills = [...skills].reverse();

  return (
    <div className="relative flex h-64 w-full flex-col items-center justify-center overflow-hidden">
      {/* Outer Orbit */}
      <OrbitingCircles iconSize={42} radius={125} duration={35}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      {/* Inner Reverse Orbit */}
      <OrbitingCircles iconSize={30} radius={75} reverse speed={1.5} duration={25}>
        {reversedSkills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }: IconProps) => (
  <div className="size-full p-1.5 rounded-xl bg-midnight/80 border border-white/10 shadow-[0_0_12px_rgba(51,194,204,0.15)] backdrop-blur-md flex items-center justify-center transition-transform duration-200 hover:scale-125 hover:border-aqua/50">
    <Image
      src={src}
      width={36}
      height={36}
      alt="Tech skill"
      className="size-full object-contain"
    />
  </div>
);