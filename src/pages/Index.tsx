import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectGrid } from "@/components/home/ProjectGrid";
import { AboutSection } from "@/components/home/AboutSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { SystemsSection } from "@/components/home/SystemsSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <PageTransition>
      <Navigation />
      <main>
        <HeroSection />
        <ProjectGrid />
        <AboutSection />
        <ExperienceSection />
        <SystemsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Index;
