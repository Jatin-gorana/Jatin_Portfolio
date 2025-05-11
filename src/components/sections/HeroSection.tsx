
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen relative flex flex-col justify-center pt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              className="text-xl font-mono text-accent mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 heading-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Jatin Gorana
            </motion.h1>
            
            <motion.h3 
              className="text-xl md:text-2xl mb-6 text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full Stack Developer
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground max-w-md mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Skilled in MERN, Firebase, AI, and Machine Learning, with experience in 
              building scalable, data-driven web applications. Passionate about 
              leveraging cutting-edge technologies to create intelligent and user-centric solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a 
                href="/Jatin_Gorana_Resume.pdf" 
                className="btn-secondary"
                download
              >
                Download CV
              </a>
            </motion.div>
          </div>
          
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 blur-xl animate-pulse"></div>
              <div className="absolute inset-4 bg-background rounded-full flex items-center justify-center overflow-hidden">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="/lovable-uploads/9632c4f2-1bff-4afc-ac61-509ced9117d9.png" 
                    alt="Jatin Gorana" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-accent to-secondary bg-clip-text text-transparent">JG</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute inset-0 rounded-full border border-accent/20 animate-spin-slow"></div>
              <div className="absolute inset-[-10px] rounded-full border border-secondary/20 animate-reverse-spin"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-accent/70 hover:text-accent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="animate-bounce" size={20} />
      </motion.a>
      
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes reverse-spin {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
