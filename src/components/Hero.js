// components/Hero.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, FileText } from 'lucide-react';
import generateCV from '../utils/generateCV';

const Hero = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Modal state for quick contact
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappNumber = '+2348114580007';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hi!%20I%20would%20like%20to%20connect%20with%20you.`;

  const openModal = (social) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 w-full">
      {/* Hero Background Image + Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop')`,
            filter: darkMode ? 'brightness(0.45) contrast(1.05)' : 'brightness(0.9)'
          }}
        />

        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30" />

        {/* Floating Accents */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-4 sm:left-8 w-6 h-6 bg-primary-500 rounded-full opacity-25"
        />
        <motion.div
          animate={{ y: [0, 28, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-24 right-4 sm:right-12 w-10 h-10 bg-primary-400 rounded-full opacity-20"
        />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6 sm:mb-8 text-xs sm:text-sm"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
            <span className="text-primary-500 font-medium">
              Senior Full Stack Developer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
          >
            Building Digital
            <motion.span
              className="block bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Experiences
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 text-justify"
          >
            Senior Developer specializing in <span className="text-primary-400 font-semibold">React</span>, 
            <span className="text-primary-400 font-semibold"> Next.js</span>, and 
            <span className="text-primary-400 font-semibold"> Full Stack</span> solutions. 
            Passionate about creating scalable, performant applications.
          </motion.p>

          {/* Tech Stack Scroll */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 sm:gap-x-8 mb-8 sm:mb-12 text-gray-400 px-2"
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Supabase', 'MySQL'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, color: '#0ea5e9' }}
                className="font-medium text-xs sm:text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="group btn-primary inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.button
              onClick={generateCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 text-sm sm:text-base"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          {/* Social Links (open modal for fast contact) */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-4 sm:space-x-6"
          >
            {[
              { icon: Github, label: 'GitHub' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Mail, label: 'Email' }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.button
                  key={social.label}
                  onClick={() => openModal(social.label)}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-dark-800 hover:bg-primary-500 text-gray-400 hover:text-white transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
      {/* Modal for hero social icons */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={closeModal} />
          <motion.div
            className="relative z-50 max-w-lg w-full bg-neutral-900 rounded-2xl p-6 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3 className="text-xl font-bold mb-2">Fast Contact</h3>
            <p className="text-gray-300 mb-4">Fast contact and response — use WhatsApp for the quickest reply.</p>
            <div className="flex gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition-colors"
              >
                Open WhatsApp
              </a>
              <button
                onClick={closeModal}
                className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-700 text-gray-200 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;