// components/Experience.jsx — Premium timeline redesign
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company:    'Polytechnics & Colleges in Nigeria',
    position:   'Software Engineering Tutor & Mentor',
    period:     '2021 – Present',
    location:   'Nigeria',
    type:       'Education',
    description:
      'Tutor and mentor students in software engineering, web development, and programming fundamentals. Guide students through practical projects, code reviews, and career preparation in the tech industry.',
    skills:     ['Teaching', 'Mentoring', 'Software Engineering', 'Web Development'],
    color:      'text-amber-400',
    dot:        '#f59e0b',
  },
  {
    company:    'Self-Employed / Project-Based',
    position:   'Full Stack Developer / PHP Web Administrator',
    period:     '2018 – Present',
    location:   'Nigeria (Remote)',
    type:       'Self-Employed',
    description:
      'Built and maintained websites and web systems for academic, educational, portfolio, and finance use cases. Developed backend systems with secure forms, user sessions, admin roles, API integrations, and reporting features.',
    skills:     ['PHP', 'Laravel', 'Next.js', 'MySQL', 'WordPress', 'Tailwind CSS'],
    color:      'text-emerald-400',
    dot:        '#10b981',
  },
  {
    company:    'Menokraft Services',
    position:   'WordPress Developer / Website Content Support',
    period:     '2026',
    location:   'Remote',
    type:       'Contract',
    description:
      'Worked on website/content support, page structuring, and digital service presentation. Supported online content for recruitment, outsourcing, corporate training, project management, and HR business solutions.',
    skills:     ['WordPress', 'Content Strategy', 'Page Structuring', 'Digital Services'],
    color:      'text-blue-400',
    dot:        '#38bdf8',
  },
  {
    company:    'Freelance Support Role',
    position:   'Digital Assistant / Website Content Support',
    period:     '2025 – Present',
    location:   'Remote',
    type:       'Freelance',
    description:
      'Updated website content, organised digital files, and improved online page structure for better readability. Used AI tools and productivity platforms to speed up research, content assistance, and task delivery.',
    skills:     ['AI Tools', 'Content Development', 'Research', 'Email Outreach'],
    color:      'text-purple-400',
    dot:        '#a78bfa',
  },
];

const education = [
  {
    degree:    'MSc Software Engineering',
    note:      'In progress — advanced software design, architecture, and research methodologies.',
    icon:      '🎓',
  },
  {
    degree:    'BSc Computer Science',
    note:      'Algorithms, data structures, databases, and core computer science principles.',
    icon:      '🏛️',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
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
          <span className="code-pill mb-4 inline-block">experience.json</span>
          <h2 className="section-heading text-white">
            Career Journey
          </h2>
        </motion.div>

        {/* ── Experience timeline ─────────────────────────────── */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-primary-500/20 hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative sm:pl-16"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-dark-950 hidden sm:block"
                  style={{ background: exp.dot }}
                />

                {/* Card */}
                <div className="glass-card border border-white/5 p-6 glass-card-hover">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-gray-500" />
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${exp.color}`}
                        >
                          {exp.company}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-dark-700 text-gray-500 border border-white/8">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg leading-snug">{exp.position}</h3>
                    </div>

                    <div className="flex flex-col items-end gap-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map(s => (
                      <span key={s} className="code-pill">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Education ───────────────────────────────────────── */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={22} className="text-primary-400" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="glass-card border border-white/5 p-6 glass-card-hover flex items-start gap-4"
              >
                <span className="text-3xl mt-0.5">{edu.icon}</span>
                <div>
                  <p className="text-white font-semibold mb-1">{edu.degree}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{edu.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
