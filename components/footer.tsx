import Link from "next/link"
import { ShieldCheck } from "lucide-react"

const REGULATORY_ORGS = [

  {
    src: "/gamcare.png",
    alt: "GamCare",
    href: "https://www.gamcare.org.uk/",
    width: 110,
    height: 36,
  },
    {
    src: "/gamble-aware.png",
    alt: "BeGambleAware",
    href: "https://www.begambleaware.org/",
    width: 130,
    height: 36,
  },
    {
    src: "/gamstop.svg",
    alt: "GamStop",
    href: "https://www.gamstop.co.uk/",
    width: 100,
    height: 36,
  },
  {
    src: "/gordon.png",
    alt: "Gambling Therapy",
    href: "https://www.gamblingtherapy.org/",
    width: 100,
    height: 36,
  },
  {
    src: "/Gambling_Commission_logo.png",
    alt: "UK Gambling Commission",
    href: "https://www.gamblingcommission.gov.uk/",
    width: 120,
    height: 36,
  },

]

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/responsible-gambling", label: "Responsible Gambling" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
]

export function Footer() {
  return (
    <footer
      className="w-full"
      style={{ background: "hsl(var(--navy-deep))" }}
    >
      {/* Top accent line */}
      <div
        className="w-full h-[2px]"
        style={{ background: "linear-gradient(90deg, hsl(var(--navy)), hsl(var(--sky-mid)), hsl(var(--mint)), hsl(var(--sky-mid)), hsl(var(--navy)))" }}
        aria-hidden="true"
      />

      <div className="max-w-[1100px] mx-auto px-4 pt-12 pb-6">

        {/* Brand — centered */}
        <div className="flex flex-col items-center text-center mb-8">
          <Link href="/" className="flex items-center gap-3 mb-4 group" aria-label="British VIP Betting Sites — Home">
            <div
              className="w-9 h-9 flex items-center justify-center flex-shrink-0"
              style={{ background: "hsl(var(--sky-mid))" }}
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="18,4 32,12 32,24 18,32 4,24 4,12" stroke="hsl(222 50% 18%)" strokeWidth="2" fill="hsl(205 85% 90% / 0.3)" />
                <circle cx="18" cy="18" r="5" fill="hsl(222 50% 18%)" />
                <path d="M13 18 L23 18 M18 13 L18 23" stroke="hsl(205 85% 90%)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <div className="flex items-baseline gap-1">
                <span className="font-heading font-extrabold text-base tracking-tight text-white uppercase">British</span>
                <span className="font-heading font-extrabold text-base tracking-tight uppercase" style={{ color: "hsl(var(--sky-mid))" }}>VIP</span>
              </div>
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "hsl(var(--sky-mid) / 0.4)" }}>
                Betting Sites
              </span>
            </div>
          </Link>

          <p className="font-sans text-xs leading-relaxed max-w-md text-white/40 mb-3">
            Independent comparison platform. We do not operate a bookmaker, accept bets, or publish paid placements.
            All rankings are determined by our editorial team using a transparent scoring methodology.
          </p>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "hsl(var(--sky-mid) / 0.45)" }} aria-hidden="true" />
            <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "hsl(var(--sky-mid) / 0.4)" }}>
              britishvipbettingsites.com
            </span>
          </div>
        </div>

        {/* Navigation — single row, centered */}
        <nav
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 pb-8 border-b"
          style={{ borderColor: "hsl(var(--sky-mid) / 0.1)" }}
          aria-label="Footer navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[10px] uppercase tracking-[0.16em] transition-opacity hover:opacity-80"
              style={{ color: "hsl(var(--sky-mid) / 0.55)" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Regulatory logos — centered */}
        <div
          className="py-8 border-b"
          style={{ borderColor: "hsl(var(--sky-mid) / 0.1)" }}
        >
          <p
            className="font-mono text-[9px] uppercase tracking-[0.22em] mb-5 text-center"
            style={{ color: "hsl(var(--sky-mid) / 0.35)" }}
          >
            Regulatory Bodies &amp; Safer Gambling
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {REGULATORY_ORGS.map(({ href, src, alt, width, height }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
                className="transition-opacity hover:opacity-80 overflow-hidden"
                style={{
                  padding: "6px 14px",
                  borderRadius: "var(--radius)",
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="h-8 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-6 pb-4">
          <p
            className="font-sans text-xs leading-relaxed text-center"
            style={{ color: "hsl(var(--sky-mid) / 0.3)" }}
          >
            britishvipbettingsites.com is an independent comparison website. We earn affiliate commission when users
            register with operators through links on this site — this does not influence editorial rankings in any way.
            All listed operators hold a valid UK Gambling Commission (UKGC) licence. Gambling involves financial risk.
            Please bet responsibly.{" "}
            <strong style={{ color: "hsl(var(--sky-mid) / 0.5)" }}>18+ only.</strong>{" "}
            If gambling is causing you harm, call GamCare free on{" "}
            <span style={{ color: "hsl(var(--sky-mid) / 0.5)" }}>0808 8020 133</span>.
          </p>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-4 border-t"
          style={{ borderColor: "hsl(var(--sky-mid) / 0.08)" }}
        >
          <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "hsl(var(--sky-mid) / 0.25)" }}>
            &copy; 2026 britishvipbettingsites.com
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "hsl(var(--sky-mid) / 0.25)" }}>
            British VIP Betting Sites &mdash; Independent Comparison
          </span>
        </div>
      </div>
    </footer>
  )
}
