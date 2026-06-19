import React from 'react';
import { Award, ShieldCheck, BookOpen, Layers, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const certificationsData = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    status: 'Pursuing',
    icon: <Compass className="w-6 h-6 text-accent-primary" />,
    description: 'Validating overall understanding of AWS Cloud platform, covering basic cloud concepts, security, technology, billing, and pricing models.',
    date: 'In Progress'
  },
  {
    title: 'Cloud Computing Certification',
    issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
    status: 'Completed',
    icon: <BookOpen className="w-6 h-6 text-accent-secondary" />,
    description: 'Comprehensive study of cloud architecture, virtualization, service management, billing, and hands-on resource scaling concepts.',
    date: 'July - October 2025'
  },
  {
    title: 'Java Programming Certification',
    issuer: 'Oracle Academy / Professional Platform',
    status: 'Completed',
    icon: <Award className="w-6 h-6 text-emerald-400" />,
    description: 'Covers core Java structures, object-oriented concepts, exception handling, data structures, and multithreaded workflows.',
    date: 'March 2025'
  },
  {
    title: 'Full Stack Development Certification',
    issuer: 'Tech Institute / Developer Academy',
    status: 'Completed',
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    description: 'Project-focused specialization in modern frontend technologies (React, Tailwind CSS) and backend frameworks (Node, MongoDB).',
    date: 'December 2024'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
            Licenses & <span className="text-accent-secondary">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-accent-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-text-secondary mt-6 text-base sm:text-lg">
            Professional certifications validating my understanding of cloud systems, software engineering, and full-stack development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl glass border border-glass-border hover-glow flex flex-col sm:flex-row gap-5 items-start text-left"
            >
              <div className="p-3.5 rounded-2xl bg-bg-secondary border border-border-color text-text-primary shrink-0">
                {cert.icon}
              </div>

              <div className="space-y-2 flex-grow">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary font-display">
                    {cert.title}
                  </h3>
                  
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    cert.status === 'Pursuing' 
                      ? 'bg-amber-500/10 text-amber-500 border border-amber-500/25' 
                      : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/25'
                  }`}>
                    {cert.status}
                  </span>
                </div>

                <p className="text-sm font-semibold text-text-secondary">
                  {cert.issuer} &bull; <span className="text-xs font-medium">{cert.date}</span>
                </p>

                <p className="text-sm text-text-secondary leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
