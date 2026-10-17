"use client";

import styles from "./NavBar.module.css";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const scrollY = window.scrollY;
    const previous = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.documentElement.style.overflow,
    };
    dialog.showModal();
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.documentElement.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      dialog.close();
      document.body.style.position = previous.position;
      document.body.style.top = previous.top;
      document.body.style.width = previous.width;
      document.documentElement.style.overflow = previous.overflow;
      const behavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      document.documentElement.style.scrollBehavior = behavior;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(`#${visible[0].target.id}`);
    }, { rootMargin: "-15% 0px -45% 0px", threshold: [0, 0.1, 0.5] });
    navLinks.forEach(({ href }) => { const section = document.querySelector(href); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.bar}>
          <Link href="#home" className={styles.brand}><span className={styles.name}>Abdullah Askari</span></Link>
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => <Link key={link.name} href={link.href} className={styles.link} aria-current={activeSection === link.href ? "location" : undefined}>{link.name}</Link>)}
          </nav>
          <button type="button" className={['md:hidden', styles.toggle].join(" ")} aria-label="Open menu" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(true)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 8h16M4 16h16" /></svg>
          </button>
        </div>
      </header>
      <dialog ref={dialogRef} id="mobile-navigation" className={styles.dialog} aria-labelledby="navigation-title" onCancel={() => setIsOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
        <div className={styles.panel}>
          <div className={styles.heading}>
            <span id="navigation-title" className={styles.title}>Menu</span>
            <button type="button" className={styles.toggle} aria-label="Close menu" onClick={() => setIsOpen(false)} autoFocus><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
          </div>
          <nav aria-label="Mobile navigation">
            {navLinks.map((link) => <Link key={link.name} href={link.href} className={styles.mobileLink} aria-current={activeSection === link.href ? "location" : undefined} onClick={(event) => {
              event.preventDefault();
              setIsOpen(false);
              // Run after the effect restores the original page position.
              requestAnimationFrame(() => {
                const target = document.querySelector<HTMLElement>(link.href);
                target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
                if (target) { target.tabIndex = -1; target.focus({ preventScroll: true }); }
                window.history.replaceState(null, "", link.href);
              });
            }}><span>{link.name}</span><span className={styles.arrow} aria-hidden="true">↗</span></Link>)}
          </nav>
        </div>
      </dialog>
    </>
  );
}
