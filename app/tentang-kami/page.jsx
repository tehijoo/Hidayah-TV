import React from 'react';
import { CheckCircle2, Eye, Target, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Tentang Kami – Hidayah TV',
  description: 'Hidayah TV adalah spesialis jasa instalasi antena TV digital, parabola, service antena, dan penangkal petir untuk wilayah Jakarta dan sekitarnya.',
};

export default function TentangKamiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* MAIN CONTENT AREA */}
      <main className="flex-grow bg-white">

        {/* Banner Section */}
        <section className="bg-primary text-white py-20 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">Hidayah TV</h1>
            <p className="text-xl text-rose-100 italic font-medium opacity-90">
              "Siaran Jernih, Rumah Terlindungi"
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16 max-w-6xl">
          {/* Main Story Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wide">Siapa Kami?</h2>
              <div className="h-1.5 w-20 bg-secondary mb-6"></div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  <strong className="text-primary">Hidayah TV</strong> adalah penyedia jasa profesional yang berfokus pada bidang spesialis instalasi telekomunikasi visual dan sistem keamanan grounding petir. Layanan kami meliputi pemasangan antena TV digital, parabola, service &amp; perbaikan antena, hingga pemasangan penangkal petir.
                </p>
                <p>
                  Kami berdedikasi memberikan hasil kerja yang rapi, bersih, dan tahan lama. Didukung teknisi berpengalaman serta penggunaan material berkualitas, kami memastikan setiap pemasangan menghasilkan siaran yang jernih dan instalasi yang aman.
                </p>
                <p>
                  Bagi kami, kepuasan pelanggan bukan sekadar siaran yang jernih, tetapi juga kerapian pengerjaan dan rasa aman yang Anda dapatkan. Itulah yang menjadikan kami mitra terpercaya bagi rumah tangga maupun tempat usaha.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-video md:aspect-square flex items-center justify-center border-8 border-gray-50 group">
                
                {/* Tag Gambar */}
                <img 
                  src="/service.jpeg" 
                  alt="Dokumentasi Pemasangan Antena Hidayah TV" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* (Opsional) Label transparan di atas gambar saat disorot mouse */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-bold text-primary text-center tracking-wide uppercase">Dokumentasi Hidayah TV</p>
                </div>

              </div>
            </div>
          </section>

          {/* Visi & Misi Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-primary text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
              <div className="bg-white/15 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Visi</h3>
              <p className="text-rose-100 leading-relaxed text-sm md:text-base">
                Menjadi penyedia jasa instalasi antena dan penangkal petir terpercaya yang mengutamakan kepuasan pelanggan, kerapian pengerjaan, dan standar keamanan tinggi.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="bg-secondary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Misi</h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" /> Memberikan hasil siaran yang jernih dan stabil.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" /> Mengerjakan instalasi dengan rapi, bersih, dan aman.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" /> Menggunakan material berkualitas dan bergaransi.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" /> Melayani pelanggan dengan respon cepat dan ramah.</li>
              </ul>
            </div>
          </section>

          {/* Keunggulan Section */}
          <section className="bg-gray-100 rounded-3xl p-10 shadow-inner border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-center text-primary mb-12 uppercase tracking-wide">
              Kenapa Memilih Hidayah TV?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { title: "Teknisi Berpengalaman", desc: "Dikerjakan oleh teknisi ahli yang sudah menangani ratusan pemasangan antena dan penangkal petir." },
                { title: "Gambar Jernih & Bergaransi", desc: "Siaran dijamin jernih bebas 'semut', dan setiap pemasangan dilengkapi garansi." },
                { title: "Material Berkualitas", desc: "Menggunakan antena, kabel, STB, dan tembaga grounding berkualitas agar awet." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200/50 transform hover:-translate-y-1 transition duration-300">
                  <div className="bg-secondary w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg rotate-3 hover:rotate-0 transition-transform">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cakupan Area Section */}
          <section className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/15 w-20 h-20 rounded-3xl flex items-center justify-center shrink-0">
                <MapPin size={40} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 uppercase tracking-wide">Cakupan Area Layanan</h3>
                <p className="text-rose-100 leading-relaxed mb-4">
                  Hidayah TV siap datang ke lokasi Anda di <strong className="text-white">Jakarta, Tangerang, Bekasi</strong> dan sekitarnya. Wilayah lain seperti Depok, Bogor, dan Cilegon juga dapat kami layani dengan perjanjian terlebih dahulu.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {["Jakarta", "Tangerang", "Bekasi", "Depok", "Bogor", "Cilegon"].map((kota) => (
                    <span key={kota} className="bg-white/15 px-4 py-1.5 rounded-full text-sm font-medium">{kota}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
