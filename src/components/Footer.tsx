import { sfx } from '../utils/sfx';

export function Footer() {
  const scrollToTop = () => {
    sfx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-ink bg-paper py-12 mt-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-ink/15">
          
          {/* Branding */}
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={() => sfx.playPop()}
              className="font-display text-2xl font-bold tracking-tight text-ink"
            >
              Pratham<span className="text-blue-600 font-bold">*</span>
            </a>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mt-1">
              CSE @ NSUT · AI/ML & Full-Stack Developer · Delhi, India
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs font-semibold uppercase tracking-wider text-ink">
            <a href="#skills" onClick={() => sfx.playClick()} className="highlight-hover">Skills</a>
            <a href="#about" onClick={() => sfx.playClick()} className="highlight-hover">About</a>
            <a href="#projects" onClick={() => sfx.playClick()} className="highlight-hover">Work</a>
            <a href="#contact" onClick={() => sfx.playClick()} className="highlight-hover">Contact</a>
            <a
              href="https://raw.githubusercontent.com/prathamsahu31/Portfolio/main/Pratham's%20Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => sfx.playStamp()}
              className="highlight-hover text-blue-600"
            >
              Resume ↗
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="border-2 border-ink bg-paper px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink shadow-print-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[3px] active:translate-y-[3px]"
          >
            Back to top ↑
          </button>
        </div>

        {/* Socials & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/prathamsahu31"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/prathamsahu31/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/PrathamSahu31"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Twitter
            </a>
            <a
              href="mailto:prathamsahu31@gmail.com"
              className="hover:text-ink transition-colors"
            >
              Email
            </a>
          </div>

          <p className="text-center sm:text-right text-[11px]">
            Designed with print aesthetics & built with React · © {new Date().getFullYear()} Pratham Sahu
          </p>
        </div>
      </div>
    </footer>
  );
}
