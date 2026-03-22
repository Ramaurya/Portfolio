import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden shadow-2xl relative"
        >
          {/* Decorative Top Bar */}
          <div className="bg-dark/80 px-4 py-3 border-b border-white/10 flex items-center gap-4">
             <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center flex justify-center items-center gap-2">
              <Terminal size={14} className="text-gray-400" />
              <span className="text-xs text-gray-400 font-mono">about-mono"about.md</span>
            </div>
          </div>

          <div className="p-8 md:p-12 relative">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Terminal size={200} />
            </div>

            <h2 className="text-4xl font-bold mb-8 text-white relative z-10 flex items-center gap-4">
              System <span className="text-neon-cyan">Identity</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light relative z-10">
              <p>
                <span className="text-neon-cyan text-2xl">"</span>
                I’m <strong>Raj Kushwaha</strong>, a highly dedicated Full Stack Developer focused on building <span className="text-white border-b border-neon-cyan/50">scalable</span>, <span className="text-white border-b border-neon-cyan/50">high-performance</span>, and production-grade web applications.
              </p>
              <p>
                I specialize in clean architecture, optimized systems, and <span className="text-white border-b border-neon-cyan/50">real-time data</span> handling to deliver fast, secure, and efficient solutions.
              </p>
              <p>
                With expertise across the entire development stack, I transform complex challenges into smart, scalable, and business-driven solutions. I don’t just develop applications—I build digital systems designed for <span className="text-white border-b border-neon-cyan/50">real-world impact</span> and long-term scalability.
                <span className="text-neon-cyan text-2xl ml-1">"</span>
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4 relative z-10">
              <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_#00f3ff]"></div>
                  <span className="text-sm font-mono text-gray-400">STATUS: ACTIVE</span>
              </div>
              <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_10px_#00d2ff]"></div>
                  <span className="text-sm font-mono text-gray-400">FOCUS: SCALABILITY</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;