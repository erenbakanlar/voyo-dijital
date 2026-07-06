import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Herkese açık — arama motorları
      { userAgent: "*", allow: "/" },
      // AI arama/asistan botlarına açık izin (GEO — ChatGPT/Claude/Perplexity
      // gibi asistanların siteyi okuyup önerebilmesi için)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: "https://voyo.com.tr/sitemap.xml",
    host: "https://voyo.com.tr",
  };
}
