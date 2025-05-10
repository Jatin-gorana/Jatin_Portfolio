
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Medal, Star } from 'lucide-react';

// Define the Trophy component before using it in the achievements array
const Trophy = ({ size = 24, color = "currentColor", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const AchievementsSection = () => {
  const achievements = [
    {
      title: "1st Prize at JamRang'25",
      description: "Won first place for developing LegalAI Pro, an AI-ML-powered full-stack legal assistance platform.",
      icon: Trophy,
      color: "#FFD700"
    },
    {
      title: "Consolation Prize at CSI Rubix 2025",
      description: "Among 50 teams for developing CulturalAI, an AI-powered heritage platform.",
      icon: Medal,
      color: "#C0C0C0"
    },
    {
      title: "2nd Rank in Academics",
      description: "Secured 2nd rank in Semesters 1, 3, and 5 of B.E. (AI DS) at Thadomal Shahani Engineering College.",
      icon: Star,
      color: "#0EA5E9"
    },
    {
      title: "Google Developers Group Senior Member",
      description: "Senior Core Team Member at Google Developers Group, TSEC, contributing to technical events and hackathons.",
      icon: Award,
      color: "#10B981"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative bg-gradient-to-b from-background to-secondary/5">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">Achievements</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            Recognitions and accomplishments that highlight my dedication to excellence in both academic and professional pursuits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            
            return (
              <motion.div
                key={index}
                className="glass-card p-8 flex items-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div 
                  className="p-3 rounded-full" 
                  style={{ backgroundColor: `${achievement.color}20` }}
                >
                  <IconComponent size={30} style={{ color: achievement.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
