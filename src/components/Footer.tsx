import React from 'react';
import { Github, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 bg-space-blue">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-white/10">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a href="#home" className="text-white font-orbitron text-xl font-bold flex items-center justify-center md:justify-start">
              <span className="text-space-orange">D</span>inis
              <span className="text-space-orange ml-2">G</span>alvão
            </a>
            <p className="text-white/50 mt-2">Informatics and Computing Engineering Student</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com/21RM" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-space-orange transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:dacgalvao@gmail.com" className="text-white/70 hover:text-space-orange transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+351933132752" className="text-white/70 hover:text-space-orange transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <button 
              onClick={scrollToTop}
              className="text-white bg-space-orange p-2 rounded-full hover:bg-space-orange-light transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-white/50">
            &copy; {new Date().getFullYear()} Dinis Galvão. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;