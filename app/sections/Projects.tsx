"use client";

import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "@/constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import type { MouseEvent } from "react";

export default function Projects() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 18, stiffness: 120 });
  const springY = useSpring(y, { damping: 18, stiffness: 120 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    x.set(e.clientX + 24);
    y.set(e.clientY + 24);
  };

  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing mb-16"
    >
      {/* Header */}
      <div className="flex flex-col gap-2 mb-12">
        <h2 className="text-heading gradient-text-coral">Featured Projects</h2>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-4">
        {myProjects.map((project, index) => (
          <Project
            key={project.id}
            index={index + 1}
            {...project}
            setPreview={setPreview}
          />
        ))}
      </div>

      {/* Floating Cursor Preview Image (Desktop Only) */}
      {preview && (
        <motion.div
          className="hidden lg:block fixed top-0 left-0 z-50 pointer-events-none rounded-2xl overflow-hidden glass-panel border border-aqua/40 shadow-[0_16px_40px_rgba(0,0,0,0.8)] size-72"
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <Image
            src={preview}
            alt="Project Preview"
            width={288}
            height={288}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
        </motion.div>
      )}
    </section>
  );
}