import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Toolbox } from './components/Toolbox';
import { AboutSection } from './components/AboutSection';
import { Projects } from './components/Projects';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DoodleCanvas } from './components/DoodleCanvas';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-blue-600 selection:text-paper relative">
      {/* Interactive Page Doodle Canvas & Left Margin Line */}
      <DoodleCanvas />

      {/* Global Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main" className="relative z-10">
        <Hero />
        <Marquee />
        <Toolbox />
        <AboutSection />
        <Projects />
        <Reviews />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}
