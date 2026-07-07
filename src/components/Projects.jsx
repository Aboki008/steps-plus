// components/Projects.jsx — Premium redesign with AI/React projects
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Globe, Bot, Code2, Info } from 'lucide-react';

const TAG_COLORS = {
  'PHP':           'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
  'MySQL':         'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  'React':         'bg-blue-500/15 text-blue-300 border-blue-500/30',
  'Next.js':       'bg-gray-500/15 text-gray-200 border-gray-500/30',
  'Tailwind CSS':  'bg-teal-500/15 text-teal-300 border-teal-500/30',
  'AI':            'bg-purple-500/15 text-purple-300 border-purple-500/30',
  'DeepSeek API':  'bg-violet-500/15 text-violet-300 border-violet-500/30',
  'Gemini API':    'bg-orange-500/15 text-orange-300 border-orange-500/30',
  'Vercel':        'bg-gray-200/50 dark:bg-white/10 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-white/15',
  'WordPress':     'bg-blue-600/15 text-blue-300 border-blue-600/30',
  'Supabase':      'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  'Bootstrap':     'bg-purple-600/15 text-purple-300 border-purple-600/30',
  'Python':        'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  'Paystack':      'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  'Monnify':       'bg-blue-600/15 text-blue-300 border-blue-600/30',
  'Remita':        'bg-orange-600/15 text-orange-300 border-orange-600/30',
  'Perplexity API': 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  'Cloudflare':    'bg-amber-500/15 text-amber-300 border-amber-500/30',
  'Redis':         'bg-red-500/15 text-red-300 border-red-500/30',
};

const getTagClass = (tag) =>
  TAG_COLORS[tag] || 'bg-gray-100 dark:bg-dark-700/60 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10';

const PROJECTS = [
  // 1. React / AI
  {
    category: 'ai',
    badge:    { label: 'AI + React', icon: Bot },
    title:    'Peerwise — AI Manuscript Critic',
    description:
      'AI-assisted manuscript review platform for academic writing, research feedback, and editorial support. Integrates DeepSeek, Gemini, and Perplexity APIs for real-time critique. Backend built with Python. Features Paystack integration for subscriptions.',
    tags:     ['React', 'Next.js', 'Tailwind CSS', 'AI', 'DeepSeek API', 'Gemini API', 'Perplexity API', 'Python', 'Paystack', 'Vercel'],
    link:     'https://peerwise.vercel.app/',
    gradient: 'from-violet-600 via-purple-600 to-blue-600',
    accent:   'border-violet-500/40',
    glow:     'rgba(139,92,246,0.15)',
    features: ['AI manuscript critique', 'Multi-API integration', 'Research feedback'],
  },
  // 2. PHP / WordPress
  {
    category: 'php',
    badge:    { label: 'PHP + MySQL', icon: Code2 },
    title:    'Journal Publishing Platform',
    description:
      'Full journal management system with author, reviewer, and admin workflows. Handles manuscript submission, peer review routing, and editorial publishing.',
    tags:     ['PHP', 'MySQL', 'WordPress'],
    link:     'https://plasujer.com.ng/',
    gradient: 'from-blue-600 to-cyan-500',
    accent:   'border-blue-500/40',
    glow:     'rgba(59,130,246,0.12)',
    features: ['Manuscript Submission', 'Peer Review System', 'Admin Workflows'],
  },
  // 3. React / AI
  {
    category: 'ai',
    badge:    { label: 'AI + React', icon: Bot },
    title:    'MusicMaestro — Online Video Tutoring',
    description:
      'Online tutoring platform for video-based music lessons, guided learning, and remote student engagement. Built with React/Next.js, featuring responsive learning pages, user-friendly lesson navigation, and an API-ready architecture for AI guidance.',
    tags:     ['React', 'Next.js', 'Tailwind CSS', 'AI', 'Vercel'],
    link:     'https://musicmaestro-tyfv.vercel.app/',
    gradient: 'from-pink-600 via-rose-500 to-orange-500',
    accent:   'border-pink-500/40',
    glow:     'rgba(236,72,153,0.15)',
    features: ['Video lesson UI', 'Scalable learning components', 'API-ready architecture'],
  },
  // 4. PHP / WordPress
  {
    category: 'php',
    badge:    { label: 'PHP + MySQL', icon: Code2 },
    title:    'Academic Journal Platform',
    description:
      'Structured editorial and review system with role-based administration for a second academic journal, supporting multiple editors and reviewers.',
    tags:     ['PHP', 'MySQL', 'WordPress'],
    link:     'https://plasujhs.com.ng/',
    gradient: 'from-sky-600 to-indigo-500',
    accent:   'border-sky-500/40',
    glow:     'rgba(14,165,233,0.12)',
    features: ['Editorial System', 'Role-based Admin', 'Review Management'],
  },
  // 5. React / AI
  {
    category: 'ai',
    badge:    { label: 'AI + CBT', icon: Bot },
    title:    'TalentDev — Online Exams & CBT Platform',
    description:
      'AI-assisted CBT, online exams, assessment, and awarding platform for learners and training organisations. Includes exam workflows, result management, and AI assessment guidance via DeepSeek and Gemini APIs. Built using Cloudflare Workers, Redis, and Paystack.',
    tags:     ['React', 'Next.js', 'Tailwind CSS', 'AI', 'DeepSeek API', 'Gemini API', 'Supabase', 'Cloudflare', 'Redis', 'Paystack'],
    link:     'https://www.talentdev.online/',
    gradient: 'from-emerald-600 via-teal-500 to-cyan-500',
    accent:   'border-emerald-500/40',
    glow:     'rgba(16,185,129,0.15)',
    features: ['CBT exam engine', 'Result & award management', 'Admin dashboard'],
    liveNote: true,
  },
  // 6. PHP / Laravel
  {
    category: 'php',
    badge:    { label: 'Education', icon: Globe },
    title:    'Educational Institution Website',
    description:
      'Dynamic educational website built with Laravel PHP, featuring structured content pages and AI-assisted features powered by DeepSeek. Includes comprehensive fee payment integrations using Monnify, Paystack, and Remita, deployed with Cloudflare.',
    tags:     ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'Monnify', 'Paystack', 'Remita', 'DeepSeek API', 'Cloudflare'],
    link:     'https://fcahptvom.sch.ng/',
    gradient: 'from-purple-600 to-pink-500',
    accent:   'border-purple-500/40',
    glow:     'rgba(168,85,247,0.12)',
    features: ['Structured Pages', 'Easy Navigation', 'Laravel Backend'],
  },
  // 7. React / Portfolio
  {
    category: 'ai',
    badge:    { label: 'Portfolio', icon: Sparkles },
    title:    'This Portfolio — Steps Plus',
    description:
      'Responsive developer portfolio showcasing web projects, skills, and technical capability. Built with React, Tailwind CSS, and Framer Motion, deployed on Vercel.',
    tags:     ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    link:     'https://steps-plus.vercel.app/',
    gradient: 'from-rose-500 to-orange-500',
    accent:   'border-rose-500/40',
    glow:     'rgba(244,63,94,0.12)',
    features: ['Responsive Design', 'Framer Motion', 'Vercel Deploy'],
  },
  // 8. PHP / MySQL
  {
    category: 'php',
    badge:    { label: 'Finance System', icon: Globe },
    title:    'Cooperative Finance Platform',
    description:
      'Loan and savings management system with member records, financial transactions, and reporting dashboards for a cooperative society, featuring secure Remita payment integration.',
    tags:     ['PHP', 'MySQL', 'Tailwind CSS', 'Remita'],
    link:     'https://ictls.com.ng/',
    gradient: 'from-green-600 to-emerald-500',
    accent:   'border-green-500/40',
    glow:     'rgba(34,197,94,0.12)',
    features: ['Member Records', 'Loan Management', 'Financial Reports'],
  },
  // 9. PHP / Bootstrap
  {
    category: 'php',
    badge:    { label: 'PHP + Bootstrap', icon: Code2 },
    title:    'PlasuJalis — Journal Publishing Platform',
    description:
      'Journal publishing website for academic and literary studies. Built with PHP and Bootstrap, featuring manuscript submission, peer review workflows, and editorial management.',
    tags:     ['PHP', 'Bootstrap', 'MySQL'],
    link:     'https://plasujalis.com/',
    gradient: 'from-amber-600 to-orange-500',
    accent:   'border-amber-500/40',
    glow:     'rgba(245,158,11,0.12)',
    features: ['Journal Publishing', 'Peer Review', 'Editorial Management'],
  },
];

const FILTERS = [
  { id: 'all', label: 'All Projects',    icon: Globe },
  { id: 'ai',  label: 'AI & React',      icon: Bot },
  { id: 'php', label: 'PHP & WordPress', icon: Code2 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden:   { opacity: 0, y: 24, scale: 0.97 },
  visible:  { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const visible = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background orb removed for flat design */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────── */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <span className="code-pill mb-4 inline-block">featured_work.jsx</span>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            What I've Shipped
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">
            From AI-powered React apps to robust PHP platforms — real projects, real impact.
          </p>
        </motion.div>

        {/* ── Filter tabs ─────────────────────────────────── */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {FILTERS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                filter === id
                  ? 'bg-primary-500/20 border-primary-500/50 text-primary-300'
                  : 'bg-gray-100 dark:bg-dark-800/40 border-gray-200 dark:border-white/8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20'
              }`}
            >
              <Icon size={14} />
              {label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  filter === id ? 'bg-primary-500/30 text-primary-200' : 'bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-500'
                }`}
              >
                {id === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.category === id).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* ── AI projects notice ──────────────────────────── */}
        <AnimatePresence>
          {(filter === 'all' || filter === 'ai') && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 overflow-hidden"
            >
              <div className="flex items-start gap-3 p-4 rounded-xl border border-violet-500/20 bg-violet-500/5">
                <Info size={16} className="text-violet-400 mt-0.5 flex-shrink-0" />
                <p className="text-violet-300/80 text-sm leading-relaxed">
                  <span className="font-semibold text-violet-300">Live demo note:</span>{' '}
                  Some database-backed features may be temporarily unavailable where Supabase pauses inactive projects.
                  The React/Next.js interfaces and AI integrations remain part of the live project architecture.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Projects grid ───────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {visible.map((project, index) => {
              const BadgeIcon = project.badge.icon;
              return (
                <motion.article
                  key={project.title}
                  variants={itemVariants}
                  className="group relative flex flex-col glass-card border border-gray-200 dark:border-white/5 overflow-hidden card-glow"
                  style={{ '--glow-color': project.glow }}
                >
                  {/* ── Top bar ─── */}
                  <div
                    className="h-1.5 w-full bg-primary-500"
                  />

                  {/* ── Card header ─────── */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-3">
                      {/* Category badge */}
                      <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-500 bg-gray-100 dark:bg-dark-800/60 border border-gray-200 dark:border-white/6 px-2.5 py-1 rounded-md">
                        <BadgeIcon size={11} />
                        {project.badge.label}
                      </span>

                      {/* Live indicator */}
                      {project.link && (
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[11px] text-emerald-500 font-medium">Live</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Key features */}
                    <ul className="space-y-1 mb-5">
                      {project.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary-400" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${getTagClass(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── Card footer CTA ─── */}
                  <div className="mt-auto px-6 pb-6 pt-2 border-t border-gray-200 dark:border-white/5">
                    {project.link ? (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary-600 hover:bg-primary-500 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={14} />
                        Visit Live Site
                      </motion.a>
                    ) : (
                      <div className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm text-gray-600 border border-gray-200 dark:border-white/6">
                        Private Project
                      </div>
                    )}
                  </div>

                  {/* Hover glow removed for flat design */}
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
