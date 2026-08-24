"use client";


import PropertySection from "./components/PropertySection";
import { useState } from "react";



const WHATSAPP_BASE =
  "https://wa.me/6281818808111?text=Halo%20Arthiland,%20saya%20tertarik%20dengan%20properti%20yang%20ada%20di%20website.";


function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="antialiased">
      {/* NAVBAR */}
<header className="absolute top-0 left-0 right-0 z-50">
  <div className="max-w-[1440px] mx-auto px-6 lg:px-14 h-24 flex items-center justify-between">

   {/* Logo */}
<a href="#beranda" onClick={closeMenu}>
  <img
    src="/image/logo.png"
    alt="Arthi Land"
    className="h-9 lg:h-11 w-auto object-contain"
  />
</a>
    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center text-sm text-white/80">
      {[
        ["Beranda", "#beranda"],
        ["Properti", "#properti"],
        ["Lokasi", "#lokasi"],
        ["Tentang", "#tentang"],
        ["Kontak", "#kontak"],
      ].map(([label, href], index) => (
        <div key={label} className="flex items-center">
          {index !== 0 && (
            <span className="mx-7 h-5 w-px bg-white/20" />
          )}

          <a
            href={href}
            className="tracking-wide hover:text-[#d5af69] transition-colors duration-300"
          >
            {label}
          </a>
        </div>
      ))}
    </nav>

    {/* CTA */}
    <div className="flex items-center gap-4">
      <a
        href={WHATSAPP_BASE}
        target="_blank"
        rel="noopener noreferrer"
        className="
          hidden md:inline-flex items-center justify-center
          min-w-[180px] rounded-full
          border border-[#c7a261]/80 px-7 py-3
          text-sm tracking-wide text-[#dfc28d]
          hover:bg-[#c7a261] hover:text-black
          transition-all duration-300
        "
      >
        Hubungi Kami
      </a>

      <button
        id="menuBtn"
        className="md:hidden text-white"
        aria-label="Buka menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* Mobile Navigation */}
  <nav
    className={`
      ${menuOpen ? "flex" : "hidden"}
      md:hidden mx-5 px-6 py-5 flex-col
      bg-black/85 backdrop-blur-xl
      border border-white/10 rounded-2xl
      text-sm text-white/80 shadow-2xl
    `}
  >
    {[
      ["Beranda", "#beranda"],
      ["Properti", "#properti"],
      ["Lokasi", "#lokasi"],
      ["Tentang", "#tentang"],
      ["Kontak", "#kontak"],
    ].map(([label, href]) => (
      <a
        key={label}
        href={href}
        onClick={closeMenu}
        className="py-3 border-b border-white/10 last:border-0 hover:text-[#d5af69]"
      >
        {label}
      </a>
    ))}

    <a
      href={WHATSAPP_BASE}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-5 rounded-full border border-[#c7a261]
        px-5 py-3 text-center text-[#dfc28d]
      "
    >
      Hubungi Kami
    </a>
  </nav>
</header>

{/* HERO */}
<section
  id="beranda"
  className="
    relative min-h-[100svh]
    flex flex-col justify-end
    overflow-hidden text-white
  "
>
  {/* Background */}
  <img
    src="/image/_Aerial_View.png"
    alt="Panorama Dago Heights"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* Luxury overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-black/15" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/55" />

  {/* Main Content */}
  <div className="relative z-10 flex-1 flex items-center">
    <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-14 pt-28 pb-48 lg:pb-56">
      <div className="relative max-w-2xl pl-7 lg:pl-12 border-l border-[#c7a261]/70">

        <p className="mb-5 text-xs lg:text-sm tracking-[0.45em] uppercase text-[#d7b979]">
          Private Villa Collection
        </p>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-[76px] leading-[0.95] tracking-[0.12em] text-[#f0d8aa] drop-shadow-lg">
          DAGO
          <br />
          HEIGHTS
        </h1>

        <div className="my-7 h-px w-20 bg-[#c7a261]" />

        <p className="max-w-sm text-xs sm:text-sm lg:text-base leading-relaxed tracking-[0.3em] uppercase text-white/75">
          Private living in harmony
          <br />
          with nature
        </p>
      </div>
    </div>
  </div>

  {/* Property Statistics */}
<div className="absolute bottom-0 left-0 right-0 z-10">
  <div className="max-w-[1440px] mx-auto px-6 lg:px-14">

    <div className="flex items-center w-fit pb-7 lg:pb-9">

      {/* 25 Unit */}
      <div className="flex items-center gap-3 lg:gap-4 pr-6 lg:pr-9">
        <svg
          className="w-7 lg:w-9 text-[#c7a261]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M9 42V13l15-8 15 8v29M5 42h38M16 18h5v5h-5zM27 18h5v5h-5zM16 28h5v5h-5zM27 28h5v5h-5zM21 42V32h6v10" />
        </svg>

        <div>
          <p className="font-display text-2xl lg:text-3xl leading-none text-[#f0ddbc]">
            25
          </p>
          <p className="mt-1 text-[8px] lg:text-[10px] tracking-[0.25em] uppercase text-white/70">
            Unit
          </p>
        </div>
      </div>

      {/* Separator */}
      <div className="h-12 lg:h-14 w-px bg-white/25" />

      {/* 3 Lantai */}
      <div className="flex items-center gap-3 lg:gap-4 px-6 lg:px-9">
        <svg
          className="w-7 lg:w-9 text-[#c7a261]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M24 5 43 15 24 25 5 15 24 5Z" />
          <path d="m8 23 16 9 16-9M8 31l16 10 16-10" />
        </svg>

        <div>
          <p className="font-display text-2xl lg:text-3xl leading-none text-[#f0ddbc]">
            3
          </p>
          <p className="mt-1 text-[8px] lg:text-[10px] tracking-[0.25em] uppercase text-white/70">
            Lantai
          </p>
        </div>
      </div>

      {/* Separator */}
      <div className="h-12 lg:h-14 w-px bg-white/25" />

      {/* 1 Private Pool */}
      <div className="flex items-center gap-3 lg:gap-4 pl-6 lg:pl-9">
        <svg
          className="w-7 lg:w-9 text-[#c7a261]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M20 27V12a7 7 0 0 1 14 0M16 18h18" />
          <path d="M4 30c4 0 4 3 8 3s4-3 8-3 4 3 8 3 4-3 8-3 4 3 8 3M4 38c4 0 4 3 8 3s4-3 8-3 4 3 8 3 4-3 8-3 4 3 8 3" />
        </svg>

        <div>
          <p className="font-display text-2xl lg:text-3xl leading-none text-[#f0ddbc]">
            1
          </p>
          <p className="mt-1 text-[8px] lg:text-[10px] tracking-[0.18em] uppercase whitespace-nowrap text-white/70">
            Private Pool
          </p>
        </div>
      </div>

    </div>

    {/* Bottom gold line */}
    <div className="h-px w-full bg-[#c7a261]/60" />
  </div>
</div>
</section>

     <PropertySection />  

      {/* INTERIOR SHOWCASE */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="brass-line inline-block text-brass text-sm tracking-[0.2em] uppercase mb-6 pb-3 font-medium">Detail Interior</p>
              <h2 className="font-display text-4xl lg:text-5xl text-ink max-w-xl leading-tight">Belum di isi kata katanya</h2>
            </div>
            <p className="text-stone leading-relaxed max-w-sm">ini placeholder buat deskripsi interior nya</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
            <div className="lg:col-span-7 lg:row-span-2 relative rounded-2xl overflow-hidden group h-[420px] lg:h-full">
              <img src="/image/Villa Besar_4 (1).png" alt="swimming pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-brass-light text-xs tracking-[0.2em] uppercase mb-2">01 — Shophouses</p>
                <p className="font-display text-2xl text-paper">ini placeholder buat pool blm tau mau taro apa</p>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden group h-[200px] lg:h-auto">
              <img src="/image/Villa Besar_6 (1).png" alt="living room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-brass-light text-xs tracking-[0.2em] uppercase mb-1">02 — office</p>
                <p className="font-display text-lg text-paper">ini placeholder buat living room blm tau mau taro apa</p>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden group h-[200px] lg:h-auto">
              <img src="/image/Villa Besar_3 (2).png" alt="backyard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-brass-light text-xs tracking-[0.2em] uppercase mb-1">03 — semi outdoor spa</p>
                <p className="font-display text-lg text-paper">ini placeholder buat backyard spa, gk tau mau taro apa</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a href="#properti" className="inline-flex items-center gap-2 text-sm font-medium text-ink border border-ink/20 rounded-full px-6 py-3 hover:border-estate hover:text-estate transition-colors">
              Lihat Galeri Lengkap <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="tentang" className="py-20 px-6 lg:px-10 bg-ink text-paper">
        <div className="max-w-7xl mx-auto">
          <p className="text-brass text-sm tracking-[0.2em] uppercase mb-6 font-medium">Kenapa Arthiland</p>
          <h2 className="font-display text-4xl mb-14 max-w-xl">Membeli rumah seharusnya terasa tenang, bukan penuh keraguan</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="w-11 h-11 rounded-full border border-brass/50 flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9C4A0" strokeWidth="1.8"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /></svg>
              </div>
              <h3 className="font-display text-lg mb-2">Properti terverifikasi</h3>
              <p className="text-paper/60 text-sm leading-relaxed">Setiap listing melewati verifikasi legalitas sebelum dipublikasikan.</p>
            </div>
            <div>
              <div className="w-11 h-11 rounded-full border border-brass/50 flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9C4A0" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
              </div>
              <h3 className="font-display text-lg mb-2">Lokasi strategis</h3>
              <p className="text-paper/60 text-sm leading-relaxed">Fokus di kawasan berkembang sekitar Tangerang dengan akses tol dan fasilitas lengkap.</p>
            </div>
            <div>
              <div className="w-11 h-11 rounded-full border border-brass/50 flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9C4A0" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></svg>
              </div>
              <h3 className="font-display text-lg mb-2">Tim sales profesional</h3>
              <p className="text-paper/60 text-sm leading-relaxed">Didampingi agen berpengalaman yang memahami tiap kawasan secara mendalam.</p>
            </div>
            <div>
              <div className="w-11 h-11 rounded-full border border-brass/50 flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9C4A0" strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
              </div>
              <h3 className="font-display text-lg mb-2">Kontak WhatsApp langsung</h3>
              <p className="text-paper/60 text-sm leading-relaxed">Tanya ketersediaan dan jadwalkan survei tanpa proses berbelit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOKASI */}
      <section id="lokasi" className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="brass-line inline-block text-brass text-sm tracking-[0.2em] uppercase mb-6 pb-3 font-medium">Kawasan Kami</p>
          <h2 className="font-display text-4xl text-ink mb-14 max-w-xl">Kawasan strategis di sekitar Tangerang</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["BSD City", "Kawasan modern dengan akses tol dan fasilitas lengkap."],
              ["Alam Sutera", "Dekat pusat bisnis, sekolah, dan pusat perbelanjaan."],
              ["Gading Serpong", "Hunian keluarga dengan lingkungan asri dan nyaman."],
              ["Bintaro", "Akses mudah ke Jakarta dengan suasana tenang."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-ink/10 p-6 hover:border-estate transition-colors">
                <h3 className="font-display text-lg text-ink mb-2">{title}</h3>
                <p className="text-stone text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="py-24 px-6 lg:px-10 bg-paper">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <p className="brass-line inline-block text-brass text-sm tracking-[0.2em] uppercase mb-6 pb-3 font-medium">Hubungi Kami</p>
            <h2 className="font-display text-4xl text-ink mb-6">Mari bicarakan hunian impian Anda</h2>
            <p className="text-stone leading-relaxed mb-8 max-w-md">Tim sales kami siap membantu Anda menemukan properti yang sesuai kebutuhan.</p>
            <ul className="space-y-3 text-sm text-ink/80">
              <li>BSD City, Tangerang Selatan</li>
              <li>hello@tanahaya.id</li>
              <li>+62 812-3456-7890</li>
            </ul>
            <a href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 bg-estate hover:bg-estate-dark text-white font-medium px-6 py-3 rounded-full transition-colors">
              Hubungi via WhatsApp
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-ink/10 min-h-[300px]">
            <iframe
              src="https://www.google.com/maps?q=-6.867278,107.652778&output=embed"
              className="w-full h-full min-h-[300px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Arthiland"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-ink mb-6 leading-tight">Sedang mencari rumah<br />di Tangerang?</h2>
          <p className="text-stone text-lg mb-10 max-w-lg mx-auto">Jelajahi ratusan properti pilihan atau hubungi tim kami langsung untuk konsultasi gratis.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#properti" className="bg-estate hover:bg-estate-dark text-white font-medium px-8 py-4 rounded-full transition-colors">Lihat Semua Properti</a>
            <a href={WHATSAPP_BASE} className="border border-ink/20 hover:border-estate hover:text-estate text-ink font-medium px-8 py-4 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">Hubungi via WhatsApp</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-paper/70 pt-16 pb-8 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-paper/10">
            <div>
              <p className="font-display text-2xl text-paper mb-4">Arthiland</p>
              <p className="text-sm leading-relaxed max-w-xs">Mitra terpercaya Anda dalam mencari hunian terbaik di kawasan Tangerang dan sekitarnya.</p>
            </div>
            <div>
              <p className="text-paper text-sm font-medium mb-4">Navigasi</p>
              <ul className="text-sm space-y-3">
                <li><a href="#beranda" className="hover:text-brass transition-colors">Beranda</a></li>
                <li><a href="#properti" className="hover:text-brass transition-colors">Properti</a></li>
                <li><a href="#kontak" className="hover:text-brass transition-colors">Lokasi</a></li>
                <li><a href="#tentang" className="hover:text-brass transition-colors">Tentang Kami</a></li>
              </ul>
            </div>
            <div>
              <p className="text-paper text-sm font-medium mb-4">Kontak</p>
              <ul className="text-sm space-y-3">
                <li>Kelapa Gading, Jakarta Utara</li>
                <li>hello@tanahaya.id</li>
                <li>+62 812-3456-7890</li>
              </ul>
            </div>
            <div>
              <p className="text-paper text-sm font-medium mb-4">Ikuti Kami</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/itaewonvillage.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Itaewon Village"
                  className="w-9 h-9 rounded-full border border-paper/20 flex items-center justify-center hover:border-brass hover:text-brass transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-xs text-paper/40 pt-8">© 2026 Arthiland. Seluruh hak cipta dilindungi.</p>
        </div>
      </footer>
    </main>
  );
}
