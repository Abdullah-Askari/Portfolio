"use client";

import styles from "./HeroText.module.css";

import { FlipWords } from "./FlipWords";

const words = ["Ideas", "Concepts", "Designs"];

export default function HeroText() {
  return (
    <div className={styles.intro}>
      <p className={styles.greeting}>Hi, I&apos;m Abdullah Askari</p>
      <h1 className={styles.title}>Shaping<br /><FlipWords words={words} className={styles.word} /></h1>
      <p className={styles.description}>Into Real Projects that Deliver Results</p>
      <div className={styles.actions}><a href="#projects">View my work <span aria-hidden="true">↗</span></a><a href="#contact">Contact me</a></div>
    </div>
  );
}
