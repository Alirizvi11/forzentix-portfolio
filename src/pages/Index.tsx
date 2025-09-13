import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import EnhancedVisualEffects from "@/components/effects/EnhancedVisualEffects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <EnhancedVisualEffects />
      <Header />
      <main>
        <HeroSection />
        <TeamSection />
        <ProjectsSection />
        <GallerySection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;