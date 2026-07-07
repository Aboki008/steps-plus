import { motion } from "framer-motion"

const Skills = () => {
  const skillCategories = [
    {
      title: "WordPress & CMS",
      skills: [
        "WordPress content updates",
        "Website management",
        "Page structuring",
        "Content publishing",
        "Basic website monitoring"
      ]
    },
    {
      title: "Web Development",
      skills: [
        "PHP",
        "MySQL",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Responsive UI design"
      ]
    },
    {
      title: "Backend & Security",
      skills: [
        "Secure form handling",
        "User sessions",
        "Input validation",
        "CSRF protection",
        "Error handling",
        "Debugging",
        "PHPMailer"
      ]
    },
    {
      title: "Admin Dashboards",
      skills: [
        "Role-based dashboards",
        "Analytics",
        "Filtering",
        "Reporting",
        "File workflows",
        "Record management"
      ]
    },
    {
      title: "Deployment & Tools",
      skills: [
        "cPanel",
        "Vercel",
        "Git",
        "Google Workspace",
        "Microsoft Office",
        "Canva",
        "CapCut",
        "ChatGPT",
        "Claude",
        "Gemini"
      ]
    },
    {
      title: "Work Style",
      skills: [
        "Remote communication",
        "Documentation",
        "Online research",
        "Attention to detail",
        "Fast learning",
        "Problem solving"
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Core Skills
          </h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-violet-500 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-violet-400 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-violet-500 mt-1">•</span>
                    {skill}
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

export default Skills
