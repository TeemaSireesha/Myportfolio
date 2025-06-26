import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "SQL", level: 90 }
      ],
      additional: "Also: R, Java, C",
      libraries: "Pandas, NumPy, Matplotlib, Scikit-learn, Sklearn, Seaborn, GraphViz"
    },
    {
      title: "Data Science & Analytics",
      icon: "fas fa-chart-bar",
      items: [
        "Data Cleaning & Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Feature Engineering", 
        "Time Series Analysis",
        "Model Evaluation Metrics"
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: "fas fa-brain",
      items: [
        "Supervised & Unsupervised Learning",
        "Regression & Classification", 
        "Decision Trees & Random Forest",
        "Clustering (KMeans, KNN)",
        "AdaBoost & Hierarchical Clustering"
      ]
    },
    {
      title: "Full-Stack Development",
      icon: "fas fa-laptop-code",
      frontend: ["HTML5 / CSS3", "JavaScript", "ReactJS"],
      backend: ["Node.js", "Express.js", "RESTful APIs"],
      deployment: "Netlify, Git/GitHub"
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      sql: "MySQL, Joins, Subqueries, Indexing",
      nosql: "MongoDB, Document Stores"
    },
    {
      title: "Tools & Platforms", 
      icon: "fas fa-tools",
      development: "Jupyter Notebooks, VS Code, Google Colab",
      visualization: "Power BI, Matplotlib, Seaborn",
      competitive: "LeetCode, CodeChef",
      dsa: "Arrays, Strings, Trees, Graphs"
    }
  ];

  const softSkills = [
    { name: "Agile/Scrum", icon: "fas fa-users" },
    { name: "Effective Communication", icon: "fas fa-comments" },
    { name: "Team Collaboration", icon: "fas fa-handshake" }
  ];

  return (
    <section id="skills" className="py-20 luxury-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-[var(--luxury-gold)]">Skills</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive expertise across data science, machine learning, and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient backdrop-blur-sm rounded-xl p-6 border border-[var(--luxury-gold)]/20 hover:border-[var(--luxury-gold)]/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <i className={`${category.icon} text-[var(--luxury-gold)] text-2xl mr-3`}></i>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Programming Languages with progress bars */}
              {category.skills && (
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-[var(--luxury-gold)]">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                          className="gold-gradient h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                  {category.additional && (
                    <div className="text-sm text-gray-400 mt-3">{category.additional}</div>
                  )}
                  {category.libraries && (
                    <div className="mt-4 text-sm text-gray-400">
                      <strong>Libraries:</strong> {category.libraries}
                    </div>
                  )}
                </div>
              )}

              {/* List items for other categories */}
              {category.items && (
                <ul className="space-y-2 text-sm">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <i className="fas fa-check text-[var(--luxury-gold)] mr-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Full-Stack Development structure */}
              {category.frontend && (
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-[var(--luxury-gold)]">Frontend:</strong>
                    <ul className="mt-1 space-y-1">
                      {category.frontend.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong className="text-[var(--luxury-gold)]">Backend:</strong>
                    <ul className="mt-1 space-y-1">
                      {category.backend.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {category.deployment && (
                <div className="mt-4 text-sm text-gray-400">
                  <strong>Deployment:</strong> {category.deployment}
                </div>
              )}

              {/* Database structure */}
              {category.sql && (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <i className="fas fa-table text-[var(--luxury-gold)] mr-2"></i>
                      <strong className="text-sm">SQL Databases</strong>
                    </div>
                    <p className="text-sm text-gray-400">{category.sql}</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <i className="fas fa-file-alt text-[var(--luxury-gold)] mr-2"></i>
                      <strong className="text-sm">NoSQL Databases</strong>
                    </div>
                    <p className="text-sm text-gray-400">{category.nosql}</p>
                  </div>
                </div>
              )}

              {/* Tools structure */}
              {category.development && (
                <div className="space-y-3">
                  <div>
                    <strong className="text-[var(--luxury-gold)]">Development:</strong>
                    <p className="text-sm text-gray-400">{category.development}</p>
                  </div>
                  <div>
                    <strong className="text-[var(--luxury-gold)]">Visualization:</strong>
                    <p className="text-sm text-gray-400">{category.visualization}</p>
                  </div>
                  <div>
                    <strong className="text-[var(--luxury-gold)]">Competitive Programming:</strong>
                    <p className="text-sm text-gray-400">{category.competitive}</p>
                  </div>
                  <div>
                    <strong className="text-[var(--luxury-gold)]">DSA:</strong>
                    <p className="text-sm text-gray-400">{category.dsa}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-[var(--luxury-gold)]">Soft Skills & Teamwork</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-gradient backdrop-blur-sm px-6 py-3 rounded-full border border-[var(--luxury-gold)]/20 hover:border-[var(--luxury-gold)]/40 transition-all duration-300"
              >
                <i className={`${skill.icon} mr-2 text-[var(--luxury-gold)]`}></i>
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
