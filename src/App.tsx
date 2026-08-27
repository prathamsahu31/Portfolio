import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ToastProvider } from './components/Toast';
import { TerminalWidget } from './components/TerminalWidget';

export default function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden">
        {/* Ambient Grid Layer */}
        <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>

        {/* Interactive Terminal / CLI Widget */}
        <TerminalWidget />

        {/* Page Footer */}
        <Footer />
      </div>
    </ToastProvider>
  );
}
