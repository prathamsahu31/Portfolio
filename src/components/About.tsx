import { useEffect, useRef } from 'react';

const tools = [
  { name: 'C++', desc: 'DSA & Algorithms' },
  { name: 'Python', desc: 'AI/ML & Backend' },
  { name: 'JavaScript', desc: 'Full-Stack Web' },
  { name: 'TypeScript', desc: 'Type-Safe Apps' },
  { name: 'React', desc: 'Modern Frontend' },
  { name: 'FastAPI', desc: 'High-Perf Python' },
  { name: 'FastMCP', desc: 'Model Context Protocol' },
  { name: 'Node.js', desc: 'Backend Runtime' },
  { name: 'Express', desc: 'REST APIs' },
  { name: 'Flask', desc: 'ML Serving' },
  { name: 'Gemini API', desc: 'GenAI & LLMs' },
  { name: 'AI Agents', desc: 'Autonomous Workflows' },
  { name: 'Scikit-learn', desc: 'Machine Learning' },
  { name: 'Pandas', desc: 'Data Processing' },
  { name: 'PostgreSQL', desc: 'SQL & Relations' },
  { name: 'Supabase', desc: 'Auth, Storage & DB' },
  { name: 'Firebase', desc: 'Realtime Cloud' },
  { name: 'Docker', desc: 'Containerization' },
  { name: 'Linux', desc: 'CLI & Scripting' },
  { name: 'Git & GitHub', desc: 'Version Control' },
  { name: 'SQL', desc: 'Relational DBs' },
  { name: 'Tailwind CSS', desc: 'Styling & UI' },
  { name: 'Vite', desc: 'Modern Bundling' },
  { name: 'MCP', desc: 'Tool Orchestration' },
];

export function Toolbox() {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="container-editorial">
        {/* Section Header */}
        <div className="reveal">
          <p className="section-label">02 — Toolbox</p>
          <h2 className="text-display-lg" style={{ color: 'var(--fg)', marginBottom: 'var(--space-xl)' }}>
            Tools I Reach<br />
            <span style={{ color: 'var(--accent)' }}>For Daily</span>
          </h2>
        </div>

        {/* Tool Wall */}
        <div className="flex flex-wrap gap-3 reveal reveal-delay-2">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group relative px-5 py-3 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                border: '1px solid var(--border)',
                backgroundColor: 'transparent',
              }}
              data-cursor="pointer"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--fg)';
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--fg)';
                const nameEl = e.currentTarget.querySelector('.tool-name') as HTMLElement;
                const descEl = e.currentTarget.querySelector('.tool-desc') as HTMLElement;
                if (nameEl) nameEl.style.color = 'var(--bg)';
                if (descEl) { descEl.style.color = 'var(--bg)'; descEl.style.opacity = '0.7'; }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent';
                const nameEl = e.currentTarget.querySelector('.tool-name') as HTMLElement;
                const descEl = e.currentTarget.querySelector('.tool-desc') as HTMLElement;
                if (nameEl) nameEl.style.color = 'var(--fg)';
                if (descEl) { descEl.style.color = 'var(--muted)'; descEl.style.opacity = '1'; }
              }}
            >
              <span
                className="tool-name block text-sm font-semibold transition-colors duration-200"
                style={{ color: 'var(--fg)', fontFamily: 'var(--font-body)' }}
              >
                {tool.name}
              </span>
              <span
                className="tool-desc block text-meta mt-0.5 transition-colors duration-200"
                style={{ fontSize: '0.5625rem' }}
              >
                {tool.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
