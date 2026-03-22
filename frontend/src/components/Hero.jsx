import { motion } from 'framer-motion';
import { Terminal, Database, Code2, Server, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      
      {/* Floating Elements Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-1/4">
          <Code2 size={48} className="text-neon-cyan" />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-1/3 right-1/4">
          <Database size={64} className="text-neon-blue" />
        </motion.div>
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} className="absolute top-1/3 right-1/3">
          <Server size={32} className="text-gray-500" />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto w-full z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-neon-cyan"></span>
            <span className="text-neon-cyan font-mono tracking-widest uppercase text-sm">Full Stack Developer</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-gray-400">BUILDING</span>
            <span className="block text-white text-glow">POWERFUL</span>
            <span className="block text-white text-glow">SCALABLE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">WEB SOLUTIONS.</span>
          </h1>

          <div className="glass-card p-6 mb-8 border-l-4 border-l-neon-cyan">
            <p className="text-gray-300 leading-relaxed text-lg">
              <span className="text-neon-cyan font-mono">{`> `}</span>
              Hi, I'm <strong className="text-white font-semibold">Raj Kushwaha</strong> — a Full Stack Developer specializing in the MERN stack. I build fast, scalable, and user-focused web applications with clean architecture and real-time capabilities. Passionate about turning ideas into impactful digital products.
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-neon-cyan ml-2 align-middle"
              />
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 bg-neon-cyan text-dark font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 glass-card text-white hover:text-neon-cyan hover:border-neon-cyan/50 transition-all font-semibold flex items-center gap-2">
              Contact Me
            </a>
            <a href="https://drive.google.com/file/d/1wNk4KHfNPsJfkWcuUkGqRB5pVFmFF_g5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-3 glass-card text-white hover:text-white hover:border-white/50 transition-all font-semibold flex items-center gap-2">
              <Download size={18} />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Decorative right side graphic representing code / terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="glass-card shadow-2xl overflow-hidden box-glow border-neon-cyan/20">
            <div className="flex items-center gap-2 bg-white/5 p-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-400 font-mono ml-2">raj@portfolio: ~/web-solutions</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
              <p className="mb-2"><span className="text-green-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-300">{`{`}</span></p>
              <p className="ml-4 mb-1">name: <span className="text-orange-300">'Raj Kushwaha'</span>,</p>
              <p className="ml-4 mb-1">stack: <span className="text-orange-300">'MERN'</span>,</p>
              <p className="ml-4 mb-1">skills: <span className="text-purple-400">[</span><span className="text-orange-300">'React'</span>, <span className="text-orange-300">'Node.js'</span>, <span className="text-orange-300">'MongoDB'</span><span className="text-purple-400">]</span>,</p>
              <p className="ml-4 mb-2">passion: <span className="text-orange-300">'Building real-time systems'</span></p>
              <p className="text-yellow-300 mb-4">{`}`};</p>
              
              <p><span className="text-green-400">developer</span>.<span className="text-blue-300">initialize</span><span className="text-purple-400">()</span>;</p>
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1.5, duration: 0.5 }}
                className="mt-4 text-neon-cyan flex items-center"
              >
                {`> System online. Ready for execution... `}
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }} 
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-neon-cyan ml-1"
                />
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;