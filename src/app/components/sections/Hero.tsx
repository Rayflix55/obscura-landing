// src/components/sections/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "../../components/ui";

export function Hero() {
  return (
    <section className="pt-[83px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        {/* Figma Hero: flex-row · align-items center · gap 85px
            Stacks to column on mobile/tablet.
            py-12 on mobile, py-16 on desktop. */}
        <div className="flex flex-col lg:flex-row items-center
                        gap-12 lg:gap-[85px] py-12 lg:py-16">

          {/* ── Left column (Frame 33) ──
              Mobile: full width, mx-auto, max-w-[425px]
              Desktop: fixed 425px, shrink-0, no auto-centering */}
          <div className="flex flex-col items-start gap-[38px]
                          w-full max-w-[425px] lg:w-[425px] mx-auto lg:mx-0
                          lg:shrink-0">

            {/* ── Frame 32 — text group · gap 5px ── */}
            <div className="flex flex-col items-start gap-[5px] w-full">
              <Eyebrow>Nova X1 · Now shipping</Eyebrow>

              {/* ── Frame 31 — H1 + body · gap 16px ── */}
              <div className="flex flex-col items-start gap-4 w-full">
                {/* H1 — Figma: Fraunces 400 · 70px/78px · tracking -0.704px.
                    Mobile drops to 44px, tablet to 56px.
                    Explicit <br> locks the two-line split at all widths. */}
                <h1 className="font-display font-normal text-text w-full
                               text-[40px] leading-[1.1] tracking-[-0.704px]
                               sm:text-[44px]
                               md:text-[56px]
                               lg:text-[70px] lg:leading-[78px]">
                  See it exactly
                  <br />
                  as it <em className="italic text-primary">was</em>.
                </h1>

                <p className="font-sans text-base leading-6 text-muted w-full">
                  Full-frame bodies, hand-ground optics, and film stocks
                  selected by working photographers — for people who notice
                  light before anyone else does.
                </p>
              </div>
            </div>

            {/* ── Frame 30 — buttons ──
                Mobile: full-width stacked column.
                sm+: side-by-side row with 18px gap.
                Each button remains 58px tall. */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center
                            gap-[18px] w-full">
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

              <Link
                href="/story"
                className="inline-flex items-center justify-center gap-[10px]
                           w-full sm:w-auto
                           border border-divider rounded-[2px]
                           px-[29px] py-[18px]
                           font-mono text-sm leading-[22px] uppercase
                           tracking-[0.787px] text-muted whitespace-nowrap
                           hover:text-text
                           transition-colors duration-150"
              >
                Our story
              </Link>
            </div>
          </div>

          {/* ── Right column — image ──
              Mobile: near-square crop (375×440) so it doesn't dominate.
              lg+: fixed 690×946 portrait. */}
          <div className="relative w-full lg:w-[690px] lg:h-[946px] shrink-0">
            <div className="relative
                            aspect-[375/440]
                            sm:aspect-[600/500]
                            lg:aspect-auto lg:h-full
                            w-full overflow-hidden
                            border border-divider lg:border-0 rounded-[2px] lg:rounded-none">
              <Image
                src="/img-1.png"
                alt="Photographer holding a mirrorless camera up to eye level"
                fill
                priority
                sizes="(min-width: 1024px) 690px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}