// src/components/ui/Eyebrow.tsx
import { cn } from "../../lib/cn";


export function Eyebrow({
  children,
  centered,
  className,
}: {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-[7px]",
        centered && "justify-center",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-text shrink-0" />
      <span className="font-mono text-xs uppercase tracking-[1.613px] text-text">
        {children}
      </span>
    </div>
  );
}