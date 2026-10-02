import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import Image from "next/image";
import type { ProjectProps } from "@/constants/types";

const Project = ({
  title,
  description,
  href,
  image,
  tags,
  setPreview,
  index = 1,
}: ProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const formattedIndex = index < 10 ? `0${index}` : `${index}`;

  return (
    <>
      <div
        className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer group"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-start sm:items-center gap-6">
          {/* Project Number */}
          <span className="font-mono text-2xl sm:text-3xl font-black text-white/20 group-hover:text-aqua transition-colors duration-300">
            {formattedIndex}
          </span>

          {/* Project Meta */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-aqua transition-colors duration-200">
              {title}
            </h3>
            <p className="subtext text-xs sm:text-sm line-clamp-1 max-w-xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-mono text-[11px]"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          className="self-start sm:self-center px-4 py-2 rounded-xl bg-white/5 group-hover:bg-aqua/15 border border-white/10 group-hover:border-aqua/30 text-xs font-mono font-medium text-neutral-300 group-hover:text-aqua transition-all flex items-center gap-2"
        >
          <span>Explore</span>
          <Image
            src="/assets/arrow-right.svg"
            width={16}
            height={16}
            alt="View"
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      {isOpen && (
        <ProjectDetails
          title={title}
          description={description}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Project;
