import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Pratham Sahu. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-neutral-500">
          <a href="#" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
