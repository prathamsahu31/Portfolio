import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left branding */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
              PS
            </span>
            <span className="font-display font-bold text-white text-base">Pratham Sahu</span>
          </div>
          <p className="text-neutral-500 text-xs mt-1">
            CSE @ NSUT · AI/ML & Full-Stack Developer · Delhi, India
          </p>
        </div>

        {/* Center Quick Links */}
        <div className="flex items-center gap-6 text-xs text-neutral-400 font-medium">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Education</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="/resume.pdf" download="Pratham_Sahu_Resume.pdf" className="hover:text-emerald-400 transition-colors">Resume</a>
        </div>

        {/* Right Socials & Back To Top */}
        <div className="flex items-center gap-4 text-neutral-400">
          <a
            href="https://github.com/prathamsahu31"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition-all p-1.5"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/prathamsahu31/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 hover:scale-110 transition-all p-1.5"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://x.com/PrathamSahu31"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 hover:scale-110 transition-all p-1.5"
            aria-label="Twitter / X"
          >
            <Twitter size={18} />
          </a>
          <a
            href="mailto:prathamsahu31@gmail.com"
            className="hover:text-emerald-400 hover:scale-110 transition-all p-1.5"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            className="ml-2 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/15 transition-all"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>

      <div className="text-center mt-8 text-[11px] text-neutral-600">
        © {new Date().getFullYear()} Pratham Sahu. All rights reserved. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}
