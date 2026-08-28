const reviewsRow1 = [
  {
    quote: "Pratham's work on FinFlex and the Telegram expense agent is super slick. Parsing natural language into structured PostgreSQL records in realtime is no easy feat!",
    name: "Aman Verma",
    handle: "@aman_nsut",
    avatar: "https://api.dicebear.com/9.x/identicon/svg?seed=Aman",
  },
  {
    quote: "Vidhya's early warning risk prediction model and automated educator dashboard proved how deeply he understands practical AI application engineering.",
    name: "Rohan Gupta",
    handle: "@rohan_ai",
    avatar: "https://api.dicebear.com/9.x/identicon/svg?seed=Rohan",
  },
  {
    quote: "Incredible velocity and code quality. From FastMCP server tools to React full-stack frontends, he builds systems end to end seamlessly.",
    name: "Aditya Sharma",
    handle: "@aditya_dev",
    avatar: "https://api.dicebear.com/9.x/identicon/svg?seed=Aditya",
  },
  {
    quote: "One of the sharpest developers at NSUT. Always exploring cutting-edge LLM agent workflows and writing crisp, production-grade software.",
    name: "Sneha Patel",
    handle: "@sneha_tech",
    avatar: "https://api.dicebear.com/9.x/identicon/svg?seed=Sneha",
  },
];

const reviewsRow2 = [
  {
    quote: "Strong foundations in C++ algorithms combined with modern TypeScript and FastAPI. A true builder who turns complex requirements into shipped products.",
    name: "Karan Singh",
    handle: "@karan_cse",
    avatar: "https://api.dicebear.com/9.x/identicon/svg?seed=Karan",
  },
  {
    quote: "Working with Pratham on hackathon projects was fantastic. His ability to connect backend microservices with AI agents is top tier.",
    name: "Tanvi Saxena",
    handle: "@tanvi_s",
    avatar: "https://api.dicebear.com/9.x/identicon/svg?seed=Tanvi",
  },
  {
    quote: "His implementation of Model Context Protocol (MCP) tool integration is thoroughly designed and containerized. Great engineering mindset!",
    name: "Vikas Mehra",
    handle: "@vikas_cloud",
    avatar: "https://api.dicebear.com/9.x/identicon/svg?seed=Vikas",
  },
  {
    quote: "Clean, robust code with great attention to developer and user experience. Always excited to see what he builds next.",
    name: "Divya R.",
    handle: "@divya_code",
    avatar: "https://api.dicebear.com/9.x/identicon/svg?seed=Divya",
  },
];

export function Reviews() {
  const row1 = [...reviewsRow1, ...reviewsRow1, ...reviewsRow1];
  const row2 = [...reviewsRow2, ...reviewsRow2, ...reviewsRow2];

  return (
    <section id="reviews" className="scroll-mt-28 overflow-hidden">
      {/* Section Header with Stamp and Sujal's Dashed Line */}
      <div className="mx-auto max-w-6xl px-6 pt-20 lg:px-8">
        <div>
          <span className="inline-block bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-paper shadow-print-sm">
            Margin notes
          </span>
          <div className="mt-5 flex items-baseline gap-6">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-ink">
              What people <span className="marker whitespace-nowrap">say</span>
            </h2>
            <span
              aria-hidden="true"
              className="hidden flex-1 origin-left border-t-2 border-dashed border-ink/30 sm:block"
            />
          </div>
        </div>
      </div>

      {/* Marquee Reviews Rows */}
      <div className="relative overflow-hidden py-14">
        {/* Row 1 (Left Scrolling) */}
        <div className="group flex overflow-hidden p-2 [gap:1.5rem] flex-row select-none">
          <div className="flex shrink-0 justify-around gap-6 animate-marquee flex-row group-hover:[animation-play-state:paused]">
            {row1.map((item, idx) => (
              <figure
                key={`r1-${idx}`}
                className="ruled w-80 border-2 border-ink bg-paper p-5 shadow-print-sm transition-transform duration-300 hover:-rotate-1"
              >
                <blockquote className="text-sm leading-relaxed text-ink font-sans">
                  “{item.quote}”
                </blockquote>
                <div className="mt-4 flex items-center gap-3 border-t border-ink/15 pt-3">
                  <img
                    className="h-8 w-8 border-2 border-ink bg-paper"
                    width="32"
                    height="32"
                    alt={item.name}
                    src={item.avatar}
                  />
                  <div>
                    <figcaption className="text-xs font-bold text-ink">{item.name}</figcaption>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">{item.handle}</p>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>

        {/* Row 2 (Right Scrolling / Reverse) */}
        <div className="group flex overflow-hidden p-2 [gap:1.5rem] flex-row mt-4 select-none">
          <div className="flex shrink-0 justify-around gap-6 animate-marquee-reverse flex-row group-hover:[animation-play-state:paused]">
            {row2.map((item, idx) => (
              <figure
                key={`r2-${idx}`}
                className="ruled w-80 border-2 border-ink bg-paper p-5 shadow-print-sm transition-transform duration-300 hover:rotate-1"
              >
                <blockquote className="text-sm leading-relaxed text-ink font-sans">
                  “{item.quote}”
                </blockquote>
                <div className="mt-4 flex items-center gap-3 border-t border-ink/15 pt-3">
                  <img
                    className="h-8 w-8 border-2 border-ink bg-paper"
                    width="32"
                    height="32"
                    alt={item.name}
                    src={item.avatar}
                  />
                  <div>
                    <figcaption className="text-xs font-bold text-ink">{item.name}</figcaption>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">{item.handle}</p>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
