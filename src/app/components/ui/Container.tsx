// src/components/ui/Container.tsx
import { cn } from "../../lib/cn";


export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10 lg:px-0",
        size === "default" ? "max-w-[1200px]" : "max-w-[1280px]",
        className
      )}
    >
      {children}
    </div>
  );
}