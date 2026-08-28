import { sfx } from '../utils/sfx';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28">
      {/* Section Header with Stamp and Sujal's Dashed Line */}
      <div className="mx-auto max-w-6xl px-6 pt-20 lg:px-8">
        <div>
          <span className="inline-block bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-paper shadow-print-sm">
            Field notes
          </span>
          <div className="mt-5 flex items-baseline gap-6">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-ink">
              About <span className="marker whitespace-nowrap">the developer</span>
            </h2>
            <span
              aria-hidden="true"
              className="hidden flex-1 origin-left border-t-2 border-dashed border-ink/30 sm:block"
            />
          </div>
        </div>
      </div>

      {/* Editorial Content Figures */}
      <div className="mx-auto max-w-6xl space-y-20 px-6 py-14 lg:px-8">
        
        {/* Figure 02: Introduction */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="mx-auto w-full max-w-sm lg:col-span-5">
            <figure className="relative border-2 border-ink bg-paper p-3 shadow-print rotate-1 transition-transform hover:rotate-0">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-8 h-6 w-20 -rotate-6 border border-ink/10 bg-ink/10 backdrop-blur-[1px]"
              />
              <span
                aria-hidden="true"
                className="absolute -top-3 right-8 h-6 w-20 rotate-6 border border-ink/10 bg-ink/10 backdrop-blur-[1px]"
              />
              <img
                src="/profile.jpg"
                alt="Pratham Sahu"
                loading="lazy"
                width="800"
                height="900"
                className="aspect-[4/5] w-full object-cover border border-ink/10"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://raw.githubusercontent.com/prathamsahu31/Portfolio/refs/heads/main/src/components/Profile%20Photo%20872x872.jpg";
                }}
              />
              <figcaption className="pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                fig. 02 — introduction
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7">
            <span className="inline-block bg-blue-600 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-paper shadow-print-sm font-semibold">
              Introduction
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl text-ink">
              Pratham Sahu
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              AI/ML & Full-Stack Developer
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted text-base sm:text-lg">
              Hi, I'm Pratham Sahu! I'm a Computer Science Engineering student at{' '}
              <strong className="text-ink">Netaji Subhas University of Technology (NSUT), New Delhi</strong> ('25 - '29).
              I specialize in building full-stack platforms, autonomous AI agents, and developer tooling. 
              Proficient in C++, Python, JavaScript/TypeScript, and scalable backend architecture, I thrive on turning complex system challenges into fast, elegant, production-ready software.
            </p>
          </div>
        </div>

        {/* Figure 03: Education */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="mx-auto w-full max-w-sm lg:col-span-5 lg:order-2">
            <figure className="relative border-2 border-ink bg-paper p-3 shadow-print -rotate-1 transition-transform hover:rotate-0">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-8 h-6 w-20 -rotate-6 border border-ink/10 bg-ink/10 backdrop-blur-[1px]"
              />
              <span
                aria-hidden="true"
                className="absolute -top-3 right-8 h-6 w-20 rotate-6 border border-ink/10 bg-ink/10 backdrop-blur-[1px]"
              />
              {/* Styled College Architecture Illustration */}
              <div className="aspect-[4/5] w-full bg-paper border border-ink/10 flex flex-col items-center justify-center p-6 text-center ruled">
                <span className="text-5xl mb-3">🏛️</span>
                <span className="font-display text-xl font-bold text-ink">NSUT Delhi</span>
                <span className="font-mono text-xs text-muted mt-1 uppercase tracking-widest">Dwarka, New Delhi</span>
                <div className="mt-4 pt-3 border-t border-ink/20 w-full font-mono text-[11px] text-blue-600 font-semibold">
                  B.Tech CSE '29 · CGPA 7.09
                </div>
              </div>
              <figcaption className="pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                fig. 03 — education
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7 lg:order-1">
            <span className="inline-block bg-blue-600 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-paper shadow-print-sm font-semibold">
              Education
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl text-ink">
              Netaji Subhas University of Technology (NSUT)
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              Computer Science Engineering (CSE) · 2025 - 2029 (CGPA: 7.09)
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted text-base sm:text-lg">
              Pursuing rigorous coursework in Data Structures & Algorithms, Operating Systems, Database Management Systems, and Artificial Intelligence. Active participant in hackathons, competitive programming, and open-source software building.
            </p>
            <div className="mt-4 p-4 border-2 border-ink bg-paper shadow-print-sm max-w-xl">
              <p className="font-mono text-xs font-semibold uppercase text-ink">
                Prior Schooling: St. Joseph Convent School
              </p>
              <p className="font-mono text-[11px] text-muted mt-0.5">
                Class 12 (Science + CS): 81% · Class 10: 94% Aggregate Distinction
              </p>
            </div>
          </div>
        </div>

        {/* Figure 04: AI & Specialization */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="mx-auto w-full max-w-sm lg:col-span-5">
            <figure className="relative border-2 border-ink bg-paper p-3 shadow-print rotate-1 transition-transform hover:rotate-0">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-8 h-6 w-20 -rotate-6 border border-ink/10 bg-ink/10 backdrop-blur-[1px]"
              />
              <span
                aria-hidden="true"
                className="absolute -top-3 right-8 h-6 w-20 rotate-6 border border-ink/10 bg-ink/10 backdrop-blur-[1px]"
              />
              {/* Styled AI / Systems graphic */}
              <div className="aspect-[4/5] w-full bg-paper border border-ink/10 flex flex-col items-center justify-center p-6 text-center ruled">
                <span className="text-5xl mb-3">🤖</span>
                <span className="font-display text-xl font-bold text-ink">AI Agent Systems</span>
                <span className="font-mono text-xs text-muted mt-1 uppercase tracking-widest">Model Context Protocol</span>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5 font-mono text-[10px]">
                  <span className="px-2 py-0.5 border border-ink bg-paper">FastMCP</span>
                  <span className="px-2 py-0.5 border border-ink bg-paper">Gemini API</span>
                  <span className="px-2 py-0.5 border border-ink bg-paper">LangChain</span>
                </div>
              </div>
              <figcaption className="pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                fig. 04 — engineering & agents
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7">
            <span className="inline-block bg-blue-600 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-paper shadow-print-sm font-semibold">
              Specialization
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl text-ink">
              AI Agents, MCP & Scalable Backend Systems
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              Certified in Anthropic MCP & Hugging Face AI Agents
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted text-base sm:text-lg">
              I specialize in developing autonomous agentic pipelines and tool orchestration architectures. Using FastMCP, Python, and modern web backends, I build agents that can interpret natural language, call tools, interact with databases, and automate complex workflows end-to-end.
            </p>
          </div>
        </div>

        {/* Figure 05: Beyond the Screen */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="mx-auto w-full max-w-sm lg:col-span-5 lg:order-2">
            <figure className="relative border-2 border-ink bg-paper p-3 shadow-print -rotate-1 transition-transform hover:rotate-0">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-8 h-6 w-20 -rotate-6 border border-ink/10 bg-ink/10 backdrop-blur-[1px]"
              />
              <span
                aria-hidden="true"
                className="absolute -top-3 right-8 h-6 w-20 rotate-6 border border-ink/10 bg-ink/10 backdrop-blur-[1px]"
              />
              <div className="aspect-[4/5] w-full bg-paper border border-ink/10 flex flex-col items-center justify-center p-6 text-center ruled">
                <span className="text-5xl mb-3">🚀</span>
                <span className="font-display text-xl font-bold text-ink">Curious Mind</span>
                <span className="font-mono text-xs text-muted mt-1 uppercase tracking-widest">Building & Exploring</span>
                <div className="mt-4 pt-3 border-t border-ink/20 w-full font-mono text-[11px] text-ink">
                  Reading · Hackathons · Problem Solving
                </div>
              </div>
              <figcaption className="pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                fig. 05 — beyond the screen
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7 lg:order-1">
            <span className="inline-block bg-blue-600 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-paper shadow-print-sm font-semibold">
              Hobbies
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl text-ink">
              Beyond the Screen
            </h3>
            <p className="mt-5 max-w-xl leading-relaxed text-muted text-base sm:text-lg">
              I am deeply curious about technology and constantly push myself to learn new paradigms. When I'm not writing code or experimenting with new LLM agent architectures, I enjoy reading technical books and science fiction, participating in tech discussions, and staying active to keep a balanced and creative mindset for new engineering challenges.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
