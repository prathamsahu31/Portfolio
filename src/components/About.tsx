import { motion } from 'motion/react';
import { Code2, Cpu, Globe, Layout } from 'lucide-react';

export function About() {
  const skills = [
    { name: 'Languages', icon: <Code2 className="text-emerald-400" />, desc: 'C++, Python, Java, SQL' },
    { name: 'Frontend & Design', icon: <Layout className="text-indigo-400" />, desc: 'Modern Frontend, Figma' },
    { name: 'Backend & Systems', icon: <Cpu className="text-rose-400" />, desc: 'Supabase, Linux' },
    { name: 'Tools & Automation', icon: <Globe className="text-cyan-400" />, desc: 'n8n, Git, GitHub' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg"
          >
            <p className="text-neutral-400 leading-relaxed">
              I am a Computer Science Engineering (CSE) student at Netaji Subhas University of Technology (NSUT), graduating in 2029. My journey in tech is driven by a deep curiosity to build efficient, scalable, and user-centric solutions.
            </p>
            <p className="text-neutral-400 leading-relaxed mt-4">
              I specialize in a diverse set of technologies ranging from low-level programming to modern web development and ai workflow automation. I believe in writing clean code and constantly learning new tools to stay at the forefront of innovation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <p className="text-sm text-neutral-400">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
