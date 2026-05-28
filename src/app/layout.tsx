import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT360 Coop · Physical Therapy Services in Vermont",
  description:
    "PT360 is an employee-owned Vermont physical therapy cooperative that recognizes there are many paths to wellness and provides 360° of care. Williston · Burlington.",
  icons: {
    icon: [
      { url: "/pt360/favicons/favicon.ico", sizes: "any" },
      { url: "/pt360/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/pt360/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/pt360/favicons/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/pt360/favicons/safari-pinned-tab.svg" }],
  },
  manifest: "/pt360/favicons/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0d3b86",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased overflow-x-clip`}>
      <head>
        {/* Open Sauce One — display font, matched to Phisio template */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sauce+One:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-ink overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
