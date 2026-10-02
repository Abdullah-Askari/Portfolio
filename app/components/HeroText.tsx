import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Ideas", "Concepts", "Designs", "Ideas", "Concepts", "Designs"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 text-center lg:text-left rounded-3xl">
      {/* Desktop View */}
      <div className="flex-col hidden lg:flex" data-name="hero-text">
        <motion.h1
          className="text-3xl sm:text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          Hi I&apos;m Abdullah Askari
        </motion.h1>
        <div className="flex flex-col items-start mt-2">
          <motion.p
            className="text-4xl sm:text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            Shaping 
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-6xl sm:text-7xl xl:text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-2xl sm:text-3xl xl:text-4xl font-medium text-neutral-300 mt-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Into Real Projects that Deliver Results
          </motion.p>
        </div>
      </div>
      {/* Mobile / Tablet View */}
      <div className="flex flex-col space-y-3 lg:hidden">
        <motion.p
          className="text-2xl sm:text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          Hi, I&apos;m Abdullah Askari
        </motion.p>
        <div className="flex flex-col items-center">
          <motion.p
            className="text-3xl sm:text-4xl font-bold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            Shaping 
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-5xl sm:text-6xl"
            />
          </motion.div>
          <motion.p
            className="text-xl sm:text-2xl font-medium text-neutral-300 mt-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Into Real Projects that Deliver Results
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;