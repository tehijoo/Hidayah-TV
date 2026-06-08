import React from 'react';

export const metadata = {
  title: 'Testimoni – Hidayah TV',
  description: 'Apa kata pelanggan tentang jasa pemasangan antena TV digital, parabola, dan penangkal petir dari Hidayah TV.',
};

export default function TestimoniPage() {
  // Data Dummy Testimoni
  const testimonials = [
    {
      id: 1,
      name: 'Rina',
      text: 'Pasang antena digital di rumah, sekarang semua channel jernih banget bebas semut. Teknisinya ramah, kerjanya cepat dan rapi. Sangat puas!',
    },
    {
      id: 2,
      name: 'Bagas',
      text: 'Dulu TV sering "No Signal" kalau hujan. Setelah dibenahi Hidayah TV, gambar stabil terus. Respon cepat dan harga masuk akal. Recommended!',
    },
    {
      id: 3,
      name: 'Dandy',
      text: 'Pasang parabola buat di rumah yang susah sinyal UHF. Channel-nya banyak, ada lokal sampai olahraga. Mantap pelayanannya!',
    },
    {
      id: 4,
      name: 'Maya',
      text: 'Minta dipasang penangkal petir karena antena saya tinggi. Dikerjakan rapi, dijelaskan soal grounding-nya juga. Jadi tenang kalau hujan badai.',
    },
    {
      id: 5,
      name: 'Heri',
      text: 'Survei lokasi cepat, pemasangan tepat waktu, hasil siaran jernih. Kualitas pengerjaannya tidak mengecewakan.',
    },
    {
      id: 6,
      name: 'Andri',
      text: 'Setting Set Top Box yang tadinya error langsung beres ditangani teknisinya. Sekarang TV digital lancar. Terima kasih Hidayah TV!',
    },
    {
      id: 7,
      name: 'Dewinta',
      text: 'Antena lama roboh kena angin, langsung dibantu pasang ulang di hari yang sama. Kerjanya bersih dan profesional. Recommended banget!',
    },
    {
      id: 8,
      name: 'Alif',
      text: 'Pindah rumah dan butuh bongkar-pasang antena. Semua diurus rapi, gambar langsung jernih di rumah baru. Sangat terbantu.',
    },
    {
      id: 9,
      name: 'Marissa',
      text: 'Pasang parabola mini, channel religi dan internasional lengkap. Pemasangannya rapi dan teknisinya sabar menjelaskan. Senang sekali!',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">

      {/* Banner Header - Maroon Primary */}
      <section className="bg-primary py-20 text-center text-white px-6 relative overflow-hidden">
        {/* Ornamen Halus untuk estetika */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Testimoni</h1>
          {/* Garis Aksen Emas */}
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-rose-100 text-lg font-medium opacity-90 italic">Kepercayaan pelanggan adalah aset terbesar kami.</p>
        </div>
      </section>

      {/* Bagian Quote / Highlight */}
      <section className="container mx-auto px-6 mt-12 mb-10 max-w-4xl">
        <div className="bg-white border-l-4 border-secondary p-6 md:p-10 rounded-2xl shadow-md text-center relative overflow-hidden">
          {/* Ikon Kutip (Quote) Transparan di Background */}
          <svg className="absolute top-2 left-4 w-16 h-16 text-gray-100 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" /></svg>

          <p className="text-lg md:text-xl text-gray-700 italic font-medium leading-relaxed relative z-10">
            "Respon cepat, teknisi ramah, TV jadi jernih banget, dan pemasangan rapi — itulah yang selalu kami usahakan untuk setiap pelanggan Hidayah TV."
          </p>
        </div>
      </section>

      {/* Area Judul Section */}
      <section className="container mx-auto max-w-7xl px-4 md:px-8 mb-12 flex flex-col items-center">
        {/* Badge 200+ Pelanggan */}
        <div className="bg-primary text-white px-6 py-2.5 rounded-full inline-flex items-center gap-2 font-bold mb-4 shadow-md">
          <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          200+ Pelanggan Puas
        </div>
        <p className="text-gray-600 text-center max-w-2xl leading-relaxed">
          Berikut testimoni yang menggambarkan pengalaman mereka bersama <strong className="text-primary">Hidayah TV</strong>. Kepuasan Anda adalah prioritas dan motivasi bagi kami untuk terus memberikan yang terbaik.
        </p>
      </section>

      {/* Grid Testimoni */}
      <section className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Mapping Data Testimoni */}
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1 relative overflow-hidden group"
            >
              {/* Garis atas dekoratif yang muncul saat hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Bintang (5 Bintang) - Warna Emas */}
              <div className="flex text-secondary gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                ))}
              </div>

              {/* Teks Testimoni */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow italic relative z-10">
                "{testi.text}"
              </p>

              {/* Profil Pengguna */}
              <div className="mt-8 flex items-center gap-4 pt-4 border-t border-gray-50">
                {/* Avatar Inisial */}
                <div className="w-11 h-11 bg-rose-50 rounded-full flex items-center justify-center text-primary font-black text-lg shadow-inner">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-tight">{testi.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5 tracking-wide">Pelanggan Hidayah TV</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
