import { motion } from "motion/react";
import Image from "next/image";
import type { ProjectDetailsProps } from "@/constants/types";

const ProjectDetails = ({
  title,
  description,
  image,
  tags,
  href,
  closeModal,
}: ProjectDetailsProps) => {
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl glass-panel border border-white/15 rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9)] bg-gradient-to-b from-midnight via-midnight to-[#040718]"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          type="button"
          aria-label="Close modal"
          className="absolute z-30 top-4 right-4 size-10 rounded-full bg-black/80 hover:bg-black border border-white/20 text-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black/40">
          <Image
            src={image}
            alt={title}
            width={768}
            height={420}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {title}
            </h3>
            <p className="subtext leading-relaxed text-sm sm:text-base">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
              >
                <Image
                  src={tag.path}
                  alt={tag.name}
                  width={16}
                  height={16}
                  className="size-4 object-contain"
                />
                <span>{tag.name}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end pt-4 mt-2">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-aqua text-midnight font-bold text-xs font-mono shadow-[0_0_20px_rgba(51,194,204,0.4)] hover:opacity-90 transition-opacity"
              >
                <span>View Repository / Live</span>
                <Image src="/assets/arrow-up.svg" width={14} height={14} alt="Open" />
              </a>
            ) : (
              <span className="text-xs font-mono text-neutral-500">
                Private / Internal Project
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
