import Image from "next/image"
import { ShieldCheck, TrendingUp, BadgeCheck, Zap } from "lucide-react"

function getUpdatedLabel() {
  const now = new Date()
  return now.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

const TRUST_PILLARS = [
  { icon: ShieldCheck, label: "UKGC Licensed" },
  { icon: BadgeCheck, label: "Zero Paid Placements" },
  { icon: TrendingUp, label: "Expert Ranked" },
  { icon: Zap, label: "Updated Monthly" },
] as const

export function Hero() {
  const updatedDate = getUpdatedLabel()
  return (
    <section className="relative w-full h-[250px] md:h-[450px] flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Football stadium under floodlights"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsl(var(--navy-deep) / 0.72) 0%, hsl(var(--navy-deep) / 0.82) 100%)" }} />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 py-4">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 mb-3 md:mb-4 text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.16em]"
          style={{
            background: "hsl(var(--mint) / 0.15)",
            border: "1px solid hsl(var(--mint) / 0.4)",
            color: "hsl(161 50% 68%)",
            borderRadius: "var(--radius)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "hsl(161 60% 55%)" }} aria-hidden="true" />
          Independent &middot; UKGC Licensed Only
        </div>

        {/* Headline */}
        <h1 className="font-heading font-extrabold text-white text-balance leading-tight mb-2 md:mb-3" style={{ fontSize: "clamp(1.25rem, 4vw, 2.8rem)" }}>
          {"Britain's Premier VIP Betting Rankings"}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-white/60 text-balance mb-4 md:mb-6 max-w-lg" style={{ fontSize: "clamp(0.7rem, 1.3vw, 0.875rem)" }}>
          Real accounts. Real money. Only UKGC-licenced bookmakers. Ranked on odds, withdrawals, bonuses and player protection.
        </p>

        {/* Trust pillars */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
          {TRUST_PILLARS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <Icon className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0" style={{ color: "hsl(161 55% 62%)" }} aria-hidden="true" />
              <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-white/50">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Date strip */}
      <div
        className="relative z-10 w-full py-2 px-4 text-center"
        style={{ borderTop: "1px solid hsl(var(--sky-mid) / 0.15)", background: "hsl(var(--navy-deep) / 0.88)" }}
      >
        <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-white/40">
          Updated:&nbsp;
          <time dateTime={new Date().toISOString().slice(0, 10)} className="text-white/65">
            {updatedDate}
          </time>
        </span>
      </div>
    </section>
  )
}
