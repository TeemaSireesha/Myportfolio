import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Professional Data Science Portfolio",
      description: "Built a comprehensive portfolio website showcasing data science expertise and full-stack development skills. Features responsive design, modern animations, and professional presentation of technical capabilities.",
      image: "/ProjectImg.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demoLink: window.location.href,
      githubLink: "https://github.com/TeemaSireesha/Myportfolio"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-[var(--luxury-gold)]">Project</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcase of my data science and full-stack development expertise
          </p>
        </motion.div>

        <div className="flex justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient backdrop-blur-sm rounded-xl overflow-hidden border border-[var(--luxury-gold)]/20 hover:transform hover:scale-105 hover:border-[var(--luxury-gold)]/40 transition-all duration-300 max-w-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[var(--luxury-gold)]/20 text-[var(--luxury-gold)] px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    className="text-[var(--luxury-gold)] hover:underline flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-[var(--luxury-gold)] hover:underline flex items-center"
                  >
                    <i className="fab fa-github mr-1"></i>GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
