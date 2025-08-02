
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-[2/1] bg-gradient-to-tr from-accent to-secondary rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Jatin Gorana</h3>
                  <p className="text-sm">Software Developer</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-lg"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              I'm Jatin Gorana, currently pursuing a Bachelor's degree in Artificial Intelligence and Data Science 
              at Thadomal Shahani Engineering College with a stellar CGPA of 9.75. I am skilled in the MERN 
              stack and have built several web applications.
            </p>
            <p className="text-muted-foreground mb-4">
              I have a strong interest in impactful solutions and enjoy learning new technologies. 
              I continuously work on improving my skills to build better solutions and create user-friendly applications.
            </p>
            <p className="text-muted-foreground mb-6">
             Serving as an App Developer Intern at Antrix Tech Zone (Kandivali, Mumbai), where I am actively involved in building <strong>Sravyaa</strong>, an innovative “Sound in Silence” project using Ionic Framework.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-md font-semibold text-accent mb-2">Education</h4>
                <ul className="space-y-2">
                  <li className="text-sm">
                    <span className="font-medium">B.E. in AI & Data Science</span>
                    <p className="text-xs text-muted-foreground">Thadomal Shahani Engineering College, 2022-Present</p>
                    <p className="text-xs text-accent">CGPA: 9.75</p>
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">HSC (Computer Science)</span>
                    <p className="text-xs text-muted-foreground">Thakur College of Science and Commerce, 2021-2022</p>
                    <p className="text-xs text-accent">89%</p>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold text-accent mb-2">Experience</h4>
                <ul className="space-y-2">
                  <li className="text-sm">
                    <span className="font-medium">App Developer Intern</span>
                    <p className="text-xs text-muted-foreground">Antrix Tech Zone (Kandivali, Mumbai)</p>
                    <p className="text-xs text-accent">June 2025 – Present</p>
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Web Developer Intern</span>
                    <p className="text-xs text-muted-foreground">Adlytica (Remote, Poland)</p>
                    <p className="text-xs text-accent">May 2025 – June 2025</p>
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Core Team Member</span>
                    <p className="text-xs text-muted-foreground">Google Developers Group, TSEC</p>
                    <p className="text-xs text-accent">Sep 2024 – May 2025</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
