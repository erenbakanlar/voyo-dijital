import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NfcLanding } from "@/components/nfc-landing";
import { nfcProducts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "NFC Google Yorum Kartı & Standı | VOYO Dijital" },
  description:
    "Tek dokunuşla Google yorumlarınızı artırın. NFC & QR Google yorum kartı ve standı. Logolu özel tasarım, tek ödeme, abonelik yok. Fiyat için WhatsApp.",
  keywords: [
    "NFC google yorum kartı",
    "google yorum kartı",
    "google yorum standı",
    "google yorum kartı fiyat",
    "google yorum kartı antalya",
    "logolu google yorum kartı",
    "nfc yorum standı",
  ],
  alternates: { canonical: "/nfc-yorum" },
  openGraph: {
    title: "NFC Google Yorum Kartı & Standı | VOYO Dijital",
    description:
      "Tek dokunuşla Google yorumlarınızı artıran NFC stand, kart ve yapıştırmalı kare çözümleri. Logolu özel tasarım, tek ödeme.",
    url: "/nfc-yorum",
  },
};

export default function NfcYorumPage() {
  const baseUrl = "https://voyo.com.tr";
  const productsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NFC Google Yorum Ürünleri",
    itemListElement: nfcProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.desc,
        category: "NFC Google Yorum Ürünü",
        brand: { "@type": "Brand", name: "VOYO Dijital" },
        url: `${baseUrl}/nfc-yorum`,
      },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "NFC Google Yorum",
        item: `${baseUrl}/nfc-yorum`,
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main id="main">
        <NfcLanding />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
