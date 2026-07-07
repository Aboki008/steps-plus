// components/About.jsx — Premium redesign
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Users, Terminal } from 'lucide-react';

const highlights = [
  {
    icon: Layers,
    label: 'Full-Stack Architecture',
    desc: 'End-to-end robust web applications',
    border: 'hover:border-blue-500/40',
    iconColor: 'text-blue-400',
  },
  {
    icon: Zap,
    label: 'Fast Delivery',
    desc: 'Optimised workflows, on-time release',
    border: 'hover:border-yellow-500/40',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Terminal,
    label: 'Secure & Solid',
    desc: 'CSRF protection, session handling, validation',
    border: 'hover:border-emerald-500/40',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Users,
    label: 'Remote-Ready',
    desc: 'Async communication, clear documentation',
    border: 'hover:border-purple-500/40',
    iconColor: 'text-purple-400',
  },
];

const stats = [
  { value: '5+', label: 'Years Experience', suffix: '' },
  { value: '50',  label: 'Projects Delivered', suffix: '+' },
  { value: '30',  label: 'Happy Clients', suffix: '+' },
];

const About = () => (
  <section id="about" className="py-28 relative overflow-hidden">

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <span className="code-pill mb-4 inline-block">about_me.php</span>
        <h2 className="section-heading text-white">
          The developer behind<br />
          <span className="text-primary-400">the code</span>
        </h2>
      </motion.div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        {/* Left — story text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg leading-8 mb-6">
            I'm a <span className="text-white font-semibold">Full Stack Developer</span> based in Nigeria, serving clients remotely. With 5+ years of hands-on experience, I specialize in robust backend systems (PHP, Laravel, Python, Next.js) while also building complete WordPress solutions and web platforms.
          </p>
          <p className="text-gray-400 leading-7 mb-8">
            My core is backend development, but my stack is fully production-ready end-to-end: PHP, Laravel, Python, Next.js, alongside WordPress and standard frontend technologies — the tools that actually ship. I'm currently pursuing an <span className="text-primary-400 font-medium">MSc in Software Engineering</span> to deepen my architecture and systems knowledge.
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: '📍 Nigeria (Remote)', style: 'border-gray-700 text-gray-400' },
              { label: '📧 ashaoluolaitan@gmail.com', style: 'border-primary-500/30 text-primary-400' },
              { label: '📱 07035858977', style: 'border-gray-700 text-gray-400' },
            ].map(({ label, style }) => (
              <span
                key={label}
                className={`text-xs px-3 py-1.5 rounded-full border bg-dark-800/60 ${style} font-mono`}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — highlight cards */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card glass-card-hover p-5 border border-white/5 ${item.border} bg-gray-900/40`}
              >
                <div className={`p-2.5 rounded-lg bg-dark-800/60 w-fit mb-3`}>
                  <Icon size={20} className={item.iconColor} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="mt-20 grid grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-white/6"
        style={{ background: 'rgba(17,24,39,0.5)', backdropFilter: 'blur(20px)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center py-10 px-6 ${i < stats.length - 1 ? 'border-r border-white/6' : ''}`}
          >
            <motion.div
              className="text-4xl lg:text-5xl font-black text-primary-400 mb-2 leading-none"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {stat.value}{stat.suffix}
            </motion.div>
            <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
