"use client";

import { mySocials } from "@/constants";
import MailButton from "../components/MailButton";
import Image from "next/image";
import { motion, type Variants } from "motion/react";

export default function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    },
  };

  return (
    <section className="c-space section-spacing mb-16" id="contact">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-12 text-center items-center">
        <h2 className="text-heading gradient-text-coral">Get in Touch</h2>
      </div>

      {/* Contact Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
      >
        {/* Email Card */}
        <motion.div
          variants={cardVariants}
          className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between gap-5 group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Email</h3>
              <div className="size-10 rounded-xl bg-aqua/10 border border-aqua/20 flex items-center justify-center text-aqua group-hover:scale-110 transition-transform">
                <Image src="/assets/socials/email.svg" width={20} height={20} alt="Email" />
              </div>
            </div>
            <p className="text-neutral-400 text-sm mb-2">Drop me a line anytime!</p>
            <p className="text-xs font-mono text-neutral-300 select-all">
              syed.m.abdullahaskari@gmail.com
            </p>
          </div>
          <MailButton text="Write Email" />
        </motion.div>

        {/* WhatsApp Card */}
        <motion.div
          variants={cardVariants}
          className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between gap-5 group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">WhatsApp</h3>
              <div className="size-10 rounded-xl bg-mint/10 border border-mint/20 flex items-center justify-center text-mint group-hover:scale-110 transition-transform">
                <Image src="/assets/socials/whatsApp.svg" width={20} height={20} alt="WhatsApp" />
              </div>
            </div>
            <p className="text-sm font-mono text-neutral-300 mb-1">+92 309 0808693</p>
          </div>
          <motion.a
            href="https://wa.me/923090808693"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-medium rounded-xl bg-mint/15 text-mint border border-mint/30 hover:bg-mint/25 transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>WhatsApp</span>
            <span>→</span>
          </motion.a>
        </motion.div>

        {/* Location Card */}
        <motion.div
          variants={cardVariants}
          className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between gap-5 group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Location</h3>
              <div className="size-10 rounded-xl bg-sand/10 border border-sand/20 flex items-center justify-center text-sand group-hover:scale-110 transition-transform">
                <Image src="/assets/socials/location.svg" width={20} height={20} alt="Location" />
              </div>
            </div>
            <p className="text-base font-bold text-white">Lahore, Pakistan</p>
            <p className="text-neutral-400 text-sm mt-1">Available for Remote Work</p>
          </div>
        </motion.div>

        {/* Social Profiles Card */}
        <motion.div
          variants={cardVariants}
          className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between gap-5 group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Social</h3>
              <div className="size-10 rounded-xl bg-lavender/10 border border-lavender/20 flex items-center justify-center text-lavender group-hover:scale-110 transition-transform">
                <Image src="/assets/socials/social.svg" width={20} height={20} alt="Socials" />
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              {mySocials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="size-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image src={social.icon} width={20} height={20} alt={social.name} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}