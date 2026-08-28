export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="py-10"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Branding */}
          <div>
            <p
              className="font-display font-bold text-lg tracking-tight"
              style={{ color: 'var(--fg)' }}
            >
              PRATHAM<span style={{ color: 'var(--accent)' }}>*</span>
            </p>
            <p className="text-meta mt-1">
              Delhi, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/prathamsahu31"
              target="_blank"
              rel="noreferrer"
              className="text-meta link-editorial"
              style={{ color: 'var(--muted)' }}
              data-cursor="pointer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/prathamsahu31/"
              target="_blank"
              rel="noreferrer"
              className="text-meta link-editorial"
              style={{ color: 'var(--muted)' }}
              data-cursor="pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/PrathamSahu31"
              target="_blank"
              rel="noreferrer"
              className="text-meta link-editorial"
              style={{ color: 'var(--muted)' }}
              data-cursor="pointer"
            >
              Twitter
            </a>
            <a
              href="mailto:prathamsahu31@gmail.com"
              className="text-meta link-editorial"
              style={{ color: 'var(--muted)' }}
              data-cursor="pointer"
            >
              Email
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="text-meta link-editorial"
            style={{ color: 'var(--muted)' }}
            data-cursor="pointer"
            aria-label="Scroll to top"
          >
            Back to Top ↑
          </button>
        </div>

        <p
          className="text-meta mt-8"
          style={{ fontSize: '0.5625rem', color: 'var(--border)' }}
        >
          © {new Date().getFullYear()} Pratham Sahu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
