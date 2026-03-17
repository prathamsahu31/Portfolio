import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      role: 'B.Tech in Computer Science Engineering',
      company: 'Netaji Subhas University of Technology (NSUT)',
      period: '2025 - 2029',
      description: 'Pursuing a comprehensive curriculum in computer science, focusing on algorithms, data structures, and software engineering principles.',
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-neutral-900/30">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Education</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-2 md:mb-0 md:text-right md:col-span-1">
                  <span className="text-sm font-mono text-emerald-400">{exp.period}</span>
                </div>
                <div className="md:col-span-3 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-10 md:-left-[2.3rem] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-emerald-500 z-10 hidden md:block" />
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute -left-8 md:-left-8 top-4 bottom-[-3rem] w-px bg-white/10 hidden md:block" />
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-neutral-400 mb-4">{exp.company}</h4>
                  <p className="text-neutral-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
