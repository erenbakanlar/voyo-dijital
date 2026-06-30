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
  {
    "slug": "google-ads-mi-meta-reklami-mi",
    "title": "Google Ads mı Meta (Instagram) Reklamı mı? İşletmeniz İçin Hangisi?",
    "description": "Google Ads mı Meta reklamı mı sorusuna net cevap: arama niyeti, keşif, bütçe ve dönüşüm farkları. Antalya işletmeleri için pratik rehber.",
    "date": "2026-06-30",
    "category": "Reklam & Dijital Pazarlama",
    "targetKeyword": "google ads mı meta reklamı mı",
    "readingMinutes": 7,
    "blocks": [
      {
        "type": "p",
        "text": "Reklam bütçenizi ilk kez ayırırken ya da mevcut harcamalarınızdan daha iyi verim almak isterken karşınıza çıkan en temel soru genellikle aynıdır: Google Ads mı Meta reklamı mı? İkisi de güçlü kanallar, ancak farklı işlevlere sahipler. Birini diğerinden 'daha iyi' yapan tek bir doğru cevap yok; doğru cevap sizin işletmenize, hedefinize ve müşterinizin satın alma yolculuğunun hangi aşamasında olduğuna bağlı."
      },
      {
        "type": "p",
        "text": "Bu yazıda iki platformun temel mantığını, hangi işletme tipine hangisinin daha çok yakıştığını, ikisini birlikte kullanmanın neden çoğu zaman en kârlı yol olduğunu ve bütçe ile dönüşüm ölçümünü nasıl ele almanız gerektiğini sade bir dille anlatıyoruz. Antalya'da restoran, otel ya da yerel hizmet veren bir işletmeyseniz örnekler size tanıdık gelecek."
      },
      {
        "type": "h2",
        "text": "Temel Fark: Arama Niyeti mi, Keşif mi?"
      },
      {
        "type": "p",
        "text": "Google Ads, büyük ölçüde 'arama niyeti' üzerine kuruludur. Birisi Google'a 'Antalya'da kahvaltı mekanı' veya 'Muratpaşa klima servisi' yazdığında, o kişi zaten bir ihtiyaç tanımlamış ve çözüm aramaktadır. Yani talep hazırdır; siz sadece o talebin tam karşısına çıkarsınız. Bu yüzden Google reklamları genelde daha 'sıcak' kullanıcıya, satın almaya yakın kişiye ulaşır."
      },
      {
        "type": "p",
        "text": "Meta (Instagram ve Facebook) reklamları ise 'keşif' ve görsel ilgi üzerine çalışır. Kullanıcı bir şey aramaz; akışını kaydırırken karşısına ilgi alanına, davranışına ve konumuna göre seçilmiş bir reklam çıkar. Burada talebi siz yaratırsınız. Güzel çekilmiş bir tabak fotoğrafı, otel havuzunun video turu ya da bir kampanya görseli, o anda 'aramayan' ama doğru sunulduğunda ilgilenecek kişiyi durdurur."
      },
      {
        "type": "h2",
        "text": "Hangi İşletmeye Hangisi Daha Uygun?"
      },
      {
        "type": "p",
        "text": "Genel bir kural olarak: net ve acil bir ihtiyaca cevap veriyorsanız Google Ads öne çıkar; görsel, ilham veren ya da marka bilinirliği gerektiren bir iş yapıyorsanız Meta güçlenir. Yine de bu kesin bir çizgi değil, çoğu işletme her ikisinden de farklı oranlarda faydalanır."
      },
      {
        "type": "ul",
        "items": [
          "Acil hizmetler (çilingir, su kaçağı, oto kurtarma, klima servisi): Google Ads. İnsanlar bu hizmetleri ihtiyaç anında arar.",
          "Restoran ve kafe: İkisi birlikte. 'Antalya akşam yemeği' aramaları için Google, lezzetli görseller ve atmosfer için Instagram.",
          "Otel ve konaklama: Meta görsellerle hayal kurdurur, Google ise 'Antalya otel' arayan hazır talebi yakalar.",
          "Güzellik, kuaför, estetik, diş: Instagram öncesi/sonrası görselleriyle çok güçlüdür; Google da 'yakınımdaki' aramalarını toplar.",
          "E-ticaret ve butik ürünler: Meta keşif ve yeniden hedefleme için ideal, Google Alışveriş reklamları satın almaya yakın kullanıcıyı çeker."
        ]
      },
      {
        "type": "h2",
        "text": "İkisini Birlikte Kullanmanın Gücü"
      },
      {
        "type": "p",
        "text": "Pratikte en iyi sonuçlar, iki platformun birbirini beslediği kurguda çıkar. Meta reklamları markanızı keşfettirir ve talebi büyütür; Google ise o talep arama davranışına dönüştüğünde sizi öne çıkarır. Bir kullanıcı Instagram'da otelinizi görür, birkaç gün sonra Google'da otelinizin adını ya da bölgeyi aratır ve orada da karşısına çıkmanız güveni pekiştirir."
      },
      {
        "type": "p",
        "text": "Buna bir de yeniden hedefleme (retargeting) eklendiğinde sistem tamamlanır. Sitenizi ziyaret eden ama rezervasyon yapmayan birine Instagram'da hatırlatma reklamı göstermek, sıfırdan yeni kitleye ulaşmaktan çok daha düşük maliyetle dönüşüm getirir. Yani soru çoğu zaman 'hangisi' değil, 'hangi işi hangisine yaptıracağız' olmalı."
      },
      {
        "type": "h2",
        "text": "Bütçe Nasıl Belirlenir?"
      },
      {
        "type": "p",
        "text": "Net bir TL rakamı vermek doğru olmaz, çünkü reklam bütçesi sabit bir fiyat değil, sektöre ve rekabete göre değişen bir denklemdir. Bütçenizi etkileyen başlıca faktörleri bilmek, beklentinizi gerçekçi tutmanıza yardımcı olur."
      },
      {
        "type": "ul",
        "items": [
          "Sektördeki rekabet ve tıklama başına maliyet (hukuk, sağlık gibi alanlar daha pahalıdır).",
          "Hedef bölgenin büyüklüğü; sadece Muratpaşa mı yoksa tüm Antalya mı hedefliyorsunuz.",
          "Hizmet/ürün başına ortalama kazancınız (yüksek kâr marjı, daha yüksek reklam bütçesini mantıklı kılar).",
          "Sezon etkisi; Antalya'da turizm sezonunda rekabet ve maliyetler değişir.",
          "Reklam içeriğinin kalitesi; iyi görsel ve metin, aynı bütçeyle daha çok dönüşüm getirir."
        ]
      },
      {
        "type": "p",
        "text": "Doğru yaklaşım, küçük ve kontrollü bir bütçeyle başlayıp verileri ölçmek, ardından işe yarayan kanala ağırlık vermektir. Tahminle değil, gerçek sonuçlarla bütçe büyütülür."
      },
      {
        "type": "h2",
        "text": "Başarıyı Ölçmek: Dönüşüm Takibi Şart"
      },
      {
        "type": "p",
        "text": "Reklam yönetiminde en sık yapılan hata, sadece beğeni veya tıklama saymaktır. Asıl önemli olan dönüşümdür: gelen telefon, doldurulan form, alınan rezervasyon, tamamlanan satış. Hem Google hem Meta tarafında dönüşüm takibi doğru kurulmadığında, hangi reklamın gerçekten para kazandırdığını bilemezsiniz."
      },
      {
        "type": "p",
        "text": "Antalya'da bir restoran için 'rezervasyon araması', bir otel için 'rezervasyon formu', bir servis için 'arama tıklaması' dönüşüm olarak tanımlanmalı. Bu kurulum yapıldığında, her iki platformun da hangi kampanyada ne kadar müşteri getirdiğini net görür ve bütçeyi en verimli yöne kaydırırsınız. Karar 'hissederek' değil, veriyle verilir."
      },
      {
        "type": "cta",
        "text": "Google Ads mı Meta reklamı mı sorusunun cevabı işletmenize özeldir. VOYO olarak hedeflerinizi, bütçenizi ve müşterinizin yolculuğunu analiz eder, iki platformu doğru oranda kurgulayıp dönüşüm takibiyle birlikte yönetiriz. Net teklif ve ücretsiz değerlendirme için bizimle iletişime geçin.",
        "href": "/hizmetler/reklam-yonetimi",
        "label": "Reklam Yönetimi Hizmetini İncele"
      }
    ]
  },
  {
    "slug": "antalya-dijital-ajans-fiyatlari",
    "title": "Antalya'da Dijital Ajans Fiyatları 2026: Paket ve Maliyet Rehberi",
    "description": "Antalya dijital ajans fiyatları nasıl belirlenir? Fiyatı etkileyen faktörler, paket mantığı ve şeffaf teklif almanın yollarını bu rehberde anlattık.",
    "date": "2026-06-29",
    "category": "Dijital Pazarlama",
    "targetKeyword": "Antalya dijital ajans fiyatları",
    "readingMinutes": 7,
    "blocks": [
      {
        "type": "p",
        "text": "Bir dijital ajansla çalışmaya karar verdiğinizde ilk sorulan soru hemen her zaman aynı oluyor: Antalya dijital ajans fiyatları ne kadar? Bu son derece doğal bir merak, ancak net bir rakamla cevaplanması göründüğü kadar kolay değil. Çünkü dijital pazarlama hizmeti, raftan alınan standart bir ürün değil; markanızın hedeflerine, sektörüne ve mevcut durumuna göre şekillenen bir hizmettir. Aynı 'sosyal medya yönetimi' başlığı bir kafe için bambaşka, kurumsal bir inşaat firması için bambaşka bir iş yükü anlamına gelir."
      },
      {
        "type": "p",
        "text": "Bu rehberde tek bir TL rakamı vermeden, fiyatların hangi mantıkla oluştuğunu açıklayacağız. Amacımız, teklif aldığınızda neye ne için ödeme yaptığınızı anlamanız ve 'en ucuz' ile 'en doğru' teklifi birbirinden ayırabilmeniz. Antalya gibi turizm, gayrimenkul ve hizmet sektörünün yoğun olduğu bir şehirde, doğru ajans seçimi reklam bütçenizden çok daha fazlasını geri kazandırabilir."
      },
      {
        "type": "h2",
        "text": "Dijital Ajans Fiyatlarını Belirleyen Temel Faktörler"
      },
      {
        "type": "p",
        "text": "Bir teklifin neden başka bir tekliften farklı çıktığını anlamak için önce maliyeti oluşturan bileşenlere bakmak gerekir. Fiyat tek bir kalemden değil, birbirini etkileyen birden çok unsurdan oluşur. Aynı hizmet adı altında bile kapsam değiştikçe emek ve dolayısıyla bedel değişir."
      },
      {
        "type": "ul",
        "items": [
          "Hizmet kapsamı: Sadece sosyal medya mı, yoksa reklam yönetimi, web tasarım ve içerik üretimi birlikte mi isteniyor?",
          "İçerik hacmi: Aylık kaç gönderi, kaç tasarım, kaç video/reels üretilecek? Çekim gerekiyor mu?",
          "Üretim türü: Sadece tasarım mı, yoksa profesyonel fotoğraf ve video prodüksiyonu da dahil mi?",
          "Reklam yönetimi: Google ve Meta reklamlarının kurulumu, optimizasyonu ve raporlaması işin içinde mi?",
          "Strateji ve raporlama derinliği: Düzenli analiz, rakip takibi ve aylık performans raporu sunuluyor mu?",
          "Marka olgunluğu: Sıfırdan kurulan bir marka mı, yoksa mevcut bir yapının yönetimi mi söz konusu?"
        ]
      },
      {
        "type": "p",
        "text": "Bu kalemlerin her biri çoğaldıkça hem harcanan zaman hem de gereken uzmanlık artar. Bu nedenle 'dijital ajans fiyatı' tek bir sayı değil, sizin ihtiyaç listenizin toplamıdır."
      },
      {
        "type": "h2",
        "text": "Reklam Bütçesi ile Yönetim Ücretini Karıştırmayın"
      },
      {
        "type": "p",
        "text": "En sık yaşanan kafa karışıklığı burada ortaya çıkıyor. Google veya Meta'da harcayacağınız reklam bütçesi ile ajansa ödediğiniz yönetim ücreti tamamen ayrı iki kalemdir. Reklam bütçesi doğrudan platforma (Google, Instagram, Facebook) gider ve potansiyel müşterilere ulaşmanızı sağlar. Yönetim ücreti ise bu bütçenin doğru kitleye, doğru zamanda ve doğru mesajla harcanmasını sağlayan uzmanlık emeğinin karşılığıdır."
      },
      {
        "type": "p",
        "text": "İyi yönetilen bir reklam, kötü yönetilen bir reklama göre aynı bütçeyle kat kat fazla sonuç üretebilir. Dolayısıyla yönetim ücretini bir maliyet değil, reklam bütçenizin verimini artıran bir yatırım olarak düşünmek daha doğrudur. Şeffaf ajanslar bu iki kalemi tekliflerinde her zaman ayrı gösterir."
      },
      {
        "type": "h2",
        "text": "Paket Mantığı: Ayrı Ayrı mı, Bütünleşik mi?"
      },
      {
        "type": "p",
        "text": "Dijital hizmetleri sosyal medya, reklam ve web tasarım gibi parçalara bölerek tek tek alabilir ya da bütünleşik bir pakette toplayabilirsiniz. Her iki yaklaşımın da yeri vardır. Tek bir alanda eksiğiniz varsa, örneğin sadece web sitenizi yenilemek istiyorsanız, o hizmeti ayrı almak mantıklıdır."
      },
      {
        "type": "p",
        "text": "Ancak markanızı bütün olarak büyütmek istiyorsanız, bütünleşik paketler genellikle hem daha verimli hem de daha tutarlı sonuç verir. Sosyal medyada yarattığınız ilgiyi web sitesine taşımak, oradan reklamla desteklemek ve hepsini aynı marka diliyle yürütmek, parçalı çalışmaya göre çok daha güçlü bir etki oluşturur. Bütünleşik çalışmada tasarım, içerik ve strateji aynı ekipten çıktığı için zaman ve uyum kaybı da en aza iner."
      },
      {
        "type": "h2",
        "text": "Neden En Ucuz Teklif Çoğu Zaman En Pahalıya Mal Olur?"
      },
      {
        "type": "p",
        "text": "Fiyat karşılaştırması yaparken sadece en düşük rakama odaklanmak, dijital pazarlamada sık yapılan bir hatadır. Çok düşük tekliflerin arkasında genellikle gizli kısıtlamalar bulunur: az sayıda içerik, şablon tasarımlar, stratejisiz paylaşımlar veya raporlamanın hiç olmaması. Bu durumda ödediğiniz para az olsa bile, harcadığınız reklam bütçesi ve kaybettiğiniz zaman çok daha pahalıya gelir."
      },
      {
        "type": "p",
        "text": "Dijital pazarlama bir görünürlük yatırımıdır; markanızı temsil eder. Düşük kaliteli içerik veya yanlış yönetilen reklam, kısa vadede tasarruf gibi görünse de uzun vadede marka algınıza zarar verir ve sonuç üretmeyen bir bütçe yakar. Önemli olan ödediğiniz tutarın karşılığında ne kadar değer ve sonuç aldığınızdır."
      },
      {
        "type": "h2",
        "text": "Şeffaf Fiyatlandırmanın Önemi"
      },
      {
        "type": "p",
        "text": "Güvenilir bir ajans, tekliflerinde neyin neden o bedelde olduğunu açıkça gösterir. Belirsiz 'her şey dahil' paketler yerine, hangi hizmetin hangi kapsamda sunulduğunu kalem kalem görmek hem sizi korur hem de iki ajansı adil biçimde karşılaştırmanızı sağlar. Şeffaflık, çalışma boyunca da sürekli olmalıdır: aylık raporlar, harcanan bütçenin nereye gittiği ve elde edilen sonuçlar net biçimde paylaşılmalıdır."
      },
      {
        "type": "ul",
        "items": [
          "Hizmet kalemlerinin ayrı ayrı ve anlaşılır şekilde listelenmesi",
          "Reklam bütçesi ile yönetim ücretinin net olarak ayrılması",
          "Aylık içerik ve raporlama sayılarının önceden belirtilmesi",
          "Sözleşme süresi ve kapsam değişikliklerinin açıkça yazılması"
        ]
      },
      {
        "type": "h2",
        "text": "Markanız İçin Net Teklif Nasıl Çıkar?"
      },
      {
        "type": "p",
        "text": "Gerçekçi bir fiyat, ancak ihtiyaçlarınız netleştikten sonra çıkar. Bu yüzden ciddi bir ajans, doğrudan rakam söylemek yerine önce sizi dinler: Hedefiniz ne, hangi sektördesiniz, mevcut dijital varlıklarınız nasıl, rakipleriniz kimler ve aylık olarak nasıl bir hacim hedefliyorsunuz? Bu sorular yanıtlandıktan sonra size özel, kapsamı belli ve şeffaf bir teklif hazırlanabilir."
      },
      {
        "type": "p",
        "text": "VOYO Dijital olarak Antalya ve Muratpaşa merkezli ekibimizle her markaya özel kapsam belirler, fiyatı bu kapsamın üzerine inşa ederiz. Böylece ödediğiniz her kalemin ne işe yaradığını baştan bilirsiniz. En doğru fiyatı öğrenmenin yolu, ihtiyacınızı kısa bir görüşmeyle netleştirmekten geçer."
      },
      {
        "type": "cta",
        "text": "Markanıza özel, şeffaf ve kapsamı net bir teklif için VOYO ekibiyle iletişime geçin. İhtiyaçlarınızı dinleyelim, size uygun çözümü birlikte planlayalım.",
        "href": "/#hizmetler",
        "label": "VOYO Hizmetlerini Keşfet"
      }
    ]
  },
  {
    "slug": "restoran-kafe-sosyal-medya-yonetimi",
    "title": "Restoran ve Kafeler İçin Sosyal Medya Yönetimi: Antalya İşletme Rehberi",
    "description": "Antalya'daki restoran ve kafeler için restoran sosyal medya yönetimi rehberi: içerik fikirleri, Reels, yerel hedefleme, Google yorumları ve turizm sezonu ipuçları.",
    "date": "2026-06-25",
    "category": "Sosyal Medya",
    "targetKeyword": "restoran sosyal medya yönetimi",
    "readingMinutes": 7,
    "blocks": [
      {
        "type": "p",
        "text": "Antalya'da bir restoran ya da kafe işletmek, lezzetli bir menü hazırlamaktan çok daha fazlasını gerektiriyor. Misafirleriniz artık bir mekânı keşfetmeden önce telefonlarını çıkarıp Instagram'a, Google'a ve TikTok'a bakıyor; gördükleri ilk birkaç kare çoğu zaman 'buraya gidelim mi' kararını veriyor. İşte bu noktada profesyonel bir restoran sosyal medya yönetimi, masaları dolduran sessiz ama güçlü bir satış kanalına dönüşüyor."
      },
      {
        "type": "p",
        "text": "Özellikle Antalya gibi yılın büyük bölümünde hem yerli hem yabancı ziyaretçi ağırlayan bir şehirde, sosyal medya sadece 'güzel fotoğraf paylaşmak' değil; doğru kişiye, doğru anda, iştah açan bir hikâye anlatmaktır. Bu rehberde restoran ve kafelerin neden güçlü bir sosyal medya varlığına ihtiyaç duyduğunu, hangi içeriklerin işe yaradığını ve yerel görünürlüğünüzü nasıl büyütebileceğinizi adım adım ele alıyoruz."
      },
      {
        "type": "h2",
        "text": "Restoran ve Kafelerin Neden Güçlü Sosyal Medyaya İhtiyacı Var?"
      },
      {
        "type": "p",
        "text": "Yeme-içme sektöründe karar süreci görsel ve duygusaldır. İnsanlar bir tabağın fotoğrafına, mekânın atmosferine ve diğer misafirlerin deneyimine bakarak 'burada kendimi iyi hissederim' hissini ararlar. Düzenli ve özenli bir sosyal medya akışı, henüz kapınızdan girmeden önce bu güveni inşa eder."
      },
      {
        "type": "p",
        "text": "Antalya'da rekabet yoğun. Aynı cadde üzerinde onlarca alternatif varken, sosyal medyada görünür ve akılda kalıcı olan işletme öne çıkar. Tutarlı bir hesap; mekânınızın kişiliğini yansıtır, yeni ürünleri duyurur, kampanyaları yayar ve en önemlisi sizi 'tanıdık' bir marka hâline getirir. Tanıdık olan ise tercih edilir."
      },
      {
        "type": "h2",
        "text": "İştah Açan İçerik Fikirleri: Menü, Ortam ve Reels"
      },
      {
        "type": "p",
        "text": "İçerik, sosyal medya yönetiminin kalbidir. Restoran ve kafelerde en çok ilgi gören paylaşımlar; lezzeti, ortamı ve insan hikâyesini birleştiren içeriklerdir. Tek tip tabak fotoğrafları yerine, mekânınızın ruhunu yansıtan çeşitli bir akış hedeflenmelidir."
      },
      {
        "type": "ul",
        "items": [
          "Menü vurgusu: İmza tabaklarınızın, taze sunumların ve mevsimlik lezzetlerin yakın çekim, iyi ışıklı görselleri.",
          "Mutfak arkası: Şefin elinden çıkan anlar, taze malzeme hazırlığı ve 'kamera arkası' kareler güven ve samimiyet kurar.",
          "Ortam ve atmosfer: Gün batımında terasınız, akşam ışıkları, kahve köşesi ya da kalabalık bir hafta sonu enerjisi.",
          "Reels ve kısa video: Bir kahvenin hazırlanışı, tabak sunumu, latte sanatı veya mekân turu gibi 10-20 saniyelik akıcı videolar en yüksek erişimi getirir.",
          "Misafir paylaşımları: Müşterilerinizin çektiği fotoğrafları (izinle) paylaşmak hem içerik üretir hem topluluk hissi yaratır.",
          "Kampanya ve duyurular: Yeni menü, canlı müzik geceleri, brunch saatleri veya özel günlere özel teklifler."
        ]
      },
      {
        "type": "p",
        "text": "Reels ve kısa videolar bugün erişimin motoru durumunda. Algoritma, izleyiciyi ekranda tutan akıcı videoları daha geniş kitlelere ulaştırıyor. Bu yüzden haftalık içerik planınızda mutlaka birkaç kısa videoya yer açmak, organik büyümenin en hızlı yolu."
      },
      {
        "type": "h2",
        "text": "Yerel Hedefleme: Doğru Antalyalıya ve Turiste Ulaşmak"
      },
      {
        "type": "p",
        "text": "Bir restoranın müşterisi genellikle belirli bir mesafededir; kimse bir kahve için şehrin öbür ucuna gitmez. Bu yüzden yerel hedefleme, restoran sosyal medya yönetiminin en kritik parçalarından biridir. Konum etiketleri, semt ve mahalle bazlı bilinirlik ile Antalya'ya özgü hashtag kullanımı içeriklerinizin doğru kişilerin karşısına çıkmasını sağlar."
      },
      {
        "type": "p",
        "text": "Ücretli reklamlarda ise konum, yaş, ilgi alanı ve dil bazlı hedefleme devreye girer. Örneğin yaz aylarında bölgedeki turistlere İngilizce veya farklı dillerde reklam göstermek, kış aylarında ise yerel halka brunch ve hafta içi kampanyalarıyla ulaşmak çok daha verimli sonuç verir. Doğru kurgulanan bir Meta reklam kampanyası, küçük bütçeyle bile yakın çevredeki potansiyel misafirlere ulaşmanızı sağlar."
      },
      {
        "type": "h2",
        "text": "Google Yorumları ve NFC Yorum Kartının Gücü"
      },
      {
        "type": "p",
        "text": "Sosyal medya kadar önemli bir diğer alan da Google üzerindeki itibarınız. Bir misafir 'yakınımdaki kafeler' diye aradığında, yüksek puanlı ve çok sayıda olumlu yorumu olan işletmeler en üstte ve en güvenilir görünür. Google yorumları hem yerel arama sıralamanızı yükseltir hem de yeni müşterinin tereddütünü ortadan kaldırır."
      },
      {
        "type": "p",
        "text": "Sorun şu ki, memnun müşteriler çoğu zaman yorum yazmayı unutur; yorum yazanlar genelde şikâyetçi olanlardır. Bu dengesizliği lehinize çevirmenin pratik yolu, masaya veya kasaya konan bir NFC yorum kartıdır. Misafir telefonunu karta dokundurur dokundurmaz doğrudan Google yorum sayfanız açılır; saniyeler içinde olumlu deneyimini puana çevirir. Bu küçük dokunuş, zamanla yorum sayınızı ve puan ortalamanızı belirgin şekilde yükseltir. NFC yorum çözümlerinin nasıl çalıştığını ayrıntılı incelemek isterseniz /nfc-yorum sayfasına göz atabilirsiniz."
      },
      {
        "type": "h2",
        "text": "Turizm Sezonunu Akıllıca Yönetmek"
      },
      {
        "type": "p",
        "text": "Antalya'da iş takvimi mevsimlere göre dalgalanır. Yaz aylarında talep yüksek olduğu için içeriğin dili çok dilli, görseller ferah ve 'tatil hissi' veren bir tona bürünmeli; kış aylarında ise yerel sadık müşteriyi elde tutan kampanyalara, sıcak içecek ve kapalı mekân konforuna ağırlık verilmeli. Sezona göre değişen bir içerik stratejisi, yılın tamamında istikrarlı bir doluluk sağlar."
      },
      {
        "type": "p",
        "text": "Sezon öncesi hazırlık da en az sezon kadar önemlidir. Yoğun döneme girmeden birkaç hafta önce hesabınızı güncel görsellerle canlandırmak, reklam kampanyalarını test etmek ve menü yeniliklerini duyurmak, sezonun ilk gününden itibaren dolu masalara başlamanızı sağlar."
      },
      {
        "type": "h2",
        "text": "Sürdürülebilir Yönetim ve Profesyonel Destek"
      },
      {
        "type": "p",
        "text": "İyi bir sosyal medya yönetimi tek seferlik bir iş değil, süreklilik isteyen bir disiplindir. Düzenli içerik üretimi, doğru saatlerde paylaşım, yorum ve mesajlara hızlı yanıt, kampanya kurgusu ve sonuçların ölçümü bir bütün olarak yürütülmelidir. Mutfakla ve servisle aynı anda ilgilenirken tüm bunları tek başına sürdürmek çoğu işletmeci için zorlayıcıdır."
      },
      {
        "type": "p",
        "text": "İşte bu noktada profesyonel destek devreye girer. Maliyet; paylaşım sıklığı, video prodüksiyon ihtiyacı, reklam bütçesi yönetimi ve platform sayısı gibi etkenlere göre işletmeden işletmeye değişir. Bu yüzden tek tip bir fiyat yerine, mekânınızın hedeflerine göre kurgulanan bir plan her zaman daha doğru sonuç verir. İhtiyacınıza özel net bir teklif için bizimle iletişime geçmeniz yeterli."
      },
      {
        "type": "cta",
        "text": "Restoran veya kafeniz için içerik üretiminden reklam yönetimine, Google yorumlarından NFC çözümlerine kadar uçtan uca destek alın. VOYO Dijital ile mekânınızın hikâyesini doğru kitleye anlatın.",
        "href": "/hizmetler/sosyal-medya-yonetimi",
        "label": "Sosyal Medya Yönetimini İncele"
      }
    ]
  },
  {
    "slug": "google-haritalarda-ust-siralara-cikma",
    "title": "Antalya'da Google Haritalarda Üst Sıralara Çıkma: 2026 Yerel SEO Rehberi",
    "description": "Antalya'da Google Haritalarda üst sıralara çıkma için adım adım yerel SEO rehberi: işletme profili, kategori, NAP, yorumlar, fotoğraflar ve dizinler.",
    "date": "2026-06-24",
    "category": "Yerel SEO",
    "targetKeyword": "google haritalarda üst sıralara çıkma",
    "readingMinutes": 7,
    "blocks": [
      {
        "type": "p",
        "text": "Antalya'da bir kafe, klinik, kuaför ya da yerel hizmet işletmesi işletiyorsanız, müşterilerinizin büyük kısmı sizi telefonlarından \"yakınımdaki\" aramalarıyla buluyor. İşte tam bu noktada Google Haritalarda üst sıralara çıkma, en az bir web sitesi kadar değerli hale geliyor. Çünkü harita sonuçlarında ilk üç sırada (yerel pakette) görünen işletmeler, o arama için tıklamaların ve telefon aramalarının çok büyük bölümünü topluyor."
      },
      {
        "type": "p",
        "text": "İyi haber şu: Google Haritalar sıralaması, sihirli bir formül değil; tutarlı ve uygulanabilir adımların toplamı. Bu rehberde Antalya ölçeğinde işletmeniz için Google İşletme Profili optimizasyonundan kategori seçimine, yorum stratejisinden yerel dizinlere kadar atmanız gereken adımları sırayla ele alıyoruz."
      },
      {
        "type": "h2",
        "text": "Google Haritalar Sıralaması Neye Göre Belirleniyor?"
      },
      {
        "type": "p",
        "text": "Google, yerel sonuçları üç ana faktöre göre sıralıyor: alaka düzeyi (işletmenizin arama niyetine ne kadar uyduğu), mesafe (kullanıcının konumuna yakınlık) ve öne çıkma (işletmenizin çevrimiçi ve çevrimdışı bilinirliği). Mesafeyi doğrudan değiştiremezsiniz, ama alaka düzeyini ve öne çıkmayı yönetebilirsiniz. Yani profilinizi ne kadar eksiksiz doldurur, ne kadar güçlü sinyaller verirseniz, Antalya genelindeki rakiplerinize göre o kadar görünür olursunuz."
      },
      {
        "type": "p",
        "text": "Bu üç faktörü besleyen temel kaldıraçlar; eksiksiz bir işletme profili, doğru kategori, tutarlı iletişim bilgileri, düzenli ve taze yorumlar, kaliteli fotoğraflar ve güvenilir dizin kayıtlarıdır. Aşağıda her birini tek tek açıyoruz."
      },
      {
        "type": "h2",
        "text": "1. Google İşletme Profilini Eksiksiz Doldurun"
      },
      {
        "type": "p",
        "text": "Her şeyin temeli, ücretsiz olan Google İşletme Profili'dir (eski adıyla Google My Business). Profilinizi sahiplenip doğruladıktan sonra, boş bırakılan her alan kaybedilen bir sıralama fırsatıdır. Google, eksiksiz profilleri hem daha alakalı hem de daha güvenilir sayar."
      },
      {
        "type": "ul",
        "items": [
          "İşletme adını tabeladaki gerçek adıyla yazın; içine anahtar kelime sıkıştırmayın.",
          "Açık adres, telefon, web sitesi ve çalışma saatlerini (tatil günleri dâhil) güncel tutun.",
          "İşletme açıklamasını, sunduğunuz hizmetleri ve Antalya/Muratpaşa gibi hizmet bölgenizi doğal biçimde anlatacak şekilde yazın.",
          "Hizmetler, ürünler, randevu bağlantısı, sıkça sorulan sorular gibi tüm bölümleri doldurun.",
          "Düzenli olarak \"Güncellemeler\" (gönderiler) paylaşarak profilin aktif olduğunu gösterin."
        ]
      },
      {
        "type": "h2",
        "text": "2. Doğru Kategori Seçimi Yapın"
      },
      {
        "type": "p",
        "text": "Kategori, Google'ın işletmenizi hangi aramalarda göstereceğini belirleyen en kritik ayarlardan biridir. Ana kategoriniz işin özünü yansıtmalı; örneğin \"Restoran\" yerine \"İtalyan Restoranı\" gibi daha spesifik bir seçim, alaka düzeyinizi artırır. Ardından sunduğunuz tüm hizmetleri ek kategorilerle destekleyin."
      },
      {
        "type": "p",
        "text": "Rakiplerinizin hangi kategorileri kullandığını incelemek iyi bir başlangıçtır, ancak yalnızca gerçekten sunduğunuz hizmetlere ait kategorileri ekleyin. Alakasız kategoriler hem kullanıcı güvenini hem de sıralamayı olumsuz etkiler."
      },
      {
        "type": "h2",
        "text": "3. NAP Tutarlılığını Sağlayın"
      },
      {
        "type": "p",
        "text": "NAP; Name (ad), Address (adres) ve Phone (telefon) bilgilerinin kısaltmasıdır. İşletme adınızın, adresinizin ve telefonunuzun internetteki her yerde birebir aynı yazılması gerekir. Google İşletme Profili'nizde \"Cad.\" yazıp, web sitenizde \"Caddesi\", bir dizinde başka türlü yazılması, Google'ın hangi bilginin doğru olduğunu sorgulamasına ve güvenin azalmasına yol açar."
      },
      {
        "type": "p",
        "text": "Web sitenizdeki iletişim sayfasından sosyal medya hesaplarınıza, yerel rehberlerden harita kayıtlarına kadar tüm noktalarda aynı yazım biçimini kullanın. Telefon numarasını da her yerde aynı formatta tutun. Bu tutarlılık, yerel SEO'nun en çok ihmal edilen ama en etkili adımlarından biridir."
      },
      {
        "type": "h2",
        "text": "4. Yorum Sayısını ve Tazeliğini Artırın (NFC Yorum Kartı Avantajı)"
      },
      {
        "type": "p",
        "text": "Yorumlar, Google Haritalar sıralamasının en güçlü sinyallerinden biridir. Önemli olan sadece toplam yorum sayısı değil; yorumların ortalama puanı, içeriği ve özellikle tazeliğidir. Düzenli aralıklarla gelen yeni ve gerçek yorumlar, işletmenizin canlı ve tercih edilen bir yer olduğunu gösterir. Aksine, aylardır hiç yorum almayan bir profil durağan görünür."
      },
      {
        "type": "p",
        "text": "Buradaki en büyük zorluk, memnun müşterinin yorum yazma sürecini tamamlamasını sağlamaktır. NFC Google yorum kartları tam da bu sürtünmeyi ortadan kaldırır: müşteri telefonunu karta veya stickera dokundurduğunda doğrudan yorum yazma ekranına gider. Antalya'daki kafe, restoran, klinik ve mağazalar için bu yöntem, yorum akışını sürekli ve taze tutmanın en pratik yollarından biridir. Yine de yorumların gönüllü ve gerçek olması gerektiğini unutmayın; sahte yorum almaktan kesinlikle kaçının. Gelen yorumlara, olumlu ya da olumsuz, nazikçe yanıt vermek de Google'a aktif bir işletme sinyali verir."
      },
      {
        "type": "h2",
        "text": "5. Kaliteli ve Düzenli Fotoğraflar Yükleyin"
      },
      {
        "type": "p",
        "text": "Fotoğraflar hem kullanıcı kararını hem de profilin canlılığını doğrudan etkiler. Bol ve net fotoğrafı olan işletmeler, harita sonuçlarında daha fazla tıklama ve yön tarifi alır. Düzenli fotoğraf eklemek, Google'a profilinizin güncel tutulduğunu gösterir."
      },
      {
        "type": "ul",
        "items": [
          "İşletmenizin dış cephesini, girişini ve tabelasını net biçimde gösterin; müşteri sizi kolayca bulsun.",
          "İç mekânı, ürünleri veya hizmet ortamını gerçek ve aydınlık çekimlerle yansıtın.",
          "Ekibinizden ve işletme atmosferinden kareler ekleyin; bu güven oluşturur.",
          "Stok fotoğraf yerine gerçek, özgün görseller kullanın.",
          "Belirli aralıklarla yeni fotoğraflar ekleyerek profili güncel tutun."
        ]
      },
      {
        "type": "h2",
        "text": "6. Yerel Anahtar Kelimeler ve Web Sitesi Desteği"
      },
      {
        "type": "p",
        "text": "Google Haritalar profili tek başına güçlüdür, ama web siteniz onu besleyen ana destektir. Sitenizde Antalya ve ilçe bazlı (örneğin Muratpaşa, Lara, Konyaaltı) yerel anahtar kelimeleri; başlıklarda, hizmet sayfalarında ve iletişim sayfasında doğal biçimde kullanın. \"Antalya'da [hizmet]\" gibi ifadeler, hem organik aramada hem de harita sonuçlarında alaka düzeyinizi güçlendirir."
      },
      {
        "type": "p",
        "text": "Web sitenize bir harita yerleştirmek, NAP bilgilerini görünür kılmak ve mümkünse bölgeye özel içerikler (blog yazıları, hizmet bölgesi sayfaları) üretmek, yerel sinyallerinizi bütünleştirir. Profil ve site birbirini desteklediğinde sıralama etkisi katlanarak artar."
      },
      {
        "type": "h2",
        "text": "7. Dizinler ve Citation (Atıf) Kayıtları"
      },
      {
        "type": "p",
        "text": "Citation, işletmenizin adının ve iletişim bilgilerinin başka web sitelerinde ve rehberlerde geçmesidir. Güvenilir yerel dizinlerde tutarlı kayıtlara sahip olmak, Google'ın gözünde \"öne çıkma\" sinyalinizi güçlendirir. Burada da yine NAP tutarlılığı belirleyicidir; her kayıt aynı bilgileri içermelidir."
      },
      {
        "type": "p",
        "text": "Sektörünüze ve Antalya bölgesine uygun rehberlere, harita ve değerlendirme platformlarına, ilgili meslek/oda dizinlerine kayıt olun. Niceliğe değil kaliteye odaklanın: birkaç güçlü ve doğru kayıt, onlarca özensiz kayıttan daha değerlidir."
      },
      {
        "type": "h2",
        "text": "Sıralama Bir Maraton, Hız Kazandırılabilir"
      },
      {
        "type": "p",
        "text": "Google Haritalarda üst sıralara çıkma, tek seferlik bir işlem değil; profil bakımı, yorum yönetimi ve içerik tutarlılığını içeren sürekli bir süreçtir. Yukarıdaki adımları disiplinle uyguladığınızda, Antalya'daki rakiplerinizin önüne geçmeniz an meselesidir. Önemli olan, doğru temeli kurmak ve özellikle yorum akışını sürekli taze tutmaktır."
      },
      {
        "type": "cta",
        "text": "Memnun müşterilerinizin yorumlarını tek dokunuşla toplamak ve harita sıralamanızı hızlandırmak istiyorsanız, VOYO'nun NFC Google yorum çözümlerine göz atın. Antalya'daki işletmeniz için kurulumdan yorum stratejisine kadar yanınızdayız.",
        "href": "/nfc-yorum",
        "label": "NFC Google Yorum Ürünlerini İncele"
      }
    ]
  },
  {
    "slug": "mobil-uygulama-yaptirmak-ne-kadar",
    "title": "Mobil Uygulama Yaptırmak Ne Kadar? 2026 Bütçe Rehberi",
    "description": "Mobil uygulama yaptırma fiyatları neye göre değişir? Maliyeti belirleyen faktörler, MVP yaklaşımı ve doğru bütçe planlaması için 2026 rehberi.",
    "date": "2026-06-23",
    "category": "Web & Teknoloji",
    "targetKeyword": "mobil uygulama yaptırma fiyatları",
    "readingMinutes": 7,
    "blocks": [
      {
        "type": "p",
        "text": "Bir iş fikriniz var ve onu telefonlara taşımak istiyorsunuz; ancak ilk sorduğunuz soru çoğu zaman aynı oluyor: mobil uygulama yaptırma fiyatları gerçekte neye göre belirleniyor? Maalesef bu sorunun tek bir net cevabı yok. Çünkü mobil uygulama, raftan satın alınan standart bir ürün değil; tıpkı bir ev inşaatı gibi metrekaresine, malzemesine ve kullanılan işçiliğe göre değişen, tamamen size özel bir yapım sürecidir."
      },
      {
        "type": "p",
        "text": "Basit bir bilgilendirme uygulaması ile binlerce kullanıcıya hizmet veren, ödeme alan, canlı veri işleyen bir platform arasında ciddi bir maliyet farkı vardır. Bu yazıda size hayali rakamlar vermek yerine, bütçenizi gerçekten etkileyen faktörleri tek tek açıklayacağız. Böylece bir ajansla görüştüğünüzde neyin ne anlama geldiğini bilerek, doğru kararı verebileceksiniz."
      },
      {
        "type": "h2",
        "text": "Mobil Uygulama Maliyetini Belirleyen Temel Faktörler"
      },
      {
        "type": "p",
        "text": "Bir uygulamanın fiyatı, tek bir kalemden değil birbirini etkileyen birçok bileşenden oluşur. Bu bileşenleri anlamak, hem bütçenizi planlamanızı hem de gereksiz harcamalardan kaçınmanızı sağlar. Maliyeti yukarı veya aşağı çeken başlıca unsurlar şunlardır:"
      },
      {
        "type": "ul",
        "items": [
          "Özellik kapsamı: Uygulamanın kaç ekrandan oluştuğu, kullanıcı girişi, bildirim, harita, mesajlaşma gibi her ek özellik geliştirme süresini artırır.",
          "Native mi cross-platform mı: iOS ve Android için ayrı ayrı yazılan native uygulamalar ile tek kod tabanından iki platforma çıkan cross-platform çözümler farklı maliyet ve performans dengeleri sunar.",
          "Tasarım kalitesi: Hazır şablonla ilerlemek mi yoksa markaya özel, özgün bir arayüz (UI/UX) mi istediğiniz fiyatı doğrudan etkiler.",
          "Backend altyapısı: Verilerin saklandığı sunucu tarafı, kullanıcı yönetimi ve yönetim paneli gerektiren uygulamalar daha kapsamlı bir çalışma ister.",
          "Üçüncü taraf entegrasyonlar: Ödeme sistemleri, kargo takibi, CRM veya muhasebe yazılımlarıyla bağlantılar ek geliştirme yükü getirir."
        ]
      },
      {
        "type": "h2",
        "text": "Native ve Cross-Platform Arasındaki Fark Neden Önemli?"
      },
      {
        "type": "p",
        "text": "Bütçeyi en çok etkileyen teknik kararlardan biri budur. Native geliştirmede iOS için ayrı, Android için ayrı kod yazılır; bu da en yüksek performansı ve platforma özgü deneyimi sunarken iki kat geliştirme eforu anlamına gelebilir. Cross-platform (React Native, Flutter gibi) yaklaşımda ise tek bir kod tabanı her iki platformda çalışır, bu da süreyi ve maliyeti çoğu projede belirgin biçimde düşürür."
      },
      {
        "type": "p",
        "text": "Hangisinin doğru olduğu tamamen projeye bağlıdır. Yoğun grafik, oyun veya donanıma derin erişim gerektiren uygulamalarda native mantıklıyken; standart bir e-ticaret, randevu veya içerik uygulamasında cross-platform hem ekonomik hem de hızlıdır. Doğru tercih, bütçenizi en verimli kullanmanın anahtarıdır."
      },
      {
        "type": "h2",
        "text": "MVP Yaklaşımı: Küçük Başlayıp Büyümek"
      },
      {
        "type": "p",
        "text": "Pek çok girişimcinin en büyük hatası, ilk sürümde aklındaki tüm özellikleri uygulamaya sığdırmaya çalışmaktır. Oysa akıllı yaklaşım MVP'dir; yani fikrinizi kanıtlayacak en temel özelliklerle yola çıkan bir minimum uygulanabilir ürün. MVP ile hem başlangıç bütçenizi makul tutar hem de gerçek kullanıcı geri bildirimiyle hangi özelliklerin gerçekten gerekli olduğunu öğrenirsiniz."
      },
      {
        "type": "p",
        "text": "Bu yöntem, henüz kullanıcıların talep etmediği özelliklere bütçe harcama riskini ortadan kaldırır. Önce çekirdek değeri yayına alır, gelen veriye ve talebe göre adım adım büyürsünüz. Böylece her yatırım, kanıtlanmış bir ihtiyaca dayanır."
      },
      {
        "type": "h2",
        "text": "Görünmeyen Kalem: Bakım ve Güncelleme Maliyeti"
      },
      {
        "type": "p",
        "text": "Mobil uygulama yaptırma fiyatları konuşulurken çoğu zaman atlanan bir gerçek vardır: uygulama yayınlandığında iş bitmez, asıl başlar. iOS ve Android her yıl yeni sürümler çıkarır, mağaza kuralları değişir, kullanıcılar yeni özellik ister ve zamanla küçük hatalar ortaya çıkar. Bu yüzden bakım, tek seferlik değil sürekli bir kalemdir."
      },
      {
        "type": "p",
        "text": "Sağlıklı bir bütçe planı, ilk geliştirme maliyetinin yanında yıllık bakım, sunucu ve güncelleme giderlerini de hesaba katar. Uygulamanızı uzun ömürlü ve güvenli tutmanın yolu, bu süreklilik maliyetini en baştan öngörmekten geçer."
      },
      {
        "type": "h2",
        "text": "Doğru Bütçe Planlaması Nasıl Yapılır?"
      },
      {
        "type": "p",
        "text": "Gerçekçi bir bütçe, rakamla değil netlikle başlar. Uygulamanızın çözeceği temel problemi, hedef kitlenizi ve olmazsa olmaz özelliklerinizi netleştirdiğinizde, bir ajans size çok daha doğru ve şeffaf bir teklif sunabilir. Belirsiz bir istek belirsiz bir fiyat getirir; net bir kapsam ise net bir bütçe demektir."
      },
      {
        "type": "p",
        "text": "VOYO Dijital olarak yaklaşımımız, size standart bir paket dayatmak değil; ihtiyacınızı dinleyip işinize gerçekten değer katacak bir yol haritası çıkarmaktır. Bazen en doğru cevap kapsamlı bir uygulama değil, hızlı bir MVP veya farklı bir dijital çözüm olabilir. Önceliğimiz harcadığınız her kuruşun karşılığını almanızdır."
      },
      {
        "type": "cta",
        "text": "Mobil uygulama fikrinizi konuşmaya ve işinize özel net bir bütçe planı çıkarmaya hazırsanız, yazılım ekibimizle tanışın. İhtiyacınızı dinleyip size en uygun çözümü birlikte belirleyelim.",
        "href": "/hizmetler/yazilim-cozumleri",
        "label": "Yazılım Çözümlerini İncele"
      }
    ]
  },
  {
    "slug": "e-ticaret-urun-fotografi-kurallari",
    "title": "Trendyol & Hepsiburada İçin Ürün Fotoğrafı: 7 Altın Kural",
    "description": "Trendyol ve Hepsiburada'da satışları artıran e-ticaret ürün fotoğrafı kuralları: beyaz fon, doğru ışık, açılar, çözünürlük ve dönüşüm odaklı 7 altın kural.",
    "date": "2026-06-22",
    "category": "Fotoğraf & Video",
    "targetKeyword": "e-ticaret ürün fotoğrafı",
    "readingMinutes": 7,
    "blocks": [
      {
        "type": "p",
        "text": "Bir alışveriş sitesinde müşterinin ürününüze dair verdiği ilk karar, çoğu zaman ürünü eline bile almadan, ekrandaki kareye bakarak oluşur. İşte tam bu yüzden e-ticaret ürün fotoğrafı, pazaryeri başarısının görünmeyen ama en belirleyici unsurlarından biridir. Trendyol ve Hepsiburada gibi platformlarda yüzlerce satıcı aynı ürünü listelerken, öne çıkmanın yolu fiyattan önce çoğu kez görselin kalitesinden geçer."
      },
      {
        "type": "p",
        "text": "Profesyonel ürün çekimi sadece estetik bir tercih değil; doğrudan tıklanma oranını, sepete ekleme davranışını ve iade oranlarını etkileyen bir yatırımdır. Bu yazıda Trendyol ve Hepsiburada için ürün fotoğraflarınızı bir üst seviyeye taşıyacak 7 altın kuralı, pazaryeri kurallarıyla birlikte uygulanabilir biçimde anlatıyoruz."
      },
      {
        "type": "h2",
        "text": "1. Beyaz Fon Kuralına Mutlaka Uyun"
      },
      {
        "type": "p",
        "text": "Hem Trendyol hem de Hepsiburada, ana ürün görselinde temiz beyaz fon (genellikle RGB 255-255-255) ister. Bunun nedeni sadece kurumsal bir standart değil; beyaz fon ürünü arka plandan tamamen ayırarak müşterinin dikkatini doğrudan ürüne odaklar. Gölgesiz veya yumuşak gölgeli beyaz fon, listeleme sayfasında ürünlerinizin tutarlı ve düzenli görünmesini sağlar. Ana görselde logo, yazı, çerçeve, su damgası veya promosyon etiketi kullanmaktan kaçının; bu öğeler hem platform kurallarını ihlal eder hem de profesyonellikten uzak bir izlenim bırakır."
      },
      {
        "type": "h2",
        "text": "2. Işığı Doğru Kurun, Gölgeyi Kontrol Edin"
      },
      {
        "type": "p",
        "text": "Ürün fotoğrafçılığının kalbi ışıktır. Sert ve tek yönlü ışık, üründe parlama lekeleri ve sert gölgeler oluşturarak rengin ve dokunun yanlış görünmesine yol açar. İdeal sonuç için yumuşak ve dağınık ışık kullanılır; softbox, difüzör veya geniş bir ışık çadırı bu yumuşaklığı sağlar. Renklerin gerçek tonunu yansıtmak için beyaz dengesinin doğru ayarlanması da kritiktir. Müşteri eline aldığında üründe gördüğü rengin ekrandakiyle aynı olması, iade oranını düşüren en önemli faktörlerden biridir."
      },
      {
        "type": "h2",
        "text": "3. Birden Fazla Açıdan Çekim Yapın"
      },
      {
        "type": "p",
        "text": "Müşteri ürünü fiziksel olarak inceleyemediği için, fotoğraflar bu deneyimin yerini tutmalıdır. Tek bir önden kare yeterli değildir. Ürünü farklı açılardan göstererek müşterinin kafasındaki soru işaretlerini ortadan kaldırırsınız. Bu sayede ürünün hacmi, formu ve oranları net biçimde algılanır."
      },
      {
        "type": "ul",
        "items": [
          "Önden ana görsel: temiz beyaz fonda, ürünün en tanıdık açısı",
          "Yan ve arka açılar: kalınlık, derinlik ve arka detaylar",
          "Üstten ve alttan kareler: form ve oturuş şeklinin anlaşılması",
          "Yakın plan (makro) detay: doku, dikiş, malzeme kalitesi ve etiketler",
          "Kullanım/ölçek karesi: ürünün gerçek boyutunu anlatan referans"
        ]
      },
      {
        "type": "h2",
        "text": "4. Detay Karelerini İhmal Etmeyin"
      },
      {
        "type": "p",
        "text": "Müşterinin satın alma kararını çoğu zaman küçük detaylar belirler. Bir tekstil üründe dikiş kalitesi, bir elektronik üründe bağlantı noktaları, bir takıda taşın işçiliği... Yakın plan detay kareleri, ürünün kalitesini kanıtlar ve güven inşa eder. Bu kareler aynı zamanda iade oranını düşürür; çünkü müşteri ne aldığını net olarak görerek karar verdiğinde, beklentisiyle ürün arasındaki fark en aza iner. Detay fotoğrafları, özellikle premium ürünlerde fiyatınızı haklı çıkaran en güçlü argümandır."
      },
      {
        "type": "h2",
        "text": "5. Lifestyle Kareleriyle Hayal Ettirin"
      },
      {
        "type": "p",
        "text": "Beyaz fon ürünü tarafsız biçimde gösterirken, lifestyle (yaşam tarzı) kareleri ürünü bağlamına oturtur ve duygusal bir bağ kurar. Bir mutfak ürününü gerçek bir tezgahta, bir çantayı sokakta bir modelin omzunda, bir dekorasyon ürününü düzenlenmiş bir odada göstermek, müşterinin ürünü kendi hayatında hayal etmesini sağlar. Pazaryerlerinde ana görsel beyaz fon olmalıdır; ancak galerideki ek görsellerde lifestyle karelerine yer vermek dönüşümü belirgin şekilde artırır. Bu kareler ürüne ölçek, kullanım senaryosu ve karakter katar."
      },
      {
        "type": "h2",
        "text": "6. Çözünürlük ve Format Kurallarına Dikkat Edin"
      },
      {
        "type": "p",
        "text": "Düşük çözünürlüklü, bulanık veya sıkıştırılmış görseller hem platform onayından geçmez hem de güven kaybına yol açar. Trendyol ve Hepsiburada, yüksek çözünürlüklü görseller ister; bu sayede müşteri ürünü yakınlaştırarak (zoom) detayları inceleyebilir. Genel olarak en az 1000 piksel ve üzeri kare boyutları, doğru en-boy oranı ve net odak şarttır. Görselleri platform spesifikasyonlarına göre optimize ederken kaliteyi korumak, hem yükleme onayı hem de kullanıcı deneyimi için önemlidir. Çözünürlük standartlarını sağlayamayan görseller, ürün ne kadar iyi olursa olsun amatör algılanır."
      },
      {
        "type": "h2",
        "text": "7. Tutarlı Bir Görsel Dil Oluşturun"
      },
      {
        "type": "p",
        "text": "Tek bir ürünün iyi çekilmiş olması yeterli değildir; tüm kataloğunuzun aynı çekim mantığıyla, aynı ışık ve çerçeveleme diliyle hazırlanması markanızı güçlü kılar. Müşteri vitrininize girdiğinde düzenli, profesyonel ve güvenilir bir tablo görmelidir. Tutarlı görsel dil, marka algısını yükseltir ve tekrarlayan satışları besler. Bu yüzden ürün fotoğraflarını dağınık biçimde değil, planlı bir çekim sürecinin parçası olarak ele almak gerekir."
      },
      {
        "type": "h2",
        "text": "Profesyonel Çekimin Dönüşüme Etkisi"
      },
      {
        "type": "p",
        "text": "İyi hazırlanmış ürün fotoğrafları, reklam bütçenizden bağımsız olarak organik tıklanma ve dönüşüm oranlarınızı yukarı taşır. Aynı ürün, profesyonel çekildiğinde daha pahalı ve daha güvenilir algılanır; bu da hem satışı hem de marjı olumlu etkiler. Çekim maliyetini etkileyen faktörler ürün sayısı, ürün tipi (tekstil, takı, gıda, elektronik gibi), modelli çekim ihtiyacı, lifestyle kare adedi ve retouch (rötuş) seviyesidir. Bu nedenle net bir bütçe yerine, ihtiyacınıza özel bir planlama yapmak en doğru yaklaşımdır."
      },
      {
        "type": "p",
        "text": "VOYO Dijital olarak Antalya merkezli stüdyo ve saha çekimlerimizle, pazaryeri standartlarına tam uyumlu, dönüşüm odaklı ürün fotoğrafları üretiyoruz. Ürün gamınıza ve hedeflerinize göre size en uygun çekim planını birlikte çıkaralım."
      },
      {
        "type": "cta",
        "text": "Trendyol ve Hepsiburada satışlarınızı artıracak profesyonel ürün çekimleri için ekibimizle iletişime geçin, ihtiyacınıza özel teklifinizi alın.",
        "href": "/hizmetler/foto-video-cekim",
        "label": "Foto & Video Çekim Hizmetini İncele"
      }
    ]
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Yayın tarihine göre yeniden eskiye sıralı liste */
export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}
