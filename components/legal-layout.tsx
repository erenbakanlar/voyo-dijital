import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/**
 * Yasal metin sayfaları (gizlilik, çerez vb.) için ortak düzen.
 * Header + okunabilir prose içerik + footer. İçerik basit semantik HTML
 * olarak verilir; başlık/bağlantı/liste stilleri burada uygulanır.
 */
export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="mx-auto w-full max-w-3xl px-5 pb-24 pt-28 sm:px-8 lg:pt-36"
      >
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Son güncelleme: {updated}
        </p>
        <div className="mt-10 space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground [&_a]:text-voyo-orange-ink [&_a]:underline [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
