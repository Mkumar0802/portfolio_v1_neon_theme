const ContactSection = () => {
  const contactMethods = [
    {
      icon: '📞',
      label: 'Phone',
      value: '+91 9566420177',
      color: 'neon-blue',
      action: 'tel:+919566420177'
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'mkumar0802@gmail.com',
      color: 'neon-pink',
      action: 'mailto:mkumar0802@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/muthu-kumar',
      color: 'neon-green',
      action: '#'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/mkumar0802',
      color: 'neon-purple',
      action: '#'
    }
  ];

  const quickLinks = [
    { label: 'Download Resume', icon: '📄', color: 'primary' },
    { label: 'View Portfolio', icon: '🌐', color: 'secondary' },
    { label: 'Schedule Meeting', icon: '📅', color: 'accent' }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black neon-text-blue mb-4">
            LET'S CONNECT
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to build something amazing together? Let's discuss your next project.
          </p>
        </div>
        
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.action}
              className={`block bg-card border border-primary/20 rounded-lg p-6 text-center hover:border-${contact.color}/60 transition-all duration-300 group fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>
              <h3 className={`font-display font-bold text-${contact.color} mb-2`}>
                {contact.label.toUpperCase()}
              </h3>
              <p className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {contact.value}
              </p>
              
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`}></div>
            </a>
          ))}
        </div>
        
        {/* Quick Actions */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-display font-bold neon-text-pink mb-8">
            QUICK ACTIONS
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {quickLinks.map((link, index) => (
              <button
                key={link.label}
                className={`flex items-center gap-2 px-6 py-3 border border-${link.color} text-${link.color} hover:bg-${link.color} hover:text-${link.color}-foreground transition-all duration-300 rounded-lg font-semibold fade-in-up delay-${(index + 1) * 200}`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Location & Availability */}
        <div className="bg-card border border-primary/20 rounded-lg p-8 max-w-3xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="fade-in-left delay-300">
              <h4 className="font-display font-bold neon-text-green mb-4">
                📍 LOCATION
              </h4>
              <p className="text-foreground font-mono">
                Pudukkottai - 622001<br />
                Tamil Nadu, India
              </p>
            </div>
            
            <div className="fade-in-right delay-500">
              <h4 className="font-display font-bold neon-text-green mb-4">
                ⏰ AVAILABILITY
              </h4>
              <p className="text-foreground font-mono">
                Open to new opportunities<br />
                Remote & On-site projects
              </p>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
            <span className="font-mono text-sm text-accent">Available for work</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;