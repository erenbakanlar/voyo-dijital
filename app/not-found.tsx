import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandMark } from "@/components/brand-mark";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="flex min-h-[72svh] flex-col items-center justify-center px-5 py-32 text-center"
      >
        <BrandMark className="h-10 opacity-90" />
        <p className="mt-10 text-7xl font-extrabold tracking-tight text-voyo-orange-ink sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Sayfa bulunamadı
        </h1>
        <p className="mt-3 max-w-md text-pretty text-muted-foreground">
          Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.
          Anasayfadan devam edebilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-voyo-orange px-6 text-sm font-semibold text-voyo-dark transition-colors hover:bg-voyo-orange-300"
          >
            <Home className="size-4" />
            Anasayfa
          </Link>
          <Link
            href="/#hizmetler"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-foreground/15 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
          >
            Hizmetler
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
