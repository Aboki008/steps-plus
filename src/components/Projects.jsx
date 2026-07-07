import { motion } from "framer-motion"
import { FiExternalLink } from "react-icons/fi"

const Projects = () => {
  const projects = [
    {
      name: "Journal Publishing Platform",
      url: "https://plasujer.com.ng/",
      description: "Full journal management system with author, reviewer, and admin workflows."
    },
    {
      name: "Academic Journal Platform",
      url: "https://plasujhs.com.ng/",
      description: "Structured editorial and review system with role-based administration."
    },
    {
      name: "Cooperative Finance Platform",
      url: "https://ictls.com.ng/",
      description: "Loan and savings management system with member records, transactions, and financial reports."
    },
    {
      name: "Educational Institution Website",
      url: "https://fcahptvom.sch.ng/",
      description: "Dynamic educational website with structured pages and easy navigation."
    },
    {
      name: "Portfolio Website",
      url: "https://steps-plus.vercel.app/",
      description: "Responsive portfolio showing web projects, skills, and technical capability."
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Selected Web Projects
          </h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-violet-500 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition-colors"
              >
                <FiExternalLink />
                Visit Site
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Key Achievements</h3>
          <ul className="space-y-2">
            <li className="text-gray-300 flex items-start gap-2">
              <span className="text-violet-500 mt-1">•</span>
              Delivered multiple real-world web systems used by organizations and online users.
            </li>
            <li className="text-gray-300 flex items-start gap-2">
              <span className="text-violet-500 mt-1">•</span>
              Created scalable multi-role platforms for admins, reviewers, authors, and members.
            </li>
            <li className="text-gray-300 flex items-start gap-2">
              <span className="text-violet-500 mt-1">•</span>
              Developed a secure cooperative finance platform from scratch using PHP and MySQL.
            </li>
            <li className="text-gray-300 flex items-start gap-2">
              <span className="text-violet-500 mt-1">•</span>
              Combined technical development with content management, research, and documentation support.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
