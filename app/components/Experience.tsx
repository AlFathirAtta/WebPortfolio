"use client";

import React, { useState } from 'react';

const educationData = [
  {
    id: 1,
    title: "Pendidikan Dasar",
    institution: "SD Muhammadiyah 9 Malang",
    period: "2015 - 2021",
    description: "Mempelajari dasar-dasar pendidikan umum.",
    status: "Lulus",
  },
  {
    id: 2,
    title: "Pendidikan Menengah Pertama",
    institution: "SMP Modern Al-Rifai'e 2",
    period: "2021 - 2024",
    description: "Mempelajari berbagai mata pelajaran umum dan mulai tertarik dengan dunia teknologi.",
    status: "Lulus",
  },
  {
    id: 3,
    title: "Rekayasa Perangkat Lunak (RPL)",
    institution: "SMK Telkom Malang",
    period: "2024 - Sekarang",
    description: "Mempelajari fundamental pemrograman, pengembangan web (frontend & backend), serta desain antarmuka pengguna (UI/UX). Aktif dalam berbagai kegiatan praktik kejuruan dan pengembangan proyek berbasis tim.",
    status: "Pelajar Aktif",
  }
];

const achievementData = [
  {
    id: 1,
    title: "Juara 3 O2SN Panjat Tebing Putra",
    event: "O2SN Tingkat Kota Malang",
    period: "2026",
    description: "Bertanding di O2SN Tingkat Kota Malang Cabang Olahraga Panjat Tebing Putra dan berhasil meraih Juara 3.",
    status: "Winner",
    certificateUrls: [
      "https://images.unsplash.com/photo-1589330694653-efa647530611?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Finalis ",
    event: "TechFest 2023",
    period: "2023",
    description: "Merancang purwarupa (prototype) aplikasi mitigasi bencana dengan integrasi peta dan notifikasi darurat. Fokus utama pada desain antarmuka yang cepat diakses saat keadaan darurat.",
    status: "Finalis",
    certificateUrls: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Peserta UI/UX Design Competition",
    event: "Creative Design Week",
    period: "2023",
    description: "Membuat desain antarmuka aplikasi kesehatan mental dengan pendekatan 'calm design' untuk membantu pengguna meredakan kecemasan.",
    status: "Participant",
    certificateUrls: [
      "https://images.unsplash.com/photo-1555436169-20e93b1eb12b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589330694653-efa647530611?q=80&w=1200&auto=format&fit=crop"
    ]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'education' | 'achievements'>('achievements');
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (urls: string[]) => {
    setSelectedImages(urls);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedImages(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImages) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImages) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length);
    }
  };

  return (
    <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-primary-400/10 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-50 mb-4 drop-shadow-sm">Pendidikan & Prestasi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Perjalanan akademik dan berbagai pencapaian kompetisi yang telah saya ikuti untuk terus mengasah kemampuan.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-950 p-1 rounded-full border border-slate-800 inline-flex shadow-[var(--shadow-neon)]">
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'achievements'
                  ? 'bg-primary-400 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.6)]'
                  : 'text-slate-400 hover:text-primary-400 hover:bg-slate-900'
              }`}
            >
              Lomba & Prestasi
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-primary-400 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.6)]'
                  : 'text-slate-400 hover:text-primary-400 hover:bg-slate-900'
              }`}
            >
              Pendidikan Terakhir
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2"></div>

          {/* Education Timeline */}
          <div className={`space-y-12 ${activeTab === 'education' ? 'block' : 'hidden'}`}>
            {educationData.map((item, index) => (
              <div key={`edu-${item.id}`} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-primary-400 transform -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_10px_rgba(56,189,248,1)] z-10"></div>
                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div className={`p-6 bg-slate-950 rounded-2xl border border-slate-800 hover:shadow-[var(--shadow-neon-primary)] transition-all duration-300 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-slate-900 text-primary-400 border border-primary-500/30 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                        {item.status}
                      </span>
                      <span className="text-slate-400 text-sm font-medium">{item.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-1 drop-shadow-sm">{item.title}</h3>
                    <h4 className="text-lg font-medium text-primary-300 mb-4">{item.institution}</h4>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Timeline */}
          <div className={`space-y-12 ${activeTab === 'achievements' ? 'block' : 'hidden'}`}>
            {achievementData.map((item, index) => (
              <div key={`ach-${item.id}`} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-primary-400 transform -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_10px_rgba(56,189,248,1)] z-10"></div>
                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div className={`p-6 bg-slate-950 rounded-2xl border border-slate-800 hover:shadow-[var(--shadow-neon-primary)] transition-all duration-300 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {item.certificateUrls && item.certificateUrls.length > 0 ? (
                        <button 
                          onClick={() => openModal(item.certificateUrls)}
                          className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-primary-400 border border-primary-500/30 hover:border-primary-400 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_8px_rgba(56,189,248,0.3)] hover:shadow-[0_0_12px_rgba(56,189,248,0.6)] transition-all cursor-pointer flex items-center group"
                        >
                          <span className="mr-1 group-hover:scale-110 transition-transform">🏆</span> {item.status} <span className="ml-1 text-[10px] opacity-80 lowercase font-normal">(lihat sertifikat)</span>
                        </button>
                      ) : (
                        <span className="px-3 py-1 bg-slate-900 text-primary-400 border border-primary-500/30 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                          {item.status}
                        </span>
                      )}
                      <span className="text-slate-400 text-sm font-medium">{item.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-1 drop-shadow-sm">{item.title}</h3>
                    <h4 className="text-lg font-medium text-primary-300 mb-4">{item.event}</h4>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal Sertifikat */}
      {selectedImages && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors bg-slate-800/50 rounded-full p-1 z-50"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-[var(--shadow-neon-strong)] flex justify-center bg-slate-900 relative group">
              <img src={selectedImages[currentImageIndex]} alt={`Sertifikat ${currentImageIndex + 1}`} className="w-full h-auto max-h-[85vh] object-contain transition-opacity duration-300" />
              
              {selectedImages.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-950/50 hover:bg-slate-900 text-white p-2 rounded-full border border-slate-700 hover:border-primary-500 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-950/50 hover:bg-slate-900 text-white p-2 rounded-full border border-slate-700 hover:border-primary-500 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedImages.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-4 bg-primary-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]' : 'w-2 bg-slate-600'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
