import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

export function Experience() {
  const education = [
    {
      institution: 'Netaji Subhas University of Technology (NSUT)',
      degree: 'B.Tech in Computer Science Engineering (CSE)',
      period: '2025 - 2029',
      score: 'CGPA: 7.09',
      location: 'New Delhi, India',
      description:
        'Pursuing an intensive engineering curriculum with deep coursework in Data Structures, Algorithm Design, Operating Systems, Database Management Systems, and Artificial Intelligence.',
      highlights: [
        'Core Focus: Data Structures & Algorithms, Systems Engineering, Modern Web & AI Architecture',
        'Active participant in tech hackathons, coding contests, and open-source software initiatives',
      ],
      current: true,
    },
    {
      institution: 'St. Joseph School',
      degree: 'Senior Secondary & Secondary Education',
      period: 'Aug 2022 - May 2026',
      score: 'Senior Sec: 81% | Junior Sec: 94%',
      location: 'Delhi, India',
      description:
        'Completed senior secondary schooling with strong foundations in Science (PCM) and Computer Science, securing distinction in junior secondary with 94%.',
      highlights: [
        'Junior Secondary: 94% aggregate distinction',
        'Senior Secondary: 81% in Science stream with Computer Science',
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-neutral-900/30">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950 via-neutral-900/40 to-neutral-950 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono text-indigo-400 tracking-wider uppercase">Academic Background</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mt-1 mb-4">Education & Milestones</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mx-auto" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/15 pl-6 sm:pl-10 ml-4 sm:ml-8 space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-neutral-950 border-2 border-indigo-400 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)] group-hover:scale-110 group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all">
                <GraduationCap size={15} />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all backdrop-blur-sm">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.institution}
                    </h3>
                    <h4 className="text-sm sm:text-base font-medium text-cyan-300 mt-0.5">
                      {item.degree}
                    </h4>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-mono font-medium text-indigo-300">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-semibold text-emerald-400">
                      <Award size={12} />
                      {item.score}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-4">
                  <MapPin size={13} className="text-rose-400" />
                  <span>{item.location}</span>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-400">
                      <BookOpen size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
