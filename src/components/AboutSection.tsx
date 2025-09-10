const AboutSection = () => {
  const stats = [
    { number: '4+', label: 'Years Mern-stack Experience', color: 'neon-blue' },
    { number: '6+', label: 'Overall Experience', color: 'neon-pink' },
    { number: '8+', label: 'Technologies', color: 'neon-green' },
    { number: '100%', label: 'PASSIONATE FULL-STACK DEVELOPER', color: 'neon-purple' }
  ];

  const education = [
    {
      degree: 'BE in Electrical & Electronics Engineering',
      institution: 'Mookambigai Engineering College',
      year: '2014 – 2017',
      type: 'degree'
    },
    {
      degree: 'MERN Stack Development Certification',
      institution: 'GUVI / IIT Madras (via Geek Network Pvt. Ltd.)',
      year: '2021 – 2022',
      type: 'certification'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black neon-text-blue mb-4">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="fade-in-left">
            <h3 className="text-2xl font-display font-bold neon-text-pink mb-6">
              PASSIONATE FULL-STACK DEVELOPER
            </h3>
            
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                I'm a result-oriented MERN Stack Developer with over 4 years of experience in building 
                scalable web applications and dynamic user interfaces. My expertise spans across the 
                entire development stack, from crafting pixel-perfect frontends to architecting robust backend systems.
              </p>
              
              <p>
                My journey in web development has been driven by a passion for creating exceptional 
                digital experiences. I specialize in React.js, Node.js, Laravel, and modern technologies, 
                with a proven track record in full-stack development, third-party API integrations, 
                and Linux-based deployments.
              </p>
              
              <p>
                Beyond coding, I bring strong communication and team leadership skills to every project. 
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                industry trends and best practices.
              </p>
            </div>
            
            {/* Key Strengths */}
            <div className="mt-8">
              <h4 className="font-display font-bold neon-text-green mb-4">KEY STRENGTHS</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Full-Stack Development',
                  'API Integration',
                  'Database Design',
                  'System Architecture',
                  'Performance Optimization',
                  'Team Leadership',
                  'Problem Solving',
                  'Agile Methodologies'
                ].map((strength, index) => (
                  <div key={strength} className={`flex items-center gap-2 fade-in delay-${(index + 1) * 100}`}>
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span className="font-mono text-sm">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Stats & Education */}
          <div className="fade-in-right">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`bg-card border border-primary/20 rounded-lg p-6 text-center hover:border-primary/60 transition-all duration-300 fade-in-up delay-${(index + 1) * 100}`}
                >
                  <div className={`text-3xl font-display font-black neon-text-${stat.color === 'neon-blue' ? 'blue' : stat.color === 'neon-pink' ? 'pink' : stat.color === 'neon-green' ? 'green' : 'blue'} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-mono text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Education */}
            <div>
              <h4 className="font-display font-bold neon-text-green mb-6">EDUCATION</h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className={`bg-card border border-primary/20 rounded-lg p-4 hover:border-primary/60 transition-all duration-300 fade-in-up delay-${(index + 3) * 200}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-1">
                        {edu.type === 'degree' ? '🎓' : '📜'}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-display font-bold text-accent mb-1">
                          {edu.degree}
                        </h5>
                        <p className="text-muted-foreground text-sm mb-1">
                          {edu.institution}
                        </p>
                        <p className="font-mono text-xs text-muted-foreground">
                          {edu.year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Languages */}
            <div className="mt-8">
              <h4 className="font-display font-bold neon-text-green mb-4">LANGUAGES</h4>
              <div className="flex gap-4">
                <div className="bg-card border border-primary/20 rounded-lg p-3 flex-1 text-center">
                  <div className="text-lg mb-1">🇮🇳</div>
                  <div className="font-mono text-sm">Tamil - Native</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-lg p-3 flex-1 text-center">
                  <div className="text-lg mb-1">🇬🇧</div>
                  <div className="font-mono text-sm">English - Fluent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;