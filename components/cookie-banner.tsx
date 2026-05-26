"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Cookie, ShieldCheck, BarChart2 } from "lucide-react"

type ConsentState = "accepted_all" | "accepted_essential" | "declined" | null

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const consent = localStorage.getItem("cookieConsent_bvbs")
        if (!consent) setIsVisible(true)
      }
    } catch {
      setIsVisible(true)
    }
  }, [])

  const handleChoice = (choice: ConsentState) => {
    try {
      if (choice) {
        localStorage.setItem("cookieConsent_bvbs", choice)
        localStorage.setItem("cookieConsentDate_bvbs", new Date().toISOString())
      }
    } catch {
      // silent
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60]"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie preferences"
    >
      {/* Navy to sky gradient top line */}
      <div
        className="w-full h-[2px]"
        style={{ background: "linear-gradient(90deg, hsl(var(--navy)), hsl(var(--sky-mid)), hsl(var(--mint)), hsl(var(--sky-mid)), hsl(var(--navy)))" }}
        aria-hidden="true"
      />

      <div
        style={{
          background: "hsl(var(--navy-deep))",
          borderTop: "1px solid hsl(var(--sky-mid) / 0.15)",
          boxShadow: "0 -8px 40px hsl(var(--navy-deep) / 0.5)",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-4">

          {/* Main row */}
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center mt-0.5"
              style={{
                background: "hsl(var(--sky-mid) / 0.12)",
                border: "1px solid hsl(var(--sky-mid) / 0.25)",
                borderRadius: "var(--radius)",
              }}
              aria-hidden="true"
            >
              <Cookie className="w-5 h-5" style={{ color: "hsl(var(--sky-mid))" }} />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p
                className="font-heading font-bold text-sm mb-1"
                style={{ color: "hsl(var(--sky-mid))" }}
              >
                Cookie Preferences
              </p>
              <p className="font-sans text-xs leading-relaxed text-white/55">
                We use essential cookies to keep the site secure and functional, and optional analytics cookies to understand
                how visitors use our rankings. No personal data is sold. Read our{" "}
                <Link
                  href="/cookie-policy"
                  className="underline underline-offset-2 transition-opacity hover:opacity-80"
                  style={{ color: "hsl(var(--sky-mid))" }}
                >
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-2 transition-opacity hover:opacity-80"
                  style={{ color: "hsl(var(--sky-mid))" }}
                >
                  Privacy Policy
                </Link>.
              </p>

              {/* Expanded detail */}
              {isExpanded && (
                <div className="mt-3 grid sm:grid-cols-2 gap-2">
                  <div
                    className="flex gap-3 p-3"
                    style={{
                      background: "hsl(var(--navy) / 0.5)",
                      border: "1px solid hsl(var(--sky-mid) / 0.15)",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--mint))" }} aria-hidden="true" />
                    <div>
                      <p className="font-heading font-bold text-xs mb-0.5 text-white/80">Essential Cookies</p>
                      <p className="font-sans text-[11px] leading-relaxed text-white/45">
                        Required for site security, session management, and core functionality. Always active.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex gap-3 p-3"
                    style={{
                      background: "hsl(var(--navy) / 0.5)",
                      border: "1px solid hsl(var(--sky-mid) / 0.15)",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    <BarChart2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--sky-mid))" }} aria-hidden="true" />
                    <div>
                      <p className="font-heading font-bold text-xs mb-0.5 text-white/80">Analytics Cookies</p>
                      <p className="font-sans text-[11px] leading-relaxed text-white/45">
                        Help us understand which bookmaker rankings are most useful. Optional — decline anytime.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Close */}
            <button
              onClick={() => handleChoice("declined")}
              className="flex-shrink-0 w-7 h-7 flex items-center justify-center transition-opacity hover:opacity-70"
              style={{ color: "hsl(var(--sky-mid) / 0.45)" }}
              aria-label="Dismiss cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Actions row */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pl-14">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[10px] font-mono uppercase tracking-widest transition-opacity hover:opacity-70 underline underline-offset-2"
              style={{ color: "hsl(var(--sky-mid) / 0.55)" }}
            >
              {isExpanded ? "Hide Details" : "Manage Preferences"}
            </button>

            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={() => handleChoice("accepted_essential")}
                className="py-2 px-4 text-[10px] font-mono font-bold uppercase tracking-widest transition-all hover:opacity-80"
                style={{
                  background: "transparent",
                  color: "hsl(var(--sky-mid) / 0.6)",
                  border: "1px solid hsl(var(--sky-mid) / 0.2)",
                  borderRadius: "var(--radius)",
                }}
              >
                Essential Only
              </button>
              <button
                onClick={() => handleChoice("declined")}
                className="py-2 px-4 text-[10px] font-mono font-bold uppercase tracking-widest transition-all hover:opacity-80"
                style={{
                  background: "transparent",
                  color: "hsl(var(--sky-mid) / 0.45)",
                  border: "1px solid hsl(var(--sky-mid) / 0.15)",
                  borderRadius: "var(--radius)",
                }}
              >
                Decline All
              </button>
              <button
                onClick={() => handleChoice("accepted_all")}
                className="py-2 px-5 text-[10px] font-mono font-bold uppercase tracking-widest transition-all hover:opacity-90"
                style={{
                  background: "hsl(var(--sky-mid))",
                  color: "hsl(var(--navy-deep))",
                  borderRadius: "var(--radius)",
                }}
              >
                Accept All
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
