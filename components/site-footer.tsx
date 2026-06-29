import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { InstagramIcon, WhatsappIcon } from "@/components/icons/social";
import { navLinks, site } from "@/lib/site-data";
import { BrandMark } from "@/components/brand-mark";
import { ContactLink } from "@/components/contact-link";
import { encodeContact } from "@/lib/contact";

const socialLinks = [
  { label: "Instagram", href: site.socials.instagram, icon: InstagramIcon },
  { label: "WhatsApp", href: site.socials.whatsapp, icon: WhatsappIcon },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-foreground/10 bg-surface-sunken">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:py-20">
        {/* Sol: Logo + açıklama + sosyal */}
        <div className="flex flex-col gap-5">
          <BrandMark showTagline className="h-12" />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Antalya merkezli full-service dijital ajans. Tek çatıda, sıfırdan
            zirveye.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-voyo-orange/40 hover:bg-voyo-orange/10 hover:text-voyo-orange"
              >
                <s.icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Orta: Hızlı linkler */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
            Hızlı Linkler
          </h3>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sağ: İletişim */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
            İletişim
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm text-muted-foreground">
            <li>
              <ContactLink
                encodedHref={encodeContact(site.phoneHref)}
                encodedLabel={encodeContact(site.phone)}
                className="group inline-flex items-center gap-3 transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-voyo-orange" />
              </ContactLink>
            </li>
            <li>
              <ContactLink
                encodedHref={encodeContact(`mailto:${site.email}`)}
                encodedLabel={encodeContact(site.email)}
                placeholder="••••••@••••••"
                className="group inline-flex items-center gap-3 break-all transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-voyo-orange" />
              </ContactLink>
            </li>
            <li className="inline-flex items-center gap-3">
              <MapPin className="size-4 text-voyo-orange" />
              {site.location}
            </li>
            <li className="inline-flex items-center gap-3">
              <Clock className="size-4 text-voyo-orange" />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-foreground/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} VOYO Dijital — Tüm hakları saklıdır.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <Link
              href="/gizlilik-politikasi"
              className="transition-colors hover:text-foreground"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/cerez-politikasi"
              className="transition-colors hover:text-foreground"
            >
              Çerez Politikası
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
