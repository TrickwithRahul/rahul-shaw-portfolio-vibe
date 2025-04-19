
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-[#FFD84F] rounded-t-[100px]" />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default Index;
