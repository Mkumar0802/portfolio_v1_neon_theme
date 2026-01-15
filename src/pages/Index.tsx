import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import WorkPage from "@/components/WorkPage";
// import ProjectsPage from "@/components/ProjectsPage";


import { Helmet } from "react-helmet-async";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muthu Kumar K",
    "url": "https://muthukumar-portfolio.netlify.app/",
    "jobTitle": "MERN Stack Developer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pudukkottai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://github.com/Mkumar0802",
      "https://wa.me/919566420177",
      "https://www.linkedin.com/in/muthu-kumar-k-1011453a"
    ],
    "description": "Experienced MERN Stack Developer specializing in React, Node.js, Laravel, and full-stack web development. Based in Tamil Nadu, India.",
    "knowsAbout": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Laravel",
      "PHP",
      "TailwindCSS",
      "Full Stack Development",
      "API Integration"
    ]
  };

  return (
    <main className="relative overflow-hidden">
      <Helmet>
        <title>Muthu Kumar K | Senior MERN Stack & Full Stack Developer Portfolio</title>
        <meta name="description" content="Explore the portfolio of Muthu Kumar K, a highly skilled MERN Stack Developer with 4+ years of experience in React, Node.js, and Laravel. Specialized in building scalable, high-performance web applications." />
        <meta name="keywords" content="MERN Stack Developer, Full Stack Developer, React Developer, Node.js Developer, Laravel Developer, Web Portfolio, Muthu Kumar K, Tamil Nadu Developer" />
        <link rel="canonical" href="https://muthukumar-portfolio.netlify.app/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <HeroSection />
      <AboutSection />
      <WorkPage />
      {/* <ProjectsPage /> */}
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default Index;
