import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Code, Heart } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Alirizvi11", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "www.linkedin.com/in/alirizvi110", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/alirizvi9936", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:	teamforzentix@gmail.com.dev", label: "Email" },
    { icon: <Code className="w-5 h-5" />, href: "https://ali-portfolio-full.vercel.app/", label: "Portfolio" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Team", href: "#team" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-16 border-t border-border">{/* Removed id="contact" since ContactSection now has it */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-cosmic">Forzentix</h3>
            <p className="text-muted-foreground leading-relaxed">
              A sacred space where innovation meets impact. We craft the future 
              through Web3, data science, and cybersecurity excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 glass-card hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-stellar transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-primary">Get in Touch</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Ready to build the future together?
              </p>
              <a
                href="mailto:teamforzentix@gmail.com"
                className="inline-block text-stellar hover:text-accent transition-colors duration-300"
              >
                teamforzentix@gmail.com
              </a>
              <div className="pt-4">
                <button className="btn-stellar">
                  Let's Collaborate
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Forzentix. All rights reserved.
          </p>
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-muted-foreground text-sm flex items-center gap-2"
          >
            Crafted with <Heart className="w-4 h-4 text-accent animate-pulse" /> by the Forzentix team
          </motion.p>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
      </div>
    </footer>
  );
};

export default FooterSection;