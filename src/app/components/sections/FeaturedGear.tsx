// src/components/sections/FeaturedGear.tsx
"use client";

import Link from "next/link";
import { Eyebrow } from "../../components/ui";
import { ProductCard } from "../../components/ui/ProductCard";
import { featuredProducts } from "../../lib/data";

interface FeaturedGearProps {
  quantities: Record<string, number>;
  onAdd: (id: string) => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
}

export function FeaturedGear({
  quantities,
  onAdd,
  onIncrement,
  onDecrement,
}: FeaturedGearProps) {
  return (
    <section className="bg-surface border-y border-divider
                        py-16 lg:py-[105px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        {/* Header — stacks on mobile, side-by-side from lg up */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between
                        gap-6 mb-8 lg:mb-[53px]">
          <div className="flex flex-col gap-[5px]">
            <Eyebrow>Editor&apos;s picks</Eyebrow>
            <h2 className="font-display font-normal text-text
                           text-[28px] leading-[1.2] tracking-[-0.416px]
                           sm:text-[32px]
                           lg:text-[40px] lg:leading-[48px]">
              Featured gear.
            </h2>
          </div>

          {/* Hidden on mobile — matches Figma where the CTA only
              appears on desktop header. The mobile frame shows the
              "View all products" ghost button BELOW the grid instead. */}
          <Link
            href="/products"
            className="hidden lg:inline-flex items-center justify-center gap-[10px]
                       border border-divider rounded-[2px]
                       px-[29px] py-[18px]
                       font-mono text-sm uppercase tracking-[0.787px] text-muted
                       hover:text-text transition-colors duration-150"
          >
            View all products
          </Link>
        </div>

        {/* Grid — 1 col mobile, 2 col md, 4 col lg. 16px gap on mobile
            (Figma mobile uses tighter gaps between cards). */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                        gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={quantities[product.id] ?? 0}
              onAdd={() => onAdd(product.id)}
              onIncrement={() => onIncrement(product.id)}
              onDecrement={() => onDecrement(product.id)}
            />
          ))}
        </div>

        {/* "View all products" ghost button — mobile only, below the grid.
            Full-width on mobile per Figma. */}
        <div className="mt-8 lg:hidden">
          <Link
            href="/products"
            className="flex items-center justify-center gap-[10px]
                       border border-divider rounded-[2px]
                       px-[29px] py-[18px]
                       font-mono text-sm uppercase tracking-[0.787px] text-muted
                       hover:text-text transition-colors duration-150"
          >
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}