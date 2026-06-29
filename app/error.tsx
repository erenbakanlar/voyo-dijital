"use client";

import * as React from "react";
import Link from "next/link";
import { RotateCcw, Home } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Hata izleme entegrasyonu (Sentry vb.) buraya eklenebilir
    console.error(error);
  }, [error]);

  return (
    <main
      id="main"
      className="flex min-h-[80svh] flex-col items-center justify-center px-5 py-24 text-center"
    >
      <BrandMark className="h-9 opacity-90" />
      <h1 className="mt-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Bir şeyler ters gitti
      </h1>
      <p className="mt-3 max-w-md text-pretty text-muted-foreground">
        Beklenmedik bir hata oluştu. Tekrar deneyebilir ya da anasayfaya
        dönebilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-voyo-orange px-6 text-sm font-semibold text-voyo-dark transition-colors hover:bg-voyo-orange-300"
        >
          <RotateCcw className="size-4" />
          Tekrar dene
        </button>
        <Link
          href="/"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-foreground/15 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
        >
          <Home className="size-4" />
          Anasayfa
        </Link>
      </div>
    </main>
  );
}
