
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' },
  { name: 'Git', color: '#F05032' },
  { name: 'Express', color: '#000000' },
  { name: 'Pytorch', color: '#EE4C2C' },
  { name: 'OpenCV', color: '#5C3EE8' },
  { name: 'NLP', color: '#7546F9' },
  { name: 'Computer Vision', color: '#FF6B6B' },
  { name: 'AI', color: '#9559E5' },
];

const SkillsSphere = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sphereRadius = 150;

  useEffect(() => {
    const tags = document.querySelectorAll('.skill-tag');
    const beta = 0;
    const omega = 0;

    // Distribute tags in 3D space
    tags.forEach((tag, i) => {
      const phi = Math.acos(-1 + (2 * i) / tags.length);
      const theta = Math.sqrt(tags.length * Math.PI) * phi;

      const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(phi);

      const transformStr = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${beta}deg) rotateX(${omega}deg)`;
      (tag as HTMLElement).style.transform = transformStr;
    });

    // Handle mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current || isHovered) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate mouse distance from center
      const mouseX = (event.clientX - centerX) / 25;
      const mouseY = (event.clientY - centerY) / 25;
      
      setMousePosition({ x: mouseY, y: mouseX });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <motion.div 
      className="relative h-[400px] w-full flex items-center justify-center perspective-1000 overflow-hidden mt-10"
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="skill-sphere absolute w-full h-full"
        style={{ 
          transform: `rotateX(${isHovered ? 0 : mousePosition.x}deg) rotateY(${isHovered ? 0 : mousePosition.y}deg)`,
          transition: isHovered ? 'transform 5s ease-in-out' : 'transform 0.1s ease-out',
          animation: isHovered ? 'spin 20s linear infinite' : 'none'
        }}
      >
        {skills.map((skill, i) => (
          <div 
            key={i}
            className="skill-tag w-auto h-auto px-3 py-1.5 rounded-full cursor-pointer"
            style={{
              backgroundColor: `${skill.color}22`,
              border: `1px solid ${skill.color}`,
              color: skill.color,
              boxShadow: `0 0 10px ${skill.color}33`,
            }}
          >
            <span className="font-mono whitespace-nowrap text-xs font-medium z-10">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes spin {
            from { transform: rotateY(0deg) rotateX(10deg); }
            to { transform: rotateY(360deg) rotateX(10deg); }
          }
        `}
      </style>
    </motion.div>
  );
};

export default SkillsSphere;
