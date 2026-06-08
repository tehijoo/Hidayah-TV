import React from 'react';
import Link from 'next/link';
import { articles } from './data'; // <-- Pastikan file data.js tetap ada

export const metadata = {
  title: 'Artikel & Blog – Hidayah TV',
  description: 'Kumpulan artikel, tips, dan edukasi seputar antena TV digital, parabola, service antena, dan penangkal petir.',
};

// INI BAGIAN YANG WAJIB ADA (Default Export)
export default function ArtikelPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* Banner Header - Maroon Primary */}
      <section className="bg-primary py-20 text-center text-white px-6 relative overflow-hidden">
        {/* Ornamen Transparan/Abu-abu Halus untuk estetika */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Blog & Artikel</h1>
          {/* Garis Aksen Emas */}
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-rose-100 text-lg font-medium opacity-90 italic">Informasi, Tips, dan Update Terbaru dari Hidayah TV</p>
        </div>
      </section>

      {/* Grid Artikel */}
      <section className="container mx-auto max-w-7xl px-4 md:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {articles.map((article) => (
            <Link 
              href={`/artikel/${article.slug}`} 
              key={article.id} 
              // Kartu Artikel: border-radius lebih melengkung, shadow halus, hover terangkat ke atas
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer border border-gray-100 transform hover:-translate-y-1"
            >
              
              {/* Gambar Thumbnail */}
              <div className="relative w-full h-56 bg-gray-200 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${article.image}')` }}
                ></div>
                {/* Badge Label: Warna Emas */}
                <div className="absolute bottom-0 right-0 bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-tl-xl shadow-sm">
                  Artikel
                </div>
              </div>
              
              {/* Konten Text */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                {/* Garis tipis aksen di atas judul */}
                <div className="absolute top-0 left-8 w-12 h-1 bg-gray-100 group-hover:bg-secondary transition-colors duration-300"></div>

                <div className="flex items-center text-xs text-gray-500 mb-3 gap-2 mt-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span className="font-medium">{article.date}</span>
                </div>
                
                {/* Judul Hover: Berubah ke Maroon Primary */}
                <h3 className="font-bold text-gray-900 text-lg md:text-xl leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                
                {/* Tombol Read More: Maroon */}
                <div className="mt-auto flex items-center text-primary font-bold text-sm group-hover:text-secondary transition-colors duration-300 gap-1 pt-4 border-t border-gray-50">
                  Read More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}