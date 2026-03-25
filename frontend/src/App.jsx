import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark bg-grid-pattern bg-grid text-white relative">
      {/* Global subtle radial gradient */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 via-dark/50 to-dark opacity-50 z-0"></div>
      
      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
