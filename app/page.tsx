"use client";


import PropertySection from "./components/PropertySection";
import { useEffect, useRef, useState } from "react";



const WHATSAPP_BASE =
  "https://wa.me/6281818808111?text=Halo%20Arthiland,%20saya%20tertarik%20dengan%20properti%20yang%20ada%20di%20website.";


function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function GoldSectionDivider() {
  return (
    <div aria-hidden="true" className="bg-[#071511] px-6 lg:px-10">
      <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-[#C7A76A]/80 to-transparent" />
    </div>
  );
}

type InteriorPhoto = { src: string; label: string };

function InteriorLightbox({ photo, onClose }: { photo: InteriorPhoto; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="interior-photo-caption"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className="fixed inset-0 m-auto h-[100dvh] max-h-none w-screen max-w-none border-0 bg-black/95 p-4 text-white backdrop:bg-black/80 open:flex open:flex-col open:items-center open:justify-center sm:p-8"
    >
      <button
        type="button"
        autoFocus
        onClick={onClose}
        aria-label="Tutup foto interior"
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/70 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A76A]"
      >
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      </button>
      <figure className="m-0 flex max-h-full w-full max-w-7xl flex-col items-center gap-4 pt-14">
        <img src={photo.src} alt={photo.label} className="block max-h-[calc(100dvh-180px)] w-auto max-w-full object-contain" />
        <figcaption id="interior-photo-caption" className="text-center text-sm text-[#f0d8aa]">
          {photo.label}
        </figcaption>
      </figure>
    </dialog>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedInterior, setSelectedInterior] = useState("beaumont");
  const [expandedPhoto, setExpandedPhoto] = useState<InteriorPhoto | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="antialiased">
      {/* NAVBAR */}
<header className="absolute top-0 left-0 right-0 z-[100] pointer-events-auto">
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
    ["Properti", "#properties"],
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
        style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 1), 0 2px 40px rgba(0, 0, 0, 0.9)" }}
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
        type="button"
        id="menuBtn"
        className="
    relative z-[110]
    md:hidden
    flex items-center justify-center
    w-12 h-12
    text-white
    pointer-events-auto
    touch-manipulation
    cursor-pointer
    select-none
  "
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
    relative z-[105]
    md:hidden mx-5 px-6 py-5 flex-col
    bg-black/85 backdrop-blur-xl
    border border-white/10 rounded-2xl
    text-sm text-white/80 shadow-2xl
    pointer-events-auto
  `}
>
    {[
      ["Beranda", "#beranda"],
      ["Properti", "#properties"],
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
    src="/image/_Aerial_View_dark.jfif"
    alt="Panorama Dago Heights"
    className="
      absolute inset-0
      h-full w-full
      object-cover
      object-[center_45%]
      sm:object-center
    "
  />

  {/* Luxury overlay */}
  

  {/* Main Content */}
  <div className="relative z-10 flex-1 flex items-center">
    <div
      className="
        max-w-[1440px] w-full mx-auto
        px-6 lg:px-14
        pt-28
        pb-44
        sm:pb-48
        lg:pb-56
      "
    >
      <div
        className="
          relative max-w-2xl
          pl-7 lg:pl-12
          border-l border-[#c7a261]/70
        "
      >
        <p className="mb-5 text-xs lg:text-sm tracking-[0.45em] uppercase text-[#d7b979]">
          Private Villa Collection
        </p>

        <h1
          className="
            font-display
            text-5xl
            sm:text-6xl
            lg:text-[76px]
            leading-[0.95]
            tracking-[0.12em]
            text-[#f0d8aa]
            drop-shadow-lg
          "
        >
          DAGO
          <br />
          HEIGHTS
        </h1>

        <div className="my-7 h-px w-20 bg-[#c7a261]" />

        <p
          className="
            max-w-sm
            text-xs sm:text-sm lg:text-base
            leading-relaxed
            tracking-[0.3em]
            uppercase
            text-white/75
          "
        >
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

<GoldSectionDivider />

{/* LIFESTYLE INTRODUCTION */}
<section
  id="lifestyle"
  aria-labelledby="lifestyle-heading"
  className="bg-[#071511] px-6 py-20 text-[#f4efe5] lg:px-10 lg:py-28"
>
  <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
    <div className="relative overflow-hidden rounded-lg border border-[#C7A76A]/20">
      <img
        src="/image/Environment_01.png"
        alt="Ruang keluarga Dago Heights dengan suasana hangat dan terbuka"
        loading="lazy"
        className="aspect-[4/3] w-full object-cover"
      />
    </div>

    <div className="max-w-lg">
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#C7A76A]">
        The Dago Heights Lifestyle
      </p>
      <h2
        id="lifestyle-heading"
        className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl"
      >
        A Place to<br />Slow Down.
      </h2>
      <div aria-hidden="true" className="my-7 h-px w-16 bg-[#C7A76A]" />
      <p className="max-w-md text-sm leading-7 text-white/70 sm:text-base">
        Ruang untuk menikmati pagi, berkumpul bersama keluarga, dan
        meluangkan waktu untuk diri sendiri. Temukan ritme hidup Anda
        di Dago Heights.
      </p>
      <a
        href="#properties"
        className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-[#C7A76A]/60 py-2 text-sm text-[#dfc28d] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7A76A]"
      >
        Jelajahi Properti
        <span aria-hidden="true"><ArrowRight /></span>
      </a>
    </div>
  </div>
</section>

<GoldSectionDivider />

     <PropertySection />

<GoldSectionDivider />

      {/* INTERIOR SHOWCASE */}
<section className="relative overflow-hidden bg-[#071511] px-6 py-20 lg:px-10 lg:py-28">
  {/* Subtle background glow */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(167,132,74,0.12),_transparent_42%)]" />

  <div className="relative mx-auto max-w-7xl">
    {/* Section heading */}
    <div className="mb-12 text-center lg:mb-16">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#d3c5a5]">
        Detail Interior
      </p>

      <h2 className="font-display text-3xl text-[#f4efe5] sm:text-4xl lg:text-5xl">
        Crafted for Elevated Living
      </h2>

      <div className="mx-auto mt-6 h-px w-16 bg-[#9b8152]" />
    </div>

    <div className="mb-10 flex flex-col items-center gap-3">
      <label htmlFor="interior-type" className="text-xs uppercase tracking-[0.2em] text-[#d3c5a5]">
        Pilih Tipe Interior
      </label>
      <div className="relative w-full max-w-xs">
        <select
          id="interior-type"
          value={selectedInterior}
          onChange={(event) => setSelectedInterior(event.target.value)}
          aria-controls="interior-gallery"
          className="min-h-12 w-full cursor-pointer appearance-none rounded-full border border-[#C7A76A]/70 bg-[#0b1814] py-3 pl-6 pr-12 text-sm text-[#f0d8aa] transition-colors hover:border-[#C7A76A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7A76A]"
        >
          <option value="beaumont">Beaumont</option>
          <option value="montana">Montana</option>
        </select>
        <svg aria-hidden="true" className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#C7A76A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>

    {/* TODO: Ganti foto setiap tipe setelah aset Beaumont dan Montana dikonfirmasi.
        Foto pada kedua galeri sementara menggunakan aset interior lama. */}
    <div id="interior-gallery" aria-live="polite" aria-atomic="true">
      {[
        { id: "beaumont", name: "Beaumont", images: [
          { src: "/image/Villa Besar_6 (1).png", label: "Living Area" },
          { src: "/image/Villa Besar_4 (1).png", label: "Private Pool" },
          { src: "/image/Villa Besar_3 (2).png", label: "Backyard" },
          { src: "/image/Villa Besar_9.png", label: "Rooftop Access" }
          // Tambahkan foto berikutnya di sini: { src: "/image/nama-file.png", label: "Nama Ruangan" },
        ] },
        { id: "montana", name: "Montana", images: [
          { src: "/image/Villa Kecil_4.png", label: "Living Area" },
          { src: "/image/backyard and pool.png", label: "Backyard and pool" },
          { src: "/image/Villa Kecil_8.png", label: "Rooftop Access" },
          // Tambahkan foto berikutnya di sini: { src: "/image/nama-file.png", label: "Nama Ruangan" },
        ] },
      ].filter((interior) => interior.id === selectedInterior).map((interior) => (
        <section
          key={interior.id}
          id={`interior-${interior.id}`}
          aria-labelledby={`interior-${interior.id}-heading`}
          className="scroll-mt-24"
        >
          <div className="mb-6 flex items-center gap-5 lg:mb-8">
            <h3
              id={`interior-${interior.id}-heading`}
              className="font-display text-3xl text-[#f4efe5] sm:text-4xl"
            >
              {interior.name}
            </h3>
            <div aria-hidden="true" className="h-px flex-1 bg-[#C7A76A]/30" />
          </div>
          {/* Jumlah kartu mengikuti daftar foto masing-masing tipe. */}
          <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${interior.images.length === 3 ? "lg:grid-cols-3" : interior.images.length >= 4 ? "lg:grid-cols-4" : ""}`}>
            {interior.images.map((photo, index) => (
              <article key={`${photo.src}-${index}`} className="group relative h-[420px] overflow-hidden rounded-lg border border-white/10 bg-[#0b1814]">
                <button
                  type="button"
                  onClick={() => setExpandedPhoto({ src: photo.src, label: `${photo.label} — ${interior.name}` })}
                  aria-label={`Lihat foto penuh ${photo.label} — ${interior.name}`}
                  aria-haspopup="dialog"
                  className="absolute inset-0 z-10 cursor-zoom-in rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#C7A76A]"
                />
                <img
                  src={photo.src}
                  loading="lazy"
                  alt={`${photo.label} — ${interior.name}`}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06100d] via-transparent to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#eee5d3]">
                    {photo.label}
                  </p>
                  <div className="mt-4 h-px w-full bg-white/20">
                    <div className="h-px w-12 bg-[#b69a64] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
</section>

<GoldSectionDivider />

      {/* WHY CHOOSE US */}
<section
  id="tentang"
  className="bg-[#071611] px-6 py-16 text-[#C7A76A] lg:px-10"
>
  <div className="mx-auto max-w-7xl">
    {/* Section title */}
    <div className="mb-12 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.35em]">
        Kenapa Arthiland
      </p>

      <div className="mx-auto mt-4 h-px w-10 bg-[#C7A76A]" />
    </div>

    {/* Features */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {/* Item 1 */}
      <div className="flex flex-col items-center px-6 py-8 text-center lg:border-r lg:border-[#C7A76A]/30">
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="mb-6"
        >
          <rect x="18" y="27" width="28" height="27" rx="2" />
          <path d="M23 27v-8a9 9 0 0118 0v8" />
          <circle cx="32" cy="39" r="3" />
          <path d="M32 42v6" />
        </svg>

        <h3 className="text-[11px] font-medium uppercase tracking-[0.12em]">
          Properti Terverifikasi
        </h3>

        <p className="mt-3 max-w-[220px] text-xs leading-relaxed text-white/55">
          Setiap properti melalui proses verifikasi legalitas.
        </p>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-center border-t border-[#C7A76A]/20 px-6 py-8 text-center sm:border-l sm:border-t-0 lg:border-l-0 lg:border-r lg:border-[#C7A76A]/30">
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="mb-6"
        >
          <path d="M31 54C18 46 17 31 23 22c6-9 17-11 29-12-1 15-4 26-13 32-5 3-11 3-16 1" />
          <path d="M16 50c8-12 17-21 30-31" />
          <path d="M31 32c-7-1-12-4-15-9 9-1 16 2 19 6" />
        </svg>

        <h3 className="text-[11px] font-medium uppercase tracking-[0.12em]">
          Lokasi Strategis
        </h3>

        <p className="mt-3 max-w-[220px] text-xs leading-relaxed text-white/55">
          Berada di kawasan potensial dengan akses yang mudah.
        </p>
      </div>

      {/* Item 3 */}
      <div className="flex flex-col items-center border-t border-[#C7A76A]/20 px-6 py-8 text-center sm:border-r sm:border-t lg:border-r lg:border-t-0 lg:border-[#C7A76A]/30">
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="mb-6"
        >
          <path d="M32 7l18 7v14c0 13-7 22-18 29-11-7-18-16-18-29V14l18-7z" />
          <path d="M23 31l6 6 13-14" />
        </svg>

        <h3 className="text-[11px] font-medium uppercase tracking-[0.12em]">
          Pendampingan Profesional
        </h3>

        <p className="mt-3 max-w-[220px] text-xs leading-relaxed text-white/55">
          Didampingi tim berpengalaman dari konsultasi hingga transaksi.
        </p>
      </div>

      {/* Item 4 */}
      <div className="flex flex-col items-center border-t border-[#C7A76A]/20 px-6 py-8 text-center sm:border-t-0">
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="mb-6"
        >
          <path d="M8 21h48L32 55 8 21z" />
          <path d="M8 21l10-13h28l10 13" />
          <path d="M18 8l6 13 8-13 8 13 6-13" />
          <path d="M24 21l8 34 8-34" />
        </svg>

        <h3 className="text-[11px] font-medium uppercase tracking-[0.12em]">
          Nilai Investasi Tinggi
        </h3>

        <p className="mt-3 max-w-[220px] text-xs leading-relaxed text-white/55">
          Properti pilihan dengan potensi pertumbuhan jangka panjang.
        </p>
      </div>
    </div>
  </div>
</section>

<GoldSectionDivider />

      {/* LOKASI */}
<section
  id="lokasi"
  className="relative overflow-hidden bg-[#071712] px-6 py-24 text-[#F1EBDD] lg:px-10 lg:py-32"
>
  {/* Ambient glow */}
  <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#A8793F]/10 blur-[120px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#A8793F]/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl">
    <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.4fr] lg:gap-20">
      
      {/* Left content */}
      <div>
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#B98A4A]">
          Prime Location
        </p>

        <h2 className="font-display max-w-md text-4xl leading-[1.08] text-[#F1EBDD] sm:text-5xl lg:text-6xl">
          The Best of
          <br />
          Bandung
        </h2>

        <div className="my-7 h-px w-12 bg-[#B98A4A]" />

        <p className="max-w-md text-sm leading-7 text-[#B9B8AE] sm:text-base">
          Berada di kawasan strategis dengan akses mudah menuju pusat bisnis,
          pendidikan, hiburan, dan berbagai destinasi utama Bandung.
        </p>

        {/* Location indicators */}
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3">
          {[
  {
    time: "5",
    unit: "MIN",
    title: "Dago Pakar",
    description: "Kuliner & lifestyle",
  },
  {
    time: "20",
    unit: "MIN",
    title: "ITB",
    description: "Pendidikan",
  },
  {
    time: "25",
    unit: "MIN",
    title: "Stasiun Bandung",
    description: "Akses cepat",
  },
].map((location) => (
  <div
    key={location.title}
    className="group flex flex-col items-center text-center"
  >
    <div className="mb-4 flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full border border-[#B98A4A]/70 transition-all duration-500 group-hover:border-[#D6AF72] group-hover:bg-[#B98A4A]/10">
      <span className="font-display text-2xl leading-none text-[#F1EBDD]">
        {location.time}
      </span>

      <span className="mt-1 text-[8px] tracking-[0.2em] text-[#B98A4A]">
        {location.unit}
      </span>
    </div>

    <h3 className="mb-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[#F1EBDD]">
      {location.title}
    </h3>

    <p className="max-w-[110px] text-[9px] uppercase leading-4 tracking-[0.08em] text-[#898E87]">
      {location.description}
    </p>
  </div>
))}
        </div>
      </div>

      {/* Right image */}
      <div className="relative">
        <div className="absolute -inset-3 rounded-[28px] border border-[#B98A4A]/10" />

        <div className="group relative min-h-[420px] overflow-hidden rounded-[24px] bg-[#10211B] sm:min-h-[520px]">
          <img
            src="/image/Environment_01.png"
            alt="Kawasan strategis Bandung"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />

          {/* Dark luxury overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071712]/45 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071712]/75 via-transparent to-[#071712]/10" />

          {/* Floating label */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/20 pt-5 sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.28em] text-[#D1A665]">
                Connected Living
              </p>
              <p className="font-display text-xl text-white sm:text-2xl">
                At the Heart of Dago
              </p>
            </div>

            <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#D1A665]/70 text-[#D1A665] sm:flex">
              <span className="text-lg">↗</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom feature line */}
    <div className="mt-20 grid grid-cols-2 border-t border-[#B98A4A]/20 pt-9 md:grid-cols-4">
      {[
        ["01", "Akses Strategis"],
        ["02", "Kawasan Berkembang"],
        ["03", "Fasilitas Lengkap"],
        ["04", "Nilai Investasi Tinggi"],
      ].map(([number, title], index) => (
        <div
          key={title}
          className={`px-4 py-4 text-center ${
            index !== 0 ? "border-l border-[#B98A4A]/20" : ""
          }`}
        >
          <span className="mb-3 block font-display text-lg text-[#B98A4A]">
            {number}
          </span>
          <p className="text-[9px] uppercase tracking-[0.17em] text-[#C8C5B9] sm:text-[10px]">
            {title}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<GoldSectionDivider />
      {/* KONTAK */}
<section
  id="kontak"
  className="relative overflow-hidden bg-[#0A1A15] px-6 py-24 text-[#F1EBDD] lg:px-10 lg:py-32"
>
  {/* Ambient glow */}
  <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#A8793F]/10 blur-[120px]" />
  <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#A8793F]/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl">
    {/* Heading */}
    <div className="mb-14 max-w-2xl">
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#B98A4A]">
        Private Consultation
      </p>

      <h2 className="font-display text-4xl leading-[1.1] text-[#F1EBDD] sm:text-5xl lg:text-6xl">
        Your Future Home
        <br />
        Begins Here
      </h2>

      <div className="mt-7 h-px w-12 bg-[#B98A4A]" />
    </div>

    <div className="grid overflow-hidden rounded-[26px] border border-[#B98A4A]/20 bg-[#0D201A] lg:grid-cols-[0.8fr_1.2fr]">
      {/* Contact information */}
      <div className="relative flex flex-col justify-between p-8 sm:p-12 lg:p-14">
        <div>
          <p className="mb-8 max-w-md text-sm leading-7 text-[#AAAFA7] sm:text-base">
            Tim sales kami siap membantu Anda menemukan properti yang sesuai
            dengan kebutuhan, gaya hidup, dan rencana investasi Anda.
          </p>

          <div className="space-y-7">
            {/* Address */}
            <div className="group flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B98A4A]/50 text-[#C89C5D] transition-colors group-hover:bg-[#B98A4A]/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div>
                <p className="mb-1 text-[9px] uppercase tracking-[0.22em] text-[#B98A4A]">
                  Sales Gallery
                </p>
                <p className="text-sm leading-6 text-[#E2DED2]">
                  Dago Heights, Mekarsaluyu, Bandung
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="group flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B98A4A]/50 text-[#C89C5D] transition-colors group-hover:bg-[#B98A4A]/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                >
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <div>
                <p className="mb-1 text-[9px] uppercase tracking-[0.22em] text-[#B98A4A]">
                  Email
                </p>
                <a
                  href="mailto:Arthiland1@gmail.com"
                  className="text-sm text-[#E2DED2] transition-colors hover:text-[#D1A665]"
                >
                  Arthiland1@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="group flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B98A4A]/50 text-[#C89C5D] transition-colors group-hover:bg-[#B98A4A]/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                >
                  <path d="M7 3H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-4-1.5-6.5-4-8-8l2-2-2-4Z" />
                </svg>
              </div>

              <div>
                <p className="mb-1 text-[9px] uppercase tracking-[0.22em] text-[#B98A4A]">
                  Contact
                </p>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#E2DED2] transition-colors hover:text-[#D1A665]"
                >
                  +62 818-1880-8111
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp button */}
        <a
          href={WHATSAPP_BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 inline-flex w-fit items-center gap-5 border border-[#B98A4A]/70 px-6 py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#E8DDC8] transition-all duration-300 hover:bg-[#B98A4A] hover:text-[#071712]"
        >
          Schedule a Private Visit

          <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <p className="mt-5 text-[9px] uppercase tracking-[0.14em] text-[#69736D]">
          By appointment only
        </p>
      </div>

      {/* Google Maps */}
      <div className="relative min-h-[420px] border-t border-[#B98A4A]/20 lg:min-h-[600px] lg:border-l lg:border-t-0">
        <iframe
          src="https://www.google.com/maps?q=-6.867278,107.652778&output=embed"
          className="absolute inset-0 h-full w-full grayscale-[30%] contrast-[1.05]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Arthiland"
        />

        {/* Map overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[#071712]/10 mix-blend-multiply" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0D201A]/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0D201A]/80 to-transparent" />

        {/* Map label */}
        <div className="pointer-events-none absolute bottom-7 left-7 right-7 flex items-end justify-between sm:bottom-9 sm:left-9 sm:right-9">
          <div>
            <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[#D3A768]">
              Our Location
            </p>
            <p className="font-display text-xl text-white sm:text-2xl">
              Visit Our Sales Gallery
            </p>
          </div>

          <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#D1A665]/70 text-[#D1A665] sm:flex">
            ↗
          </div>
        </div>
      </div>
    </div>

    {/* Bottom statement */}
    <div className="mt-16 flex flex-col justify-between gap-6 border-t border-[#B98A4A]/20 pt-8 sm:flex-row sm:items-center">
      <p className="font-display text-xl text-[#DED6C6] sm:text-2xl">
        Live exceptionally. Invest meaningfully.
      </p>

      <p className="text-[9px] uppercase tracking-[0.24em] text-[#B98A4A]">
        Private Living · Strategic Investment
      </p>
    </div>
  </div>
</section>

<GoldSectionDivider />
     {/* CTA */}
<section className="relative overflow-hidden bg-[#071712] px-6 py-24 lg:px-10 lg:py-32">
  {/* Decorative glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A8793F]/10 blur-[140px]" />

  {/* Decorative lines */}
  <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-[18%] bg-gradient-to-r from-transparent to-[#B98A4A]/40 lg:block" />
  <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-[18%] bg-gradient-to-l from-transparent to-[#B98A4A]/40 lg:block" />

  <div className="relative mx-auto max-w-6xl">
    <div className="relative overflow-hidden border border-[#B98A4A]/25 bg-[#0A1C16]/90 px-7 py-16 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24">
      {/* Corner ornaments */}
      <div className="absolute left-5 top-5 h-10 w-10 border-l border-t border-[#B98A4A]/50" />
      <div className="absolute right-5 top-5 h-10 w-10 border-r border-t border-[#B98A4A]/50" />
      <div className="absolute bottom-5 left-5 h-10 w-10 border-b border-l border-[#B98A4A]/50" />
      <div className="absolute bottom-5 right-5 h-10 w-10 border-b border-r border-[#B98A4A]/50" />

      {/* Small title */}
      <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-[#B98A4A] sm:text-xs">
        Find Your Private Address
      </p>

      <div className="mx-auto mb-7 h-px w-10 bg-[#B98A4A]" />

      {/* Main heading */}
      <h2 className="font-display mx-auto max-w-3xl text-4xl leading-[1.08] text-[#F1EBDD] sm:text-5xl lg:text-6xl">
        Temukan Hunian Terbaik
        <br />
        di Bandung
      </h2>

      {/* Supporting copy */}
      <p className="mx-auto mb-11 mt-7 max-w-xl text-sm leading-7 text-[#A9AEA7] sm:text-base">
        Jelajahi properti pilihan atau konsultasikan kebutuhan Anda bersama tim
        kami untuk menemukan hunian dan investasi yang tepat.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#properties"
          
          className="group inline-flex min-w-[220px] items-center justify-center gap-5 bg-[#B98A4A] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#071712] transition-all duration-300 hover:bg-[#D0A766]"
        >
          Lihat Semua Properti

          <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <a
          href={WHATSAPP_BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-w-[220px] items-center justify-center gap-5 border border-[#B98A4A]/70 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#E8DDC8] transition-all duration-300 hover:border-[#B98A4A] hover:bg-[#B98A4A]/10"
        >
          Book Unit

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4 text-[#C89C5D]"
          >
            <path d="M20.5 11.5a8.5 8.5 0 0 1-12.54 7.47L3 20.5l1.54-4.82A8.5 8.5 0 1 1 20.5 11.5Z" />
            <path d="M8.5 8.2c.4 2.9 2.4 4.9 5.3 5.3" />
          </svg>
        </a>
      </div>

      {/* Trust indicator */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] uppercase tracking-[0.16em] text-[#737D76]">
        <span>Konsultasi Gratis</span>
        <span className="h-1 w-1 rounded-full bg-[#B98A4A]" />
        <span>Respons Cepat</span>
        <span className="h-1 w-1 rounded-full bg-[#B98A4A]" />
        <span>Pilihan Terbaik</span>
      </div>
    </div>
  </div>
</section>

<GoldSectionDivider />
      {/* FOOTER */}
      <footer className="bg-ink text-paper/70 pt-16 pb-8 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-paper/10">
            <div>
              <p className="font-display text-2xl text-paper mb-4">Arthiland</p>
              <p className="text-sm leading-relaxed max-w-xs">Mitra terpercaya Anda dalam mencari hunian terbaik di kawasan Bandung dan sekitarnya.</p>
            </div>
            <div>
              <p className="text-paper text-sm font-medium mb-4">Navigasi</p>
              <ul className="text-sm space-y-3">
                <li><a href="#beranda" className="hover:text-brass transition-colors">Beranda</a></li>
                <li><a href="#properties" className="hover:text-brass transition-colors">Properti</a></li>
                <li><a href="#lokasi" className="hover:text-brass transition-colors">Lokasi</a></li>
                <li><a href="#tentang" className="hover:text-brass transition-colors">Tentang Kami</a></li>
              </ul>
            </div>
            <div>
              <p className="text-paper text-sm font-medium mb-4">Kontak</p>
              <ul className="text-sm space-y-3">
                <li>Dago Heights, Mekarsaluyu, Bandung</li>
                <li>Arthiland1@gmail.com</li>
                <li>+62 818-1880-8111</li>
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
      {expandedPhoto && (
        <InteriorLightbox photo={expandedPhoto} onClose={() => setExpandedPhoto(null)} />
      )}
    </main>
  );
}