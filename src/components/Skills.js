// components/Skills.jsx
import React from 'react';
import reactIcon from '../assets/skill-icons/react.svg';
import nextjsIcon from '../assets/skill-icons/nextjs.svg';
import typescriptIcon from '../assets/skill-icons/typescript.svg';
import tailwindIcon from '../assets/skill-icons/tailwind.svg';
import htmlIcon from '../assets/skill-icons/html.svg';
import phpIcon from '../assets/skill-icons/php.svg';
import laravelIcon from '../assets/skill-icons/laravel.svg';
import mysqlIcon from '../assets/skill-icons/mysql.svg';
import nodejsIcon from '../assets/skill-icons/nodejs.svg';
import gitIcon from '../assets/skill-icons/git.svg';
import dockerIcon from '../assets/skill-icons/docker.svg';
import awsIcon from '../assets/skill-icons/aws.svg';
import aiIcon from '../assets/skill-icons/ai.svg';
import vscodeIcon from '../assets/skill-icons/vscode.svg';
import cursorIcon from '../assets/skill-icons/cursor.svg';
import windsurfIcon from '../assets/skill-icons/windsurf.svg';
import figmaIcon from '../assets/skill-icons/figma.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
  { name: "React", level: 95, icon: reactIcon },
  { name: "Next.js", level: 90, icon: nextjsIcon },
  { name: "TypeScript", level: 88, icon: typescriptIcon },
  { name: "Tailwind CSS", level: 92, icon: tailwindIcon },
  { name: "HTML/CSS", level: 98, icon: htmlIcon },
      ]
    },
    {
      title: "Backend",
      skills: [
  { name: "PHP", level: 92, icon: phpIcon },
  { name: "Laravel", level: 88, icon: laravelIcon },
  { name: "MySQL", level: 90, icon: mysqlIcon },
  { name: "Node.js", level: 82, icon: nodejsIcon },
  { name: "REST APIs", level: 90, icon: "🔗" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
  { name: "Git", level: 90, icon: gitIcon },
  { name: "Docker", level: 75, icon: dockerIcon },
  { name: "AWS", level: 70, icon: awsIcon },
  { name: "Figma", level: 85, icon: figmaIcon },
  { name: "AI", level: 80, icon: aiIcon },
  { name: "VSCode", level: 95, icon: vscodeIcon },
  { name: "Cursor", level: 70, icon: cursorIcon },
  { name: "WindSurf", level: 60, icon: windsurfIcon },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-primary-500">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive skill set honed through years of building production-ready applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-dark-800/50 backdrop-blur-lg rounded-2xl p-6 border border-dark-700 hover:border-primary-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-primary-400">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.3 + skillIndex * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {typeof skill.icon === 'string' && skill.icon.endsWith('.svg') ? (
                            <img src={skill.icon} alt={skill.name + ' icon'} className="w-6 h-6" />
                          ) : (
                            <span className="text-lg">{skill.icon}</span>
                          )}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-primary-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-dark-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.3 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-300 group-hover:from-primary-400 group-hover:to-primary-200 transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Redux', 'Zustand', 'React Query', 'Jest', 'Cypress',
                'GraphQL', 'Prisma', 'MongoDB', 'PostgreSQL', 'Redis',
                'Vercel', 'Netlify', 'CI/CD', 'Webpack', 'Vite'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#0ea5e9' }}
                  className="px-4 py-2 bg-dark-800 rounded-full text-sm font-medium border border-dark-700 hover:border-primary-500/50 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;