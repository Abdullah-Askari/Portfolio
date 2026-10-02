"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import type { TimelineProps } from "@/constants/types";

export const Timeline = ({ data }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full">
      <div ref={ref} className="relative pb-16">
        {data.map((item, index) => (
          <div
            key={item.id || index}
            className="flex justify-start pt-8 md:pt-16 md:gap-10 relative"
          >
            {/* Timeline Node & Meta */}
            <div className="sticky z-30 flex flex-col items-center self-start max-w-xs md:flex-row top-32 lg:max-w-sm md:w-full">
              {/* Radar Node */}
              <div className="absolute -left-3.5 flex items-center justify-center size-9 rounded-full bg-midnight border border-aqua/40 shadow-[0_0_15px_rgba(51,194,204,0.3)]">
                <span className="size-2 rounded-full bg-aqua" />
              </div>

              {/* Desktop Details */}
              <div className="hidden md:flex flex-col gap-1.5 pl-16">
                <span className="text-xs font-mono text-sand tracking-wide">
                  {item.date}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{item.title}</h3>
                <h4 className="text-sm font-mono text-aqua">{item.job}</h4>
              </div>
            </div>

            {/* Mobile Title & Content Card */}
            <div className="relative w-full pl-12 md:pl-4">
              <div className="block md:hidden mb-4">
                <span className="text-xs font-mono text-sand tracking-wide">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                <h4 className="text-xs font-mono text-aqua mt-0.5">{item.job}</h4>
              </div>

              {/* Bullet Points Container */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col gap-3">
                {item.contents.map((content, contentIdx) => (
                  <div key={contentIdx} className="flex items-start gap-3">
                    <span className="text-aqua mt-1 text-xs">▹</span>
                    <p className="subtext text-xs sm:text-sm leading-relaxed text-neutral-300">
                      {content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Scroll Progress Beam */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-1 top-0 overflow-hidden w-0.5 bg-gradient-to-b from-white/10 via-white/5 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 bg-gradient-to-b from-aqua via-fuchsia to-transparent rounded-full shadow-[0_0_10px_#33c2cc]"
          />
        </div>
      </div>
    </div>
  );
};
