import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-voyo-orange/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const sizes = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-[0.95rem]",
} as const;

const variants = {
  primary:
    "bg-voyo-orange text-voyo-dark hover:bg-voyo-orange-300 shadow-[0_10px_34px_-10px_rgba(245,166,35,0.65)] hover:-translate-y-0.5",
  secondary:
    "border border-foreground/15 bg-foreground/[0.04] text-foreground backdrop-blur hover:bg-foreground/[0.09] hover:border-foreground/30",
  white:
    "bg-foreground text-background hover:bg-foreground/90 hover:-translate-y-0.5 shadow-[0_10px_34px_-12px_rgba(0,0,0,0.25)]",
} as const;

type CtaLinkProps = {
  href: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function CtaLink({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
  children,
}: CtaLinkProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
