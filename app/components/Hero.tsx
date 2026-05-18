import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-20 pb-12 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/20 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-primary-400/20 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-sm">
          Halo, saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">Muhammad Al Fathir Attaullah</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-primary-300 mb-6 drop-shadow-sm">
          Pelajar SMK
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
          Saya antusias mempelajari teknologi baru dan menciptakan pengalaman digital yang menarik. Terus berkembang dan selalu siap menghadapi tantangan baru dalam dunia pengembangan web dan desain.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="px-8 py-4 text-slate-950 bg-primary-400 hover:bg-primary-300 rounded-full font-bold transition-all duration-300 shadow-[var(--shadow-neon-strong)] hover:shadow-[0_0_30px_rgba(56,189,248,1)] transform hover:-translate-y-1"
          >
            Lihat Karya Saya
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-primary-400 bg-transparent rounded-full font-semibold transition-all duration-300 border border-primary-400/50 hover:border-primary-400 hover:bg-primary-400/10 hover:shadow-[var(--shadow-neon)] transform hover:-translate-y-1"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
