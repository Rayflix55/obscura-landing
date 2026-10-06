// src/components/ui/Badge.tsx
import { cn } from "../../lib/cn";

export type BadgeKind = "NEW" | "REFURBISHED" | "LIMITED" | "BESTSELLER";

export function Badge({
  kind,
  className,
}: {
  kind: BadgeKind;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "px-2 py-1 rounded-[2px]",
        "bg-[rgba(16,16,18,0.85)] border border-[rgba(26,116,49,0.45)]",
        "font-mono text-[10.4px] leading-4 tracking-[0.624px] uppercase text-text",
        className
      )}
    >
      {kind}
    </span>
  );
}