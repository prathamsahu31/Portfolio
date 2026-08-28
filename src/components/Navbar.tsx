import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ExternalLink } from 'lucide-react';
import { sfx } from '../utils/sfx';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = sfx.toggle();
    setIsSoundOn(newState);
  };

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:bg-blue-600 focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[100] bg-paper transition-[border-color,box-shadow] duration-300 ${
          isScrolled ? 'border-b-2 border-ink shadow-print-sm' : 'border-b-2 border-transparent'
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8"
          aria-label="Primary"
        >
          {/* Logo / Signature */}
          <a
            className="font-display text-2xl font-bold tracking-tight text-ink"
            href="#"
            onClick={() => sfx.playPop()}
          >
            Pratham
            <span
              className="inline-block cursor-pointer text-blue-600 transition-transform duration-200 hover:rotate-45 hover:scale-125 select-none"
              aria-hidden="true"
            >
              *
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {/* SFX Mute/Unmute Toggle */}
            <button
              type="button"
              onClick={toggleSound}
              aria-label={isSoundOn ? 'Mute sound effects' : 'Enable sound effects'}
              aria-pressed={isSoundOn}
              title={isSoundOn ? 'Sound on (Click to mute)' : 'Sound muted (Click to enable)'}
              className={`flex h-8 w-8 items-center justify-center border-2 border-ink transition-colors ${
                isSoundOn ? 'bg-blue-600 text-paper' : 'bg-paper text-ink'
              }`}
            >
              {isSoundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => sfx.playClick()}
                className="highlight-hover px-1 font-mono text-xs font-medium uppercase tracking-[0.15em] transition-colors text-ink"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://raw.githubusercontent.com/prathamsahu31/Portfolio/main/Pratham's%20Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => sfx.playStamp()}
              className="highlight-hover px-1 font-mono text-xs font-medium uppercase tracking-[0.15em] transition-colors text-ink inline-flex items-center gap-1"
            >
              <span>Resume</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => {
              sfx.playClick();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="relative flex h-10 w-10 items-center justify-center border-2 border-ink bg-paper shadow-print-sm transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X size={18} className="text-ink" />
            ) : (
              <div className="flex flex-col gap-1.5 items-center justify-center">
                <span className="h-[2px] w-5 bg-ink"></span>
                <span className="h-[2px] w-5 bg-ink"></span>
              </div>
            )}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b-2 border-ink bg-paper px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center justify-between pb-3 border-b border-ink/15">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">Sound Effects</span>
              <button
                type="button"
                onClick={toggleSound}
                className={`flex h-8 items-center gap-2 px-3 border-2 border-ink text-xs font-mono uppercase ${
                  isSoundOn ? 'bg-blue-600 text-paper' : 'bg-paper text-ink'
                }`}
              >
                {isSoundOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
                <span>{isSoundOn ? 'Audio ON' : 'Muted'}</span>
              </button>
            </div>

            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    sfx.playClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="font-mono text-sm font-medium uppercase tracking-[0.15em] text-ink hover:text-blue-600 py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://raw.githubusercontent.com/prathamsahu31/Portfolio/main/Pratham's%20Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  sfx.playStamp();
                  setIsMobileMenuOpen(false);
                }}
                className="font-mono text-sm font-medium uppercase tracking-[0.15em] text-blue-600 hover:underline py-1 flex items-center gap-1.5"
              >
                <span>Download Resume (PDF)</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
