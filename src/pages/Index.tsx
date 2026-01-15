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
    "sameAs": [
      "https://github.com/Mkumar0802",
      "https://wa.me/919566420177"
    ],
    "description": "Experienced MERN Stack Developer specializing in React, Node.js, Laravel, and full-stack web development."
  };

  return (
    <main className="relative overflow-hidden">
      <Helmet>
        <title>Muthu Kumar K | MERN Stack Developer</title>
        <meta name="description" content="Portfolio of Muthu Kumar K - Experienced MERN Stack Developer specializing in React, Node.js, Laravel, and full-stack web development" />
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
