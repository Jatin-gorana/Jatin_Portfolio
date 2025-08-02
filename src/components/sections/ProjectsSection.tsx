
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard3D from '../3d/ProjectCard3D';

const ProjectsSection = () => {
  const projects = [
    {
      title: "HeritageExplorer",
      description: "Built a One Stop Platform for artifact recognition and authentication using Gemini, ensuring accurate cultural preservation.",
      technologies: ["React", "Node.js", "Gemini ai model"],
      year: "2025",
      link: "https://culturalheritageexplorer.netlify.app/"
    },
    {
      title: "LegalAI Pro",
      description: "AI-powered legal assistance platform that helps users understand case laws, review contracts, and get answers to legal questions. Features document summarization and legal news integration.",
      technologies: ["Vite", "React", "Server.js", "NewsAPI"],
      year: "2025",
      link: "https://legalally.netlify.app/"
    },
    {
      title: "HackSync'25 Website",
      description: "Event website for Google Developers Group hackathon, engaging over 700+ participants with interactive features and real-time updates.",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      year: "2025",
      link: "https://hacksync25.netlify.app"
    },
    {
      title: "FinGyaan",
      description: "Financial literacy platform with interactive tutorials, personalized recommendations, financial news, mutual fund calculator, and secure Google authentication.",
      technologies: ["ReactJS", "Firebase", "Node.js", "Firestore"],
      year: "2024",
      link: "https://codeissance2024.web.app/"
    },
    
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">My Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            Here are some of the projects I've worked on, showcasing my skills in web development,
            frontend design, and creating user-centric applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <ProjectCard3D
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              year={project.year}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
