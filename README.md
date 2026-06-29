# VOYO Dijital — Web Sitesi

Antalya / Muratpaşa merkezli full-service dijital ajans **VOYO Dijital**'in kurumsal tanıtım sitesi.

## Yığın

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript
- Tailwind CSS v4 + shadcn/ui
- next-themes (koyu/açık tema)
- Inter (`next/font`)

## Geliştirme

```bash
npm install
npm run dev
```

Ardından tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

## Komutlar

- `npm run dev` — geliştirme sunucusu
- `npm run build` — üretim derlemesi
- `npm run start` — üretim sunucusu
- `npm run lint` — ESLint

## Yapı

- `app/` — App Router sayfaları (`/`, `/hizmetler/[slug]`), `sitemap.ts`, `robots.ts`, favicon/manifest
- `components/` — UI ve bölüm (section) bileşenleri
- `lib/site-data.ts` — tüm site içeriği (hizmetler, ekip, referanslar, iletişim)
