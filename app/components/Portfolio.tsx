import React from 'react';
import Link from 'next/link';
import ImageCarousel from './ImageCarousel';

const portfolios = [
  {
    id: 'pengalaman-organisasi',
    title: "Pengalaman Organisasi & Kepanitiaan",
    category: "Organisasi",
    description: "Perjalanan saya dalam berorganisasi, memimpin komunitas, dan berkontribusi dalam berbagai kepanitiaan.",
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop"
    ],
  },
  {
    id: 'frontend-development',
    title: "Frontend Development",
    category: "Web Development",
    description: "Kumpulan proyek pengembangan aplikasi web dari sisi frontend.",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
    ],
  },
  {
    id: 'ui-ux-design',
    title: "UI/UX Design",
    category: "Design",
    description: "Karya desain antarmuka dan pengalaman pengguna untuk berbagai platform digital.",
    images: [
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
    ],
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">Portofolio & Pengalaman</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Kumpulan perjalanan organisasi, proyek pengembangan web, dan karya desain yang pernah saya lakukan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolios.map((portfolio) => (
            <Link key={portfolio.id} href={`/portfolio/${portfolio.id}`} className="block h-full group">
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-md group-hover:shadow-[var(--shadow-neon)] transition-all duration-300 border border-slate-800 hover:border-primary-500/50 flex flex-col h-full transform group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden group/image">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-50 group-hover:opacity-20 transition-opacity"></div>
                  
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-110">
                    <ImageCarousel images={portfolio.images} alt={portfolio.title} />
                  </div>
                  
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-slate-950/80 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-primary-400 rounded-full border border-primary-500/30 shadow-[0_0_10px_rgba(56,189,248,0.3)]">
                      {portfolio.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow relative z-20">
                  <h3 className="text-2xl font-bold text-slate-50 mb-3 group-hover:text-primary-400 transition-colors drop-shadow-sm">
                    {portfolio.title}
                  </h3>
                  
                  <div className="mb-4 space-y-2 flex-grow">
                    <p className="text-slate-300 leading-relaxed">{portfolio.description}</p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center">
                    <span className="text-primary-400 font-medium group-hover:translate-x-1 transition-transform group-hover:drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]">Lihat Detail &rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
