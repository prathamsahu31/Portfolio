import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, Layers, Bot, Activity, CheckCircle2 } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  timeline: string;
  category: 'all' | 'ai' | 'fullstack' | 'systems';
  description: string;
  bulletPoints: string[];
  tags: string[];
  github: string;
  live?: string;
  accentColor: string;
  featured: boolean;
  icon: React.ReactNode;
}

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'fullstack' | 'systems'>('all');

  const projects: Project[] = [
    {
      title: 'FinFlex',
      subtitle: 'AI Personal Finance Platform & Telegram Agent',
      timeline: 'Feb 2026 - Mar 2026',
      category: 'ai',
      description:
        'An intelligent full-stack personal finance platform with an autonomous Telegram agent that parses natural-language messages into structured financial transactions in real-time.',
      bulletPoints: [
        'Built full-stack web dashboard with React, TypeScript, Express, and Supabase / PostgreSQL.',
        'Developed an autonomous Telegram bot converting natural-language receipts/expenses into structured records.',
        'Integrated Google Gemini API to analyze spending patterns and generate automated personalized saving advice.',
      ],
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Supabase', 'Gemini API', 'Telegram Bot'],
      github: 'https://github.com/prathamsahu31/FinFlex',
      live: 'https://finflex-demo.vercel.app',
      accentColor: 'from-emerald-500/20 via-cyan-500/10 to-transparent',
      featured: true,
      icon: <Sparkles className="text-emerald-400" size={24} />,
    },
    {
      title: 'VIDHYA',
      subtitle: 'ML-Powered Student Academic Early-Warning System',
      timeline: 'Aug 2025 - Sep 2025',
      category: 'ai',
      description:
        'An end-to-end Machine Learning early-warning platform that aggregates student attendance, historical test scores, and fee records to predict academic dropouts before exams.',
      bulletPoints: [
        'Trained predictive classification models using Python, Scikit-learn, and Pandas on multidimensional academic metrics.',
        'Engineered real-time educator dashboard with color-coded risk alerts and drill-down performance analytics.',
        'Automated notification pipeline triggering instant SMS/email alerts to assigned mentors and guardians.',
      ],
      tags: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'MERN Stack', 'Git'],
      github: 'https://github.com/prathamsahu31/VIDHYA',
      accentColor: 'from-indigo-500/20 via-purple-500/10 to-transparent',
      featured: true,
      icon: <Activity className="text-indigo-400" size={24} />,
    },
    {
      title: 'FastMCP AI Tool Ecosystem',
      subtitle: 'Model Context Protocol & Autonomous Agent Utilities',
      timeline: '2026',
      category: 'systems',
      description:
        'Custom Model Context Protocol (MCP) server architecture exposing native system capabilities, database queries, and secure tool calling to autonomous AI models.',
      bulletPoints: [
        'Implemented modular FastMCP servers in Python for cross-application context sharing and tool orchestration.',
        'Engineered containerized Docker microservices for isolated script execution and sandbox workflows.',
        'Optimized JSON-RPC protocol throughput with structured input schema validation.',
      ],
      tags: ['FastMCP', 'Python', 'AI Agents', 'Docker', 'Linux', 'MCP'],
      github: 'https://github.com/prathamsahu31',
      accentColor: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      featured: false,
      icon: <Bot className="text-cyan-400" size={24} />,
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Portfolio Showcase</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mt-1 mb-3">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI / ML & Agents' },
              { id: 'systems', label: 'Systems & Tools' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-emerald-500 text-neutral-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden hover:-translate-y-2 hover:shadow-2xl backdrop-blur-md"
              >
                {/* Visual Header Banner */}
                <div className={`p-6 bg-gradient-to-b ${project.accentColor} border-b border-white/10 relative`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-950/80 border border-white/10 flex items-center justify-center shadow-lg">
                      {project.icon}
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-xl bg-neutral-950/80 border border-white/15 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/40 transition-all"
                        aria-label="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 rounded-xl bg-emerald-500 text-neutral-950 flex items-center justify-center font-bold hover:bg-emerald-400 transition-all shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                          aria-label="Live Project Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-1">
                      <span>{project.timeline}</span>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-semibold text-[10px]">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-cyan-300 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2 pt-1">
                      {project.bulletPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/5 border border-white/10 text-neutral-300 group-hover:border-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Repositories Link CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/prathamsahu31"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-neutral-300 hover:text-white hover:bg-white/10 hover:border-emerald-500/40 text-sm font-medium transition-all group"
          >
            <Github size={18} className="group-hover:rotate-12 transition-transform" />
            <span>Explore more repositories on GitHub</span>
            <ExternalLink size={14} className="text-neutral-500 group-hover:text-emerald-400 transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
}
