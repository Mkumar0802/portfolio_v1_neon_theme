const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Athulya Senior Care Pvt. Ltd.',
      position: 'Senior Executive - Web Developer',
      duration: 'Jul 2022 – Present',
      location: 'Chennai, India',
      type: 'current',
      achievements: [
        'Developed consolidated internal dashboards for HR, finance, and operations',
        'Built user-friendly interfaces using React.js and responsive design',
        'Designed and maintained secure RESTful APIs for system integrations',
        'Created business tools for invoicing, billing, and attendance tracking',
        'Integrated APIs including Zimyo, Sell.do, Actionboard, and Gupshup',
        'Migrated Laravel projects from v5.8 to v11.0',
        'Created WhatsApp chatbot features for customer support',
        'Managed deployment environments on Digital Ocean with Jenkins'
      ]
    },
    {
      company: 'Career Transition & Upskilling',
      position: 'Learning & Professional Development',
      duration: 'May 2021 – Apr 2022',
      location: 'Remote',
      type: 'freelance,transition',
      achievements: [
         'Completed MERN Stack Development Certification from GUVI / IIT Madras',
        'Delivered custom web applications using MERN stack for clients',
        'Deployed fully responsive landing pages and handled full-cycle development',
        'Worked with diverse clients across different industries',
        'Managed project timelines and client communications'
      ]
    },
    {
      company: '6univers Pvt. Ltd.',
      position: 'Web Developer',
      duration: 'Feb 2019 – Jul 2021',
      location: 'Chennai,India',
      type: 'past',
      achievements: [
        'Designed and developed client websites using PHP, MySQL, and WordPress',
        'Maintained hosting environments, configured domains, and managed emails',
        'Implemented change requests and basic security updates',
        'Provided technical support for client systems'
      ]
    },
    {
      company: 'Honeywell',
      position: 'BMS Engineer',
      duration: 'Jul 2017 – Aug 2018',
      location: 'Chennai,India',
      type: 'past',
      achievements: [
        'Monitored and maintained Building Management Systems',
        'Handled power, lighting, fire safety systems',
        'Managed HVAC automation systems',
        'Ensured system reliability and performance'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current': return 'neon-green';
      case 'freelance': return 'neon-blue';
      default: return 'neon-pink';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'current': return 'CURRENT';
      case 'freelance': return 'FREELANCE';
      default: return 'PREVIOUS';
    }
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black neon-text-blue mb-4">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-primary transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 fade-in-${index % 2 === 0 ? 'left' : 'right'} delay-${(index + 1) * 200}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-glow-blue z-10">
                <div className="absolute inset-1 bg-background rounded-full"></div>
              </div>

              {/* Experience Card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} md:w-1/2`}>
                <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/60 transition-all duration-300 relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>

                  <div className="relative z-10">
                    {/* Type Badge */}
                    <div className="mb-4">
                      <span className={`px-3 py-1 text-xs font-display font-bold bg-${getTypeColor(exp.type)}/10 text-${getTypeColor(exp.type)} border border-${getTypeColor(exp.type)}/30 rounded-full`}>
                        {getTypeLabel(exp.type)}
                      </span>
                    </div>

                    {/* Company & Position */}
                    <h3 className="text-xl font-display font-bold neon-text-pink mb-2">
                      {exp.company}
                    </h3>
                    <h4 className="text-lg font-semibold text-accent mb-2">
                      {exp.position}
                    </h4>

                    {/* Duration & Location */}
                    <div className="flex flex-col sm:flex-row sm:justify-between text-muted-foreground text-sm mb-4 font-mono">
                      <span>{exp.duration}</span>
                      <span>{exp.location}</span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground/90">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-secondary/40"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-secondary/40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;