"use client"; // Tambahkan ini karena kita memakai onClick dan useState

import { useState } from "react";
import Image from "next/image";
import { footerContent, navContent, donationContent } from "../content";

export default function Footer() {
  const { logo, parishName, unitName, diocese, address, verse } = footerContent;
  const { links } = navContent;
  const { bank, contacts } = donationContent;
  const year = new Date().getFullYear();

  // State untuk melacak apakah nomor rekening sudah disalin
  const [isCopied, setIsCopied] = useState(false);

  // Fungsi untuk menyalin nomor rekening
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bank.account);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Gagal menyalin teks: ", err);
    }
  };

  return (
    <footer className="bg-[#000666] px-6 pb-8 pt-20 text-white">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative block h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full ring-1 ring-white/20">
                <Image
                  src={logo}
                  alt={`Logo ${parishName}`}
                  fill
                  sizes="52px"
                  className="object-cover"
                />
              </span>
              <div>
                <p
                  className="text-[16px] font-semibold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {parishName}
                </p>
                <p
                  className="text-[12px] uppercase tracking-[0.05em] text-[#c6c5ff]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {unitName}
                </p>
              </div>
            </div>

            <p
              className="mt-6 max-w-[360px] text-[14px] leading-[22px] text-[#c6c5ff]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {diocese} &middot; {address}
            </p>

            <blockquote className="mt-6 border-l-[2px] border-[#fed65b] pl-4">
              <p
                className="text-[14px] italic leading-[22px] text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &ldquo;{verse.text}&rdquo;
              </p>
              <cite
                className="mt-1 block text-[11px] not-italic uppercase tracking-[0.05em] text-[#c6c5ff]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {verse.source}
              </cite>
            </blockquote>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.05em] text-[#fed65b]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Tautan Cepat
            </p>
            <ul
              className="mt-5 space-y-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-[#e3e2ff] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + bank */}
          <div>
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.05em] text-[#fed65b]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Narahubung
            </p>
            <ul
              className="mt-5 space-y-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {contacts.map((c) => (
                <li
                  key={c.name}
                  className="text-[14px] leading-[20px] text-[#e3e2ff]"
                >
                  <span className="font-semibold text-white">{c.role}</span>
                  <br />
                  {c.name} &middot; {c.phone}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-[4px] bg-white/10 p-4">
              <p
                className="text-[11px] uppercase tracking-[0.05em] text-[#c6c5ff]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Transfer Donasi
              </p>

              {/* Flex container agar teks rekening & ikon sejajar */}
              <div className="mt-1 flex items-center gap-2">
                <p
                  className="text-[15px] font-bold tracking-wide text-[#fed65b]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {bank.account}
                </p>

                {/* Tombol Copy tanpa background */}
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center text-[#fed65b] transition-all hover:opacity-60 active:scale-95"
                  title="Salin Nomor Rekening"
                >
                  {isCopied ? (
                    // Ikon Centang (Warna hijau terang agar terlihat di background gelap)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    // Ikon Copy
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </div>

              <p
                className="mt-1 text-[12px] text-[#e3e2ff]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {bank.name} &middot; a.n. {bank.holder}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-center md:flex-row md:text-left">
          <p
            className="text-[12px] text-[#c6c5ff]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            &copy; {year} Panitia Pembangunan Gereja Lanjutan Stasi St. Petrus
            Bratasena Adiwarna. Seluruh hak cipta dilindungi.
          </p>
          <p
            className="text-[12px] text-[#c6c5ff]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Dibangun dengan iman &amp; kasih &mdash; untuk kemuliaan Tuhan.
          </p>
        </div>
      </div>
    </footer>
  );
}
