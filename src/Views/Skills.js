import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { type: 'Languages', items: ['Java', 'Python', 'Go'] },
  { type: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { type: 'Framework', items: ['Spring Boot', 'Flask'] },
  { type: 'Tools', items: ['Git', 'Docker', 'VS Code'] },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-16 md:py-24 px-6 md:px-16 lg:px-24">
      <p className="section-label">SKILLS</p>

      <motion.div
        className="mt-8 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {skillsData.map((skill, index) => (
          <div key={skill.type}>
            {/* Separator */}
            <div className="gradient-line w-full" />
            
            {/* Skill Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 gap-4 group">
              <h3 className="text-sm sm:text-base uppercase font-semibold tracking-wider text-white w-40 shrink-0">
                {skill.type}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs sm:text-sm font-mono text-gray-400 px-3 py-1.5 rounded-full border border-gray-800 group-hover:border-indigo-500/30 group-hover:text-gray-200 transition-all duration-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="gradient-line w-full" />
      </motion.div>
    </section>
  );
};

export default Skills;
