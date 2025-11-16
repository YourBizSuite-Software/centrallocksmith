import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ---------- FULL SEO + OG + ICONS ----------
export const metadata: Metadata = {
  title:
    "Central Locksmith | 24/7 Mobile Locksmith in Houston, TX – Car, Home & Business",
  description:
    "Central Locksmith provides 24/7 locksmith services in Houston, TX. Fast arrival for car lockouts, house lockouts, lock change, rekeying, car key programming & more across all Houston suburbs.",
  keywords: [
    "locksmith Houston",
    "Houston locksmith",
    "24 hour locksmith Houston",
    "car lockout Houston",
    "locksmith near me",
    "mobile locksmith Houston",
    "Katy locksmith",
    "Sugar Land locksmith",
    "Cypress locksmith",
    "Spring TX locksmith",
    "The Woodlands locksmith",
    "car key replacement Houston",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title:
      "Central Locksmith | 24/7 Locksmith in Houston TX – Car, Home & Business",
    description:
      "Fast, professional mobile locksmith service in Houston, TX. Car lockouts, home lockouts, business lockouts, lock change, rekeying, key programming & more.",
    type: "website",
    url: "https://thecentrallocksmith.com",
    images: [
      {
        url: "/locksmith-og.jpg",
        width: 1200,
        height: 630,
        alt: "Central Locksmith Houston TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Central Locksmith | 24/7 Locksmith in Houston TX – Car, Home & Business",
    description:
      "24/7 mobile locksmith in Houston with fast response. Car lockouts, home lockouts, lock change, rekeying & car key programming.",
    images: ["/locksmith-og.jpg"],
  },
};

// ---------- ROOT LAYOUT ----------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Apple Home Screen Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* iOS Theme Color */}
        <meta name="theme-color" content="#0d152b" />

        {/* Prevent iOS phone number auto-formatting */}
        <meta name="format-detection" content="telephone=no" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}