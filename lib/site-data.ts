import {
  BarChart3,
  Camera,
  Code2,
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
  email: "info@voyoajans.com",
  location: "Antalya, Muratpaşa",
  hours: "Pazartesi–Cuma: 09:00–18:00",
  socials: {
    instagram: "https://www.instagram.com/voyodijital/",
    linkedin: "https://linkedin.com/",
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
    email: "erenbakanlar@hotmail.com",
  },
  {
    slug: "mehmet-kaya",
    name: "Mehmet Kaya",
    role: "Sosyal Medya & Reklam Stratejisti",
    initials: "MK",
    bio: "Meta ve Google Ads kampanyalarıyla markaları doğru kitleyle buluşturur.",
    phone: "0553 711 65 67",
    phoneHref: "tel:+905537116567",
    email: "mehmet.rock07@icloud.com",
  },
  {
    slug: "baha-turgut",
    name: "Baha Turgut",
    role: "Fotoğraf & Video Direktörü",
    initials: "BT",
    bio: "Markaların görsel kimliğini güçlü bir estetik dille hayata geçirir.",
    phone: "0534 552 48 48",
    phoneHref: "tel:+905345524848",
    email: "bahaturgut703@gmail.com",
  },
  {
    slug: "emir-er",
    name: "Emir Er",
    role: "Kıdemli Kameraman & Görsel İçerik Uzmanı",
    initials: "EE",
    bio: "Drone ve sinematik çekim teknikleriyle markaların hikâyesini görselleştirir.",
    phone: "0541 630 28 43",
    phoneHref: "tel:+905416302843",
    email: "eremir0723@gmail.com",
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
