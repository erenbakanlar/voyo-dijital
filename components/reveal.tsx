"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = React.HTMLAttributes<HTMLElement> & {
  /** Render edilecek HTML etiketi (varsayılan: div) */
  as?: React.ElementType;
  /** Görünür olduktan sonra animasyon gecikmesi (ms) — stagger için */
  delay?: number;
  /** true ise yalnızca bir kez tetiklenir (varsayılan), false ise her görünürlükte */
  once?: boolean;
};

/**
 * Intersection Observer ile scroll-triggered fade/slide-up animasyonu sağlar.
 * `data-reveal` + `.is-visible` stilleri globals.css içinde tanımlıdır.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  once = true,
  className,
  style,
  children,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // IntersectionObserver desteklenmiyorsa içeriği direkt göster
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={cn(visible && "is-visible", className)}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      {...props}
    >
      {children}
    </Tag>
  );
}
