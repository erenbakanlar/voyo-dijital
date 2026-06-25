"use client";

import * as React from "react";
import { CtaLink } from "@/components/cta-link";
import { decodeContact } from "@/lib/contact";

/**
 * Bot-korumalı iletişim bağlantısı. `encodedHref` (örn. base64 "tel:+90…" /
 * "mailto:…") ve `encodedLabel` (görünür metin) base64 olarak gelir; gerçek
 * değer yalnızca tarayıcıda, mount sonrası çözülür. SSR HTML'inde düz metin
 * telefon/e-posta/`tel:`/`mailto:` bulunmaz — yalnızca yer tutucu görünür.
 */
export function ContactLink({
  encodedHref,
  encodedLabel,
  className,
  placeholder = "•••• ••• •• ••",
  children,
}: {
  encodedHref: string;
  encodedLabel: string;
  className?: string;
  placeholder?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const [data, setData] = React.useState<{
    href: string;
    label: string;
  } | null>(null);

  React.useEffect(() => {
    setData({
      href: decodeContact(encodedHref),
      label: decodeContact(encodedLabel),
    });
  }, [encodedHref, encodedLabel]);

  if (!data) {
    return (
      <span className={className} aria-hidden="true">
        {children}
        {placeholder}
      </span>
    );
  }

  return (
    <a href={data.href} className={className}>
      {children}
      {data.label}
    </a>
  );
}

/**
 * `CtaLink` butonunun bot-korumalı sürümü. Mount öncesi (ve botlar için)
 * `fallbackHref`'e (zararsız, örn. "#iletisim") işaret eder; mount sonrası
 * gerçek `tel:`/`mailto:` hedefine geçer. `encodedLabel` verilirse görünür
 * metin (örn. telefon numarası) da yalnızca tarayıcıda çözülür.
 */
export function ObfuscatedCtaButton({
  encodedHref,
  encodedLabel,
  fallbackHref = "#iletisim",
  variant,
  size,
  external,
  className,
  children,
}: {
  encodedHref: string;
  encodedLabel?: string;
  fallbackHref?: string;
  variant?: React.ComponentProps<typeof CtaLink>["variant"];
  size?: React.ComponentProps<typeof CtaLink>["size"];
  external?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const [href, setHref] = React.useState(fallbackHref);
  const [label, setLabel] = React.useState<string | null>(null);

  React.useEffect(() => {
    setHref(decodeContact(encodedHref));
    if (encodedLabel) setLabel(decodeContact(encodedLabel));
  }, [encodedHref, encodedLabel]);

  return (
    <CtaLink
      href={href}
      variant={variant}
      size={size}
      external={external}
      className={className}
    >
      {children}
      {encodedLabel ? (label ?? "•••• ••• •• ••") : null}
    </CtaLink>
  );
}
