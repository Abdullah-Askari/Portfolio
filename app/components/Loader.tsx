"use client";

import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-cyan-500/20 shadow-[0_0_20px_rgba(51,194,204,0.3)] select-none">
        <div className="size-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-mono text-cyan-300 tracking-wider">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
