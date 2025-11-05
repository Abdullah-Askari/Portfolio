import { motion } from 'motion/react'
import { mySocials } from '../constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      className="border-t border-white/10 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      > 
        {/* Bottom section with copyright */}
        <motion.div 
                    className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6"
          variants={itemVariants}
        >
          <p>© {currentYear} Abdullah Askari. All rights reserved.</p>
          
          <motion.div 
            className="flex gap-6"
            variants={containerVariants}
          >
            <motion.a
              href="#"
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.05, color: "#ffffff" }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.05, color: "#ffffff" }}
            >
              Terms of Service
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer