import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'gamedev' | 'languages';
}

const skills: Skill[] = [
  { name: 'C++', level: 90, category: 'programming' },
  { name: 'Python', level: 85, category: 'programming' },
  { name: 'GDScript', level: 95, category: 'programming' },
  { name: 'GLSL', level: 80, category: 'programming' },
  { name: 'JavaScript', level: 75, category: 'programming' },
  { name: 'PHP', level: 65, category: 'programming' },
  { name: 'HTML/CSS', level: 80, category: 'programming' },
  { name: 'SQL', level: 70, category: 'programming' },
  { name: 'C', level: 85, category: 'programming' },
  { name: 'Haskell', level: 60, category: 'programming' },
  { name: 'C#', level: 70, category: 'programming' },
  { name: 'Dart', level: 65, category: 'programming' },
  { name: 'Java', level: 75, category: 'programming' },
  { name: 'Assembly', level: 60, category: 'programming' },
  { name: 'Godot Engine', level: 95, category: 'gamedev' },
  { name: 'Unity', level: 70, category: 'gamedev' },
  { name: 'Perlin Noise', level: 85, category: 'gamedev' },
  { name: 'Game Physics', level: 80, category: 'gamedev' },
  { name: '3D Rendering', level: 75, category: 'gamedev' },
  { name: 'Portuguese', level: 100, category: 'languages' },
  { name: 'English', level: 90, category: 'languages' },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'programming' | 'gamedev' | 'languages'>('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'programming', name: 'Programming' },
    { id: 'gamedev', name: 'Game Development' },
    { id: 'languages', name: 'Languages' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title inline-block mx-auto">My Skills</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
                  activeCategory === category.id
                    ? 'bg-space-orange text-white'
                    : 'bg-space-gray/50 text-white/70 hover:bg-space-gray'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * (index % 10) }}
              className="group"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-medium text-white group-hover:text-space-orange transition-colors">
                  {skill.name}
                </h3>
                <span className="text-white/50">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-space-gray/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + 0.05 * (index % 10) }}
                  className="progress-bar"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;