import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingSocial } from "@/components/floating-social";
import { Analytics } from "@/components/analytics";
import { AnalyticsEvents } from "@/components/analytics-events";
import { services } from "@/lib/site-data";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voyo.com.tr"),
  title: {
    default: "Antalya Dijital Ajans | VOYO Dijital",
    template: "%s | VOYO",
  },
  description:
    "Antalya Muratpaşa merkezli full-service dijital ajans. Sosyal medya, reklam, web tasarım, yazılım, foto-video ve NFC Google yorum çözümleri tek elden.",
  keywords: [
    "Antalya dijital ajans",
    "Antalya dijital pazarlama ajansı",
    "Muratpaşa dijital ajans",
    "Antalya sosyal medya yönetimi",
    "Antalya Google Ads ajansı",
    "Antalya web tasarım",
    "Antalya ürün fotoğraf çekimi",
    "Antalya yazılım firması",
    "NFC Google yorum kartı",
    "full service dijital ajans",
    "VOYO Dijital",
  ],
  authors: [{ name: "VOYO" }],
  creator: "VOYO",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://voyo.com.tr",
    siteName: "VOYO",
    title: "Antalya Dijital Ajans — VOYO Dijital | Sıfırdan Zirveye",
    description:
      "Sosyal medya, reklam, web tasarımı, profesyonel çekim, yazılım ve NFC Google yorum çözümlerini tek ekipten alın. VOYO dijital dönüşümünüzü hızlandırır.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOYO | Antalya Dijital Ajans — Sıfırdan Zirveye. Tek Çatıda.",
    description:
      "Sosyal medya, reklam, web tasarımı, profesyonel çekim ve yazılım çözümlerini tek bir ekipten alın.",
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0d0f1a",
  width: "device-width",
  initialScale: 1,
};

// Yerel işletme yapısal verisi (ProfessionalService).
// Telefon/e-posta bilinçli olarak EKLENMEDİ — bot gizleme kararıyla tutarlı;
// bu bilgiler Google Business Profile üzerinden verilmeli.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "VOYO Dijital",
  description:
    "Antalya Muratpaşa merkezli full-service dijital ajans: sosyal medya yönetimi, Meta & Google reklam, web tasarımı, fotoğraf & video çekim ve yazılım çözümleri.",
  url: "https://voyo.com.tr",
  image: "https://voyo.com.tr/web-app-manifest-512x512.png",
  areaServed: [
    { "@type": "City", name: "Antalya" },
    { "@type": "AdministrativeArea", name: "Muratpaşa" },
    { "@type": "AdministrativeArea", name: "Konyaaltı" },
    { "@type": "AdministrativeArea", name: "Kepez" },
    { "@type": "AdministrativeArea", name: "Lara" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Muratpaşa",
    addressRegion: "Antalya",
    addressCountry: "TR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: ["https://www.instagram.com/voyodijital/"],
  knowsAbout: [
    "Sosyal medya yönetimi",
    "Dijital reklam",
    "Web tasarımı",
    "Fotoğraf ve video çekim",
    "Yazılım çözümleri",
    "NFC Google yorum çözümleri",
    "Yerel SEO",
  ],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      url: `https://voyo.com.tr${s.href}`,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-voyo-orange focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-voyo-dark"
        >
          Ana içeriğe atla
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
          <FloatingSocial />
          <AnalyticsEvents />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
