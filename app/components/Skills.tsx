import React from 'react';

const hardSkills = [
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React / Next.js', level: 75 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'UI/UX Design', level: 70 },
  { name: 'Responsive Web Design', level: 95 },
];

const tools = [
  { name: 'VS Code', icon: '💻' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Git / GitHub', icon: '🔧' },
  { name: 'Vercel', icon: '🚀' },
  { name: 'Node.js (Dasar)', icon: '🟩' },
  { name: 'Canva', icon: '🖌️' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-50 mb-4 drop-shadow-sm">Keahlian & Tools</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Keterampilan teknis dan alat yang saya gunakan sehari-hari untuk mengembangkan proyek dan mewujudkan ide menjadi kenyataan digital.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Hard Skills */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-slate-50 mb-8 flex items-center drop-shadow-sm">
              <span className="bg-slate-900 text-primary-400 border border-primary-500/30 shadow-[0_0_10px_rgba(56,189,248,0.3)] p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </span>
              Hard Skills
            </h3>
            <div className="space-y-6">
              {hardSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-300">{skill.name}</span>
                    <span className="text-sm font-bold text-primary-400 drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-primary-400 to-primary-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(56,189,248,0.8)]" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-slate-50 mb-8 flex items-center drop-shadow-sm">
              <span className="bg-slate-900 text-primary-400 border border-primary-500/30 shadow-[0_0_10px_rgba(56,189,248,0.3)] p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
              </span>
              Software & Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-800 hover:border-primary-500/50 hover:shadow-[var(--shadow-neon)] transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-4xl mb-3 drop-shadow-sm">{tool.icon}</span>
                  <span className="font-semibold text-slate-300">{tool.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-slate-900 rounded-xl border border-primary-500/30 shadow-[var(--shadow-neon-primary)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full mix-blend-screen filter blur-2xl opacity-50 transform translate-x-10 -translate-y-10"></div>
              <h4 className="text-lg font-bold text-white mb-2 relative z-10 drop-shadow-sm">Sedang Mempelajari...</h4>
              <p className="text-slate-300 relative z-10">
                Saat ini saya sedang mendalami React dan Next.js, serta dasar-dasar backend menggunakan Node.js dan database SQL untuk menjadi pengembang Fullstack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
