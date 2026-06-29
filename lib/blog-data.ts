/**
 * Blog içeriği — blok tabanlı, tip güvenli model (markdown/MDX bağımlılığı yok).
 * Her yazı SEO için H1 (title) + H2/H3 yapısı, hedef anahtar kelime ve ilgili
 * hizmet/ürün sayfasına iç link (cta blokları) içerir.
 */

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "cta"; text: string; href: string; label: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO tarih (yayın) */
  date: string;
  category: string;
  targetKeyword: string;
  readingMinutes: number;
  blocks: PostBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "google-yorum-karti-nedir",
    title:
      "Google Yorum Kartı Nedir? NFC ile İşletmenizin Yorumlarını Nasıl Artırırsınız",
    description:
      "Google yorum kartı nedir, NFC ve QR ile nasıl çalışır, neden işe yarar? İşletmenizin Google yorum sayısını katlamanın en pratik yolunu anlattık.",
    date: "2026-06-28",
    category: "NFC & Google Yorum",
    targetKeyword: "google yorum kartı nedir",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Google yorumları, bir işletmenin internetteki ilk izlenimidir. Potansiyel müşteriniz sizi Google'da arattığında gördüğü yıldız sayısı ve yorum hacmi, sizi tercih edip etmeyeceğine dair en güçlü sinyaldir. Peki memnun müşterilerinizi zahmetsizce yorum bırakmaya nasıl yönlendirirsiniz? Cevap: Google yorum kartı.",
      },
      { type: "h2", text: "Google yorum kartı nedir?" },
      {
        type: "p",
        text: "Google yorum kartı; içine NFC çipi ve/veya QR kod gömülü, işletmenizin Google yorum sayfasına doğrudan yönlendiren fiziksel bir karttır (ya da masaüstü stand, anahtarlık, yapıştırmalı etiket olarak da olabilir). Müşteri telefonunu karta dokundurur veya QR kodu okutur; ekranında anında işletmenizin yorum yazma sayfası açılır. Uygulama indirmek, hesap aramak, link yazmak yok.",
      },
      { type: "h2", text: "NFC yorum kartı nasıl çalışır?" },
      {
        type: "p",
        text: "Mantığı son derece basit ve üç adımda işler:",
      },
      {
        type: "ul",
        items: [
          "Müşteri, telefonunu kartın üzerine dokundurur (NFC) veya kameradan QR kodu okutur.",
          "Telefon, kartın içine kodlanmış olan Google yorum bağlantısını otomatik açar.",
          "Müşteri tek ekranda yıldız verip yorumunu yazar — işlem 20 saniye sürer.",
        ],
      },
      {
        type: "p",
        text: "NFC, neredeyse tüm modern Android ve iPhone modellerinde çalışır. QR kod ise istisnasız her telefonda çalıştığı için kart üzerinde ikisini birlikte sunmak en garantili yöntemdir.",
      },
      { type: "h2", text: "Neden işe yarıyor?" },
      {
        type: "p",
        text: "Çoğu memnun müşteri size yorum bırakmaktan mutluluk duyar; sorun isteksizlik değil, sürtünmedir. İşletmeyi Google'da bulmak, doğru sayfayı açmak ve giriş yapmak çok adımlıdır ve insanların çoğu bu noktada vazgeçer. Yorum kartı bu sürtünmeyi sıfıra indirir:",
      },
      {
        type: "ul",
        items: [
          "Yorum sayısı artar — daha fazla sosyal kanıt, daha fazla güven.",
          "Ortalama puanınız yükselir — çünkü memnun müşterilere yorum bırakmak kolaylaşır.",
          "Yerel SEO sinyali güçlenir — yorum sayısı ve tazeliği Google Haritalar sıralamasını olumlu etkiler.",
          "Personel rahat eder — 'bizi Google'da değerlendirir misiniz' demek yerine kartı uzatmak yeterli.",
        ],
      },
      { type: "h2", text: "Hangi işletmeler için uygun?" },
      {
        type: "p",
        text: "Yüz yüze müşteri ağırlayan her işletme için idealdir: restoran ve kafeler, kuaför ve güzellik salonları, oteller, klinik ve diş hekimleri, emlak ofisleri, oto servisler, marketler... Masaya, kasaya, resepsiyona ya da çıkış noktasına bir stand veya kart koymanız yeterli.",
      },
      { type: "h2", text: "Google politikalarına uygun mu?" },
      {
        type: "p",
        text: "Evet — yorum bırakmayı kolaylaştırmak (sürtünmeyi azaltmak) Google politikalarına uygundur. Politikalara aykırı olan; yorum karşılığında indirim/hediye vermek ya da yalnızca olumlu yorumları teşvik edip olumsuzları engellemektir (review gating). Kart, müşteriyi sadece doğru sayfaya yönlendirir; ne yazacağına müşteri özgürce karar verir. Doğru kullanıldığında tamamen güvenlidir.",
      },
      { type: "h2", text: "VOYO Google yorum kartı çözümleri" },
      {
        type: "p",
        text: "VOYO olarak işletmenize özel, logolu NFC + QR Google yorum ürünleri üretiyoruz: kredi kartı inceliğinde kart, masaüstü pleksi stand, premium stand ve yapıştırmalı kare. Tek seferlik ödeme, abonelik yok. Üstelik istersen kurulumu, Google İşletme Profili optimizasyonunu ve yorum stratejisini de birlikte sunuyoruz.",
      },
      {
        type: "cta",
        text: "İşletmenize özel NFC Google yorum ürünlerini inceleyin ve fiyat için WhatsApp'tan yazın.",
        href: "/nfc-yorum",
        label: "NFC Yorum Ürünlerini İncele",
      },
    ],
  },
  {
    slug: "dijital-ajans-nasil-secilir",
    title: "Doğru Dijital Ajans Nasıl Seçilir? 8 Kritik Kriter",
    description:
      "Dijital ajans nasıl seçilir? İşletmeniz için doğru ajansı bulmanızı sağlayacak 8 kritik kriteri ve sormanız gereken soruları madde madde açıkladık.",
    date: "2026-06-28",
    category: "Dijital Pazarlama",
    targetKeyword: "dijital ajans nasıl seçilir",
    readingMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Doğru dijital ajans, işletmenizin büyümesini hızlandırır; yanlış ajans ise bütçenizi ve zamanınızı tüketir. Peki onlarca seçenek arasından işletmenize gerçekten uygun olanı nasıl ayırt edersiniz? İşte kararınızı netleştirecek 8 kritik kriter.",
      },
      { type: "h2", text: "1. Net ve şeffaf fiyatlandırma sunuyor mu?" },
      {
        type: "p",
        text: "Sektörün en büyük sorunu belirsiz fiyatlardır. İyi bir ajans; hangi hizmetin neyi kapsadığını, yönetim ücreti ile reklam bütçesinin farkını ve olası ek maliyetleri baştan açıkça söyler. 'Sonra konuşuruz' diyen değil, paket ve kapsamı yazıyla veren ajansı tercih edin.",
      },
      { type: "h2", text: "2. Referansları ve gerçek işleri var mı?" },
      {
        type: "p",
        text: "Daha önce kimlerle çalışmış? Yaptığı işlerin örneklerini, müşteri yorumlarını ve mümkünse ölçülebilir sonuçları (yorum artışı, satış, etkileşim) gösterebiliyor mu? Somut kanıt sunamayan bir ajans, vaatten öteye geçemiyor olabilir.",
      },
      { type: "h2", text: "3. İhtiyacınızın tamamını karşılıyor mu?" },
      {
        type: "p",
        text: "Sosyal medyayı bir yerden, reklamı başka yerden, web sitesini bir başkasından almak hem maliyetli hem de koordinasyon kâbusudur. Sosyal medya, reklam, web, içerik (foto/video) ve yazılımı tek çatı altında veren full-service bir ajans; markanızda tutarlılık ve hız sağlar.",
      },
      { type: "h2", text: "4. Ölçüm ve raporlama yapıyor mu?" },
      {
        type: "p",
        text: "'Güzel içerik üretiyoruz' yeterli değildir. İyi ajans; hedefleri en baştan tanımlar, dönüşüm takibi kurar ve düzenli, anlaşılır raporlarla ne yaptığını ve ne sonuç aldığını gösterir. Veriyle konuşamayan bir ajansla ilerlemek risklidir.",
      },
      { type: "h2", text: "5. İletişimi hızlı ve sürekli mi?" },
      {
        type: "p",
        text: "Sorularınıza ne kadar hızlı dönüyor? Size atanmış bir iletişim noktası var mı? Düzenli toplantı/güncelleme sunuyor mu? Anlaşmadan önceki iletişim hızı, anlaşmadan sonra alacağınız ilginin en iyi göstergesidir.",
      },
      { type: "h2", text: "6. Yerel pazarı tanıyor mu?" },
      {
        type: "p",
        text: "İşletmeniz Antalya'daysa, Antalya'nın dinamiklerini (turizm yoğunluğu, sezon, yerel rekabet, hedef kitle) bilen bir ajans büyük avantajdır. Yerel SEO, Google İşletme Profili ve bölgesel kampanyalarda bu fark açıkça hissedilir.",
      },
      { type: "h2", text: "7. Teknik altyapısı güçlü mü?" },
      {
        type: "p",
        text: "Hızlı açılan, mobil uyumlu, SEO ve modern arama (AI) sonuçlarına hazır bir web sitesi artık lüks değil zorunluluktur. Ajansın kendi sitesi ve ürettiği işler teknik olarak ne durumda? Yavaş, eski bir altyapı üreten ajans size de aynısını verir.",
      },
      { type: "h2", text: "8. Size uygun ölçekte mi?" },
      {
        type: "p",
        text: "Çok büyük bir ajansta küçük bir müşteri olarak kaybolabilir; çok küçük bir yapıda ise kapasite sorunları yaşayabilirsiniz. KOBİ ve yerel işletmeler için; ilgili, esnek ama profesyonel ekipli butik bir ajans çoğu zaman en doğru dengeyi sunar.",
      },
      { type: "h2", text: "Özetle" },
      {
        type: "p",
        text: "Şeffaf fiyat, kanıtlanmış işler, tek çatı altında tam hizmet, ölçülebilir sonuç, hızlı iletişim, yerel uzmanlık, güçlü teknik altyapı ve doğru ölçek — bu sekiz kriteri karşılayan bir ajansla yola çıkarsanız, dijital yatırımınızın karşılığını alırsınız.",
      },
      {
        type: "cta",
        text: "Antalya'da sosyal medya, reklam, web, çekim ve yazılımı tek ekipten almak ister misiniz? VOYO ile ücretsiz görüşün.",
        href: "/#hizmetler",
        label: "VOYO Hizmetlerini Keşfet",
      },
    ],
  },
  {
    slug: "google-yorumlari-nasil-artirilir",
    title: "Google Yorumları Nasıl Artırılır? İşe Yarayan 10 Pratik Yöntem",
    description:
      "Google yorumlarını artırmanın en etkili 10 yöntemi: NFC yorum kartından doğru zamanlamaya, personeli teşvikten olumsuz yorum yönetimine kadar pratik rehber.",
    date: "2026-06-27",
    category: "NFC & Google Yorum",
    targetKeyword: "google yorum artırma",
    readingMinutes: 7,
    blocks: [
      {
        type: "p",
        text: "Google yorumları yerel işletmeler için en değerli sosyal kanıttır: hem müşteri güvenini hem de Google Haritalar'daki sıralamanızı doğrudan etkiler. İyi haber şu ki, yorum sayınızı artırmak için reklam bütçesi gerekmez — sadece doğru sistem gerekir. İşte işe yarayan 10 yöntem.",
      },
      { type: "h2", text: "1. NFC / QR yorum kartı kullanın" },
      {
        type: "p",
        text: "En hızlı ve en pratik yöntem budur. Müşteri telefonunu karta dokundurur ya da QR'ı okutur, yorum sayfanız anında açılır. Aradaki tüm adımları (arama, link, giriş) ortadan kaldırdığı için yorum bırakma oranını ciddi şekilde yükseltir.",
      },
      { type: "h2", text: "2. Doğru anı yakalayın" },
      {
        type: "p",
        text: "Müşteri en memnun olduğu anda isteyin: yemekten hemen sonra, hizmet tamamlanınca, teslimat anında. Memnuniyetin taze olduğu an, en yüksek dönüşüm anıdır.",
      },
      { type: "h2", text: "3. Personeli sürece dahil edin" },
      {
        type: "p",
        text: "Ekibinizin yorum istemeyi rutin haline getirmesini sağlayın. 'Memnun kaldıysanız Google'da değerlendirir misiniz?' cümlesi, yanında bir kart/stand olduğunda çok daha etkilidir.",
      },
      { type: "h2", text: "4. Yorum bağlantınızı kısaltın ve her yere koyun" },
      {
        type: "p",
        text: "Google'ın size verdiği yorum bağlantısını kısaltıp; SMS, WhatsApp, e-posta imzası, fiş altı, sosyal medya bio ve web sitenize ekleyin. Yorum yolu ne kadar görünür olursa, o kadar çok yorum gelir.",
      },
      { type: "h2", text: "5. E-posta ve SMS ile nazik hatırlatma yapın" },
      {
        type: "p",
        text: "Satış veya hizmet sonrası kısa, samimi bir teşekkür mesajına yorum bağlantısını ekleyin. Tek bir hatırlatma bile yorum oranını belirgin artırır.",
      },
      { type: "h2", text: "6. QR kodu masaya, kasaya, ambalaja taşıyın" },
      {
        type: "p",
        text: "Restoran masası, kasa önü, kargo kutusu, ürün ambalajı — müşterinin beklediği ya da ürünle baş başa kaldığı her nokta yorum fırsatıdır.",
      },
      { type: "h2", text: "7. Gelen tüm yorumlara yanıt verin" },
      {
        type: "p",
        text: "Yorumlara yanıt vermek hem mevcut müşteriye değer verdiğinizi gösterir hem de yeni müşterileri yorum bırakmaya teşvik eder. Üstelik Google, aktif işletmeleri olumlu değerlendirir.",
      },
      { type: "h2", text: "8. Google İşletme Profilinizi eksiksiz tutun" },
      {
        type: "p",
        text: "Fotoğraf, çalışma saatleri, hizmetler ve güncel bilgilerle dolu bir profil hem güven verir hem de arama görünürlüğünüzü artırır; bu da daha çok ziyaret ve daha çok yoruma dönüşür.",
      },
      { type: "h2", text: "9. Olumsuz yorumları doğru yönetin" },
      {
        type: "p",
        text: "Olumsuz yorumları silmeye çalışmak yerine; hızlı, profesyonel ve çözüm odaklı yanıt verin. İyi yönetilen bir olumsuz yorum, çoğu zaman olumlu bir yorumdan daha güçlü bir güven sinyalidir.",
      },
      { type: "h2", text: "10. Yapmamanız gerekenler (Google politikaları)" },
      {
        type: "p",
        text: "Yorum karşılığında indirim/hediye vermeyin ve yalnızca olumlu yorumları filtreleyip olumsuzları engellemeyin (review gating). Bunlar Google politikalarına aykırıdır. Doğru yöntem, herkese eşit ve kolay yorum imkânı sunmaktır.",
      },
      {
        type: "cta",
        text: "İşletmenize özel NFC + QR Google yorum kartı ve standıyla yorum toplamayı otomatikleştirin.",
        href: "/nfc-yorum",
        label: "NFC Yorum Ürünlerini İncele",
      },
    ],
  },
  {
    slug: "web-sitesi-yaptirmak-ne-kadar",
    title: "Web Sitesi Yaptırmak Ne Kadar? 2026 Antalya Fiyat Rehberi",
    description:
      "Web sitesi yaptırmak ne kadar? Fiyatı belirleyen faktörler, site türlerine göre maliyet mantığı ve bütçenizi doğru planlamanın yolları — net bir rehber.",
    date: "2026-06-26",
    category: "Web & Teknoloji",
    targetKeyword: "web sitesi yaptırmak ne kadar",
    readingMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "'Web sitesi yaptırmak ne kadar?' sorusunun tek bir cevabı yoktur — tıpkı 'ev yaptırmak ne kadar?' gibi. Maliyet; sitenin türüne, özelliklerine ve içerik durumuna göre değişir. Bu rehberde fiyatı belirleyen faktörleri ve doğru bütçe planlamasını net biçimde açıklıyoruz.",
      },
      { type: "h2", text: "Web sitesi fiyatını belirleyen faktörler" },
      {
        type: "ul",
        items: [
          "Sayfa sayısı ve kapsam: tek sayfalık tanıtım mı, çok sayfalı kurumsal site mi?",
          "İşlevsellik: e-ticaret, online randevu, üyelik, ödeme entegrasyonu gibi özellikler maliyeti artırır.",
          "Tasarım: hazır şablon mu, markaya özel tasarım mı?",
          "İçerik: metin ve görseller hazır mı, yoksa metin yazarlığı ve foto/video çekimi de gerekiyor mu?",
          "Çoklu dil: turizm bölgesinde TR/EN/RU/DE gibi dil ihtiyacı kapsamı genişletir.",
          "Teknik altyapı: hız, SEO uyumu ve modern altyapı kaliteli işin maliyetine yansır.",
        ],
      },
      { type: "h2", text: "Site türlerine göre maliyet mantığı" },
      { type: "h3", text: "Tek sayfa / açılış sayfası (landing page)" },
      {
        type: "p",
        text: "Kampanya, etkinlik ya da tek bir ürün/hizmet için en ekonomik seçenektir. Hızlı kurulur, odaklıdır ve genellikle en düşük bütçeli paketdir.",
      },
      { type: "h3", text: "Kurumsal tanıtım sitesi" },
      {
        type: "p",
        text: "Çoğu işletmenin ihtiyacı budur: anasayfa, hizmetler, hakkımızda, iletişim gibi sayfalar. Markaya özel tasarım, mobil uyum ve temel SEO ile orta segment bir yatırımdır.",
      },
      { type: "h3", text: "E-ticaret sitesi" },
      {
        type: "p",
        text: "Ürün yönetimi, sepet, ödeme ve kargo entegrasyonları gerektirdiği için en kapsamlı ve en yüksek bütçeli kategoridir. Ürün sayısı ve entegrasyonlar maliyeti doğrudan etkiler.",
      },
      { type: "h2", text: "Dikkat: en ucuz teklif çoğu zaman en pahalıya gelir" },
      {
        type: "p",
        text: "Çok düşük fiyatlı tekliflerde genelde yavaş açılan, mobil uyumsuz, SEO'ya kapalı ve güncellemesi zor altyapılar çıkar. Bir-iki yıl içinde siteyi baştan yaptırmak zorunda kalmak, başta ödediğinizden fazlasına mal olur. Hız, SEO ve sürdürülebilirlik fiyatın bir parçasıdır.",
      },
      { type: "h2", text: "İyi bir fiyat teklifinde neler olmalı?" },
      {
        type: "ul",
        items: [
          "Şeffaf kapsam: hangi sayfalar, hangi özellikler dahil — yazılı olarak.",
          "Mobil uyum ve hız: tüm cihazlarda hızlı açılan, modern altyapı.",
          "Temel SEO: başlık, açıklama, sitemap ve yapısal veri ayarları dahil.",
          "Teslim süresi ve sonrası destek: ne zaman biter, sonra kim bakar?",
        ],
      },
      { type: "h2", text: "Net bütçe nasıl çıkar?" },
      {
        type: "p",
        text: "En doğru yol, ihtiyacınızı kısa bir görüşmede netleştirip kapsamı belirlemektir. VOYO olarak Antalya'da işletmenize özel, şeffaf ve sabit fiyatlı teklif veriyoruz; gizli maliyet yok. İsterseniz metin yazarlığı ve profesyonel görsel çekimini de aynı pakette sunuyoruz.",
      },
      {
        type: "cta",
        text: "Projenizi anlatın, size özel net ve şeffaf bir web sitesi teklifi çıkaralım.",
        href: "/hizmetler/web-tasarimi",
        label: "Web Tasarım Hizmetini İncele",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Yayın tarihine göre yeniden eskiye sıralı liste */
export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}
