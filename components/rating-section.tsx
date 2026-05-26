import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"
import { ListChecks } from "lucide-react"

export function RatingSection() {
  return (
    <section
      className="w-full py-12 px-4 sport-pattern"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Section heading */}
        <div className="flex items-start gap-4 mb-8">
          <div
            className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{
              background: "hsl(var(--navy) / 0.08)",
              border: "1px solid hsl(var(--navy) / 0.18)",
              borderRadius: "var(--radius)",
            }}
            aria-hidden="true"
          >
            <ListChecks className="w-5 h-5" style={{ color: "hsl(var(--navy))" }} />
          </div>
          <div>
            <div
              className="font-mono text-[9px] uppercase tracking-[0.2em] mb-1"
              style={{ color: "hsl(var(--navy) / 0.55)" }}
            >
              VIP Standard Rankings
            </div>
            <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground">
              Best Betting Sites in Britain
            </h2>
            <p className="text-sm font-sans mt-1 text-muted-foreground">
              Independently ranked &middot; UKGC licensed only &middot; Expert-reviewed &amp; updated monthly
            </p>
          </div>
        </div>

        {/* Column headers — desktop only */}
        <div
          className="hidden md:grid md:grid-cols-[52px_190px_1fr_120px_160px] items-center gap-0 px-4 pb-2 mb-2 border-b"
          style={{ borderColor: "hsl(var(--border))" }}
          aria-hidden="true"
        >
          <div />
          <div
            className="font-mono text-[9px] uppercase tracking-widest text-center px-4"
            style={{ color: "hsl(var(--navy) / 0.45)" }}
          >
            Bookmaker
          </div>
          <div
            className="font-mono text-[9px] uppercase tracking-widest text-center px-4"
            style={{ color: "hsl(var(--navy) / 0.45)" }}
          >
            Welcome Offer
          </div>
          <div
            className="font-mono text-[9px] uppercase tracking-widest text-center"
            style={{ color: "hsl(var(--navy) / 0.45)" }}
          >
            Our Score
          </div>
          <div />
        </div>

        {/* Cards list */}
        <div className="space-y-2 mt-2">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>

        {/* Disclaimer note */}
        <div
          className="mt-6 pt-4 border-t navy-left-accent pl-3"
          style={{ borderColor: "hsl(var(--border))" }}
        >
          <p className="font-mono text-[9px] uppercase tracking-widest leading-relaxed text-muted-foreground">
            Rankings based on independent editorial assessment. Affiliate links may be used. Gambling involves financial risk. 18+ only. BeGambleAware.org
          </p>
        </div>
      </div>
    </section>
  )
}
