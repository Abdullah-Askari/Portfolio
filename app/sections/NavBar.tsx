"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-5xl glass-panel rounded-full px-6 py-3 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between pointer-events-auto transition-all duration-300">
        {/* Brand Logo */}
        <Link
          href="#home"
          className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2 group"
        >
          <span className="gradient-text-cyan group-hover:opacity-80 transition-opacity">
            Abdullah Askari
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex items-center justify-center p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
        >
          <Image
            src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
            width={20}
            height={20}
            className="w-5 h-5"
            alt="Menu Toggle"
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-20 inset-x-4 max-w-md mx-auto glass-panel rounded-2xl p-6 border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.7)] pointer-events-auto"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium text-neutral-200 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
