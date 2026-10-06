// src/components/ui/Button.tsx
import { cn } from "../../lib/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "ghost" | "nav";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const base =
  "inline-flex items-center justify-center gap-[10px] " +
  "transition-colors duration-150 focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary border border-primary rounded-[2px] px-[46px] py-[18px] " +
    "font-mono text-sm uppercase tracking-[0.787px] text-text " +
    "hover:bg-primary-hover hover:border-divider",
  ghost:
    "border border-divider rounded-[2px] px-[29px] py-[18px] " +
    "font-mono text-sm uppercase tracking-[0.787px] text-muted " +
    "hover:text-text",
  nav:
    "px-4 py-[6px] rounded-none " +
    "font-sans font-medium text-sm text-placeholder " +
    "hover:text-text hover:py-[8px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  )
);
Button.displayName = "Button";