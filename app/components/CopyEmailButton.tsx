"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import type { CopyEmailButtonProps } from "@/constants/types";

const CopyEmailButton = ({
  className = "",
  email = "syed.m.abdullahaskari@gmail.com",
}: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      type="button"
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative px-5 py-3.5 text-xs font-mono font-medium text-center rounded-xl glass-panel border border-white/10 hover:border-aqua/40 text-neutral-200 hover:text-white cursor-pointer overflow-hidden transition-all duration-300 shadow-md ${className}`}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            className="flex items-center justify-center gap-2 text-mint"
            key="copied"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            <Image
              src="/assets/copy-done.svg"
              width={18}
              height={18}
              className="w-4 h-4"
              alt="Copied"
            />
            <span>Email Copied!</span>
          </motion.div>
        ) : (
          <motion.div
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Image
              src="/assets/copy.svg"
              width={18}
              height={18}
              className="w-4 h-4 opacity-75"
              alt="Copy"
            />
            <span>Copy Email Address</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
