import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];
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
    <>
      <motion.section
        id="contact"
        className="py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full overflow-hidden text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto text-justify">
          I'm always open to PHP backend work, full-stack projects, and tutoring engagements. If you need reliable server-side development (PHP/MySQL) or help with modern frontend integrations, reach out — I typically respond within 24 hours.
        </p>
        <div className="flex justify-center gap-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.button
                key={index}
                onClick={() => openModal(link.label)}
                className="p-4 rounded-full bg-gray-900 text-white hover:bg-blue-500 transition-colors"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <Icon size={24} />
              </motion.button>
            );
          })}
        </div>
      </motion.section>

      {/* Modal */}
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
    </>
  );
}
