import { mySocials } from '../constants'
import MailButton from '../components/MailButton'
import { motion } from 'motion/react'

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const decorativeVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 0.3,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }
  return (
    <motion.section 
      className='c-space section-spacing mb-8'
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial="initial"
            animate="animate"
            variants={decorativeVariants}
            className="absolute -left-4 top-1/4 w-24 h-24 bg-sand/20 rounded-full blur-2xl"
          />
          <motion.div
            initial="initial"
            animate="animate"
            variants={decorativeVariants}
            className="absolute right-0 top-1/2 w-32 h-32 bg-indigo/20 rounded-full blur-2xl"
          />
          <motion.div
            initial="initial"
            animate="animate"
            variants={decorativeVariants}
            className="absolute left-1/3 bottom-0 w-28 h-28 bg-sand/20 rounded-full blur-2xl"
          />
        </div>

        {/* Content */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-heading text-center mb-4"
          >
            Get in Touch
          </motion.h2>

          {/* Contact Methods Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible" 
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {/* Email Card */}
            <motion.div 
              variants={cardVariants}
              className="bg-white/5 p-5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className="p-2 bg-sand/10 rounded-lg"
                >
                  <img src="/assets/socials/email.svg" alt="Email" className="w-6 h-6" />
                </motion.div>
              </div>
              <p className="text-neutral-400 mb-4">Drop me a line anytime!</p>
              <MailButton />
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              variants={cardVariants}
              className="bg-white/5 p-5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">Phone</h3>
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className="p-2 bg-sand/10 rounded-lg"
                >
                  <img src="/assets/socials/whatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
                </motion.div>
              </div>
              <p className="text-neutral-400 mb-2">+92 3090808693</p>
              <motion.a
                href="https://wa.me/923090808693"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                WhatsApp
              </motion.a>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              variants={cardVariants}
              className="bg-white/5 p-5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">Location</h3>
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className="p-2 bg-sand/10 rounded-lg"
                >
                  <img src="/assets/socials/location.svg" alt="Location" className="w-6 h-6" />
                </motion.div>
              </div>
              <p className="text-neutral-400">Pakistan</p>
              <p className="text-neutral-400">Available for Remote Work</p>
            </motion.div>

            {/* Social Links Card */}
            <motion.div 
              variants={cardVariants}
              className="bg-white/5 p-5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">Social</h3>
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className="p-2 bg-sand/10 rounded-lg"
                >
                  <img src="/assets/socials/social.svg" alt="Social" className="w-6 h-6" />
                </motion.div>
              </div>
              <div className="flex gap-3">
                {mySocials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    <img src={social.icon} alt={social.name} className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact