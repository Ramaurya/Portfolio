import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi, I came from your portfolio.");
    window.open(`https://wa.me/919580584500?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">Connection</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Open for new opportunities, scalable projects, and technical discussions.</p>
        </motion.div>

        <div className="glass-card p-8 md:p-10 border-t-4 border-t-neon-cyan">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400">{'<Name />'}</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your name"
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 focus:box-glow transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400">{'<Email />'}</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your email"
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 focus:box-glow transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-400">{'<Message />'}</label>
              <textarea 
                rows="5"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="How can we collaborate?"
                className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 focus:box-glow transition-all resize-none"
              ></textarea>
            </div>

            {status.message && (
              <div className={`p-4 rounded-lg border flex items-center gap-2 ${
                status.type === 'success' ? 'border-green-500 bg-green-500/10 text-green-400' :
                status.type === 'error' ? 'border-red-500 bg-red-500/10 text-red-400' :
                'border-blue-500 bg-blue-500/10 text-blue-400'
              }`}>
                <span>{status.message}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                type="submit"
                disabled={status.type === 'loading'}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-neon-cyan text-dark font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {status.type === 'loading' ? 'Sending...' : 'Send via Email'}
              </button>
              
              <button 
                type="button"
                onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 py-4 glass-card text-white hover:text-[#25D366] hover:border-[#25D366]/50 transition-all font-semibold"
              >
                <MessageSquare size={18} />
                WhatsApp Me
              </button>
            </div>
          </form>
        </div>

        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-gray-500 text-sm tracking-widest uppercase mb-4 font-mono">Drop a line</p>
            <a href="mailto:op209402singh@gmail.com" className="text-4xl md:text-6xl font-bold hover:text-neon-cyan transition-colors flex flex-wrap items-center">
              op209402singh<span className="text-gray-600">@gmail.com</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-8 text-sm font-mono tracking-wider font-bold text-gray-300">
            <a href="https://github.com/Ramaurya/ramaurya" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-neon-cyan transition-colors">
              GITHUB ↗
            </a>
            <a href="https://www.linkedin.com/in/rajkushwaha78/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-neon-cyan transition-colors">
              LINKEDIN ↗
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono tracking-wide">
          <p>© {new Date().getFullYear()} RAJ KUSHWAHA. ALL RIGHTS RESERVED.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            ARCHITECTED WITH <span className="text-neon-cyan">♡</span> PASSION
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;