const skills = [
  'React',
  'TypeScript',
  'Python',
  'FastMCP',
  'AI Agents',
  'Gemini API',
  'FastAPI',
  'Node.js',
  'PostgreSQL',
  'Supabase',
  'Docker',
  'C++',
  'LangChain',
  'DevOps',
  'Problem Solver',
  'NSUT Delhi',
];

export function Marquee() {
  // Triple array for seamless infinite marquee loop
  const list = [...skills, ...skills, ...skills];

  return (
    <div className="border-y-2 border-ink bg-paper py-3 overflow-hidden select-none">
      <div className="group flex overflow-hidden [gap:2.5rem]">
        <div className="flex shrink-0 justify-around gap-10 animate-marquee flex-row group-hover:[animation-play-state:paused]">
          {list.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-8 font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink whitespace-nowrap"
            >
              <span>{item}</span>
              <span
                className="text-blue-600 font-bold transition-transform duration-500 ease-out group-hover:rotate-[135deg]"
                aria-hidden="true"
              >
                ✳
              </span>
            </span>
          ))}
        </div>

        <div className="flex shrink-0 justify-around gap-10 animate-marquee flex-row group-hover:[animation-play-state:paused]" aria-hidden="true">
          {list.map((item, index) => (
            <span
              key={`dup-${item}-${index}`}
              className="flex items-center gap-8 font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink whitespace-nowrap"
            >
              <span>{item}</span>
              <span
                className="text-blue-600 font-bold transition-transform duration-500 ease-out group-hover:rotate-[135deg]"
                aria-hidden="true"
              >
                ✳
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
