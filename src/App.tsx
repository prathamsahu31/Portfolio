import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Toolbox } from './components/About';
import { FieldNotes } from './components/FieldNotes';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)' }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main">
        <Hero />
        <Marquee />
        <Toolbox />
        <FieldNotes />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Custom Cursor (desktop only) */}
      <Cursor />
    </div>
  );
}
