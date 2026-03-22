import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card border-x-0 border-t-0 rounded-none shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-mono font-bold text-neon-cyan tracking-wider flex items-center gap-2">
          <span>&lt;RK /&gt;</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-neon-cyan transition-colors text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="flex items-center gap-2 px-4 py-2 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/50 rounded-lg hover:box-glow transition-all">
            <Terminal size={16} />
            <span>Terminal</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-neon-cyan"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass-card border-x-0 rounded-none p-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
               key={link.name} 
               href={link.href}
               onClick={() => setIsOpen(false)}
               className="text-gray-300 hover:text-neon-cyan py-2 block text-sm uppercase tracking-widest border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/50 rounded-lg hover:bg-neon-cyan/20 w-full mt-2">
            <Terminal size={16} />
            <span>Terminal</span>
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;