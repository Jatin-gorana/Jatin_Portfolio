
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/10 py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.h3 
              className="text-xl font-bold mb-4 heading-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Jatin.dev
            </motion.h3>
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Web Developer skilled in MERN stack with a passion for front-end development and creating user-friendly solutions.
            </motion.p>
          </div>

          <div>
            <motion.h3 
              className="text-md font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h3>
            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <li><a href="#about" className="text-sm hover:text-accent transition-colors">About</a></li>
              <li><a href="#skills" className="text-sm hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-sm hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#achievements" className="text-sm hover:text-accent transition-colors">Achievements</a></li>
              <li><a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a></li>
            </motion.ul>
          </div>

          <div>
            <motion.h3 
              className="text-md font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Connect With Me
            </motion.h3>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="https://github.com/jatingorana" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/jatingorana" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:jatingorana123@gmail.com" className="hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+919987265862" className="hover:text-accent transition-colors">
                <Phone size={20} />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Jatin Gorana. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
