import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Java programming (Neocolab)",
      issuer: "Neocolab",
      date: "Completed",
      link: "https://drive.google.com/file/d/1I3EWP00SHPPuQhL9oTLi5iQMrUjWE_RA/view",
      icon: <Award className="text-neon-cyan" size={24} />
    },
    {
      title: "Computational Theory: Language Principle & Finite Automata Theory",
      issuer: "Infosys",
      date: "Completed",
      link: "https://drive.google.com/file/d/1dMIcZMT442fQVqO4bZQD-3uLOetqVH4v/view",
      icon: <Award className="text-neon-cyan" size={24} />
    }
  ];

  return (
    <section id="certificates" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Verified achievements and recognized skills in the field of computer science.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-dark/50 rounded-lg border border-white/5 group-hover:border-neon-cyan/30 transition-colors">
                    {cert.icon}
                  </div>
                  <div className="flex gap-4">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan transition-colors" title="View Certificate">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-glow transition-all line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  Issued by {cert.issuer}
                </p>

                <div className="flex gap-6">
                  <a 
                    href={cert.link}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-neon-cyan transition-colors group/btn"
                  >
                    View Certificate
                    <span className="transform translate-x-0 group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;