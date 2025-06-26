import { motion } from "framer-motion";

export default function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-[var(--luxury-gold)]">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for data science
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--luxury-gold)]">Personal Details</h3>
            <div className="space-y-4">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex items-center">
                <i className="fas fa-user text-[var(--luxury-gold)] mr-4"></i>
                <span><strong>Name:</strong> Teema Sireesha Poonumalli</span>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex items-center">
                <i className="fas fa-graduation-cap text-[var(--luxury-gold)] mr-4"></i>
                <span><strong>Education:</strong> B.Tech in Data Science</span>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="flex items-center">
                <i className="fas fa-chart-line text-[var(--luxury-gold)] mr-4"></i>
                <span><strong>Specialization:</strong> Data Science & Machine Learning</span>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="flex items-center">
                <i className="fas fa-code text-[var(--luxury-gold)] mr-4"></i>
                <span><strong>Focus:</strong> Full-Stack Development & AI</span>
              </motion.div>
            </div>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="text-gray-300 mt-6 leading-relaxed"
            >
              As a passionate Data Science graduate, I combine technical expertise with creative problem-solving 
              to deliver impactful solutions. My journey spans from data preprocessing to deploying full-stack 
              applications, with a strong foundation in machine learning algorithms and modern web technologies.
            </motion.p>
            
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="mt-6"
            >
              <a
                href="/teema_sireesha_resume.pdf"
                download="Teema_Sireesha_Resume.pdf"
                className="inline-flex items-center text-[var(--luxury-gold)] hover:text-[var(--luxury-gold-light)] transition-colors duration-300"
              >
                <i className="fas fa-file-pdf mr-2"></i>
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
