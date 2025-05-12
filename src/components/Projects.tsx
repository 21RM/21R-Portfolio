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
    title: "SpaceCrown",
    description: "A game featuring infinite world generation, it's own customized physics and a promising future, still in development.",
    image: "images/SpaceCrown.png",
    technologies: ["Godot Engine", "GDScript", "Physics", "Procedural Generation", "GLSL"],
    githubLink: "https://github.com/21RM/SpaceCrown",
  },
  {
    title: "Flick",
    description: "A social network web app that handles posts, friends and way more!",
    image: "images/Flick.png",
    technologies: ["Laravel", "Javascript", "Web App", "Blade", "MySQL"],
    githubLink: "https://github.com/21RM/Y3S1-LBAW-Flick",
  },
  {
    title: "Trip-Inator",
    description: "Graph-based pathfinding application where nodes represent airports and edges represent available routes operated by various airlines. Users can search by airline, city, or airport, select departure and destination points, and the program will compute the optimal route based on your preferences.",
    image: "images/TripInator.png",
    technologies: ["C++", "Data Structures", "Graphs", "Path Traversal", "Statistics"],
    githubLink: "https://github.com/21RM/Y2S1-AED-Proj2",
  },
  {
    title: "Cake Sort",
    description: "A simple python game that focus on the multiple implemented AI algorithms to help you solve the puzzle or make a better score.",
    image: "images/CakeSort.png",
    technologies: ["Python", "A*", "Monte Carlo", "Greedy", "DFS", "BFS"],
    githubLink: "https://github.com/21RM/Y3S2-AI-CakeSort",
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
            Here are some of my notable projects showcasing my skills in game development, procedural generation, rweb development, and more.
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