import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import { ShieldCheck, TrendingUp, Award, Users, Target, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us — British VIP Betting Sites",
  description:
    "Learn who is behind britishvipbettingsites.com — our editorial mission, transparent review methodology, and why we exist: to give UK bettors genuinely independent, unbiased bookmaker comparisons.",
  keywords: "about British VIP Betting Sites, UK bookmaker comparison editorial, independent betting review team",
  openGraph: {
    title: "About British VIP Betting Sites",
    description:
      "Who we are, how we review bookmakers, and why we never accept payment for rankings. britishvipbettingsites.com — built on integrity.",
    url: "https://britishvipbettingsites.com/about",
  },
  alternates: {
    canonical: "https://britishvipbettingsites.com/about",
  },
}

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Strict Independence",
    desc: "No operator pays for a position on our list. No bookmaker holds review approval rights. Every score is determined entirely by our methodology, applied identically to every candidate.",
  },
  {
    icon: Award,
    title: "Verified Accuracy",
    desc: "Licence status, welcome offer terms, and withdrawal windows are verified against primary sources before every publication. No claim on this site is recycled from operator press materials.",
  },
  {
    icon: TrendingUp,
    title: "Full Transparency",
    desc: "Our complete six-pillar scoring model is published in full so visitors can evaluate exactly how each bookmaker earns its position. There are no hidden criteria and no undisclosed commercial arrangements.",
  },
  {
    icon: Users,
    title: "Responsibility by Default",
    desc: "Safer gambling is embedded throughout our platform, not relegated to small print. We exclude any operator with poor responsible gambling records regardless of their commercial standing.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="About British VIP Betting Sites"
        subtitle="britishvipbettingsites.com — Independent bookmaker comparison"
      >

        {/* Mission statement */}
        <div
          className="p-6"
          style={{
            background: "hsl(var(--sky))",
            border: "1px solid hsl(var(--sky-mid))",
            borderLeft: "3px solid hsl(var(--navy))",
            borderRadius: "var(--radius)",
          }}
        >
          <p className="font-sans text-sm leading-relaxed text-foreground/75">
            British VIP Betting Sites was founded by a team of UK sports betting professionals who grew tired of comparison
            platforms that buried the most important facts — genuine bonus value, real withdrawal speeds, honest responsible
            gambling standards — beneath inflated headlines and undisclosed commercial deals. We built this platform to do
            exactly the opposite: every bookmaker is reviewed with a live account, real deposits, and zero editorial compromise.
          </p>
        </div>

        {/* Core values grid */}
        <ContentBlock title="Our Four Core Values">
          <div className="grid sm:grid-cols-2 gap-4">
            {CORE_VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-4 flex gap-4"
                style={{
                  background: "hsl(var(--secondary))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "hsl(var(--navy) / 0.08)",
                    border: "1px solid hsl(var(--navy) / 0.15)",
                    borderRadius: "var(--radius)",
                  }}
                  aria-hidden="true"
                >
                  <Icon className="w-4 h-4" style={{ color: "hsl(var(--navy))" }} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">{title}</h3>
                  <p className="font-sans text-xs leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Our Editorial Standards" accent="mint">
          <div className="space-y-0 divide-y" style={{ borderColor: "hsl(var(--border))" }}>
            {[
              {
                icon: Clock,
                title: "Four-Week Minimum Review Period",
                desc: "No bookmaker earns a place on this list without completing a structured four-week evaluation across all six scoring pillars. Sponsored reviews and fast-track placements are not accepted under any circumstances.",
              },
              {
                icon: Target,
                title: "Real Accounts, Real Money, Real Results",
                desc: "Every reviewer holds an active, funded account with each operator they assess. Withdrawal speeds, support response times, and in-play cash-out reliability are verified through genuine transactions — not sales material supplied by the operators.",
              },
              {
                icon: TrendingUp,
                title: "Rolling Monthly Re-evaluation",
                desc: "A high score today can be lost tomorrow. We re-test every listed operator on a monthly cycle. Operators that revise terms unfavourably, delay payouts, or fail responsible gambling audits are demoted or removed without delay.",
              },
              {
                icon: ShieldCheck,
                title: "Full Affiliate Transparency",
                desc: "We earn affiliate commission through links on this site when you register with a bookmaker. This is disclosed across every relevant page. Commission funds our independent operation — it does not and cannot influence a single position in our rankings.",
              },
              {
                icon: Award,
                title: "UKGC Compliance is Non-Negotiable",
                desc: "An active, unrestricted UK Gambling Commission licence is a baseline requirement for any operator we review. Bookmakers carrying upheld UKGC consumer complaints are excluded from our rankings regardless of scoring performance.",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <div
                    className="w-[2px] flex-shrink-0 self-stretch"
                    style={{ background: "hsl(var(--mint) / 0.4)" }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-sm text-foreground mb-1">{item.title}</h3>
                    <p className="font-sans text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ContentBlock>

        <ContentBlock title="Our Review Team">
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            Our review team brings together sports betting specialists with over 35 years of combined experience covering
            UK and European gambling markets. Each reviewer is required to maintain an active, funded account with every
            operator they assess and must submit documented evidence of their testing before any score is finalised.
            Reviewers must disclose any personal or commercial relationship with an operator under review. No member of
            our team holds a financial stake in any bookmaker featured on this site.
          </p>
        </ContentBlock>

        {/* Legal disclaimer */}
        <div
          className="px-5 py-4"
          style={{
            background: "hsl(var(--secondary))",
            border: "1px solid hsl(var(--border))",
            borderLeft: "2px solid hsl(var(--navy) / 0.3)",
            borderRadius: "var(--radius)",
          }}
        >
          <p className="font-sans text-xs leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">Disclaimer:</strong>{" "}
            britishvipbettingsites.com is an informational comparison website. We are not a bookmaker and do not accept bets.
            All featured operators hold a current UKGC licence. Affiliate links may be used to fund our independent editorial
            operation. Gambling involves financial risk. Please gamble responsibly. 18+ only.
          </p>
        </div>

      </PageLayout>
      <Footer />
    </div>
  )
}
