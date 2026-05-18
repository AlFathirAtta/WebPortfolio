import React from 'react';

const testimonials = [
  {
    name: "Bapak Budi Santoso",
    role: "Guru Pembimbing Web Dev",
    quote: "Fathir memiliki dedikasi yang tinggi dalam belajar. Proyek website yang ia kerjakan selalu rapi, sesuai standar, dan memiliki desain yang menarik.",
    image: "https://ui-avatars.com/api/?name=Budi+Santoso&background=0D8ABC&color=fff"
  },
  {
    name: "Andi Pratama",
    role: "Ketua OSIS",
    quote: "Sangat puas dengan hasil kerja Fathir dalam pembuatan website acara sekolah. Pengerjaannya cepat dan tampilannya sangat modern.",
    image: "https://ui-avatars.com/api/?name=Andi+Pratama&background=0D8ABC&color=fff"
  },
  {
    name: "Siti Rahmawati",
    role: "Pemilik UMKM Lokal",
    quote: "Website e-commerce sederhana yang dibuatkan sangat membantu penjualan produk saya. Sangat mudah digunakan dan responsif.",
    image: "https://ui-avatars.com/api/?name=Siti+Rahmawati&background=0D8ABC&color=fff"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-50 mb-4 drop-shadow-sm">Apa Kata Mereka</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Beberapa tanggapan dan testimoni dari guru, rekan, maupun klien yang pernah bekerja sama dengan saya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative hover:shadow-[var(--shadow-neon-primary)] transition-shadow duration-300">
              <div className="absolute top-6 right-8 text-primary-900/50">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center mt-auto border-t border-slate-800 pt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 border-2 border-primary-500/50"
                />
                <div>
                  <h4 className="font-bold text-slate-50">{testimonial.name}</h4>
                  <p className="text-sm text-primary-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
