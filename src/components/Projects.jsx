import React, { useState } from 'react';
import { ExternalLink, Layers, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Smart Cloud Waste Detector',
    category: 'Cloud & DevOps',
    tech: ['Python', 'Flask', 'SQLite', 'AWS Concepts'],
    description: 'Detects underutilized cloud resources and provides optimization recommendations to reduce infrastructure costs.',
    features: ['Resource Monitoring', 'Cost Optimization Suggestions', 'Dashboard Analytics'],
    github: 'https://github.com',
    live: 'https://demo.com'
  },
  {
    id: 2,
    title: 'Student Management System',
    category: 'Full Stack',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    description: 'A complete CRUD application for managing student records featuring user search, profiles, and record modifications.',
    features: ['Add Student', 'Update Student', 'Delete Student', 'Search Student'],
    github: 'https://github.com',
    live: 'https://demo.com'
  },
  {
    id: 3,
    title: 'Smart Habit Tracker',
    category: 'Other',
    tech: ['JavaScript', 'SQLite', 'CSS3'],
    description: 'Tracks daily habits and helps users maintain consistency through progress monitoring, streaks, and analytics.',
    features: ['Habit Tracking', 'Daily Progress', 'Statistics Dashboard'],
    github: 'https://github.com',
    live: 'https://demo.com'
  },
  {
    id: 4,
    title: 'WorkerSphere (Hackathon Project)',
    category: 'Full Stack',
    tech: ['React', 'Node.js', 'AI Integration', 'Tailwind CSS'],
    description: 'A platform that identifies workplace issues, predicts risks, and provides AI-powered recommendations to improve worker safety and productivity.',
    features: ['Worker Feedback Analysis', 'AI Recommendations', 'Safety Monitoring', 'Productivity Insights'],
    github: 'https://github.com',
    live: 'https://demo.com'
  }
];

const categories = ['All', 'Cloud & DevOps', 'Full Stack', 'Other'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
            Featured <span className="text-accent-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-accent-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-text-secondary mt-6 text-base sm:text-lg">
            A selection of my works covering cloud resource management, full-stack systems, and AI integrations built during hackathons.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/20'
                  : 'glass border border-glass-border text-text-secondary hover:text-text-primary hover:border-accent-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="p-6 sm:p-8 rounded-3xl glass border border-glass-border hover-glow flex flex-col text-left justify-between h-full"
              >
                <div>
                  {/* Top Badge & Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-primary/10 text-accent-primary border border-accent-primary/25">
                      {project.category === 'Cloud & DevOps' ? <Cloud className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-text-primary mb-3">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features list */}
                  <div className="mb-6 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-text-primary/70">Key Features</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-sm text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-accent-secondary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-bg-secondary border border-border-color text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border-color/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border-color hover:border-accent-primary text-text-primary text-sm font-semibold transition-all duration-300 cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent-primary text-white text-sm font-semibold hover:opacity-90 shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
