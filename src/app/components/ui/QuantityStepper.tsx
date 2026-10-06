// src/components/ui/QuantityStepper.tsx
"use client";

import { cn } from "../../lib/cn";


export function QuantityStepper({
  value,
  onDecrement,
  onIncrement,
  className,
}: {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-[10px] p-[9px]",
        "border border-divider rounded-[8px]",
        className
      )}
    >
      <button
        type="button"
        onClick={onDecrement}
        aria-label="Decrease quantity"
        className="w-5 h-5 rounded-[2px] bg-placeholder text-text
                   flex items-center justify-center text-sm font-medium
                   hover:bg-muted transition-colors"
      >
        −
      </button>
      <span className="font-sans font-medium text-sm text-text min-w-[7px] text-center">
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        aria-label="Increase quantity"
        className="w-5 h-5 rounded-[2px] bg-primary text-text
                   flex items-center justify-center text-sm font-medium
                   hover:bg-primary-hover transition-colors"
      >
        +
      </button>
    </div>
  );
}