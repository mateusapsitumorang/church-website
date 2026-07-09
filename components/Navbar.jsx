"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navContent } from "../content";

export default function Navbar() {
  const { parishName, parishShort, logo, links } = navContent;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-[#e2e2e2] bg-white/95 backdrop-blur-sm"
          : "border-transparent bg-white"
      }`}
    >
      {/* Tambahkan 'relative' di sini agar menu bisa di-center secara presisi */}
      <nav className="relative mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
        {/* Logo + name */}
        <a
          href="#beranda"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative block h-[44px] w-[44px] shrink-0 overflow-hidden rounded-full ring-1 ring-[#e0e0ff]">
            <Image
              src={logo}
              alt={`Logo ${parishName}`}
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span
              className="text-[15px] font-semibold text-[#1a1c1c]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {parishShort}
            </span>
            <span
              className="text-[11px] uppercase tracking-[0.05em] text-[#767683]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Panitia Pembangunan Gereja
            </span>
          </span>
        </a>

        {/* Desktop links - Posisi absolut untuk memastikan posisi benar-benar di tengah */}
        <ul
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14px] font-medium text-[#454652] transition-colors hover:text-[#000666]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-[4px] text-[#1a1c1c] md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-[#e2e2e2] bg-white transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-[420px]" : "max-h-0 border-t-0"
        }`}
      >
        <ul
          className="flex flex-col gap-1 px-6 py-4"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-[4px] px-2 py-3 text-[16px] font-medium text-[#1a1c1c] hover:bg-[#f9f9f9]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
