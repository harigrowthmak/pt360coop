"use client";

/**
 * Reveal — viewport-entry fade-up using Phisio's exact transition values:
 *   opacity: 0.001 → 1
 *   translateY: 30px → 0
 *   duration: 400ms
 *   easing: cubic-bezier(0.44, 0, 0.56, 1)
 *
 * Implementation: CSS variables + IntersectionObserver to add `.is-in` class.
 * No motion library required.
 */

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";

type Delay = 0 | 100 | 200 | 300 | 400 | 500 | 600;
type Direction = "up" | "down";

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as: As = "div",
  once = true,
  spring = false,
}: {
  children: ReactNode;
  delay?: Delay;
  direction?: Direction;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  once?: boolean;
  spring?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  // Default to "in" so SSR content is visible. The mounted-prep flow only hides
  // elements that are below the fold AFTER hydration, then fades them in on entry.
  const [phase, setPhase] = useState<"ssr" | "prepped" | "in">("ssr");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const alreadyInView = rect.top < vh && rect.bottom > 0;

    if (alreadyInView) {
      // Element is on screen at mount — leave visible, no animation needed.
      setPhase("in");
      return;
    }

    // Below the fold — prep it (hide), then watch for entry.
    setPhase("prepped");

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setPhase("in");
            if (once) {
              obs.disconnect();
              return;
            }
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    obs.observe(el);

    // Safety net — force in after 800ms (so nothing stays hidden forever).
    const safety = setTimeout(() => setPhase("in"), 800);

    return () => {
      obs.disconnect();
      clearTimeout(safety);
    };
  }, [once]);

  const baseClass = spring ? "pt-spring-up" : "pt-reveal";
  const dirClass = !spring && direction === "down" ? "pt-reveal--down" : "";
  const delayClass = delay === 0 ? "" : `pt-delay-${delay}`;
  const phaseClass =
    phase === "prepped" ? "pt-prep" : phase === "in" ? "pt-prep is-in" : "";

  const Tag = As as unknown as React.ElementType;
  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement>}
      className={`${baseClass} ${dirClass} ${delayClass} ${phaseClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

/**
 * StaggerGroup — applies progressive Reveal delays to each child.
 * Use when you have a list of items and want them to animate in sequence.
 */
export function StaggerGroup({
  children,
  baseDelay = 0,
  step = 100,
  className = "",
}: {
  children: ReactNode;
  baseDelay?: number;
  step?: number;
  className?: string;
}) {
  const items = Children.toArray(children);
  return (
    <div className={className}>
      {items.map((child, i) => {
        const delayVal = baseDelay + i * step;
        const delayProp: Delay = (
          [0, 100, 200, 300, 400, 500, 600] as const
        ).includes(delayVal as Delay)
          ? (delayVal as Delay)
          : 0;
        if (isValidElement(child)) {
          // If the child is already a Reveal, inject the delay
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const childEl = child as ReactElement<any>;
          if (childEl.type === Reveal) {
            return cloneElement(childEl, { delay: delayProp, key: i });
          }
          return (
            <Reveal key={i} delay={delayProp}>
              {child}
            </Reveal>
          );
        }
        return (
          <Reveal key={i} delay={delayProp}>
            {child}
          </Reveal>
        );
      })}
    </div>
  );
}

/**
 * StickyScale — drives a child element's scale based on scroll progress
 * through a wrapper. Used for the hero-scaling image section.
 *
 * Wrap a tall section in <StickyScale>. Inside, the first child becomes the
 * sticky pinned element that scales from `startScale` to `endScale` as the user
 * scrolls through the wrapper's height. An optional overlay opacity also ramps.
 */
export function StickyScale({
  children,
  className = "",
  style,
  startScale = 0.55,
  endScale = 1,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  startScale?: number;
  endScale?: number;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // p goes 0 → 1 as the wrapper passes through the viewport
        const total = rect.height + vh * 0.5;
        const passed = vh - rect.top;
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

  const scale = startScale + (endScale - startScale) * progress;
  const overlayOpacity = Math.min(0.7, progress * 0.85);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={
        {
          ...style,
          "--sticky-scale": scale,
          "--sticky-overlay": overlayOpacity,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
