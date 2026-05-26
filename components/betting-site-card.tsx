"use client"

import { Star, CheckCircle2, ArrowRight } from "lucide-react"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const getPrimaryBadge = () => {
    if (site.isTopRating) return { text: "Top Pick", type: "navy" }
    if (site.isTopLine) return { text: "Best Value", type: "mint" }
    if (site.isPopular) return { text: "Popular", type: "sky" }
    if (site.isTrending) return { text: "Trending", type: "sky" }
    return null
  }

  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className="w-3 h-3"
        style={{
          fill: i < Math.floor(count) ? "hsl(var(--coral))" : "hsl(var(--border))",
          color: i < Math.floor(count) ? "hsl(var(--coral))" : "hsl(var(--border))",
        }}
        aria-hidden="true"
      />
    ))

  const primaryBadge = getPrimaryBadge()
  const isFirst = rank === 1

  return (
    <div
      className="relative overflow-hidden card-lift"
      style={{
        background: "hsl(var(--card))",
        border: isFirst
          ? "1.5px solid hsl(var(--navy) / 0.5)"
          : "1px solid hsl(var(--border))",
        borderRadius: "var(--radius)",
        boxShadow: isFirst
          ? "0 4px 24px hsl(var(--navy) / 0.10)"
          : "0 1px 4px hsl(var(--navy) / 0.04)",
      }}
    >
      {/* Navy left accent for #1 */}
      {isFirst && (
        <div
          className="absolute inset-y-0 left-0 w-[4px]"
          style={{ background: "hsl(var(--navy))", borderRadius: "var(--radius) 0 0 var(--radius)" }}
          aria-hidden="true"
        />
      )}

      {/* Top badge strip */}
      {primaryBadge && (
        <div
          className="px-4 py-1.5 flex items-center gap-2 border-b"
          style={{
            background:
              primaryBadge.type === "navy"
                ? "hsl(var(--navy) / 0.06)"
                : primaryBadge.type === "mint"
                ? "hsl(var(--mint) / 0.06)"
                : "hsl(var(--sky) / 0.5)",
            borderColor: "hsl(var(--border))",
          }}
        >
          <CheckCircle2
            className="w-3 h-3 flex-shrink-0"
            style={{
              color:
                primaryBadge.type === "navy"
                  ? "hsl(var(--navy))"
                  : primaryBadge.type === "mint"
                  ? "hsl(var(--mint))"
                  : "hsl(var(--navy-light))",
            }}
            aria-hidden="true"
          />
          <span
            className="font-mono text-[9px] uppercase tracking-[0.2em] font-bold"
            style={{
              color:
                primaryBadge.type === "navy"
                  ? "hsl(var(--navy))"
                  : primaryBadge.type === "mint"
                  ? "hsl(var(--mint))"
                  : "hsl(var(--navy-light))",
            }}
          >
            {primaryBadge.text}
          </span>
        </div>
      )}

      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[52px_190px_1fr_120px_160px] md:items-center md:gap-0 px-4 py-5">
        {/* Rank */}
        <div
          className="w-9 h-9 flex items-center justify-center font-heading font-extrabold text-base flex-shrink-0"
          style={{
            background: isFirst ? "hsl(var(--navy))" : "hsl(var(--secondary))",
            color: isFirst ? "hsl(0 0% 100%)" : "hsl(var(--text-secondary))",
            borderRadius: "var(--radius)",
            border: isFirst ? "none" : "1px solid hsl(var(--border))",
          }}
          aria-label={`Rank ${rank}`}
        >
          {rank}
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 h-20 flex items-center justify-center px-4 overflow-hidden">
          <div
            className="flex items-center justify-center overflow-hidden"
            style={{
              background: "hsl(0 0% 98%)",
              padding: "8px 18px",
              width: 160,
              height: 72,
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
          >
            <img
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              className="max-h-14 max-w-[140px] w-full object-contain"
            />
          </div>
        </div>

        {/* Bonus */}
        <div className="flex flex-col items-center justify-center text-center px-4">
          <p className="font-heading font-bold text-xl leading-tight text-foreground">
            {site.bonus}
          </p>
        </div>

        {/* Rating */}
        <div className="text-center flex-shrink-0">
          <div
            className="font-heading font-bold text-3xl leading-none"
            style={{ color: "hsl(var(--navy))" }}
          >
            {site.rating.toFixed(1)}
          </div>
          <div className="font-mono text-[9px] mt-0.5 text-muted-foreground">/ 10</div>
          <div className="flex items-center justify-center gap-0.5 mt-1.5" aria-label={`${site.stars} out of 5 stars`}>
            {renderStars(site.stars)}
          </div>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0 text-center pl-4">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            aria-label={`Claim offer at ${site.name}`}
          >
            <button
              className="w-full font-mono uppercase tracking-widest text-[10px] font-bold px-4 py-2.5 flex items-center justify-center gap-1.5 transition-all"
              style={{
                background: "hsl(var(--navy))",
                color: "hsl(0 0% 100%)",
                borderRadius: "var(--radius)",
              }}
            >
              Claim Offer <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </button>
          </a>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden px-4 py-4">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-8 h-8 flex items-center justify-center font-heading font-extrabold text-sm flex-shrink-0"
            style={{
              background: isFirst ? "hsl(var(--navy))" : "hsl(var(--secondary))",
              color: isFirst ? "hsl(0 0% 100%)" : "hsl(var(--text-secondary))",
              borderRadius: "var(--radius)",
              border: isFirst ? "none" : "1px solid hsl(var(--border))",
            }}
          >
            {rank}
          </div>
          <div
            className="flex-shrink-0 flex items-center justify-center overflow-hidden"
            style={{
              background: "hsl(0 0% 98%)",
              padding: "6px 14px",
              width: 120,
              height: 52,
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
          >
            <img
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              className="max-h-10 max-w-[100px] w-full object-contain"
            />
          </div>
          <div className="flex-1 text-right">
            <div
              className="font-heading font-bold text-2xl leading-none"
              style={{ color: "hsl(var(--navy))" }}
            >
              {site.rating.toFixed(1)}
            </div>
            <div className="flex justify-end gap-0.5 mt-0.5" aria-label={`${site.stars} out of 5 stars`}>
              {renderStars(site.stars)}
            </div>
          </div>
        </div>

        <div
          className="text-center py-3 mb-3"
          style={{
            background: "hsl(var(--sky))",
            border: "1px solid hsl(var(--sky-mid))",
            borderRadius: "var(--radius)",
          }}
        >
          <p className="font-heading font-bold text-base leading-tight text-foreground">
            {site.bonus}
          </p>
        </div>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          aria-label={`Claim offer at ${site.name}`}
          className="block"
        >
          <button
            className="w-full font-mono uppercase tracking-widest text-[10px] font-bold h-10 flex items-center justify-center gap-1.5 transition-all"
            style={{
              background: "hsl(var(--navy))",
              color: "hsl(0 0% 100%)",
              borderRadius: "var(--radius)",
            }}
          >
            Claim Offer <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </button>
        </a>
      </div>

      {/* Disclaimer */}
      <div
        className="px-4 pb-2 pt-2 border-t"
        style={{ borderColor: "hsl(var(--border))" }}
      >
        <p className="text-[9px] font-mono text-muted-foreground">
          <span className="font-semibold" style={{ color: "hsl(var(--destructive))" }}>18+</span> | {site.terms}
        </p>
      </div>
    </div>
  )
}
