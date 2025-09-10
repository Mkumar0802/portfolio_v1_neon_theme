import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub,FaDownload, FaGlobe, FaCalendarAlt} from "react-icons/fa";




const ContactSection = () => {

  const contactMethods = [
    {
      icon: <FaPhoneAlt size={32} />,
      label: 'Phone',
      value: '+91 9566420177',
      color: 'neon-blue',
      action: 'tel:+919566420177'
    },
    {
      icon: <FaEnvelope size={32} />,
      label: 'Email',
      value: 'mkumar0802@gmail.com',
      color: 'neon-pink',
      action: 'mailto:mkumar0802@gmail.com'
    },
    {
      icon: <FaWhatsapp size={32} />,
      label: 'WhatsApp',
      value: '+91 9566420177',
      color: 'neon-green',
      action: 'https://wa.me/919566420177'
    },
    {
      icon: <FaLinkedin size={32} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/muthu-kumar',
      color: 'neon-blue',
      action: 'https://www.linkedin.com/in/muthu-kumar-k-1011453a'
    },
    {
      icon: <FaGithub size={32} />,
      label: 'GitHub',
      value: 'github.com/mkumar0802',
      color: 'neon-yellow',
      action: 'https://github.com/mkumar0802'
    }
  ];


  const contactColors: Record<string, string> = {
    'neon-blue': 'text-neon-blue hover:border-neon-blue/60',
    'neon-pink': 'text-neon-pink hover:border-neon-pink/60',
    'neon-green': 'text-neon-green hover:border-neon-green/60',
    'neon-purple': 'text-neon-purple hover:border-neon-purple/60',
    'neon-yellow': 'text-neon-yellow hover:border-neon-yellow/60'
  };

const quickLinks = [
  { 
    label: 'Download Resume', 
    icon: <FaDownload size={18} />, 
    color: 'primary', 
    action: 'https://drive.google.com/file/d/18jXNIXE3x18QsQ0JlIj_pBChuednWDOD/view?usp=sharing' // place PDF inside /public
  },
  { 
    label: 'View Portfolio', 
    icon: <FaGlobe size={18} />, 
    color: 'secondary', 
    action: 'https://yourportfolio.com'
  },
  { 
    label: 'Schedule Meeting', 
    icon: <FaCalendarAlt size={18} />, 
    color: 'accent', 
    action: 'https://calendly.com/yourusername/meeting'
  }
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
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block bg-card border border-primary/20 rounded-lg p-6 text-center transition-all duration-300 group fade-in-up delay-${(index + 1) * 100} ${contactColors[contact.color]}`}
            >
              <div className="flex justify-center items-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>

              <h3 className={`font-display font-bold mb-2 ${contactColors[contact.color].split(' ')[0]}`}>
                {contact.label.toUpperCase()}
              </h3>
              <p className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {contact.value}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
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
    <a
      key={link.label}
      href={link.action}
      target={link.action.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      download={link.label.includes('Resume')}
      className={`flex items-center gap-2 px-6 py-3 border border-${link.color} text-${link.color} hover:bg-${link.color} hover:text-${link.color}-foreground transition-all duration-300 rounded-lg font-semibold fade-in-up delay-${(index + 1) * 200}`}
    >
      {link.icon}
      {link.label}
    </a>
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