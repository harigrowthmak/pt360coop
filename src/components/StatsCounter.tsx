"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix?: string; label: string };

const stats: Stat[] = [
  { value: 17, suffix: "", label: "Specialty disciplines under one cooperative roof" },
  { value: 26, suffix: "", label: "Team members across Williston & Burlington" },
  { value: 32, suffix: "+", label: "Years of practice from our most senior clinician" },
  { value: 2, suffix: "", label: "Vermont locations — Williston & Burlington" },
];

function ease(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function CounterCell({ stat, run }: { stat: Stat; run: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / 1800);
      setV(Math.round(stat.value * ease(k)));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, stat.value]);

  return (
    <div>
      {/* Ruler ticks */}
      <div
        aria-hidden
        className="h-3 mb-6"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.45) 0, rgba(255,255,255,0.45) 1px, transparent 1px, transparent 24px)",
          backgroundPosition: "top",
          backgroundRepeat: "repeat-x",
          backgroundSize: "100% 12px",
        }}
      />
      <div className="flex items-baseline gap-1">
        <span
          className="font-bold text-white leading-[0.95]"
          style={{
            fontFamily: '"Open Sauce One", Inter, sans-serif',
            fontSize: "clamp(3.5rem, 6.5vw, 5.5rem)",
          }}
        >
          {v}
        </span>
        {stat.suffix && (
          <span
            className="font-bold leading-[0.95]"
            style={{
              fontFamily: '"Open Sauce One", Inter, sans-serif',
              color: "var(--pt-accent)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            {stat.suffix}
          </span>
        )}
      </div>
      <p className="mt-5 text-[14.5px] leading-[1.45] text-white/75 max-w-[26ch]">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || run) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setRun(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [run]);

  return (
    <section
      ref={ref}
      className="pt-section-tight pb-20 md:pb-28"
      style={{ background: "var(--pt-dark)" }}
    >
      <div className="pt-shell">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s) => (
            <CounterCell key={s.label} stat={s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}
