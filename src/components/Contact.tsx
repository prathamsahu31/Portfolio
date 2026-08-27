import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Copy, Check, Send, Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';
import { useToast } from './Toast';

export function Contact() {
  const { showToast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showToast(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all required fields.', 'info');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      showToast('Message received! Thanks for reaching out.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-neutral-900/30 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono text-rose-400 tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mt-1 mb-4">Let's Connect & Build</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mx-auto" />
          <p className="text-neutral-400 mt-5 max-w-xl mx-auto text-sm sm:text-base">
            Open to summer internship opportunities, freelance engineering projects, AI workflow discussions, or software collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block">Email Address</span>
                  <a
                    href="mailto:prathamsahu31@gmail.com"
                    className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-400 transition-colors"
                  >
                    prathamsahu31@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard('prathamsahu31@gmail.com', 'Email')}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedField === 'Email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block">Phone Number</span>
                  <a
                    href="tel:+919555954501"
                    className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-400 transition-colors"
                  >
                    +91 9555954501
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard('+919555954501', 'Phone')}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedField === 'Phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400">
                <MapPin size={22} />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-400 block">Location</span>
                <p className="text-sm sm:text-base font-semibold text-white">Delhi, India</p>
              </div>
            </div>

            {/* Social Connect Links Grid */}
            <div className="pt-2">
              <span className="text-xs font-mono text-neutral-400 block mb-3">Profiles & Platforms</span>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://www.linkedin.com/in/prathamsahu31/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 flex items-center justify-between text-neutral-300 hover:text-white transition-all text-xs font-medium group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin size={16} className="text-indigo-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight size={14} className="text-neutral-500 group-hover:text-white" />
                </a>

                <a
                  href="https://github.com/prathamsahu31"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/40 hover:bg-white/10 flex items-center justify-between text-neutral-300 hover:text-white transition-all text-xs font-medium group"
                >
                  <div className="flex items-center gap-2">
                    <Github size={16} className="text-neutral-200" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight size={14} className="text-neutral-500 group-hover:text-white" />
                </a>

                <a
                  href="https://x.com/PrathamSahu31"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 flex items-center justify-between text-neutral-300 hover:text-white transition-all text-xs font-medium group"
                >
                  <div className="flex items-center gap-2">
                    <Twitter size={16} className="text-cyan-400" />
                    <span>Twitter</span>
                  </div>
                  <ArrowUpRight size={14} className="text-neutral-500 group-hover:text-white" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-neutral-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 focus:bg-white/[0.07] outline-none transition-all text-sm text-white placeholder-neutral-500"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-neutral-300">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 focus:bg-white/[0.07] outline-none transition-all text-sm text-white placeholder-neutral-500"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-neutral-300">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 focus:bg-white/[0.07] outline-none transition-all text-sm text-white placeholder-neutral-500"
                  placeholder="Project Collaboration / Summer Internship"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-neutral-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 focus:bg-white/[0.07] outline-none transition-all text-sm text-white placeholder-neutral-500 resize-none"
                  placeholder="Hello Pratham, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-neutral-950 font-bold text-sm hover:from-emerald-400 hover:to-cyan-400 transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : isSent ? (
                  <span className="flex items-center gap-2">
                    <Check size={18} /> Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} /> Send Direct Message
                  </span>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
