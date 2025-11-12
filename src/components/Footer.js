import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Github, Linkedin, Twitter, Mail, ExternalLink, ChevronUp, X, FileText } from 'lucide-react';
import generateCV from '../utils/generateCV';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappNumber = '+2348114580007';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hi!%20I%20would%20like%20to%20connect%20with%20you.`;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Mail, href: 'mailto:contact@stepsplus.dev', label: 'Email', color: 'hover:text-red-400' }
  ];

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' }
      ]
    },
    {
      title: 'Projects',
      links: [
        { name: 'View All', href: '#projects' },
        { name: 'Featured', href: '#projects' },
        { name: 'Case Studies', href: '#projects' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#', external: true },
        { name: 'Documentation', href: '#', external: true },
        { name: 'Contact', href: '#contact' }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-950 via-black to-black border-t border-gray-800 py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent mb-2">
                StepsPlus
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-stack developer specializing in PHP, Laravel, React, and modern web technologies. Let's build something exceptional together.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-full bg-gray-900 text-gray-400 hover:bg-primary-500/20 ${social.color} transition-all duration-300 border border-gray-800 hover:border-primary-500/50`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Link Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (sectionIndex + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      {link.external && <ExternalLink size={12} className="opacity-0 group-hover:opacity-100" />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            <p className="flex items-center gap-2 mb-1">
              &copy; {currentYear} StepsPlus. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Built with <Heart size={14} className="text-red-500" /> and <Code size={14} className="text-primary-400" />
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-4 items-center flex-wrap justify-end">
            <motion.button
              onClick={generateCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 rounded-lg text-sm font-medium border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 flex items-center gap-2"
            >
              <FileText size={16} />
              Download CV
            </motion.button>
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-lg text-sm font-medium border border-green-500/30 hover:border-green-500/60 transition-all duration-300"
            >
              Get in Touch
            </motion.button>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gray-900 hover:bg-primary-500/20 text-gray-400 hover:text-primary-400 border border-gray-800 hover:border-primary-500/50 transition-all duration-300"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ChevronUp size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-primary-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary-500/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            className="relative z-50 max-w-lg w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-gray-800"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={closeModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </motion.button>

            {/* Content */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-gray-400">
                For the quickest response, reach out via WhatsApp. I typically respond within hours.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.934 1.216l-.343.194-.355-.099c-1.273-.36-2.46-.818-3.468-1.465L2.25 2.25c.45 1.288 1.45 2.383 2.666 2.854 1.064.383 2.038.77 2.983 1.318l.38.213c-.255.146-.516.3-.77.46-1.56.947-2.66 2.198-3.31 3.61-1.19-1.015-2.017-2.378-2.467-3.936L1.25 4.72l1.532 1.04c1.247.85 2.58 1.44 3.975 1.755l.238.052c-.244.205-.475.433-.687.68C4.125 8.95 3.4 10.61 3.4 12.397c0 1.49.275 2.916.77 4.245l.2.545c-.25.138-.497.28-.735.434-1.577.947-2.697 2.186-3.38 3.58l-.23.517 1.63-1.064a9.967 9.967 0 004.343 1.365c.16.008.32.01.48.01 5.431 0 9.842-4.411 9.842-9.842 0-.31-.007-.62-.022-.928 1.226-.938 2.29-2.094 3.07-3.415l.296-.572-1.68 1.09c-.383-.495-.84-.95-1.357-1.35.233-.39.444-.808.63-1.25.472-1.118.755-2.32.84-3.558l.078-1.194-1.237.793z" />
                </svg>
                Open WhatsApp
              </motion.a>

              <motion.a
                href="mailto:contact@stepsplus.dev"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full bg-primary-500/20 hover:bg-primary-500/30 text-primary-400 border border-primary-500/50 py-3 rounded-lg font-medium transition-colors"
              >
                <Mail size={18} />
                Send Email
              </motion.a>

              <motion.button
                onClick={closeModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-gray-200 py-3 rounded-lg font-medium transition-colors"
              >
                Maybe Later
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.footer>
  );
}
