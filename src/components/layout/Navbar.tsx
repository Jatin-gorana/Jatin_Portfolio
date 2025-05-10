
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking links or scrolling on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('nav') && !target.closest('button')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-background/80 backdrop-blur-lg shadow-md' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a href="#hero" className="heading-gradient">Jatin</a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-accent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="/Jatin_Gorana_Resume.pdf"
            className="btn-primary text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            download
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu - Fixed Position */}
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-x-0 top-[60px] bottom-0 z-50 bg-background/95 backdrop-blur-md md:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <nav className="flex flex-col items-center pt-8 h-full space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Jatin_Gorana_Resume.pdf"
                className="btn-primary px-8"
                download
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
