// components/Skills.jsx — Premium redesign with clean grid
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SKILL_CATEGORIES = [
  {
    title:  'Backend Architecture',
    emoji:  '💻',
    accent: 'border-blue-500/30',
    dot:    '#38bdf8',
    skills: [
      { name: 'PHP',          level: 95 },
      { name: 'Laravel',      level: 90 },
      { name: 'Python',       level: 85 },
      { name: 'Node.js',      level: 80 },
    ],
  },
  {
    title:  'Frontend & Frameworks',
    emoji:  '🎨',
    accent: 'border-indigo-500/30',
    dot:    '#6366f1',
    skills: [
      { name: 'Next.js',      level: 85 },
      { name: 'React',        level: 85 },
      { name: 'HTML/CSS',     level: 95 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title:  'Database & Security',
    emoji:  '🔒',
    accent: 'border-emerald-500/30',
    dot:    '#10b981',
    skills: [
      { name: 'MySQL',            level: 90 },
      { name: 'PostgreSQL',       level: 85 },
      { name: 'Secure Forms',     level: 90 },
      { name: 'Input Validation', level: 92 },
    ],
  },
  {
    title:  'WordPress & CMS',
    emoji:  '🔧',
    accent: 'border-violet-500/30',
    dot:    '#a78bfa',
    skills: [
      { name: 'WordPress',          level: 95 },
      { name: 'Custom Themes',      level: 88 },
      { name: 'Plugin Dev',         level: 85 },
      { name: 'Website Management', level: 92 },
    ],
  },
];

const EXTRA_TOOLS = [
  'cPanel', 'Git', 'Google Workspace', 'Canva', 'CapCut',
  'Figma', 'Perplexity API', 'VS Code', 'Netlify', 'CI/CD',
  'Antigravity', 'DevinAI', 'Windsurf', 'Roo', 'Cline',
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background orb removed for flat design */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────── */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <span className="code-pill mb-4 inline-block">skills.config.js</span>
          <h2 className="section-heading text-white">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 text-lg mt-3 max-w-xl">
            Production-tested tools and frameworks — from CMS builds to AI integrations.
          </p>
        </motion.div>

        {/* ── Skills grid ─────────────────────────────────────── */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: catIdx * 0.1 }}
              className={`glass-card border border-white/5 ${cat.accent} p-6 bg-gray-900/40 glass-card-hover`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-6">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="text-white font-bold text-sm leading-tight">{cat.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-gray-300 text-xs font-medium">{skill.name}</span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: cat.dot }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: cat.dot,
                        }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: catIdx * 0.15 + skillIdx * 0.08,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Extra tools ─────────────────────────────────────── */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm font-medium mb-5 uppercase tracking-widest">
            Also in the toolkit
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {EXTRA_TOOLS.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.06 }}
                whileHover={{ scale: 1.08, borderColor: 'rgba(14,165,233,0.5)', color: '#7dd3fc' }}
                className="px-4 py-2 glass-card border border-white/6 text-xs font-medium text-gray-400 rounded-full cursor-default transition-all duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}