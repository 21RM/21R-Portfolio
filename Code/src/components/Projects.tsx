import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "Procedural Planet Generation",
    description: "A game featuring infinite procedural planet generation using Perlin noise and custom chunk systems",
    image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Godot Engine", "GDScript", "Perlin Noise", "Procedural Generation"],
    githubLink: "https://github.com/21RM",
  },
  {
    title: "Efficient Mesh Rendering System",
    description: "A system for efficiently rendering a high number of meshes with optimized performance",
    image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Godot Engine", "GLSL", "3D Rendering", "Optimization"],
    githubLink: "https://github.com/21RM",
  },
  {
    title: "Player Database System",
    description: "Implementation of a database system to store and retrieve player information in games",
    image: "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["SQL", "Database Design", "Game Development", "Data Management"],
    githubLink: "https://github.com/21RM",
  },
  {
    title: "Custom Physics Engine",
    description: "A physics engine built from scratch for realistic simulations in game environments",
    image: "https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["C++", "Physics", "Collision Detection", "Mathematics"],
    githubLink: "https://github.com/21RM",
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="card group hover:scale-105"
    >
      <div className="project-card h-64 md:h-72">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="content bg-space-black/90 backdrop-blur-sm p-6">
          <h3 className="font-bold text-xl mb-2 text-white group-hover:text-space-orange transition-colors">
            {project.title}
          </h3>
          <p className="text-white/70 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="text-xs px-2 py-1 bg-space-orange/20 text-space-orange rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-3">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-space-orange transition-colors"
                aria-label="View on GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-space-orange transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title inline-block mx-auto">My Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-8">
            Here are some of my notable projects showcasing my skills in game development, procedural generation, rendering optimization, and more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/21RM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center space-x-2"
          >
            <span>View More on GitHub</span>
            <Github size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;