import Image from "next/image";
import { Reveal } from "./Reveal";
import { Play } from "./Icons";

const reasons = [
  "Employee-owned — the only PT cooperative in the nation",
  "Better Together — strength, skills & services under one roof",
  "360° of care — prevention, rehab, life-long wellness",
  "Alter-G, salt-water pool, BIOMAT & cold-laser equipment on-site",
];

export default function WhyChooseUs() {
  return (
    <section
      className="pt-section relative overflow-hidden"
      style={{ background: "var(--pt-dark)" }}
    >
      <div className="pt-shell text-white relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="pt-eyebrow pt-eyebrow--dark">Why Choose Us</span>
          </Reveal>
          <Reveal delay={100} className="mt-6">
            <h2 className="pt-display pt-h2" style={{ color: "#fff" }}>
              Board-Certified Clinical Specialists. Athletic Trainers. Strength &amp; Conditioning Specialists.
            </h2>
          </Reveal>
        </div>

        {/* 4-up label row with hairline above */}
        <div className="mt-14 md:mt-20">
          <div
            aria-hidden
            className="h-px w-full mb-8"
            style={{ background: "rgba(255,255,255,0.14)" }}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {reasons.map((r, i) => {
              const delay = ((i + 1) * 100) as 100 | 200 | 300 | 400;
              return (
                <Reveal key={r} delay={delay}>
                  <div className="flex items-start gap-2 text-white/90 leading-[1.45]">
                    <span style={{ color: "var(--pt-accent)" }} className="font-bold shrink-0">
                      //
                    </span>
                    <span className="text-[14.5px] font-medium">{r}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Video card */}
        <Reveal delay={300} spring className="mt-14 md:mt-20">
          <div className="pt-card pt-card-hover relative aspect-[16/9] md:aspect-[21/9] overflow-hidden group">
            <div className="absolute inset-0 pt-card-zoom">
              <Image
                src="/pt360/clinic-walk.jpg"
                alt="PT360 clinic — therapist and patient"
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover"
              />
            </div>
            {/* Center play button */}
            <button
              type="button"
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="pt-play-btn pt-play-btn--lg">
                <Play size={28} />
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
