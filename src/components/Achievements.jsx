import React from 'react';
import { Trophy, Code2, Cloud, HeartHandshake, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    title: 'Hackathon Competitor',
    icon: <Trophy className="w-5 h-5 text-accent-primary" />,
    description: 'Participated in multiple university and city-level hackathons. Collaborated in rapid prototype development, leading to the creation of projects like WorkerSphere (safety monitoring platform).',
    badge: 'Collaborative Engineering'
  },
  {
    title: 'Real-World Project Builder',
    icon: <Code2 className="w-5 h-5 text-accent-secondary" />,
    description: 'Designed and deployed several functional web applications like the Student Management System and cloud resource optimization utilities to demonstrate practical code organization skills.',
    badge: 'Full-Stack Deployed'
  },
  {
    title: 'Active Problem Solver on LeetCode',
    icon: <Compass className="w-5 h-5 text-violet-400" />,
    description: 'Consistently practice algorithms and data structures on LeetCode and HackerRank, optimizing for runtime efficiency and space complexity. Strengthened analytical logic and programming competence.',
    badge: '350+ Problems Solved'
  },
  {
    title: 'Cloud & Infrastructure Enthusiast',
    icon: <Cloud className="w-5 h-5 text-amber-500" />,
    description: 'Built projects exploring underutilized resources (Smart Cloud Waste Detector) and focused on learning cloud scaling capabilities, virtual machines, database attachments, and basic containerization.',
    badge: 'DevOps & Systems'
  },
  {
    title: 'Continuous AWS Journey',
    icon: <HeartHandshake className="w-5 h-5 text-rose-400" />,
    description: 'Consistently building services, studying official AWS whitepapers, and performing practical tasks in AWS free tier consoles to master EC2, S3, IAM, and Serverless fundamentals.',
    badge: 'AWS Skillset'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
            Key <span className="text-accent-primary">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-accent-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-text-secondary mt-6 text-base sm:text-lg">
            Milestones and practices reflecting my growth as a developer, problem-solver, and cloud enthusiast.
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line */}
          <div className="timeline-line"></div>

          <div className="space-y-12">
            {achievementsData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Point */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[6px] md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-accent-primary ring-4 ring-accent-primary/20 z-20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  </div>

                  {/* Spacer or Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="p-6 rounded-3xl glass border border-glass-border hover-glow flex flex-col text-left space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-bg-secondary border border-border-color text-text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-text-primary font-display">
                            {item.title}
                          </h3>
                          <span className="inline-block mt-1 px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-accent-primary/10 text-accent-primary">
                            {item.badge}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-text-secondary leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Empty space on opposite side for desktop */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
