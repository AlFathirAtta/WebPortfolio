import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categoryData } from '@/app/data/portfolio';

import ImageCarousel from '@/app/components/ImageCarousel';

export default async function PortfolioItemDetail({ 
  params 
}: { 
  params: Promise<{ id: string; itemId: string }> 
}) {
  const { id, itemId } = await params;
  const category = categoryData[id];

  if (!category) {
    notFound();
  }

  const item = category.items.find((item) => item.slug === itemId);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 py-24 relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-400/5 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <Link href={`/portfolio/${id}`} className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium mb-10 transition-colors drop-shadow-sm group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span> Kembali ke {category.title}
        </Link>
        
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-slate-900 text-primary-400 px-4 py-2 text-sm font-semibold rounded-full border border-primary-500/50 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              {item.role}
            </span>
            <span className="text-slate-400 text-sm font-medium flex items-center bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
              <span className="mr-2">📅</span> {item.period}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-8 drop-shadow-sm leading-tight">{item.title}</h1>
          
          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-[var(--shadow-neon)] bg-slate-900 h-[40vh] md:h-[60vh] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 pointer-events-none"></div>
            <ImageCarousel images={item.gallery && item.gallery.length > 0 ? item.gallery : [item.image]} alt={item.title} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                <span className="w-8 h-1 bg-primary-500 rounded-full mr-4 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                Tentang Event / Proyek
              </h2>
              <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed">
                <p>{item.fullDescription || item.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center">
                <span className="w-8 h-1 bg-primary-500 rounded-full mr-4 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                Peran & Kontribusi Saya
              </h2>
              <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800/80">
                <p>{item.roleDescription || "Detail peran belum ditambahkan."}</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 lg:col-span-1">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-md">
              <h3 className="text-lg font-bold text-slate-50 mb-4">Informasi Singkat</h3>
              <ul className="space-y-4">
                <li className="border-b border-slate-800/50 pb-4">
                  <span className="block text-sm text-slate-400 mb-1">Posisi / Peran</span>
                  <span className="font-medium text-slate-200">{item.role}</span>
                </li>
                <li className="border-b border-slate-800/50 pb-4">
                  <span className="block text-sm text-slate-400 mb-1">Periode Pelaksanaan</span>
                  <span className="font-medium text-slate-200">{item.period}</span>
                </li>
                <li>
                  <span className="block text-sm text-slate-400 mb-1">Kategori</span>
                  <span className="font-medium text-primary-400">{category.title}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {item.gallery && item.gallery.length > 0 && (
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-50 mb-4">Dokumentasi Kegiatan</h2>
              <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {item.gallery.map((imgUrl, idx) => (
                <div key={idx} className="group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video relative cursor-pointer">
                  <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img 
                    src={imgUrl} 
                    alt={`Dokumentasi ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
