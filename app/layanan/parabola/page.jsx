import React from 'react';

export const metadata = {
  title: 'Jasa Pasang Parabola Mini & Besar – Hidayah TV',
  description: 'Jasa pemasangan parabola mini dan besar untuk area sulit sinyal UHF. Ragam channel lokal, internasional, religi, hingga olahraga dengan kualitas stabil.',
};

export default function ParabolaPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">

      {/* Banner Header */}
      <section className="bg-primary py-20 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Parabola <br className="md:hidden" /> Mini &amp; Besar</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-rose-100 text-lg font-medium opacity-90 italic">Solusi Area Sulit Sinyal UHF</p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-5xl px-6 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-gray-700 leading-relaxed text-justify space-y-6 relative">

          {/* Badge Aksen */}
          <div className="inline-block bg-gray-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
            Ribuan Channel
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-black text-primary mb-6 leading-tight">
            Channel Lengkap, <span className="text-secondary">Sinyal Stabil</span>
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8">

            {/* Kolom Teks */}
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
              <p className="text-lg font-medium text-gray-800">
                Tinggal di daerah yang jauh dari pemancar dan susah sinyal UHF? Parabola adalah solusi paling tepat agar Anda tetap bisa menikmati ragam channel dengan gambar yang stabil.
              </p>

              <div className="h-px bg-gray-200 w-full my-6"></div>

              <p>
                <strong className="text-primary">Hidayah TV</strong> melayani pemasangan parabola, baik <strong>parabola mini</strong> yang ringkas dan praktis maupun <strong>parabola besar (jaring)</strong> untuk tangkapan satelit yang lebih banyak. Teknisi kami akan melakukan tracking satelit hingga sinyal benar-benar optimal.
              </p>

              <p>
                Kami bantu pilihkan satelit dan paket channel yang sesuai dengan kebutuhan keluarga Anda, mulai dari channel lokal, internasional, religi, hiburan anak, hingga channel olahraga.
              </p>

              {/* Box Pilihan Channel */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4">
                <h3 className="font-bold text-primary mb-3">Pilihan Satelit &amp; Ragam Channel</h3>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600">
                  <li><strong className="text-gray-800">Channel Lokal:</strong> TV nasional &amp; daerah dengan kualitas jernih.</li>
                  <li><strong className="text-gray-800">Channel Religi:</strong> Siaran dakwah &amp; islami untuk keluarga.</li>
                  <li><strong className="text-gray-800">Channel Internasional:</strong> Berita &amp; hiburan dari berbagai negara.</li>
                  <li><strong className="text-gray-800">Channel Olahraga:</strong> Tonton pertandingan favorit tanpa putus-putus.</li>
                </ul>
              </div>
            </div>

            {/* Kolom Foto Portrait */}
            <div className="lg:col-span-4 order-1 lg:order-2 w-full">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
                <img
                  src="/parabola.jpeg"
                  alt="Hasil Pemasangan Parabola"
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
              <h4 className="text-primary font-bold text-xl">Ingin Pasang Parabola?</h4>
              <p className="text-sm text-gray-500">Konsultasikan pilihan satelit &amp; paket channel terbaik untuk Anda.</p>
            </div>
            <a
              href="https://wa.me/628212185448?text=Halo%20Hidayah%20TV,%20saya%20ingin%20pasang%20parabola."
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
