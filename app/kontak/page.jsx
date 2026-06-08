"use client"; // Wajib ditambahkan jika kita menggunakan event onClick pada form

import React, { useState } from 'react';

export default function KontakPage() {
  // State untuk menyimpan inputan user
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    phone: '',
    pesan: ''
  });

  // Fungsi untuk menangani perubahan teks di kolom input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Fungsi untuk mengirim pesan ke WhatsApp
  const sendToWhatsApp = () => {
    if(!formData.nama || !formData.phone) {
      alert("Nama dan Nomor HP/WhatsApp wajib diisi!");
      return;
    }

    const targetWA = "628212185448";

    // Merangkai teks pesan yang akan dikirim ke WA Anda
    const textMessage = `Halo Hidayah TV,%0A%0ASaya ingin pasang antena/penangkal petir. Berikut data diri saya:%0A%0A*Nama:* ${formData.nama}%0A*Email:* ${formData.email || '-' }%0A*No HP:* ${formData.phone}%0A*Pesan:* ${formData.pesan}%0A%0ATerima kasih.`;

    const waLink = `https://wa.me/${targetWA}?text=${textMessage}`;

    // Membuka tab WhatsApp baru
    window.open(waLink, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20">

      {/* Banner Header */}
      <section className="bg-primary py-20 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Kontak Kami</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-rose-100 text-lg max-w-2xl mx-auto leading-relaxed italic opacity-90">
            Gambar TV sering hilang atau ingin pasang antena baru? Hubungi Hidayah TV untuk konsultasi gratis dan solusi siaran jernih.
          </p>
        </div>
      </section>

      {/* Tombol WhatsApp Besar */}
      <section className="container mx-auto max-w-4xl px-4 md:px-8 -mt-8 relative z-20">
        <a
          href="https://wa.me/628212185448?text=Halo%20Hidayah%20TV,%20saya%20ingin%20pasang%20antena/konsultasi."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-center gap-3 px-6 py-5 font-bold text-lg transition-all transform hover:-translate-y-1"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
          Chat Admin via WhatsApp — 0821 2185 448
        </a>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-6xl px-4 md:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Kolom Kiri: Informasi Kontak (Bisa diklik) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">

          {/* Box Area Layanan -> Buka Google Maps */}
          <a
            href="https://maps.google.com/?q=Jalan+Semeru+Raya,+Grogol+Petamburan,+Jakarta+Barat+11450"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center group"
          >
            <div className="w-14 h-14 bg-rose-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center mb-4 shadow-inner">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Area Layanan</h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-primary transition">
              Jalan Semeru Raya, Grogol Petamburan, Jakarta Barat 11450
            </p>
          </a>

            {/* Box Telepon -> Buka WA */}
            <a href="https://wa.me/628212185448" target="_blank" rel="noopener noreferrer" className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-rose-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Telepon / WhatsApp</h3>
              <p className="text-secondary font-black text-xl tracking-wide group-hover:text-secondary-dark transition">
                0821 2185 448
              </p>
            </a>

            {/* Box Email -> Buka Aplikasi Email */}
            <a href="mailto:harjiantomachmud948@gmail.com" className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-rose-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm font-medium group-hover:text-primary transition">
                harjiantomachmud948@gmail.com
              </p>
            </a>

            {/* Box Jam Operasional */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-rose-50 text-primary rounded-full flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Jam Operasional</h3>
              <p className="text-gray-600 text-sm font-medium">
                Setiap Hari<br/>08.00 – 20.00 WIB
              </p>
            </div>

          </div>

          {/* Kolom Kanan: Form Kontak ke WA */}
          <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-black text-primary mb-8 border-b-4 border-secondary pb-4 inline-block">
              Tinggalkan Pesan Disini
            </h2>

            <form className="flex flex-col gap-6">

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                  <label htmlFor="nama" className="text-sm font-bold text-gray-700">Nama Anda *</label>
                  <input
                    type="text"
                    id="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700">Email (Opsional)</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan alamat email"
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-bold text-gray-700">No. HP / WhatsApp *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contoh: 0812xxxxxx"
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="text-sm font-bold text-gray-700">Pesan</label>
                <textarea
                  id="pesan"
                  rows="5"
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Contoh: Saya ingin pasang antena TV digital untuk rumah di Sidoarjo..."
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-y"
                ></textarea>
              </div>

              {/* Tombol akan menjalankan fungsi sendToWhatsApp */}
              <button
                type="button"
                onClick={sendToWhatsApp}
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 rounded-xl mt-2 transition-all duration-300 shadow-lg shadow-primary/20 w-full md:w-auto self-start transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                Kirim via WhatsApp
              </button>

            </form>
          </div>

        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <iframe
            title="Lokasi Hidayah TV"
            src="https://maps.google.com/?q=Jalan+Semeru+Raya,+Grogol+Petamburan,+Jakarta+Barat+11450&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </main>
  );
}
