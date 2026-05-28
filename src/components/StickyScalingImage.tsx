"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "./Icons";

/**
 * Sticky scaling image section.
 * The image starts smaller (e.g. 60% width centered) and scales toward full bleed
 * as the user scrolls. A dark overlay grows in opacity, and headline + mission
 * carousel-card fade in over the top.
 *
 * Mirrors Phisio's "Restore Your Strength" sticky scroll block.
 */

const missions = [
  {
    title: "Our mission",
    body: "Provide 360° of care — prevention, rehabilitation, and life-long wellness — under one cooperative roof.",
    thumb: "/pt360/wellness.jpg",
  },
  {
    title: "Our promise",
    body: "Vermont-owned, employee-operated. We share the work, the risk, and the responsibility of every patient outcome.",
    thumb: "/pt360/team-2023.jpg",
  },
  {
    title: "Our practice",
    body: "Seventeen specialty disciplines, twenty-six team members, two Vermont locations — built around your recovery.",
    thumb: "/pt360/williston-gym.jpg",
  },
];

export default function StickyScalingImage() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = r.height - vh;
        const passed = -r.top;
        const p = Math.max(0, Math.min(1, passed / total));
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // 0 → 0.4 = image grows.   0.4 → 0.7 = overlay + text fade in.  0.7 → 1 = hold.
  const scale = 0.6 + Math.min(progress / 0.5, 1) * 0.4; // 0.6 → 1
  const overlayOpacity = Math.max(0, Math.min(1, (progress - 0.35) / 0.25)) * 0.55;
  const textOpacity = Math.max(0, Math.min(1, (progress - 0.5) / 0.25));
  const cardTranslate = (1 - Math.max(0, Math.min(1, (progress - 0.55) / 0.2))) * 60;

  const current = missions[active];

  return (
    <section
      ref={wrapRef}
      className="relative"
      style={{ height: "260vh" }}
      aria-label="Restore your strength"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Image */}
        <div
          className="absolute inset-0 origin-center transition-none"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <Image
            src="/pt360/williston-gym.jpg"
            alt="The PT360 Williston gym"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ borderRadius: scale < 0.95 ? 10 : 0 }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: `rgba(13, 59, 134, ${overlayOpacity})` }}
          />
        </div>

        {/* Overlay text */}
        <div
          className="relative h-full pt-shell flex flex-col justify-center items-center text-center"
          style={{ opacity: textOpacity }}
        >
          <span className="pt-eyebrow pt-eyebrow--dark">Better Together</span>
          <h2
            className="pt-display mt-6 max-w-3xl text-white"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.1 }}
          >
            Combining the strength, skills, and services of several therapy professionals under one roof.
          </h2>
        </div>

        {/* Mission carousel card — anchored to bottom */}
        <div
          className="absolute inset-x-0 bottom-6 sm:bottom-10 md:bottom-16 px-4 sm:px-5 md:px-12"
          style={{
            transform: `translateY(${cardTranslate}px)`,
            opacity: textOpacity,
          }}
        >
          <div className="pt-shell">
            <div className="pt-card bg-paper flex items-center gap-3 sm:gap-4 md:gap-6 p-3 md:p-4 max-w-4xl mx-auto">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md overflow-hidden shrink-0">
                <Image
                  src={current.thumb}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] sm:text-[18px] md:text-[22px] font-bold text-ink leading-tight">{current.title}</h3>
                <p className="mt-1 text-[12.5px] sm:text-[14px] md:text-[15px] text-ink-soft leading-snug sm:leading-relaxed line-clamp-2 md:line-clamp-none">
                  {current.body}
                </p>
              </div>
              {/* Arrows: horizontal stack on mobile, vertical on desktop */}
              <div className="flex flex-row md:flex-col gap-1.5 md:gap-2 shrink-0">
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={() => setActive((a) => (a - 1 + missions.length) % missions.length)}
                  className="text-ink/50 hover:text-ink transition-colors"
                >
                  <ArrowLeftCircle size={28} className="md:hidden" />
                  <ArrowLeftCircle size={36} className="hidden md:block" />
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  onClick={() => setActive((a) => (a + 1) % missions.length)}
                  className="text-ink/50 hover:text-ink transition-colors"
                >
                  <ArrowRightCircle size={28} className="md:hidden" />
                  <ArrowRightCircle size={36} className="hidden md:block" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
