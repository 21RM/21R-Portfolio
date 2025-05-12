import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Github } from 'lucide-react';

interface HeaderProps {
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        const sectionId = section.getAttribute('id') as string;
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${scrolled ? 'py-3 bg-space-black/90 backdrop-blur-md shadow-lg' : 'py-5 bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="text-white font-orbitron text-xl font-bold flex items-center">
          <span className="text-space-orange">D</span>inis
          <span className="text-space-orange ml-2">G</span>alvão
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
          <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
          <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/21RM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white opacity-70 hover:opacity-100 hover:text-space-orange transition-all duration-300"
          >
            <Github className="h-5 w-5" />
          </a>
          <button 
            className="lg:hidden text-white"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <a 
            href="#contact" 
            className="hidden md:block btn btn-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;