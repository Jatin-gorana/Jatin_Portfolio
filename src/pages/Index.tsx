
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import ContactSection from '../components/sections/ContactSection';
import Background3D from '../components/3d/Background3D';
import { useToast } from '../hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast when the page loads
    toast({
      title: "Welcome to my portfolio!",
      description: "Scroll down to explore my projects and skills.",
      duration: 5000,
    });
  }, [toast]);

  return (
    <div className="relative overflow-x-hidden">
      <Background3D />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
