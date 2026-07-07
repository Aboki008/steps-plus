import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: 'Menokraft Services',
      position: 'WordPress Developer / Website Content Support',
      period: '2026',
      description: 'Worked with Menokraft Services on website/content support, page structuring, and digital service presentation. Supported online content for recruitment, outsourcing, corporate training, project management, and HR business solutions.'
    },
    {
      company: 'Self-Employed / Project-Based',
      position: 'WordPress Developer / PHP Web Administrator',
      period: '2018 - Present',
      description: 'Built and maintained websites and web systems for academic, educational, portfolio, and finance-related use cases. Developed PHP/MySQL platforms with secure forms, user sessions, admin roles, file workflows, and reporting features. Managed website content updates, page structure, basic WordPress administration, and digital publishing tasks.'
    },
    {
      company: 'Freelance Support Role',
      position: 'Digital Assistant / Website Content Support',
      period: '2025 - Present',
      description: 'Updated website content, organized digital files, and improved online page structure for better readability. Supported online research, documentation, email communication, outreach, and content development tasks. Used AI tools and productivity platforms to speed up research, content assistance, and task delivery.'
    }
  ];

  return (
    <motion.section
      id="experience"
      className="py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="border-l-4 border-blue-500 pl-6 py-4"
            whileHover={{ x: 10 }}
          >
            <h3 className="text-2xl font-bold">{exp.position}</h3>
            <p className="text-blue-500 font-semibold">{exp.company}</p>
            <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
            <p className="text-gray-300 text-justify">{exp.description}</p>
          </motion.div>
        ))}
        
          {/* Education */}
          <motion.div className="mt-8 pt-6 border-t border-gray-800" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h3 className="text-3xl font-bold mb-4">Education</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-neutral-800 rounded-lg">
                <p className="font-semibold">MSc Software Engineering</p>
                <p className="text-sm text-gray-400 text-justify">Postgraduate degree focused on advanced software design, architecture, and research methodologies.</p>
              </div>
              <div className="p-4 bg-neutral-800 rounded-lg">
                <p className="font-semibold">BSc Computer Science</p>
                <p className="text-sm text-gray-400 text-justify">Undergraduate degree covering algorithms, data structures, and core computer science principles.</p>
              </div>
            </div>
          </motion.div>
      </div>
    </motion.section>
  );
}
