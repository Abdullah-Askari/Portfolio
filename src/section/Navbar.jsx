import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Navigation({ onLinkClick }) {
    return (
        <ul
        className="nav-ul">
            <li
            className="nav-li">
                <a href="#home"
                onClick={onLinkClick}
                className="nav-link">Home</a>
            </li>
            <li
            className="nav-li">
                <a href="#about"
                onClick={onLinkClick}
                className="nav-link">About</a>
            </li>
            <li
            className="nav-li">
                <a href="#projects"
                onClick={onLinkClick}
                className="nav-link">Projects</a>
            </li>
            <li
            className="nav-li">
                <a href="#experiences"
                onClick={onLinkClick}
                className="nav-link">Experiences</a>
            </li>
            <li
            className="nav-li">
                <a href="#contact"
                onClick={onLinkClick}
                className="nav-link">Contact</a>
            </li>
        </ul>
    )}
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleNavClick = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

  return (
    <div
    className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
        <div
        className='mx-auto c-space max-w-7xl'>
            <div
            className='flex items-center justify-between py-2 sm:py-0'>
                <a
                className='text-xl font-bold transition-colors text-neutral-400
                hover:text-white'>
                    Abdullah Askari
                </a>
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden relative z-50"
                >
                    <img src={isOpen ?"/assets/close.svg":"/assets/menu.svg"} className='w-6 h-6' 
                    alt='toggle'/>
                </button>
                <nav
                className="hidden sm:flex">
                    <Navigation onLinkClick={handleNavClick} />
                </nav>
            </div>
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              className="block overflow-hidden text-center sm:hidden relative z-10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              <nav className="pb-5">
                <Navigation onLinkClick={handleNavClick} />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}

export default Navbar