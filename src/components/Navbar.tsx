import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileDown, ExternalLink } from 'lucide-react';
import { useToast } from './Toast';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { showToast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Track active section
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleResumeClick = () => {
    showToast('Downloading Resume...', 'info');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll Progress Line */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 text-xl font-display font-bold tracking-tight text-white hover:text-emerald-400 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-mono text-sm group-hover:scale-105 transition-transform">
              PS
            </span>
            <span className="hidden sm:inline">Pratham Sahu</span>
            <span className="inline sm:hidden">Pratham</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://raw.githubusercontent.com/prathamsahu31/Portfolio/main/Pratham's%20Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={handleResumeClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-neutral-950 font-semibold text-sm hover:bg-emerald-400 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] active:scale-95"
            >
              <FileDown size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-neutral-950/95 border-b border-white/10 backdrop-blur-2xl overflow-hidden"
            >
              <div className="px-6 py-5 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-base font-medium py-1 transition-colors ${
                      activeSection === link.id ? 'text-emerald-400 font-semibold' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                  <a
                    href="https://raw.githubusercontent.com/prathamsahu31/Portfolio/main/Pratham's%20Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleResumeClick();
                    }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-500 text-neutral-950 font-semibold text-sm hover:bg-emerald-400 transition-all"
                  >
                    <FileDown size={16} />
                    Download Resume
                  </a>
                  <a
                    href="https://github.com/prathamsahu31/Portfolio/blob/main/Pratham's%20Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white text-xs font-medium"
                  >
                    <ExternalLink size={14} />
                    Preview on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
