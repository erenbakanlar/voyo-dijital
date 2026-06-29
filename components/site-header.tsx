"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, site, whatsappWithMessage } from "@/lib/site-data";
import { BrandMark } from "@/components/brand-mark";
import { CtaLink } from "@/components/cta-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { ContactLink } from "@/components/contact-link";
import { encodeContact } from "@/lib/contact";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  // "Teklif Al" → numaraya WhatsApp'tan hazır mesajla yönlendirir
  // (iletişim bölümündeki "Ücretsiz Teklif Al" ile aynı davranış)
  const teklifHref = whatsappWithMessage(
    "Merhaba, paketleriniz hakkında bilgi alabilir miyim?",
  );

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobil menü açıkken arka plan kaymasını engelle
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Logoya tıklama: anasayfadaysak yumuşakça en üste kaydır; başka bir
  // sayfadaysak Link "/" rotasına gider ve Next otomatik en üste taşır.
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-foreground/10 glass-surface"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-20">
        <Link
          href="/"
          aria-label="VOYO anasayfa"
          className="shrink-0"
          onClick={handleLogoClick}
        >
          <BrandMark className="h-9 lg:h-10" />
        </Link>

        {/* Masaüstü navigasyon */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <CtaLink href={teklifHref} size="md" external>
            Teklif Al
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </CtaLink>
        </div>

        {/* Mobil: tema butonu + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobil-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobil menü paneli */}
      <div
        id="mobil-menu"
        inert={!open}
        className={cn(
          "border-t border-foreground/10 glass-surface transition-[max-height,opacity] duration-300 lg:hidden",
          open
            ? "max-h-[calc(100svh-4rem)] overflow-y-auto opacity-100"
            : "max-h-0 overflow-hidden opacity-0",
        )}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-5 sm:px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <CtaLink href={teklifHref} size="lg" external className="mt-3">
            Teklif Al
            <ArrowUpRight className="size-4" />
          </CtaLink>
          <ContactLink
            encodedHref={encodeContact(site.phoneHref)}
            encodedLabel={encodeContact(site.phone)}
            className="mt-1 block px-4 py-3 text-center text-sm text-foreground/60"
          />
        </nav>
      </div>
    </header>
  );
}
