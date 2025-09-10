const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'neon-blue',
      skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'jQuery', 'CSS3', 'TailwindCSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      color: 'neon-pink',
      skills: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'Python(basic)', 'RESTful APIs']
    },
    {
      title: 'Database',
      color: 'neon-green',
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Query Optimization']
    },
    {
      title: 'Tools & Others',
      color: 'neon-purple',
      skills: ['Git', 'Jenkins', 'Linux', 'Digital Ocean', 'CI/CD', 'WordPress', 'AWS (basic)', 'Cpanel']
    },
    {
      title: 'AI & EMERGING TECH',
      color: 'neon-yellow',
      skills: [
        'Artificial Intelligence (AI)',
        'Large Language Models (LLMs)',
        'Retrieval-Augmented Generation (RAG)'
      ]
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black neon-text-blue mb-4">
            TECHNICAL SKILLS
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`fade-in-up delay-${(index + 1) * 200} relative group`}
            >
              {/* Category Card */}
              <div className="bg-card border border-primary/20 rounded-lg p-6 h-full hover:border-primary/60 transition-all duration-300 relative overflow-hidden">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <h3 className={`text-xl font-display font-bold mb-6 text-center neon-text-${category.color === 'neon-blue' ? 'blue' : category.color === 'neon-pink' ? 'pink' : category.color === 'neon-green' ? 'green' : 'blue'}`}>
                    {category.title.toUpperCase()}
                  </h3>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="flex items-center group/skill"
                        style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover/skill:shadow-glow-green transition-all duration-300"></div>
                        <span className="text-foreground group-hover/skill:text-accent transition-colors duration-300 font-mono">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/40"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/40"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary/40"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/40"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-display font-bold neon-text-green mb-8">
            CORE TECHNOLOGIES
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['MERN Stack', 'Laravel', 'TailwindCSS', 'Digital Ocean', 'Jenkins CI/CD', 'WhatsApp API & Chatbot Integrations', 'Third-party Integrations', 'AI/LLMs, RAG'].map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 bg-muted/20 border border-accent/30 rounded-lg font-mono text-sm hover:border-accent hover:bg-accent/10 transition-all duration-300 cursor-default fade-in delay-${(index + 1) * 100}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;