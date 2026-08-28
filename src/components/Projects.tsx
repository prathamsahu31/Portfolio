import React from 'react';
import { ExternalLink, Github, Sparkles, Bot, LineChart } from 'lucide-react';
import { sfx } from '../utils/sfx';

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  featured?: boolean;
  description: string;
  bullets: string[];
  tech: string[];
  github: string;
  live?: string;
  accentColor: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 'finflex',
    number: '01',
    title: 'FinFlex',
    subtitle: 'AI Personal Finance Platform & Telegram Agent',
    role: 'Full-Stack Developer',
    timeline: 'Feb 2026 - Mar 2026',
    featured: true,
    description:
      'An intelligent personal finance platform with an autonomous Telegram agent that converts natural-language receipts/expenses into structured records and analyzes financial habits.',
    bullets: [
      'Built full-stack web dashboard with React, TypeScript, Express, and Supabase / PostgreSQL.',
      'Developed an autonomous Telegram bot converting natural-language receipts/expenses into structured records.',
      'Integrated Google Gemini API to analyze spending patterns and generate automated personalized saving advice.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Supabase', 'Gemini API', 'Telegram-Bot'],
    github: 'https://github.com/prathamsahu31/FinFlex',
    live: 'https://finflex-demo.vercel.app',
    accentColor: 'bg-emerald-600',
    icon: <Sparkles className="text-blue-600" size={24} />,
  },
  {
    id: 'vidhya',
    number: '02',
    title: 'Vidhya',
    subtitle: 'ML-Powered Student Academic Early-Warning System',
    role: 'ML / Full-Stack Developer',
    timeline: 'Aug 2025 - Sep 2025',
    featured: true,
    description:
      'An end-to-end Machine Learning early-warning platform that aggregates multidimensional academic metrics to predict academic dropouts before exams.',
    bullets: [
      'Trained predictive classification models using Python, Scikit-learn, and Pandas on multidimensional academic metrics.',
      'Engineered real-time educator dashboard with color-coded risk alerts and drill-down performance analytics.',
      'Automated notification pipeline triggering instant alerts to assigned mentors and guardians.',
    ],
    tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'TypeScript', 'MERN Stack', 'Supabase', 'Telegram-Bot', 'SQL'],
    github: 'https://github.com/prathamsahu31/VIDHYA',
    accentColor: 'bg-indigo-600',
    icon: <LineChart className="text-blue-600" size={24} />,
  },
  {
    id: 'fastmcp',
    number: '03',
    title: 'FastMCP AI Tool Ecosystem',
    subtitle: 'Model Context Protocol & Autonomous Agent Utilities',
    role: 'AI & Systems Engineer',
    timeline: '2026',
    featured: false,
    description:
      'Custom Model Context Protocol (MCP) server architecture exposing native system capabilities, database queries, and secure tool calling to autonomous AI models.',
    bullets: [
      'Implemented modular FastMCP servers in Python for cross-application context sharing and tool orchestration.',
      'Engineered containerized Docker microservices for isolated script execution and sandbox workflows.',
      'Optimized JSON-RPC protocol throughput with structured input schema validation.',
    ],
    tech: ['FastMCP', 'Python', 'AI Agents', 'Docker', 'Linux', 'LangChain', 'MCP'],
    github: 'https://github.com/prathamsahu31',
    accentColor: 'bg-blue-600',
    icon: <Bot className="text-blue-600" size={24} />,
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      {/* Section Header with Stamp and Sujal's Dashed Line */}
      <div className="mx-auto max-w-6xl px-6 pt-20 lg:px-8">
        <div>
          <span className="inline-block bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-paper shadow-print-sm">
            Build log
          </span>
          <div className="mt-5 flex items-baseline gap-6">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-ink">
              Shipped & <span className="marker whitespace-nowrap">in the wild</span>
            </h2>
            <span
              aria-hidden="true"
              className="hidden flex-1 origin-left border-t-2 border-dashed border-ink/30 sm:block"
            />
          </div>
        </div>
      </div>

      {/* Project Cards Stack */}
      <div className="mx-auto max-w-6xl space-y-16 px-6 py-14 lg:px-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative border-2 border-ink bg-paper p-6 sm:p-8 shadow-print transition-all duration-300 hover:shadow-print-lg"
          >
            {/* Top Bar with Number & Timeline */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-ink/15 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center border-2 border-ink bg-ink font-mono text-xs font-bold text-paper">
                  {project.number}
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                  {project.role}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted border border-ink/20 px-2.5 py-1 bg-paper">
                  {project.timeline}
                </span>
                {project.featured && (
                  <span className="border-2 border-ink bg-blue-600 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-paper shadow-print-sm">
                    FEATURED
                  </span>
                )}
              </div>
            </div>

            {/* Project Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-blue-600">
                  {project.subtitle}
                </p>

                <p className="text-base leading-relaxed text-muted mt-2">
                  {project.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 pt-2">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-ink/80">
                      <span className="text-blue-600 font-bold mt-0.5">▪</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-ink bg-paper px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-ink shadow-print-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links / Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sfx.playStamp()}
                      className="inline-flex items-center gap-2 border-2 border-ink bg-blue-600 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper shadow-print-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sfx.playClick()}
                    className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink shadow-print-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-neutral-100 transition-all"
                  >
                    <Github size={15} />
                    <span>Source Code ↗</span>
                  </a>
                </div>
              </div>

              {/* Right Mockup / Visual Window */}
              <div className="lg:col-span-5">
                <div className="border-2 border-ink bg-paper shadow-print-sm overflow-hidden">
                  {/* Browser Window Header */}
                  <div className="flex items-center justify-between border-b-2 border-ink bg-neutral-200 px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full border border-ink bg-red-500"></span>
                      <span className="h-2.5 w-2.5 rounded-full border border-ink bg-yellow-400"></span>
                      <span className="h-2.5 w-2.5 rounded-full border border-ink bg-emerald-500"></span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {project.id}.app
                    </span>
                    <div className="w-8"></div>
                  </div>

                  {/* Window Content */}
                  <div className="aspect-[4/3] p-6 flex flex-col justify-between ruled relative">
                    <div className="flex justify-between items-start">
                      <div className="p-3 border-2 border-ink bg-paper shadow-print-sm">
                        {project.icon}
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase bg-ink text-paper px-2 py-0.5">
                        BUILD 2026
                      </span>
                    </div>

                    <div>
                      <span className="font-display font-bold text-2xl text-ink">
                        {project.title}
                      </span>
                      <p className="font-mono text-xs text-muted mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="border-t border-ink/20 pt-3 flex justify-between items-center text-[10px] font-mono text-muted uppercase">
                      <span>Verified System</span>
                      <span className="text-blue-600 font-bold">● Active</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>

      {/* GitHub Callout Box */}
      <div className="mx-auto max-w-6xl px-6 pb-12 lg:px-8 text-center">
        <div className="border-2 border-ink bg-paper p-6 shadow-print-sm inline-block">
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
            Want to see more code & open source utilities?
          </p>
          <a
            href="https://github.com/prathamsahu31"
            target="_blank"
            rel="noreferrer"
            onClick={() => sfx.playStamp()}
            className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper shadow-print-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            <Github size={16} />
            <span>Visit @prathamsahu31 on GitHub ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
