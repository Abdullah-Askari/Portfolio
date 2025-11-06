import { motion, useAnimationControls } from 'motion/react'
import { useEffect } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start({
      x: [100, -100],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    })
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <motion.footer 
      className="border-t border-white/10 mt-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      > 
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0 bg-linear-to-r from-sand/5 via-indigo/5 to-sand/5"
          animate={controls}
          style={{ width: "200%" }}
        />
        
        {/* Content with animations */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6 relative"
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="text-neutral-300 hover:text-white transition-colors duration-300"
          >
            © {currentYear} Abdullah Askari. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex gap-8"
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </motion.span>
            <motion.span
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer