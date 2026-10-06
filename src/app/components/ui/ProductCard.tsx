// src/components/ui/ProductCard.tsx
"use client";

import Image from "next/image";
import { cn } from "../../lib/cn";
import { Badge } from "./Badge";
import { QuantityStepper } from "./QuantityStepper";
import { formatPrice, type Product } from "../../lib/data";

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  className?: string;
}

export function ProductCard({
  product,
  quantity,
  onAdd,
  onIncrement,
  onDecrement,
  className,
}: ProductCardProps) {
  const isAdded = quantity > 0;

  return (
    <article
      className={cn(
        "flex flex-col",
        "bg-surface border border-divider rounded-[2px]",
        "pb-4",
        "transition-[min-height] duration-200",
        className
      )}
    >
      {/* Image — 276:246 aspect maintained at all widths */}
      <div className="relative w-full aspect-[276/246] bg-surface-alt overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 278px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />

        {product.badge && (
          <div className="absolute top-3 left-4 sm:top-4 sm:left-6">
            <Badge kind={product.badge} />
          </div>
        )}
      </div>

      {/* Content — 16px horizontal padding on mobile, same from sm up */}
      <div className="flex flex-col gap-4 px-4 mt-4">
        {/* Title + specs */}
        <div className="flex flex-col gap-[10px]">
          <h3 className="font-display font-normal text-text
                         text-base leading-6 tracking-[-0.168px]">
            {product.name}
          </h3>
          <p className="font-mono text-xs leading-5 uppercase tracking-[1.613px] text-muted">
            {product.specs}
          </p>
        </div>

        {/* Price + action row.
            min-w-0 on the price so it can shrink if needed.
            shrink-0 on the add button so it never compresses. */}
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-sm leading-[22px] uppercase
                           tracking-[0.787px] text-text min-w-0 truncate">
            {formatPrice(product.price)}
          </span>

          {isAdded ? (
            <QuantityStepper
              value={quantity}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              className="shrink-0"
            />
          ) : (
            <button
              type="button"
              onClick={onAdd}
              aria-label={`Add ${product.name} to cart`}
              className="w-[34px] h-[34px] shrink-0
                         border border-divider rounded-[8px]
                         flex items-center justify-center
                         text-text
                         hover:bg-surface-alt hover:border-text/30
                         transition-colors duration-150
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-primary focus-visible:ring-offset-2
                         focus-visible:ring-offset-surface"
            >
              <span className="text-base leading-none">+</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}