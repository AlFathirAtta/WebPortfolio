import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { categoryData } from '@/app/data/portfolio';

import ImageCarousel from '@/app/components/ImageCarousel';

export default async function PortfolioCategoryDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const category = categoryData[id];

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link href="/#portfolio" className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium mb-8 transition-colors drop-shadow-sm">
          <span className="mr-2">&larr;</span> Kembali ke Beranda
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 drop-shadow-sm">{category.title}</h1>
          <p className="text-xl text-slate-300">{category.description}</p>
        </div>

        <div className="space-y-12">
          {category.items.map((item: any, index: number) => (
            <Link href={`/portfolio/${id}/${item.slug}`} key={index} className="block group">
              <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-md border border-slate-800 flex flex-col md:flex-row group-hover:shadow-[var(--shadow-neon-primary)] transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="md:w-2/5 h-64 md:h-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/50 z-10 md:hidden pointer-events-none"></div>
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <ImageCarousel images={item.gallery && item.gallery.length > 0 ? item.gallery : [item.image]} alt={item.title} />
                  </div>
                </div>
                
                <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-center relative z-20">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-slate-950 text-primary-400 px-3 py-1 text-sm font-semibold rounded-full border border-primary-500/50 shadow-[0_0_10px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-shadow">
                      {item.role}
                    </span>
                    <span className="text-slate-400 text-sm font-medium flex items-center">
                      <span className="mr-1">📅</span> {item.period}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4 group-hover:text-primary-300 transition-colors">{item.title}</h2>
                  
                  <p className="text-slate-300 leading-relaxed text-lg mb-6 flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-800/50 flex justify-between items-center">
                    <span className="text-primary-400 font-medium group-hover:translate-x-2 transition-transform duration-300 group-hover:drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]">Lihat Detail Kegiatan &rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
