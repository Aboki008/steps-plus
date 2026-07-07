import { motion } from "framer-motion"

const Education = () => {
  const education = [
    {
      degree: "MSc Software Engineering",
      status: "In View"
    },
    {
      degree: "BSc Computer Science",
      status: "Completed"
    },
    {
      degree: "Computing with Database Applications",
      institution: "Kwara Resource Center",
      year: "2015"
    },
    {
      degree: "Security",
      institution: "Digital Nigeria",
      year: "2020"
    }
  ]

  return (
    <section id="education" className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & Training
          </h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-violet-500 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {edu.degree}
              </h3>
              {edu.institution && (
                <p className="text-violet-400 font-semibold mb-1">
                  {edu.institution}
                </p>
              )}
              <p className="text-gray-400">
                {edu.status || edu.year}
              </p>
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
          <h3 className="text-2xl font-bold text-white mb-4">Additional Information</h3>
          <p className="text-gray-300 leading-relaxed">
            Available for remote WordPress, PHP, CMS, website support, and web administrator roles. References available on request.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
