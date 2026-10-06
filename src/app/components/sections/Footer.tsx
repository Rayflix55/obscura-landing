// src/components/sections/Footer.tsx
import Link from "next/link";
import {
  InstagramIcon,
  YoutubeIcon,
  PinterestIcon,
  XIcon,
} from "../ui/SocialIcons";
import { ObscuraWordmark } from "../ui/ObscuraWordmark";

const SHOP_LINKS = [
  { label: "Cameras", href: "/cameras" },
  { label: "Lenses", href: "/lenses" },
  { label: "Accessories", href: "/accessories" },
  { label: "Gift cards", href: "/gift-cards" },
];

const SUPPORT_LINKS = [
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "Warranty", href: "/warranty" },
  { label: "Contact us", href: "/contact" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Careers", href: "/careers" },
  { label: "Store locator", href: "/stores" },
];

const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
  { label: "Pinterest", href: "https://pinterest.com", Icon: PinterestIcon },
  { label: "X (Twitter)", href: "https://x.com", Icon: XIcon },
];

export function Footer() {
  return (
    <footer className="bg-footer">
      {/* Figma: padding 53px 37px (lg) / 40px 24px (mobile).
          gap 32px between content and wordmark. */}
      <div className="flex flex-col items-center gap-8
                      px-6 py-10
                      lg:px-[37px] lg:py-[53px]">

        {/* ── Content block — max 1273px ── */}
        <div className="w-full max-w-[1273px] flex flex-col gap-8">

          {/* Top section — stacks on mobile, side-by-side on lg */}
          <div className="flex flex-col lg:flex-row lg:items-start
                          gap-12 lg:gap-[70px]">

            {/* ── Brand group ── */}
            <div className="flex-1 min-w-0 flex flex-col gap-7">
              <div className="flex flex-col gap-[18px]">
                <Link href="/" className="inline-block">
                  <span className="font-display font-semibold text-2xl leading-9
                                   tracking-[0.48px] text-text">
                    OBSCURA<span className="text-primary">.</span>
                  </span>
                </Link>
                <p className="font-sans font-medium text-sm leading-[22px] text-muted
                              max-w-[237px]">
                  Precision cameras, optics, and field gear for photographers
                  who notice light first.
                </p>
              </div>

              <div className="flex items-center gap-[14px]">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-divider
                               flex items-center justify-center text-text
                               hover:border-text/40 hover:text-primary
                               transition-colors duration-150
                               focus-visible:outline-none focus-visible:ring-2
                               focus-visible:ring-primary rounded-full"
                  >
                    <Icon size={16} strokeWidth={1.07} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Link columns ──
                Mobile: stacked vertically (1 col).
                sm+: 3 columns side-by-side.
                lg: still 3 columns inside the flex-group. */}
            <div className="flex-1 min-w-0
                            grid grid-cols-1 sm:grid-cols-3
                            gap-8 sm:gap-6 lg:gap-12">
              <LinkColumn title="Shop" links={SHOP_LINKS} />
              <LinkColumn title="Support" links={SUPPORT_LINKS} />
              <LinkColumn title="Company" links={COMPANY_LINKS} />
            </div>

            {/* ── Newsletter ── */}
            <div className="flex-1 min-w-0 flex flex-col gap-[22px]">
              <div className="flex flex-col gap-6">
                <h4 className="font-mono font-normal text-xs uppercase
                               tracking-[1.613px] text-placeholder">
                  Newsletter
                </h4>
                <p className="font-sans font-medium text-sm leading-[22px] text-muted
                              max-w-[318px]">
                  New arrivals, trade-in events, and field notes — once or
                  twice a month.
                </p>
              </div>

              {/* Form — input + button row stays side-by-side but the
                  button padding shrinks on mobile so the input isn't crushed. */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-stretch gap-1 p-px
                           border border-divider rounded-[2px]
                           focus-within:border-text/30 transition-colors"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 bg-transparent
                             px-4 sm:px-[25px] py-[10px]
                             font-sans font-medium text-sm text-text
                             placeholder:text-placeholder
                             focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0
                             px-5 sm:px-[46px] py-[18px]
                             bg-primary border border-primary rounded-[2px]
                             font-mono text-sm leading-[22px] uppercase
                             tracking-[0.787px] text-text whitespace-nowrap
                             hover:bg-primary-hover transition-colors duration-150"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* ── Bottom row ──
              Mobile: stacked (copyright then legal).
              md+: side-by-side with justify-between. */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between
                          gap-4 md:gap-6
                          pt-6 md:pt-8 border-t border-divider">
            <p className="font-mono text-[11px] sm:text-xs uppercase
                          tracking-[1.613px] text-muted">
              © {new Date().getFullYear()} Obscura Camera Co. All rights reserved.
            </p>

            {/* Legal links — 2 rows on mobile if needed */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {LEGAL_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-mono text-[11px] sm:text-xs uppercase
                             tracking-[1.613px] text-muted
                             hover:text-text transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider above wordmark ── */}
        <div className="w-full max-w-[1273px] border-t border-divider" />

        {/* ── Wordmark ── */}
        <div
          aria-hidden
          className="w-full flex justify-center
                     overflow-hidden select-none pointer-events-none"
        >
          <ObscuraWordmark className="w-full max-w-[1565px] h-auto" />
        </div>
      </div>
    </footer>
  );
}

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-[22px]">
      <h4 className="font-mono font-medium text-[11.5px] leading-[17px]
                     uppercase tracking-[1.152px] text-muted">
        {title}
      </h4>
      <ul className="flex flex-col gap-5 pt-[3px] pb-[3px]">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="font-sans font-medium text-sm leading-[22px] text-text
                         hover:text-primary transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}