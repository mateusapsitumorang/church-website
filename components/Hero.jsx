import Image from "next/image";
import { homeContent } from "../content";

export default function Hero() {
  const { headline, subheadline, description, verse, cta, progress } =
    homeContent;
  const percent = Math.min(
    100,
    Math.round((progress.collected / progress.target) * 100),
  );

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-[#f9f9f9] px-6 py-24 md:py-[140px] scroll-mt-[72px]"
    >
      {/* Background photo */}
      <Image
        src="/images/backgroundhero.png"
        alt="Bangunan Gereja Katolik Stasi Santo Petrus Bratasena"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* White overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />

      {/* Content - Ditambahkan z-10 agar berada di atas gradient */}
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <p
          className="mb-6 text-[14px] font-semibold uppercase tracking-[0.05em] text-[#735c00]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Panitia Pembangunan Gereja &middot; Stasi St. Petrus Bratasena
        </p>

        <h1
          className="max-w-[820px] text-[32px] font-bold leading-[40px] text-[#1a1c1c] md:text-[48px] md:leading-[56px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {headline}
        </h1>

        <p
          className="mt-6 max-w-[560px] text-[18px] leading-[28px] text-[#454652]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {subheadline}
        </p>

        <p
          className="mt-8 max-w-[680px] text-[16px] leading-[24px] text-[#1a1c1c]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {description}
        </p>

        {/* Sacred verse callout */}
        <blockquote className="mt-10 border-l-[2px] border-[#fed65b] pl-6">
          <p
            className="text-[18px] italic leading-[28px] text-[#000666]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            &ldquo;{verse.text}&rdquo;
          </p>
          <cite
            className="mt-2 block text-[12px] not-italic uppercase tracking-[0.05em] text-[#767683]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {verse.source}
          </cite>
        </blockquote>

        {/* Progress */}
        <div className="mt-12 max-w-[520px]">
          <div className="mb-2 flex items-baseline justify-between">
            <span
              className="text-[14px] font-semibold uppercase tracking-[0.05em] text-[#454652]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Dana Terkumpul
            </span>
            <span
              className="text-[14px] font-semibold text-[#000666]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {percent}%
            </span>
          </div>
          <div className="h-[4px] w-full rounded-full bg-[#e0e0ff]">
            <div
              className="h-[4px] rounded-full bg-[#fed65b]"
              style={{ width: `${percent}%` }}
            />
          </div>
          <p
            className="mt-2 text-[12px] text-[#767683]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Rp {progress.collected.toLocaleString("id-ID")} dari target Rp{" "}
            {progress.target.toLocaleString("id-ID")}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#donasi"
            className="inline-block rounded-[4px] bg-[#000666] px-8 py-4 text-[16px] font-semibold text-white shadow-[0_8px_30px_-8px_rgba(26,35,126,0.25)] transition-shadow hover:shadow-[0_12px_36px_-6px_rgba(26,35,126,0.35)]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
