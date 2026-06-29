"use client";

import { useEffect } from "react";

/**
 * GA4 dönüşüm/etkinlik takibi.
 * Satış sitede değil; site WhatsApp / telefon / Instagram'a yönlendiriyor.
 * Bu yüzden "lead" sinyali = bu tıklamalardır.
 *
 * Tek bir delege edilmiş tıklama dinleyicisi tüm CTA'ları yakalar (her butonu
 * ayrı ayrı değiştirmeye gerek yok). gtag yoksa (dev/production-dışı) sessizce
 * no-op çalışır.
 *
 * - WhatsApp / telefon tıklaması -> "generate_lead" (GA4'ün lead-gen standardı)
 * - Instagram tıklaması -> "instagram_click"
 */
export function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      const anchor = el?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      const w = window as typeof window & {
        gtag?: (...args: unknown[]) => void;
      };
      if (typeof w.gtag !== "function") return;

      if (/wa\.me|api\.whatsapp|whatsapp\.com/i.test(href)) {
        w.gtag("event", "generate_lead", {
          method: "whatsapp",
          link_url: href,
        });
      } else if (href.startsWith("tel:")) {
        w.gtag("event", "generate_lead", { method: "phone", link_url: href });
      } else if (/instagram\.com/i.test(href)) {
        w.gtag("event", "instagram_click", { link_url: href });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
