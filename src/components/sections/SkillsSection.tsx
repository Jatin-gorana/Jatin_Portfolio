
import React from 'react';
import { motion } from 'framer-motion';
import SkillsSphere from '../3d/SkillsSphere';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Firebase", level: 85 },
      ]
    },
    {
      title: "AI/ML",
      skills: [
        { name: "PyTorch", level: 75 },
        { name: "OpenCV", level: 80 },
        { name: "NLP", level: 75 },
        { name: "Computer Vision", level: 75 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Firestore", level: 80 },
        { name: "MySQL", level: 75 },
      ]
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
            I've developed a diverse skill set spanning front-end and back-end technologies, 
            as well as AI/ML capabilities. Here's an overview of my technical expertise:
          </p>
        </motion.div>

        {/* 3D Skills Sphere */}
        <SkillsSphere />

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {skillCategories.map((category, i) => (
            <motion.div 
              key={category.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-xl font-bold mb-4 text-accent">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
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
