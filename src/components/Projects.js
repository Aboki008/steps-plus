import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'IJSAR - Innovative Justice Solutions',
      description: 'A professional platform showcasing innovative justice and legal solutions with modern web design and seamless user experience.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      gradient: 'from-blue-500 to-cyan-500',
      link: 'https://ijsar.org/',
      github: '#'
    },
    {
      title: 'Plasulj - Premium Plastic Solutions',
      description: 'E-commerce platform for premium plastic products with product catalog, pricing, and customer inquiry features. Built for modern commerce.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://plasulj.com.ng/',
      github: '#'
    },
    {
      title: 'PlasuJalis - Fashion & Lifestyle',
      description: 'Elegant lifestyle and fashion platform featuring curated collections, product showcase, and premium user interface design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      gradient: 'from-green-500 to-emerald-500',
      link: 'https://plasujalis.com/',
      github: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg">
          Exploring innovative solutions and pushing the boundaries of web development
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl"
            whileHover={{ y: -8 }}
          >
            {/* Screenshot (live site) with gradient overlay on hover */}
            <div className="relative h-40 overflow-hidden bg-gray-800">
              <img
                src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.link)}?w=1200`}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3 text-justify">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => {
                  // Assign a color scheme per language
                  let colorClass = '';
                  switch (tag) {
                    case 'HTML':
                      colorClass = 'bg-orange-100 text-orange-700 border-orange-300';
                      break;
                    case 'CSS':
                      colorClass = 'bg-blue-100 text-blue-700 border-blue-300';
                      break;
                    case 'JavaScript':
                      colorClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
                      break;
                    case 'PHP':
                      colorClass = 'bg-purple-100 text-purple-700 border-purple-300';
                      break;
                    case 'MySQL':
                      colorClass = 'bg-cyan-100 text-cyan-700 border-cyan-300';
                      break;
                    default:
                      colorClass = 'bg-gray-200 text-gray-700 border-gray-300';
                  }
                  return (
                    <span
                      key={i}
                      className={`text-xs font-medium px-3 py-1 rounded-full border ${colorClass}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-gray-800">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  Visit Live
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 border border-gray-700 hover:border-blue-500 text-gray-400 hover:text-blue-400 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  Details
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
