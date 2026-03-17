import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Pratham Sahu
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-lg leading-relaxed">
            I'm a Computer Science Engineering student at NSUT (Class of '29), passionate about software development, automation, and building impactful digital experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-4 ml-4">
              <SocialLink href="#" icon={<Github size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden md:block"
        >
          <div className="aspect-square rounded-full border border-white/10 p-8 relative">
            <div className="absolute inset-0 border border-emerald-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-indigo-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 border border-white/10 relative">
              <img 
                src="https://raw.githubusercontent.com/prathamsahu31/Portfolio/refs/heads/main/src/components/Profile%20Photo.jpg" 
                alt="Developer Portrait" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
    >
      {icon}
    </a>
  );
}
