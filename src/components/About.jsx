import React from 'react';
import { Cloud, Code2, Rocket, Brain, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: <Cloud className="w-6 h-6 text-accent-primary" />,
    title: 'Cloud & DevOps',
    description: 'Learning AWS, cloud architectures, and core DevOps practices including containerization with Docker.',
  },
  {
    icon: <Code2 className="w-6 h-6 text-accent-secondary" />,
    title: 'Full Stack Dev',
    description: 'Building responsive frontends in React and designing robust backends using Node.js, Express, and Databases.',
  },
  {
    icon: <Brain className="w-6 h-6 text-violet-500" />,
    title: 'Problem Solver',
    description: 'Practicing Data Structures and Algorithms on platforms like LeetCode and HackerRank to prepare for engineering roles.',
  },
  {
    icon: <Rocket className="w-6 h-6 text-emerald-500" />,
    title: 'Hackathon Enthusiast',
    description: 'Collaborating in fast-paced hackathons to engineer AI-driven and real-world software solutions.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
            About <span className="text-accent-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-text-secondary mt-6 text-base sm:text-lg text-center">
            I am a 3rd-year Information Technology student at <strong>Sri Eshwar College of Engineering</strong>, driven by a deep interest in Cloud Engineering and Software Development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main textual statement */}
          <motion.div 
            className="lg:col-span-6 space-y-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-text-primary">
              Passionate about building impactful digital solutions.
            </h3>
            
            <p className="text-text-secondary leading-relaxed">
              As a B.Tech IT student at <strong>Sri Eshwar College of Engineering</strong>, I balance academic foundations like Data Structures, DBMS, and Networking with hands-on technical learning. My primary focus is on mastering <strong>Amazon Web Services (AWS)</strong>, understanding <strong>Linux systems</strong>, and writing scalable applications.
            </p>

            <p className="text-text-secondary leading-relaxed">
              I am actively preparing for software development and cloud engineering placement roles. By combining frontend design skills with cloud infrastructure knowledge, I aim to build secure, deployable, and high-performance applications.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass border border-glass-border p-4 rounded-2xl">
                <p className="text-3xl font-extrabold text-accent-primary">3rd</p>
                <p className="text-xs text-text-secondary mt-1 font-semibold uppercase tracking-wider">Year B.Tech Student</p>
              </div>
              <div className="glass border border-glass-border p-4 rounded-2xl">
                <p className="text-3xl font-extrabold text-accent-secondary">AWS</p>
                <p className="text-xs text-text-secondary mt-1 font-semibold uppercase tracking-wider">Cloud Practitioner (Pursuing)</p>
              </div>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div 
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl glass border border-glass-border hover-glow flex flex-col text-left space-y-3"
              >
                <div className="p-3 rounded-xl bg-bg-primary w-fit border border-border-color">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-text-primary">{item.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
