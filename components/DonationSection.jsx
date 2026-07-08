import { donationContent } from "../content";

export default function DonationSection() {
  const { title, paragraphs, verse, rab, bank, contacts } = donationContent;
  const total = rab.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section className="bg-[#f9f9f9] px-6 py-24 md:py-[120px]">
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
                &ldquo;{verse.text}&rdquo;
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
              <p
                className="mt-1 text-[20px] font-bold tracking-wide text-[#000666]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {bank.account}
              </p>
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
                  <span className="font-semibold text-[#1a1c1c]">{c.role}:</span>{" "}
                  {c.name} ({c.phone})
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}