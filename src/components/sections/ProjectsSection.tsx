// import { motion } from "framer-motion";
// import { ExternalLink, Github, Zap, Database, Shield, Brain } from "lucide-react";

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   longDescription: string;
//   github: string;
//   demo?: string;
//   techStack: string[];
//   category: string;
//   icon: React.ReactNode;
//   gradient: string;
//   hackathon?: string;
// }

// const projects: Project[] = [
//   {
//     id: "aptotagger",
//     title: "Aptotagger Project",
//     description: "Full-stack dApp for auto-tagging and visualizing on-chain events",
//     longDescription: "Revolutionary blockchain application built during Aptos Pune hackathon. Features Move smart contracts integrated with React frontend and Petra wallet for seamless on-chain event management and visualization.",
//     github: "https://github.com/Alirizvi11/aptotagger-project-AptosHackerank",
//     techStack: ["Aptos", "Move", "React", "TailwindCSS", "Petra Wallet", "Node.js"],
//     category: "Web3",
//     icon: <Zap className="w-6 h-6" />,
//     gradient: "from-purple-500 to-blue-500",
//     hackathon: "Aptos Pune"
//   },
//   {
//     id: "civicledger",
//     title: "CivicLedger Project",
//     description: "Blockchain-powered public spending transparency platform",
//     longDescription: "Transparent governance solution leveraging Aptos blockchain to track and visualize public spending. Built with modern React architecture and powered by Move smart contracts for immutable financial records.",
//     github: "https://github.com/Alirizvi11/CivicLedgerProject",
//     techStack: ["React", "TailwindCSS", "Vite", "Move", "Petra Wallet Adapter", "Recharts"],
//     category: "Blockchain",
//     icon: <Shield className="w-6 h-6" />,
//     gradient: "from-green-500 to-teal-500"
//   },
//   {
//     id: "bookvault",
//     title: "BookVault Project",
//     description: "LMS with genre-aware dashboards and analytics",
//     longDescription: "Comprehensive Learning Management System featuring advanced analytics, genre-based content organization, and scalable architecture designed for educational institutions and public sector deployment.",
//     github: "https://github.com/Alirizvi11/BookVaultProject",
//     techStack: ["React", "Flask", "OracleDB", "TailwindCSS"],
//     category: "Full-Stack",
//     icon: <Database className="w-6 h-6" />,
//     gradient: "from-orange-500 to-red-500"
//   },
//   {
//     id: "bookrecommender",
//     title: "Book Recommender",
//     description: "Lightweight recommendation engine with powerful backend logic",
//     longDescription: "Intelligent book recommendation system using advanced Python algorithms and clean HTML interface. Demonstrates the power of machine learning in content discovery and user engagement.",
//     github: "https://github.com/Guddubhaiya07/book-recommender/blob/main/README.md",
//     techStack: ["Python", "HTML", "Machine Learning"],
//     category: "AI/ML",
//     icon: <Brain className="w-6 h-6" />,
//     gradient: "from-pink-500 to-violet-500"
//   }
// ];

// const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1, duration: 0.8 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -10 }}
//       className="glass-card-hover group relative overflow-hidden"
//     >
//       {/* Project Header */}
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-4">
//           <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} shadow-glow`}>
//             {project.icon}
//           </div>
//           <div className="flex gap-2">
//             <a
//               href={project.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-300"
//             >
//               <Github className="w-4 h-4" />
//             </a>
//             {project.demo && (
//               <a
//                 href={project.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-lg bg-primary hover:bg-primary-glow transition-colors duration-300"
//               >
//                 <ExternalLink className="w-4 h-4" />
//               </a>
//             )}
//           </div>
//         </div>

//         <div className="mb-3">
//           <h3 className="text-heading text-cosmic mb-2">{project.title}</h3>
//           {project.hackathon && (
//             <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm mb-2">
//               🏆 {project.hackathon}
//             </span>
//           )}
//         </div>

//         <p className="text-body text-muted-foreground mb-4">
//           {project.description}
//         </p>

//         <p className="text-caption text-foreground mb-6 leading-relaxed">
//           {project.longDescription}
//         </p>

//         {/* Tech Stack */}
//         <div className="mb-4">
//           <h4 className="text-sm font-semibold text-primary mb-2">Tech Stack</h4>
//           <div className="flex flex-wrap gap-2">
//             {project.techStack.map((tech) => (
//               <span
//                 key={tech}
//                 className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border hover:border-primary transition-colors duration-300"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Category Badge */}
//         <div className="flex items-center justify-between">
//           <span className="px-3 py-1 bg-card-secondary text-stellar rounded-lg text-sm">
//             {project.category}
//           </span>
//           <motion.div
//             whileHover={{ x: 5 }}
//             className="text-primary group-hover:text-primary-glow transition-colors duration-300"
//           >
//             <ExternalLink className="w-4 h-4" />
//           </motion.div>
//         </div>
//       </div>

//       {/* Gradient Overlay */}
//       <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
//       {/* Border Glow Effect */}
//       <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-primary glow-primary" />
//     </motion.div>
//   );
// };

// const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-24 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-display text-cosmic mb-6">
//             Sacred Creations
//           </h2>
//           <p className="text-body text-muted-foreground max-w-3xl mx-auto">
//             Explore our portfolio of innovative projects spanning Web3, full-stack development, 
//             data science, and cybersecurity. Each creation embodies our commitment to impact and excellence.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={project.id} project={project} index={index} />
//           ))}
//         </div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <div className="glass-card p-8 max-w-2xl mx-auto">
//             <h3 className="text-heading text-cosmic mb-4">
//               Ready to Collaborate?
//             </h3>
//             <p className="text-body text-muted-foreground mb-6">
//               Let's build something extraordinary together. We're always open to exciting new projects and partnerships.
//             </p>
//             <button className="btn-cosmic">
//               Start a Conversation
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, Database, Shield, Brain } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  github: string;
  demo?: string;
  techStack: string[];
  category: string;
  icon: React.ReactNode;
  gradient: string;
  hackathon?: string;
}

const projects: Project[] = [
  {
    id: "aptotagger",
    title: "Aptotagger Project",
    description: "Full-stack dApp for auto-tagging and visualizing on-chain events",
    longDescription: "Revolutionary blockchain application built during Aptos Pune hackathon. Features Move smart contracts integrated with React frontend and Petra wallet for seamless on-chain event management and visualization.",
    github: "https://github.com/Alirizvi11/aptotagger-project-AptosHackerank",
    techStack: ["Aptos", "Move", "React", "TailwindCSS", "Petra Wallet", "Node.js"],
    category: "Web3",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-purple-500 to-blue-500",
    hackathon: "Aptos Pune"
  },
  {
    id: "civicledger",
    title: "CivicLedger Project",
    description: "Blockchain-powered public spending transparency platform",
    longDescription: "Transparent governance solution leveraging Aptos blockchain to track and visualize public spending. Built with modern React architecture and powered by Move smart contracts for immutable financial records.",
    github: "https://github.com/Alirizvi11/CivicLedgerProject",
    techStack: ["React", "TailwindCSS", "Vite", "Move", "Petra Wallet Adapter", "Recharts"],
    category: "Blockchain",
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-green-500 to-teal-500"
  },
  {
    id: "bookvault",
    title: "BookVault Project",
    description: "LMS with genre-aware dashboards and analytics",
    longDescription: "Comprehensive Learning Management System featuring advanced analytics, genre-based content organization, and scalable architecture designed for educational institutions and public sector deployment.",
    github: "https://github.com/Alirizvi11/BookVaultProject",
    techStack: ["React", "Flask", "OracleDB", "TailwindCSS"],
    category: "Full-Stack",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "bookrecommender",
    title: "Book Recommender",
    description: "Lightweight recommendation engine with powerful backend logic",
    longDescription: "Intelligent book recommendation system using advanced Python algorithms and clean HTML interface. Demonstrates the power of machine learning in content discovery and user engagement.",
    github: "https://github.com/Guddubhaiya07/book-recommender/blob/main/README.md",
    techStack: ["Python", "HTML", "Machine Learning"],
    category: "AI/ML",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-pink-500 to-violet-500"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="glass-card-hover group relative overflow-hidden"
    >
      {/* Project Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} shadow-glow`}>
            {project.icon}
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary hover:bg-primary-glow transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <div className="mb-3">
          <h3 className="text-heading text-cosmic mb-2">{project.title}</h3>
          {project.hackathon && (
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm mb-2">
              🏆 {project.hackathon}
            </span>
          )}
        </div>

        <p className="text-body text-muted-foreground mb-4">
          {project.description}
        </p>

        <p className="text-caption text-foreground mb-6 leading-relaxed">
          {project.longDescription}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-primary mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border hover:border-primary transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-card-secondary text-stellar rounded-lg text-sm">
            {project.category}
          </span>
          <motion.div
            whileHover={{ x: 5 }}
            className="text-primary group-hover:text-primary-glow transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-primary glow-primary" />
    </motion.div>
  );
};

const ProjectsSection = () => {
  // Contact handler function - Change this according to your needs
  const handleContactClick = () => {
    // Option 1: Email
    window.location.href = 'mailto:your-email@example.com?subject=Project Collaboration&body=Hi, I would like to discuss a potential project collaboration.';
    
    // Option 2: WhatsApp (uncomment to use)
    // window.open('https://wa.me/919876543210?text=Hi, I would like to discuss a potential project collaboration', '_blank');
    
    // Option 3: Scroll to contact section (uncomment to use)
    // document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    
    // Option 4: Open calendar booking (uncomment to use)
    // window.open('https://calendly.com/your-profile', '_blank');
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-cosmic mb-6">
            Sacred Creations
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of innovative projects spanning Web3, full-stack development, 
            data science, and cybersecurity. Each creation embodies our commitment to impact and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-heading text-cosmic mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-body text-muted-foreground mb-6">
              Let's build something extraordinary together. We're always open to exciting new projects and partnerships.
            </p>
            <button 
              className="btn-cosmic hover:scale-105 transform transition-all duration-300"
              onClick={handleContactClick}
            >
              Start a Conversation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;