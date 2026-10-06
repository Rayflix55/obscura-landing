// src/components/sections/TradeInBanner.tsx
import Link from "next/link";
import { Eyebrow } from "../../components/ui";

export function TradeInBanner() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-[79px]">
      {/* Radial green glow — sits behind content, doesn't affect layout */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70.71% 141.42% at 50% 0%, rgba(26,116,49,0.14) 0%, rgba(26,116,49,0) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="flex flex-col items-center gap-8 lg:gap-[35px] text-center">

          {/* Eyebrow + heading + body group */}
          <div className="flex flex-col items-center gap-5 lg:gap-[26px] max-w-[1136px]">
            <Eyebrow centered>Trade-in event · Ends July 31</Eyebrow>

            {/* H2 — 28px mobile, 40px sm, 52px lg.
                <br> only on lg so mobile wraps naturally. */}
            <h2 className="font-display font-normal text-text
                           text-[28px] leading-[1.15] tracking-[-0.512px]
                           sm:text-[40px] sm:leading-[1.15]
                           lg:text-[52px] lg:leading-[58px]">
              Trade your old body in.
              <br className="hidden lg:inline" /> Walk out with a new one.
            </h2>

            {/* Body — capped at 640px for readable line length */}
            <p className="font-sans text-base leading-6 text-muted
                          max-w-[280px] sm:max-w-[480px] lg:max-w-[640px]">
              Get up to $500 toward any Nova or Meridian camera when you trade
              in a working DSLR or mirrorless body — no receipt required.
            </p>
          </div>

          {/* CTA — full-width on mobile, content-width from sm up */}
          <Link
            href="/trade-in"
            className="inline-flex items-center justify-center gap-[10px]
                       w-full sm:w-auto
                       bg-primary border border-primary rounded-[2px]
                       px-[46px] py-[18px]
                       font-mono text-sm leading-[22px] uppercase
                       tracking-[0.787px] text-text whitespace-nowrap
                       hover:bg-primary-hover hover:border-divider
                       transition-colors duration-150"
          >
            Start your trade-in
          </Link>
        </div>
      </div>
    </section>
  );
}