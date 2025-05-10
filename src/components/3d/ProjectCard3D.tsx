
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  year: string;
  link?: string;
}

const ProjectCard3D: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  year,
  link
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      const rotateY = ((x - centerX) / centerX) * 5; // max 5 degrees
      const rotateX = ((centerY - y) / centerY) * 5; // max 5 degrees
      
      card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="glass-card relative overflow-hidden group w-full h-full p-6 will-change-transform transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {imageUrl && (
        <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
          />
        </div>
      )}
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <span className="text-sm font-mono text-accent">{year}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
          
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-sm text-accent font-medium hover:underline"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard3D;
