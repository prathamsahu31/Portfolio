import { useState } from 'react';
import { sfx } from '../utils/sfx';
import { 
  Code2, 
  Layers, 
  Database, 
  Terminal, 
  Award, 
  Sparkles,
  Bot
} from 'lucide-react';

interface ToolItem {
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'databases' | 'certs';
  categoryLabel: string;
  desc: string;
  icon: string;
}

const allTools: ToolItem[] = [
  // Programming Languages
  { name: 'C++', category: 'languages', categoryLabel: 'Language', desc: 'DSA & Algorithms', icon: '⚡' },
  { name: 'Python', category: 'languages', categoryLabel: 'Language', desc: 'AI/ML, Agents & APIs', icon: '🐍' },
  { name: 'JavaScript', category: 'languages', categoryLabel: 'Language', desc: 'ES6+ Full-Stack', icon: '📜' },
  { name: 'TypeScript', category: 'languages', categoryLabel: 'Language', desc: 'Type-Safe Architecture', icon: '🔷' },
  { name: 'SQL', category: 'languages', categoryLabel: 'Language', desc: 'Complex Queries & DBs', icon: '🗄️' },

  // Frameworks & Libraries
  { name: 'React', category: 'frameworks', categoryLabel: 'Frontend', desc: 'Modern Reactive Web', icon: '⚛️' },
  { name: 'Node.js', category: 'frameworks', categoryLabel: 'Backend', desc: 'Server Runtime', icon: '🟢' },
  { name: 'FastAPI', category: 'frameworks', categoryLabel: 'Backend', desc: 'High-Performance APIs', icon: '⚡' },
  { name: 'FastMCP', category: 'frameworks', categoryLabel: 'AI / Protocol', desc: 'Model Context Protocol', icon: '🤖' },
  { name: 'LangChain', category: 'frameworks', categoryLabel: 'AI / LLM', desc: 'Multi-Agent Pipelines', icon: '🦜' },
  { name: 'Flask', category: 'frameworks', categoryLabel: 'Backend', desc: 'ML Model Serving', icon: '🌶️' },
  { name: 'Scikit-learn', category: 'frameworks', categoryLabel: 'Machine Learning', desc: 'Predictive Modeling', icon: '📊' },
  { name: 'Pandas', category: 'frameworks', categoryLabel: 'Data Analysis', desc: 'Data Wrangling', icon: '🐼' },
  { name: 'Tailwind CSS', category: 'frameworks', categoryLabel: 'Styling', desc: 'Utility-First UI', icon: '🎨' },

  // Tools & Platforms
  { name: 'Git & GitHub', category: 'tools', categoryLabel: 'Version Control', desc: 'Collaborative Workflows', icon: '🐙' },
  { name: 'Docker', category: 'tools', categoryLabel: 'DevOps', desc: 'Containerization', icon: '🐳' },
  { name: 'Linux', category: 'tools', categoryLabel: 'OS / CLI', desc: 'Shell Scripting & Servers', icon: '🐧' },
  { name: 'n8n', category: 'tools', categoryLabel: 'Automation', desc: 'Workflow Orchestration', icon: '⚙️' },
  { name: 'CI / CD', category: 'tools', categoryLabel: 'DevOps', desc: 'Automated Pipelines', icon: '🚀' },

  // Databases
  { name: 'PostgreSQL', category: 'databases', categoryLabel: 'Relational DB', desc: 'ACID Transactions', icon: '🐘' },
  { name: 'Supabase', category: 'databases', categoryLabel: 'BaaS & Storage', desc: 'Realtime Postgres', icon: '⚡' },
  { name: 'Firebase', category: 'databases', categoryLabel: 'Cloud Platform', desc: 'Realtime Cloud DB', icon: '🔥' },

  // Certifications
  { name: 'AI Agents Fundamentals', category: 'certs', categoryLabel: 'Hugging Face', desc: 'Autonomous Agent Design', icon: '🤗' },
  { name: 'Model Context Protocol (MCP)', category: 'certs', categoryLabel: 'Anthropic', desc: 'Intro & Advanced Topics', icon: '🏛️' },
];

export function Toolbox() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'frameworks' | 'tools' | 'databases' | 'certs'>('all');

  const filterOptions = [
    { id: 'all', label: 'All Tools', icon: <Sparkles size={13} /> },
    { id: 'languages', label: 'Languages', icon: <Code2 size={13} /> },
    { id: 'frameworks', label: 'Frameworks & AI', icon: <Bot size={13} /> },
    { id: 'tools', label: 'Tools & DevOps', icon: <Terminal size={13} /> },
    { id: 'databases', label: 'Databases', icon: <Database size={13} /> },
    { id: 'certs', label: 'Certifications', icon: <Award size={13} /> },
  ];

  const filteredTools = activeCategory === 'all'
    ? allTools
    : allTools.filter((t) => t.category === activeCategory);

  return (
    <section id="skills" className="scroll-mt-28">
      {/* Section Header with Stamp and Sujal's Dashed Line */}
      <div className="mx-auto max-w-6xl px-6 pt-20 lg:px-8">
        <div>
          <span className="inline-block bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-paper shadow-print-sm">
            Toolbox
          </span>
          <div className="mt-5 flex items-baseline gap-6">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-ink">
              Tools I reach <span className="marker whitespace-nowrap">for daily</span>
            </h2>
            <span
              aria-hidden="true"
              className="hidden flex-1 origin-left border-t-2 border-dashed border-ink/30 sm:block"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => {
                sfx.playClick();
                setActiveCategory(opt.id as any);
              }}
              className={`inline-flex items-center gap-2 border-2 border-ink px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all active:translate-x-[1px] active:translate-y-[1px] ${
                activeCategory === opt.id
                  ? 'bg-blue-600 text-paper shadow-print-sm'
                  : 'bg-paper text-ink hover:bg-neutral-200'
              }`}
            >
              <span>{opt.icon}</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tool Cards Grid */}
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              onClick={() => sfx.playPop()}
              className="group border-2 border-ink bg-paper p-3.5 shadow-print-sm transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-print cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xl">{tool.icon}</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted px-1.5 py-0.5 border border-ink/20 bg-paper">
                    {tool.categoryLabel}
                  </span>
                </div>
                <h3 className="font-display text-sm sm:text-base font-bold text-ink group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h3>
              </div>
              <p className="mt-2 text-xs text-muted font-mono leading-tight">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
