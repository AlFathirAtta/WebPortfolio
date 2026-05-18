import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-50 mb-4 drop-shadow-sm">Hubungi Saya</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
          <p className="text-lg text-slate-300">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-[var(--shadow-neon)] border border-slate-800 flex flex-col md:flex-row">
          {/* Contact Info */}
          <div className="w-full md:w-2/5 bg-gradient-to-br from-slate-800 to-slate-900 p-10 text-white relative overflow-hidden border-r border-slate-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 opacity-5 rounded-full transform translate-x-20 -translate-y-20 filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500 opacity-5 rounded-full transform -translate-x-20 translate-y-20 filter blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Informasi Kontak</h3>
              <p className="text-slate-300 mb-8">
                Silakan hubungi saya melalui form di samping atau melalui kontak di bawah ini.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-primary-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <div>
                    <h4 className="font-semibold text-slate-50">Email</h4>
                    <a href="mailto:hello@example.com" className="text-primary-400 hover:text-primary-300 transition-colors drop-shadow-sm">alfathir.attaullah@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-primary-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <div>
                    <h4 className="font-semibold text-slate-50">Lokasi</h4>
                    <p className="text-slate-300">Indonesia</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-50 mb-4">Media Sosial</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-950/50 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-all border border-slate-700">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-950/50 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-all border border-slate-700">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full md:w-3/5 p-10 bg-slate-950">
            <h3 className="text-2xl font-bold text-slate-50 mb-6 drop-shadow-sm">Kirim Pesan</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nama Lengkap</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-900 text-white focus:shadow-[0_0_10px_rgba(56,189,248,0.3)]" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-900 text-white focus:shadow-[0_0_10px_rgba(56,189,248,0.3)]" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subjek</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-900 text-white focus:shadow-[0_0_10px_rgba(56,189,248,0.3)]" placeholder="Peluang Kolaborasi" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Pesan</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-900 text-white focus:shadow-[0_0_10px_rgba(56,189,248,0.3)]" placeholder="Tulis pesan Anda di sini..."></textarea>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <a href="#" className="flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors drop-shadow-sm">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Unduh CV Saya
                </a>
                <button type="button" className="px-8 py-3 bg-primary-400 hover:bg-primary-300 text-slate-950 rounded-lg font-bold transition-all duration-300 shadow-[var(--shadow-neon-strong)] transform hover:-translate-y-1">
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
