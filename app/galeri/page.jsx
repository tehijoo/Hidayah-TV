"use client"; // Wajib ditambahkan agar tombol navigasi halaman bisa berfungsi

import React, { useState } from 'react';

export default function GaleriPage() {
  
  // State untuk menyimpan halaman yang sedang aktif (mulai dari halaman 1)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Menampilkan 12 foto per halaman

  // DAFTAR FOTO GALERI (MANUAL)
  // Silakan isi nama-nama file foto Anda di bawah ini sesuai yang ada di folder 'public'
  // Anda bebas menambah atau mengurangi jumlah barisnya.
  const allImages = [
    '/antena2.jpeg',
    '/antenatv.jpeg',
    '/parabola-besar.jpg',
    '/parabola-kecil.jpg',
    '/parabola.jpeg',
    '/penangkal.jpeg',
    '/penangkal2.jpeg',
    '/penangkal3.jpeg',
    // Tambahkan terus nama file foto Anda ke bawah sini dengan tanda kutip dan koma...
  ];

  // Logika untuk memotong array gambar berdasarkan halaman yang aktif
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = allImages.slice(startIndex, startIndex + itemsPerPage);
  
  // Total halaman akan terhitung otomatis berdasarkan jumlah foto yang Anda masukkan di atas
  const totalPages = Math.ceil(allImages.length / itemsPerPage); 

  // Fungsi untuk mengganti halaman
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Opsional: Otomatis scroll ke atas (ke bagian grid gambar) saat pindah halaman
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* Banner Header - Maroon Primary */}
      <section className="bg-primary py-20 text-center text-white px-6 relative overflow-hidden">
        {/* Ornamen Halus untuk estetika */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Galeri Foto</h1>
          {/* Garis Aksen Emas */}
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-rose-100 text-lg font-medium opacity-90 italic">Portofolio Hasil Pemasangan Hidayah TV</p>
        </div>
      </section>

      {/* Bagian Quote / Highlight */}
      <section className="container mx-auto px-6 mt-12 mb-10 max-w-4xl">
        <div className="bg-white border-l-4 border-secondary p-6 md:p-10 rounded-2xl shadow-md text-center relative overflow-hidden">
          <svg className="absolute top-2 left-4 w-16 h-16 text-gray-100 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" /></svg>
          <p className="text-lg md:text-xl text-gray-700 italic font-medium leading-relaxed relative z-10">
            "Percayakan pemasangan antena &amp; penangkal petir Anda kepada ahlinya, karena kerapian, kejernihan, dan keamanan adalah prioritas utama Hidayah TV."
          </p>
        </div>
      </section>

      {/* Grid Gambar Galeri yang Dinamis (Berubah sesuai halaman) */}
      <section className="container mx-auto max-w-7xl px-4 md:px-8 mt-16 animate-in fade-in duration-500" key={currentPage}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          
          {currentImages.map((imageUrl, index) => (
            <div 
              key={index} 
              className="group relative w-full aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              {/* Gambar Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${imageUrl}')` }}
              ></div>
              
              {/* Overlay & Ikon Kaca Pembesar */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="bg-secondary p-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Pagination (Navigasi Halaman Interaktif) akan disembunyikan jika total halaman hanya 1 atau kurang */}
      {totalPages > 1 && (
        <section className="container mx-auto mt-16 flex justify-center items-center gap-2">
          
          {/* Tombol Sebelumnya (Mundur) */}
          <button 
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 transition ${
              currentPage === 1 
                ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                : "bg-white text-primary hover:bg-primary hover:text-white shadow-sm transform hover:-translate-y-0.5"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          
          {/* Looping Angka Halaman (1, 2, 3...) */}
          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;
            return (
              <button 
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition shadow-sm border border-gray-200 transform hover:-translate-y-0.5 ${
                  currentPage === pageNum 
                    ? "bg-primary text-white" 
                    : "bg-white text-gray-600 hover:bg-primary hover:text-white"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Tombol Selanjutnya (Maju) */}
          <button 
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 transition ${
              currentPage === totalPages 
                ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                : "bg-white text-primary hover:bg-primary hover:text-white shadow-sm transform hover:-translate-y-0.5"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </section>
      )}

    </main>
  );
}