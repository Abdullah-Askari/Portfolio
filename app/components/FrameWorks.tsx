import { OrbitingCircles } from "./OrbitingCircles";
import Image from "next/image";
import  { IconProps } from "@/constants/types";

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
    "vitejs"
  ];
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => {
          return <Icon key={index} src={`/assets/logos/${skill}.svg`} />;
        })}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => {
          return <Icon key={index} src={`/assets/logos/${skill}.svg`} />;
        })}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }: IconProps) => (
  <Image
    src={src}
    width={40}
    height={40}
    alt=""
    className="size-full rounded-sm object-contain duration-200 hover:scale-110"
  />
);