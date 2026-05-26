"use client"

import { useState } from "react"
import {
  ShieldCheck,
  Trophy,
  Star,
  Zap,
  CreditCard,
  Headphones,
  Award,
  AlertTriangle,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Phone,
  ExternalLink,
  BarChart2,
  Lock,
  Clock,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Target,
  Users,
} from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

/* ─────────────────────────────────────────────────────────────────
   SECTION 1: HOW IT WORKS — Horizontal step cards on light bg
   ───────────────────────────────────────────────────────────────── */
const HOW_IT_WORKS_STEPS = [
  {
    icon: Lock,
    step: "01",
    title: "Licence Check",
    weight: "30%",
    desc: "Every candidate is cross-checked against the UKGC public register in real time. A lapsed or restricted licence means automatic disqualification — no exceptions.",
  },
  {
    icon: Trophy,
    step: "02",
    title: "Bonus Audit",
    weight: "25%",
    desc: "We dissect every welcome offer term by term — wagering multiplier, minimum odds, time caps, and max withdrawal. We report true cash value, not the headline number.",
  },
  {
    icon: Star,
    step: "03",
    title: "Odds Benchmarking",
    weight: "20%",
    desc: "Our analysts record Premier League, horse racing, and major tournament odds every week, computing overround percentages to identify operators that consistently offer real value.",
  },
  {
    icon: Zap,
    step: "04",
    title: "Platform Stress Test",
    weight: "15%",
    desc: "We test mobile and desktop during live match minutes — high traffic, live price changes, in-play cash-out. Lag, crashes, and dead-end navigation all cost points.",
  },
  {
    icon: CreditCard,
    step: "05",
    title: "Payment Audit",
    weight: "7%",
    desc: "Deposit and withdrawal channels, processing windows, fee structures, and minimum/maximum limits are all logged and benchmarked against industry standards.",
  },
  {
    icon: Headphones,
    step: "06",
    title: "Support Quality",
    weight: "3%",
    desc: "We open genuine support tickets via live chat, email, and phone. First-response time, resolution accuracy, and agent knowledge are all scored independently.",
  },
]

function HowItWorks() {
  return (
    <section
      className="w-full py-16 px-4"
      style={{
        background: "hsl(var(--surface))",
        borderTop: "1px solid hsl(var(--border))",
      }}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div
                className="h-[3px] w-8"
                style={{ background: "hsl(var(--navy))" }}
                aria-hidden="true"
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: "hsl(var(--navy) / 0.5)" }}>
                Our Methodology
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight">
              How We Review Every Bookmaker
            </h2>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2.5 flex-shrink-0 self-start md:self-auto"
            style={{
              background: "hsl(var(--navy) / 0.06)",
              border: "1px solid hsl(var(--navy) / 0.15)",
              borderRadius: "var(--radius)",
            }}
          >
            <Clock className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--navy))" }} aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "hsl(var(--navy))" }}>
              4-week minimum review period
            </span>
          </div>
        </div>

        {/* Steps grid — 3 columns on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HOW_IT_WORKS_STEPS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="flex flex-col p-5 group"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              >
                {/* Step number + icon row */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-heading font-extrabold text-3xl leading-none"
                    style={{ color: "hsl(var(--navy) / 0.12)" }}
                  >
                    {item.step}
                  </span>
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "hsl(var(--navy) / 0.08)",
                      border: "1px solid hsl(var(--navy) / 0.15)",
                      borderRadius: "var(--radius)",
                    }}
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4" style={{ color: "hsl(var(--navy))" }} />
                  </div>
                </div>

                {/* Title + weight */}
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading font-bold text-sm text-foreground">{item.title}</h3>
                  <span
                    className="font-mono font-bold text-xs flex-shrink-0 ml-2"
                    style={{ color: "hsl(var(--mint))" }}
                  >
                    {item.weight}
                  </span>
                </div>

                {/* Weight bar */}
                <div
                  className="h-[3px] w-full mb-3"
                  style={{ background: "hsl(var(--border))", borderRadius: "2px" }}
                >
                  <div
                    className="h-[3px]"
                    style={{ width: item.weight, background: "hsl(var(--navy))", borderRadius: "2px" }}
                  />
                </div>

                <p className="font-sans text-xs leading-relaxed text-muted-foreground flex-1">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <div
          className="mt-8 px-5 py-4 flex items-start gap-3"
          style={{
            background: "hsl(var(--sky))",
            border: "1px solid hsl(var(--sky-mid))",
            borderRadius: "var(--radius)",
          }}
        >
          <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--navy))" }} aria-hidden="true" />
          <p className="font-sans text-sm text-foreground/70">
            Every operator faces the same six-pillar scoring model applied identically — no exceptions, no commercial arrangements.
            A minimum composite score of <strong className="text-foreground font-semibold">8.5 / 10</strong> is required for a site to be published.
          </p>
        </div>
      </div>
    </section>
  )
}


/* ─────────────────────────────────────────────────────────────────
   SECTION 2: OUR CHOICE — Wide asymmetric editorial banner
   ───────────────────────────────────────────────────────────────── */
function OurChoice() {
  const topSite = bettingSites[0]
  const runnerUp = bettingSites[1]

  return (
    <section
      className="w-full py-16 px-4 sport-pattern"
      style={{
        background: "hsl(var(--navy-deep))",
        borderTop: "1px solid hsl(var(--navy) / 0.3)",
      }}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-8 h-[2px] flex-shrink-0"
            style={{ background: "hsl(var(--sky-mid))" }}
            aria-hidden="true"
          />
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/50">
            Editorial Selection
          </span>
          <div
            className="px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest font-bold"
            style={{
              background: "hsl(var(--mint) / 0.15)",
              border: "1px solid hsl(var(--mint) / 0.3)",
              color: "hsl(var(--mint-light))",
              borderRadius: "var(--radius)",
            }}
          >
            May 2026 Pick
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-5">

          {/* Main #1 feature */}
          <a
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            aria-label={`Visit ${topSite.name} — ${topSite.bonus}`}
            className="block group"
          >
            <div
              className="relative p-6 sm:p-8 h-full overflow-hidden"
              style={{
                background: "hsl(var(--navy))",
                border: "1px solid hsl(var(--sky-mid) / 0.25)",
                borderRadius: "var(--radius)",
              }}
            >
              {/* Sky top border */}
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, hsl(var(--sky-mid)), hsl(var(--mint)), hsl(var(--sky-mid)))" }}
                aria-hidden="true"
              />

              <div className="flex items-start justify-between mb-6 gap-4">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest mb-1.5 text-white/40">
                    VIP Pick — No. 1 Ranked
                  </div>
                  <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white leading-tight">
                    Our Top Pick This Month
                  </h2>
                </div>
                <Award className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "hsl(var(--sky-mid))" }} aria-hidden="true" />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div
                  className="flex-shrink-0 flex items-center justify-center overflow-hidden"
                  style={{
                    background: "hsl(0 0% 98%)",
                    padding: "10px 18px",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                >
                  <img
                    src={topSite.logo || "/placeholder.svg"}
                    alt={`${topSite.name} logo`}
                    className="h-12 max-w-[160px] object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[9px] uppercase tracking-widest mb-1 text-white/40">
                    Welcome Offer
                  </p>
                  <p className="font-heading font-extrabold text-xl text-white leading-tight mb-3">
                    {topSite.bonus}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {topSite.features.map((f, i) => (
                      <span
                        key={i}
                        className="font-mono text-[9px] uppercase tracking-wide px-2.5 py-1"
                        style={{
                          background: "hsl(var(--sky) / 0.12)",
                          color: "hsl(var(--sky-mid))",
                          border: "1px solid hsl(var(--sky-mid) / 0.2)",
                          borderRadius: "var(--radius)",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end sm:items-center gap-1 flex-shrink-0">
                  <div className="font-heading font-extrabold text-4xl leading-none" style={{ color: "hsl(var(--sky-mid))" }}>
                    {topSite.rating.toFixed(1)}
                  </div>
                  <div className="font-mono text-[9px] text-white/30">/ 10</div>
                  <div
                    className="inline-flex items-center gap-1.5 mt-3 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest font-bold transition-all group-hover:opacity-90"
                    style={{
                      background: "hsl(var(--sky-mid))",
                      color: "hsl(var(--navy-deep))",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    Claim Now <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Runner up */}
            <a
              href={runnerUp.url}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              aria-label={`Visit ${runnerUp.name} — ${runnerUp.bonus}`}
              className="block group"
            >
              <div
                className="p-5"
                style={{
                  background: "hsl(var(--navy))",
                  border: "1px solid hsl(var(--navy-light) / 0.2)",
                  borderRadius: "var(--radius)",
                }}
              >
                <div className="font-mono text-[9px] uppercase tracking-widest mb-3 text-white/35">
                  Runner Up — No. 2
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex items-center justify-center overflow-hidden flex-shrink-0"
                    style={{
                      background: "hsl(0 0% 98%)",
                      padding: "6px 12px",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    <img
                      src={runnerUp.logo || "/placeholder.svg"}
                      alt={`${runnerUp.name} logo`}
                      className="h-8 max-w-[100px] object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-sm text-white leading-tight">
                      {runnerUp.bonus}
                    </p>
                    <div className="font-heading font-bold text-lg mt-0.5" style={{ color: "hsl(var(--sky-mid))" }}>
                      {runnerUp.rating.toFixed(1)}<span className="font-sans text-xs text-white/25"> /10</span>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full py-2 text-center font-mono text-[10px] uppercase tracking-widest font-bold transition-all group-hover:opacity-80"
                  style={{
                    border: "1px solid hsl(var(--sky-mid) / 0.3)",
                    color: "hsl(var(--sky-mid))",
                    borderRadius: "var(--radius)",
                  }}
                >
                  View Offer
                </div>
              </div>
            </a>

            {/* Editorial note */}
            <div
              className="p-5 flex-1"
              style={{
                background: "hsl(var(--navy))",
                border: "1px solid hsl(var(--navy-light) / 0.15)",
                borderRadius: "var(--radius)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "hsl(var(--mint))" }} aria-hidden="true" />
                <p className="font-mono text-[9px] uppercase tracking-widest text-white/35">
                  Editorial Note
                </p>
              </div>
              <p className="font-sans text-xs leading-relaxed text-white/50">
                Our monthly selection is determined entirely by composite score across six independent pillars.
                No operator can pay for position. Rankings are reviewed and reissued every 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ─────────────────────────────────────────────────────────────────
   SECTION 3: FAQ — Single-column accordion with counter bubbles
   ───────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "How do you decide which betting sites appear on your list?",
    a: "Every operator must hold a current, unrestricted UKGC licence. Candidates then go through a four-week hands-on evaluation covering six scoring pillars. Only operators achieving a composite score of 8.5 or above are published. Sites with upheld consumer complaints or poor responsible gambling records are excluded regardless of their score.",
  },
  {
    q: "Are the welcome bonuses genuinely worth claiming?",
    a: "Not always. A headline figure of £50 in free bets is only attractive when the wagering requirement is 30× or lower and qualifying odds sit at 1.5 or above. Our reviews report the genuine cash value behind the marketing figures — and when a bonus is poor value, we state that explicitly.",
  },
  {
    q: "How frequently do you update the rankings?",
    a: "Our editorial team re-tests every listed operator on a rolling monthly cycle. Any bookmaker that fails a re-assessment — through changed terms, payout delays, or deteriorating responsible gambling provision — is immediately re-evaluated and may be repositioned or removed without delay.",
  },
  {
    q: "Do any bookmakers pay for a higher ranking on this site?",
    a: "No. Rankings are determined entirely by our scoring methodology. We earn affiliate commission when you register via our links, but this does not — and cannot — influence any operator's position. Our editorial and commercial functions are strictly separated.",
  },
  {
    q: "What is GAMSTOP and how does it work?",
    a: "GAMSTOP is the UK's national self-exclusion register. Registering at gamstop.co.uk automatically blocks your access to every UKGC-licensed betting and casino platform for a minimum of six months. Every operator on our list is legally required by the UKGC to honour GAMSTOP registrations.",
  },
  {
    q: "Is it safe to bet with UK-licensed bookmakers?",
    a: "All operators on this list hold a valid UKGC licence, which requires segregated player funds, 128-bit SSL encryption, responsible gambling tools, and compliance with strict advertising rules. The UKGC is among the most rigorous gambling regulators globally. We also run our own additional due diligence on every listed operator.",
  },
]

function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section
      className="w-full py-16 px-4"
      style={{
        background: "hsl(var(--background))",
        borderTop: "1px solid hsl(var(--border))",
      }}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Header */}
        <div className="grid md:grid-cols-[1fr_280px] gap-8 mb-10 pb-8 border-b" style={{ borderColor: "hsl(var(--border))" }}>
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div
                className="h-[3px] w-8"
                style={{ background: "hsl(var(--mint))" }}
                aria-hidden="true"
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: "hsl(var(--mint) / 0.6)" }}>
                Knowledge Base
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="font-sans text-sm leading-relaxed text-muted-foreground self-end">
            Everything you need to know about British VIP Betting Sites, UK bookmaker safety, and responsible gambling.
          </p>
        </div>

        {/* Accordion — full width */}
        <div className="space-y-0">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border-b"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              <button
                className="w-full flex items-start justify-between py-5 text-left gap-4 group"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <div className="flex items-start gap-4 min-w-0">
                  <div
                    className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5 font-mono font-bold text-xs"
                    style={{
                      background: openFaq === i ? "hsl(var(--navy))" : "hsl(var(--secondary))",
                      color: openFaq === i ? "hsl(0 0% 100%)" : "hsl(var(--text-muted))",
                      borderRadius: "var(--radius)",
                      transition: "background 0.15s",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="font-heading font-bold text-sm text-foreground leading-snug pt-0.5">
                    {faq.q}
                  </span>
                </div>
                {openFaq === i
                  ? <ChevronUp className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: "hsl(var(--navy))" }} aria-hidden="true" />
                  : <ChevronDown className="w-4 h-4 flex-shrink-0 mt-1 text-muted-foreground" aria-hidden="true" />
                }
              </button>
              {openFaq === i && (
                <div className="pb-5 pl-11 pr-8">
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ─────────────────────────────────────────────────────────────────
   SECTION 4: SAFER GAMBLING — Sky/mint tiled panel with cards
   ───────────────────────────────────────────────────────────────── */
function SaferGambling() {
  return (
    <section
      className="w-full py-16 px-4 sport-pattern"
      style={{
        background: "hsl(var(--surface-muted))",
        borderTop: "1px solid hsl(var(--border))",
      }}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Warning bar */}
        <div
          className="flex items-start gap-4 p-4 mb-10"
          style={{
            background: "hsl(0 72% 50% / 0.06)",
            border: "1px solid hsl(0 72% 50% / 0.25)",
            borderLeft: "3px solid hsl(0 72% 50%)",
            borderRadius: "var(--radius)",
          }}
        >
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(0 72% 50%)" }} aria-hidden="true" />
          <div>
            <p className="font-heading font-bold text-sm text-foreground mb-1">Important Notice</p>
            <p className="font-sans text-xs leading-relaxed text-muted-foreground">
              Betting carries significant financial risk and can lead to addiction. Never wager money you cannot afford to lose.
              Free, confidential help is available 24/7 via{" "}
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2 font-medium" style={{ color: "hsl(0 72% 52%)" }}>
                BeGambleAware.org
              </a>{" "}
              or call <strong className="text-foreground">0808 8020 133</strong>.
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-start gap-4 mb-10">
          <div
            className="w-10 h-10 flex items-center justify-center flex-shrink-0"
            style={{
              background: "hsl(var(--mint) / 0.12)",
              border: "1px solid hsl(var(--mint) / 0.25)",
              borderRadius: "var(--radius)",
            }}
            aria-hidden="true"
          >
            <HeartHandshake className="w-5 h-5" style={{ color: "hsl(var(--mint))" }} />
          </div>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] block mb-1" style={{ color: "hsl(var(--mint) / 0.6)" }}>
              Responsible Gambling
            </span>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight">
              Gambling Must Always Be Your Choice
            </h2>
            <p className="font-sans text-sm text-muted-foreground mt-1 max-w-xl">
              Every bookmaker on our list is UKGC-regulated and must provide deposit limits, time alerts, and self-exclusion tools.
            </p>
          </div>
        </div>

        {/* Three-column layout */}
        <div className="grid md:grid-cols-3 gap-4">

          {/* Healthy habits */}
          <div
            style={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--mint) / 0.2)",
              borderRadius: "var(--radius)",
              overflow: "hidden",
            }}
          >
            <div
              className="px-5 py-3 flex items-center gap-2 border-b"
              style={{
                background: "hsl(var(--mint) / 0.08)",
                borderColor: "hsl(var(--mint) / 0.2)",
              }}
            >
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--mint))" }} aria-hidden="true" />
              <h3 className="font-heading font-bold text-xs text-foreground">Healthy Habits</h3>
            </div>
            <ul className="p-5 space-y-3" role="list">
              {[
                "Set a monthly budget before placing any bet",
                "Activate deposit limits on every account before first use",
                "Treat any winnings as a bonus, not guaranteed income",
                "Schedule structured breaks from all betting platforms",
                "Maintain a broad range of hobbies and social interests",
                "Use GAMSTOP if you ever need a longer break",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--mint))" }} aria-hidden="true" />
                  <span className="font-sans text-xs leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Warning signs */}
          <div
            style={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(0 72% 50% / 0.18)",
              borderRadius: "var(--radius)",
              overflow: "hidden",
            }}
          >
            <div
              className="px-5 py-3 flex items-center gap-2 border-b"
              style={{
                background: "hsl(0 72% 50% / 0.05)",
                borderColor: "hsl(0 72% 50% / 0.18)",
              }}
            >
              <XCircle className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(0 72% 50%)" }} aria-hidden="true" />
              <h3 className="font-heading font-bold text-xs text-foreground">Warning Signs</h3>
            </div>
            <ul className="p-5 space-y-3" role="list">
              {[
                "Betting with money needed for rent, bills, or food",
                "Hiding bets or losses from people close to you",
                "Using credit cards or loans to fund gambling",
                "Chasing losses to try and win them back",
                "Feeling restless or anxious when unable to bet",
                "Neglecting work or family responsibilities",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <XCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "hsl(0 72% 50%)" }} aria-hidden="true" />
                  <span className="font-sans text-xs leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Free UK Support */}
          <div
            style={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--navy) / 0.15)",
              borderRadius: "var(--radius)",
              overflow: "hidden",
            }}
          >
            <div
              className="px-5 py-3 flex items-center gap-2 border-b"
              style={{
                background: "hsl(var(--sky))",
                borderColor: "hsl(var(--sky-mid))",
              }}
            >
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--navy))" }} aria-hidden="true" />
              <h3 className="font-heading font-bold text-xs text-foreground">Free UK Support</h3>
            </div>
            <div className="p-5 space-y-4">
              {[
                { name: "GambleAware", url: "begambleaware.org", desc: "Free support & treatment referrals", href: "https://www.begambleaware.org" },
                { name: "GamCare Helpline", url: "0808 8020 133", desc: "Free, 24 hours, 7 days a week", href: "https://www.gamcare.org.uk" },
                { name: "Gambling Therapy", url: "gamblingtherapy.org", desc: "Online forums & live counselling", href: "https://www.gamblingtherapy.org" },
                { name: "GAMSTOP", url: "gamstop.co.uk", desc: "Self-exclude from all UKGC sites", href: "https://www.gamstop.co.uk" },
              ].map((org, i) => (
                <a
                  key={i}
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-3 group"
                >
                  <div>
                    <p className="font-heading font-bold text-xs text-foreground mb-0.5 group-hover:text-navy transition-colors">{org.name}</p>
                    <p className="font-mono text-[9px] mb-0.5" style={{ color: "hsl(var(--navy) / 0.55)" }}>{org.url}</p>
                    <p className="font-sans text-[11px] text-muted-foreground">{org.desc}</p>
                  </div>
                  <ExternalLink className="w-3 h-3 flex-shrink-0 mt-1 text-muted-foreground" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div
          className="mt-6 pt-4 border-t flex items-start gap-3"
          style={{ borderColor: "hsl(var(--border))" }}
        >
          <BarChart2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground" aria-hidden="true" />
          <p className="font-sans text-xs leading-relaxed text-muted-foreground">
            British VIP Betting Sites supports responsible gambling. All listed operators are regulated by the UK Gambling Commission
            and must provide deposit limits, self-exclusion, and reality checks. Gambling is intended as entertainment only — if it is
            no longer enjoyable, please seek free help immediately.
          </p>
        </div>
      </div>
    </section>
  )
}


/* ─────────────────────────────────────────────────────────────────
   SECTION 5: ABOUT US — Four-pillar value grid with sport accent
   ───────────────────────────────────────────────────────────────── */
const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Fully Independent",
    desc: "No bookmaker funds, approves, or influences our editorial content. Every score is determined purely by our methodology and the hands-on evidence our reviewers collect.",
  },
  {
    icon: TrendingUp,
    title: "100% Transparent",
    desc: "We publish our complete six-pillar scoring model so you can see exactly how each bookmaker earns its position. There are no hidden criteria and no undisclosed arrangements.",
  },
  {
    icon: Award,
    title: "VIP Accuracy",
    desc: "Our team verifies licence status, bonus terms, and payout windows before every publication. Facts are confirmed against primary sources — not recycled from operator press materials.",
  },
  {
    icon: Users,
    title: "Responsibility First",
    desc: "Safer gambling is embedded throughout our platform — not relegated to a small-print footnote. We exclude any operator with poor responsible gambling records regardless of their commercial standing.",
  },
]

function AboutSection() {
  return (
    <section
      className="w-full py-16 px-4"
      style={{
        background: "hsl(var(--surface))",
        borderTop: "1px solid hsl(var(--border))",
      }}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Two-column intro */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div
                className="h-[3px] w-8"
                style={{ background: "hsl(var(--navy))" }}
                aria-hidden="true"
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: "hsl(var(--navy) / 0.5)" }}>
                About Us
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight mb-4">
              Built by Bettors. Trusted by Thousands.
            </h2>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              British VIP Betting Sites was built by UK sports betting specialists who were tired of comparison platforms
              obscuring what actually matters — real bonus value, honest payout speeds, and genuine player safety standards
              — behind sponsored headlines and hidden commercial deals. We built this platform to do exactly the opposite.
            </p>
          </div>
          <div>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-4">
              Every bookmaker reviewed with a real account, real deposits, and zero editorial compromise. Our team brings
              over 35 years of combined experience across UK and European gambling markets. No reviewer holds a financial
              stake in any operator we feature.
            </p>
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{
                background: "hsl(var(--sky))",
                border: "1px solid hsl(var(--sky-mid))",
                borderRadius: "var(--radius)",
              }}
            >
              <ShieldCheck className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--navy))" }} aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "hsl(var(--navy))" }}>
                britishvipbettingsites.com — Independent Comparison
              </span>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-5 flex flex-col gap-3"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                style={{
                  background: "hsl(var(--navy) / 0.08)",
                  border: "1px solid hsl(var(--navy) / 0.15)",
                  borderRadius: "var(--radius)",
                }}
                aria-hidden="true"
              >
                <Icon className="w-4 h-4" style={{ color: "hsl(var(--navy))" }} />
              </div>
              <h3 className="font-heading font-bold text-sm text-foreground">{title}</h3>
              <p className="font-sans text-xs leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ─── Main export ──────────────────────────────────────────────── */
export function InfoSections() {
  return (
    <div className="w-full">
      <OurChoice />
      <HowItWorks />
      <AboutSection />
      <FAQSection />
      <SaferGambling />
    </div>
  )
}
