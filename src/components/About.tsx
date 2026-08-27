import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Server, Database, Bot, Wrench, Users, CheckCircle2 } from 'lucide-react';

type SkillCategory = 'all' | 'languages' | 'frameworks' | 'ai' | 'databases' | 'tools';

interface SkillItem {
  name: string;
  category: SkillCategory;
  level: string;
  featured?: boolean;
}

const allSkills: SkillItem[] = [
  // Languages
  { name: 'C++', category: 'languages', level: 'Advanced / DSA', featured: true },
  { name: 'Python', category: 'languages', level: 'AI/ML & Backend', featured: true },
  { name: 'JavaScript', category: 'languages', level: 'Full Stack', featured: true },
  { name: 'TypeScript', category: 'languages', level: 'Type-Safe Web', featured: true },
  { name: 'SQL', category: 'languages', level: 'Relational DBs', featured: true },

  // Frameworks & Backend
  { name: 'React', category: 'frameworks', level: 'Modern Frontend', featured: true },
  { name: 'FastAPI', category: 'frameworks', level: 'High-Perf Python', featured: true },
  { name: 'FastMCP', category: 'frameworks', level: 'Model Context Protocol', featured: true },
  { name: 'Node.js', category: 'frameworks', level: 'Backend Runtime', featured: true },
  { name: 'Express', category: 'frameworks', level: 'REST APIs', featured: true },
  { name: 'Flask', category: 'frameworks', level: 'ML Serving' },
  { name: 'Tailwind CSS', category: 'frameworks', level: 'Styling & UI' },

  // AI & ML
  { name: 'AI Agents', category: 'ai', level: 'Autonomous Workflows', featured: true },
  { name: 'Gemini API', category: 'ai', level: 'GenAI & LLMs', featured: true },
  { name: 'Scikit-learn', category: 'ai', level: 'Machine Learning', featured: true },
  { name: 'Pandas', category: 'ai', level: 'Data Processing' },
  { name: 'Telegram Bot API', category: 'ai', level: 'Conversational Agents' },
  { name: 'MCP (Model Context Protocol)', category: 'ai', level: 'Tool Orchestration', featured: true },

  // Databases
  { name: 'PostgreSQL', category: 'databases', level: 'SQL & Relations', featured: true },
  { name: 'Supabase', category: 'databases', level: 'Auth, Storage & DB', featured: true },
  { name: 'Firebase', category: 'databases', level: 'Realtime Cloud' },

  // DevOps & Tools
  { name: 'Docker', category: 'tools', level: 'Containerization', featured: true },
  { name: 'Linux', category: 'tools', level: 'CLI & Scripting', featured: true },
  { name: 'Git & GitHub', category: 'tools', level: 'Version Control', featured: true },
  { name: 'Vite', category: 'tools', level: 'Modern Bundling' },
];

export function About() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');

  const categories: { id: SkillCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Skills', icon: <Code2 size={16} /> },
    { id: 'languages', label: 'Languages', icon: <Code2 size={16} /> },
    { id: 'frameworks', label: 'Frameworks & Backend', icon: <Server size={16} /> },
    { id: 'ai', label: 'AI / ML & Agents', icon: <Bot size={16} /> },
    { id: 'databases', label: 'Databases', icon: <Database size={16} /> },
    { id: 'tools', label: 'DevOps & Tools', icon: <Wrench size={16} /> },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? allSkills
    : allSkills.filter((s) => s.category === selectedCategory);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle Section Divider Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">Background & Toolkit</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mt-1 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
        </motion.div>

        {/* Bio & Highlights Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-5 text-neutral-300 text-base sm:text-lg leading-relaxed"
          >
            <p>
              I am a <strong className="text-white font-semibold">Computer Science Engineering (CSE)</strong> student at <span className="text-emerald-400 font-medium">Netaji Subhas University of Technology (NSUT), New Delhi</span>, graduating in 2029.
            </p>
            <p>
              My focus lies at the intersection of <strong className="text-white">AI/ML intelligence</strong>, <strong className="text-white">developer tooling</strong>, and <strong className="text-white">robust full-stack systems</strong>. I enjoy engineering solutions from the ground up—from training predictive ML models to building high-performance APIs with FastAPI/FastMCP and sleek, reactive frontends.
            </p>
            <p>
              Whether it's building autonomous Telegram AI agents, student early-warning classifiers, or scalable web architectures, I prioritize writing clean, maintainable code with deep attention to developer and user experience.
            </p>

            {/* Core Values / Soft Skills */}
            <div className="pt-4 grid grid-cols-3 gap-3">
              {[
                { title: 'Decision Making', desc: 'System-level thinking' },
                { title: 'Teamwork', desc: 'Collaborative builder' },
                { title: 'Adaptability', desc: 'Fast continuous learner' },
              ].map((item) => (
                <div key={item.title} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
                    <CheckCircle2 size={13} />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Bot className="text-emerald-400" size={24} />,
                title: 'AI/ML & Agent Systems',
                desc: 'Building intelligent workflows using Gemini API, FastMCP servers, and autonomous multi-agent tool calling.',
              },
              {
                icon: <Server className="text-cyan-400" size={24} />,
                title: 'Full-Stack Architecture',
                desc: 'Modern web solutions powered by React, TypeScript, Node.js, Express, and FastAPI backends.',
              },
              {
                icon: <Database className="text-indigo-400" size={24} />,
                title: 'Data & Cloud Systems',
                desc: 'Relational data modeling with PostgreSQL, Supabase real-time storage, Docker containerization & Linux.',
              },
              {
                icon: <Users className="text-rose-400" size={24} />,
                title: 'Algorithms & Systems',
                desc: 'Strong foundation in C++, data structures, algorithmic optimization, and computational problem solving.',
              },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * idx }}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{card.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Interactive Skills Matrix */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-white">Technical Skills & Technologies</h3>
              <p className="text-xs sm:text-sm text-neutral-400">Click a category filter to explore my technical stack</p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-500 text-neutral-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                      : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skill Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </span>
                    {skill.featured && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
