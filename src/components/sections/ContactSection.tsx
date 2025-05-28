
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:jatingorana123@gmail.com" className="font-medium hover:text-accent">
                    jatingorana123@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+919987265862" className="font-medium hover:text-accent">
                    +91 9987265862
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Linkedin size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/jatin-gorana/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-accent"
                  >
                    linkedin.com/in/jatin-gorana
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Github size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a 
                    href="https://github.com/Jatin-gorana/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-accent"
                  >
                    github.com/Jatin-gorana/
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

              <form
                action="https://getform.io/f/awnwqykb"
                method="POST"
                encType="multipart/form-data"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium block mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium block mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary flex items-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>
              </form>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
