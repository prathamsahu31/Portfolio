import { useEffect, useRef, useState } from 'react';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

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

  const copyEmail = () => {
    navigator.clipboard.writeText('prathamsahu31@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section ref={sectionRef} id="contact" className="section-padding">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="reveal">
          <p className="section-label">06 — Open Line</p>
        </div>

        {/* Giant CTA */}
        <h2
          className="text-display-xl reveal reveal-delay-1"
          style={{ color: 'var(--fg)', marginBottom: 'var(--space-lg)', maxWidth: '900px' }}
        >
          Got Something<br />
          <span style={{ color: 'var(--accent)' }}>Worth Building?</span>
        </h2>

        <p className="text-body max-w-lg reveal reveal-delay-2" style={{ marginBottom: 'var(--space-xl)' }}>
          Open to summer internship opportunities, freelance engineering projects,
          AI workflow discussions, or software collaborations. Let's talk.
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap items-center gap-4 reveal reveal-delay-3">
          <a
            href="mailto:prathamsahu31@gmail.com"
            className="btn-primary"
            data-cursor="pointer"
          >
            <span>Email Me</span>
            <span>↗</span>
          </a>

          <button
            onClick={copyEmail}
            className="btn-secondary"
            data-cursor="pointer"
          >
            <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            <span>{copied ? '✓' : '⎘'}</span>
          </button>
        </div>

        {/* Social Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-0 mt-16 reveal reveal-delay-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <a
            href="https://www.linkedin.com/in/prathamsahu31/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between py-5 transition-colors duration-300"
            style={{ borderBottom: '1px solid var(--border)' }}
            data-cursor="pointer"
          >
            <span className="text-meta" style={{ color: 'var(--muted)' }}>LinkedIn</span>
            <span
              className="text-meta transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: 'var(--muted)' }}
            >↗</span>
          </a>
          <a
            href="https://github.com/prathamsahu31"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between py-5 transition-colors duration-300"
            style={{
              borderBottom: '1px solid var(--border)',
              borderLeft: 'none',
            }}
            data-cursor="pointer"
          >
            <span className="text-meta" style={{ color: 'var(--muted)' }}>GitHub</span>
            <span
              className="text-meta transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: 'var(--muted)' }}
            >↗</span>
          </a>
          <a
            href="https://x.com/PrathamSahu31"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between py-5 transition-colors duration-300"
            style={{
              borderBottom: '1px solid var(--border)',
              borderLeft: 'none',
            }}
            data-cursor="pointer"
          >
            <span className="text-meta" style={{ color: 'var(--muted)' }}>Twitter / X</span>
            <span
              className="text-meta transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: 'var(--muted)' }}
            >↗</span>
          </a>
        </div>

        {/* Phone & Resume */}
        <div
          className="flex flex-wrap items-center gap-8 mt-8 reveal reveal-delay-5"
        >
          <div>
            <p className="text-meta" style={{ marginBottom: '4px' }}>Phone</p>
            <a
              href="tel:+919555954501"
              className="text-sm font-semibold link-editorial"
              style={{ color: 'var(--fg)', fontFamily: 'var(--font-body)' }}
              data-cursor="pointer"
            >
              +91 9555954501
            </a>
          </div>
          <div style={{ width: '1px', height: '32px', backgroundColor: 'var(--border)' }} />
          <div>
            <p className="text-meta" style={{ marginBottom: '4px' }}>Resume</p>
            <a
              href="https://raw.githubusercontent.com/prathamsahu31/Portfolio/main/Pratham's%20Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold link-editorial"
              style={{ color: 'var(--fg)', fontFamily: 'var(--font-body)' }}
              data-cursor="pointer"
            >
              Download PDF ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
