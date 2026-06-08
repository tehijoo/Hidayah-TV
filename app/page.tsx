"use client"; // app/page.tsx
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

export default function Home() {
      // 1. Logika State untuk Slider
      const [currentSlide, setCurrentSlide] = useState(0);
      const [testiSlide, setTestiSlide] = useState(0);

      // 2. Data Konten untuk 3 Slide
      const slides = [
        {
          title: "Siaran TV\nSuper Jernih",
          label: "Antena TV Digital",
          description: "Nikmati siaran TV digital bebas semut tanpa biaya bulanan. Pemasangan antena HD oleh teknisi ahli, bergaransi, dan gambar dijamin 100% jernih.",
          bgImage: "/antenatv.jpeg", // Pastikan gambar ini ada di folder public
        },
        {
          title: "Ribuan Channel\nVia Parabola",
          label: "Parabola Mini & Besar",
          description: "Solusi terbaik untuk area yang sulit sinyal UHF. Tangkap channel lokal, internasional, religi, hingga olahraga dengan parabola berkualitas.",
          bgImage: "/parabola-besar.jpg",
        },
        {
          title: "Perlindungan\nPetir Maksimal",
          label: "Penangkal Petir",
          description: "Antena tinggi di atap rawan tersambar petir. Lindungi rumah dan perangkat elektronik Anda dengan instalasi penangkal petir grounding standar aman.",
          bgImage: "/penangkal.jpeg",
        }
      ];

      // 3. Fungsi Navigasi Slider
      const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      };

      const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      };

      // 4. Fitur Auto-play (Ganti slide otomatis setiap 5 detik)
      useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
      }, []);

      return (
        <main className="w-full bg-gray-50 overflow-x-hidden font-sans">

          {/* --- HERO SECTION SLIDER --- */}
          <section className="relative w-full min-h-[600px] lg:h-[85vh] flex items-center bg-primary overflow-hidden">

            {/* Gambar Background Slider */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-40"
                  style={{ backgroundImage: `url('${slide.bgImage}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/80 to-transparent"></div>
              </div>
            ))}

            {/* Tombol Navigasi Panah Kiri & Kanan */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/20 text-white p-2 md:p-3 rounded-full hover:bg-secondary transition duration-300 shadow-lg"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/20 text-white p-2 md:p-3 rounded-full hover:bg-secondary transition duration-300 shadow-lg"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-16 flex flex-col lg:flex-row items-center justify-between">

              {/* Konten Teks Kiri */}
              <div className="w-full lg:w-3/5 flex flex-col items-start pt-10 md:pt-0">
                <h1
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white uppercase leading-[1.1] tracking-tight drop-shadow-2xl transition-all duration-500"
                  style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)', whiteSpace: 'pre-line' }}
                >
                  {slides[currentSlide].title}
                </h1>

                <div className="bg-secondary text-white px-6 md:px-8 py-2 md:py-3 mt-4 md:mt-6 text-sm md:text-lg font-bold w-[110%] -ml-10 md:-ml-16 shadow-lg border-l-8 border-secondary-dark transition-all duration-500">
                  <span className="ml-10 md:ml-16 uppercase tracking-widest">{slides[currentSlide].label}</span>
                </div>

                <p className="text-gray-100 mt-8 max-w-lg text-sm md:text-base leading-relaxed font-medium drop-shadow-sm transition-all duration-500 min-h-[80px]">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full lg:w-4/5 mt-8 gap-4 pb-12 lg:pb-0">
                  <div className="flex gap-1 text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    ))}
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1 text-white text-xs md:text-sm">
                    <div className="flex gap-3 mb-1">
                      {/* Link Sosmed Anda */}
                      <a href="https://instagram.com/hidayah.canopy" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-secondary w-7 h-7 flex items-center justify-center rounded-full transition-all uppercase text-[10px] font-bold">IG</a>
                      <a href="https://facebook.com/machmud.harjianto.9" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-secondary w-7 h-7 flex items-center justify-center rounded-full transition-all uppercase text-[10px] font-bold">FB</a>
                    </div>
                    <span className="opacity-80 tracking-widest mt-1">www.hidayahtv.com</span>
                  </div>
                </div>
              </div>

          {/* Kotak Info Sebelah Kanan (Menyorot Menu Sesuai Slide) */}
          <div className="hidden lg:flex flex-col w-1/3 items-end">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl border-t-4 border-b-4 border-secondary shadow-2xl min-w-[320px]">
              <h4 className="text-primary font-black mb-4 border-b pb-2 text-sm tracking-widest">LAYANAN KAMI</h4>
              <ul className="space-y-5 text-base font-bold text-gray-800">
                <li className={`flex items-center gap-3 transition-all duration-300 ${currentSlide === 0 ? 'text-secondary translate-x-2' : ''}`}>
                  <span className="text-primary font-black text-2xl">01.</span> Antena TV Digital
                </li>
                <li className={`flex items-center gap-3 transition-all duration-300 ${currentSlide === 1 ? 'text-secondary translate-x-2' : ''}`}>
                  <span className="text-primary font-black text-2xl">02.</span> Parabola Mini &amp; Besar
                </li>
                <li className="flex items-center gap-3 transition-all duration-300">
                  <span className="text-primary font-black text-2xl">03.</span> Service &amp; Perbaikan
                </li>
                <li className={`flex items-center gap-3 transition-all duration-300 ${currentSlide === 2 ? 'text-secondary translate-x-2' : ''}`}>
                  <span className="text-primary font-black text-2xl">04.</span> Penangkal Petir
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Indikator Titik Bawah */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`cursor-pointer transition-all duration-300 ${
                i === currentSlide ? "w-8 h-2 bg-secondary" : "w-2 h-2 bg-white/50"
              } rounded-full`}
            ></div>
          ))}
        </div>

      </section>

      {/* --- SECTION SELAMAT DATANG --- */}
      <section className="relative z-20 -mt-10 md:-mt-16 px-4 md:px-8 max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="w-full bg-white rounded-2xl shadow-xl p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center text-primary font-bold text-lg shrink-0">TV</div>
              <div>
                <p className="text-gray-500 text-sm">Selamat datang di</p>
                <h2 className="text-xl md:text-3xl font-bold text-gray-900">Hidayah TV</h2>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 p-2 sm:pl-6 rounded-2xl sm:rounded-full w-full md:w-auto border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-600 text-center sm:text-left hidden sm:block font-medium">
                Jasa Pasang Antena TV & Penangkal Petir <br className="hidden md:block"/> Profesional, Bergaransi, dan Terpercaya
              </p>

              {/* Tombol Button diubah menjadi tag <a> untuk WhatsApp */}
              <a
                href="https://wa.me/628212185448?text=Halo%20Hidayah%20TV,%20saya%20ingin%20konsultasi%20pemasangan%20antena/penangkal%20petir."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl sm:rounded-full w-full sm:w-auto font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/30 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Hubungi Kami
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- SECTION AHLINYA ANTENA & PETIR --- */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center mt-8 w-full">
        <div className="flex-1 w-full">
          <ScrollReveal direction="left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Ahlinya <br/> Antena TV <br/> &amp; Penangkal Petir
            </h2>
            <div className="flex items-center gap-3 mb-6 bg-gray-50 w-fit px-4 py-2 rounded-lg">
              <span className="bg-rose-100 text-primary p-1 rounded-full text-xs font-bold">✓</span>
              <p className="font-medium text-gray-700">Gambar Jernih &amp; Pemasangan Bergaransi</p>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Hidayah TV adalah spesialis jasa instalasi telekomunikasi visual dan sistem
              keamanan grounding petir. Didukung teknisi berpengalaman, kami siap menghadirkan
              siaran super jernih dan perlindungan maksimal untuk hunian maupun tempat usaha Anda.
            </p>

            <Link
              href="/tentang-kami"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-md font-medium transition inline-flex items-center justify-center gap-2 w-fit"
            >
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </ScrollReveal>
        </div>

        <div className="flex-1 w-full">
          <ScrollReveal direction="up">
            <div className="relative bg-primary p-10 rounded-tl-3xl rounded-br-3xl text-white shadow-2xl w-full">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Keunggulan Kami</h3>
              <ul className="space-y-3 font-medium">
                <li>- Teknisi Berpengalaman</li>
                <li>- Gambar 100% Jernih (Bebas Semut)</li>
                <li>- Garansi Pemasangan</li>
                <li>- Material Berkualitas</li>
                <li>- Respon &amp; Pengerjaan Cepat</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- SECTION GRID KEUNGGULAN (USP) --- */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-gray-200 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 w-full">
          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 w-full">
                <div className="w-16 h-16 mb-4 text-primary">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21.182 21.182a13.5 13.5 0 00-19.07 0M18.364 18.364a9 9 0 00-12.728 0M12 18.75h.008v.008H12v-.008z" /></svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Teknisi Berpengalaman</h4>
                <p className="text-sm text-gray-500">Dikerjakan teknisi ahli yang sudah menangani ratusan pemasangan antena.</p>
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 w-full">
                <div className="w-16 h-16 mb-4 text-secondary">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" /></svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Gambar 100% Jernih</h4>
                <p className="text-sm text-gray-500">Siaran digital tajam dan bebas "semut", atau kami perbaiki sampai jernih.</p>
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 w-full">
                <div className="w-16 h-16 mb-4 text-primary">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Garansi Pemasangan</h4>
                <p className="text-sm text-gray-500">Setiap pemasangan bergaransi. Ada kendala? Kami datang kembali tanpa ribet.</p>
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 w-full">
                <div className="w-16 h-16 mb-4 text-secondary">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Material Berkualitas</h4>
                <p className="text-sm text-gray-500">Antena, kabel, dan STB original berkualitas agar awet dan tahan lama.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- SECTION LAYANAN KAMI BANNER --- */}
      <section className="relative w-full bg-gradient-to-r from-primary via-primary-dark to-[#3f2326] pt-24 pb-16 overflow-hidden">

        {/* Ornamen Titik-titik */}
        <div className="absolute left-10 top-20 flex gap-2 opacity-30">
          {[...Array(4)].map((_, col) => (
            <div key={col} className="flex flex-col gap-2">
              {[...Array(5)].map((_, row) => (
                <div key={row} className="w-1.5 h-1.5 bg-white rounded-full"></div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute right-20 top-1/2 flex gap-2 opacity-30">
          {[...Array(6)].map((_, col) => (
            <div key={col} className="flex flex-col gap-2">
              {[...Array(3)].map((_, row) => (
                <div key={row} className="w-1.5 h-1.5 bg-white rounded-full"></div>
              ))}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10 w-full">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
            <ScrollReveal direction="up">
              <div className="bg-gray-50 p-2.5 rounded-3xl shadow-xl transform hover:-translate-y-2 transition duration-300">
                <div className="w-36 h-36 md:w-48 md:h-48 bg-gray-200 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/antenatv.jpeg')" }}></div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up">
              <div className="bg-gray-50 p-2.5 rounded-3xl shadow-xl transform hover:-translate-y-2 transition duration-300">
                <div className="w-36 h-36 md:w-48 md:h-48 bg-gray-200 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/parabola-besar.jpg')" }}></div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up">
              <div className="bg-gray-50 p-2.5 rounded-3xl shadow-xl transform hover:-translate-y-2 transition duration-300">
                <div className="w-36 h-36 md:w-48 md:h-48 bg-gray-200 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/penangkal.jpeg')" }}></div>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0">
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-6xl font-bold text-white italic drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
                Layanan Kami
              </h2>
              {/* Dekorasi Garis */}
              <div className="w-24 h-1 bg-secondary/60 mt-4 mx-auto lg:mx-0"></div>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 flex flex-col md:flex-row justify-between items-center relative z-10 gap-8 w-full">
        <ScrollReveal direction="right">
          <div className="flex items-center gap-4 border-l-2 border-white/50 pl-4">
            <div className="flex gap-2">

              {/* Tautan Facebook */}
              <a
                href="https://facebook.com/machmud.harjianto.9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center font-bold text-sm hover:bg-gray-200 hover:scale-110 transition-all duration-300 shadow-md"
              >
                FB
              </a>

              {/* Tautan Instagram */}
              <a
                href="https://instagram.com/hidayah.canopy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center font-bold text-sm hover:bg-gray-200 hover:scale-110 transition-all duration-300 shadow-md"
              >
                IG
              </a>

            </div>
            <span className="text-white text-lg md:text-xl font-medium tracking-wide">Follow Social Media</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className="text-center md:text-right text-white">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-md">Hidayah TV</h3>
            <p className="text-xs md:text-sm tracking-widest text-gray-300 mt-1 uppercase font-semibold">Jasa Pasang Antena &amp; Penangkal Petir</p>
          </div>
        </ScrollReveal>
      </div>
      </section>

      {/* --- SECTION DETAIL KARTU LAYANAN --- */}
      <section className="bg-gray-50 py-20 px-4 md:px-8 w-full relative">
        <div className="max-w-7xl mx-auto w-full">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                tag: "Jasa Pemasangan",
                title: "Antena TV Digital",
                desc: "Beralih ke siaran digital bebas biaya bulanan. Paket pemasangan antena HD lengkap dengan kabel, tiang, dan setting Set Top Box (STB) untuk TV tabung, LED, maupun Smart TV.",
                image: "/antena2.jpeg",
                link: "/layanan/antena-tv-digital"
              },
              {
                tag: "Jasa Pemasangan",
                title: "Parabola Mini & Besar",
                desc: "Solusi untuk area yang sulit sinyal UHF. Pilihan satelit dan ragam channel lokal, internasional, religi, hingga olahraga dengan kualitas gambar stabil.",
                image: "/parabola-kecil.jpg",
                link: "/layanan/parabola"
              },
              {
                tag: "Jasa Service",
                title: "Service & Perbaikan Antena",
                desc: "Atasi masalah gambar putus-putus, 'No Signal', antena roboh, hingga setting STB yang error. Termasuk layanan bongkar-pasang antena saat pindah rumah.",
                image: "/service.jpeg",
                link: "/layanan/service-antena"
              },
              {
                tag: "Jasa Pemasangan",
                title: "Penangkal Petir",
                desc: "Antena tinggi rawan tersambar petir. Instalasi penangkal petir dengan kabel tembaga murni, splitzen, dan grounding di bawah 5 Ohm untuk melindungi perangkat Anda.",
                image: "/penangkal2.jpeg",
                link: "/layanan/penangkal-petir"
              }
            ].map((item, index) => (
              <div key={index} className="w-full">
                <ScrollReveal direction="up">
                  <div className="w-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 md:p-8 flex flex-col h-full border border-gray-100 group">

                    {/* Tag Label */}
                    <p className="text-secondary font-bold text-[10px] tracking-widest uppercase mb-2">
                      {item.tag}
                    </p>

                    {/* Judul Layanan */}
                    <h3 className="text-primary font-black text-xl mb-5 group-hover:text-secondary transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Gambar Cover */}
                    <div className="w-full h-48 bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      ></div>
                    </div>

                    {/* Deskripsi */}
                    <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Tombol Lihat Detail (Menggunakan Link) */}
                    <Link
                      href={item.link}
                      className="bg-gray-50 hover:bg-primary text-primary hover:text-white border border-gray-200 hover:border-primary px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold w-fit transition-all duration-300 mt-auto group/btn"
                    >
                      Lihat Detail
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>

                  </div>
                </ScrollReveal>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* --- SECTION KENALI 4 HAL --- */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="w-full">
          <ScrollReveal direction="up">
            <div className="w-full bg-primary rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl relative">

              {/* Pola titik-titik transparan */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

              {/* Sisi Kiri: Judul */}
              <div className="w-full md:w-2/5 p-8 md:p-12 relative flex flex-col justify-center items-center md:items-start text-center md:text-left z-10">
                <p className="text-gray-200 text-sm md:text-base tracking-widest mb-2 font-medium uppercase">Perhatikan</p>
                <h2 className="text-secondary text-6xl md:text-7xl font-black mb-3 leading-none drop-shadow-md">4 HAL</h2>
                <p className="text-white text-sm md:text-base font-medium max-w-[220px] leading-snug">sebelum memasang antena TV atau penangkal petir</p>

                <div
                  className="w-48 h-48 md:w-64 md:h-64 md:absolute md:-bottom-4 md:right-[-60px] mt-8 md:mt-0 bg-contain bg-no-repeat bg-bottom z-20 opacity-90"
                  style={{ backgroundImage: "url('/layanan-antena.jpeg')" }}
                ></div>
              </div>

              {/* Sisi Kanan: List */}
              <div className="w-full md:w-3/5 p-8 md:p-12 bg-primary-dark z-10 border-l border-white/10">
                <ul className="space-y-6">
                  {[
                    "Pastikan kekuatan sinyal di lokasi Anda agar jenis antena (UHF atau parabola) yang dipilih tepat sasaran",
                    "Gunakan Set Top Box (STB) bersertifikat agar siaran digital tertangkap maksimal dan bebas 'semut'",
                    "Cek kualitas kabel dan konektor yang dipakai agar gambar tidak mudah hilang saat hujan atau angin",
                    "Untuk antena tinggi di atap, lengkapi dengan penangkal petir & grounding demi keamanan perangkat elektronik Anda"
                  ].map((text, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <span className="text-secondary mt-1 shrink-0 transform group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <p className="text-gray-100 text-sm md:text-base font-medium leading-relaxed">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- SECTION KEUNTUNGAN & AREA LAYANAN --- */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-6">

        {/* Box Kiri: Keuntungan */}
        <div className="w-full lg:w-2/3 h-full">
          <ScrollReveal direction="up">
            <div className="w-full h-full bg-[#fdf6f7] border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 shadow-sm">
              <div className="w-full md:w-1/3 shrink-0">
                <h3 className="text-primary font-bold text-lg md:text-xl mb-4 leading-snug">
                  Apa Keuntungan Pasang di Hidayah TV ??
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Kami berikan layanan terbaik dengan harga transparan tanpa biaya tersembunyi.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <ol className="list-decimal list-outside ml-4 space-y-4 text-sm text-gray-700 font-medium">
                  <li className="pl-2">Konsultasi &amp; pengecekan sinyal <span className="text-primary font-bold">GRATIS</span> untuk Anda</li>
                  <li className="pl-2">Material antena, kabel, dan STB berkualitas (bukan abal-abal)</li>
                  <li className="pl-2">Pemasangan rapi, kabel tertata, dan bersih kembali setelah pengerjaan</li>
                  <li className="pl-2">Setiap pemasangan dilengkapi <span className="text-primary font-bold">GARANSI</span></li>
                  <li className="pl-2">Respon cepat &amp; bisa dikerjakan di hari yang sama (selama jam operasional)</li>
                  <li className="pl-2">Harga jelas di awal, dijamin <span className="text-primary font-bold">TANPA BIAYA TERSEMBUNYI</span></li>
                </ol>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Box Kanan: Area Layanan */}
        <div className="w-full lg:w-1/3 h-full">
          <ScrollReveal direction="up">
            <div className="w-full h-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-primary font-bold text-lg md:text-xl mb-4 leading-snug">
                Area Mana Saja yang Dilayani Hidayah TV ??
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kami siap datang ke lokasi Anda di Surabaya, Sidoarjo, Gresik, dan sekitarnya.
                Untuk wilayah lain seperti Mojokerto, Pasuruan, hingga Lamongan tetap bisa kami
                layani dengan perjanjian terlebih dahulu. Hubungi kami untuk memastikan area Anda
                masuk jangkauan.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </section>

      {/* --- SECTION FITUR BAWAH --- */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto border-t border-gray-200 mt-6 mb-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex items-start gap-4 w-full">
                <div className="w-12 h-12 text-primary shrink-0">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-sm md:text-base mb-1">Tim Teknisi Profesional</h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Dikerjakan teknisi handal yang sudah berpengalaman dalam instalasi antena TV, parabola, dan penangkal petir.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex items-start gap-4 w-full">
                <div className="w-12 h-12 text-primary shrink-0">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-sm md:text-base mb-1">Respon &amp; Pengerjaan Cepat</h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Hubungi kami pagi, antena bisa terpasang hari itu juga. Cepat tanpa mengurangi kerapian.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex items-start gap-4 w-full">
                <div className="w-12 h-12 text-primary shrink-0">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-sm md:text-base mb-1">Hasil Jernih &amp; Bergaransi</h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Gambar dijamin jernih dan setiap pemasangan bergaransi. Kepuasan Anda prioritas kami.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* --- SECTION SPESIALIS & GALERI PORTOFOLIO --- */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-10">

        {/* Box Spesialis Kiri */}
        <div className="w-full lg:w-1/3">
          <ScrollReveal direction="up">
            <div className="bg-primary text-white p-10 h-full flex flex-col justify-center shadow-lg rounded-sm">
              <p className="text-sm tracking-widest mb-1 font-medium">Spesialis</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">ANTENA &amp; PETIR</h2>
              <p className="text-sm leading-relaxed mb-8 text-white/90">
                Ingin siaran TV super jernih sekaligus rumah yang aman dari sambaran petir? Kami menghadirkan instalasi antena, parabola, dan penangkal petir berkualitas tinggi.
              </p>
              <div className="flex text-secondary gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Area Galeri Kanan */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <ScrollReveal direction="left">

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4">
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4 sm:mb-0 drop-shadow-sm">Galeri Portofolio</h2>

              <Link
                href="/galeri"
                className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 shadow-md transform hover:-translate-y-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
                View More
              </Link>
            </div>

            {/* Grid Foto 6 Buah */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'antena2.jpeg',
                'antenatv.jpeg',
                'parabola-besar.jpg',
                'penangkal2.jpeg',
                'service.jpeg',
                'parabola-kecil.jpg'
              ].map((filename, index) => (
                <div
                  key={index}
                  className="w-full aspect-[4/3] bg-gray-200 bg-cover bg-center cursor-pointer hover:shadow-lg transition-all transform hover:scale-[1.03] duration-300 shadow-sm rounded-2xl overflow-hidden border border-gray-100 group relative"
                  style={{ backgroundImage: `url('/${filename}')` }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 drop-shadow-md"
                      fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

          </ScrollReveal>
        </div>

      </section>

      {/* --- SECTION TESTIMONI SLIDER --- */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full bg-gray-50 border-t border-gray-200 mt-10">
        <ScrollReveal direction="up">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 border-b border-gray-200 pb-10">
            <h2 className="text-4xl md:text-5xl font-black text-primary w-full lg:w-1/4 text-center lg:text-left">
              Testimoni
            </h2>

            <div className="w-full lg:w-auto flex justify-center">
              <Link
                href="/testimoni"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 shadow-md transform hover:-translate-y-1 whitespace-nowrap"
              >
                <div className="bg-white text-secondary p-1.5 rounded-full shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                </div>
                <span className="font-bold tracking-wide">200+ Pelanggan Puas</span>
              </Link>
            </div>

            <p className="text-gray-600 text-sm md:text-base w-full lg:w-5/12 text-center lg:text-left leading-relaxed font-medium">
              Kepercayaan pelanggan adalah aset terbesar kami. Berikut testimoni yang menggambarkan pengalaman mereka bersama <strong className="text-primary">Hidayah TV</strong>.
            </p>
          </div>

          {/* Area Slider Testimoni */}
          <div className="relative w-full">

            {/* Tombol Geser Kiri */}
            <button
              onClick={() => setTestiSlide(testiSlide === 0 ? 1 : 0)}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-10 w-12 h-12 bg-white hover:bg-secondary hover:text-white border border-gray-200 rounded-full items-center justify-center text-primary transition-all duration-300 shadow-lg transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            {/* Grid Testimoni */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-0 md:px-8 animate-in fade-in duration-700" key={testiSlide}>

              {[
                // SLIDE 1 (Index 0)
                [
                  { name: "Rina", text: "Pasang antena digital di rumah, sekarang semua channel jernih banget bebas semut. Teknisinya ramah, kerjanya cepat dan rapi. Sangat puas!" },
                  { name: "Bagas", text: "Dulu TV sering 'No Signal' kalau hujan. Setelah dibenahi Hidayah TV, gambar stabil terus. Respon cepat dan harga masuk akal. Recommended!" },
                  { name: "Dandy", text: "Pasang parabola buat di rumah yang susah sinyal UHF. Channel-nya banyak, ada lokal sampai olahraga. Mantap pelayanannya!" },
                  { name: "Maya", text: "Minta dipasang penangkal petir karena antena saya tinggi. Dikerjakan rapi, dijelaskan soal grounding-nya juga. Jadi tenang kalau hujan badai." },
                  { name: "Heri", text: "Survei lokasi cepat, pemasangan tepat waktu, hasil siaran jernih. Kualitas pengerjaannya tidak mengecewakan." },
                  { name: "Andri", text: "Setting Set Top Box yang tadinya error langsung beres ditangani teknisinya. Sekarang TV digital lancar. Terima kasih Hidayah TV!" }
                ],
                // SLIDE 2 (Index 1)
                [
                  { name: "Dewinta", text: "Antena lama roboh kena angin, langsung dibantu pasang ulang di hari yang sama. Kerjanya bersih dan profesional. Recommended banget!" },
                  { name: "Alif", text: "Pindah rumah dan butuh bongkar-pasang antena. Semua diurus rapi, gambar langsung jernih di rumah baru. Sangat terbantu." },
                  { name: "Marissa", text: "Pasang parabola mini, channel religi dan internasional lengkap. Pemasangannya rapi dan teknisinya sabar menjelaskan. Senang sekali!" },
                  { name: "Kiki", text: "Teknisinya sopan dan jujur soal harga. Tidak ada biaya tambahan aneh-aneh. Hasil siaran digital jernih total." },
                  { name: "Yusuf", text: "Sangat merekomendasikan Hidayah TV. Dari konsultasi sampai finishing semuanya memuaskan. Gambar TV jadi jernih banget!" },
                  { name: "Siti", text: "Penangkal petir untuk ruko sudah terpasang dengan grounding yang benar. Sekarang lebih aman saat musim hujan. Sukses terus!" }
                ]
              ][testiSlide].map((testi, index) => (

                <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col gap-4 h-full group">
                  {/* Bintang */}
                  <div className="flex text-secondary gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow italic">
                    "{testi.text}"
                  </p>
                  {/* Profil Pelanggan */}
                  <div className="flex items-center gap-3 mt-2 pt-4 border-t border-gray-50">
                    <div className="w-8 h-8 rounded-full bg-rose-50 text-primary flex items-center justify-center font-black text-xs shadow-inner">
                      {testi.name.charAt(0)}
                    </div>
                    <p className="font-bold text-primary text-sm group-hover:text-secondary transition-colors">{testi.name}</p>
                  </div>
                </div>

              ))}

            </div>

            {/* Tombol Geser Kanan */}
            <button
              onClick={() => setTestiSlide(testiSlide === 0 ? 1 : 0)}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-10 w-12 h-12 bg-white hover:bg-secondary hover:text-white border border-gray-200 rounded-full items-center justify-center text-primary transition-all duration-300 shadow-lg transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </button>

          </div>

          {/* Indikator Halaman (Titik di bawah) */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {[0, 1].map((dotIndex) => (
              <div
                key={dotIndex}
                onClick={() => setTestiSlide(dotIndex)}
                className={`cursor-pointer transition-all duration-300 rounded-full ${
                  testiSlide === dotIndex ? "w-8 h-2.5 bg-secondary" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              ></div>
            ))}
          </div>

        </ScrollReveal>
      </section>

      {/* --- SECTION CTA BANNER KONSULTASI --- */}
      <section className="w-full bg-primary py-10 my-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-white text-center md:text-left w-full md:w-3/5">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Gambar TV Anda Sering Hilang?</h3>
            <p className="text-sm md:text-base font-medium leading-relaxed">
              Jangan biarkan tontonan favorit terganggu. Konsultasikan secara <span className="font-bold">GRATIS</span> dengan <span className="font-bold">Hidayah TV</span> dan dapatkan solusi siaran jernih hari ini juga.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="bg-white text-primary p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <span className="text-white font-bold text-2xl tracking-wide">08212185448</span>
            </div>

            <Link
              href="/kontak"
              className="bg-secondary hover:bg-secondary-dark text-white px-6 py-2.5 rounded-md font-medium transition flex items-center justify-center gap-2 w-full sm:w-auto shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              Chat Admin
            </Link>
          </div>

        </div>
      </section>

      {/* --- SECTION BLOG & ARTIKEL --- */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Kolom Kiri: Judul & View More */}
            <div className="w-full lg:w-1/4 flex flex-col items-start lg:border-r border-gray-200 lg:pr-8">
              <span className="bg-primary text-white text-xs px-4 py-1.5 rounded-full font-bold mb-4 tracking-widest uppercase shadow-sm">
                Blog & Artikel
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 leading-tight">
                Recent Post
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 font-medium">
                Dapatkan tips, edukasi, dan informasi terbaru seputar antena TV digital, parabola, dan penangkal petir.
              </p>

              <Link
                href="/artikel"
                className="group flex items-center gap-2 text-primary hover:text-secondary transition-colors font-bold"
              >
                <span className="text-secondary text-2xl font-light group-hover:scale-110 transition-transform duration-300">+</span>
                View More
              </Link>
            </div>

            {/* Kolom Kanan: Grid Card Artikel */}
            <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

              {[
                {
                  title: "Cara Mengatasi Sinyal TV Digital yang Sering Hilang",
                  date: "22 Mei 2026",
                  image: "/sinyal.jpeg",
                  slug: "cara-mengatasi-sinyal-tv-digital-hilang"
                },
                {
                  title: "Perbedaan Antena Digital UHF Biasa vs Parabola",
                  date: "10 Mei 2026",
                  image: "/parabola.jpeg",
                  slug: "perbedaan-antena-uhf-vs-parabola"
                },
                {
                  title: "Bahaya Antena TV Tanpa Penangkal Petir di Musim Hujan",
                  date: "28 April 2026",
                  image: "/penangkal3.jpeg",
                  slug: "bahaya-antena-tanpa-penangkal-petir"
                }
              ].map((article, index) => (

                <Link
                  key={index}
                  href={`/artikel/${article.slug}`}
                  className="bg-white flex flex-col group cursor-pointer rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
                >
                  {/* Gambar Thumbnail */}
                  <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${article.image}')` }}
                    ></div>
                    <div className="absolute bottom-0 right-0 bg-secondary text-white text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-tl-xl shadow-sm">
                      New Post
                    </div>
                  </div>

                  {/* Konten Text */}
                  <div className="p-6 flex flex-col flex-grow relative">
                    <div className="absolute top-0 left-6 w-10 h-1 bg-gray-100 group-hover:bg-secondary transition-colors duration-300"></div>

                    <p className="text-xs text-gray-400 mb-2 font-medium mt-1">{article.date}</p>

                    <h3 className="font-bold text-gray-900 text-base leading-snug mb-4 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>

                    {/* Kategori & Komentar */}
                    <div className="flex items-center text-xs text-primary gap-2 mt-auto font-bold border-t border-gray-50 pt-4">
                      <span className="group-hover:text-secondary transition-colors">Artikel</span>
                      <span className="text-gray-300">|</span>
                      <span className="flex items-center gap-1 text-gray-400">
                        0
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>

              ))}

            </div>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
