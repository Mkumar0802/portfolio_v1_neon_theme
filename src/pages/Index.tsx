import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import WorkPage from "@/components/WorkPage";
// import ProjectsPage from "@/components/ProjectsPage";


const Index = () => {
  return (
    <main className="relative overflow-hidden">
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
