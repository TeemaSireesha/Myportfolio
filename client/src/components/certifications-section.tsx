import { motion } from "framer-motion";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "IBM/Coursera",
      date: "2024",
      icon: "fab fa-python",
      description: "Advanced Python programming for data analysis and visualization"
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Stanford University",
      date: "2024",
      icon: "fas fa-brain",
      description: "Comprehensive understanding of ML algorithms and applications"
    },
    {
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2023",
      icon: "fas fa-code",
      description: "End-to-end web development with modern frameworks"
    },
    {
      title: "Data Visualization with Power BI",
      issuer: "Microsoft",
      date: "2023",
      icon: "fas fa-chart-bar",
      description: "Creating interactive dashboards and business intelligence reports"
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Achieved Dean's List recognition for academic excellence in Data Science",
      icon: "fas fa-trophy",
      year: "2023-2024"
    },
    {
      title: "Hackathon Winner",
      description: "First place in university-level Data Science hackathon",
      icon: "fas fa-medal",
      year: "2024"
    },
    {
      title: "Research Paper Publication",
      description: "Co-authored research paper on machine learning applications",
      icon: "fas fa-scroll",
      year: "2024"
    },
    {
      title: "Coding Competition",
      description: "Top 10 finish in national level coding competition",
      icon: "fas fa-code",
      year: "2023"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-[var(--luxury-gold)]">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and notable achievements in data science and technology
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center text-[var(--luxury-gold)]"
          >
            Professional Certifications
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-gradient backdrop-blur-sm rounded-xl p-6 border border-[var(--luxury-gold)]/20 hover:border-[var(--luxury-gold)]/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--luxury-gold)]/20 p-3 rounded-full">
                    <i className={`${cert.icon} text-[var(--luxury-gold)] text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                    <p className="text-[var(--luxury-gold)] text-sm font-medium mb-1">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center text-[var(--luxury-gold)]"
          >
            Notable Achievements
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-gradient backdrop-blur-sm rounded-xl p-6 border border-[var(--luxury-gold)]/20 hover:border-[var(--luxury-gold)]/40 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--luxury-gold)]/20 p-3 rounded-full">
                    <i className={`${achievement.icon} text-[var(--luxury-gold)] text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">{achievement.title}</h4>
                      <span className="text-[var(--luxury-gold)] text-sm font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}