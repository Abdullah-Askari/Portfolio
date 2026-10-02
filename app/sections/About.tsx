"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Card from "../components/Card";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import { Globe } from "../components/globe";

export default function About() {
  const grid2Container = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Pakistan Standard Time (PKT, UTC+5)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="c-space section-spacing" id="about">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-12">
        <h2 className="text-heading gradient-text-cyan">About Me</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[19.5rem]">
        {/* Grid 1: Bio & Philosophy */}
        <div className="flex flex-col justify-end p-7 glass-panel glass-panel-hover rounded-2xl grid-1 relative overflow-hidden">
          <Image
            src="/assets/coding-pov.png"
            width={800}
            height={600}
            alt="Coding point of view"
            className="absolute scale-[1.75] -right-20 -top-4 md:scale-[2.6] md:left-48 md:inset-y-8 opacity-75 object-cover pointer-events-none"
          />
          <div className="z-10">
            <p className="headtext font-bold text-white">Hi, I&apos;m Abdullah Askari</p>
            <p className="subtext leading-relaxed">
              Software engineering student with a passion for mobile development, specializing in React Native and modern web solutions.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
        </div>

        {/* Grid: Photo */}
        <div className="glass-panel glass-panel-hover md:col-span-3 md:row-span-2 h-72 md:h-full relative overflow-hidden rounded-2xl border border-white/10 group">
          <Image
            src="/me.jpeg"
            alt="Abdullah Askari"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-2xl filter saturate-[1.1] group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 z-10">
            <p className="text-lg font-bold text-white">Abdullah Askari</p>
            <p className="text-xs font-mono text-aqua">Software Engineer</p>
          </div>
        </div>

        {/* Grid 2: Interactive Code Principles */}
        <div className="glass-panel glass-panel-hover grid-2 rounded-2xl relative overflow-hidden">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full p-4 sm:p-6 relative select-none"
          >
            <p className="flex items-center text-3xl sm:text-4xl md:text-5xl font-black text-white/10 tracking-widest pointer-events-none select-none text-center">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "15deg", top: "18%", left: "8%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-12deg", top: "54%", left: "36%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", bottom: "16%", left: "60%" }}
              text="Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-18deg", top: "14%", left: "56%" }}
              text="Clean Code"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "16deg", top: "60%", left: "8%" }}
              image="/assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "12%", left: "32%" }}
              image="/assets/logos/github.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3: Time Zone & 3D Globe */}
        <div className="glass-panel glass-panel-hover grid-3 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="z-10 max-w-[60%] sm:max-w-[50%]">
            <p className="headtext font-bold text-white">Time Zone</p>
            <p className="subtext text-xs leading-relaxed">
              I&apos;m based in Lahore, Pakistan, but I can work remotely worldwide.
            </p>
            {/* Live Clock Pill */}
            {currentTime && (
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-midnight/90 border border-aqua/30 text-aqua font-mono text-xs shadow-inner">
                <span className="size-2 rounded-full bg-aqua animate-pulse" />
                <span>{currentTime} PKT</span>
              </div>
            )}
          </div>
          <figure className="absolute -right-12 -bottom-12 sm:-right-8 sm:-bottom-8 pointer-events-none opacity-80">
            <Globe />
          </figure>
        </div>

        {/* Grid 4: Collaboration CTA */}
        <div className="glass-panel glass-panel-hover grid-4 rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center text-center gap-4 bg-gradient-to-br from-midnight via-storm/50 to-midnight">
          <div className="size-12 rounded-2xl bg-fuchsia/10 border border-fuchsia/30 flex items-center justify-center text-fuchsia shadow-[0_0_20px_rgba(202,47,140,0.25)]">
            <span className="text-xl">🤝</span>
          </div>
          <div>
            <p className="headtext font-bold text-white">Do you want to start a project together?</p>
          </div>
          <CopyEmailButton />
        </div>

        {/* Grid 5: Tech Stack Orbit */}
        <div className="glass-panel glass-panel-hover grid-5 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="z-10 md:max-w-[42%] w-full">
            <p className="headtext font-bold text-white">Tech Stack</p>
            <p className="subtext leading-relaxed">
              Specialized in React Native mobile apps, Expo, React, Next.js, TypeScript, Firebase, and modern development tools.
            </p>
          </div>
          <div className="w-full md:w-[58%] h-72 sm:h-80 md:h-full flex items-center justify-center relative mt-4 md:mt-0">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
}