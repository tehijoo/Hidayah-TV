import React from 'react';

export const metadata = {
  title: 'Jasa Service & Perbaikan Antena – Hidayah TV',
  description: 'Jasa service dan perbaikan antena TV: gambar putus-putus, No Signal, antena roboh, setting STB error, hingga bongkar-pasang antena saat pindah rumah.',
};

export default function ServiceAntenaPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">

      {/* Banner Header */}
      <section className="bg-primary py-20 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Service &amp; <br className="md:hidden" /> Perbaikan Antena</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-rose-100 text-lg font-medium opacity-90 italic">Cepat Tanggap, Gambar Jernih Kembali</p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-5xl px-6 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-gray-700 leading-relaxed text-justify space-y-6 relative">

          {/* Badge Aksen */}
          <div className="inline-block bg-gray-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
            Solusi Cepat
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-black text-primary mb-6 leading-tight">
            TV Bermasalah? <span className="text-secondary">Kami Perbaiki</span>
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8">

            {/* Kolom Teks */}
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
              <p className="text-lg font-medium text-gray-800">
                Gambar TV tiba-tiba hilang, muncul tulisan "No Signal", atau antena roboh diterpa angin? Tenang, Anda tidak perlu membeli perangkat baru. Sering kali masalahnya bisa langsung kami perbaiki di tempat.
              </p>

              <div className="h-px bg-gray-200 w-full my-6"></div>

              <p>
                <strong className="text-primary">Hidayah TV</strong> melayani service dan perbaikan untuk segala keluhan antena TV digital maupun parabola. Teknisi kami akan mendiagnosis sumber masalah terlebih dahulu, lalu memperbaikinya dengan rapi dan bergaransi.
              </p>

              {/* Box Masalah yang Ditangani */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4">
                <h3 className="font-bold text-primary mb-3">Keluhan yang Sering Kami Tangani</h3>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600">
                  <li><strong className="text-gray-800">Gambar putus-putus / patah-patah</strong> dan kualitas siaran menurun.</li>
                  <li><strong className="text-gray-800">Muncul "No Signal"</strong> atau channel hilang sebagian.</li>
                  <li><strong className="text-gray-800">Antena roboh / bergeser</strong> akibat angin dan hujan.</li>
                  <li><strong className="text-gray-800">Setting Set Top Box (STB) error</strong> atau tidak bisa scan channel.</li>
                  <li><strong className="text-gray-800">Kabel &amp; konektor rusak</strong> sehingga sinyal lemah.</li>
                </ul>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600 mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <li><strong className="text-gray-800">Layanan Bongkar-Pasang:</strong> Pindah rumah? Kami bantu lepas antena lama dan pasang kembali di rumah baru.</li>
                <li><strong className="text-gray-800">Pengecekan Menyeluruh:</strong> Kami pastikan siaran jernih kembali sebelum meninggalkan lokasi.</li>
              </ul>
            </div>

            {/* Kolom Foto Portrait */}
            <div className="lg:col-span-4 order-1 lg:order-2 w-full">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
                <img
                  src="/service.jpeg"
                  alt="Service & Perbaikan Antena"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white">
                  <p className="text-xs font-bold text-primary text-center tracking-wide uppercase">Teknisi Siap Datang</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Ringkas */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border-l-4 border-primary flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-primary font-bold text-xl">Antena Anda Bermasalah?</h4>
              <p className="text-sm text-gray-500">Hubungi kami, teknisi siap datang dan memperbaiki hari ini juga.</p>
            </div>
            <a
              href="https://wa.me/628212185448?text=Halo%20Hidayah%20TV,%20antena%20saya%20bermasalah%20dan%20butuh%20diservice."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-secondary/30 transition-all transform hover:-translate-y-1 whitespace-nowrap text-center"
            >
              Panggil Teknisi
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
