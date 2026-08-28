import { useEffect, useRef } from 'react';

export function FieldNotes() {
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
    <section ref={sectionRef} id="about" className="section-padding" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="container-editorial">
        {/* Section Header */}
        <div className="reveal">
          <p className="section-label">03 — Field Notes</p>
          <h2 className="text-display-lg" style={{ color: 'var(--fg)', marginBottom: 'var(--space-xl)' }}>
            About <span style={{ color: 'var(--accent)' }}>Pratham</span>
          </h2>
        </div>

        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Metadata Column */}
          <div className="lg:col-span-2 reveal reveal-delay-1 hidden lg:block">
            <div className="space-y-6">
              <div>
                <p className="text-meta" style={{ marginBottom: '4px' }}>Status</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>
                  <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: 'var(--accent)' }} />
                  Open to work
                </p>
              </div>
              <div>
                <p className="text-meta" style={{ marginBottom: '4px' }}>Focus</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>AI/ML</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>Full-Stack</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>Dev Tools</p>
              </div>
              <div>
                <p className="text-meta" style={{ marginBottom: '4px' }}>Based in</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>Delhi, India</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>IST (UTC+5:30)</p>
              </div>
            </div>
          </div>

          {/* Center Bio Column */}
          <div className="lg:col-span-6 reveal reveal-delay-2">
            <div className="space-y-5 text-body">
              <p>
                I am a <strong style={{ color: 'var(--fg)' }}>Computer Science Engineering</strong> student at{' '}
                <strong style={{ color: 'var(--fg)' }}>Netaji Subhas University of Technology (NSUT), New Delhi</strong>,
                graduating in 2029.
              </p>
              <p>
                My focus lies at the intersection of <strong style={{ color: 'var(--fg)' }}>AI/ML intelligence</strong>,{' '}
                <strong style={{ color: 'var(--fg)' }}>developer tooling</strong>, and{' '}
                <strong style={{ color: 'var(--fg)' }}>robust full-stack systems</strong>.
                I enjoy engineering solutions from the ground up — from training predictive ML models
                to building high-performance APIs with FastAPI/FastMCP and sleek, reactive frontends.
              </p>
              <p>
                Whether it's building autonomous Telegram AI agents, student early-warning classifiers,
                or scalable web architectures, I prioritize writing clean, maintainable code with deep
                attention to developer and user experience.
              </p>
            </div>

            {/* Values */}
            <div
              className="grid grid-cols-3 gap-6 mt-8 pt-8"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              {[
                { title: 'Decision Making', desc: 'System-level thinking' },
                { title: 'Teamwork', desc: 'Collaborative builder' },
                { title: 'Adaptability', desc: 'Fast continuous learner' },
              ].map((item) => (
                <div key={item.title}>
                  <p className="text-sm font-semibold" style={{ color: 'var(--fg)', fontFamily: 'var(--font-body)' }}>
                    {item.title}
                  </p>
                  <p className="text-meta mt-1" style={{ fontSize: '0.5625rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Portrait Column */}
          <div className="lg:col-span-4 reveal reveal-delay-3">
            <figure>
              <div
                className="overflow-hidden"
                style={{ border: '1px solid var(--border)' }}
              >
                <img
                  src="/profile.jpg"
                  alt="Pratham Sahu"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://raw.githubusercontent.com/prathamsahu31/Portfolio/refs/heads/main/src/components/Profile%20Photo%20872x872.jpg";
                  }}
                />
              </div>
              <figcaption className="text-meta pt-3">
                fig. 03 — introduction
              </figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  );
}
