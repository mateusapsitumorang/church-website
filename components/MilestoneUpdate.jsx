import { milestoneContent } from "../content";

const statusStyles = {
  done: { dot: "bg-[#fed65b]", label: "Selesai", text: "text-[#735c00]" },
  in_progress: { dot: "bg-[#000666]", label: "Berjalan", text: "text-[#000666]" },
  pending: { dot: "bg-[#c6c5d4]", label: "Menunggu", text: "text-[#767683]" },
};

export default function MilestoneUpdate() {
  const { period, title, summary, items, closingQuote } = milestoneContent;

  return (
    <section className="bg-white px-6 py-24 md:py-[120px]">
      <div className="mx-auto max-w-[900px]">
        <p
          className="text-[14px] font-semibold uppercase tracking-[0.05em] text-[#735c00]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Progres Pembangunan &middot; {period}
        </p>

        <h2
          className="mt-4 text-[24px] font-semibold leading-[32px] text-[#1a1c1c] md:text-[32px] md:leading-[40px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h2>

        <p
          className="mt-6 max-w-[720px] text-[16px] leading-[24px] text-[#454652]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {summary}
        </p>

        {/* Milestone timeline - vertical gold line, navy dots */}
        <ol className="relative mt-12 space-y-8 border-l-[1px] border-[#fed65b] pl-8">
          {items.map((item, i) => {
            const style = statusStyles[item.status];
            return (
              <li key={i} className="relative">
                <span
                  className={`absolute -left-[35px] top-[4px] h-[12px] w-[12px] rounded-full ${style.dot}`}
                />
                <p
                  className="text-[16px] text-[#1a1c1c]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </p>
                <span
                  className={`mt-1 inline-block text-[12px] font-semibold uppercase tracking-[0.05em] ${style.text}`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {style.label}
                </span>
              </li>
            );
          })}
        </ol>

        <blockquote className="mt-14 border-l-[2px] border-[#fed65b] pl-6">
          <p
            className="text-[18px] italic leading-[28px] text-[#000666]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            &ldquo;{closingQuote}&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}