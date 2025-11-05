import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function CopyEmailButton() {
    const [copied, setCopied] = useState(false);
    const email = "syed.m.abdullahaskari@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
  return (
    <motion.button
    onClick={handleCopyEmail}
    className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-48 overflow-hidden cursor-pointer"
    whileHover={{y:-5}}
    whileTap={{scale:1.05}}>
        <AnimatePresence mode="wait">
        {copied ? (
            <motion.p
            className="flex items-center justify-center gap-2"
            key="copied-email"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{opacity:0,y:-10}}
            transition={{duration:0.1, ease:"easeInOut"}}>
                <img src="/assets/copy-done.svg"
                className="w-5" alt="copy icon" />
                Email Copied!
            </motion.p>
        ) : (
            <motion.p
            className="flex items-center justify-center gap-2"
            key="copy-email"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity:0}}
            transition={{duration:0.1}}
            >
                <img src="/assets/copy.svg" className="w-5" alt="copy icon" />
                Copy Email
            </motion.p>
        )}
        </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton