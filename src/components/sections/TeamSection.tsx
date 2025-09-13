import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Twitter, MapPin, Calendar, Star } from "lucide-react";
import aliProfile from "@/assets/ali-profile.jpg";
import lokendraProfile from "@/assets/lokendra-profile.jpg";
import abhayProfile from "@/assets/abhay-profile.jpg";

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  skills: string[];
  quote: string;
  bio: string;
  location: string;
  joinedDate: string;
  githubStats: {
    repos: number;
    contributions: number;
    followers: number;
  };
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "ali",
    name: "Ali Rizvi",
    designation: "Oracle DBA & Web3 Developer",
    image: aliProfile,
    skills: ["Move", "Aptos", "React", "TailwindCSS", "OracleDB", "Flask", "Git", "Smart Contracts", "DevOps"],
    quote: "Code is my canvas. Impact is my intention.",
    bio: "Passionate Web3 developer with expertise in blockchain technology and database administration. I specialize in building scalable dApps and smart contracts while ensuring robust data management solutions.",
    location: "Mumbai, India",
    joinedDate: "2022",
    githubStats: {
      repos: 25,
      contributions: 3722,
      followers: 100
    },
    socialLinks: {
      github: "https://github.com/Alirizvi11",
      linkedin: "www.linkedin.com/in/alirizvi110",
      twitter: "https://x.com/alirizvi9936"
    }
  },
  {
    id: "lokendra",
    name: "Lokendra Singh",
    designation: "Data Scientist & Full Stack Developer",
    image: lokendraProfile,
    skills: ["Python", "Pandas", "NumPy", "React", "Flask", "Machine Learning", "APIs", "Git"],
    quote: "Data speaks. I listen.",
    bio: "Data scientist turned full-stack developer, I bridge the gap between complex data insights and user-friendly applications. My passion lies in transforming data into actionable intelligence.",
    location: "Delhi, India",
    joinedDate: "2022",
    githubStats: {
      repos: 36,
      contributions: 567,
      followers: 89
    },
    socialLinks: {
      github: "https://github.com/Guddubhaiya07",
      linkedin: "https://www.linkedin.com/in/lokendra-singh-dataanalyst/",
      twitter: "#"
    }
  },
  {
    id: "abhay",
    name: "Abhay Kushwaha",
    designation: "VAPT & Cybersecurity Expert",
    image: abhayProfile,
    skills: ["Kali Linux", "Burp Suite", "OWASP", "Ethical Hacking", "Python", "Network Security"],
    quote: "I break to protect.",
    bio: "Cybersecurity specialist focused on vulnerability assessment and penetration testing. I ensure our applications are fortress-strong against digital threats while maintaining optimal performance.",
    location: "Bangalore, India",
    joinedDate: "2023",
    githubStats: {
      repos: 12,
      contributions: 234,
      followers: 67
    },
    socialLinks: {
      github: "https://github.com/abhi9519-ux",
      linkedin: "www.linkedin.com/in/abhay-kushwaha-96825623a",
      twitter: "https://x.com/composer_dark"
    }
  }
];

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="glass-card-hover p-6 relative overflow-hidden group"
    >
      {/* Profile Section */}
      <div className="relative z-10">
        <div className="flex flex-col items-center text-center mb-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative mb-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full border-2 border-primary glow-primary"
            />
            <div className="absolute -inset-1 rounded-full bg-cosmic opacity-20 blur-sm" />
          </motion.div>

          <h3 className="text-heading text-cosmic mb-2">{member.name}</h3>
          <p className="text-stellar text-body mb-3">{member.designation}</p>
          
          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-accent italic text-caption mb-4 border-l-2 border-accent pl-4"
          >
            "{member.quote}"
          </motion.blockquote>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {member.skills.slice(0, 6).map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border"
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 6 && (
            <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
              +{member.skills.length - 6} more
            </span>
          )}
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="btn-stellar w-full mb-4"
        >
          {isExpanded ? "Show Less" : "View README.md"}
        </button>

        {/* Expanded Content */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="border-t border-border pt-4 space-y-4">
            {/* Bio */}
            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">## About Me</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>

            {/* Stats */}
            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">## GitHub Stats</h4>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="glass-card p-2">
                  <div className="text-lg font-bold text-cosmic">{member.githubStats.repos}</div>
                  <div className="text-xs text-muted-foreground">Repos</div>
                </div>
                <div className="glass-card p-2">
                  <div className="text-lg font-bold text-stellar">{member.githubStats.contributions}</div>
                  <div className="text-xs text-muted-foreground">Commits</div>
                </div>
                <div className="glass-card p-2">
                  <div className="text-lg font-bold text-accent">{member.githubStats.followers}</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">## Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {member.location}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  Joined {member.joinedDate}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">## Connect</h4>
              <div className="flex gap-3">
                {member.socialLinks.github && (
                  <a
                    href={member.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.socialLinks.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-cosmic opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-cosmic mb-6">
            Our Sacred Circle
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries behind Forzentix – each bringing unique expertise 
            to forge the future of Web3 and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;