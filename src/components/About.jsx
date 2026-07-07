import { motion } from "framer-motion"
import { FiMail, FiPhone, FiMapPin, FiExternalLink } from "react-icons/fi"

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            OLAITAN ASHAOLU
          </h1>
          <h2 className="text-2xl md:text-3xl text-violet-400 font-semibold mb-6">
            WordPress Developer | PHP Web Administrator | Remote CMS Support
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-violet-400" />
              <span>Nigeria (Remote)</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-violet-400" />
              <span>07035858977</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-violet-400" />
              <span>ashaoluolaitan@gmail.com</span>
            </div>
          </div>
          <a
            href="https://steps-plus.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            <FiExternalLink />
            Portfolio: steps-plus.vercel.app
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray- 800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Professional Summary</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            WordPress-focused web developer and PHP web administrator with experience building, updating, and managing websites, content platforms, admin dashboards, journal systems, educational websites, and cooperative finance systems. Skilled in PHP, MySQL, HTML5, CSS3, JavaScript, Tailwind CSS, secure form handling, cPanel hosting, content publishing, and remote website support. Strong Computer Science background with MSc Software Engineering currently in view.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
