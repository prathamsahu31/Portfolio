import { useState } from 'react';
import { sfx } from '../utils/sfx';

export function Hero() {
  const [truthIndex, setTruthIndex] = useState(0);

  const truths = [
    'the developer',
    'AI agent architect',
    'fast builder',
    'NSUT student',
    'night owl coder'
  ];

  const handleTruthClick = () => {
    sfx.playPop();
    setTruthIndex((prev) => (prev + 1) % truths.length);
  };

  return (
    <section className="relative flex min-h-[92vh] flex-col justify-between pt-20 pb-8">
      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-14 px-6 py-12 lg:grid-cols-12 lg:px-8">
        
        {/* Left Editorial Column */}
        <div className="lg:col-span-7">
          {/* Subtitle tag */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            AI/ML & Full-Stack Developer · NSUT, New Delhi
          </p>

          {/* Large Editorial Headline with Hand-drawn SVG doodle circle */}
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight [text-wrap:balance] sm:text-6xl lg:text-7xl text-ink">
            Pratham Sahu builds{' '}
            <span className="relative inline-block whitespace-nowrap">
              useful things
              <svg
                aria-hidden="true"
                viewBox="0 0 300 90"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -inset-x-4 -inset-y-2 h-[calc(100%+16px)] w-[calc(100%+32px)]"
              >
                <path
                  d="M150,6 C240,2 293,22 294,45 C295,70 226,86 148,84 C70,82 8,68 6,44 C4,20 74,4 170,7"
                  fill="none"
                  className="stroke-blue-600"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  strokeDashoffset="0"
                />
              </svg>
            </span>{' '}
            for the web & AI.
          </h1>

          {/* Supporting Bio Paragraph */}
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
            Full-stack platforms, autonomous AI agents, and developer tools — built end to end, from database to deploy.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#projects"
              onClick={() => sfx.playStamp()}
              className="inline-flex items-center gap-3 border-2 border-ink bg-blue-600 px-6 py-3 font-mono text-xs font-medium uppercase tracking-[0.15em] text-paper shadow-print transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
            >
              See the work →
            </a>

            <a
              href="#contact"
              onClick={() => sfx.playClick()}
              className="link-pen font-mono text-xs font-medium uppercase tracking-[0.15em] text-ink hover:text-blue-600"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right Portrait & Hand-drawn Annotation Column */}
        <figure className="relative mx-auto w-full max-w-sm lg:col-span-5">
          {/* Hand-drawn "that's me" pointer arrow in Blue */}
          <div
            aria-hidden="true"
            className="absolute -left-32 top-6 hidden w-32 lg:block select-none pointer-events-none"
          >
            <p className="-rotate-6 font-mono text-[11px] uppercase tracking-[0.15em] text-blue-600 font-semibold">
              that's me
            </p>
            <svg viewBox="0 0 100 48" className="mt-1 w-24">
              <path
                d="M6,8 C18,38 55,44 88,30 M78,26 L90,29 L84,39"
                fill="none"
                className="stroke-blue-600"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Photo Frame with Tape and Shadows */}
          <div className="relative border-2 border-ink bg-paper p-3 shadow-print rotate-1 transition-transform duration-300 hover:rotate-0">
            {/* Top scotch tape stickers */}
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
              alt="Portrait of Pratham Sahu"
              width="900"
              height="1100"
              className="aspect-[4/5] w-full object-cover border border-ink/10"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://raw.githubusercontent.com/prathamsahu31/Portfolio/refs/heads/main/src/components/Profile%20Photo%20872x872.jpg";
              }}
            />

            <figcaption className="flex items-center justify-between gap-2 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <button
                type="button"
                onClick={handleTruthClick}
                title="Click to toggle identity caption"
                className="cursor-pointer text-left transition-colors hover:text-blue-600 flex items-center gap-1"
              >
                <span>fig. 01 — {truths[truthIndex]}</span>
                <span className="text-[9px] text-blue-600 font-bold">✎</span>
              </button>
              <span className="shrink-0 text-blue-600 font-semibold">open to work</span>
            </figcaption>
          </div>
        </figure>

      </div>
    </section>
  );
}
