"use client";

import { motion } from "motion/react";
import type { MailButtonProps } from "@/constants/types";

export default function MailButton({
  className = "",
  email = "syed.m.abdullahaskari@gmail.com",
  text = "Send an Email",
}: MailButtonProps) {
  return (
    <motion.a
      href={`mailto:${email}`}
      className={`inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-medium text-neutral-200 hover:text-white rounded-xl glass-panel border border-white/10 hover:border-aqua/40 transition-all duration-300 group ${className}`}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span data-name="mail-button-text">{text}</span>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 text-aqua group-hover:translate-x-1 transition-transform"
      >
        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
      </motion.svg>
    </motion.a>
  );
}