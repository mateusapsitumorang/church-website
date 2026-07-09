"use client";

import { useState } from "react";
import { donationContent } from "../content";

export default function DonationSection() {
  const { title, paragraphs, verse, rab, bank, contacts } = donationContent;
  const total = rab.reduce((sum, item) => sum + item.amount, 0);

  // State untuk melacak apakah nomor rekening sudah disalin
  const [isCopied, setIsCopied] = useState(false);

  // Fungsi untuk menyalin nomor rekening ke clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bank.account);
      setIsCopied(true);
      // Kembalikan ikon ke mode awal setelah 2 detik
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Gagal menyalin teks: ", err);
    }
  };

  return (
    <section
      id="donasi"
      className="bg-[#f9f9f9] px-6 py-24 md:py-[120px] scroll-mt-[72px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left: narrative */}
          <div>
            <h2
              className="text-[24px] font-semibold leading-[32px] text-[#1a1c1c] md:text-[32px] md:leading-[40px]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {title}
            </h2>

            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="mt-6 text-[16px] leading-[24px] text-[#454652]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {p}
              </p>
            ))}

            <blockquote className="mt-8 border-l-[2px] border-[#fed65b] pl-6">
              <p
                className="text-[18px] italic leading-[28px] text-[#000666]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                “{verse.text}”
              </p>
              <cite
                className="mt-2 block text-[12px] not-italic uppercase tracking-[0.05em] text-[#767683]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {verse.source}
              </cite>
            </blockquote>
          </div>

          {/* Right: transparency card */}
          <div className="rounded-[8px] border border-[#c6c5d4] bg-white p-8 shadow-[0_30px_60px_-24px_rgba(26,35,126,0.04)]">
            <p
              className="text-[14px] font-semibold uppercase tracking-[0.05em] text-[#735c00]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Rincian Kebutuhan Dana
            </p>

            <ul className="mt-6 space-y-4">
              {rab.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between border-b border-[#eeeeee] pb-3 text-[16px] text-[#1a1c1c]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span>{item.label}</span>
                  <span className="font-semibold">
                    Rp {item.amount.toLocaleString("id-ID")}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 flex items-center justify-between text-[18px] font-semibold text-[#000666]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span>Total Kebutuhan</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>

            {/* Bank info */}
            <div className="mt-8 rounded-[4px] bg-[#eeeeee] p-6">
              <p
                className="text-[12px] uppercase tracking-[0.05em] text-[#767683]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Transfer Donasi
              </p>
              <p
                className="mt-2 text-[16px] font-semibold text-[#1a1c1c]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {bank.name}
              </p>

              {/* Bagian Copy Icon yang sudah tanpa background */}
              <div className="mt-1 flex items-center gap-3">
                <p
                  className="text-[20px] font-bold tracking-wide text-[#000666]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {bank.account}
                </p>
                <button
                  onClick={handleCopy}
                  // Dihapus: bg-white, hover:bg-[#fed65b], shadow-sm
                  // Ditambahkan: hover:opacity-60 (agar ikon sedikit transparan saat di-hover)
                  className="flex items-center justify-center text-[#000666] transition-all hover:opacity-60 active:scale-95"
                  title="Salin Nomor Rekening"
                >
                  {isCopied ? (
                    // Ikon Centang (Sukses)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    // Ikon Copy
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                className="mt-1 text-[14px] text-[#454652]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                a.n. {bank.holder}
              </p>
            </div>

            {/* Contacts */}
            <div className="mt-6 space-y-2">
              {contacts.map((c) => (
                <p
                  key={c.name}
                  className="text-[14px] text-[#454652]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span className="font-semibold text-[#1a1c1c]">
                    {c.role}:
                  </span>{" "}
                  {c.name} ({c.phone})
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* --- PETA LOKASI GOOGLE MAPS --- */}
        <div className="mt-20">
          <h3
            className="mb-6 text-center text-[24px] font-semibold text-[#1a1c1c] md:text-left"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lokasi Pembangunan
          </h3>
          <div className="overflow-hidden rounded-xl border border-[#c6c5d4] bg-[#eeeeee] shadow-sm">
            <iframe
              title="Peta Lokasi Gereja Stasi St. Petrus Bratasena"
              src="https://maps.google.com/maps?q=Bratasena+Adiwarna,+Kec.+Dente+Teladas,+Kab.+Tulang+Bawang,+Lampung+34596&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
