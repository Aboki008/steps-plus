import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: 'National Research Institute',
      position: 'Tutor',
      period: '2023 - Present',
      description: 'Delivering lectures, mentoring students, and developing course materials in software engineering and web development (including PHP, MySQL, and server-side best practices).'
    },
    {
      company: 'Tech Company',
      position: 'Senior Developer',
      period: '2020 - 2023',
      description: 'Led development of full-stack applications; worked on modern frontends with React and maintained/modernized backend systems written in PHP and Node.js. Mentored junior engineers and drove API design and database architecture.'
    },
    {
      company: 'StartUp Inc',
      position: 'Full Stack Developer',
      period: '2018 - 2020',
      description: 'Built and maintained production web applications including server-side PHP components, RESTful APIs and MySQL integrations; focused on reliable backend solutions and payment integration.'
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
