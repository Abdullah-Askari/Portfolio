"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

/** Demand rendering keeps mobile animation bounded without reducing model detail. */
export default function HeroRenderLoop({ active, fps, maxDpr, onContextChange }: { active: boolean; fps: number; maxDpr: number; onContextChange: (lost: boolean) => void }) {
  const invalidate = useThree((state) => state.invalidate);
  const gl = useThree((state) => state.gl);
  const setDpr = useThree((state) => state.setDpr);

  useEffect(() => {
    const canvas = gl.domElement;
    const restore = () => { onContextChange(false); invalidate(); };
    const lost = (event: Event) => { event.preventDefault(); onContextChange(true); };
    canvas.addEventListener("webglcontextlost", lost);
    canvas.addEventListener("webglcontextrestored", restore);
    invalidate();
    return () => {
      canvas.removeEventListener("webglcontextlost", lost);
      canvas.removeEventListener("webglcontextrestored", restore);
    };
  }, [gl, invalidate, onContextChange]);

  useEffect(() => {
    if (!active) return;
    const context = gl.getContext();
    const debug = context.getExtension("WEBGL_debug_renderer_info");
    const renderer = debug ? String(context.getParameter(debug.UNMASKED_RENDERER_WEBGL)) : "";
    // Old Intel and software renderers stay at native resolution.
    const limited = /HD Graphics|HD [234]\d{3}|SwiftShader|llvmpipe|software/i.test(renderer);
    const cap = limited ? 1 : maxDpr;
    let density = 1;
    setDpr(density);
    let started = performance.now();
    let frames = 0;
    const timer = window.setInterval(() => {
      if (context.isContextLost()) return;
      invalidate();
      frames++;
      const now = performance.now();
      if (now - started < 3000) return;
      const measuredFps = frames * 1000 / (now - started);
      if (measuredFps < fps * 0.75) density = Math.max(0.75, density - 0.25);
      else if (measuredFps > fps * 0.92) density = Math.min(cap, density + 0.25);
      setDpr(density);
      frames = 0;
      started = now;
    }, 1000 / fps);
    return () => window.clearInterval(timer);
  }, [active, fps, maxDpr, gl, invalidate, setDpr]);

  return null;
}
