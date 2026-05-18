import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-400/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-neon-primary)] border-4 border-slate-800 transform transition-transform hover:scale-105 duration-500">
              <img 
                src="/Profile.jpg" 
                alt="Muhammad Al Fathir Attaullah" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
                <h3 className="text-2xl font-bold">Muhammad Al Fathir Attaullah</h3>
                <p className="text-primary-300 font-medium">Pelajar SMK Telkom Malang</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-slate-50 mb-4">Tentang Saya</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mb-8 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
            
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Halo! Saya adalah seorang pelajar SMK yang memiliki ketertarikan mendalam pada dunia teknologi, khususnya pengembangan web dan desain antarmuka. Saya mulai belajar coding karena rasa penasaran saya tentang bagaimana sebuah website dibuat, dan sejak itu saya jatuh cinta pada proses kreatif di baliknya.
            </p>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Walaupun masih berstatus pelajar, saya aktif mengikuti berbagai pelatihan mandiri dan mengerjakan proyek-proyek praktis untuk mengasah keahlian saya. Saya percaya bahwa dengan konsistensi dan kerja keras, batasan usia bukanlah penghalang untuk menciptakan karya yang bermanfaat.
            </p>
            

          </div>
        </div>
      </div>
    </section>
  );
}
