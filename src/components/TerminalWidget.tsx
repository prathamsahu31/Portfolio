import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { useToast } from './Toast';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export function TerminalWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-xs sm:text-sm text-neutral-300">
          <p className="text-emerald-400 font-semibold">Welcome to Pratham Sahu's Interactive Terminal v2.5</p>
          <p className="text-neutral-400">Type <span className="text-cyan-400 font-mono">help</span> to view available commands, or <span className="text-cyan-400 font-mono">skills</span> to see technical stack.</p>
        </div>
      ),
    },
  ]);

  const { showToast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen, isMinimized]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode;

    switch (cmd) {
      case 'help':
        response = (
          <div className="text-xs sm:text-sm space-y-1 text-neutral-300">
            <p className="text-cyan-400 font-medium">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono text-xs">
              <div><span className="text-emerald-400">about</span> - Brief professional bio</div>
              <div><span className="text-emerald-400">skills</span> - List all technical skills</div>
              <div><span className="text-emerald-400">projects</span> - Highlighted key projects</div>
              <div><span className="text-emerald-400">edu</span> - Educational background</div>
              <div><span className="text-emerald-400">contact</span> - Reach out / contact info</div>
              <div><span className="text-emerald-400">resume</span> - Download official resume</div>
              <div><span className="text-emerald-400">clear</span> - Clear terminal output</div>
            </div>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="text-xs sm:text-sm text-neutral-300 space-y-1">
            <p className="text-white font-medium">Pratham Sahu</p>
            <p className="text-neutral-400">
              CSE undergraduate at Netaji Subhas University of Technology (NSUT), New Delhi (2025 - 2029).
              Passionate about Full-Stack Systems, AI/ML, FastMCP developer tools, and intelligent agents.
            </p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="text-xs sm:text-sm text-neutral-300 space-y-1.5 font-mono">
            <p><span className="text-emerald-400 font-semibold">Languages:</span> C++, Python, JavaScript, TypeScript, SQL</p>
            <p><span className="text-cyan-400 font-semibold">Frameworks:</span> React, FastAPI, FastMCP, Node.js, Express, Flask</p>
            <p><span className="text-indigo-400 font-semibold">AI / ML & Data:</span> Gemini API, Scikit-learn, Pandas, AI Agents</p>
            <p><span className="text-rose-400 font-semibold">Cloud & DB:</span> PostgreSQL, Supabase, Firebase, Docker, Linux, Git</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="text-xs sm:text-sm text-neutral-300 space-y-2">
            <div>
              <p className="text-emerald-400 font-semibold">1. FinFlex (AI Finance & Telegram Agent)</p>
              <p className="text-neutral-400 text-xs">React, TypeScript, Express, Supabase, Gemini, Telegram Bot</p>
            </div>
            <div>
              <p className="text-cyan-400 font-semibold">2. VIDHYA (ML Academic Early-Warning System)</p>
              <p className="text-neutral-400 text-xs">Python, Flask, Scikit-learn, Pandas, MERN Stack</p>
            </div>
          </div>
        );
        break;

      case 'edu':
      case 'education':
        response = (
          <div className="text-xs sm:text-sm text-neutral-300 space-y-1">
            <p className="text-white font-medium">Netaji Subhas University of Technology (NSUT), New Delhi</p>
            <p className="text-emerald-400">B.Tech Computer Science Engineering (2025 - 2029) · CGPA: 7.09</p>
            <p className="text-neutral-400 mt-1">St. Joseph School (Senior Sec: 81% | Junior Sec: 94%)</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="text-xs sm:text-sm text-neutral-300 space-y-1">
            <p>📧 Email: <a href="mailto:prathamsahu31@gmail.com" className="text-cyan-400 hover:underline">prathamsahu31@gmail.com</a></p>
            <p>📱 Phone: <a href="tel:+919555954501" className="text-emerald-400 hover:underline">+91 9555954501</a></p>
            <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/prathamsahu31/" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">linkedin.com/in/prathamsahu31</a></p>
            <p>🐙 GitHub: <a href="https://github.com/prathamsahu31" target="_blank" rel="noreferrer" className="text-rose-400 hover:underline">github.com/prathamsahu31</a></p>
          </div>
        );
        break;

      case 'resume':
      case 'cv':
        response = (
          <div className="text-xs sm:text-sm text-neutral-300">
            <p className="text-emerald-400">Triggering resume download...</p>
            <a href="/resume.pdf" download="Pratham_Sahu_Resume.pdf" className="text-cyan-400 underline mt-1 inline-block">
              Click here if download doesn't start automatically
            </a>
          </div>
        );
        showToast('Downloading Resume...', 'info');
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Pratham_Sahu_Resume.pdf';
        link.click();
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        response = (
          <p className="text-rose-400 text-xs sm:text-sm">
            Command not recognized: <span className="font-mono font-semibold">{cmd}</span>. Type <span className="text-cyan-300 font-mono">help</span> for a list of commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output: response }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {!isOpen && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900/90 border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 shadow-xl backdrop-blur-md transition-all text-xs sm:text-sm font-mono group"
        >
          <TerminalIcon size={16} className="group-hover:rotate-12 transition-transform" />
          <span>Interactive CLI</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </motion.button>
      )}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`w-[90vw] sm:w-[480px] rounded-2xl bg-neutral-950/95 border border-white/15 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col transition-all duration-300 ${
            isMinimized ? 'h-12' : 'h-[360px] sm:h-[420px]'
          }`}
        >
          {/* Header */}
          <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
                <button onClick={() => setIsMinimized(!isMinimized)} className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
                <button onClick={() => setIsMinimized(false)} className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
              </div>
              <span className="ml-2 font-mono text-xs text-neutral-400 flex items-center gap-1.5">
                <TerminalIcon size={13} className="text-emerald-400" />
                pratham@nsut:~
              </span>
            </div>
            <div className="flex items-center gap-1 text-neutral-400">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:text-white transition-colors"
                aria-label={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 size={13} /> : <Minimize2 size={13} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          {!isMinimized && (
            <div className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-3.5 scrollbar-thin scrollbar-thumb-white/10">
              {history.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-neutral-200">{item.command}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>
          )}

          {/* Input Form */}
          {!isMinimized && (
            <form onSubmit={handleCommand} className="p-3 bg-white/5 border-t border-white/10 flex items-center gap-2">
              <span className="text-emerald-400 font-mono font-bold text-xs sm:text-sm">➜</span>
              <span className="text-cyan-400 font-mono text-xs sm:text-sm">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'help', 'skills', 'projects'..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-white placeholder-neutral-500"
                autoFocus
              />
              <button type="submit" className="text-neutral-400 hover:text-emerald-400 p-1 transition-colors">
                <CornerDownLeft size={14} />
              </button>
            </form>
          )}
        </motion.div>
      )}
    </div>
  );
}
