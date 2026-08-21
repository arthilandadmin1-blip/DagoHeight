"use client";


import PropertySection from "./components/PropertySection";
import { useState } from "react";



const WHATSAPP_BASE =
  "https://wa.me/6285759426450?text=Halo%20Arthiland,%20saya%20tertarik%20dengan%20properti%20yang%20ada%20di%20website.";


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
      <header className="fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#beranda" className="font-display text-2xl tracking-tight text-ink" onClick={closeMenu}>
            <img src="/image/logo.png" alt="Arthiland" className="max-h-50 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm text-ink/80">
            <a href="#beranda" className="hover:text-estate transition-colors">Beranda</a>
            <a href="#properti" className="hover:text-estate transition-colors">Properti</a>
            <a href="#lokasi" className="hover:text-estate transition-colors">Lokasi</a>
            <a href="#tentang" className="hover:text-estate transition-colors">Tentang</a>
            <a href="#kontak" className="hover:text-estate transition-colors">Kontak</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_BASE}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink border border-ink/20 rounded-full px-5 py-2.5 hover:border-estate hover:text-estate transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami
            </a>
            <button
              id="menuBtn"
              className="md:hidden text-ink"
              aria-label="Buka menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>

        <nav className={`${menuOpen ? "flex" : "hidden"} md:hidden flex-col gap-1 px-6 pb-6 text-sm text-ink/80 bg-paper border-t border-ink/10`}>
          <a href="#beranda" className="block py-3 hover:text-estate transition-colors" onClick={closeMenu}>Beranda</a>
          <a href="#properti" className="block py-3 hover:text-estate transition-colors" onClick={closeMenu}>Properti</a>
          <a href="#lokasi" className="block py-3 hover:text-estate transition-colors" onClick={closeMenu}>Lokasi</a>
          <a href="#tentang" className="block py-3 hover:text-estate transition-colors" onClick={closeMenu}>Tentang</a>
          <a href="#kontak" className="block py-3 hover:text-estate transition-colors" onClick={closeMenu}>Kontak</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="beranda" className="pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="brass-line inline-block text-brass text-sm tracking-[0.2em] uppercase mb-8 pb-3 font-medium">Properti Premium Tangerang</p>
            <h1 className="font-display text-5xl lg:text-6xl leading-[1.08] text-ink mb-6">
              Temukan rumah<br />impian Anda di<br /><span className="italic text-estate text-7xl lg:text-8xl">Tangerang</span>
            </h1>
            <p className="text-stone text-lg leading-relaxed mb-10 max-w-md">
              Kurasi hunian terpercaya di BSD, Alam Sutera, Gading Serpong, dan Bintaro — didampingi tim sales profesional dari awal hingga akad.
            </p>

            <div className="flex gap-10 mt-12">
              <div>
                <p className="font-display text-3xl text-ink">0</p>
                <p className="text-sm text-stone mt-1">Properti terdaftar</p>
              </div>
              <div>
                <p className="font-display text-3xl text-ink">0</p>
                <p className="text-sm text-stone mt-1">Kawasan Tangerang</p>
              </div>
              <div>
                <p className="font-display text-3xl text-ink">1</p>
                <p className="text-sm text-stone mt-1">Sales berpengalaman</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 border border-brass/40 rounded-3xl -z-10" />
            <img src="/image/_Aerial_View.png" alt="DagoHeight" className="w-full rounded-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 max-w-[240px] border border-ink/5">
              <p className="font-display text-lg text-ink leading-snug">DagoHeight</p>
            </div>
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
              src="https://www.google.com/maps/search/?api=1&query=Dago+Heights+Montana+Resor+Dago+Pakar+Bandung&utm_source=chatgpt.com"
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
