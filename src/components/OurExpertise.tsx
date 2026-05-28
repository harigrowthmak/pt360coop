import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { ArrowRight } from "./Icons";

const services = [
  {
    title: "Post-Concussion Syndrome",
    body:
      "The only comprehensive and research-based PCS program in Chittenden County, designed for clients experiencing ongoing symptoms.",
    image: "/pt360/post-concussion.jpg",
    href: "/service/post-concussion-syndrome",
  },
  {
    title: "Aquatic Therapy",
    body:
      "Salt-water pool at 92–93°F. Buoyancy and hydrostatic pressure unload joints and relax tight tissue.",
    image: "/pt360/wellness.jpg",
    href: "/service/aquatic-therapy",
  },
  {
    title: "Lymphedema",
    body:
      "Manual lymph drainage, skin-care education, remedial exercise and aquatic therapy for life-long management.",
    image: "/pt360/feature-sept.jpg",
    href: "/service/lymphedema",
  },
];

export default function OurExpertise() {
  return (
    <section id="services" className="pt-section">
      <div className="pt-shell">
        {/* Header */}
        <div className="max-w-2xl">
          <Reveal>
            <span className="pt-eyebrow">Our Expertise</span>
          </Reveal>
          <Reveal delay={100} className="mt-6">
            <h2 className="pt-display pt-h2">
              Specifically designed, active approaches for your recovery.
            </h2>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const delay = ((i + 1) * 100) as 100 | 200 | 300;
            return (
              <Reveal key={s.title} delay={delay} spring>
                <Link
                  href={s.href}
                  className="group block pt-card pt-card-hover relative overflow-hidden"
                >
                  <div className="relative aspect-[4/5] overflow-hidden pt-card-zoom">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                    {/* Dark overlay for title legibility */}
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 35%, rgba(13,59,134,0.88) 100%)",
                      }}
                    />
                    {/* Title overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <h3 className="text-white text-[20px] md:text-[22px] font-bold leading-tight">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-[14.5px] leading-[1.55] text-ink-soft">{s.body}</p>
                    {/* Arrow appears on hover */}
                    <span
                      className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold transition-all opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                      style={{ color: "var(--pt-accent)" }}
                    >
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={400} className="mt-12 flex justify-center">
          <a href="#all-services" className="pt-pill pt-pill--accent inline-flex items-center gap-2">
            All Services
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
