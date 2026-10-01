import { motion } from "motion/react";
import Image from "next/image";
import { ProjectDetailsProps } from "@/constants/types";

const ProjectDetails = ({
  title,
  description,
  image,
  tags,
  href,
  closeModal,
}: ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-linear-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          type="button"
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <Image src="/assets/close.svg" width={24} height={24} alt="Close" />
        </button>
        <Image
          src={image}
          alt={title}
          width={768}
          height={384}
          className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <Image
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  width={40}
                  height={40}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation" href={href}>
              View Project{" "}
              <Image src="/assets/arrow-up.svg" width={16} height={16} alt="" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
