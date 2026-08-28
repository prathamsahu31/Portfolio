import { useEffect, useRef } from 'react';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    if (!els) return;

    // Stagger reveal on mount
    const timer = setTimeout(() => {
      els.forEach((el) => el.classList.add('visible'));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex flex-col justify-center relative"
      style={{ paddingTop: 'clamp(6rem, 12vh, 10rem)', paddingBottom: 'var(--space-2xl)' }}
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section Label */}
            <p className="reveal section-label">
              01 — Introduction
            </p>

            {/* Main Headline */}
            <h1 className="text-display-xl reveal reveal-delay-1" style={{ color: 'var(--fg)' }}>
              I Build<br />
              <span style={{ color: 'var(--accent)' }}>Intelligent Tools</span><br />
              For The Web.
            </h1>

            {/* Supporting Text */}
            <p
              className="text-body max-w-lg reveal reveal-delay-2"
            >
              CSE undergraduate at <strong style={{ color: 'var(--fg)' }}>NSUT, New Delhi</strong> — building 
              full-stack platforms, AI agents, and developer tools. Proficient in C++, Python, TypeScript, 
              and scalable backend architecture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 reveal reveal-delay-3">
              <a
                href="#work"
                className="btn-primary"
                data-cursor="pointer"
              >
                <span>See My Work</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>

              <a
                href="#contact"
                className="btn-secondary"
                data-cursor="pointer"
              >
                <span>Let's Talk</span>
                <span className="inline-block transition-transform duration-300">↗</span>
              </a>
            </div>

            {/* Quick Info */}
            <div
              className="flex flex-wrap items-center gap-6 pt-6 reveal reveal-delay-4"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <div>
                <p className="text-meta" style={{ marginBottom: '2px' }}>College</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--fg)', fontFamily: 'var(--font-body)' }}>NSUT, Delhi</p>
              </div>
              <div style={{ width: '1px', height: '32px', backgroundColor: 'var(--border)' }} />
              <div>
                <p className="text-meta" style={{ marginBottom: '2px' }}>Program</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--fg)', fontFamily: 'var(--font-body)' }}>B.Tech CSE '29</p>
              </div>
              <div style={{ width: '1px', height: '32px', backgroundColor: 'var(--border)' }} />
              <div>
                <p className="text-meta" style={{ marginBottom: '2px' }}>Location</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--fg)', fontFamily: 'var(--font-body)' }}>Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5 reveal reveal-delay-3">
            <figure className="relative">
              <div
                className="relative overflow-hidden"
                style={{ border: '1px solid var(--border)' }}
              >
                <img
                  src="/profile.jpg"
                  alt="Pratham Sahu — AI/ML & Full-Stack Developer"
                  className="w-full aspect-[4/5] object-cover"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://raw.githubusercontent.com/prathamsahu31/Portfolio/refs/heads/main/src/components/Profile%20Photo%20872x872.jpg";
                  }}
                />
              </div>
              <figcaption
                className="flex items-center justify-between pt-3 text-meta"
              >
                <span>fig. 01 — the developer</span>
                <span style={{ color: 'var(--accent)' }}>Open to work</span>
              </figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  );
}
