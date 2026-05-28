import Image from "next/image";
import { Reveal } from "./Reveal";
import { Quote, Star } from "./Icons";

// Real PT360 patient testimonials (paraphrased for brevity)
const reviews = [
  {
    name: "Joy P.",
    date: "Hip replacement",
    quote:
      "Nina has been my PT for years. She always welcomes me to my appointment with warmth and caring, and knows just what to do to help me progress.",
  },
  {
    name: "Marybeth M.",
    date: "Total knee replacement",
    quote:
      "Her combination of skill, intuition, compassion and humor is unmatched. After surgery her skill helped me successfully regain range of motion and strength.",
  },
  {
    name: "Linc",
    date: "Ski Patrol — quad & hip pain",
    quote:
      "Skiing is enjoyable again. Ski Patrol duties are much easier. PT360 exceeded my expectations and I accomplished all of my goals.",
  },
];

const avatarRow = ["/pt360/team/amy.jpg", "/pt360/team/nina.jpg", "/pt360/team/kristi.jpg"];

export default function Testimonials() {
  return (
    <section className="pt-section" style={{ background: "var(--pt-tint)" }}>
      <div className="pt-shell">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="pt-eyebrow">Testimonials</span>
          </Reveal>
          <Reveal delay={100} className="mt-6">
            <h2 className="pt-display pt-h2">Real patients, real recoveries.</h2>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {reviews.map((r, i) => {
            const delay = ((i + 1) * 100) as 100 | 200 | 300;
            return (
              <Reveal key={r.name} delay={delay}>
                <div className="relative h-full">
                  {/* Quote circle — overlaps top of card */}
                  <div
                    className="absolute left-7 -top-[22px] z-10 w-11 h-11 rounded-full flex items-center justify-center text-white shadow-[0_6px_14px_-6px_rgba(13,59,134,0.45)]"
                    style={{ background: "var(--pt-accent)" }}
                  >
                    <Quote size={16} />
                  </div>
                  <article
                    className="pt-card h-full flex flex-col"
                    style={{
                      padding: "28px 24px 32px 24px",
                      paddingTop: "44px",
                      background: "var(--pt-paper)",
                    }}
                  >
                    {/* Name + dashed divider + date */}
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <span className="font-semibold text-ink text-[15px] whitespace-nowrap shrink-0">{r.name}</span>
                      <span
                        aria-hidden
                        className="flex-1 h-px min-w-[12px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, rgba(21,50,107,0.35) 50%, transparent 50%)",
                          backgroundSize: "4px 1px",
                          backgroundRepeat: "repeat-x",
                        }}
                      />
                      <span className="text-[12.5px] text-ink-soft truncate min-w-0">{r.date}</span>
                    </div>

                    {/* Quote */}
                    <p className="mt-6 text-[15px] leading-[1.65] text-ink-soft flex-1">
                      &ldquo;{r.quote}&rdquo;
                    </p>

                    {/* Stars */}
                    <div className="mt-7 flex gap-1" style={{ color: "var(--pt-accent)" }}>
                      <Star size={15} /><Star size={15} /><Star size={15} /><Star size={15} /><Star size={15} />
                    </div>
                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Trust ribbon — real, supportable numbers */}
        <Reveal delay={400} className="mt-14 flex items-center justify-center gap-5">
          <div className="flex -space-x-2.5">
            {avatarRow.map((src, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm"
              >
                <Image src={src} alt="" fill sizes="40px" className="object-cover" style={{ objectPosition: "center top" }} />
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-baseline gap-0.5">
              <span
                className="font-bold text-ink leading-none"
                style={{
                  fontFamily: '"Open Sauce One", Inter, sans-serif',
                  fontSize: "clamp(1.625rem, 2.5vw, 2rem)",
                }}
              >
                26
              </span>
            </div>
            <div className="text-[13px] text-ink-soft mt-1">Team members across two Vermont locations</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
