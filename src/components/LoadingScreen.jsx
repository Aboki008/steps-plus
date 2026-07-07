// components/LoadingScreen.jsx — Premium animated loading screen
import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-dark-950">
      {/* Orb removed for flat design */}

      {/* Logo mark */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-8"
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 font-black text-3xl border border-primary-500/30"
          style={{
            background: 'rgba(14,165,233,0.08)',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          O
        </div>
        {/* Rotating ring */}
        <motion.div
          className="absolute -inset-2 rounded-2xl border-2 border-transparent"
          style={{
            borderTopColor: '#0ea5e9',
            borderRightColor: 'rgba(14,165,233,0.2)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Name */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-gray-900 dark:text-white font-bold text-lg mb-1"
        style={{ letterSpacing: '-0.01em' }}
      >
        Olaitan Ashaolu
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-primary-600 dark:text-primary-400 text-xs font-mono"
      >
        Full Stack Developer
      </motion.p>

      {/* Progress bar */}
      <motion.div className="mt-10 w-40 h-0.5 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-600 dark:bg-primary-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}
