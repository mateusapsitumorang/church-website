import Image from "next/image";
import { galleryContent } from "../content";

export default function Gallery() {
  const { eyebrow, title, description, images } = galleryContent;

  return (
    <section
      id="galeri"
      className="bg-gradient-to-b from-[#f9f9f9] to-[#eeeeee] px-6 py-24 md:py-[120px] scroll-mt-[72px]"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header Section */}
        <div className="mb-14 flex flex-col items-center text-center md:items-start md:text-left">
          <p
            className="text-[14px] font-bold uppercase tracking-[0.08em] text-[#735c00]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {eyebrow}
          </p>

          <h2
            className="mt-4 max-w-[720px] text-[32px] font-bold leading-[40px] text-[#1a1c1c] md:text-[40px] md:leading-[48px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h2>

          <p
            className="mt-6 max-w-[680px] text-[16px] leading-[28px] text-[#454652]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {description}
          </p>
        </div>

        {/* Flexbox Layout agar item yang ganjil / sisa 2 di bawah berada di tengah */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {images.map((img, i) => (
            <figure
              key={img.src}
              // Menghapus shadow, menambahkan border tipis, mengatur ukuran lebar dinamis agar responsif
              className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white transition-transform duration-500 ease-out hover:-translate-y-2 sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading={i < 4 ? "eager" : "lazy"}
                />
                {/* Modern overlay: Gradient hitam netral, bukan biru */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <figcaption className="relative z-20 flex flex-col justify-center bg-white p-5">
                <p
                  className="text-[16px] font-bold text-[#1a1c1c]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {img.caption}
                </p>
                <p
                  className="mt-1.5 text-[13px] leading-[20px] text-[#767683]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {img.note}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
