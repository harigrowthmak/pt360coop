import Image from "next/image";
import { Reveal } from "./Reveal";
import { Star, GoogleG } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="pt-shell pt-section-hero">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT: copy */}
          <div className="lg:pt-6">
            <Reveal delay={0}>
              <span className="pt-eyebrow">Better Together</span>
            </Reveal>

            <Reveal delay={100} className="mt-6">
              <h1 className="pt-display pt-h1">
                360&deg; of{" "}
                <span style={{ color: "var(--pt-accent)" }} className="italic">
                  care
                </span>
                .<br className="hidden md:inline" />{" "}
                Prevention, rehab,<br className="hidden md:inline" />{" "}
                life-long wellness.
              </h1>
            </Reveal>

            <Reveal as="p" delay={200} className="pt-body mt-7 max-w-md">
              PT360 is the only physical therapy cooperative in the nation
              &mdash; an employee-owned Vermont practice combining the strength,
              skills and services of several therapy professionals under one
              roof. Williston &amp; Burlington.
            </Reveal>

            <Reveal delay={300} className="mt-9">
              <a href="#appointment" className="pt-pill pt-pill--accent">
                Make an Appointment
              </a>
            </Reveal>
          </div>

          {/* RIGHT: asymmetric grid — mobile/tablet: photo on top + 2 cards below side-by-side. Desktop: 2-col with big photo row-spanning. */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:h-[640px]">
            {/* Big photo — full width on mobile, row-span-2 on desktop */}
            <Reveal delay={200} className="col-span-2 lg:col-span-1 lg:row-span-2 relative pt-card overflow-hidden aspect-[16/10] lg:aspect-auto">
              <Image
                src="/pt360/hero-manual-therapy.jpg"
                alt="A PT360 physical therapist treats a patient"
                fill
                priority
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover"
              />
            </Reveal>

            {/* Stat card */}
            <Reveal delay={300}>
              <div
                className="pt-card p-5 sm:p-6 relative overflow-hidden h-full min-h-[160px] sm:min-h-[200px] lg:min-h-0"
                style={{ background: "var(--pt-accent)" }}
              >
                <div
                  className="font-bold leading-[0.95] text-white"
                  style={{
                    fontFamily: '"Open Sauce One", Inter, sans-serif',
                    fontSize: "clamp(2.5rem, 4vw, 3.25rem)",
                  }}
                >
                  17+
                </div>
                <div className="mt-2 text-white/95 text-[14px] font-medium leading-snug">
                  Specialty<br />disciplines
                </div>
                <svg
                  aria-hidden
                  viewBox="0 0 200 200"
                  className="absolute -right-6 -bottom-6 w-40 opacity-25"
                >
                  <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="0.8" fill="none" />
                  <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.8" fill="none" />
                  <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="0.8" fill="none" />
                </svg>
              </div>
            </Reveal>

            {/* Ratings card — bottom right (dark) — clickable to live Google reviews */}
            <Reveal delay={400}>
              <a
                href="https://www.google.com/search?q=PT360+Coop+Williston+Vermont+reviews"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read PT360 Coop's 5-star Google reviews"
                className="pt-card p-5 h-full min-h-[160px] sm:min-h-[200px] lg:min-h-0 flex flex-col justify-between transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--pt-ink)" }}
              >
                <div>
                  <div className="flex items-baseline gap-2 text-white">
                    <span
                      className="font-bold leading-none"
                      style={{
                        fontFamily: '"Open Sauce One", Inter, sans-serif',
                        fontSize: "clamp(2rem, 3vw, 2.5rem)",
                      }}
                    >
                      5.0
                    </span>
                    <span className="inline-flex gap-0.5" style={{ color: "var(--pt-accent)" }}>
                      <Star size={13} /><Star size={13} /><Star size={13} /><Star size={13} /><Star size={13} />
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-1.5 text-white/80 text-[12.5px]">
                    <GoogleG size={13} />
                    <span>Live Google Reviews</span>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {["/pt360/team/amy.jpg","/pt360/team/andrew.jpg","/pt360/team/nina.jpg","/pt360/team/kristi.jpg"].map((src, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 overflow-hidden relative"
                      style={{ borderColor: "var(--pt-ink)" }}
                    >
                      <Image src={src} alt="" fill sizes="32px" className="object-cover" />
                    </div>
                  ))}
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
