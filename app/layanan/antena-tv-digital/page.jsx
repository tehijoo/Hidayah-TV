import React from 'react';

export const metadata = {
  title: 'Jasa Pasang Antena TV Digital – Hidayah TV',
  description: 'Jasa pemasangan antena TV digital HD bergaransi. Beralih ke siaran digital bebas biaya bulanan, gambar jernih untuk TV tabung, LED, hingga Smart TV.',
};

export default function AntenaTvDigitalPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">

      {/* Banner Header */}
      <section className="bg-primary py-20 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Antena TV Digital</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-rose-100 text-lg font-medium opacity-90 italic">Jasa Pemasangan Profesional &amp; Bergaransi</p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-5xl px-6 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-gray-700 leading-relaxed text-justify space-y-6 relative">

          {/* Badge Aksen */}
          <div className="inline-block bg-gray-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
            Bebas Biaya Bulanan
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-black text-primary mb-6 leading-tight">
            Siaran Digital Jernih, <span className="text-secondary">Bebas Semut</span>
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8">

            {/* Kolom Teks */}
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
              <p className="text-lg font-medium text-gray-800">
                Siaran TV analog sudah dimatikan. Saatnya beralih ke TV digital yang gambarnya jauh lebih jernih, suara lebih jelas, dan yang terpenting: tanpa biaya bulanan sama sekali.
              </p>

              <div className="h-px bg-gray-200 w-full my-6"></div>

              <p>
                <strong className="text-primary">Hidayah TV</strong> melayani jasa pemasangan antena TV digital (UHF) lengkap dengan setting Set Top Box (STB). Teknisi kami akan mengarahkan antena ke pemancar terkuat di area Anda agar seluruh channel tertangkap maksimal dan bebas "semut".
              </p>

              <p>
                Layanan kami kompatibel dengan semua jenis pesawat televisi, mulai dari <strong>TV Tabung</strong> (menggunakan STB), <strong>TV LED biasa</strong>, hingga <strong>Smart TV</strong> yang sudah mendukung DVB-T2.
              </p>

              {/* Daftar Paket Pemasangan */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4">
                <h3 className="font-bold text-primary mb-3">Pilihan Paket Pemasangan</h3>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600">
                  <li><strong className="text-gray-800">Paket Hemat:</strong> Antena digital outdoor + kabel + jasa pasang &amp; arah.</li>
                  <li><strong className="text-gray-800">Paket Lengkap:</strong> Antena HD + kabel + tiang + Set Top Box (STB) bersertifikat.</li>
                  <li><strong className="text-gray-800">Paket Smart TV:</strong> Antena HD + setting langsung ke Smart TV (tanpa STB).</li>
                </ul>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600 mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <li><strong className="text-gray-800">Cocok Untuk:</strong> Rumah tinggal, kos, ruko, kantor, kafe, dan tempat usaha.</li>
                <li><strong className="text-gray-800">Keunggulan:</strong> Tanpa langganan bulanan, gambar HD jernih, dan pemasangan bergaransi.</li>
              </ul>
            </div>

            {/* Kolom Foto Portrait */}
            <div className="lg:col-span-4 order-1 lg:order-2 w-full">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
                <img
                  src="/antenatv.jpeg"
                  alt="Hasil Pemasangan Antena TV Digital"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white">
                  <p className="text-xs font-bold text-primary text-center tracking-wide uppercase">Hasil Pemasangan Kami</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Ringkas */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border-l-4 border-primary flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-primary font-bold text-xl">Mau Pasang Antena TV Digital?</h4>
              <p className="text-sm text-gray-500">Konsultasi gratis &amp; cek sinyal di lokasi Anda sekarang.</p>
            </div>
            <a
              href="https://wa.me/628212185448?text=Halo%20Hidayah%20TV,%20saya%20ingin%20pasang%20antena%20TV%20digital."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-secondary/30 transition-all transform hover:-translate-y-1 whitespace-nowrap text-center"
            >
              Hubungi Admin
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
