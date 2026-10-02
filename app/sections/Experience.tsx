"use client";

import { Timeline } from "../components/Timeline";
import { experiences } from "@/constants";

export default function Experiences() {
  return (
    <section id="experiences" className="c-space section-spacing mb-16">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-heading gradient-text-cyan">My Work Experience</h2>
      </div>

      <Timeline data={experiences} />
    </section>
  );
}