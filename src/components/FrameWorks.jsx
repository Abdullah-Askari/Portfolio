import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "react-native",
    "git",
    "github",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "tailwindcss",
    "vitejs"
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => {
          const fileExtension = skill === 'react-native' ? 'jpeg' : 'svg';
          return <Icon key={index} src={`assets/logos/${skill}.${fileExtension}`} />;
        })}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => {
          const fileExtension = skill === 'react-native' ? 'jpeg' : 'svg';
          return <Icon key={index} src={`assets/logos/${skill}.${fileExtension}`} />;
        })}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);