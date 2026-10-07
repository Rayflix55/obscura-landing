// src/components/sections/AboutSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "../../components/ui";

export function AboutSection() {
  return (
    <section className="bg-surface border-b border-divider
                        py-16 lg:py-[103px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-start
                        gap-10 lg:gap-[69px]">

          {/* ── Left column — text ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-8 lg:gap-[30px] w-full">
            <div className="flex flex-col gap-[5px]">
              <Eyebrow>Why photographers choose us</Eyebrow>
              <h2 className="font-display font-normal text-text
                             text-[28px] leading-[1.2] tracking-[-0.416px]
                             sm:text-[32px]
                             lg:text-[40px] lg:leading-[48px]">
                Gear tested by people
                <br className="hidden lg:inline" /> who shoot for a living.
              </h2>
            </div>

            <div className="flex flex-col gap-5 lg:gap-6">
              <p className="font-sans text-base leading-6 text-muted">
                Every body and lens in the Obscura catalogue is chosen by
                working photographers, not a spec sheet. Before a camera earns
                a place on our shelves, it spends weeks in the field: on
                assignment, in changing light, in the hands of people who need
                it to work every time. We stock full-frame mirrorless systems,
                manual-focus primes, and the film stocks that started it all,
                alongside the tripods, bags, and lighting that hold a shoot
                together.
              </p>

              <p className="font-sans text-base leading-6 text-muted">
                Buying a camera is a relationship, not a transaction. Our team
                answers questions in plain language, matches gear to the way
                you actually shoot, and stands behind every sale with a
                two-year warranty and a real person on the other end of the
                line. Trade in an old body toward a new one, borrow a lens
                before you commit, or bring your camera in for a sensor clean.
                We built Obscura for photographers who plan to keep their gear
                for a decade, not a season, and who&apos;d rather ask a
                technician a question than search a forum for an answer.
              </p>

              <Link
                href="/story"
                className="inline-flex items-center justify-center gap-[10px]
                           w-full sm:w-auto self-stretch sm:self-start
                           mt-1
                           border border-divider rounded-[2px]
                           px-[29px] py-[18px]
                           font-mono text-sm leading-[22px] uppercase
                           tracking-[0.787px] text-muted whitespace-nowrap
                           hover:text-text transition-colors duration-150"
              >
                Read our full story
              </Link>
            </div>
          </div>

          {/* ── Right column — image ── */}
          <div className="w-full lg:w-[558px] lg:shrink-0">
            <div className="relative aspect-[375/300] lg:aspect-[558/420]
                            w-full overflow-hidden
                            border border-divider rounded-[2px]">
              <Image
                src="/about-workshop.jpg"
                alt="Photographer inspecting camera equipment in a workshop"
                fill
                sizes="(min-width: 1024px) 558px, 100vw"
                quality={90}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}