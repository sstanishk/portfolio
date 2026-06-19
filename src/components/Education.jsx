import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Sri Eshwar College of Engineering',
    duration: '2023 - 2027 (Expected)',
    location: 'Coimbatore, India',
    description: 'Currently in 3rd year. Focusing on key computational fundamentals: Data Structures, Databases, Networks, Cloud Computing, and Operating Systems. Maintaining a strong academic performance.',
    details: 'Relevant Modules: Advanced Java, Cloud Architecture, DBMS, Web Tech'
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'State / Central Board School',
    duration: '2021 - 2023',
    location: 'India',
    description: 'Completed secondary certification with focus on Physics, Chemistry, and Mathematics (PCM). Developed early foundation in logical analysis and computer basics.',
    details: 'Score: First Class with Distinction'
  },
  {
    degree: 'Secondary School Education (Class X)',
    institution: 'State / Central Board School',
    duration: '2019 - 2021',
    location: 'India',
    description: 'Completed general education with primary subjects in Science, Mathematics, English, and Social Studies.',
    details: 'Score: Excellent performance'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
            Academic <span className="text-accent-primary">Education</span>
          </h2>
          <div className="w-16 h-1 bg-accent-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-text-secondary mt-6 text-base sm:text-lg">
            My formal learning path, tracking from B.Tech engineering studies through school education.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border-color"></div>

          <div className="space-y-12">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-12 md:pl-16 text-left"
              >
                {/* Academic Node Cap Icon */}
                <div className="absolute left-0 md:left-2 top-0.5 w-9 h-9 rounded-2xl bg-accent-primary/10 text-accent-primary border border-accent-primary/25 z-10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div className="p-6 rounded-3xl glass border border-glass-border hover-glow space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary font-display">
                      {edu.degree}
                    </h3>
                    
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-primary bg-accent-primary/5 px-3 py-1 rounded-xl border border-accent-primary/10 w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-text-secondary flex items-center gap-2">
                    <span>{edu.institution}</span>
                    <span className="text-text-secondary/50">&bull;</span>
                    <span className="flex items-center gap-1 font-normal text-xs">
                      <MapPin className="w-3.5 h-3.5 text-accent-secondary" />
                      {edu.location}
                    </span>
                  </p>

                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed pt-1">
                    {edu.description}
                  </p>

                  <div className="pt-3 border-t border-border-color/60 flex items-center gap-2 text-xs font-semibold text-text-primary/70">
                    <Award className="w-4 h-4 text-accent-secondary" />
                    <span>{edu.details}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
