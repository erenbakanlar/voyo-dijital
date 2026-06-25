import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingSocial } from "@/components/floating-social";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voyoajans.com"),
  title: {
    default:
      "VOYO | Antalya Dijital Ajans — Sosyal Medya, Reklam, Web Tasarım & Çekim",
    template: "%s | VOYO",
  },
  description:
    "VOYO, Antalya Muratpaşa merkezli full-service dijital ajans. Sosyal medya yönetimi, Meta & Google reklam, web tasarımı, profesyonel çekim ve yazılım çözümleriyle markanızı sıfırdan zirveye taşıyoruz.",
  keywords: [
    "Antalya dijital ajans",
    "Antalya sosyal medya yönetimi",
    "Antalya reklam ajansı",
    "Antalya web tasarım",
    "Antalya profesyonel fotoğraf çekim",
    "Antalya yazılım çözümleri",
    "Muratpaşa dijital pazarlama",
    "VOYO",
  ],
  authors: [{ name: "VOYO" }],
  creator: "VOYO",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://voyoajans.com",
    siteName: "VOYO",
    title:
      "VOYO | Antalya Dijital Ajans — Sıfırdan Zirveye. Tek Çatıda.",
    description:
      "Sosyal medya, reklam, web tasarımı, profesyonel çekim ve yazılım çözümlerini tek bir ekipten alın. VOYO markanızın dijital dönüşümünü hızlandırır.",
  },
  manifest: "/site.webmanifest",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
          <FloatingSocial />
        </ThemeProvider>
      </body>
    </html>
  );
}
