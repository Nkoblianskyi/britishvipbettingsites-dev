import Link from "next/link"
import { ShieldCheck } from "lucide-react"

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "hsl(var(--navy-deep))",
        borderBottom: "1px solid hsl(var(--navy) / 0.3)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Sky blue accent top bar */}
      <div
        className="w-full h-[3px]"
        style={{ background: "linear-gradient(90deg, hsl(var(--navy)), hsl(var(--sky-mid)), hsl(var(--mint)), hsl(var(--sky-mid)), hsl(var(--navy)))" }}
        aria-hidden="true"
      />

      <div className="px-4 py-3">
        <div className="flex items-center justify-between max-w-[1100px] mx-auto">

          {/* Logo + Wordmark */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="British VIP Betting Sites — Home">
            <div
              className="relative flex-shrink-0 w-9 h-9 flex items-center justify-center"
              style={{ background: "hsl(var(--sky-mid))" }}
              aria-hidden="true"
            >
              <svg width="22" height="22" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="18,4 32,12 32,24 18,32 4,24 4,12" stroke="hsl(222 50% 18%)" strokeWidth="2" fill="hsl(205 85% 90% / 0.3)" />
                <circle cx="18" cy="18" r="5" fill="hsl(222 50% 18%)" />
                <path d="M13 18 L23 18 M18 13 L18 23" stroke="hsl(205 85% 90%)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex items-baseline gap-1.5 whitespace-nowrap">
              <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white uppercase">
                British
              </span>
              <span
                className="font-heading font-extrabold text-base sm:text-lg tracking-tight uppercase"
                style={{ color: "hsl(var(--sky-mid))" }}
              >
                VIP
              </span>
              <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white uppercase">
                Betting Sites
              </span>
            </div>
          </Link>

          {/* Right badges */}
          <div className="flex items-center gap-2.5">
            <div
              className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono px-3 py-1.5 uppercase tracking-widest"
              style={{
                background: "hsl(var(--mint) / 0.15)",
                border: "1px solid hsl(var(--mint) / 0.35)",
                color: "hsl(var(--mint-light))",
                borderRadius: "var(--radius)",
              }}
            >
              <ShieldCheck className="w-3 h-3" aria-hidden="true" />
              UKGC Licensed Only
            </div>
            <span
              className="text-[10px] font-mono font-bold px-2.5 py-1.5 uppercase tracking-widest"
              style={{
                border: "1px solid hsl(var(--sky-mid) / 0.4)",
                color: "hsl(var(--sky-mid))",
                background: "hsl(var(--sky-mid) / 0.1)",
                borderRadius: "var(--radius)",
              }}
            >
              18+
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}
