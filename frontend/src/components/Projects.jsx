import { motion } from 'framer-motion';
import { ExternalLink, Github, Activity, ShieldAlert, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sasta Painter",
      description: "A smart digital platform that connects users with affordable and reliable painters, enabling seamless booking, transparent pricing, and efficient service management.",
      tags: ["React (Vite)", "Node.js", "Express.js", "MongoDB", "Google OAuth", "Tailwind CSS"],
      icon: <Activity className="text-neon-cyan" size={24} />,
      liveLink: "https://sastapainter.in/",
      githubLink: "https://github.com/Ramaurya/sasta-painter2"
    },
    {
      title: "Manisha-Enterprises E-commerce",
      description: "Developed a full-featured client-based e-commerce platform, implementing secure user authenticationwith OTP verification to safeguard customer accounts and ensure data integrity and privacy",
      tags: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
      icon: <ShieldAlert className="text-neon-cyan" size={24} />,
      githubLink: "https://github.com/Ramaurya/Manisha-Enterprises-Ecommerce-Website"
    },
    {
      title: "Exam Plus ",
      description: "Created a scalable MERN stack application (React/Redux, Node/Express) for online assessments supportingthree distinct user roles (Admin, Teacher, Student) and securing all application endpoints using Passport.js authentication",

      tags: ["React (Vite)", "Node.js", "Express.js", "Passport.js", "MongoDB"],
      icon: <Code className="text-neon-cyan" size={24} />,
      liveLink: "#",
      githubLink: "https://github.com/Ramaurya/ONLINE-EXAM-PORTAL"
    },
    {
      title: "Flip Coin",
      description: "A real-time cricket exchange platform featuring live score integration, multi-level user management, and high-performance data handling for seamless and responsive user experience.",
      tags: ["Express.js", "MongoDB", "Mongoose", "Postman" , "Websocket"],
      icon: <ExternalLink className="text-neon-cyan" size={24} />,
      liveLink: "flipcoin.in",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">Executions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A selection of technical solutions built with modern architectures.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group relative overflow-hidden"
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-dark/50 rounded-lg border border-white/5 group-hover:border-neon-cyan/30 transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex gap-4">
                    {project.githubLink && project.githubLink !== "#" && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View Source Code">
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveLink && project.liveLink !== "#" && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan transition-colors" title="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-glow transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-neon-cyan px-2 py-1 bg-neon-cyan/5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  {project.liveLink && project.liveLink !== "#" && (
                    <a 
                      href={project.liveLink.startsWith('http') ? project.liveLink : `https://${project.liveLink}`}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-neon-cyan transition-colors group/btn"
                    >
                      Live Demo
                      <span className="transform translate-x-0 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                  {project.githubLink && project.githubLink !== "#" && (
                    <a 
                      href={project.githubLink}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-white transition-colors group/btn2"
                    >
                      GitHub
                      <span className="transform translate-x-0 group-hover/btn2:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;