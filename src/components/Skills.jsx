import React from 'react';
import { Code2, LayoutTemplate, Database, HardDrive, Cpu, ShieldAlert, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <Code2 className="w-5 h-5 text-accent-primary" />,
    skills: ['Java', 'Python', 'JavaScript', 'SQL']
  },
  {
    category: 'Frontend Development',
    icon: <LayoutTemplate className="w-5 h-5 text-accent-secondary" />,
    skills: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS']
  },
  {
    category: 'Backend Development',
    icon: <HardDrive className="w-5 h-5 text-purple-400" />,
    skills: ['Node.js', 'Express.js', 'RESTful APIs']
  },
  {
    category: 'Databases',
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ['MongoDB', 'SQLite', 'PostgreSQL']
  },
  {
    category: 'Cloud & DevOps',
    icon: <GitFork className="w-5 h-5 text-amber-500" />,
    skills: ['AWS (Amazon Web Services)', 'Docker', 'Linux CLI', 'Git', 'GitHub']
  },
  {
    category: 'Core Subjects',
    icon: <Cpu className="w-5 h-5 text-rose-400" />,
    skills: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
            Technical <span className="text-accent-secondary">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-accent-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-text-secondary mt-6 text-base sm:text-lg">
            A breakdown of my technical toolkit, ranging from core software engineering fundamentals to cloud operations.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillsData.map((categoryObj, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-3xl glass border border-glass-border hover-glow flex flex-col text-left space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-bg-secondary border border-border-color">
                  {categoryObj.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary font-display">{categoryObj.category}</h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {categoryObj.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-xl text-sm font-medium bg-bg-secondary border border-border-color text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
