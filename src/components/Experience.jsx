import { motion } from "framer-motion"

const Experience = () => {
  const experiences = [
    {
      title: "WordPress Developer / Website Content Support",
      company: "Menokraft Services",
      location: "Remote",
      period: "2026",
      responsibilities: [
        "Worked with Menokraft Services on website/content support, page structuring, and digital service presentation.",
        "Supported online content for recruitment, outsourcing, corporate training, project management, and HR business solutions."
      ]
    },
    {
      title: "WordPress Developer / PHP Web Administrator",
      company: "Self-Employed / Project-Based",
      location: "Remote",
      period: "2018 - Present",
      responsibilities: [
        "Built and maintained websites and web systems for academic, educational, portfolio, and finance-related use cases.",
        "Developed PHP/MySQL platforms with secure forms, user sessions, admin roles, file workflows, and reporting features.",
        "Managed website content updates, page structure, basic WordPress administration, and digital publishing tasks.",
        "Designed responsive interfaces with HTML5, CSS3, JavaScript, and Tailwind CSS to improve usability across devices.",
        "Deployed and monitored websites through cPanel, Vercel, and Git-based workflows.",
        "Improved platform reliability by simplifying upload processes, validation steps, and dashboard workflows."
      ]
    },
    {
      title: "Digital Assistant / Website Content Support",
      company: "Freelance Support Role",
      location: "Remote",
      period: "2025 - Present",
      responsibilities: [
        "Updated website content, organized digital files, and improved online page structure for better readability.",
        "Supported online research, documentation, email communication, outreach, and content development tasks.",
        "Used AI tools and productivity platforms to speed up research, content assistance, and task delivery."
      ]
    }
  ]

  return (
    <section id="experience" className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700 hover:border-violet-500 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-violet-400 font-semibold text-lg">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-400">{exp.location}</p>
                  <p className="text-gray-500">{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li
                    key={respIndex}
                    className="text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-violet-500 mt-1">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
