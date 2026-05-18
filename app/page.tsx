import React from "react";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-50">
      {/* Navbar Sederhana */}
      <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800 transition-all shadow-[var(--shadow-neon)]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-slate-50 tracking-tighter">
            Portfolio<span className="text-primary-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]">.</span>
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-sm font-medium text-slate-300 hover:text-primary-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all">Beranda</a>
            <a href="#portfolio" className="text-sm font-medium text-slate-300 hover:text-primary-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all">Portofolio</a>
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-primary-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all">Tentang</a>
            <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-primary-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all">Pengalaman</a>
            <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-primary-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all">Keahlian</a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-primary-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all">Kontak</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Portfolio />
        <About />
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-800 text-center">
        <div className="container mx-auto px-6">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Muhammad Al Fathir Attaullah. Dibuat dengan semangat belajar.
          </p>
        </div>
      </footer>
    </div>
  );
}