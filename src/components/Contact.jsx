// components/Contact.jsx — Premium redesign
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, X, ArrowRight, Phone } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from 'react-icons/fa';

const CHANNELS = [
  {
    icon:    MessageCircle,
    label:   'WhatsApp',
    detail:  '07035858977',
    note:    'Fastest response — 2h or less',
    href:    'https://wa.me/2347035858977?text=Hi!%20I%20would%20like%20to%20connect%20with%20you.',
    accent:  'border-green-500/30',
    iconBg:  'bg-green-500/15',
    iconCol: 'text-green-400',
    btnCls:  'bg-green-500 hover:bg-green-400 text-white',
    cta:     'Open WhatsApp',
    external: true,
  },
  {
    icon:    Mail,
    label:   'Email',
    detail:  'ashaoluolaitan@gmail.com',
    note:    'For detailed enquiries',
    href:    'mailto:ashaoluolaitan@gmail.com',
    accent:  'border-primary-500/30',
    iconBg:  'bg-primary-500/15',
    iconCol: 'text-primary-400',
    btnCls:  'bg-primary-500 hover:bg-primary-400 text-white',
    cta:     'Send Email',
    external: false,
  },
  {
    icon:    Github,
    label:   'GitHub',
    detail:  'github.com/Aboki008',
    note:    'See my code & projects',
    href:    'https://github.com/Aboki008/steps-plus',
    accent:  'border-gray-500/30',
    iconBg:  'bg-gray-500/15',
    iconCol: 'text-gray-300',
    btnCls:  'bg-gray-700 hover:bg-gray-600 text-white',
    cta:     'View GitHub',
    external: true,
  },
];

const SOCIAL_LINKS = [
  { icon: Github,    href: 'https://github.com/Aboki008/steps-plus',        label: 'GitHub' },
  { icon: Linkedin,  href: 'https://www.linkedin.com/in/ashaoluolaitan',     label: 'LinkedIn' },
  { icon: Twitter,   href: 'https://twitter.com',                            label: 'Twitter' },
  { icon: Mail,      href: 'mailto:ashaoluolaitan@gmail.com',                label: 'Email' },
  { icon: Phone,     href: 'tel:+2347035858977',                             label: 'Phone' },
];

export default function Contact() {
  const [modal, setModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('ashaoluolaitan@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="contact" className="py-28 relative overflow-hidden">
        {/* Background orb removed for flat design */}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section header ──────────────────────────────── */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="code-pill mb-4 inline-block">contact.php</span>
            <h2 className="section-heading text-white mb-4">
              Let's{' '}
              <span className="text-primary-400">work together</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Open to robust backend systems, full-stack builds, and WordPress projects.
              I respond within <span className="text-white font-semibold">24 hours</span> — usually much faster.
            </p>
          </motion.div>

          {/* ── Contact channel cards ────────────────────────── */}
          <div className="grid sm:grid-cols-3 gap-5 mb-16">
            {CHANNELS.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <motion.div
                  key={ch.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass-card border ${ch.accent} bg-gray-900/40 p-6 glass-card-hover flex flex-col`}
                >
                  <div className={`p-3 ${ch.iconBg} rounded-xl w-fit mb-4`}>
                    <Icon size={22} className={ch.iconCol} />
                  </div>
                  <p className="text-white font-bold text-lg mb-1">{ch.label}</p>
                  <p className="text-gray-400 text-sm mb-1 font-mono">{ch.detail}</p>
                  <p className="text-gray-600 text-xs mb-5">{ch.note}</p>
                  <div className="mt-auto">
                    <motion.a
                      href={ch.href}
                      target={ch.external ? '_blank' : undefined}
                      rel={ch.external ? 'noopener noreferrer' : undefined}
                      className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${ch.btnCls}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {ch.cta}
                      <ArrowRight size={14} />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Bottom row: email copy + socials ────────────── */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Copy email */}
            <div className="flex items-center gap-3">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white border border-white/10 hover:border-white/25 px-4 py-2 rounded-lg transition-all duration-200"
              >
                <Mail size={14} />
                ashaoluolaitan@gmail.com
              </button>
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    className="text-xs text-emerald-400 font-medium"
                  >
                    ✓ Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Social icons row */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={label}
                >
                  <Icon size={16} className="text-gray-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Availability note ────────────────────────────── */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="status-badge">
              <span className="neon-dot" style={{ width: 7, height: 7 }} />
              Currently available for new projects
            </span>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Olaitan Ashaolu. Built with React & Framer Motion.
          </p>
          <a
            href="#home"
            className="text-xs text-gray-600 hover:text-primary-400 transition-colors font-mono"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
