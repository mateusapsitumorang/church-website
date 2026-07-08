import { pastorLetterContent } from "../content";

export default function PastorLetter() {
  const { title, location, paragraphs, closing, signature, signatureRole } =
    pastorLetterContent;

  return (
    <section className="bg-[#eeeeee] px-6 py-24 md:py-[120px]">
      <div className="mx-auto max-w-[720px]">
        <p
          className="text-[14px] font-semibold uppercase tracking-[0.05em] text-[#735c00]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Pesan dari Romo Paroki
        </p>

        <h2
          className="mt-4 text-[24px] font-semibold leading-[32px] text-[#1a1c1c] md:text-[32px] md:leading-[40px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h2>

        <div className="mt-10 rounded-[8px] border border-[#c6c5d4] bg-white p-8 md:p-12">
          <p
            className="text-[14px] uppercase tracking-[0.05em] text-[#767683]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {location}
          </p>

          <div className="mt-6 space-y-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[18px] leading-[28px] text-[#1a1c1c]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 border-t border-[#e2e2e2] pt-6">
            <p
              className="text-[16px] text-[#454652]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {closing}
            </p>
            <p
              className="mt-4 text-[20px] font-semibold text-[#000666]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {signature}
            </p>
            <p
              className="text-[14px] text-[#767683]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {signatureRole}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}