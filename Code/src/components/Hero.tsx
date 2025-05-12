import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const starContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starContainerRef.current) return;
    
    // Create random stars
    const createStars = () => {
      const container = starContainerRef.current;
      if (!container) return;
      
      // Clear existing stars
      container.innerHTML = '';
      
      // Create new stars
      const numStars = 100;
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (0.5px to 2px)
        const size = 0.5 + Math.random() * 1.5;
        
        // Random opacity
        const opacity = 0.5 + Math.random() * 0.5;
        
        // Random animation delay
        const delay = Math.random() * 5;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = opacity.toString();
        star.style.animationDelay = `${delay}s`;
        
        container.appendChild(star);
      }
    };
    
    createStars();
    
    // Recreate stars on resize
    window.addEventListener('resize', createStars);
    return () => window.removeEventListener('resize', createStars);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Star background */}
      <div ref={starContainerRef} className="absolute inset-0 z-0"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-16 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <p className="text-space-orange font-mono text-lg">Hello, I'm</p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-7xl font-orbitron font-bold mb-6 text-gradient glow-text"
        >
          Dinis Galvão
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-8 text-white/80"
        >
          Computer Engineering Student
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-white/70 mb-12"
        >
          Aspiring leader with a vision to innovate, disrupt industries, and create meaningful impact.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <a href="#about" className="flex flex-col items-center text-white/50 hover:text-space-orange transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;