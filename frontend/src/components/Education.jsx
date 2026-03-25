import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      score: "CGPA: 7.13",
      duration: "Aug' 2023 – Present"
    },
    {
      institution: "RK Education Centre",
      location: "Kanpur, Uttar Pradesh",
      degree: "Intermediate",
      score: "Percentage: 86.6%",
      duration: "May 2021 – Jun' 2022"
    },
    {
      institution: "RND Education Center",
      location: "Kanpur, Uttar Pradesh",
      degree: "Matriculation",
      score: "Percentage: 88%",
      duration: "Mar' 2019 – Apr' 2020"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">Background</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">My educational journey and academic qualifications.</p>
        </motion.div>

        <div className="space-y-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group relative overflow-hidden"
            >
              {/* Decorative left border */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-8 md:p-10 flex flex-col md:flex-row gap-6 md:items-center">
                <div className="flex-shrink-0 p-4 bg-dark/50 rounded-full border border-white/5 group-hover:border-neon-cyan/30 transition-colors">
                  <GraduationCap className="text-neon-cyan" size={32} />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-glow transition-all">
                    {edu.degree}
                  </h3>
                  <div className="text-lg text-neon-blue font-medium mb-3">
                    {edu.institution}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} className="text-gray-500" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} className="text-gray-500" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0 md:text-right">
                  <div className="inline-block px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/20 rounded-lg text-neon-cyan font-mono font-bold">
                    {edu.score}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;