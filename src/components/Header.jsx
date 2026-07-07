import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const openContactForm = () => setContactFormOpen(true)
  const closeContactForm = () => setContactFormOpen(false)

  const navItems = ["Home", "About", "Projects", "Experience", "Contact"]

  const socialLinks = [
    { icon: <FiGithub />, href: "#" },
    { icon: <FiTwitter />, href: "#" },
    { icon: <FiLinkedin />, href: "#" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md transition-all duration-300 h-16 md:h-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
          className="flex items-center cursor-pointer flex-shrink-0"
        >
          <div className="h-10 w-20 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl mr-3 shadow-md">
            OA
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent whitespace-nowrap">
            Olaitan Ashaolu
          </span>
        </motion.div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
          <div className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="relative text-gray-300 hover:text-violet-600 font-medium transition-colors duration-300 group cursor-pointer whitespace-nowrap"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </nav>

        {/* Desktop Social Icons + Button */}
        <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
          <div className="flex items-center space-x-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.2 }}
                className="text-gray-400 hover:text-violet-600 transition-colors duration-300 cursor-pointer text-lg"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={openContactForm} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 }}
            className="ml-2 px-6 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500 cursor-pointer whitespace-nowrap"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center flex-shrink-0">
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={toggleMenu}
            className="text-gray-300 cursor-pointer p-2"
          >
            {isOpen ? <FiX className="h-6 w-6"/> : <FiMenu className="h-6 w-6"/>}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/90 backdrop-blur-lg px-6 py-5 space-y-5 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="text-gray-200 font-medium hover:text-violet-500 transition cursor-pointer py-2 text-lg"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Social Links + Button in Mobile Menu */}
            <div className="pt-4 border-t border-gray-700 flex flex-col items-center space-y-4">
              <div className="flex items-center justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-gray-400 hover:text-violet-600 transition-colors duration-300 cursor-pointer text-2xl"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <motion.button 
                onClick={() => {
                  setIsOpen(false)
                  openContactForm()
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="w-full max-w-xs rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold px-6 py-3 hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-400 cursor-pointer text-lg"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Contact Form Modal */}
{contactFormOpen && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center p-4 md:p-8"
    onClick={closeContactForm}
  >
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md mx-4 
                 flex flex-col justify-center p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-300 dark:text-gray-100">
          Contact Us Now
        </h1>
        <button 
          onClick={closeContactForm}
          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
          <FiX className="w-6 h-6 text-gray-600 dark:text-gray-300"/>
        </button>
      </div>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                     dark:bg-gray-900 dark:text-gray-100 focus:outline-none 
                     focus:ring-2 focus:ring-violet-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                     dark:bg-gray-900 dark:text-gray-100 focus:outline-none 
                     focus:ring-2 focus:ring-violet-500"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                     dark:bg-gray-900 dark:text-gray-100 focus:outline-none 
                     focus:ring-2 focus:ring-violet-500 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 
                     rounded-lg transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  </motion.div>
)}


      </AnimatePresence>
    </header>
  )
}

export default Header