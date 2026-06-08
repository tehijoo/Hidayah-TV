"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLinkClass = (path) => {
    const isActive = pathname === path;
    return isActive
      ? "bg-primary text-white px-4 py-2 rounded-md transition duration-300 shadow-sm"
      : "text-neutral-text hover:text-primary px-4 py-2 transition duration-300 font-medium";
  };

  const isLayananActive = pathname.startsWith("/layanan");

  // Daftar menu layanan agar lebih rapi dan bisa dipakai berulang (Desktop & Mobile)
  const layananMenu = [
    { label: 'Jasa Pasang Antena TV Digital', slug: 'antena-tv-digital' },
    { label: 'Jasa Pasang Parabola (Mini & Besar)', slug: 'parabola' },
    { label: 'Jasa Service & Perbaikan Antena', slug: 'service-antena' },
    { label: 'Jasa Pemasangan Penangkal Petir', slug: 'penangkal-petir' },
  ];

  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-md bg-white">
      

      {/* Nav Bar */}
      <div className="bg-white/95 backdrop-blur-md py-3 px-4 md:px-8 flex justify-between items-center border-b border-gray-100">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          
          {/* Gambar logo dibikin bulat (rounded-full) */}
          <img
            src="/logo.png"
            alt="Logo Hidayah TV"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md border border-gray-100 bg-white"
          />

          <div className="flex flex-col">
            <h1 className="text-primary font-black text-xl md:text-2xl leading-none">Hidayah TV</h1>
            <p className="text-secondary text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase mt-1">Antena &amp; Penangkal Petir</p>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-1 text-[13px]">
          <Link href="/" className={getNavLinkClass("/")}>Home</Link>
          <Link href="/tentang-kami" className={getNavLinkClass("/tentang-kami")}>Tentang Kami</Link>
          
          {/* Dropdown Layanan */}
          <div className="relative group py-2 px-1">
            <div className={`flex items-center gap-1 px-4 py-2 transition rounded-md cursor-pointer ${isLayananActive ? "bg-primary text-white" : "text-neutral-text hover:text-primary font-medium"}`}>
              <span>Layanan</span>
              <svg className="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <div className="absolute left-0 top-full w-72 bg-white border border-gray-100 shadow-2xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50">
              {layananMenu.map((item) => (
                <Link 
                  key={item.slug} 
                  href={`/layanan/${item.slug}`} 
                  className="px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-primary transition border-b border-gray-50 last:border-0 text-[13px] leading-tight"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/galeri" className={getNavLinkClass("/galeri")}>Galeri</Link>
          <Link href="/testimoni" className={getNavLinkClass("/testimoni")}>Testimoni</Link>
          <Link href="/artikel" className={getNavLinkClass("/artikel")}>Artikel</Link>
          <Link href="/kontak" className={getNavLinkClass("/kontak")}>Kontak</Link>
        </nav>

        {/* Search & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200">
            <input type="text" placeholder="Cari..." className="bg-transparent text-xs px-3 py-1.5 outline-none w-24 xl:w-40" />
            <button className="bg-secondary text-white p-1.5 rounded-md hover:bg-secondary-dark transition shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </div>
          
          {/* Tombol Hamburger Mobile */}
          <button className="lg:hidden p-2 bg-gray-50 rounded-lg text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Muncul saat diklik di HP) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full left-0 animate-in fade-in slide-in-from-top duration-300 overflow-y-auto max-h-[80vh]">
          <div className="flex flex-col p-6 gap-2">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className={getNavLinkClass("/")}>Home</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/tentang-kami" className={getNavLinkClass("/tentang-kami")}>Tentang Kami</Link>
            
            <div className="h-px bg-gray-100 my-2"></div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4 mb-1">Layanan Kami</p>
            {layananMenu.map((item) => (
              <Link 
                key={item.slug} 
                onClick={() => setIsMobileMenuOpen(false)} 
                href={`/layanan/${item.slug}`} 
                className="text-gray-600 hover:text-primary px-4 py-2 ml-2 border-l-2 border-gray-100 text-sm"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2"></div>

            <Link onClick={() => setIsMobileMenuOpen(false)} href="/galeri" className={getNavLinkClass("/galeri")}>Galeri</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/testimoni" className={getNavLinkClass("/testimoni")}>Testimoni</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/artikel" className={getNavLinkClass("/artikel")}>Artikel</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/kontak" className={getNavLinkClass("/kontak")}>Kontak</Link>
          </div>
        </div>
      )}
    </header>
  );
}