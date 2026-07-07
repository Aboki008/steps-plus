// components/Hero.jsx — Premium redesign
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, FileText, MessageCircle, X, Sparkles } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import generateCV from '../utils/generateCV';

const ROLES = [
  'Full Stack Developer',
  'Backend Specialist',
  'PHP, Laravel, Python, Next.js',
  'WordPress Solutions',
];

const Hero = ({ darkMode }) => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Rotate roles
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIdx(prev => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const whatsappLink =
    `https://wa.me/2347035858977?text=Hi!%20I%20would%20like%20to%20connect%20with%20you.`;

  const socials = [
    { icon: Github,   label: 'GitHub',   href: 'https://github.com/Aboki008/steps-plus' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashaoluolaitan' },
    { icon: Mail,     label: 'Email',    href: 'mailto:ashaoluolaitan@gmail.com' },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden:   { opacity: 0, y: 28 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background Elements ─────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Grid lines */}
        <div className="absolute inset-0 grid-bg opacity-40" />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: i % 2 === 0 ? '#0ea5e9' : '#38bdf8',
              opacity: 0.25,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.25, 0.5, 0.25] }}
            transition={{
              duration: 4 + i * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <span className="status-badge">
              <span className="neon-dot" style={{ width: 7, height: 7 }} />
              Available for Remote Projects
              <Sparkles size={13} className="text-primary-400 opacity-70" />
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-5 leading-none"
          >
            <span className="text-gray-900 dark:text-white">Olaitan</span>
            {' '}
            <span className="text-primary-500 dark:text-primary-400">Ashaolu</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            variants={itemVariants}
            className="h-12 flex items-center justify-center mb-6"
          >
            <span className="text-gray-400 dark:text-gray-500 font-mono text-lg sm:text-xl mr-2 select-none">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-xl sm:text-2xl font-semibold text-primary-500 dark:text-primary-400"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {ROLES[roleIdx]}
              </motion.span>
            </AnimatePresence>
            <span
              className="ml-1 inline-block w-[2px] h-6 bg-primary-500 rounded"
              style={{ animation: 'cursorBlink 1s step-end infinite' }}
            />
          </motion.div>

          {/* Hook line */}
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            I build systems that{' '}
            <span className="text-gray-900 dark:text-white font-semibold">perform</span>,{' '}
            <span className="text-gray-900 dark:text-white font-semibold">scale</span>, and{' '}
            <span className="text-gray-900 dark:text-white font-semibold">convert</span>.
            {' '}From robust backends to complete full stack platforms — delivered remotely, on time, every time.
          </motion.p>

          {/* Tech stack chips */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {['PHP', 'Laravel', 'Python', 'Next.js', 'WordPress', 'MySQL', 'API Design'].map((tech, i) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08, borderColor: 'rgba(14,165,233,0.7)' }}
                className="code-pill cursor-default"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.06 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="btn-primary flex items-center gap-2 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              See My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.button
              onClick={generateCV}
              className="btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FileText size={16} />
              Download CV
            </motion.button>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-green-400 border border-green-500/30 bg-green-500/8 hover:bg-green-500/15 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={16} />
              Quick Chat
            </motion.button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {socials.map(({ icon: Icon, label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                aria-label={label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                <Icon size={18} className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" />
              </motion.a>
            ))}

            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
            <span className="text-gray-600 dark:text-gray-500 text-sm font-mono">Open to Remote</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 dark:text-gray-600 font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-5 h-9 rounded-full border border-gray-400 dark:border-gray-700 flex justify-center pt-1.5"
            animate={{ borderColor: ['rgba(75,85,99,0.6)', 'rgba(14,165,233,0.6)', 'rgba(75,85,99,0.6)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2.5 rounded-full bg-primary-500"
              animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Quick contact modal ──────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              className="relative z-10 w-full max-w-sm glass-card p-6 shadow-2xl"
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/15 rounded-lg">
                  <MessageCircle size={20} className="text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">Let's Talk</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Fastest response on WhatsApp</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 leading-relaxed">
                Need a robust backend, full stack application, or WordPress solution? I typically reply within 2 hours during business hours.
              </p>

              <div className="flex flex-col gap-3">
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white py-2.5 rounded-lg font-semibold transition-colors text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle size={16} />
                  Open WhatsApp
                </motion.a>
                <a
                  href="mailto:ashaoluolaitan@gmail.com"
                  className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 hover:border-primary-500/50 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2.5 rounded-lg font-medium transition-all text-sm"
                >
                  <Mail size={16} />
                  Send Email Instead
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;