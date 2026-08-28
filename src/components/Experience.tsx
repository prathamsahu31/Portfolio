import { useEffect, useRef } from 'react';

const education = [
  {
    year: '2025 — 2029',
    title: 'B.Tech in Computer Science Engineering',
    institution: 'Netaji Subhas University of Technology (NSUT)',
    location: 'New Delhi, India',
    detail: 'CGPA: 7.09 — Core focus on Data Structures & Algorithms, Systems Engineering, Modern Web & AI Architecture. Active participant in tech hackathons, coding contests, and open-source initiatives.',
    current: true,
  },
  {
    year: '2022 — 2026',
    title: 'Senior Secondary & Secondary Education',
    institution: 'St. Joseph School',
    location: 'Delhi, India',
    detail: 'Senior Secondary: 81% in Science stream with Computer Science. Junior Secondary: 94% aggregate distinction.',
    current: false,
  },
];

export function Experience() {
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
          <p className="section-label">04 — Background</p>
          <h2 className="text-display-lg" style={{ color: 'var(--fg)', marginBottom: 'var(--space-xl)' }}>
            Education &<br />
            <span style={{ color: 'var(--accent)' }}>Milestones</span>
          </h2>
        </div>

        {/* Timeline Entries */}
        <div className="space-y-0">
          {education.map((item, index) => (
            <div
              key={item.title}
              className="reveal"
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                {/* Year */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3">
                    <p className="text-meta" style={{ fontSize: '0.6875rem' }}>
                      {item.year}
                    </p>
                    {item.current && (
                      <span
                        className="text-meta px-2 py-0.5"
                        style={{
                          fontSize: '0.5625rem',
                          color: 'var(--accent)',
                          border: '1px solid var(--accent)',
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <h3
                    className="text-display-sm"
                    style={{ color: 'var(--fg)', marginBottom: '0.25rem' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm font-medium"
                    style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', marginBottom: '0.75rem' }}
                  >
                    {item.institution} — {item.location}
                  </p>
                  <p className="text-body max-w-2xl" style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
