/**
 * Sektörel landing sayfaları — yüksek bütçeli ("paralı müşteri") dikeyler için
 * dönüşüm odaklı, SEO optimize sayfalar. İçerik `/sektorler/[slug]` altında.
 */

export type SectorItem = { title: string; desc: string };

export type SectorPage = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  secondaryKeywords?: string[];
  /** Çarpıcı H1 — sektöre özel fayda */
  heroHeadline: string;
  /** Giriş paragrafları */
  intro: string[];
  /** Sektörün dijitalde yaşadığı zorluklar */
  challenges: SectorItem[];
  /** VOYO'nun bu sektöre özel çözümleri/yaklaşımı */
  approach: SectorItem[];
  /** Sektöre özel SSS */
  faqs: { q: string; a: string }[];
};

export const sectorPages: SectorPage[] = [
  {
    "slug": "guzellik-estetik-merkezleri",
    "name": "Güzellik & Estetik Merkezleri",
    "seoTitle": "Güzellik & Estetik Merkezi Dijital Pazarlama Antalya",
    "seoDescription": "Antalya'da güzellik salonu, lazer epilasyon ve medikal estetik merkezleri için Instagram, Google reklam ve randevu odaklı dijital pazarlama. VOYO ile dolu ajanda.",
    "primaryKeyword": "güzellik merkezi dijital pazarlama Antalya",
    "secondaryKeywords": [
      "lazer epilasyon Instagram reklam Antalya",
      "estetik merkezi sosyal medya yönetimi",
      "kuaför güzellik salonu Google reklam",
      "medikal estetik dijital pazarlama",
      "Antalya güzellik salonu randevu sistemi",
      "cilt bakım merkezi Google yorum"
    ],
    "heroHeadline": "Boş Koltuk Kalmasın: Antalya'da Güzellik & Estetik Merkezinize Dolu Ajanda Getiren Dijital Pazarlama",
    "intro": [
      "Güzellik ve estetik sektöründe müşteri kararını bir tek şeyle verir: gözüyle gördüğü sonuç ve başkalarının yorumu. Potansiyel müşteri lazer epilasyona, cilt bakımına veya medikal estetik bir işleme karar vermeden önce mutlaka Instagram'ınıza bakar, öncesi/sonrası kareleri inceler, Google'da kaç yıldızınız olduğunu kontrol eder. Bu yolculuğun her adımında zayıf bir izlenim bırakırsanız, o müşteri sessizce rakibinizin koltuğuna oturur. İşte tam bu yüzden güzellik merkezleri için dijital pazarlama, lüks değil; doluluk oranınızı doğrudan belirleyen bir işletme aracıdır.",
      "Antalya gibi hem yerel halkın hem de sezonluk yoğun bir nüfusun olduğu bir şehirde, doğru kişiye doğru anda ulaşmak çok daha değerli. Muratpaşa, Konyaaltı, Lara ya da hizmet verdiğiniz mahallede 'yakınımdaki lazer epilasyon' veya 'Antalya cilt bakımı' aramalarında karşısına çıkmak; kampanyalarınızı doğru semte odaklamak; Instagram Reels'le salonunuzun atmosferini ve sonuçlarını canlı göstermek, randevu defterinizi dolduran şeydir.",
      "VOYO olarak biz bu sektörün dilini, mevzuat hassasiyetini ve görsel standartlarını biliyoruz. Amacımız beğeni toplamak değil; ölçülebilir biçimde randevu, dolu koltuk ve geri gelen sadık müşteri getirmek. Estetik merkezinizi sadece güzel göstermiyoruz, dolu çalışmasını sağlıyoruz."
    ],
    "challenges": [
      {
        "title": "Görsel kalite zayıf, sonuç gösterilemiyor",
        "desc": "Bu sektör %100 görsele dayanır. Kötü ışıkta, telefonla çekilmiş öncesi/sonrası kareleri ve dağınık bir feed, ne kadar iyi iş yaparsanız yapın güveni yok eder. Müşteri 'buradan çıkınca ben de böyle mi olacağım' sorusunun cevabını ekranda göremezse randevu almaz. Profesyonel foto/video ve tutarlı bir Instagram estetiği olmadan premium fiyat talep edemezsiniz."
      },
      {
        "title": "Google yorumları az ya da rakipten geride",
        "desc": "Lazer, medikal estetik ve cilt bakımı gibi 'kişiye dokunulan' hizmetlerde itibar her şeydir. Memnun müşteriler sessizce gider, tek bir kötü deneyim ise yıldız ortalamanızı düşürür. Yorum sayınız ve puanınız rakibinizin gerisindeyse, haritada üstte çıksanız bile tercih edilmezsiniz."
      },
      {
        "title": "Reklam bütçesi yanlış kitleye akıyor",
        "desc": "Hedefleme yapılmadan verilen reklamlar şehrin yarısına, hiç gelmeyecek kişilere gösterilir. Mahalle/ilçe bazında, yaş ve ilgi alanına göre daraltılmamış kampanyalar parayı yakar. Ayrıca medikal estetik ve sağlıkla ilgili işlemlerde reklam mevzuatına uygun olmayan içerikler hesabın askıya alınmasına bile yol açar."
      },
      {
        "title": "Boş saatler ve sezonsal iniş çıkışlar yönetilemiyor",
        "desc": "Hafta içi öğleden önceler boş, sezon sonunda ajanda seyrelir, kampanya yapılacak dönem kaçırılır. Randevu akışı düzensiz olduğunda hem cironuz dalgalanır hem de ekibiniz atıl kalır. Doğru zamanda doğru kampanya kurgusu olmadan bu döngüden çıkmak zor."
      }
    ],
    "approach": [
      {
        "title": "Sonuç odaklı profesyonel foto & video çekimi",
        "desc": "Salonunuzda yerinde profesyonel çekim yaparız: doğru ışıkta, mahremiyete saygılı, öncesi/sonrası kareleri, işlem anları ve mekan atmosferi. Reels ve kısa video kurguları ile salonunuzun kalitesini ekranda hissettiririz. Premium görünüm, premium müşteri ve premium fiyat getirir."
      },
      {
        "title": "Randevu getiren Instagram & sosyal medya yönetimi",
        "desc": "Sadece paylaşım yapmıyoruz; takipçiyi randevuya çeviren bir içerik stratejisi kuruyoruz. Tutarlı görsel kimlik, hikaye ve Reels akışı, soru-cevap içerikleri, DM ve yorum yönetimi ile etkileşimi gerçek müşteriye dönüştürürüz. Hesabınız vitrininiz gibi çalışır."
      },
      {
        "title": "Mahalle bazlı Google & Meta reklam yönetimi",
        "desc": "Konyaaltı, Lara, Muratpaşa ya da hedef semtlerinizde 'yakınımdaki' aramalarında öne çıkmak için Google Arama ve Harita reklamları; Instagram/Facebook'ta yaş, cinsiyet ve ilgi alanına göre daraltılmış kampanyalar kurarız. Sağlık ve estetik reklam mevzuatına uygun, askıya alınmayan içeriklerle bütçeniz boşa gitmez."
      },
      {
        "title": "Google yorumları & itibar yönetimi (NFC yorum kartı)",
        "desc": "Salon çıkışında masaya veya resepsiyona koyduğunuz NFC yorum kartıyla memnun müşteri tek dokunuşla Google'da yorum bırakır. Yorum sayınız ve yıldız ortalamanız hızla yükselir, haritada hem üstte çıkar hem de tıklanır hale gelirsiniz. Gelen yorumlara profesyonel yanıt yönetimi de bizde."
      },
      {
        "title": "Online randevu ve lead akışı kurgusu",
        "desc": "Web sitesi, Instagram ve WhatsApp üzerinden gelen talepleri kaçırmayacak bir randevu/lead akışı kurarız. Hızlı dönüş, otomatik yönlendirme ve takip ile boş saatleri doldurur, gelen ilgiyi gerçek randevuya çeviririz."
      },
      {
        "title": "Sezonsal kampanya & sadakat kurgusu",
        "desc": "Lazer sezonu, yaz öncesi cilt bakımı, bayram ve özel gün kampanyalarını takvime bağlar, boş dönemleri kampanyayla doldururuz. Paket teklifleri ve geri kazanım kurgularıyla bir kez gelen müşteriyi sadık müşteriye dönüştürürüz."
      }
    ],
    "faqs": [
      {
        "q": "Medikal estetik ve sağlıkla ilgili işlemlerin reklamını yapabiliyor musunuz?",
        "a": "Evet, ancak sağlık ve estetik alanında reklam mevzuatı hassastır. Tedavi vaadi, 'iyileştirir/garanti' gibi ifadeler ve bazı görseller hem yasal sorun hem de reklam hesabının askıya alınmasına yol açabilir. Biz mevzuata uygun, askıya alınmayan ama yine de ikna eden içerikler kurgular, klinik/merkezinizin reklamını güvenli şekilde yürütürüz."
      },
      {
        "q": "Öncesi/sonrası görselleri müşteri mahremiyetini ihlal etmeden nasıl kullanıyorsunuz?",
        "a": "Mahremiyet bizim için önceliklidir. Görselleri yalnızca müşteri onayıyla, gerektiğinde yüz/kimlik gizleyerek ve etik kurallara uygun şekilde kullanırız. Çekim sırasında salonunuzdaki diğer müşterilerin de gizliliğini koruyacak şekilde planlama yaparız."
      },
      {
        "q": "Google yorumlarımı NFC kartla artırmak gerçekten işe yarıyor mu?",
        "a": "Evet. Memnun müşteriler genelde yorum bırakmayı unutur; NFC kart bu süreci tek dokunuşa indirir. Salon çıkışında müşteriye kartı uzattığınızda yorum sayınız ve yıldız ortalamanız belirgin şekilde artar. Bu da Google Haritalar'da hem sıralamanızı hem de tıklanma oranınızı yükseltir."
      },
      {
        "q": "Reklam ve sosyal medyanın randevuya dönüştüğünü nasıl ölçüyorsunuz?",
        "a": "Sadece beğeni ve takipçi değil; gelen mesaj, randevu talebi, arama ve dolan koltuk sayısını takip ederiz. Hangi kampanyanın kaç randevu getirdiğini şeffaf raporlarla gösterir, bütçeyi en çok dönüşüm getiren kanala yönlendiririz."
      }
    ]
  },
  {
    "slug": "dis-klinikleri",
    "name": "Diş Klinikleri",
    "seoTitle": "Diş Kliniği Dijital Pazarlama Antalya | VOYO",
    "seoDescription": "Antalya diş klinikleri için Google yorumları, randevu odaklı reklam, güçlü Instagram ve hasta adayı toplayan web. Mevzuata duyarlı, sonuç odaklı dijital pazarlama.",
    "primaryKeyword": "diş kliniği dijital pazarlama Antalya",
    "secondaryKeywords": [
      "diş kliniği sosyal medya yönetimi Antalya",
      "diş hekimi Google reklam Antalya",
      "implant kliniği dijital pazarlama",
      "ortodonti klinik sosyal medya",
      "diş kliniği web sitesi Antalya",
      "diş kliniği Google yorum kartı",
      "diş kliniği hasta adayı toplama",
      "ağız diş sağlığı kliniği reklam"
    ],
    "heroHeadline": "Antalya'da Diş Kliniğinizi Dolduran Dijital Pazarlama: Daha Çok Google Yorumu, Daha Çok Randevu",
    "intro": [
      "Bir hasta diş tedavisi ararken önce telefonunu açar. \"Antalya implant\", \"yakınımdaki diş kliniği\" diye arar; çıkan kliniklerin yıldızına, yorum sayısına ve Instagram'daki öncesi/sonrası çalışmalarına bakar. Saniyeler içinde kime güveneceğine karar verir. Diş hekimliği, hastanın tamamen güvene ve itibara göre seçim yaptığı bir sektör — ve bu güven artık ilk olarak dijitalde kazanılıyor.",
      "Sorun şu ki çoğu nitelikli klinik, hekimliğini mükemmel yapsa da dijitalde görünmez kalıyor. 30 yorumlu bir klinik, yan sokaktaki 400 yorumlu rakibine hasta kaptırıyor. Instagram'da düzensiz, kalitesiz paylaşımlar güven yerine tereddüt yaratıyor. Reklam bütçesi, randevuya dönmeyen tıklamalara akıp gidiyor. Oysa bir implant ya da gülüş tasarımı hastasının yaşam boyu değeri çok yüksek; tek bir doğru hasta adayı bile reklam yatırımını fazlasıyla karşılıyor.",
      "VOYO, Antalya merkezli full-service bir dijital ajans olarak diş kliniklerini tam da bu noktada büyütüyor: itibarı görünür kılan Google yorum sistemi, güven veren görsel içerik, randevuya odaklı reklam ve hasta adayını kaçırmayan bir web altyapısı. Hepsini, sağlık reklamı mevzuatına saygılı ve hastanın mahremiyetini koruyan bir dille kuruyoruz."
    ],
    "challenges": [
      {
        "title": "Google yorumları az, itibar görünmez kalıyor",
        "desc": "Hasta seçimini büyük ölçüde yıldız puanı ve yorum sayısına göre yapar. Memnun hastalarınız var ama çoğu yorum bırakmıyor; klinik haritada zayıf görünüyor ve daha az yorumlu olduğunuz için daha güvenilir rakiplere randevu kaptırıyorsunuz."
      },
      {
        "title": "Görsel içerik güven yerine tereddüt yaratıyor",
        "desc": "Diş hekimliği görsel bir alan: gülüş tasarımı, implant, ortodonti sonuçları öncesi/sonrasıyla anlatılır. Telefonla çekilmiş düzensiz, izinsiz veya düşük kaliteli paylaşımlar profesyonellik algısını zedeler; hasta mahremiyeti ve estetik denge gözetilmeden yapılan içerik hem güveni hem itibarı riske atar."
      },
      {
        "title": "Reklam bütçesi randevuya dönmüyor",
        "desc": "Boostlanan gönderiler ve hedefsiz kampanyalar tıklama getirir ama randevu getirmez. Hangi tedavinin (implant, ortodonti, beyazlatma) ne kadar hasta adayı getirdiği ölçülmediğinde, bütçe yanlış yere akar ve gerçek maliyet görünmez kalır."
      },
      {
        "title": "Sağlık reklam mevzuatı ve mahremiyet riski",
        "desc": "Sağlıkta abartılı vaatler, fiyat yarışı ve izinsiz hasta görseli hem etik hem yasal risk taşır. Mevzuata duyarlı, bilgilendirici ve güven odaklı bir dil kullanılmadığında klinik hem ceza riskine hem de itibar kaybına açık hale gelir."
      }
    ],
    "approach": [
      {
        "title": "NFC Google Yorum Kartı ile İtibarınızı Görünür Kılma",
        "desc": "Memnun hastanın telefonuna kartı okutması yeterli — saniyeler içinde Google yorum sayfanıza yönlenir. Resepsiyon ve tedavi sonrası akışına entegre ettiğimiz bu sistemle yorum sayınız ve yıldız ortalamanız düzenli artar; klinik haritada ve aramalarda öne çıkar, hasta güveni somut bir rakama dönüşür."
      },
      {
        "title": "Mahremiyete Saygılı Profesyonel Foto/Video İçerik",
        "desc": "Kendi ekibimizle klinik ortamında profesyonel çekim yapıyoruz: hijyenik ve modern klinik atmosferi, hekim tanıtımı, hasta onayıyla öncesi/sonrası gülüş çalışmaları. Estetik ve güven veren, hasta mahremiyetini koruyan görsellerle kliniğinizi 'gidilebilir' ve güvenilir gösteriyoruz."
      },
      {
        "title": "Randevu Odaklı Google ve Meta Reklamları",
        "desc": "Boost değil, strateji. \"Antalya implant\", \"ortodonti\", \"gülüş tasarımı\" gibi yüksek niyetli aramalarda kliniğinizi gösterir, ilçe bazlı (Muratpaşa, Lara, Konyaaltı) hedefleriz. Her kampanyayı tedavi türüne göre randevu/lead başına maliyetle ölçer, bütçeyi en çok hasta getiren kanala yönlendiririz."
      },
      {
        "title": "Hasta Adayını Kaçırmayan Web Sitesi",
        "desc": "Mobil öncelikli, hızlı açılan, WhatsApp ve randevu formuyla hasta adayını anında yakalayan bir site kuruyoruz. Tedavi sayfaları (implant, ortodonti, estetik) bilgilendirici ve güven verici biçimde yazılır; Google'da yerel olarak bulunmanızı sağlayan teknik SEO altyapısıyla birlikte gelir."
      },
      {
        "title": "Mevzuata Duyarlı, Güven Odaklı İçerik Yönetimi",
        "desc": "Tüm metin ve görseller sağlık reklamı kurallarına uygun, abartısız ve bilgilendirici bir dille hazırlanır. Hasta sorularını yanıtlayan eğitici içeriklerle (tedavi süreçleri, sıkça sorulanlar) kliniği bir uzman otorite olarak konumlandırır; itibarı koruyarak büyütürüz."
      },
      {
        "title": "Sağlık Turizmine Hazır Çok Dilli Konumlandırma",
        "desc": "Antalya'nın yabancı hasta potansiyeli yüksek. Talep eden klinikler için İngilizce/çok dilli içerik, uluslararası hastaya yönelik reklam ve güven unsurlarıyla (yorumlar, akreditasyon, süreç şeffaflığı) sağlık turizmi hasta adaylarına ulaşmanızı sağlarız."
      }
    ],
    "faqs": [
      {
        "q": "Sağlık reklamı mevzuatına uygun pazarlama yapabiliyor musunuz?",
        "a": "Evet. Diş hekimliğinde abartılı vaat, fiyat üzerinden rekabet ve izinsiz hasta görseli hem etik hem yasal risk taşır. Tüm içeriklerimizi bilgilendirici, güven odaklı ve mevzuata duyarlı bir dille hazırlar; öncesi/sonrası görselleri yalnızca hasta onayıyla ve mahremiyeti koruyarak kullanırız."
      },
      {
        "q": "Google yorumlarımı gerçekten artırabilir misiniz?",
        "a": "Evet. NFC Google yorum kartımızla memnun hasta, kartı telefonuna okutarak saniyeler içinde yorum sayfanıza ulaşır. Bu akışı resepsiyon ve tedavi sonrası rutininize entegre ederek yorum sayınızı ve yıldız ortalamanızı düzenli ve doğal yoldan artırırız; bu da yerel aramalarda öne çıkmanızı sağlar."
      },
      {
        "q": "Reklamlarımın gerçekten randevu getirdiğini nasıl anlarım?",
        "a": "Kampanyaları tedavi türüne göre ayrı ölçer; tıklama değil randevu/hasta adayı başına maliyeti raporlarız. Hangi tedavinin (implant, ortodonti, beyazlatma) ne kadar hasta getirdiğini görür, bütçeyi en çok dönüşüm sağlayan kanala yönlendiririz. Her ay şeffaf raporla sonucu paylaşırız."
      },
      {
        "q": "Antalya dışından ve yurt dışından hasta çekmeme yardımcı olur musunuz?",
        "a": "Evet. Önce Muratpaşa, Lara, Konyaaltı gibi ilçe bazlı yerel hedeflemeyle Antalya'daki hastalara ulaşırız. Sağlık turizmi potansiyelini değerlendirmek isteyen klinikler için çok dilli içerik ve uluslararası hastaya yönelik reklam kampanyalarıyla yurt dışı hasta adaylarına da açılmanızı sağlarız."
      }
    ]
  },
  {
    "slug": "estetik-dermatoloji-klinikleri",
    "name": "Estetik & Dermatoloji Klinikleri",
    "seoTitle": "Estetik Klinik Dijital Pazarlama Antalya | VOYO",
    "seoDescription": "Antalya'da estetik ve dermatoloji klinikleri için mevzuata uygun dijital pazarlama: Instagram, Google yorumları, randevu odaklı reklam ve marka algısı. Hemen tanışın.",
    "primaryKeyword": "estetik klinik dijital pazarlama Antalya",
    "secondaryKeywords": [
      "dermatoloji kliniği sosyal medya Antalya",
      "estetik klinik Instagram yönetimi",
      "medikal estetik reklam Antalya",
      "klinik Google yorumları yönetimi",
      "estetik klinik web tasarım Antalya",
      "dermatoloji kliniği hasta randevusu reklam"
    ],
    "heroHeadline": "Kliniğinizin Kalitesini Ekranda da Gösterin: Estetik & Dermatolojide Doğru Hastaya Ulaşan Dijital Pazarlama",
    "intro": [
      "Estetik ve dermatolojide hasta, prosedüre değil güvene karar verir. Botoks, dolgu, lazer ya da estetik cerrahi fark etmeksizin; potansiyel hastanız bir işlemi yaptırmadan önce kliniğinizi haftalarca takip eder, Instagram'ınızı inceler, Google yorumlarınızı okur, öncesi/sonrası kalitenize bakar ve hekiminizin uzmanlığını araştırır. Bu süreçte dijital varlığınız zayıfsa, en iyi tıbbi sonucu üretseniz bile hasta sıcak randevuya dönüşmeden rakibinize gider.",
      "Antalya, hem yoğun yerli hasta talebi hem de sağlık turizmi potansiyeli ile estetik ve dermatoloji için rekabetin en sert olduğu şehirlerden biri. Burada öne çıkmak, gelişigüzel paylaşım yapmakla değil; mahremiyete saygılı, görsel kalitesi yüksek, Sağlık Bakanlığı reklam mevzuatına duyarlı ve randevuya gerçekten dönüşen bir dijital stratejiyle mümkün.",
      "VOYO Dijital olarak estetik ve dermatoloji kliniklerini, sağlık alanının hassasiyetlerini bilen bir ekiple yönetiyoruz. Amacımız beğeni toplamak değil; doğru profildeki hastayı kliniğinizin koltuğuna oturtan, itibarınızı koruyan ve marka algınızı premium seviyede tutan ölçülebilir bir büyüme kurmak."
    ],
    "challenges": [
      {
        "title": "Sağlık reklam mevzuatı: bir yanlış paylaşım, ceza ve itibar riski",
        "desc": "Estetik ve dermatolojide her içerik tıbbi reklam denetimine tabi. Hastayı yönlendiren ifadeler, 'öncesi/sonrası'ın uygunsuz kullanımı, fiyat ve kampanya vaatleri ciddi idari para cezalarına ve hekimlik itibarına zarara yol açabilir. Sektörü bilmeyen ajanslar bu çizgiyi farkında olmadan aşar."
      },
      {
        "title": "Görsel kalite hastayı ikna eder ya da kaçırır",
        "desc": "Bu sektörde kötü ışıkta çekilmiş, amatör bir öncesi/sonrası ya da düşük çözünürlüklü klinik fotoğrafı, premium algıyı bir anda yıkar. Hasta gördüğü görselin kalitesini, alacağı hizmetin kalitesiyle eşleştirir. Tutarsız ve özensiz görseller yüksek bütçeli hastayı uzaklaştırır."
      },
      {
        "title": "Google itibarı ve yorumlar belirleyici, ama yönetilmiyor",
        "desc": "Hasta randevu öncesi mutlaka Google'da kliniğinizi arar. Az sayıda yorum, cevapsız bırakılmış olumsuz bir değerlendirme ya da rakibinizin daha yüksek puanı, en kaliteli kliniği bile aramada görünmez kılar. Çoğu klinik bu itibar akışını şansa bırakıyor."
      },
      {
        "title": "Reklam bütçesi yanıyor ama nitelikli randevu gelmiyor",
        "desc": "Meta ve Google reklamları yanlış kurgulandığında bütçe, dönüşmeyen merak edicilere ve yanlış hedef kitleye gider. Estetik ve dermatolojide önemli olan tıklama değil; ödeme gücü olan, ciddi niyetli ve doğru işlem için gelen hastayı randevuya çevirmektir."
      }
    ],
    "approach": [
      {
        "title": "Mevzuata duyarlı içerik ve reklam stratejisi",
        "desc": "Tüm sosyal medya ve reklam içeriklerini Sağlık Bakanlığı tıbbi reklam kurallarına uyumlu kurguluyoruz. Yönlendirici ve riskli ifadeler yerine; bilgilendirici, güven veren ve uzmanlığı öne çıkaran bir dil kullanarak kliniğinizi hem yasal açıdan korur hem de ciddi marka algısı oluştururuz."
      },
      {
        "title": "Profesyonel klinik foto ve video prodüksiyonu",
        "desc": "Antalya'daki ekibimizle kliniğinizde profesyonel çekim yaparız: hekim tanıtımları, işlem süreçleri, hasta deneyimi videoları ve mahremiyete uygun, etik sınırlar içinde görsel arşiv. Premium görsel dil, kliniğinizin kalitesini ekranda da hissettirir."
      },
      {
        "title": "Instagram ve sosyal medya marka yönetimi",
        "desc": "Kliniğinizin Instagram ve diğer kanallarını, premium estetik algısını koruyan tutarlı bir görsel kimlik, eğitici reels'ler ve etkileşim odaklı bir planla yönetiriz. Takipçiyi değil, güveni büyütüp randevuya hazır bir kitle oluştururuz."
      },
      {
        "title": "Randevu odaklı Google & Meta reklam yönetimi",
        "desc": "Reklamları beğeni için değil, nitelikli randevu için kurarız. Doğru işlem-doğru hasta eşleşmesi, lokasyon hedefleme, lead formları ve WhatsApp/randevu entegrasyonuyla bütçenizin gerçek hastaya dönmesini sağlar, her kampanyayı ölçer ve optimize ederiz."
      },
      {
        "title": "NFC Google yorum kartı ile itibar yönetimi",
        "desc": "Memnun hastalarınızdan tek dokunuşla Google yorumu toplayan NFC kartlarımızla yorum hacminizi ve puanınızı düzenli yükseltiriz. Olumsuz değerlendirmelere profesyonel yanıt stratejisi kurarak aramada güçlü, güven veren bir itibar inşa ederiz."
      },
      {
        "title": "Dönüşüm odaklı klinik web tasarımı",
        "desc": "Hızlı, mobil uyumlu, hizmetlerinizi ve hekim kadronuzu güven veren bir dille anlatan; online randevu ve iletişimi kolaylaştıran SEO uyumlu bir web sitesi tasarlarız. Antalya'da 'estetik klinik' ve dermatoloji aramalarında görünür olmanızı sağlarız."
      }
    ],
    "faqs": [
      {
        "q": "Estetik ve dermatoloji kliniği reklamlarında mevzuata uyumlu çalışıyor musunuz?",
        "a": "Evet. Tüm içerik ve reklamlarımızı Sağlık Bakanlığı tıbbi reklam ve tanıtım kurallarına uygun şekilde hazırlıyoruz. Yönlendirici ifadelerden, riskli öncesi/sonrası kullanımından ve uygunsuz fiyat/kampanya vaatlerinden kaçınarak kliniğinizi hem yasal açıdan korur hem de güven veren bir marka dili kurarız."
      },
      {
        "q": "Öncesi/sonrası görselleri ve hasta mahremiyeti konusunda nasıl bir yol izliyorsunuz?",
        "a": "Mahremiyet bizim için tartışmasız bir sınır. Görselleri yalnızca yazılı hasta onayı ve etik/yasal çerçeve dahilinde kullanırız. Onay alınmadığı durumlarda; hekim uzmanlığını, klinik ortamını ve eğitici içerikleri öne çıkaran, mahremiyeti koruyan alternatif görsel stratejileri uygularız."
      },
      {
        "q": "Reklamlardan gelen randevuların kalitesini nasıl artırıyorsunuz?",
        "a": "Hedeflemeyi ödeme gücü olan ve ciddi niyetli hasta profiline göre kurar, işlem bazlı kampanyalar, lead formları ve WhatsApp/randevu entegrasyonu kullanırız. Her kampanyayı maliyet ve randevu dönüşümü üzerinden ölçüp optimize ederek bütçenizin gerçek hastaya dönmesini sağlarız."
      },
      {
        "q": "Antalya dışından gelen sağlık turizmi hastalarına da ulaşabilir misiniz?",
        "a": "Evet. Antalya'nın sağlık turizmi potansiyelini değerlendirerek hedef lokasyon, dil ve kitle ayarlarıyla şehir dışı ve uluslararası hasta kitlesine yönelik kampanyalar kurgulayabiliriz. Strateji, kliniğinizin kapasitesine ve hedef pazarına göre özel olarak planlanır."
      }
    ]
  },
];

export function getSectorBySlug(slug: string): SectorPage | undefined {
  return sectorPages.find((s) => s.slug === slug);
}
