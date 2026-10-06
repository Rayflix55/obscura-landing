// src/components/ui/CategoryCard.tsx
import Image from "next/image";
import Link from "next/link";
import { cn } from "../../lib/cn";
import type { Category } from "../../lib/data";

export function CategoryCard({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  return (
    <Link
      href={category.href}
      className={cn(
        "group relative block overflow-hidden",
        "border border-divider rounded-[2px]",
        "aspect-[381/460]",
        className
      )}
    >
      {/* Background image */}
      <Image
        src={category.image}
        alt={category.title}
        fill
        sizes="(min-width: 1024px) 381px, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 ease-out
                   group-hover:scale-[1.03]"
      />

      {/* Gradient overlay (matches Figma exactly) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), " +
            "linear-gradient(0deg, rgba(10,10,11,0.92) 10%, rgba(10,10,11,0.15) 55%, rgba(10,10,11,0.35) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col gap-[14px]">
        <div className="flex items-center gap-[7px]">
          <span className="w-1.5 h-1.5 rounded-full bg-text shrink-0" />
          <span className="font-mono text-[11.5px] leading-[17px] uppercase tracking-[1.613px] text-text">
            {category.index} · {category.label}
          </span>
        </div>

        <h3 className="font-display font-normal text-2xl leading-9 tracking-[-0.24px] text-text">
          {category.title}
        </h3>

        <span className="font-mono text-[12.5px] leading-[19px] tracking-[0.624px] text-text
                         inline-flex items-center gap-1
                         transition-transform duration-200
                         group-hover:translate-x-1">
          {category.ctaLabel} →
        </span>
      </div>
    </Link>
  );
}