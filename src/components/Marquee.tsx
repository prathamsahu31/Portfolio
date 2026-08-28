const marqueeItems = [
  'React', 'Python', 'FastAPI', 'AI Agents', 'TypeScript',
  'FastMCP', 'Node.js', 'PostgreSQL', 'Docker', 'C++',
  'Gemini API', 'Supabase', 'Full-Stack', 'DevOps',
];

export function Marquee() {
  // Duplicate items enough times to fill the screen and enable seamless loop
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div
      className="overflow-hidden"
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem 0',
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 shrink-0 px-6"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--fg)',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span
              style={{ color: 'var(--accent)' }}
              className="transition-transform duration-700 ease-out hover:rotate-[135deg]"
            >
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
