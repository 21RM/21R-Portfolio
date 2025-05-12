import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-space-gray/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title inline-block mx-auto">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Profile image with space-themed border effect */}
              <div className="absolute inset-0 rounded-lg overflow-hidden glow-border">
                <img 
                  src="images/Dinis.jpg" 
                  alt="Space-themed profile" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-space-black/20"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-space-orange"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-space-orange"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 font-orbitron text-gradient">
              Dinis Afonso Cerqueira Galvão
            </h3>
            <p className="text-lg text-white/70 mb-6">
              I'm a 3rd year Informatics and Computing Engineering student at FEUP with a passion for game development, programming, and innovation.
            </p>
            <p className="text-white/70 mb-6">
              With more than 1000 hours of experience in game development, primarily using Godot Game Engine, I've explored advanced topics such as infinite world generation (perlin noise), chunk systems, efficient mesh rendering, database storage for player information, physics systems, and recently artificial intelligence.
            </p>
            <p className="text-white/70 mb-8">
              My goal is to gain industry experience that will help me pursue my dream of leading my own innovative technology company in the future. I believe that this portfolio represents my skills and ambitions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="btn btn-primary flex items-center space-x-2"
              >
                <span>Contact Me</span>
                <ExternalLink size={16} />
              </a>
              <a 
                href="https://github.com/21RM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center space-x-2"
              >
                <span>GitHub</span>
                <Github size={16} />
              </a>
              <a 
                href="/Dinis_CV.pdf"
                download="Dinis_Galvao_CV.pdf"
                className="btn bg-space-gray hover:bg-space-gray/80 text-white flex items-center space-x-2"
              >
                <span>Download CV</span>
                <Download size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;