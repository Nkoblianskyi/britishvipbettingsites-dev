import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit, DM_Mono } from "next/font/google"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

const _outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
})

const _dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
})

export const metadata: Metadata = {
  title: "British VIP Betting Sites  Top United Kingdom Bookmakers 2026",
  description:
    "British VIP Betting Sites ranks the UK's finest UKGC-licensed bookmakers. Independent expert reviews covering odds quality, welcome bonuses, payout speed, and responsible gambling tools. Updated monthly at britishvipbettingsites.com.",
  keywords:
    "British VIP betting sites, best betting sites UK, UK bookmakers 2026, UKGC licensed bookmakers, sports betting UK, free bets, betting offers, top bookmakers",
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  authors: [{ name: "British VIP Betting Sites Editorial Team" }],
  openGraph: {
    title: "British VIP Betting Sites Top United Kingdom Bookmakers 2026",
    description:
      "Independent expert rankings of the best UK betting sites. UKGC-licensed only. Reviewed for odds, bonuses, safety, and payouts. Updated monthly.",
    url: "https://britishvipbettingsites.com",
    siteName: "British VIP Betting Sites",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "British VIP Betting Sites Top United Kingdom Bookmakers 2026",
    description:
      "The UK's most trusted comparison of UKGC-licensed bookmakers. Expert-reviewed, unbiased, updated monthly.",
  },
  alternates: {
    canonical: "https://britishvipbettingsites.com",
  },
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#1a3a8f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${_inter.variable} ${_outfit.variable} ${_dmMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
