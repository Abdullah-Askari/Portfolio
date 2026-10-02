import { motion } from "motion/react";
import  { CardProps } from "@/constants/types";

const Card = ({ style, text, image, containerRef }: CardProps) => {
  return image && !text ? (
    <motion.img
      className="absolute w-10 sm:w-12 md:w-14 cursor-grab select-none p-1.5 rounded-xl bg-midnight/90 border border-white/10 shadow-lg"
      src={image}
      style={style}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.3}
    />
  ) : (
    <motion.div
      className="absolute px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-medium text-center rounded-full border border-white/10 ring-1 ring-white/10 bg-midnight/90 shadow-lg text-neutral-200 cursor-grab select-none whitespace-nowrap min-w-[5rem] sm:min-w-[6.5rem] md:min-w-[8rem]"
      style={style}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.3}
    >
      {text}
    </motion.div>
  );
};

export default Card;
