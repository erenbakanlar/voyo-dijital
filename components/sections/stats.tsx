"use client";

import * as React from "react";
import { stats, type Stat } from "@/lib/site-data";

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!start) return;

    // Hareketi azalt tercihinde direkt son değere atla
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    let raf = 0;
    let startTime: number | null = null;
    const easeOutExpo = (t: number) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.round(easeOutExpo(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);

  return value;
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.value, start);
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex items-baseline text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
        <span className="tabular-nums">{value}</span>
        <span className="text-voyo-orange">{stat.suffix}</span>
      </div>
      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}

export function Stats() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setStart(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative border-y border-foreground/10 bg-muted/40">
      <div
        ref={ref}
        className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-y-12 px-5 py-16 sm:px-8 lg:grid-cols-4 lg:gap-0"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={
              i < stats.length - 1
                ? "lg:border-r lg:border-foreground/10"
                : undefined
            }
          >
            <StatItem stat={stat} start={start} />
          </div>
        ))}
      </div>
    </section>
  );
}
