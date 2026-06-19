import React from 'react';
import { Star, GitCommit, Users } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, HackerrankIcon } from './Icons';
import { motion } from 'framer-motion';

const profiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/tanishkss',
    icon: <LeetcodeIcon className="w-8 h-8 text-amber-500" />,
    stats: [
      { label: 'Solved', value: '380+' },
      { label: 'Platform Rank', value: 'Top 12%' },
      { label: 'Accuracy', value: '82%' }
    ],
    details: 'Daily solver. Strong command over Arrays, Trees, Dynamic Programming, and Graph algorithms.',
    extra: (
      <div className="space-y-2.5 pt-2">
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-emerald-400">Easy (150)</span>
          <span className="text-amber-400">Medium (190)</span>
          <span className="text-rose-400">Hard (40)</span>
        </div>
        <div className="w-full h-2 rounded-full bg-border-color overflow-hidden flex">
          <div className="bg-emerald-500 h-full" style={{ width: '40%' }}></div>
          <div className="bg-amber-500 h-full" style={{ width: '50%' }}></div>
          <div className="bg-rose-500 h-full" style={{ width: '10%' }}></div>
        </div>
      </div>
    )
  },
  {
    name: 'GitHub',
    url: 'https://github.com/tanishkss',
    icon: <GithubIcon className="w-8 h-8 text-accent-primary" />,
    stats: [
      { label: 'Commits (YTD)', value: '420+' },
      { label: 'Repositories', value: '18+' },
      { label: 'Contributions', value: 'Active' }
    ],
    details: 'Houses all codebase developments, hackathon repositories, and scripts for Cloud Waste Detector.',
    extra: (
      <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary pt-2">
        <GitCommit className="w-4 h-4 text-accent-primary" />
        <span>Primary languages: Python, Java, JavaScript, Shell</span>
      </div>
    )
  },
  {
    name: 'HackerRank',
    url: 'https://hackerrank.com/profile/tanishkss',
    icon: <HackerrankIcon className="w-8 h-8 text-emerald-400" />,
    stats: [
      { label: 'Problem Solving', value: '5 Stars' },
      { label: 'Java Skill', value: '5 Stars' },
      { label: 'SQL Skill', value: '5 Stars' }
    ],
    details: 'Verified core fundamentals in SQL queries, Java object models, and generic data structures.',
    extra: (
      <div className="flex gap-1 pt-2">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
        ))}
        <span className="text-xs text-text-secondary ml-1 font-semibold">Triple Golden Badge</span>
      </div>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tanishk-ss-34b935374',
    icon: <LinkedinIcon className="w-8 h-8 text-accent-secondary" />,
    stats: [
      { label: 'Connections', value: '500+' },
      { label: 'Engagement', value: 'High' },
      { label: 'Posts / Updates', value: 'Regular' }
    ],
    details: 'Sharing hackathon journeys, AWS learning progressions, and collaborating with fellow developers.',
    extra: (
      <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary pt-2">
        <Users className="w-4 h-4 text-accent-secondary" />
        <span>Open to Cloud & Software internships</span>
      </div>
    )
  }
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-20 relative">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
            Coding <span className="text-accent-primary">Profiles</span>
          </h2>
          <div className="w-16 h-1 bg-accent-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-text-secondary mt-6 text-base sm:text-lg">
            Where I practice programming, track projects, and connect with the tech community.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {profiles.map((profile, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl glass border border-glass-border hover-glow flex flex-col text-left space-y-6 justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-bg-secondary border border-border-color shrink-0">
                      {profile.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary font-display">
                        {profile.name}
                      </h3>
                      <p className="text-xs text-text-secondary font-medium">Click card to visit profile</p>
                    </div>
                  </div>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent-primary hover:underline"
                    aria-label={`Visit Tanishk on ${profile.name}`}
                  >
                    View
                  </a>
                </div>

                {/* Details */}
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mt-4">
                  {profile.details}
                </p>
              </div>

              {/* Statistics */}
              <div className="space-y-4 pt-4 border-t border-border-color/60">
                <div className="grid grid-cols-3 gap-4">
                  {profile.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="text-center md:text-left">
                      <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">{stat.label}</p>
                      <p className="text-base sm:text-lg font-bold text-text-primary mt-1">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Extra graphical layout elements */}
                {profile.extra}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
