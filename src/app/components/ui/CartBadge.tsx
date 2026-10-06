// src/components/ui/CartBadge.tsx
import { cn } from "../../lib/cn";


export function CartBadge({
  count,
  className,
}: {
  count: number;
  className?: string;
}) {
  if (count <= 0) return null;

  return (
    <span
      className={cn(
        "absolute -top-2 -right-1",
        "min-w-4 h-4 px-[3px] rounded-full",
        "bg-primary text-bg",
        "font-mono text-[10.4px] leading-none font-normal",
        "flex items-center justify-center",
        className
      )}
      aria-label={`${count} item${count === 1 ? "" : "s"} in cart`}
    >
      {count}
    </span>
  );
}