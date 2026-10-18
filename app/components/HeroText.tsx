"use client";


import { FlipWords } from "./FlipWords";

const words = ["Ideas", "Concepts", "Designs"];

export default function HeroText() {
  return (
    <div className="portfolio-hero-text-intro">
      <p className="portfolio-hero-text-greeting">Hi, I&apos;m Abdullah Askari</p>
      <h1 className="portfolio-hero-text-title">Shaping<br /><FlipWords words={words} className="portfolio-hero-text-word" /></h1>
      <p className="portfolio-hero-text-description">Into Real Projects that Deliver Results</p>
      <div className="portfolio-hero-text-actions"><a href="#projects">View my work <span aria-hidden="true">↗</span></a><a href="#contact">Contact me</a></div>
    </div>
  );
}
