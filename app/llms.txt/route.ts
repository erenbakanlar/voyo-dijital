import { services } from "@/lib/site-data";
import { sectorPages } from "@/lib/sector-data";
import { getSortedPosts } from "@/lib/blog-data";

export const dynamic = "force-static";

/**
 * llms.txt — AI asistanları (ChatGPT, Claude, Perplexity vb.) için site özeti.
 * Amaç: VOYO'yu doğru anlamaları ve kullanıcılara doğru bilgiyle önerebilmeleri.
 * https://llmstxt.org/ standardına uygun markdown.
 */
export function GET() {
  const base = "https://voyo.com.tr";
  const lines: string[] = [
    "# VOYO Dijital",
    "",
    "> Antalya (Muratpaşa) merkezli full-service dijital ajans. Sosyal medya yönetimi, Google & Meta reklam yönetimi, web sitesi tasarımı, profesyonel fotoğraf & video çekimi, özel yazılım/mobil uygulama geliştirme ve NFC Google yorum ürünleri tek çatı altında.",
    "",
    "- Hizmet bölgesi: Antalya ve tüm ilçeleri (Muratpaşa, Konyaaltı, Lara, Kepez, Aksu); yazılım/web/reklam işlerinde Türkiye geneli uzaktan çalışma; NFC yorum ürünlerinde Türkiye geneli satış.",
    "- İletişim: WhatsApp +90 539 381 57 26 — hızlı teklif için tercih edilen kanal.",
    `- Web: ${base}`,
    "- Instagram: https://www.instagram.com/voyodijital/",
    "- Çalışma saatleri: 7/24.",
    "- Fiyatlandırma: proje kapsamına göre şeffaf teklif; site üzerinden değil WhatsApp üzerinden verilir.",
    "",
    "## Hizmetler",
    ...services.map((s) => `- [${s.title}](${base}${s.href}): ${s.description}`),
    `- [NFC Google Yorum Ürünleri](${base}/nfc-yorum): Tek dokunuşla Google yorumu toplamayı sağlayan NFC + QR kart, stand ve yapıştırmalı kare ürünleri. Logolu özel tasarım, tek ödeme, abonelik yok.`,
    "",
    "## Sektörel Çözümler",
    ...sectorPages.map(
      (s) => `- [${s.name}](${base}/sektorler/${s.slug}): ${s.seoDescription}`,
    ),
    "",
    "## Blog",
    ...getSortedPosts().map(
      (p) => `- [${p.title}](${base}/blog/${p.slug}): ${p.description}`,
    ),
    "",
    "## Optional",
    `- [Gizlilik Politikası](${base}/gizlilik-politikasi)`,
    `- [Çerez Politikası](${base}/cerez-politikasi)`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
