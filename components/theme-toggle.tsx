"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  // mounted olmadan tema bilinmez; SSR ile uyumlu nötr etiket kullan
  const label = !mounted
    ? "Temayı değiştir"
    : isDark
      ? "Açık temaya geç"
      : "Koyu temaya geç";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground/80 transition-colors hover:bg-foreground/10 hover:text-foreground",
        className,
      )}
    >
      {/* mounted olana kadar boş bırak — hydration uyumsuzluğunu önler */}
      {mounted ? (
        isDark ? (
          <Sun className="size-5" />
        ) : (
          <Moon className="size-5" />
        )
      ) : (
        <span className="size-5" />
      )}
    </button>
  );
}
