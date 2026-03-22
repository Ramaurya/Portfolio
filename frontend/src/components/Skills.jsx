import { motion } from 'framer-motion';
import { 
  MonitorPlay, Server, Database, Wrench, 
  CodeSquare, Layers, MessageSquare, ShieldCheck, Users
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <MonitorPlay className="text-neon-cyan mb-4" size={32} />,
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "EJS"]
    },
    {
      title: "Backend",
      icon: <Server className="text-neon-cyan mb-4" size={32} />,
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Database",
      icon: <Database className="text-neon-cyan mb-4" size={32} />,
      skills: ["MongoDB" , "MySQL"]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="text-neon-cyan mb-4" size={32} />,
      skills: ["Git", "Docker", "Firebase"]
    },
    {
      title: "Languages",
      icon: <CodeSquare className="text-neon-cyan mb-4" size={32} />,
      skills: ["Java", "C++", "C", "Python", "PHP"]
    }
  ];

  const softSkills = [
    { name: "Communication", icon: <MessageSquare size={20} className="text-neon-cyan" /> },
    { name: "Collaboration", icon: <Users size={20} className="text-neon-cyan" /> },
    { name: "Problem Solving", icon: <Layers size={20} className="text-neon-cyan" /> }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">Technical</span> Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Technologies and tools I use to build scalable digital solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Skills Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 hover:bg-white/10 hover:border-neon-cyan/50 hover:box-glow transition-all duration-300 group"
              >
                <div className="group-hover:scale-110 transition-transform duration-300 transform origin-left">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-dark/50 border border-white/10 rounded-full text-sm text-gray-300 group-hover:border-neon-cyan/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills Side Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 border-l-4 border-l-neon-cyan flex flex-col h-full bg-gradient-to-b from-white/5 to-transparent"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <ShieldCheck className="text-neon-cyan" /> 
              Core Strengths
            </h3>
            <div className="flex flex-col gap-6 flex-grow justify-center">
              {softSkills.map((skill, idx) => (
                <div key={skill.name} className="flex items-center gap-4 group">
                  <div className="p-3 glass-card rounded-lg group-hover:bg-neon-cyan/10 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;