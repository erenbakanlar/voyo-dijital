import {
  BarChart3,
  Camera,
  Code2,
  CreditCard,
  Nfc,
  Sticker,
  Globe2,
  Headphones,
  LayoutGrid,
  MonitorSmartphone,
  Rocket,
  Share2,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "VOYO",
  slogan: "Tek Çatı Altında Sıfırdan Zirveye.",
  phone: "0539 381 57 26",
  phoneHref: "tel:+905393815726",
  whatsappHref:
    "https://wa.me/905393815726?text=Merhaba%20VOYO,%20bir%20teklif%20almak%20istiyorum.",
  email: "info@voyo.com.tr",
  location: "Antalya, Muratpaşa",
  hours: "Pazartesi–Cuma: 09:00–18:00",
  socials: {
    instagram: "https://www.instagram.com/voyodijital/",
    whatsapp:
      "https://wa.me/905393815726?text=Merhaba%20VOYO,%20bir%20teklif%20almak%20istiyorum.",
  },
};

/** Verilen serbest mesajla ön-doldurulmuş WhatsApp linki üretir */
export function whatsappWithMessage(text: string) {
  return `https://wa.me/905393815726?text=${encodeURIComponent(text)}`;
}

/** Belirli bir hizmet için ön-doldurulmuş WhatsApp linki üretir */
export function whatsappForService(serviceTitle: string) {
  return whatsappWithMessage(
    `Merhaba VOYO, "${serviceTitle}" hizmeti hakkında bilgi/teklif almak istiyorum.`,
  );
}

export const navLinks = [
  { label: "Anasayfa", href: "/#anasayfa" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Ekip", href: "/#ekip" },
  { label: "NFC Yorum", href: "/nfc-yorum" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/#iletisim" },
];

export type Stat = { value: number; suffix: string; label: string };
export const stats: Stat[] = [
  { value: 100, suffix: "+", label: "Tamamlanan Proje" },
  { value: 50, suffix: "+", label: "Mutlu Müşteri" },
  { value: 4, suffix: "", label: "Alanda Uzman" },
  { value: 5, suffix: "", label: "Hizmet Kategorisi" },
];

export type ProcessStep = { title: string; description: string };

export type ServiceDetail = {
  /** Detay sayfası vurgu başlığı */
  headline: string;
  /** Giriş paragrafları */
  intro: string[];
  /** "Neler Sunuyoruz?" maddeleri */
  features: string[];
  /** Platform/teknoloji/çekim türü etiketlerinin başlığı */
  highlightsLabel: string;
  highlights: string[];
  /** Adım adım iş akışı (opsiyonel) */
  process?: ProcessStep[];
  /** Ek not (örn. çalışma bölgesi) */
  note?: string;
};

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  /** Bu hizmeti veren ekip üyelerinin slug'ları */
  providedBy: string[];
  detail: ServiceDetail;
};

export const services: Service[] = [
  {
    slug: "sosyal-medya-yonetimi",
    icon: Share2,
    title: "Sosyal Medya Yönetimi",
    description:
      "Takipçi kitlesi oluşturur, marka sesini doğru platformda doğru insanlara ulaştırırız. İçerik takvimi, görsel üretimi ve topluluk yönetimi dahil.",
    href: "/hizmetler/sosyal-medya-yonetimi",
    providedBy: ["mehmet-kaya"],
    detail: {
      headline: "Sosyal Medyada Fark Yaratın",
      intro: [
        "Sosyal medya artık bir vitrin değil, bir satış kanalı. VOYO olarak markanızın Instagram, Facebook, TikTok ve LinkedIn gibi platformlarda güçlü, tutarlı ve dönüşüm odaklı bir varlık kurmasını sağlıyoruz.",
        "Sadece paylaşım yapmıyoruz — stratejik içerik planlaması, tasarım, kopywriting ve topluluk yönetimini entegre bir süreçte yönetiyoruz.",
      ],
      features: [
        "Aylık içerik takvimi hazırlama",
        "Grafik tasarım & görsel prodüksiyon",
        "Metin yazarlığı (copywriting) — Türkçe ve İngilizce",
        "Yorum & DM yönetimi (topluluk moderasyonu)",
        "Hashtag ve keşfet stratejisi",
        "Aylık performans raporu",
        "Stories, Reels ve carousel içerik üretimi",
        "Instagram & Facebook mağaza yönetimi (opsiyonel)",
      ],
      highlightsLabel: "Hedef Platformlar",
      highlights: [
        "Instagram",
        "Facebook",
        "TikTok",
        "LinkedIn",
        "Twitter/X",
        "YouTube",
      ],
    },
  },
  {
    slug: "reklam-yonetimi",
    icon: Target,
    title: "Meta & Google Reklam Yönetimi",
    description:
      "Bütçenizi verimli kullanır, hedef kitlenize en doğru zamanda ulaşırız. Facebook, Instagram ve Google Ads kampanyalarını optimize ederek ROI'nizi maksimize ederiz.",
    href: "/hizmetler/reklam-yonetimi",
    providedBy: ["mehmet-kaya"],
    detail: {
      headline: "Bütçeniz Çalışsın, Siz Büyüyün",
      intro: [
        "Her lira önemli. VOYO olarak reklam bütçenizi hedef kitlenize en doğru şekilde yönlendiriyor, kampanyalarınızı sürekli optimize ediyor ve ölçülebilir sonuçlar üretiyoruz.",
        "Meta (Facebook & Instagram) ve Google platformlarında yürütülen kampanyalarımız, müşterilerimizin müşteri kazanım maliyetini düşürürken genel satış hacmini artırıyor.",
      ],
      features: [
        "Meta Ads (Facebook & Instagram) kampanya kurulumu",
        "Google Ads (Arama, Display, Alışveriş, YouTube)",
        "Hedef kitle analizi & segmentasyon",
        "Reklam görseli ve kopya üretimi",
        "A/B testi & optimizasyon",
        "Yeniden pazarlama (retargeting) kampanyaları",
        "Piksel kurulumu & dönüşüm takibi",
        "Haftalık/aylık performans raporlaması",
      ],
      highlightsLabel: "Reklam Platformları",
      highlights: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads"],
      process: [
        {
          title: "Keşif Görüşmesi",
          description: "Hedef ve bütçe belirleme",
        },
        {
          title: "Strateji Kurgusu",
          description: "Hedef kitle, mesaj, kreatif plan",
        },
        {
          title: "Kampanya Kurulumu",
          description: "Hesap, piksel, reklam seti",
        },
        {
          title: "Yayın & Optimizasyon",
          description: "Günlük takip, A/B test",
        },
        {
          title: "Raporlama",
          description: "Şeffaf, anlaşılır sonuç raporu",
        },
      ],
    },
  },
  {
    slug: "web-tasarimi",
    icon: MonitorSmartphone,
    title: "Web Sitesi Tasarımı & Kurulumu",
    description:
      "Modern, hızlı ve mobil uyumlu web siteleri tasarlıyoruz. Kurumsal tanıtım sitesinden e-ticaret platformuna kadar tüm ihtiyaçlarınıza çözüm üretiyoruz.",
    href: "/hizmetler/web-tasarimi",
    providedBy: ["huseyin-eren-bakanlar"],
    detail: {
      headline: "Markanızın Dijital Evi",
      intro: [
        "Web siteniz 7/24 çalışan en güçlü satış personelinizdir. VOYO olarak sadece güzel görünen değil, hızlı yüklenen, mobil uyumlu, SEO optimizeli ve dönüşüm odaklı web siteleri tasarlıyoruz.",
        "Tasarımdan geliştirmeye, içerik yönetim sisteminden e-ticaret entegrasyonuna kadar tüm süreci baştan sona yönetiyoruz.",
      ],
      features: [
        "Kurumsal tanıtım web siteleri",
        "E-ticaret siteleri (WooCommerce, Shopify)",
        "Landing page (açılış sayfası) tasarımı",
        "Mobil uyumlu (responsive) tasarım",
        "SEO teknik altyapısı",
        "Hız optimizasyonu (Core Web Vitals)",
        "SSL kurulumu & güvenlik",
        "Google Analytics & Search Console entegrasyonu",
        "İçerik yönetim paneli (kolay güncelleme)",
        "1 yıl teknik destek (paketle değişir)",
      ],
      highlightsLabel: "Hangi Teknolojilerle?",
      highlights: [
        "WordPress",
        "Next.js",
        "React",
        "Shopify",
        "Özel Geliştirme",
      ],
      process: [
        {
          title: "Brifing & Analiz",
          description: "Hedef, rakip analizi, içerik toplama",
        },
        {
          title: "Wireframe & Prototip",
          description: "Sayfa yapısı taslağı",
        },
        { title: "Tasarım", description: "UI/UX tasarımı, marka uyumu" },
        { title: "Geliştirme", description: "Kod, CMS entegrasyonu" },
        {
          title: "Test & Revizyon",
          description: "Tarayıcı ve cihaz testleri",
        },
        { title: "Yayın & Eğitim", description: "Canlıya alma, panel eğitimi" },
      ],
    },
  },
  {
    slug: "foto-video-cekim",
    icon: Camera,
    title: "Profesyonel Fotoğraf & Video Çekim",
    description:
      "Ürün çekiminden kurumsal tanıtım videosuna, sosyal medya içerik üretiminden reklam filmlerine kadar markanızı en etkileyici şekilde görselleştiriyoruz.",
    href: "/hizmetler/foto-video-cekim",
    providedBy: ["baha-turgut", "emir-er"],
    detail: {
      headline: "Markanızı Görsel Olarak Güçlendirin",
      intro: [
        "Görsel içerik, markanızın ilk izlenimini belirler. VOYO'nun çekim ekibi, ürününüzü, mekanınızı ve hikayenizi en etkileyici biçimde görselleştiriyor.",
        "Ürün fotoğrafından kurumsal tanıtım filmlerine, sosyal medya içeriklerinden drone çekimlerine kadar her türlü görsel ihtiyacınıza cevap veriyoruz.",
      ],
      features: [
        "Ürün fotoğrafçılığı (beyaz zemin, mekân içi)",
        "Kurumsal portre & ekip fotoğrafı",
        "Mekân & mimari fotoğrafçılık",
        "Sosyal medya içerik çekimi (Reels, TikTok formatı)",
        "Kurumsal tanıtım filmi",
        "Reklam filmi & marka videosu",
        "Drone / Hava çekimi",
        "Post-prodüksiyon (kurgu, renk düzeltme, ses)",
        "Antalya ve çevre ilçelerde mobil çekim",
      ],
      highlightsLabel: "Çekim Türleri",
      highlights: [
        "Ürün",
        "Kurumsal",
        "Gastronomi",
        "Otel & Turizm",
        "Etkinlik",
        "E-ticaret",
      ],
      note: "Antalya merkezli, Türkiye geneli projeler için seyahat imkânı mevcuttur.",
    },
  },
  {
    slug: "yazilim-cozumleri",
    icon: Code2,
    title: "Yazılım Çözümleri",
    description:
      "İşletmenize özel web uygulamaları, otomasyon sistemleri ve yazılım entegrasyonları geliştiriyoruz. Teknik altyapınızı güçlendirerek operasyonlarınızı hızlandırıyoruz.",
    href: "/hizmetler/yazilim-cozumleri",
    providedBy: ["huseyin-eren-bakanlar"],
    detail: {
      headline: "İşinizi Büyüten Özel Yazılımlar",
      intro: [
        "Her işletmenin ihtiyacı farklıdır. Hazır çözümler yetersiz kaldığında VOYO devreye giriyor. İşletmenize özel web uygulamaları, otomasyon sistemleri ve entegrasyon projeleri geliştirerek operasyonlarınızı hızlandırıyoruz.",
      ],
      features: [
        "Özel web uygulaması geliştirme",
        "CRM & müşteri yönetim sistemleri",
        "E-ticaret backend entegrasyonları",
        "API geliştirme & üçüncü taraf entegrasyonlar",
        "Otomasyon sistemleri (süreç otomasyonu)",
        "İçerik yönetim sistemleri (özel CMS)",
        "Rezervasyon & randevu sistemleri",
        "Teknik danışmanlık & kod denetimi",
      ],
      highlightsLabel: "Teknoloji Yığını",
      highlights: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PHP / Laravel",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "Vercel",
      ],
    },
  },
];

/** Hizmet sayfaları için SEO meta verisi (slug -> başlık/açıklama/anahtar kelimeler) */
export type ServiceSeo = {
  /** <title> (template'i atlar, tam başlık) */
  title: string;
  /** meta description (<=160 karakter) */
  description: string;
  /** Birincil yerel anahtar kelime (eyebrow + içerik) */
  primary: string;
  /** İkincil anahtar kelimeler (keywords meta + içerik) */
  secondary: string[];
};

export const serviceSeo: Record<string, ServiceSeo> = {
  "sosyal-medya-yonetimi": {
    title: "Antalya Sosyal Medya Yönetimi | VOYO Dijital",
    description:
      "Antalya'da profesyonel sosyal medya ve Instagram hesap yönetimi. Reels/TikTok içerik üretimi dahil net paketler. Hemen teklif alın.",
    primary: "Antalya Sosyal Medya Yönetimi",
    secondary: [
      "Antalya sosyal medya ajansı",
      "Instagram hesap yönetimi",
      "sosyal medya yönetimi paketleri",
      "Muratpaşa sosyal medya yönetimi",
      "restoran sosyal medya yönetimi",
    ],
  },
  "reklam-yonetimi": {
    title: "Antalya Google & Meta Reklam Yönetimi | VOYO",
    description:
      "Antalya'da dönüşüm odaklı Google Ads ve Meta (Instagram/Facebook) reklam yönetimi. Şeffaf yönetim ücreti, ölçülebilir ROAS. Teklif alın.",
    primary: "Antalya Google & Meta Reklam Yönetimi",
    secondary: [
      "Antalya Google Ads ajansı",
      "Antalya meta reklam ajansı",
      "instagram reklam ajansı Antalya",
      "google ads danışmanı Antalya",
      "performans pazarlama ajansı Antalya",
    ],
  },
  "web-tasarimi": {
    title: "Antalya Web Tasarım | Hızlı, SEO Uyumlu Site",
    description:
      "Antalya'da mobil uyumlu, hızlı ve SEO uyumlu kurumsal web sitesi tasarımı. Şeffaf fiyat, modern altyapı. Ücretsiz teklif alın.",
    primary: "Antalya Web Tasarım",
    secondary: [
      "Antalya web tasarım fiyatları",
      "kurumsal web tasarım Antalya",
      "web sitesi yapımı Antalya",
      "Muratpaşa web tasarım",
      "SEO uyumlu web tasarım",
    ],
  },
  "foto-video-cekim": {
    title: "Antalya Foto & Video Çekim | Ürün, Tanıtım, Drone",
    description:
      "Antalya'da profesyonel ürün fotoğrafı, tanıtım filmi, drone ve sosyal medya video çekimi. E-ticaret ve otel/restoran için içerik. Teklif alın.",
    primary: "Antalya Fotoğraf & Video Çekim",
    secondary: [
      "Antalya ürün fotoğraf çekimi",
      "Antalya tanıtım filmi çekimi",
      "Antalya drone çekimi",
      "Antalya video prodüksiyon",
      "Antalya e-ticaret ürün çekimi",
    ],
  },
  "yazilim-cozumleri": {
    title: "Antalya Yazılım & Mobil Uygulama Geliştirme | VOYO",
    description:
      "Antalya'da işletmenize özel yazılım, mobil uygulama, CRM ve otomasyon geliştirme. Turizm ve restoran sektörüne özel çözümler. Teklif alın.",
    primary: "Antalya Yazılım Çözümleri",
    secondary: [
      "Antalya yazılım firması",
      "özel yazılım geliştirme Antalya",
      "Antalya mobil uygulama geliştirme",
      "özel e-ticaret yazılımı",
      "işletmeye özel otomasyon yazılımı",
    ],
  },
};

/** Yerel SEO için hedef ilçe/bölgeler — hizmet sayfalarındaki "Hizmet Bölgeleri" bloğu */
export const serviceRegions = [
  "Muratpaşa",
  "Konyaaltı",
  "Lara",
  "Kepez",
  "Aksu",
];

/** Hizmet sayfası SSS'leri (slug -> Q&A). Soru-tipi aramalar + FAQPage zengin sonuç. */
export const serviceFaqs: Record<string, { q: string; a: string }[]> = {
  "sosyal-medya-yonetimi": [
    {
      q: "Antalya'da sosyal medya yönetimi ücretleri ne kadar?",
      a: "Ücret; platform sayısına, içerik hacmine ve hedeflerinize göre belirlenen aylık paketlerle çalışır. Gizli maliyet yoktur — net teklif için WhatsApp'tan ulaşın.",
    },
    {
      q: "Hangi platformları yönetiyorsunuz?",
      a: "Instagram, Facebook, TikTok, LinkedIn, X ve YouTube. İşletmenize en uygun platformlarda yoğunlaşarak verimi yükseltiriz.",
    },
    {
      q: "İçerikleri (görsel/video/metin) siz mi üretiyorsunuz?",
      a: "Evet. Grafik tasarım, Reels/video prodüksiyon, metin yazarlığı ve aylık içerik takvimi dahil tüm üretim bize aittir.",
    },
    {
      q: "Çalışmaya kaç günde başlıyorsunuz?",
      a: "Anlaşma sonrası genellikle 3-5 iş günü içinde strateji ve ilk içerik takvimiyle yayına başlarız.",
    },
  ],
  "reklam-yonetimi": [
    {
      q: "Reklam yönetim ücreti ile reklam bütçesi farkı nedir?",
      a: "Reklam bütçesi doğrudan Google/Meta'ya ödediğiniz tutardır; yönetim ücreti ise kampanyaların kurulum, optimizasyon ve raporlaması için bizim şeffaf hizmet bedelimizdir. İkisi ayrıdır.",
    },
    {
      q: "Google Ads mı, Meta (Instagram) reklamı mı bana uygun?",
      a: "Hedefe göre değişir: anlık talep/arama için Google Ads, marka bilinirliği ve görsel ürünler için Meta öne çıkar. Çoğu işletmede ikisini birlikte kurgularız.",
    },
    {
      q: "Sonuçları nasıl ölçüyorsunuz?",
      a: "Dönüşüm takibi kurar; ROAS, dönüşüm başına maliyet ve tıklama gibi metriklerle düzenli, anlaşılır rapor sunarız.",
    },
    {
      q: "Minimum reklam bütçesi gerekiyor mu?",
      a: "Sektöre ve rekabete göre değişir. Size uygun başlangıç bütçesini ücretsiz ön görüşmede birlikte belirleriz.",
    },
  ],
  "web-tasarimi": [
    {
      q: "Antalya'da web sitesi yaptırmak ne kadar?",
      a: "Sayfa sayısı, özellikler (e-ticaret, randevu, çoklu dil vb.) ve içerik durumuna göre değişir. Şeffaf, sabit fiyatlı teklif veririz.",
    },
    {
      q: "Web sitesi kaç günde hazır olur?",
      a: "Kurumsal tanıtım siteleri genellikle 1-3 hafta içinde tamamlanır; kapsamlı projeler içerik hazırlığına göre değişir.",
    },
    {
      q: "Siteler mobil ve SEO uyumlu mu?",
      a: "Evet. Tüm siteler mobil öncelikli, hızlı modern altyapıyla ve temel SEO ayarlarıyla (başlık, açıklama, schema, sitemap) teslim edilir.",
    },
    {
      q: "İçerik ve görselleri siz mi hazırlıyorsunuz?",
      a: "İsterseniz metin yazarlığı ve profesyonel fotoğraf/video çekimini de aynı pakette sunabiliriz — tek elden çözüm.",
    },
  ],
  "foto-video-cekim": [
    {
      q: "Antalya ürün fotoğraf çekimi fiyatları ne kadar?",
      a: "Ürün sayısı, çekim türü (stüdyo/mekan) ve teslim formatına göre belirlenir. Net teklif için ürünlerinizi ve ihtiyacınızı paylaşmanız yeterli.",
    },
    {
      q: "Hangi çekim türlerini yapıyorsunuz?",
      a: "Ürün fotoğrafı, tanıtım filmi, sosyal medya videosu (Reels/TikTok), drone çekimi ve e-ticaret (Trendyol/Hepsiburada uyumlu) çekimleri.",
    },
    {
      q: "Çekim nerede yapılıyor?",
      a: "Stüdyoda ya da işletmenizde/mekanda yapabiliyoruz; Antalya merkez ve ilçelerinde hizmet veriyoruz.",
    },
    {
      q: "Görseller reklam ve sosyal medyada kullanılabilir mi?",
      a: "Evet. Çekimleri doğrudan sosyal medya ve reklam kampanyalarınıza entegre ederek tek pakette değerlendirebiliriz.",
    },
  ],
  "yazilim-cozumleri": [
    {
      q: "Özel yazılım mı, hazır paket mi tercih etmeliyim?",
      a: "Standart ihtiyaçlar için hazır çözümler hızlı ve ekonomiktir; işinize özel akış, entegrasyon veya rekabet avantajı gerekiyorsa özel yazılım daha doğrudur. Ücretsiz analizle yönlendiririz.",
    },
    {
      q: "Mobil uygulama yaptırmak ne kadar?",
      a: "Özellik kapsamına (üyelik, ödeme, panel, bildirim vb.) ve platform sayısına göre değişir. Net bütçeyi gereksinim analizinden sonra veririz.",
    },
    {
      q: "Neler geliştiriyorsunuz?",
      a: "İşletmeye özel web uygulamaları, mobil uygulamalar, CRM, otomasyon sistemleri ve e-ticaret entegrasyonları.",
    },
    {
      q: "Teslim sonrası destek veriyor musunuz?",
      a: "Evet. Bakım, güncelleme ve teknik destek paketleriyle yazılımınızın sürekliliğini sağlıyoruz.",
    },
  ],
};

export type Advantage = {
  no: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const advantages: Advantage[] = [
  {
    no: "01",
    icon: LayoutGrid,
    title: "Tek Noktadan Yönetim",
    description:
      "Sosyal medya, reklam, web ve çekim; tek ekipten, tek faturadan. Zaman kaybı yok.",
  },
  {
    no: "02",
    icon: Globe2,
    title: "Antalya'ya Yakın, Dünyaya Açık",
    description: "Yerel işletmeleri global standartlarda temsil ediyoruz.",
  },
  {
    no: "03",
    icon: BarChart3,
    title: "Ölçülebilir Sonuçlar",
    description: "Her kampanya ve içerik, veriye dayalı olarak optimize edilir.",
  },
  {
    no: "04",
    icon: Rocket,
    title: "Hızlı Teslimat",
    description:
      "Proje süreçlerimiz şeffaf, takvimlerimiz net. Söz verdiğimiz tarihte teslim ederiz.",
  },
  {
    no: "05",
    icon: Sparkles,
    title: "Yaratıcı + Teknik Ekip",
    description:
      "Hem vizyoner yaratıcılar hem de güçlü teknik uzmanlardan oluşan ekibimiz.",
  },
  {
    no: "06",
    icon: Headphones,
    title: "Sürekli Destek",
    description:
      "Proje tesliminden sonra da yanınızdayız. Güncelleme, bakım ve danışmanlık.",
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  bio: string;
  phone: string;
  phoneHref: string;
  email: string;
};

export const team: TeamMember[] = [
  {
    slug: "huseyin-eren-bakanlar",
    name: "Hüseyin Eren Bakanlar",
    role: "Web Geliştirici & Yazılım Direktörü",
    initials: "HE",
    bio: "Hızlı yüklenen, SEO uyumlu ve dönüşüm odaklı dijital altyapılar geliştirir.",
    phone: "0539 381 57 26",
    phoneHref: "tel:+905393815726",
    email: "info@voyo.com.tr",
  },
  {
    slug: "mehmet-kaya",
    name: "Mehmet Kaya",
    role: "Sosyal Medya & Reklam Stratejisti",
    initials: "MK",
    bio: "Meta ve Google Ads kampanyalarıyla markaları doğru kitleyle buluşturur.",
    phone: "0553 711 65 67",
    phoneHref: "tel:+905537116567",
    email: "info@voyo.com.tr",
  },
  {
    slug: "baha-turgut",
    name: "Baha Turgut",
    role: "Fotoğraf & Video Direktörü",
    initials: "BT",
    bio: "Markaların görsel kimliğini güçlü bir estetik dille hayata geçirir.",
    phone: "0534 552 48 48",
    phoneHref: "tel:+905345524848",
    email: "info@voyo.com.tr",
  },
  {
    slug: "emir-er",
    name: "Emir Er",
    role: "Kıdemli Kameraman & Görsel İçerik Uzmanı",
    initials: "EE",
    bio: "Drone ve sinematik çekim teknikleriyle markaların hikâyesini görselleştirir.",
    phone: "0541 630 28 43",
    phoneHref: "tel:+905416302843",
    email: "info@voyo.com.tr",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "VOYO hangi hizmetleri sunuyor?",
    a: "Sosyal medya yönetimi, Meta & Google reklam yönetimi, web tasarımı ve yazılım çözümleri, profesyonel fotoğraf & video çekim. Markanızın tüm dijital ihtiyaçlarını tek çatı altında, tek ekiple karşılıyoruz.",
  },
  {
    q: "Sadece tek bir hizmet alabilir miyim, yoksa paket şart mı?",
    a: "İster tek bir hizmet ister birkaçını birlikte alabilirsiniz. Çözümlerimiz ihtiyacınıza göre esnektir; size yalnızca gerçekten ihtiyacınız olanı öneririz.",
  },
  {
    q: "Çalışma süreciniz nasıl ilerliyor?",
    a: "Ücretsiz bir keşif görüşmesiyle başlarız. Hedeflerinizi dinler, size özel bir strateji ve teklif hazırlarız. Onay sonrası içerikleri üretir, yayınlar ve sonuçları düzenli olarak ölçüp raporlarız.",
  },
  {
    q: "Fiyatlandırma nasıl belirleniyor?",
    a: "Sabit liste yerine; hizmet kapsamı, içerik hacmi ve hedeflerinize göre projeye özel fiyatlandırma yaparız. Net rakam, ücretsiz keşif görüşmesinin ardından çıkarılan teklifte belli olur.",
  },
  {
    q: "Antalya dışındaki işletmelerle çalışıyor musunuz?",
    a: "Evet. Sosyal medya, reklam ve yazılım hizmetlerini Türkiye'nin her yerinden uzaktan yürütüyoruz. Yerinde çekim gerektiren işlerde Antalya ve çevresinde sahadayız.",
  },
  {
    q: "Uzun süreli bir taahhüt vermem gerekiyor mu?",
    a: "Sosyal medya ve reklam yönetimi genelde aylık ilerler; web ve yazılım işleri proje bazlıdır. Uzun vadeli zorunlu taahhüt yoktur — kalıcı sonuçlar için sürekliliği öneririz, ama tercih sizindir.",
  },
  {
    q: "Ne kadar sürede sonuç alırım?",
    a: "Web ve çekim projelerinde teslim süresi kapsama göre değişir. Reklam ve sosyal medyada ilk veriler birkaç hafta içinde görülmeye başlar; sürdürülebilir büyüme ise düzenli çalışmayla gelir.",
  },
];

export type Reference = {
  /** Marka/işletme adı (logo alt metni ve logosuz durumda görünür). */
  name: string;
  /** public/ içindeki logo yolu, örn. "/references/marka.svg". Yoksa ad gösterilir. */
  logo?: string;
  /** Karttaki logo boyutu — varsayılan orta. */
  size?: "xs" | "sm" | "lg" | "xl";
};

/**
 * Birlikte çalışılan markalar. Boşken Referanslar bölümü yer tutucu slotlar
 * gösterir. Gerçek logolar public/references/ altına konup buraya eklenir:
 *   { name: "Marka Adı", logo: "/references/marka.svg" }
 */
export const references: Reference[] = [
  { name: "ATA Teknoloji", logo: "/references/ata-teknoloji.svg", size: "sm" },
  { name: "ATADATA", logo: "/references/atadata.png", size: "xs" },
  { name: "DAIKIN Gözde Teknik", logo: "/references/daikin-gozde-teknik.png" },
  { name: "Treas", logo: "/references/treas.png" },
  { name: "Hostlayıcı", logo: "/references/hostlayici.png" },
  { name: "DuranOğlu Perde", logo: "/references/duranoglu-perde.png" },
  { name: "Göksu Pet Market", logo: "/references/goksu-pet-market.png", size: "lg" },
  { name: "Oris Medya", logo: "/references/oris-medya.png" },
];

export type NfcProduct = {
  name: string;
  desc: string;
  size: string;
  material: string;
  thickness: string;
  icon: LucideIcon;
  badge?: string;
};

export const nfcProducts: NfcProduct[] = [
  {
    name: "NFC Yorum Kartı",
    desc: "Cüzdan boyutunda, taşıması kolay. Elden verin ya da masada bırakın; dokunsun, yorum bıraksın.",
    size: "9 × 6 cm",
    material: "Pleksi",
    thickness: "Kredi kartı inceliğinde",
    icon: CreditCard,
  },
  {
    name: "NFC Stand",
    desc: "Masaüstü stand. Kasaya ya da masaya koyun; müşteriniz telefonunu dokundursun.",
    size: "9 × 12 cm",
    material: "Pleksi",
    thickness: "4 mm",
    icon: Nfc,
  },
  {
    name: "Premium NFC Stand",
    desc: "Standın daha şık, üst segment versiyonu — aynı boyut, premium görünüm.",
    size: "9 × 12 cm",
    material: "Pleksi",
    thickness: "4 mm",
    icon: Sparkles,
    badge: "Premium",
  },
  {
    name: "Yapıştırmalı NFC Kare",
    desc: "Stand ile aynı işlev, yapıştırmalı kare formda. Masaya ya da vitrine yapıştırın.",
    size: "8 × 8 cm",
    material: "Pleksi",
    thickness: "4 mm",
    icon: Sticker,
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "VOYO ekibi ile çalışmaya başladıktan sonra sosyal medya etkileşimlerimiz %200 arttı. Hızlı, yaratıcı ve güvenilir bir ekip.",
    author: "Müşteri Adı",
    company: "Şirket Adı",
  },
  {
    quote:
      "Web sitemiz yenilendikten sonra arama motorlarındaki sıralamalarımız ciddi ölçüde yükseldi. Teşekkürler VOYO!",
    author: "Müşteri Adı",
    company: "Şirket Adı",
  },
  {
    quote:
      "Reklam bütçemizi daha verimli kullanmamızı sağladılar. Yatırımın karşılığını kısa sürede aldık.",
    author: "Müşteri Adı",
    company: "Şirket Adı",
  },
  {
    quote:
      "Profesyonel çekim ekibi sayesinde ürünlerimiz çok daha etkileyici görünüyor. Fotoğraf ve videolardaki kalite müşterilerimizden tam not aldı.",
    author: "Müşteri Adı",
    company: "Şirket Adı",
  },
  {
    quote:
      "Geliştirdikleri özel yazılım günlük operasyonlarımızı ciddi şekilde hızlandırdı. Artık işler çok daha düzenli ilerliyor.",
    author: "Müşteri Adı",
    company: "Şirket Adı",
  },
  {
    quote:
      "Söz verdikleri tarihte eksiksiz teslim ettiler. Her aşamada bilgilendirildik; gönül rahatlığıyla çalıştık.",
    author: "Müşteri Adı",
    company: "Şirket Adı",
  },
];

/** Slug ile hizmet bulur */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Slug ile ekip üyesi bulur */
export function getTeamBySlug(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
