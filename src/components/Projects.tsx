import React, { useEffect, useRef } from 'react';

interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    number: '05.01',
    title: 'FinFlex',
    subtitle: 'AI Personal Finance Platform & Telegram Agent',
    description:
      'An intelligent full-stack personal finance platform with an autonomous Telegram agent that parses natural-language messages into structured financial transactions in real-time. Built with React, TypeScript, Express, and Supabase. Integrated Google Gemini API to analyze spending patterns and generate automated personalized saving advice.',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Supabase', 'Gemini API', 'Telegram Bot'],
    year: '2026',
    github: 'https://github.com/prathamsahu31/FinFlex',
    live: 'https://finflex-demo.vercel.app',
  },
  {
    number: '05.02',
    title: 'VIDHYA',
    subtitle: 'ML-Powered Student Academic Early-Warning System',
    description:
      'An end-to-end Machine Learning early-warning platform that aggregates student attendance, historical test scores, and fee records to predict academic dropouts before exams. Trained predictive classification models using Python, Scikit-learn, and Pandas. Engineered real-time educator dashboard with color-coded risk alerts.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'MERN Stack', 'Git'],
    year: '2025',
    github: 'https://github.com/prathamsahu31/VIDHYA',
  },
  {
    number: '05.03',
    title: 'FastMCP AI Tool Ecosystem',
    subtitle: 'Model Context Protocol & Autonomous Agent Utilities',
    description:
      'Custom Model Context Protocol server architecture exposing native system capabilities, database queries, and secure tool calling to autonomous AI models. Implemented modular FastMCP servers in Python for cross-application context sharing. Engineered containerized Docker microservices for isolated script execution.',
    tags: ['FastMCP', 'Python', 'AI Agents', 'Docker', 'Linux', 'MCP'],
    year: '2026',
    github: 'https://github.com/prathamsahu31',
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="section-padding" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="container-editorial">
        {/* Section Header */}
        <div className="reveal">
          <p className="section-label">05 — Build Log</p>
          <h2 className="text-display-lg" style={{ color: 'var(--fg)', marginBottom: 'var(--space-xl)' }}>
            Shipped &<br />
            <span style={{ color: 'var(--accent)' }}>In The Wild</span>
          </h2>
        </div>

        {/* Project List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectEntry key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 reveal" style={{ transitionDelay: '400ms' }}>
          <a
            href="https://github.com/prathamsahu31"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            data-cursor="pointer"
          >
            <span>Explore More on GitHub</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectEntry({ project, index }: { key?: React.Key; project: Project; index: number }) {
  return (
    <div
      className="reveal group"
      style={{
        borderTop: '1px solid var(--border)',
        transitionDelay: `${200 + index * 150}ms`,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 md:py-14">
        {/* Left Meta */}
        <div className="lg:col-span-4">
          <p className="text-meta mb-3" style={{ fontSize: '0.5625rem' }}>
            {project.number}
          </p>
          <h3
            className="text-display-sm transition-all duration-300 group-hover:translate-x-1"
            style={{ color: 'var(--fg)' }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm font-medium mt-1"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
          >
            {project.subtitle}
          </p>

          <p className="text-meta mt-4">{project.year}</p>

          {/* Links */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-meta link-editorial"
              style={{ color: 'var(--muted)' }}
              data-cursor="pointer"
            >
              GitHub ↗
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-meta link-editorial"
                style={{ color: 'var(--accent)' }}
                data-cursor="pointer"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-8">
          <p className="text-body mb-6" style={{ maxWidth: '640px' }}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-meta px-3 py-1.5"
                style={{
                  border: '1px solid var(--border)',
                  fontSize: '0.5625rem',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Preview Area */}
          <div
            className="mt-8 project-image-wrapper"
            style={{
              backgroundColor: 'var(--bg-alt)',
              border: '1px solid var(--border)',
              aspectRatio: '16/9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            data-cursor="project"
          >
            {/* Elegant placeholder treatment using project branding */}
            <div className="text-center p-8">
              <p
                className="font-display font-bold text-3xl md:text-5xl"
                style={{ color: 'var(--border)', letterSpacing: '-0.02em' }}
              >
                {project.title}
              </p>
              <p
                className="text-meta mt-3"
                style={{ color: 'var(--border)' }}
              >
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
