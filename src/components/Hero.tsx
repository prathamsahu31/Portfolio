import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter, Mail, FileDown, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { useToast } from './Toast';

const roles = [
  'AI/ML & Full-Stack Developer',
  'Building AI Agents & FastMCP Systems',
  'CSE Undergrad @ NSUT (\'25 - \'29)',
  'Scalable Software & DevOps Enthusiast'
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { showToast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/5 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-neutral-300">
                Open to Internships & Projects
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-white">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
                  Pratham Sahu
                </span>
              </h1>

              {/* Dynamic Animated Role Switcher */}
              <div className="h-10 sm:h-12 mt-3 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="flex items-center gap-2 text-lg sm:text-2xl font-mono font-medium text-emerald-400"
                  >
                    <Sparkles size={18} className="text-cyan-400 shrink-0" />
                    <span>{roles[roleIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed">
              Computer Science undergraduate at <strong className="text-neutral-200">NSUT</strong> building full-stack platforms, AI agents, and intelligent developer tools. Proficient in C++, Python, JavaScript, and scalable backend architecture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 text-neutral-950 font-bold hover:bg-emerald-400 transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-95 text-sm"
              >
                <span>View Projects</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="/resume.pdf"
                download="Pratham_Sahu_Resume.pdf"
                onClick={() => showToast('Resume download started!', 'info')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 hover:border-white/25 transition-all active:scale-95 text-sm"
              >
                <FileDown size={17} />
                <span>Resume (PDF)</span>
              </a>

              {/* Social Link Badges */}
              <div className="flex items-center gap-2 ml-0 sm:ml-2">
                <SocialIconButton
                  href="https://github.com/prathamsahu31"
                  icon={<Github size={18} />}
                  label="GitHub"
                />
                <SocialIconButton
                  href="https://www.linkedin.com/in/prathamsahu31/"
                  icon={<Linkedin size={18} />}
                  label="LinkedIn"
                />
                <SocialIconButton
                  href="https://x.com/PrathamSahu31"
                  icon={<Twitter size={18} />}
                  label="X / Twitter"
                />
                <SocialIconButton
                  href="mailto:prathamsahu31@gmail.com"
                  icon={<Mail size={18} />}
                  label="Email"
                />
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                  <GraduationCap size={14} className="text-emerald-400" />
                  <span>College</span>
                </div>
                <p className="text-sm font-semibold text-white">NSUT Delhi</p>
                <p className="text-[11px] text-neutral-500">B.Tech CSE '29</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                  <span>Academics</span>
                </div>
                <p className="text-sm font-semibold text-white">7.09 CGPA</p>
                <p className="text-[11px] text-neutral-500">Computer Science</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                  <MapPin size={14} className="text-rose-400" />
                  <span>Location</span>
                </div>
                <p className="text-sm font-semibold text-white">Delhi, India</p>
                <p className="text-[11px] text-neutral-500">IST (UTC+5:30)</p>
              </div>
            </div>
          </motion.div>

          {/* Right Portrait & Floating Tech Orb Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
              
              {/* Outer decorative spinning rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/25 animate-[spin_24s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-indigo-500/20 animate-[spin_32s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-cyan-500/30" />

              {/* Main Avatar Card */}
              <div className="w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] rounded-full p-2 bg-gradient-to-tr from-emerald-500/40 via-cyan-500/30 to-indigo-500/40 shadow-2xl backdrop-blur-md">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 border-2 border-white/20 relative group">
                  <img
                    src="/profile.jpg"
                    alt="Pratham Sahu"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      // Fallback if public path isn't loaded
                      (e.target as HTMLImageElement).src = "https://raw.githubusercontent.com/prathamsahu31/Portfolio/refs/heads/main/src/components/Profile%20Photo%20872x872.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                </div>
              </div>

              {/* Floating Tech Badges */}
              <FloatingBadge
                label="Python & ML"
                color="text-amber-400 border-amber-500/30 bg-amber-500/10"
                position="-top-2 left-6"
                delay={0}
              />
              <FloatingBadge
                label="C++ & Algorithms"
                color="text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
                position="-bottom-2 -left-2"
                delay={0.4}
              />
              <FloatingBadge
                label="FastMCP & Agents"
                color="text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                position="top-12 -right-4"
                delay={0.8}
              />
              <FloatingBadge
                label="React & TypeScript"
                color="text-indigo-400 border-indigo-500/30 bg-indigo-500/10"
                position="bottom-10 -right-2"
                delay={1.2}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function SocialIconButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/15 hover:border-white/30 transition-all hover:scale-105"
    >
      {icon}
    </a>
  );
}

function FloatingBadge({ label, color, position, delay }: { label: string; color: string; position: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      className={`absolute ${position} px-3 py-1.5 rounded-full border backdrop-blur-md text-xs font-mono font-medium shadow-lg pointer-events-none select-none ${color}`}
    >
      {label}
    </motion.div>
  );
}
