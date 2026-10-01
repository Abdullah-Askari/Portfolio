"use client";

import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { MouseEvent } from "react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState<string | null>(null);
  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing mb-12"
    >
      <h2 className="text-heading">My Projects</h2>
      <div className="bg-linear-to-r from-transparent h-px w-full via-neutral-700 to-transparent" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="hidden md:block fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          alt="Project preview"
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;