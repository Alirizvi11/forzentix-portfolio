import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import forzentixTeam from "@/assets/forzentix-team.jpg";
import EnhancedCosmicBackground from "@/components/effects/EnhancedCosmicBackground";
import ParticleField from "@/components/effects/ParticleField";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <EnhancedCosmicBackground />
      
      {/* Cosmic Grid Overlay */}
      <div className="absolute inset-0 cosmic-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Team Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <img
                src={forzentixTeam}
                alt="Forzentix Team"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-primary glow-primary float"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary opacity-50"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-hero text-cosmic mb-6 text-glow"
          >
            Forzentix
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-heading text-stellar mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Code with Impact. Build with Soul.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-body text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            We are a passionate team of Web3 developers, data scientists, and cybersecurity experts 
            crafting the future through innovative blockchain solutions and full-stack applications.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="btn-cosmic group inline-flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
            Let's Explore Our Projects
            <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;