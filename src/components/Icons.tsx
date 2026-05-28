import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const ArrowRight = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export const Phone = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const ChevronDown = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const Close = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);

export const Play = ({ size = 16, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const Star = ({ size = 14, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2l2.9 6.9L22 10l-5.5 4.6L18.2 22 12 18.3 5.8 22l1.7-7.4L2 10l7.1-1.1L12 2z" />
  </svg>
);

export const Quote = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M7 4C5.3 4 4 5.3 4 7v4c0 1.7 1.3 3 3 3 .6 0 1-.4 1-1V7c0-1.7-.4-3-1-3zm10 0c-1.7 0-3 1.3-3 3v4c0 1.7 1.3 3 3 3 .6 0 1-.4 1-1V7c0-1.7-.4-3-1-3z" />
  </svg>
);

// Brand CheckCircle (sky cyan)
export const CheckCircle = ({ size = 26, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" {...p}>
    <circle cx="14" cy="14" r="13" fill="none" stroke="#27a9e1" strokeWidth="1.6" />
    <path
      d="M8.5 14.5l3.7 3.4 7.3-7.6"
      stroke="#27a9e1"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const ArrowLeftCircle = ({ size = 44, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none" {...p}>
    <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M25 14l-8 8 8 8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const ArrowRightCircle = ({ size = 44, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none" {...p}>
    <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M19 14l8 8-8 8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Compact PT360° text mark
export const PT360Mark = ({ size = 28 }: { size?: number }) => (
  <span
    className="inline-flex items-baseline gap-[2px] font-bold tracking-tight leading-none"
    style={{ fontFamily: '"Open Sauce One", Inter, sans-serif', fontSize: size }}
  >
    <span style={{ color: "#15326b" }}>PT</span>
    <span style={{ color: "#27a9e1" }}>360</span>
    <span
      aria-hidden
      style={{
        color: "#27a9e1",
        fontSize: size * 0.42,
        marginLeft: 1,
        animation: "spin 18s linear infinite",
        display: "inline-block",
      }}
    >
      °
    </span>
  </span>
);

/* Service line-icons — minimalist, single stroke */
export const IconAquatic = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M2 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
    <path d="M2 18c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
    <circle cx="14" cy="7" r="2" />
  </svg>
);
export const IconAthletic = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <circle cx="12" cy="5" r="2" />
    <path d="M8 22l2-7 2 2 3-2 2 6" />
    <path d="M7 11l3 1 2-3" />
  </svg>
);
export const IconCranio = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M12 3a7 7 0 0 0-7 7v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6a7 7 0 0 0-7-7z" />
    <path d="M9 13h.01M15 13h.01" />
  </svg>
);
export const IconNeedling = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M3 21l8-8m4-4l6-6m-7 7l3 3M9 15l-2 2" />
  </svg>
);
export const IconLymph = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M12 4l4 6-4 10-4-10z" />
    <path d="M12 4v16M8 10h8" />
  </svg>
);
export const IconSports = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
  </svg>
);
export const IconVestibular = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M12 4a8 8 0 0 0-8 8M12 4a8 8 0 0 1 8 8" />
    <circle cx="12" cy="14" r="2" />
    <path d="M12 16v4M8 20h8" />
  </svg>
);
export const IconTMJ = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M5 9c0-3 3-5 7-5s7 2 7 5v6c0 3-3 5-7 5s-7-2-7-5z" />
    <path d="M9 10v2M15 10v2" />
  </svg>
);

// Social
export const Facebook = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.4 21v-7.5h2.5l.4-3h-2.9V8.7c0-.9.3-1.5 1.5-1.5h1.5V4.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.4-3.7 3.8v2.2H8v3h2.5V21h2.9Z" />
  </svg>
);
export const Instagram = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
export const Linkedin = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

// Menu / close (mobile nav)
export const Menu = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

// Google "G" multicolor (for review badges)
export const GoogleG = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" {...p}>
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.5-5.3l-6.2-5.2C29.2 35 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.7l6.2 5.2c-.4.4 6.8-5 6.8-14.9 0-1.3-.1-2.4-.4-3.5z"/>
  </svg>
);
