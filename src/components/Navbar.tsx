import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <a href="#main" className="skip-to-content">Skip to content</a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 border-b backdrop-blur-md'
            : 'py-5 border-b border-transparent'
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(245, 243, 238, 0.85)' : 'transparent',
          borderColor: isScrolled ? 'var(--border)' : 'transparent',
        }}
        aria-label="Primary navigation"
      >
        <div className="container-editorial flex items-center justify-between">
          {/* Logo / Signature */}
          <a
            href="#"
            className="font-display text-xl font-bold tracking-tight"
            style={{ color: 'var(--fg)' }}
            data-cursor="pointer"
          >
            PRATHAM<span className="inline-block transition-transform duration-300 hover:rotate-45 ml-px" style={{ color: 'var(--accent)' }}>*</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-meta link-editorial"
                style={{ color: 'var(--muted)', fontSize: '0.6875rem' }}
                data-cursor="pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            data-cursor="pointer"
          >
            <span
              className="block w-5 h-[1.5px] transition-all duration-300"
              style={{
                backgroundColor: 'var(--fg)',
                transform: isMobileOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none',
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300"
              style={{
                backgroundColor: 'var(--fg)',
                transform: isMobileOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--bg)' }}
      >
        <div className="flex flex-col justify-center items-start h-full px-8">
          <div className="space-y-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block text-display-lg transition-all duration-500"
                style={{
                  color: 'var(--fg)',
                  transform: isMobileOpen ? 'translateY(0)' : 'translateY(40px)',
                  opacity: isMobileOpen ? 1 : 0,
                  transitionDelay: `${150 + i * 80}ms`,
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className="mt-12 flex items-center gap-6 transition-all duration-500"
            style={{
              transform: isMobileOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMobileOpen ? 1 : 0,
              transitionDelay: '450ms',
            }}
          >
            <a href="https://github.com/prathamsahu31" target="_blank" rel="noreferrer" className="text-meta" style={{ color: 'var(--muted)' }}>GitHub ↗</a>
            <a href="https://www.linkedin.com/in/prathamsahu31/" target="_blank" rel="noreferrer" className="text-meta" style={{ color: 'var(--muted)' }}>LinkedIn ↗</a>
            <a href="https://x.com/PrathamSahu31" target="_blank" rel="noreferrer" className="text-meta" style={{ color: 'var(--muted)' }}>Twitter ↗</a>
          </div>
        </div>
      </div>
    </>
  );
}
