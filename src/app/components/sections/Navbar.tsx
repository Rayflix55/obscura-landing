// src/app/components/sections/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { CartBadge, IconButton } from "../ui";

const NAV_LINKS = [
  { label: "Cameras", href: "/cameras" },
  { label: "Lenses", href: "/lenses" },
  { label: "Accessories", href: "/accessories" },
  { label: "Journal", href: "/journal" },
  { label: "Trade-in", href: "/trade-in" },
];

interface NavbarProps {
  cartCount?: number;
  isSignedIn?: boolean;
}

export function Navbar({ cartCount = 0, isSignedIn = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      {/* Figma: 1440×83, padding 0 120px (lg) / 20px 16px (md & below),
          gap 120px (lg) / 63px (md & below), bg rgba(16,16,18,0.88)
          + backdrop-blur 5px. */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[83px]
                         bg-[rgba(16,16,18,0.88)] backdrop-blur-[5px]">
        <div className="mx-auto h-full max-w-[1440px]
                        flex items-center
                        px-4 py-5 gap-[63px]
                        lg:px-[120px] lg:py-0 lg:gap-[120px]">

          {/* Logo — Figma: 140.63×36 */}
          <Link href="/" className="shrink-0">
            <span className="font-display font-semibold
                             text-2xl leading-8 tracking-[0.48px] text-text">
              OBSCURA<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Nav — Figma: flex-grow 1, list padding 24px 0, item gap 16px */}
          <nav className="hidden lg:flex items-center gap-4 flex-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-[6px]
                           font-sans font-medium text-sm leading-[22px]
                           text-placeholder
                           hover:text-text hover:py-[8px]
                           transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster — Figma: gap 34px (lg), items fill 58px height */}
          <div className="flex items-center gap-6 lg:gap-[34px] ml-auto lg:ml-0">
            <IconButton label="Search" className="hidden lg:inline-flex">
              <Search size={19} strokeWidth={1.27} />
            </IconButton>

            <IconButton label="Cart" className="relative">
              <ShoppingBag size={19} strokeWidth={1.23} />
              <CartBadge count={cartCount} />
            </IconButton>

            {isSignedIn ? (
              <IconButton label="Account" className="hidden lg:inline-flex">
                <User size={19} strokeWidth={1.27} />
              </IconButton>
            ) : (
              <Link
                href="/sign-in"
                className="hidden lg:inline-flex items-center justify-center gap-[10px]
                           bg-primary border border-primary rounded-[2px]
                           px-[46px] py-[18px]
                           font-mono text-sm leading-[22px] uppercase
                           tracking-[0.787px] text-text
                           hover:bg-primary-hover hover:border-divider
                           transition-colors duration-150"
              >
                Sign in
              </Link>
            )}

            <IconButton
              label="Open menu"
              className="lg:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={16} strokeWidth={1} />
            </IconButton>
          </div>
        </div>
      </header>

      {menuOpen && (
        <MobileMenu
          onClose={() => setMenuOpen(false)}
          isSignedIn={isSignedIn}
        />
      )}
    </>
  );
}

function MobileMenu({
  onClose,
  isSignedIn,
}: {
  onClose: () => void;
  isSignedIn: boolean;
}) {
  return (
    <div className="fixed inset-0 z-[60] bg-bg lg:hidden flex flex-col">
      <div className="flex justify-end p-4">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="w-9 h-9 flex items-center justify-center text-text
                     hover:text-primary transition-colors
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-primary rounded-[2px]"
        >
          <X size={20} strokeWidth={1.25} />
        </button>
      </div>

      <nav className="flex-1 flex flex-col items-center justify-center gap-10 px-6">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-display text-2xl text-text hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="p-6">
        <Link
          href={isSignedIn ? "/account" : "/sign-in"}
          onClick={onClose}
          className="flex items-center justify-center w-full
                     bg-primary rounded-[2px] py-[18px]
                     font-mono text-sm uppercase tracking-[0.787px] text-text
                     hover:bg-primary-hover transition-colors duration-150"
        >
          {isSignedIn ? "My account" : "Sign in"}
        </Link>
      </div>
    </div>
  );
}