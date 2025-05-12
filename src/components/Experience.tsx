import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  location: string;
  date: string;
  description: string;
}

const educationItems: TimelineItem[] = [
  {
    title: "Informatics and Computing Engineering",
    location: "FEUP - Faculty of Engineering of the University of Porto",
    date: "2022 - Present",
    description: "Currently in my 3rd year studying Informatics and Computing Engineering, focusing on software development, algorithms, and AI."
  },
  {
    title: "Secondary Education",
    location: "Colégio do Minho",
    date: "2019 - 2022",
    description: "Completed secondary education with a focus on sciences and mathematics."
  }
];

const experienceItems: TimelineItem[] = [
  {
    title: "Game Development",
    location: "Personal Projects",
    date: "2020 - Present",
    description: "Over 1000 hours of experience developing games with Godot Game Engine, Unity, and PyGame. Built systems for procedural world generation, efficient rendering, player state management, and custom physics engines."
  },
  {
    title: "Programming Projects",
    location: "FEUP",
    date: "2022 - Present",
    description: "Worked on various projects of different difficulty levels provided by FEUP, which helped me understand and work with different programming languages and associated concepts."
  }
];

const TimelineSection: React.FC<{ items: TimelineItem[], title: string }> = ({ items, title }) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-orbitron font-bold mb-8 text-gradient">{title}</h3>
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-space-orange"
          >
            <div className="absolute top-2 left-1.5 w-0.5 h-full bg-space-orange/30"></div>
            <h4 className="text-xl font-bold mb-1">{item.title}</h4>
            <p className="text-white/50 mb-2 flex flex-wrap items-center">
              <span className="mr-2">{item.location}</span> 
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-space-orange/20 text-space-orange rounded-full">
                {item.date}
              </span>
            </p>
            <p className="text-white/70">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-space-gray/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title inline-block mx-auto">Experience & Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <TimelineSection items={educationItems} title="Education" />
          <TimelineSection items={experienceItems} title="Experience" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Future Learning Plans</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            I'm interested in completing Harvard's free course on Artificial Intelligence as soon as possible. 
            I'm fascinated by this field and want to incorporate this knowledge into my future projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;