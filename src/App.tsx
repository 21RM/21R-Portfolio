import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { Github, Linkedin, Mail, Menu, X, ChevronRight, ExternalLink, Code, Download } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="min-h-screen bg-space-black text-white relative overflow-hidden">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-space-orange z-50" 
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Space particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#ffffff", "#FF5D00", "#FF7D3F"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-screen w-full sm:w-64 bg-space-gray z-40 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-6 right-6 text-white"
          onClick={toggleMenu}
        >
          <X className="h-6 w-6" />
        </button>
        <div className="flex flex-col p-8 pt-20 space-y-6">
          <a href="#home" className="nav-link text-xl" onClick={toggleMenu}>Home</a>
          <a href="#about" className="nav-link text-xl" onClick={toggleMenu}>About</a>
          <a href="#skills" className="nav-link text-xl" onClick={toggleMenu}>Skills</a>
          <a href="#experience" className="nav-link text-xl" onClick={toggleMenu}>Experience</a>
          <a href="#projects" className="nav-link text-xl" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="nav-link text-xl" onClick={toggleMenu}>Contact</a>
          <div className="flex space-x-4 mt-8">
            <a href="https://github.com/21RM" target="_blank" rel="noopener noreferrer" className="text-white hover:text-space-orange transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:dacgalvao@gmail.com" className="text-white hover:text-space-orange transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header toggleMenu={toggleMenu} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;