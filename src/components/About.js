import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Target } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Code, label: 'Clean Code', desc: 'Well-structured, maintainable code' },
    { icon: Zap, label: 'Performance', desc: 'Optimized for speed and efficiency' },
    { icon: Users, label: 'Collaboration', desc: 'Team player with strong communication' },
    { icon: Target, label: 'Problem Solving', desc: 'Creative solutions to complex challenges' }
  ];

  return (
    <motion.section
      id="about"
      className="py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed mb-6 text-gray-300 text-justify">
            I'm a passionate <span className="text-blue-400 font-semibold">full-stack developer</span> with deep expertise in both frontend and server-side development. I have extensive experience building and maintaining LAMP-stack applications using <span className="font-semibold">PHP</span> and <span className="font-semibold">MySQL</span>, alongside modern frontend frameworks.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-300 text-justify">
            My journey in tech has been driven by curiosity and a desire to solve real-world problems. I specialize in <span className="text-blue-400 font-semibold">React</span> for the frontend and <span className="text-blue-400 font-semibold">PHP</span> (including frameworks like <span className="text-blue-400 font-semibold">Laravel</span>) for backend services, building reliable, secure, and performant web applications.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 text-justify">
            When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
            or sharing knowledge with the developer community.
          </p>
        </motion.div>

        {/* Right - Image + Highlights */}
        <motion.div className="grid grid-cols-1 gap-4 items-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
              alt="developer working"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-gray-800 hover:border-primary-500 transition-all duration-300 cursor-pointer"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold mb-2 text-white">{item.label}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            );
          })}
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {[
          { value: '5+', label: 'Years Experience' },
          { value: '50+', label: 'Projects Completed' },
          { value: '30+', label: 'Happy Clients' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-4xl font-bold text-blue-400 mb-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            >
              {stat.value}
            </motion.div>
            <p className="text-gray-400 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
