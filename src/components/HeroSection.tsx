
import Typewriter from "typewriter-effect";
import { FaDownload } from "react-icons/fa";
const HeroSection = () => {





  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping delay-100"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-ping delay-300"></div>
      <div className="absolute bottom-32 left-32 w-1 h-1 bg-accent rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary rounded-full animate-ping delay-700"></div>

      {/* Main Content */}



      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Main Name */}
        <div className="mb-8">
          <h1
            className="text-6xl md:text-8xl font-display font-black neon-text-blue glitch mb-4"
            data-text="MUTHU KUMAR K"
          >
            MUTHU KUMAR K
          </h1>

          {/* Typewriter Effect */}
          <div className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-secondary min-h-[3rem] flex items-center justify-center">
            <span className="neon-text-pink">
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "Full Stack Developer",
                    "React Developer",
                    "Node.js Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </div>
        </div>

        {/* Professional Summary */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 fade-in-up delay-700">
          4+ years of experience building scalable web applications with React, Node.js, Laravel, and modern technologies.
          Passionate about creating exceptional digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up delay-700">
          {/* View My Work (scrolls to WorkPage) */}
          <button
            className="neon-button"
            onClick={() => {
              const el = document.getElementById("work");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            VIEW MY WORK
          </button>

          {/* Read Blog (scrolls to BlogSection) */}
          <button
            className="px-6 py-3 font-semibold border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.5)]"
            onClick={() => {
              const el = document.getElementById("blog");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            READ BLOG
          </button>

          {/* Get in Touch (WhatsApp) */}
          <a
            href="https://wa.me/919566420177"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-semibold border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 neon-text-pink"
          >
            GET IN TOUCH
          </a>
        </div>


        {/* Download Resume button (below the CTA group) */}
        <div className="mt-6 flex justify-center fade-in-up delay-900">
          <a
            href="https://drive.google.com/file/d/18jXNIXE3x18QsQ0JlIj_pBChuednWDOD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-accent neon-text-green hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-lg font-semibold flex items-center gap-2"
          >
            <FaDownload size={18} />
            Download Resume
          </a>
        </div>





        {/* Contact Info */}
        <div className="md:mt-16  mt-10 flex flex-wrap justify-center md:gap-8 gap-4 text-muted-foreground fade-in-up delay-700">
          <div className="flex items-center gap-2">
            <span className="text-accent">📞</span>
            <span>+91 9566420177</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">📧</span>
            <span>mkumar0802@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">📍</span>
            <span>Pudukkottai, Tamil Nadu</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;