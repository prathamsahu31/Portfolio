import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, Twitter, FileText } from 'lucide-react';
import { sfx } from '../utils/sfx';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    sfx.playPop();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    sfx.playStamp();
    setIsSent(true);

    // Open mail client with composed message
    const subject = encodeURIComponent(`Portfolio Message from ${formState.name}`);
    const body = encodeURIComponent(`Hi Pratham,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`);
    window.open(`mailto:prathamsahu31@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setIsSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="scroll-mt-28">
      {/* Section Header with Stamp and Sujal's Dashed Line */}
      <div className="mx-auto max-w-6xl px-6 pt-20 lg:px-8">
        <div>
          <span className="inline-block bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-paper shadow-print-sm">
            Contact
          </span>
          <div className="mt-5 flex items-baseline gap-6">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-ink">
              Let's build <span className="marker whitespace-nowrap">together</span>
            </h2>
            <span
              aria-hidden="true"
              className="hidden flex-1 origin-left border-t-2 border-dashed border-ink/30 sm:block"
            />
          </div>
        </div>
      </div>

      {/* Editorial Contact Box Grid */}
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Have an internship, project, or idea? Reach out directly.
            </p>

            {/* Email Card */}
            <div className="border-2 border-ink bg-paper p-4 shadow-print-sm flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-paper text-ink">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted block">Direct Email</span>
                  <a
                    href="mailto:prathamsahu31@gmail.com"
                    onClick={() => sfx.playClick()}
                    className="font-display text-sm sm:text-base font-bold text-ink hover:text-blue-600 transition-colors"
                  >
                    prathamsahu31@gmail.com
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard('prathamsahu31@gmail.com', 'email')}
                className="p-2 border border-ink/20 bg-paper hover:bg-neutral-200 text-ink transition-colors"
                title="Copy email"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={16} className="text-blue-600" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="border-2 border-ink bg-paper p-4 shadow-print-sm flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-paper text-ink">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted block">Phone Number</span>
                  <a
                    href="tel:+919555954501"
                    onClick={() => sfx.playClick()}
                    className="font-display text-sm sm:text-base font-bold text-ink hover:text-blue-600 transition-colors"
                  >
                    +91 9555954501
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard('+919555954501', 'phone')}
                className="p-2 border border-ink/20 bg-paper hover:bg-neutral-200 text-ink transition-colors"
                title="Copy phone"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check size={16} className="text-blue-600" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="border-2 border-ink bg-paper p-4 shadow-print-sm flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-paper text-ink">
                <MapPin size={18} />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted block">Location</span>
                <span className="font-display text-sm sm:text-base font-bold text-ink">
                  Delhi, India · NSUT Campus
                </span>
              </div>
            </div>

            {/* Social Badges Grid */}
            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-2">Connect Online</span>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://github.com/prathamsahu31"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sfx.playClick()}
                  className="border-2 border-ink bg-paper p-3 shadow-print-sm flex items-center justify-center gap-2 font-mono text-xs font-semibold uppercase hover:bg-neutral-100 transition-all text-ink"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/prathamsahu31/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sfx.playClick()}
                  className="border-2 border-ink bg-paper p-3 shadow-print-sm flex items-center justify-center gap-2 font-mono text-xs font-semibold uppercase hover:bg-neutral-100 transition-all text-ink"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://x.com/PrathamSahu31"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sfx.playClick()}
                  className="border-2 border-ink bg-paper p-3 shadow-print-sm flex items-center justify-center gap-2 font-mono text-xs font-semibold uppercase hover:bg-neutral-100 transition-all text-ink"
                >
                  <Twitter size={14} />
                  <span>X / Twitter</span>
                </a>
              </div>
            </div>

            {/* Resume Button */}
            <div className="pt-3">
              <a
                href="https://raw.githubusercontent.com/prathamsahu31/Portfolio/main/Pratham's%20Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => sfx.playStamp()}
                className="w-full inline-flex items-center justify-center gap-2 border-2 border-ink bg-blue-600 py-3 font-mono text-xs font-bold uppercase tracking-wider text-paper shadow-print hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                <FileText size={16} />
                <span>Download Resume (PDF) ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dispatch Note / Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendMessage}
              className="border-2 border-ink bg-paper p-6 sm:p-8 shadow-print space-y-5 ruled"
            >
              <div className="flex items-center justify-between border-b-2 border-ink/20 pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink flex items-center gap-2">
                  <span>✉️</span> DISPATCH NOTE
                </span>
                <span className="font-mono text-[10px] uppercase text-muted">
                  PRATHAM.APP
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wider font-semibold text-ink block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className="w-full border-2 border-ink bg-paper px-3 py-2 text-sm font-sans text-ink focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-muted/60"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-wider font-semibold text-ink block">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full border-2 border-ink bg-paper px-3 py-2 text-sm font-sans text-ink focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-muted/60"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wider font-semibold text-ink block">
                  Message / Inquiry *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Pratham, I'd like to discuss a project / internship opportunity regarding..."
                  className="w-full border-2 border-ink bg-paper px-3 py-2 text-sm font-sans text-ink focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-muted/60 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 border-2 border-ink bg-ink py-3 font-mono text-xs font-bold uppercase tracking-wider text-paper shadow-print-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-blue-600 transition-all active:translate-x-[3px] active:translate-y-[3px]"
              >
                {isSent ? (
                  <span className="flex items-center gap-2 text-yellow-300">
                    <Check size={16} /> Composing Email...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={14} /> Send Dispatch Note →
                  </span>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
