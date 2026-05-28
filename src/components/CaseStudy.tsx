import Image from "next/image";
import { Reveal } from "./Reveal";
import { Play } from "./Icons";

const testimonials = [
  { name: "Joy P.", role: "Hip replacement recovery", brand: "Nina, PT", avatar: "/pt360/team/nina.jpg" },
  { name: "Leah", role: "Double hamstring injury — ultra-trail runner", brand: "Jim & Debbie", avatar: "/pt360/team/andrew.jpg" },
  { name: "Marybeth M.", role: "Total knee replacement", brand: "Nina, PT", avatar: "/pt360/team/nina.jpg" },
];

const videoCards = [
  { thumb: "/pt360/clinic-walk.jpg" },
  { thumb: "/pt360/williston-gym.jpg" },
];

export default function CaseStudy() {
  return (
    <section className="pt-section">
      <div className="pt-shell">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <span className="pt-eyebrow">Case Study</span>
            </Reveal>
            <Reveal delay={100} className="mt-6">
              <h2 className="pt-display pt-h2">
                Real Vermont patients. Real recoveries.
              </h2>
            </Reveal>

            <div className="mt-10 md:mt-14">
              {testimonials.map((t, i) => {
                const delay = ((i + 1) * 100) as 100 | 200 | 300;
                return (
                  <Reveal key={t.name} delay={delay}>
                    <div
                      className="flex items-center gap-4 py-5"
                      style={{ borderBottom: "1px solid var(--pt-rule)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-full overflow-hidden shrink-0 relative"
                        style={{ background: "var(--pt-tint)" }}
                      >
                        <Image
                          src={t.avatar}
                          alt=""
                          fill
                          sizes="40px"
                          className="object-cover"
                          style={{ objectPosition: "center top" }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold text-ink text-[15px]">{t.name}</span>
                        <span className="text-ink-soft text-[14px] ml-2">
                          / {t.role} ·{" "}
                          <span style={{ color: "var(--pt-accent)" }} className="font-medium">
                            {t.brand}
                          </span>
                        </span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* RIGHT — stacked video cards with hover */}
          <div className="col-span-12 lg:col-span-6 space-y-5">
            {videoCards.map((v, i) => {
              const delay = ((i + 1) * 200) as 200 | 400;
              return (
                <Reveal key={i} delay={delay} spring>
                  <div
                    className="pt-card-hover relative aspect-[16/10] overflow-hidden group"
                    style={{
                      borderRadius: 14,
                      background: "var(--pt-tint)",
                      padding: 6,
                    }}
                  >
                    <div className="relative w-full h-full overflow-hidden pt-card-zoom" style={{ borderRadius: 10 }}>
                      <Image
                        src={v.thumb}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 600px, 100vw"
                        className="object-cover"
                      />
                      <button
                        type="button"
                        aria-label="Play video"
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <span className="pt-play-btn">
                          <Play size={22} />
                        </span>
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
