
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Layers, 
  Database, 
  GitBranch, 
  Monitor
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "Python", "JavaScript (ES6+)"],
      color: "#F7DF1E"
    },
    {
      title: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["ReactJS", "Ionic (Angular)", "HTML", "CSS", "Tailwind CSS"],
      color: "#61DAFB"
    },
    {
      title: "Backend",
      icon: <Layers className="w-6 h-6" />,
      skills: ["Node.js", "Express", "Firebase", "REST APIs"],
      color: "#339933"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL"],
      color: "#47A248"
    },
    {
      title: "Tools",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "Postman"],
      color: "#F05032"
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-background to-secondary/5">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">My Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            I have developed expertise in modern web technologies, programming languages, 
            and development tools. Here's an overview of my technical skills:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
          {skillCategories.map((category, i) => (
            <motion.div 
              key={category.title}
              className="glass-card p-6 flex flex-col items-center justify-start h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ 
                  backgroundColor: `${category.color}20`, 
                  color: category.color,
                  boxShadow: `0 0 15px ${category.color}33`
                }}
              >
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4" style={{ color: category.color }}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="tech-badge backdrop-blur-sm"
                    style={{ backgroundColor: `${category.color}15`, border: `1px solid ${category.color}40` }}
                    whileHover={{ scale: 1.05, boxShadow: `0 0 10px ${category.color}40` }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
