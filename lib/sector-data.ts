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
  {
    "slug": "sac-ekimi-klinikleri",
    "name": "Saç Ekimi Klinikleri",
    "seoTitle": "Saç Ekimi Klinikleri Dijital Pazarlama | Antalya",
    "seoDescription": "Saç ekimi klinikleri için Antalya merkezli dijital pazarlama: çok dilli reklam, öncesi/sonrası görsel, Google yorum ve uluslararası hasta akışı.",
    "primaryKeyword": "saç ekimi kliniği dijital pazarlama Antalya",
    "secondaryKeywords": [
      "saç ekimi kliniği reklam Antalya",
      "saç ekimi sosyal medya yönetimi",
      "sağlık turizmi dijital pazarlama Antalya",
      "saç ekimi Google reklam",
      "çok dilli saç ekimi reklamı",
      "saç ekimi kliniği web tasarım",
      "saç ekimi Google yorum yönetimi",
      "FUE DHI klinik pazarlama"
    ],
    "heroHeadline": "Saç Ekimi Kliniğinizi Dünya Hastasıyla Buluşturuyoruz",
    "intro": [
      "Antalya, saç ekiminde dünyanın merkezi. Ama gerçek şu: kliniğin masası dolu değil, çünkü yurt dışındaki hasta seni değil, İngilizce reklam veren, öncesi/sonrası portföyü güçlü, Google'da yüzlerce yorumu olan rakibini görüyor. Sağlık turizminde rekabet artık ameliyathanede değil, ekranda kazanılıyor.",
      "VOYO olarak saç ekimi ve sağlık turizmi sektörünü içeriden biliyoruz. Almanya'daki, Rusya'daki, Körfez'deki hastanın nasıl arattığını, hangi görselde durup hangi yorumu okuyup mesaj attığını biliyoruz. İşimiz greft saymak değil; profesyonel foto/video, çok dilli reklam ve itibar yönetimiyle o hastayı senin danışmanına konuşturmak.",
      "Sağlık reklam mevzuatına duyarlı, mahremiyete saygılı, sonuç odaklı çalışıyoruz. Amacımız sadece takipçi değil; WhatsApp'a düşen, uçak biletini kesip Antalya'ya gelen nitelikli hasta."
    ],
    "challenges": [
      {
        "title": "Yurt dışı hastaya ulaşamamak",
        "desc": "Hastanın çoğu Almanya, Hollanda, Rusya, Körfez ve İngiltere'den geliyor ama reklamların yalnızca Türkçe ve yerel. Doğru ülke, doğru dil ve doğru mesajla hedeflenmeyen bütçe, sana hiç gelmeyecek kişilere harcanıyor."
      },
      {
        "title": "Öncesi/sonrası görselin zayıf ve güvensiz görünmesi",
        "desc": "Saç ekiminde karar, greft sayısıyla değil gözle veriliyor. Telefonla çekilmiş, kötü ışıklı, tutarsız açılı öncesi/sonrası kareler hastada güven değil şüphe yaratıyor. Standart açı, ışık ve çekim protokolü olmayan klinik, ekranda amatör görünüyor."
      },
      {
        "title": "Google yorumlarının azlığı ve itibar boşluğu",
        "desc": "Yurt dışı hasta Antalya'ya gelmeden önce Google'da kliniğini yazıp puanına ve yorumlarına bakıyor. 20 yorumlu klinik, 800 yorumlu rakibin yanında görünmez oluyor. Memnun hastadan yorum toplama sistemi olmayan klinik, en büyük kozunu boşa harcıyor."
      },
      {
        "title": "Fiyat rekabetinde erimek",
        "desc": "Sektör 'en ucuz paket' savaşına dönmüş durumda. Ucuza oynayan klinik hem düşük kâr marjına sıkışıyor hem de fiyat arayan, sadakatsiz hastayı çekiyor. Değeri, kaliteyi ve sonucu anlatan bir marka konumlandırması olmadan sadece fiyatla yarışmak sürdürülebilir değil."
      },
      {
        "title": "Sağlık reklam mevzuatı ve hesap kapanma riski",
        "desc": "Sağlık alanında Meta ve Google reklamları çok hassas. Yanlış görsel, yasak vaat veya yanlış ifade reklam hesabını askıya aldırabilir, hatta klinik itibarına zarar verebilir. Mevzuatı bilmeden yürütülen kampanyalar bir gecede durabiliyor."
      }
    ],
    "approach": [
      {
        "title": "Çok dilli uluslararası reklam yönetimi",
        "desc": "Meta ve Google reklamlarını hedef ülkelere göre İngilizce, Almanca, Rusça ve Arapça ayrı kurgularız. Her pazarın diline, kültürüne ve arama alışkanlığına uygun görsel ve metinle, uçak bileti kesmeye hazır nitelikli hastayı doğrudan WhatsApp ve form hattına yönlendiririz."
      },
      {
        "title": "Profesyonel öncesi/sonrası foto & video prodüksiyonu",
        "desc": "Antalya ekibimizle klinikte standart ışık, açı ve çekim protokolü kurarız. Hasta izniyle, mahremiyete saygılı, tutarlı ve inandırıcı öncesi/sonrası içerikler, operasyon ve klinik atmosferi videoları üretiriz. Ekranda 'güvenilir ve profesyonel' görünmenizi sağlarız."
      },
      {
        "title": "Google yorum & itibar sistemi (NFC yorum kartı)",
        "desc": "Memnun hastadan çıkışta yorum toplamayı otomatikleştiririz. NFC yorum kartlarımızla hasta telefonu okuttuğu an Google değerlendirme sayfasına düşer. Puanınızı ve yorum sayınızı düzenli büyütür, olumsuz geri bildirimleri yönetir, Google Haritalar'da rakiplerinizin önüne geçeriz."
      },
      {
        "title": "Çok dilli, dönüşüm odaklı web sitesi",
        "desc": "Hızlı açılan, mobil öncelikli, dil seçenekli ve güven unsurlarıyla (portföy, yorumlar, hekim kadrosu, süreç anlatımı) donatılmış bir site kurarız. Randevu ve danışma formunu, WhatsApp entegrasyonunu ve reklam takip piksellerini eksiksiz bağlarız."
      },
      {
        "title": "Mevzuata uyumlu strateji ve marka konumlandırma",
        "desc": "Sağlık reklam kurallarına uygun, hesap askısı riskini en aza indiren güvenli reklam kurgusu yaparız. Kliniğinizi 'en ucuz' değil 'en güvenilir ve sonuç odaklı' konumlandırır, fiyat savaşından çıkarıp değerle rekabet eden bir markaya dönüştürürüz."
      }
    ],
    "faqs": [
      {
        "q": "Yurt dışındaki hastalara ulaşmam için hangi dillerde reklam veriyorsunuz?",
        "a": "Kliniğinizin hedeflediği pazarlara göre İngilizce, Almanca, Rusça ve Arapça başta olmak üzere çok dilli kampanyalar kurarız. Her ülkenin arama alışkanlığına ve kültürüne uygun ayrı görsel ve metinlerle, sadece takipçi değil uçak bileti kesecek nitelikli hastayı hedefleriz."
      },
      {
        "q": "Öncesi/sonrası görselleri hastaların izniyle mi çekiyorsunuz, mahremiyet nasıl korunuyor?",
        "a": "Kesinlikle. Tüm görsel ve video içeriklerini hasta onam formuyla, mahremiyete tam saygı göstererek üretiriz. İsteğe bağlı yüz kapatma, anonimleştirme ve kullanım izni sınırlarına uygun çalışarak hem güven veren hem de etik açıdan güvenli bir portföy oluştururuz."
      },
      {
        "q": "Sağlık reklam mevzuatı yüzünden reklam hesabımın kapanmasından çekiniyorum, siz nasıl yönetiyorsunuz?",
        "a": "Saç ekimi gibi sağlık alanlarında Meta ve Google'ın hassas kurallarını yakından takip ederiz. Yasak vaatlerden, uygunsuz görsellerden ve riskli ifadelerden kaçınan, mevzuata uyumlu kampanya kurgularıyla hesap askısı riskini en aza indirir, kesintisiz reklam akışı sağlarız."
      },
      {
        "q": "Google yorumlarımı nasıl artıracaksınız?",
        "a": "NFC yorum kartı sistemimizle memnun hastalarınızın çıkışta tek dokunuşla Google'a yorum bırakmasını sağlarız. Bu süreci klinik akışınıza yerleştirir, puanınızı ve yorum sayınızı düzenli büyütür, olumsuz yorumları yönetir ve Google Haritalar sıralamanızı güçlendiririz."
      },
      {
        "q": "Antalya dışındaki bir klinikle de çalışıyor musunuz?",
        "a": "Merkezimiz Antalya'da; sağlık turizminin dünya merkezi olması nedeniyle sektörü buradan çok iyi tanıyoruz. Türkiye'nin her yerindeki saç ekimi kliniğiyle uzaktan çalışabiliriz. Foto/video prodüksiyonu için ekibimiz kliniğinize gelir; reklam, sosyal medya ve web yönetimini ise tamamen uzaktan yürütürüz."
      }
    ]
  },
  {
    "slug": "estetik-cerrahi",
    "name": "Estetik Cerrahi",
    "seoTitle": "Estetik Cerrahi Dijital Pazarlama Antalya | VOYO",
    "seoDescription": "Antalya estetik cerrahi klinikleri için mevzuata uygun dijital pazarlama, çok dilli sağlık turizmi kampanyaları, itibar yönetimi ve nitelikli hasta lead'i.",
    "primaryKeyword": "estetik cerrahi dijital pazarlama Antalya",
    "secondaryKeywords": [
      "estetik cerrahi sosyal medya Antalya",
      "plastik cerrahi reklam Antalya",
      "sağlık turizmi dijital pazarlama Antalya",
      "estetik klinik web tasarım Antalya",
      "estetik cerrahi Google reklam Antalya",
      "estetik cerrahi hasta lead Antalya",
      "çok dilli estetik pazarlama Antalya"
    ],
    "heroHeadline": "Estetik Cerrahide Güveni Kazanan Klinik Hastayı Kazanır — Antalya'da Mevzuata Uygun Dijital Büyüme",
    "intro": [
      "Estetik cerrahide hasta bir ürün değil, hayatının en kişisel kararlarından birini size emanet eden bir insan seçiyor. Bu karar rakamla değil güvenle veriliyor: cerrahın uzmanlığı, önceki hastaların gerçek deneyimi, kliniğin ciddiyeti ve iletişimin ne kadar şeffaf olduğuyla. Dijital dünyada bu güveni ilk temasta kuramayan klinik, ne kadar iyi cerrahi yaparsa yapsın rakibine hasta kaptırıyor.",
      "Antalya, Türkiye'nin sağlık turizmi merkezlerinden biri. Almanya'dan, İngiltere'den, Körfez ülkelerinden hasta uçakla estetik operasyon için buraya geliyor. Ama bu potansiyel, aynı zamanda yoğun bir rekabet ve son derece hassas bir reklam mevzuatı anlamına geliyor. Sağlık alanında yanlış bir görsel, izinsiz bir öncesi/sonrası paylaşımı ya da 'garanti' vaadi hem cezai risk hem de itibar kaybı demek.",
      "VOYO Dijital olarak estetik cerrahi kliniklerinin bu iki uçlu gerçeğini biliyoruz: bir yanda güven ve mahremiyeti koruyan, mevzuata uygun bir iletişim; diğer yanda nitelikli hasta getiren, ölçülebilir kampanyalar. İkisini aynı anda yönetiyoruz."
    ],
    "challenges": [
      {
        "title": "Sağlık reklam mevzuatı çok hassas ve cezai risk taşıyor",
        "desc": "Estetik cerrahi, Sağlık Bakanlığı'nın tanıtım ve reklam kısıtlamalarına en sıkı tabi alanlardan biri. 'Garanti', 'en iyi', abartılı vaatler, hastayı yönlendiren ifadeler, izinsiz görsel kullanımı hem reklam yasağı hem para cezası riski doğuruyor. Ajans bu mevzuatı bilmezse kliniği risk altına sokar. Biz her içeriği bilgilendirme çerçevesinde, mevzuata duyarlı şekilde kurguluyoruz."
      },
      {
        "title": "Öncesi/sonrası görselleri hem en güçlü kanıt hem en büyük mahremiyet riski",
        "desc": "Hasta bir cerrahı sonuçlarını görmeden seçmiyor; ama bu görseller hasta rızası, kişisel veri (KVKK) ve platform politikaları açısından mayınlı arazi. Meta öncesi/sonrası içerikleri sınırlıyor, izinsiz paylaşım dava konusu olabiliyor. Rıza, anonimleştirme ve doğru mecra seçimiyle bu kanıtı riske girmeden kullanılabilir hale getiriyoruz."
      },
      {
        "title": "Sağlık turizmi hastası çok dilli, çok kültürlü ve güven eşiği yüksek",
        "desc": "Antalya'ya gelen yabancı hasta İngilizce, Almanca ya da Arapça iletişim, şeffaf fiyat/süreç bilgisi, konaklama-transfer paketi ve gerçek yorumlar bekliyor. Türkçe tek dilli bir web sitesi ve WhatsApp'ta gecikmeli yanıt, bu hastayı anında kaybettiriyor. Çok dilli site, çok dilli kampanya ve hızlı lead yönetimi olmadan uluslararası hasta gelmiyor."
      },
      {
        "title": "İtibar ve Google yorumları satın alma kararının merkezinde",
        "desc": "Bıçak altına yatacak insan önce Google'da kliniğinizi ve cerrahınızı araştırıyor. Az sayıda ya da olumsuz yorum, düşük yıldız ortalaması ve yanıtsız şikayetler yıllardır kurduğunuz itibarı saniyede yıkıyor. Memnun hastanın yorumunu sistematik toplamak ve olumsuz geri bildirimi profesyonelce yönetmek, reklamdan daha belirleyici olabiliyor."
      },
      {
        "title": "Gelen lead'lerin çoğu nitelikli hastaya dönüşmüyor",
        "desc": "Estetik cerrahide operasyon değeri yüksek, ama gelen mesajların çoğu sadece fiyat soran, kararsız ya da hedef kitle dışı. Reklam bütçesi doğru hedeflenmediğinde ve gelen talep hızlı, profesyonel bir akışla karşılanmadığında hem para hem danışman zamanı boşa gidiyor. Kampanyayı nitelikli hastaya odaklamak ve lead akışını kurmak şart."
      }
    ],
    "approach": [
      {
        "title": "Mevzuata duyarlı içerik ve reklam stratejisi",
        "desc": "Her paylaşımı ve reklam metnini sağlık tanıtım kurallarına uygun kurguluyoruz: garanti/abartı vaat yok, bilgilendirme ve güven odaklı bir dil var. Öncesi/sonrası ve hasta içeriklerinde rıza, KVKK ve platform politikalarını gözeterek kliniği cezai ve itibar riskinden koruyoruz."
      },
      {
        "title": "Profesyonel foto/video ile klinik ve cerrah güveni",
        "desc": "Kliniğin ameliyathanesi, sterilizasyon standardı, ekibi ve cerrahın uzmanlığını profesyonel çekimlerle görünür kılıyoruz. Hasta deneyim videoları, süreç anlatımları ve doğru kurgulanmış tanıtım içerikleriyle 'buraya güvenebilirim' hissini ilk saniyede veriyoruz."
      },
      {
        "title": "Çok dilli site ve sağlık turizmi kampanyaları",
        "desc": "İngilizce, Almanca ve Arapça dahil çok dilli, hızlı ve mobil öncelikli web sitesi; hedef ülkelere yönelik Google ve Meta kampanyaları; konaklama-transfer-süreç bilgisini net veren sayfalar kuruyoruz. Uluslararası hastayı ilk temastan operasyona kadar akışta tutuyoruz."
      },
      {
        "title": "İtibar yönetimi ve NFC Google yorum çözümü",
        "desc": "Memnun hastadan yorum toplamayı NFC yorum kartı/standımızla klinik içinde kolaylaştırıyor, Google puanınızı ve yorum hacminizi sistematik büyütüyoruz. Olumsuz geri bildirimleri profesyonelce yanıtlayarak online itibarınızı satın alma kararının lehine çeviriyoruz."
      },
      {
        "title": "Nitelikli lead odaklı kampanya ve dönüşüm takibi",
        "desc": "Reklamı doğru operasyon ve doğru hedef kitleye odaklıyor, gelen talebi WhatsApp/form üzerinden hızlı yanıt akışına bağlıyoruz. Hangi kampanyanın gerçek hasta getirdiğini ölçüyor, bütçeyi maliyeti düşük ve dönüşümü yüksek kanallara kaydırıyoruz."
      }
    ],
    "faqs": [
      {
        "q": "Estetik cerrahi reklamları yasak değil mi? VOYO mevzuata uygun mu çalışıyor?",
        "a": "Sağlık alanında tanıtım ciddi kısıtlamalara tabi; abartılı vaat, garanti ifadesi, yönlendirici veya izinsiz görsel içeren reklamlar risklidir. Biz tüm içeriği bilgilendirme çerçevesinde, sağlık tanıtım kurallarına ve KVKK'ya duyarlı kurguluyoruz. Amacımız kliniği risk altına sokmadan, güven inşa eden bir dijital varlık oluşturmak."
      },
      {
        "q": "Öncesi/sonrası fotoğraflarını sosyal medyada kullanabilir miyiz?",
        "a": "Bu içerikler en güçlü kanıt ama hasta rızası, kişisel veri ve platform politikaları açısından hassastır. Rıza alınmış, uygun şekilde anonimleştirilmiş ve doğru mecrada paylaşıma uygun görselleri, riski yöneterek kullanıyoruz. Uygun olmayan durumlarda süreç anlatımı, hasta deneyimi ve klinik içeriğiyle aynı güveni farklı yollarla kuruyoruz."
      },
      {
        "q": "Yurt dışından hasta getirmek için çok dilli çalışıyor musunuz?",
        "a": "Evet. Antalya'nın sağlık turizmi potansiyelini hedefleyerek İngilizce, Almanca, Arapça dahil çok dilli web sitesi ve hedef ülkelere yönelik kampanyalar yürütüyoruz. Konaklama, transfer ve süreç bilgisini net veren sayfalar ve hızlı çok dilli lead yönetimiyle uluslararası hastayı operasyona kadar takip ediyoruz."
      },
      {
        "q": "Google yorumlarımızı ve online itibarımızı nasıl büyütüyorsunuz?",
        "a": "Memnun hastadan yorum toplamayı klinik içinde NFC yorum kartımızla kolaylaştırıyoruz; hasta telefonunu okutup saniyeler içinde yorum bırakabiliyor. Bunu sistematik hale getirerek yıldız ortalamanızı ve yorum hacminizi büyütüyor, olumsuz yorumları profesyonelce yanıtlayarak itibarınızı koruyoruz."
      },
      {
        "q": "Fiyat teklifi net veriyor musunuz?",
        "a": "Her kliniğin hedef operasyonları, mevcut dijital durumu ve hedef pazarları farklı olduğu için tek tip fiyat vermiyoruz. Kliniğinizi ve önceliklerinizi dinledikten sonra size özel, kapsamı net bir teklif hazırlıyoruz. Antalya ofisimizden ücretsiz bir keşif görüşmesiyle başlayabiliriz."
      }
    ]
  },
  {
    "slug": "goz-sagligi-lasik",
    "name": "Göz Sağlığı & LASIK",
    "seoTitle": "Göz Sağlığı & LASIK Dijital Pazarlama | Antalya",
    "seoDescription": "Antalya göz klinikleri için dijital pazarlama: LASIK & katarakt hasta adayı, Google yorumları, çok dilli sağlık turizmi ve mevzuata uygun reklam yönetimi.",
    "primaryKeyword": "göz kliniği dijital pazarlama Antalya",
    "secondaryKeywords": [
      "LASIK reklam Antalya",
      "göz doktoru sosyal medya",
      "katarakt hasta bulma",
      "sağlık turizmi göz kliniği dijital",
      "Antalya göz kliniği Google reklam",
      "göz sağlığı Google yorum yönetimi"
    ],
    "heroHeadline": "Göz kliniğiniz için doğru hastayı, doğru randevuyu getiren dijital pazarlama",
    "intro": [
      "Bir hastanın gözünü lazerinize emanet etmesi, kolay verilen bir karar değildir. LASIK, katarakt ya da numaralı gözlükten kurtulma kararı; güven, uzmanlık kanıtı ve doğru bilgiyle olgunlaşır. VOYO olarak göz sağlığı kliniklerinin dijital iletişimini tam da bu güven inşası üzerine kuruyoruz: rakamla değil, sonuçla ve gerçek hasta deneyimiyle konuşan bir dijital varlık.",
      "Antalya, hem güçlü bir yerel hasta kitlesine hem de büyüyen bir sağlık turizmi potansiyeline sahip. Bir yanda 'Antalya göz doktoru' arayan yerel hasta, diğer yanda LASIK için Avrupa'dan gelen çok dilli hasta adayı var. Biz bu iki kitleyi ayrı ayrı, doğru dille ve sağlık reklam mevzuatına tam uyumlu şekilde yakalayacak bir strateji kuruyoruz; klinik itibarınızı riske atmadan hasta adayı akışınızı büyütüyoruz."
    ],
    "challenges": [
      {
        "title": "Güven eksikliği en büyük dönüşüm engeli",
        "desc": "Hasta gözüyle ilgili işlemi ertelemesinin altında çoğu zaman korku ve güvensizlik yatar. Anlaşılır bir web sitesi, hekim uzmanlık vurgusu, kullanılan teknoloji (femtosaniye, SMILE, trifokal lens gibi) ve gerçek hasta deneyimleri olmadan, ne kadar reklam verirseniz verin randevuya dönmez."
      },
      {
        "title": "Google yorumları ve itibar dağınık yönetiliyor",
        "desc": "Göz sağlığında hasta, kliniği seçmeden önce mutlaka Google yorumlarına bakar. Az sayıda, güncel olmayan ya da yönetilmeyen yorumlar; yıllarca oturmuş klinik itibarını bile zayıf gösterir. Olumlu deneyimlerin sistematik biçimde yoruma dönüşmesi çoğu klinikte tamamen şansa bırakılmış durumda."
      },
      {
        "title": "Sağlık reklam mevzuatı sürekli bir risk",
        "desc": "Sağlık alanında 'garantili sonuç', fiyat vaadi, öncesi/sonrası paylaşımlarında sınırlar ve karşılaştırmalı ifadeler ciddi yaptırım riski taşır. Mevzuatı bilmeyen bir ajansla çalışmak, reklam hesabınızın kapanmasından ceza riskine kadar uzanan sorunlar doğurabilir."
      },
      {
        "title": "Sağlık turizmi potansiyeli çok dilli olmadan boşa gidiyor",
        "desc": "Antalya'ya LASIK ve katarakt için gelen yabancı hasta adayı, kendi dilinde bilgi ve iletişim ister. Yalnızca Türkçe içerik ve tek dilli reklam kurgusuyla, elinizin altındaki uluslararası hasta talebinin büyük kısmını rakiplerinize kaptırırsınız."
      }
    ],
    "approach": [
      {
        "title": "Güven inşa eden görsel ve içerik üretimi",
        "desc": "Klinik ortamınızı, cihaz teknolojinizi ve hekim ekibinizi profesyonel foto ve videoyla anlatıyoruz. Hasta yolculuğunu (muayene, işlem günü, sonrası) şeffaflaştıran içerikler, hekim ağzından bilgilendirici videolar ve mevzuata uygun hasta deneyimi paylaşımlarıyla, tereddüt eden hastayı randevuya taşıyan bir güven zemini kuruyoruz."
      },
      {
        "title": "Hasta adayı odaklı Google & Meta reklam yönetimi",
        "desc": "'LASIK Antalya', 'katarakt ameliyatı', 'göz doktoru' gibi yüksek niyetli aramalarda görünürken; Meta tarafında bilgilendirici içerikle talep yaratıyoruz. Reklamları randevu ve arama gibi ölçülebilir aksiyona bağlıyor, bütçenizi merak edenlere değil gerçekten işlem düşünen hasta adaylarına yönlendiriyoruz."
      },
      {
        "title": "NFC yorum kartıyla itibar yönetimi",
        "desc": "Memnun hastanın deneyimini Google yorumuna dönüştürmeyi şansa bırakmıyoruz. Klinik içinde ya da taburcu anında kullanılan NFC yorum kartlarıyla yorum sürecini kolaylaştırıyor, düzenli ve gerçek yorum akışıyla klinik puanınızı ve yerel arama sıralamanızı sürdürülebilir şekilde güçlendiriyoruz."
      },
      {
        "title": "Çok dilli sağlık turizmi kurgusu",
        "desc": "Yerel hasta ile uluslararası hasta adayını ayrı hedef kitleler olarak ele alıyoruz. Çok dilli açılış sayfaları, dile özel reklam kampanyaları ve WhatsApp/form üzerinden hızlı yanıt akışıyla, Antalya'nın sağlık turizmi potansiyelini kliniğiniz için somut hasta adayına çeviriyoruz."
      }
    ],
    "faqs": [
      {
        "q": "Sağlık reklam mevzuatına uygun kampanya kurabiliyor musunuz?",
        "a": "Evet. Göz sağlığı hassas bir alan; 'garantili sonuç', fiyat vaadi ve karşılaştırmalı ifadeler gibi riskli unsurlardan kaçınarak, bilgilendirici ve mevzuata uygun bir dil kullanıyoruz. Öncesi/sonrası ve hasta deneyimi paylaşımlarını da bu çerçevede, klinik itibarınızı ve reklam hesaplarınızı riske atmayacak şekilde kurguluyoruz."
      },
      {
        "q": "Sağlık turizmi için yabancı hasta getirebilir misiniz?",
        "a": "Antalya'nın konumu sağlık turizmi için büyük avantaj. Çok dilli açılış sayfaları, dile ve ülkeye özel reklam kampanyaları ve hızlı iletişim akışlarıyla uluslararası hasta adaylarını hedefliyoruz. Süreci ölçülebilir hasta adayı hedefiyle yürütüyor, hangi kanalın gerçekten randevu getirdiğini raporluyoruz."
      },
      {
        "q": "Google yorumlarımızı nasıl artırıyorsunuz?",
        "a": "Memnun hastaların deneyimini yoruma dönüştürmek için NFC yorum kartları ve pratik yönlendirme akışları kuruyoruz. Yorum istemeyi klinik rutininin doğal bir parçası haline getiriyor, böylece düzenli ve gerçek yorum akışıyla hem puanınızı hem de yerel Google aramalarındaki görünürlüğünüzü güçlendiriyoruz."
      },
      {
        "q": "Sonuçları nasıl ölçüyorsunuz?",
        "a": "Beğeni sayısı gibi yüzeysel metrikler yerine; form, arama, WhatsApp mesajı ve randevu talebi gibi gerçek hasta adayı aksiyonlarını takip ediyoruz. Hangi kampanyanın kaç hasta adayı getirdiğini şeffaf raporlarla paylaşıyor, bütçenizi en çok dönüşen kanallara yönlendiriyoruz."
      },
      {
        "q": "Kesin fiyat neden vermiyorsunuz?",
        "a": "Her kliniğin hedefi, kapasitesi, hizmet yelpazesi ve rekabet ortamı farklı. Doğru teklifi ancak kliniğinizin mevcut durumunu ve hedeflerini konuştuktan sonra verebiliriz. Bize ulaşın; ihtiyacınıza özel, net bir yol haritası ve teklif hazırlayalım."
      }
    ]
  },
  {
    "slug": "tup-bebek-kadin-sagligi",
    "name": "Tüp Bebek & Kadın Sağlığı",
    "seoTitle": "Tüp Bebek & Kadın Sağlığı Dijital Pazarlama | VOYO",
    "seoDescription": "Antalya tüp bebek, IVF ve kadın doğum klinikleri için güven odaklı, mevzuata uygun dijital pazarlama, çok dilli hasta kazanımı ve itibar yönetimi.",
    "primaryKeyword": "tüp bebek kliniği dijital pazarlama Antalya",
    "secondaryKeywords": [
      "IVF kliniği sosyal medya Antalya",
      "kadın doğum reklam Antalya",
      "jinekoloji Google reklam",
      "sağlık turizmi tüp bebek pazarlama",
      "IVF hasta kazanımı Antalya",
      "kadın sağlığı web tasarım",
      "tüp bebek merkezi itibar yönetimi",
      "çok dilli tüp bebek pazarlama"
    ],
    "heroHeadline": "Tüp bebek ve kadın sağlığında güven, bir tıkla değil; her temasla kazanılır",
    "intro": [
      "Tüp bebek ve kadın sağlığı, dijitalin en hassas alanlarından biridir. Karşınızdaki kişi bir müşteri değil; yıllardır ebeveyn olmayı bekleyen, kaygılı, umutlu ve son derece dikkatli bir çift ya da kadındır. Bu yolculukta yanlış bir kelime, soğuk bir görsel ya da mesafeli bir ton güveni bir anda kırar. VOYO olarak bu sektörün dilini, duygusunu ve mevzuatını bilerek içerik üretiyoruz.",
      "Antalya, hem yerel hasta hem de sağlık turizmiyle gelen yabancı hastalar için Türkiye'nin en güçlü tüp bebek ve IVF merkezlerinden biri. Ancak bu yoğun rekabette öne çıkmak; sadece reklam bütçesiyle değil, doğru anlatılan başarı hikâyeleri, şeffaf bilgilendirme, çok dilli erişim ve kusursuz bir itibar yönetimiyle mümkün. Biz kliniğinizin bilimsel ciddiyetini, empatik yüzüyle buluşturan bir dijital varlık kuruyoruz."
    ],
    "challenges": [
      {
        "title": "Reklam mevzuatı ve etik sınırlar",
        "desc": "Sağlık alanında, özellikle tüp bebek ve üremeye yardımcı tedavilerde reklam ve tanıtım kuralları çok katı. Başarı oranı vaadi, karşılaştırmalı ifadeler ve hasta görselleri konusunda tek bir hata ceza ya da itibar kaybı getirir. Mevzuata duyarlı, sağlık iletişimi kurallarını gözeten bir içerik yaklaşımı şart."
      },
      {
        "title": "Mahremiyet ve duygusal hassasiyet",
        "desc": "Hedef kitleniz en kırılgan anlarında dijitalde sizi arıyor. İçeriğin bilgilendirici olması kadar; umut veren ama boş vaat etmeyen, empatik ama sömürmeyen bir dil kurması gerekiyor. Yanlış ton, potansiyel hastayı geri döndürür."
      },
      {
        "title": "Çok dilli sağlık turizmi rekabeti",
        "desc": "Antalya'ya IVF için gelen yabancı hastalar; kendi dilinde bilgi, şeffaf fiyat/süreç anlatımı ve güven arıyor. İngilizce, Almanca, Rusça, Arapça içerik ve çok dilli randevu akışı olmadan bu değerli hasta hacmini rakiplere kaptırırsınız."
      },
      {
        "title": "Görünmez itibar ve yorum baskısı",
        "desc": "Bu sektörde bir tek olumsuz Google yorumu, aylarca süren güven inşasını gölgeleyebilir. Memnun hastaların sesini görünür kılmak, itibarı proaktif yönetmek ve gerçek başarı hikâyelerini etik biçimde öne çıkarmak kritik."
      }
    ],
    "approach": [
      {
        "title": "Güven ve empati odaklı içerik stratejisi",
        "desc": "Kliniğinizin uzmanlığını; hasta yolculuğunu anlatan, süreçleri şeffafça açıklayan ve gerçekçi umut veren içeriklerle işliyoruz. Doktor tanıtımları, süreç bilgilendirmeleri ve sıkça sorulan sorular; hem SEO hem güven kazandıracak şekilde kurgulanır."
      },
      {
        "title": "Mevzuata uygun reklam yönetimi",
        "desc": "Google ve Meta reklamlarını sağlık iletişimi kurallarına, platform politikalarına ve yerel mevzuata tam uyumlu yönetiriz. Yasaklı ifadelerden kaçınır, onay alma süreçlerini bilir; reddedilen reklamlarla vakit kaybetmezsiniz."
      },
      {
        "title": "Profesyonel görsel ve çok dilli üretim",
        "desc": "Klinik ortamının hijyenini, teknolojisini ve sıcaklığını yansıtan profesyonel foto/video çekimi yapar; İngilizce, Almanca, Rusça ve Arapça içerikle sağlık turizmi hastalarına doğrudan ulaşırız. Doktor tanıtım videoları güveni katlar."
      },
      {
        "title": "Randevu, lead ve itibar altyapısı",
        "desc": "Web sitenizi hızlı, mahremiyet odaklı ve dönüşüme uygun tasarlarız; çok dilli randevu ve WhatsApp akışıyla her lead'i yakalarız. NFC Google yorum kartlarıyla memnun hastaların yorumlarını kolaylaştırıp itibarınızı proaktif büyütürüz."
      }
    ],
    "faqs": [
      {
        "q": "Tüp bebek reklamı yapmak yasal mı, mevzuata takılır mıyım?",
        "a": "Sağlık alanında reklam ve tanıtımda katı kurallar var; özellikle başarı oranı vaadi, karşılaştırma ve hasta görseli kullanımı hassas. VOYO tüm içerik ve reklamları sağlık iletişimi kurallarına ve platform politikalarına uygun kurgular. Amacımız hem etkili hem de sizi risk altına sokmayan bir iletişim yürütmek; net kapsam için sizinle özel çalışırız."
      },
      {
        "q": "Yabancı hastalara ulaşmak için gerçekten çok dilli içerik şart mı?",
        "a": "Antalya'da sağlık turizmi hacminin büyük kısmı yabancı hastalardan geliyor ve bu hastalar kendi dilinde bilgi ile güven arıyor. İngilizce, Almanca, Rusça ve Arapça içerik, çok dilli reklam ve randevu akışıyla bu değerli kitleye doğrudan ulaşır; aksi halde rakiplere kaptırırsınız."
      },
      {
        "q": "Google yorumlarını ve itibarımı nasıl yönetiyorsunuz?",
        "a": "Bu sektörde tek bir olumsuz yorum bile ağır sonuç doğurabilir. Memnun hastaların yorum bırakmasını NFC yorum kartları ve doğru zamanlanmış hatırlatmalarla kolaylaştırır, itibarı proaktif izler ve etik sınırlar içinde gerçek başarı hikâyelerini görünür kılarız."
      },
      {
        "q": "Klinik çekimlerinde hasta mahremiyeti nasıl korunuyor?",
        "a": "Tüm foto/video üretiminde mahremiyet önceliğimizdir. Hasta kimliğini ifşa etmeden ortamın teknolojisini, hijyenini ve sıcaklığını yansıtan içerikler üretiriz; doktor tanıtımı, süreç anlatımı ve klinik atmosferi güveni artırırken hiçbir etik sınırı zorlamaz."
      },
      {
        "q": "Ne kadar sürede sonuç ve yeni hasta görürüm?",
        "a": "Reklam kaynaklı ilk randevu talepleri genelde kısa sürede gelmeye başlar; ancak bu sektörde asıl değer, güven inşasıyla oluşan sürdürülebilir hasta akışıdır. SEO, içerik ve itibar çalışmaları birkaç ay içinde bileşik etki yaratır. Kliniğinize özel gerçekçi bir yol haritasını görüşmede paylaşırız."
      }
    ]
  },
  {
    "slug": "diyetisyen-beslenme",
    "name": "Diyetisyen & Beslenme",
    "seoTitle": "Diyetisyen Dijital Pazarlama Antalya | VOYO",
    "seoDescription": "Antalya'da diyetisyen ve beslenme danışmanları için sosyal medya, Reels içerik, randevu ve kişisel marka yönetimi. Online danışmanlığınızı büyütün.",
    "primaryKeyword": "diyetisyen sosyal medya Antalya",
    "secondaryKeywords": [
      "beslenme danışmanı dijital pazarlama Antalya",
      "diyetisyen Instagram yönetimi",
      "online diyetisyen reklam",
      "diyetisyen web tasarım Antalya",
      "beslenme danışmanı kişisel marka"
    ],
    "heroHeadline": "Danışan dolu bir takvim, sizi hatırlatan bir marka: Antalya'da diyetisyenler için dijital büyüme",
    "intro": [
      "Bir diyetisyen için en değerli reklam, danışanınızın 4 kilo verdikten sonra çektiği o gülümseyen fotoğraf ve arkadaşına sizi önermesidir. Ama ağızdan ağıza tavsiye artık tek başına yetmiyor. Danışan adayınız sizi önce Instagram'da inceliyor, Google'da yorumlarınıza bakıyor, sonra randevu alıyor. Bu yolculuğun her adımında güven vermezseniz, o danışan bir başka diyetisyene gidiyor.",
      "VOYO olarak Antalya merkezli bir dijital ajans olarak, beslenme alanında çalışan uzmanların gerçek dertlerini biliyoruz: sürekli içerik üretme baskısı, danışan mahremiyeti, sağlık iddialarında reklam mevzuatı, öncesi/sonrası paylaşımlarının doğru ve etik yönetimi. Biz sadece 'güzel post' atmıyoruz; sizi bölgenizde ve online'da akla ilk gelen isim yapacak bir sistem kuruyoruz.",
      "İster kliniğinizde yüz yüze, ister online danışmanlık verin; hedefimiz aynı: dolu bir randevu takvimi, size güvenen bir takipçi kitlesi ve zamanınızı danışanlarınıza ayırırken dijitalin sizin yerinize çalışması."
    ],
    "challenges": [
      {
        "title": "Sürekli içerik üretmeye vaktiniz yok",
        "desc": "Bir diyetisyenin işi danışanla ilgilenmektir, kamera karşısında Reels senaryosu yazmak değil. Ama algoritma düzenli, kaliteli içerik istiyor. Haftada bir 'ne paylaşsam' stresi yaşamak, ürettiğinizde de az etkileşim almak yorucu. Sonuç: hesap ölü kalıyor, danışan adayı 'acaba hâlâ çalışıyor mu' diye tereddüt ediyor."
      },
      {
        "title": "Öncesi/sonrası paylaşımı hem güçlü hem riskli",
        "desc": "Danışan dönüşümleri en ikna edici kanıtınız, ama izinsiz paylaşım, yanıltıcı 'garanti kilo' iddiaları ve mahremiyet ihlalleri hem etik hem de mevzuat açısından ciddi risk. Doğru izin akışı, dengeli ve dürüst anlatım olmadan yapılan paylaşımlar güven kazandırmak yerine itibar zedeleyebiliyor."
      },
      {
        "title": "Google'da ve haritada görünmüyorsunuz",
        "desc": "Antalya'da 'diyetisyen' diye arayan biri sizi bulamıyorsa ya da yorumlarınız az/eskiyse, kliniğiniz ne kadar iyi olursa olsun kaçan danışan demektir. Google İşletme profili ve düzenli, gerçek yorumlar bugün itibar ve yerel sıralama için en kritik faktörlerden biri."
      },
      {
        "title": "Randevu ve mesaj trafiği dağınık",
        "desc": "DM'den soru, WhatsApp'tan randevu, yorumlardan fiyat sorusu... Her şey elle takip edilince danışan adayı yanıt gecikince başka yere gidiyor. Online danışmanlıkta ödeme, takvim ve ilk temas akışı net kurulmamışsa, ilgi lead'e dönüşmeden kayboluyor."
      },
      {
        "title": "Kişisel markanız var ama bir 'yüzü' yok",
        "desc": "İnsanlar bir kuruma değil, güvendikleri bir uzmana danışmak ister. Ama tutarlı bir görsel kimlik, ton ve mesaj olmadan hesabınız yüzlerce benzer diyetisyen arasında kayboluyor. 'Sizi' ayrıştıran, hatırlatan bir kişisel marka kurgusu çoğu uzmanda eksik."
      }
    ],
    "approach": [
      {
        "title": "Size özel içerik takvimi ve prodüksiyon",
        "desc": "Sizin uzmanlık alanınıza (kilo yönetimi, sporcu beslenmesi, çocuk, hamilelik, hastalık diyetleri) göre aylık içerik planı kuruyoruz. Reels senaryoları, bilgilendirici carousel'ler ve profesyonel foto/video çekimiyle; sizden sadece kısa çekim zamanı isteyip gerisini biz üretiyoruz. Amaç: 'bilen ve güvenilir uzman' algısını her paylaşımda güçlendirmek."
      },
      {
        "title": "Etik ve mevzuata uygun dönüşüm anlatımı",
        "desc": "Öncesi/sonrası ve danışan hikâyelerini izinli, dürüst ve 'garanti' iddiasından kaçınan bir dille kurguluyoruz. Sağlık alanına özgü hassasiyetle, hem ikna eden hem de sizi riske atmayan bir anlatı çerçevesi oluşturuyoruz. Kanıt sunarken güveni değil, itibarınızı da koruyoruz."
      },
      {
        "title": "Google itibarı ve NFC yorum çözümü",
        "desc": "Google İşletme profilinizi optimize ediyor, düzenli ve gerçek yorum akışı için kliniğinizde NFC yorum kartı/standı kuruyoruz. Danışan memnuniyeti yüksek anındayken telefonu okuttuğunda saniyeler içinde yorum bırakabiliyor. Böylece hem yerel aramada yükseliyor hem de yeni danışan adayının gördüğü ilk şey güçlü bir itibar oluyor."
      },
      {
        "title": "Reklam, randevu ve web ile lead'e dönüştürme",
        "desc": "Meta ve Google reklamlarıyla Antalya'da doğru kitleye ulaşıyor, ilgiyi randevuya çeviyoruz. Randevu formu, WhatsApp entegrasyonu ve online danışmanlık için ödeme/takvim akışının kurulu olduğu hızlı bir web sayfası tasarlıyoruz. Hedef: gelen her mesajın kaybolmadan danışana dönüşmesi."
      }
    ],
    "faqs": [
      {
        "q": "Yüz yüze mi çalışıyorum online mı diye fark eder mi?",
        "a": "Hayır, her iki modeli de büyütüyoruz. Antalya'da kliniğinizde yüz yüze danışan alıyorsanız yerel Google/harita görünürlüğü ve NFC yorum çözümüne ağırlık veriyoruz. Online danışmanlık veriyorsanız Türkiye geneli reklam, güçlü kişisel marka ve randevu/ödeme akışına odaklanıyoruz. Genelde ikisini birlikte, dengeli bir strateji kuruyoruz."
      },
      {
        "q": "İçerik için sürekli kamera karşısına geçmem gerekecek mi?",
        "a": "Hayır. Aylık toplu bir çekim planlıyoruz; birkaç saatlik profesyonel foto/video seansıyla haftalarca yetecek içeriği topluyoruz. Reels senaryolarını ve metinleri biz hazırlıyoruz, siz sadece anlatıyorsunuz. Bazı içerikler için hiç kamera gerekmez; carousel ve bilgilendirici görselleri biz üretiyoruz."
      },
      {
        "q": "Öncesi/sonrası paylaşımı yapmak zorunda mıyım?",
        "a": "Kesinlikle hayır, sizin konforunuza ve danışan izinlerine göre ilerliyoruz. Dönüşüm hikâyeleri güçlü bir kanıttır ama tek yol değil. İzin alınmış, etik ve 'garanti' iddiasından uzak bir çerçeveyle çalışırız; istemezseniz eğitici içerik, danışan yorumları ve uzmanlık anlatımıyla da güçlü bir güven inşa ederiz."
      },
      {
        "q": "Sağlık alanında reklam mevzuatı bir sorun olur mu?",
        "a": "Bu konuda dikkatliyiz. Sağlık ve beslenme alanında yanıltıcı iddia, kesin sonuç garantisi ve hassas ifadelerden kaçınan bir dil kullanıyoruz. Hem reklam platformlarının politikalarına hem de sektörün etik çerçevesine uygun içerik ve kampanya kurgusu yapıyoruz; amaç sizi büyütürken riske atmamak."
      },
      {
        "q": "Ne zaman sonuç görmeye başlarım?",
        "a": "Google İşletme optimizasyonu ve NFC yorumlar gibi bazı adımlar ilk haftalarda yerel görünürlükte fark yaratır. Sosyal medya ve kişisel marka ise birikimli bir yatırımdır; genellikle birkaç ay içinde tutarlı içerik ve reklam desteğiyle randevu talebinde belirgin artış görülür. Net beklenti için mevcut durumunuza göre bir yol haritası çıkarıyoruz."
      },
      {
        "q": "Fiyatlar nasıl belirleniyor?",
        "a": "Her diyetisyenin hedefi ve mevcut dijital durumu farklı olduğu için tek tip paket sunmuyoruz. İhtiyacınıza göre (sadece sosyal medya, sosyal medya + reklam, web + randevu sistemi, tam kapsam) size özel bir teklif hazırlıyoruz. Kısa bir görüşmeyle önceliklerinizi konuşup net bir teklif iletebiliriz."
      }
    ]
  },
  {
    "slug": "fizyoterapi",
    "name": "Fizyoterapi & Fizik Tedavi",
    "seoTitle": "Fizyoterapi Dijital Pazarlama Antalya | VOYO",
    "seoDescription": "Antalya'da fizyoterapi ve fizik tedavi merkezleri için hasta getiren dijital pazarlama: Google, sosyal medya, yorum yönetimi ve randevu odaklı web.",
    "primaryKeyword": "fizyoterapi dijital pazarlama Antalya",
    "secondaryKeywords": [
      "fizik tedavi sosyal medya Antalya",
      "fizyoterapist reklam ajansı",
      "fizyoterapi Google reklam",
      "fizik tedavi merkezi web tasarım",
      "fizyoterapi hasta randevu pazarlama",
      "rehabilitasyon merkezi dijital pazarlama Antalya"
    ],
    "heroHeadline": "Antalya'da Fizyoterapi Merkezinizi Hastaların İlk Tercihi Yapıyoruz",
    "intro": [
      "Bel fıtığı, boyun tutulması, spor yaralanması ya da ameliyat sonrası rehabilitasyon; hastalarınız çareyi önce Google'da arıyor. 'Antalya fizik tedavi' veya 'yakınımdaki fizyoterapist' yazan bir kişinin karşısına ilk çıkan, en çok güven veren ve en kolay randevu alınan merkez siz olmalısınız. VOYO tam olarak bunu kuruyor: sizi bulunur, güvenilir ve tercih edilir hale getiren bir dijital sistem.",
      "Fizyoterapi, güven ve uzmanlık işidir. Hasta size bedenini, ağrısını ve iyileşme sürecini emanet ediyor. Bu yüzden içeriğiniz reklam gibi değil, gerçekten işini bilen bir uzmanın anlatımı gibi olmalı. Öncesi/sonrası ilerlemeler, egzersiz videoları, hasta yorumları ve sade bilgilendirici anlatımlarla; kliniğinizin duvarları arasındaki uzmanlığı dijitalde de hissettiriyoruz. VOYO, sağlık alanının hassasiyetini bilen, mevzuata duyarlı ve sonuç odaklı bir ekip olarak yanınızda."
    ],
    "challenges": [
      {
        "title": "Hasta sizi arıyor ama sizi bulamıyor",
        "desc": "'Antalya fizik tedavi', 'bel fıtığı fizyoterapi Muratpaşa' gibi aramalarda görünmüyorsanız, o hasta rakip merkezin randevu defterine yazılıyor. Yerel Google görünürlüğü ve harita sıralaması, fizyoterapide en kritik ama en çok ihmal edilen alan."
      },
      {
        "title": "Uzmanlığınız var ama dijitalde hissettirilemiyor",
        "desc": "Yıllarca deneyiminiz, başarılı vaka geçmişiniz ve modern cihazlarınız var; ama sosyal medyanızda ya hiç paylaşım yok ya da alakasız hazır görseller. Hasta, güven duyamadığı bir yere bedenini emanet etmiyor."
      },
      {
        "title": "Google yorumları eksik ya da yönetilmiyor",
        "desc": "İyileşen memnun hastalarınız sessizce gidiyor, nadir bir olumsuz yorum ise sabit kalıyor. Oysa fizyoterapide karar, büyük ölçüde yorum puanına ve gerçek hasta deneyimlerine bakılarak veriliyor."
      },
      {
        "title": "Sağlık reklam mevzuatı korkutuyor",
        "desc": "Sağlıkta 'tedavi vaadi', 'garanti', 'en iyi' gibi ifadeler ve yanlış görsel kullanımı ceza riski taşır. Mevzuatı bilmeyen ajanslarla çalışmak, hem itibar hem yasal risk demektir."
      },
      {
        "title": "Web sitesi var ama randevuya dönüşmüyor",
        "desc": "Ziyaretçi geliyor, hizmetlere bakıyor ama nasıl randevu alacağını bulamadan çıkıyor. Telefon, WhatsApp ve online randevu net değilse, gelen ilgi boşa gidiyor."
      }
    ],
    "approach": [
      {
        "title": "Yerel arama ve Google Haritalar hakimiyeti",
        "desc": "Google İşletme Profilinizi baştan sona optimize ediyor; 'Antalya fizik tedavi', ilçe ve semt bazlı aramalarda görünürlüğünüzü artırıyoruz. Hedefli Google reklamlarıyla, tam da tedavi arayan hastaya doğru anda ulaşıyoruz."
      },
      {
        "title": "Güven inşa eden görsel içerik üretimi",
        "desc": "Profesyonel foto/video ekibimizle kliniğinizi, cihazlarınızı, ekibinizi ve (izinli) hasta ilerleme süreçlerini gerçekçi biçimde belgeliyoruz. Egzersiz ve bilgilendirme videolarıyla uzmanlığınızı somut hale getiriyoruz."
      },
      {
        "title": "Google yorum ve itibar yönetimi (NFC çözümü)",
        "desc": "Memnun hastalardan yorum toplamayı NFC yorum kartı/standımızla tek dokunuşa indiriyoruz. Yorum akışını düzenli, puanınızı yüksek ve itibarınızı korunaklı tutuyoruz."
      },
      {
        "title": "Randevu odaklı web ve iletişim akışı",
        "desc": "Hizmetleri (bel-boyun fıtığı, spor rehabilitasyonu, nörolojik rehabilitasyon, manuel terapi vb.) net anlatan, hızlı ve mobil uyumlu bir site kuruyoruz. WhatsApp ve online randevuyu ön plana alarak ilgiyi hastaya çeviriyoruz."
      },
      {
        "title": "Mevzuata duyarlı, bilgilendirici içerik stratejisi",
        "desc": "Sağlık iletişim kurallarına uygun; abartısız, doğru ve eğitici içerikler üretiyoruz. Blog ve sosyal medyada sık sorulan sorulara cevap vererek hem güven hem organik görünürlük kazandırıyoruz."
      },
      {
        "title": "Turizm ve sağlık turizmi için çok dilli seçenek",
        "desc": "Antalya'nın uluslararası hasta potansiyelini değerlendirmek isteyen merkezler için çok dilli web ve içerik altyapısı kuruyor, yabancı hastaya da ulaşmanızı sağlıyoruz."
      }
    ],
    "faqs": [
      {
        "q": "Fizyoterapi merkezimiz için hangi dijital hizmetten başlamalıyız?",
        "a": "Çoğu fizyoterapi merkezinde en hızlı sonucu Google İşletme Profili optimizasyonu ve yorum yönetimi verir; çünkü hastaların büyük kısmı harita ve yorumlara bakarak karar verir. Ardından yerel Google reklamları ve randevu odaklı web ile ilgiyi hastaya dönüştürürüz. Merkezinizin mevcut durumuna göre size özel bir yol haritası çıkarıyoruz."
      },
      {
        "q": "Sağlık reklam mevzuatına uygun içerik üretiyor musunuz?",
        "a": "Evet. Sağlık alanının hassasiyetini biliyoruz; 'garanti', 'kesin tedavi', 'en iyi' gibi riskli ifadelerden ve yanıltıcı görsellerden kaçınıyoruz. İçeriklerimiz bilgilendirici, doğru ve mevzuata duyarlı olur; hem itibarınızı hem yasal güvenliğinizi koruruz."
      },
      {
        "q": "Hasta yorumlarını nasıl artırıyorsunuz?",
        "a": "Memnun hastadan yorum istemek çoğu zaman unutuluyor. Biz bu süreci NFC yorum kartı/standı ile otomatikleştiriyoruz: hasta telefonunu okuttuğunda doğrudan yorum ekranına gidiyor. Böylece Google puanınız ve yorum sayınız düzenli olarak artıyor, itibarınız güçleniyor."
      },
      {
        "q": "Öncesi/sonrası veya hasta görsellerini kullanmak sorun olur mu?",
        "a": "Bu görseller güçlü bir güven aracıdır ama yalnızca hasta onayı ve mevzuata uygun şekilde kullanılmalıdır. VOYO olarak izin ve gizlilik süreçlerini gözeterek, kimlik ifşa etmeyen ve etik çerçeveye uygun içerikler hazırlarız."
      },
      {
        "q": "Antalya dışından veya yabancı hasta da hedefleyebilir miyiz?",
        "a": "Evet. Antalya'nın turizm ve sağlık turizmi potansiyeli yüksek. Çok dilli web ve içerik altyapısı ile şehir dışından ya da yurt dışından gelen hastalara da ulaşmanızı sağlayacak kampanyalar kurgulayabiliriz."
      },
      {
        "q": "Net fiyat alabilir miyiz?",
        "a": "Fiyat; merkezinizin hedefleri, hizmet kapsamı ve mevcut dijital durumunuza göre değişir. Sizi dinleyip ihtiyacınıza uygun, şeffaf bir teklif hazırlıyoruz. Kısa bir görüşmeyle size özel yol haritası ve teklifi netleştirebiliriz."
      }
    ]
  },
  {
    "slug": "emlak-gayrimenkul",
    "name": "Emlak & Gayrimenkul",
    "seoTitle": "Emlak Dijital Pazarlama Antalya | VOYO Ajans",
    "seoDescription": "Antalya emlak ofisleri için drone/video portföy, çok dilli reklam, yabancıya satış odaklı lead ve Google itibar yönetimi. VOYO ile portföyünüzü satışa çevirin.",
    "primaryKeyword": "emlak dijital pazarlama Antalya",
    "secondaryKeywords": [
      "gayrimenkul sosyal medya Antalya",
      "emlak reklam ajansı Antalya",
      "yabancıya konut satış pazarlama",
      "emlak drone video çekimi Antalya",
      "gayrimenkul lead reklamları"
    ],
    "heroHeadline": "Antalya'da portföyünüzü sadece listelemek yetmez; doğru alıcıya, doğru dilde ulaştırmak gerekir",
    "intro": [
      "Antalya emlak piyasası Türkiye'nin geri kalanına benzemiyor. Aynı portföyü hem yerli yatırımcıya, hem tatil evi arayan İstanbullu'ya, hem de Rus, İranlı, Alman, Arap alıcıya pazarlıyorsunuz. Portalda binlerce ilan arasında kaybolan, telefonu susan, gelen sorguların çoğu 'sadece bakıyordum' diyen bir düzen çoğu ofisin gerçeği. Oysa tek bir işlemin komisyonu, aylık dijital bütçenin kat kat üzerinde.",
      "VOYO olarak emlak sektörünü, satılan metrekareyi değil kapanan işlemi düşünerek ele alıyoruz. Fark, mülkün nasıl gösterildiğinde ve alıcının hangi dilde, hangi kanalda yakalandığında başlıyor. Drone ve video ile fark yaratan portföy sunumu, çok dilli reklam kurgusu, nitelikli alıcıyı ayıklayan lead sistemi ve ofisinizin itibarını güçlendiren Google yorum stratejisi; hepsini tek elden yönetiyoruz."
    ],
    "challenges": [
      {
        "title": "Portalda kaybolan, sıradan görünen ilanlar",
        "desc": "Cep telefonuyla, ters ışıkta, dağınık odalarda çekilmiş fotoğraflarla lüks bir villa bile ucuz görünür. Alıcı ilk 3 saniyede karar verir ve kaydırır. Portalda yüzlerce benzer ilan arasında öne çıkmadan, ne tıklama ne de sorgu alırsınız."
      },
      {
        "title": "Yabancı alıcıya kendi dilinde ulaşamamak",
        "desc": "Antalya'da alıcının önemli bir kısmı yabancı. Ama reklamınız yalnızca Türkçe ise, tatil evi ya da vatandaşlık için mülk arayan Rus, Alman, Arap veya İranlı alıcı sizi hiç görmez. Yanlış dil ve yanlış hedefleme, en değerli portföyü görünmez kılar."
      },
      {
        "title": "Nitelikli alıcı ile vakit hırsızını ayıramamak",
        "desc": "Gelen her arama satış değildir. Bütçesi tutmayan, sadece merak eden, meslektaş olan sorgular danışmanların saatlerini yer. Doğru kurgulanmamış reklam, size çok sayıda değersiz temas getirip gerçekten alım niyeti olan alıcıyı gölgede bırakır."
      },
      {
        "title": "Ofis itibarı ve güvenin dijitalde görünmemesi",
        "desc": "Yüksek meblağlı bir işlemde alıcı, ofisinizi Google'da arar. Az sayıda ya da eski yorum, güncellenmeyen bir profil, alım kararının tam eşiğinde tereddüt yaratır. İtibarınız sahada güçlüyken dijitalde zayıf görünmek, kapanmak üzere olan işlemleri kaçırtır."
      }
    ],
    "approach": [
      {
        "title": "Satış odaklı görsel prodüksiyon: foto, video ve drone",
        "desc": "Her mülkü hak ettiği gibi gösteriyoruz. Profesyonel iç mekan çekimi, mülkün ruhunu aktaran tanıtım videosu ve site, deniz, konum avantajını gösteren drone kareleri. Konumun değerini havadan gösterdiğinizde, alıcı fiyatı değil hayali görür ve sorgu kalitesi anında yükselir."
      },
      {
        "title": "Çok dilli reklam ve doğru alıcı hedefleme",
        "desc": "Google ve Meta reklamlarını alıcı profiline göre kuruyoruz: yerli yatırımcı, tatil evi arayan, vatandaşlık için mülk arayan yabancı. Reklam metni ve görselleri hedef kitlenin dilinde hazırlıyor, doğru lokasyon ve ilgi hedeflemesiyle bütçenizi gerçekten alım niyeti olan kişilere yönlendiriyoruz."
      },
      {
        "title": "Nitelikli lead toplayan başvuru sistemleri",
        "desc": "Reklamdan gelen ilgiyi boşa harcamıyoruz. Bütçe, bölge ve amaç sorularıyla ön eleme yapan lead formları ve WhatsApp yönlendirmeleriyle, danışmanınızın önüne sadece ciddi alıcıları getiriyoruz. Böylece ekibiniz aramalara değil, işlem kapatmaya odaklanır."
      },
      {
        "title": "Google itibar yönetimi ve NFC yorum kartı",
        "desc": "Mutlu alıcıyı memnuniyetini yazmaya teşvik eden NFC yorum kartlarıyla Google puanınızı ve yorum sayınızı sistematik olarak büyütüyoruz. Güncel, güçlü bir profil, yüksek meblağlı kararın eşiğindeki alıcıya güven verir ve tereddüdü satışa çevirir."
      }
    ],
    "faqs": [
      {
        "q": "Yabancı alıcıya yönelik reklamları hangi dillerde yapıyorsunuz?",
        "a": "Antalya'da yoğun olan alıcı profillerine göre planlıyoruz: Rusça, Almanca, Arapça, Farsça ve İngilizce başta olmak üzere. Reklam metnini, görselleri ve varış sayfasını hedef kitlenin dilinde hazırlıyor, coğrafi ve ilgi bazlı hedeflemeyi o profile göre kuruyoruz. Böylece bütçeniz doğru ülke ve doğru niyetteki alıcıya gider."
      },
      {
        "q": "Tek bir mülk için mi yoksa tüm ofisin dijital yönetimi için mi çalışıyorsunuz?",
        "a": "İkisini de yapıyoruz. Öne çıkarmak istediğiniz belirli bir villa ya da proje için kampanya kurabiliriz; ya da ofisinizin sosyal medya, reklam, görsel prodüksiyon ve itibar yönetimini bütünüyle üstlenebiliriz. İhtiyacınıza göre kapsamı birlikte belirliyoruz."
      },
      {
        "q": "Drone çekimi için özel izin gerekir mi, bununla siz mi ilgileniyorsunuz?",
        "a": "Drone çekimlerinde uçuşa yasak veya izne tabi bölgeleri gözeterek plan yapıyoruz ve prodüksiyonu baştan sona biz yürütüyoruz. Siz sadece çekilecek mülkleri bize iletiyorsunuz; sahadaki organizasyon ve teknik kısım bizde."
      },
      {
        "q": "Reklamlardan gelen leadlerin gerçekten alıcı olduğunu nasıl anlarız?",
        "a": "Lead formlarına bütçe, bölge ve alım amacı gibi ön eleme soruları ekliyoruz ve gelen başvuruları raporluyoruz. Zamanla hangi kampanyanın nitelikli alıcı getirdiğini net biçimde görüyor, bütçeyi en çok işlem kapatan kanallara kaydırıyoruz."
      },
      {
        "q": "Net bir fiyat teklifi alabilir miyiz?",
        "a": "Elbette. Portföyünüzün büyüklüğüne, hedeflediğiniz alıcı kitlesine ve görsel prodüksiyon ihtiyacına göre kapsam değiştiği için, size özel bir teklif hazırlıyoruz. Kısa bir görüşmeyle ihtiyacınızı netleştirip şeffaf bir teklif sunuyoruz."
      }
    ]
  },
  {
    "slug": "avukat-hukuk",
    "name": "Avukat & Hukuk Büroları",
    "seoTitle": "Avukat & Hukuk Bürosu Dijital Pazarlama | Antalya",
    "seoDescription": "Antalya'daki avukat ve hukuk büroları için baro kurallarına uygun web sitesi, itibar yönetimi ve bilgilendirici içerik. VOYO ile mevzuata saygılı dijital görünürlük.",
    "primaryKeyword": "avukat hukuk bürosu dijital pazarlama Antalya",
    "secondaryKeywords": [
      "avukat web sitesi Antalya",
      "hukuk bürosu SEO Antalya",
      "avukat Google itibar yönetimi",
      "hukuk bürosu içerik pazarlaması",
      "baro kurallarına uygun avukat tanıtımı",
      "Muratpaşa avukat dijital ajans"
    ],
    "heroHeadline": "Reklam değil itibar: Baro kurallarına saygılı, güven veren bir dijital görünürlük",
    "intro": [
      "Hukuk mesleğinde dijital dünya diğer sektörler gibi işlemez. TBB Meslek Kuralları ve reklam yasağı yönetmeliği, avukatın \"müşteri çeken\" bir reklam vermesini net biçimde yasaklar; ama bu, görünmez kalmanız gerektiği anlamına gelmez. Bir vatandaş bir hukuki sorunla karşılaştığında ilk yaptığı şey aramaktır: \"Antalya boşanma avukatı\", \"işçi alacağı ne kadar sürer\", \"miras davası nasıl açılır\". O anda karşısına güven veren, bilgilendirici, ciddiyetini koruyan bir büro çıkması ile hiç çıkmaması arasındaki fark, mesleki itibarınızın dijitaldeki karşılığıdır.",
      "VOYO olarak avukat ve hukuk bürolarıyla çalışırken önce mevzuatı, sonra tasarımı konuşuruz. Amacımız size \"iş getiren bir reklam\" satmak değil; hakkınızda arama yapan kişinin karşısına vakur, doğru ve baro kurallarıyla çelişmeyen bir profesyonel kimlik koymaktır. Antalya'da Muratpaşa merkezli çalışıyor, bölgedeki adliye çevresi ve müvekkil profilini bilerek hareket ediyoruz."
    ],
    "challenges": [
      {
        "title": "Reklam yasağı sınırında yürümek",
        "desc": "Avukatlık Kanunu ve TBB Reklam Yasağı Yönetmeliği; başarı vaadi, dava sayısı, \"en iyi\", \"garanti\", müvekkil yorumu paylaşımı, indirim/kampanya gibi ifadeleri yasaklar. Sektörü bilmeyen bir ajansın hazırladığı sıradan bir \"hizmet tanıtımı\" metni, sizi baro disiplin soruşturmasıyla karşı karşıya bırakabilir. En büyük risk, iyi niyetle atılmış yanlış bir cümledir."
      },
      {
        "title": "Güven ve otorite algısını dijitalde kuramamak",
        "desc": "Hukukta müvekkil kararını duyguyla değil güvenle verir. Amatör bir logo, tarih atmayan bir blog, mobilde bozulan bir site ya da yıllardır güncellenmemiş bir \"hakkımızda\" sayfası; uzmanlığınızla taban tabana zıt bir izlenim bırakır. Ciddiyet, dijitalde tasarım diliyle konuşulur."
      },
      {
        "title": "Görünürlük ile itibarı karıştırmak",
        "desc": "Bir hukuk bürosunun dijital hedefi \"viral olmak\" değil, doğru kişiye doğru anda ciddi bir kaynak olarak görünmektir. Bilgilendirici içerik (makaleler, hukuki süreç anlatımları) sizi otorite yaparken; agresif reklam söylemi hem mevzuata aykırıdır hem de meslektaşlarınız ve baro nezdinde itibar kaybettirir."
      },
      {
        "title": "Google'daki dağınık ve kontrolsüz itibar",
        "desc": "Adınız Google'da arandığında çıkan eski bir dizin kaydı, yanlış telefon, hatalı adres ya da yönetilmeyen bir yorum; ilk izlenimi belirler. Çoğu büro, kendisi hakkında internette ne göründüğünü hiç kontrol etmez. Oysa itibar, yönetilmediğinde başkaları tarafından şekillendirilir."
      }
    ],
    "approach": [
      {
        "title": "Mevzuata uygun, kurumsal web sitesi",
        "desc": "Vakur, sade, hızlı ve mobil uyumlu bir hukuk bürosu web sitesi tasarlıyoruz. Çalışma alanlarınızı (aile hukuku, ceza, iş, ticaret, gayrimenkul, icra) bilgilendirici bir dille anlatan; başarı/garanti vaadi içermeyen, TBB kurallarıyla uyumlu bir dil kurguluyoruz. Her metni \"bu cümle reklam yasağına takılır mı\" filtresinden geçiriyoruz."
      },
      {
        "title": "Bilgilendirici içerik ve SEO ile otorite inşası",
        "desc": "Reklam yerine bilgi. \"İşe iade davası süreci\", \"boşanmada mal paylaşımı nasıl olur\", \"kira tespit davası\" gibi vatandaşın gerçekten arattığı konularda, hukuki doğruluğu korunmuş, sizi uzman olarak konumlandıran makaleler üretiyoruz. Bu içerikler Antalya bazlı aramalarda organik olarak öne çıkmanızı sağlar; hem etik hem sürdürülebilirdir."
      },
      {
        "title": "Google İşletme Profili ve itibar yönetimi",
        "desc": "Google'da arandığınızda çıkan bilgiyi (adres, çalışma saati, konum, iletişim) doğru ve tutarlı hale getiriyoruz. NFC yorum çözümlerimizle -mevzuatın izin verdiği çerçevede, müvekkil beyanını yönlendirmeden- büronuzun dijital itibarını düzenli ve kontrollü biçimde yönetmenize yardımcı oluyoruz. Amaç yorum toplamak değil, dağınık itibarı toparlamaktır."
      },
      {
        "title": "Ölçülü profesyonel görsel ve marka kimliği",
        "desc": "Kurumsal fotoğraf çekimi, sade ve güven veren bir logo/kurumsal kimlik, LinkedIn ve dijital mecralar için ciddiyeti koruyan görsel dil. Abartıdan, stok klişelerinden ve mesleğe yakışmayan tondan uzak; büronuzun ağırlığını yansıtan bir görsel bütünlük kuruyoruz."
      },
      {
        "title": "Ölçülebilir ve şeffaf raporlama",
        "desc": "Hangi içeriğin okunduğu, sitenize hangi aramalarla ulaşıldığı, iletişim taleplerinin nereden geldiği; hepsini sade raporlarla paylaşıyoruz. Boş metrik değil, büronuza gerçek değer katan verilerle ilerliyoruz."
      }
    ],
    "faqs": [
      {
        "q": "Avukatların reklam yapması yasak değil mi? Yaptıklarınız mevzuata aykırı olmaz mı?",
        "a": "Hayır. Yaptığımız şey reklam değil, bilgilendirme ve itibar yönetimidir. TBB Reklam Yasağı Yönetmeliği; başarı/garanti vaadini, kampanyayı, müvekkil yorumu paylaşımını, \"en iyi\" gibi üstünlük ifadelerini yasaklar; ancak avukatın çalışma alanlarını bildirmesine, bilgilendirici içerik üretmesine ve doğru iletişim bilgisiyle görünür olmasına izin verir. Tüm içeriklerimizi bu çerçeveye göre kurgular, yasağa takılabilecek her ifadeyi ayıklarız."
      },
      {
        "q": "Web sitemde müvekkil yorumlarına ve kazandığımız davalara yer verebilir miyiz?",
        "a": "Bu alan hassastır. Yönetmelik, müvekkil beyanı/teşekkürü paylaşımını ve dava sonuçlarıyla övünmeyi kısıtlar. Bu nedenle sitenizde \"kazanılan dava\" veya müvekkil yorumu sergilemek yerine; çalışma alanlarınızı, uzmanlığınızı ve bilgilendirici içerikleri öne çıkaran, güven algısını mevzuata uygun yollarla kuran bir yapı öneriyoruz. Neyin yapılabilir neyin riskli olduğunu her büro için ayrı değerlendiririz."
      },
      {
        "q": "Antalya'da yerel olarak öne çıkmamız mümkün mü?",
        "a": "Evet ve en değerli alan da burasıdır. Muratpaşa merkezli çalışıyor, Antalya adliyesi çevresindeki müvekkil profiliyle uyumlu, ilçe bazlı (Muratpaşa, Konyaaltı, Kepez, Lara) bilgilendirici içerik ve doğru bir Google İşletme Profili ile bölgesel aramalarda organik görünürlüğünüzü artırıyoruz. Yerel long-tail aramalar hukukta rekabetin en makul olduğu ve dönüşümün en yüksek olduğu alandır."
      },
      {
        "q": "Bilgilendirici makaleleri kim yazacak, hukuki doğruluk nasıl korunacak?",
        "a": "İçerik iskeletini ve SEO kurgusunu biz hazırlar, taslakları hukuki doğruluk açısından sizin onayınıza sunarız. Hiçbir metin sizin veya büronuzdaki bir avukatın kontrolünden geçmeden yayınlanmaz. Böylece hem arama motorlarına uygun hem de mesleki sorumluluğunuza uygun, güvenle arkasında durabileceğiniz içerikler ortaya çıkar."
      },
      {
        "q": "Net fiyat alabilir miyim?",
        "a": "Her hukuk bürosunun ihtiyacı farklıdır: kimi sadece kurumsal bir web sitesi ister, kimi düzenli içerik ve itibar yönetimi. Çalışma alanlarınızı, mevcut dijital durumunuzu ve hedeflerinizi konuştuğumuz kısa bir görüşmenin ardından size özel, şeffaf bir teklif sunuyoruz. Bizimle iletişime geçin, ihtiyacınıza göre net bir yol haritası çıkaralım."
      }
    ]
  },
  {
    "slug": "oto-galeri",
    "name": "Oto Galeri & Araç Satış",
    "seoTitle": "Oto Galeri Dijital Pazarlama Antalya | VOYO",
    "seoDescription": "Antalya oto galeriler için araç fotoğraf/video, sosyal medya, Google & Meta reklam ve lead yönetimi. Aracı hızlı sat, güven inşa et. Ücretsiz teklif al.",
    "primaryKeyword": "oto galeri dijital pazarlama Antalya",
    "secondaryKeywords": [
      "oto galeri sosyal medya Antalya",
      "araç satış reklam Antalya",
      "ikinci el araç ilan yönetimi",
      "oto galeri Instagram yönetimi",
      "araç fotoğraf çekimi Antalya",
      "galeri Google reklam",
      "oto galeri web sitesi Antalya"
    ],
    "heroHeadline": "Antalya'da Aracınızı Vitrinde Değil, Ekranda Sattırıyoruz",
    "intro": [
      "Bir oto galeride araç ne kadar hızlı satılırsa, sermaye o kadar hızlı döner. Ama bugün alıcı galeriye gelmeden önce kararını telefonundan veriyor: sahibinden'deki ilana, Instagram profilinize, Google yorumlarınıza ve galeri fotoğraflarınıza bakıp geliyor. Kötü ışıkta çekilmiş bir cep telefonu fotoğrafı ya da güncellenmemiş bir profil, o aracı görmeden eleyen alıcı demek.",
      "VOYO, Antalya merkezli tam kapsamlı bir dijital ajans olarak oto galeri ve araç satış sektörünü, aracın plakasını değil satış hızını düşünerek ele alır. Profesyonel araç fotoğrafı ve videosu, portallar ile sosyal medyanın birlikte yönetimi, Google ve Meta'da doğru alıcıya ulaşan reklamlar ve gelen her talebin takip edildiği bir lead düzeni kurarız. Amaç net: park halindeki aracı stoktan çıkarmak, galerinizi Antalya'da güvenilir bir marka yapmak."
    ],
    "challenges": [
      {
        "title": "Araç ekranda kötü görünüyor, alıcı görmeden eliyor",
        "desc": "Aynı aracın iki farklı fotoğrafı iki farklı fiyat algısı yaratır. Güneşte parlayan cam, dağınık arka plan, eksik detay çekimleri; alıcının aklında 'bakımsız' izlenimi bırakır. Oysa alıcının ilk gördüğü şey aracın kendisi değil, fotoğrafıdır."
      },
      {
        "title": "İlan portalları ile sosyal medya birbirinden kopuk",
        "desc": "Sahibinden ve benzeri portallarda ilan var ama Instagram ölü, ya da tersi. Aynı araç iki yerde farklı açı, farklı fiyat, farklı bilgiyle görünüyor. Alıcı çelişki gördüğü an güveni sarsılır ve pazarlık gücünüz düşer."
      },
      {
        "title": "Gelen mesaj ve arama çok, ama takip yok",
        "desc": "DM'den, WhatsApp'tan, ilan mesajından talep yağıyor ama hangisi ciddi, hangisi hangi araca baktı, kim geri aranacak belli değil. Sıcak alıcı, cevap gecikince yandaki galeriden aracını alıyor. Satış kaçıran şey çoğu zaman fiyat değil, geç dönüş."
      },
      {
        "title": "Google'da galeri itibarı zayıf ya da görünmüyor",
        "desc": "'Antalya oto galeri' ya da 'ikinci el araç Muratpaşa' aramasında haritada yoksunuz, ya da 3-4 eski yorumla duruyorsunuz. İkinci el araçta alıcının en büyük korkusu güven; az ve olumsuz yorum, en iyi aracı bile şüpheli gösterir."
      },
      {
        "title": "Kampanya ve yeni gelen araç duyurusu geç kalıyor",
        "desc": "Galeriye taze bir araç girdiğinde ya da bir kampanya başladığında hızla doğru kitleye ulaşmak gerekir. İçerik günler sonra, alelacele paylaşıldığında sıcak fırsat soğur; en çok ilgi çekecek araçlar sessizce stokta bekler."
      }
    ],
    "approach": [
      {
        "title": "Satış odaklı araç fotoğraf, video ve 360° çekimi",
        "desc": "Galerinize ya da lokasyona gelir, araçları doğru ışık ve açılarla çekeriz: dış/iç detaylar, motor, kilometre, hasar kaydı netliği. İsteğe bağlı 360° iç mekân ve kısa tanıtım videosu ile alıcı aracı görmeden 'gezmiş' gibi hisseder. Her araç, ekranda showroom kalitesinde durur."
      },
      {
        "title": "Portal + sosyal medya tek elden, tutarlı yönetim",
        "desc": "Sahibinden gibi portallardaki ilan görselleri ile Instagram/Facebook içeriğini aynı standartta, aynı bilgiyle tutarız. Yeni gelen araç, stoktan çıkan araç, öne çıkan fırsatlar; galerinizin sesiyle düzenli akan bir vitrine dönüşür. Alıcı nereye bakarsa baksın aynı güveni görür."
      },
      {
        "title": "Doğru alıcıya ulaşan Google ve Meta reklamları",
        "desc": "Bütçeyi rastgele değil, satın alma niyetli kitleye yönlendiririz. Google'da 'model + Antalya' arayanı, Meta'da bütçesine ve ilgisine göre alıcı adayını hedefleriz. Belirli bir aracı hızlı satmak ya da genel galeri bilinirliği; hedefe göre kampanya kurar, sonucu rakamla raporlarız."
      },
      {
        "title": "Lead takibi ve hızlı dönüş düzeni",
        "desc": "DM, WhatsApp, arama ve ilan mesajlarını tek akışta toplar; hangi talebin hangi araca, hangi aşamada olduğunu görünür kılarız. WhatsApp'a hızlı yanıt kurgusu ve takip hatırlatmalarıyla sıcak alıcı elden kaçmaz. Reklam harcaması satışa dönüşür, boşa gitmez."
      },
      {
        "title": "NFC Google yorum kartı ile itibar inşası",
        "desc": "Memnun her müşteriyi, tek dokunuşla Google yorumu bırakacak NFC kartımızla değerlendirir; galerinizin yıldız sayısını ve güvenilirliğini istikrarlı büyütürüz. Antalya'da 'güvenilir oto galeri' arayan alıcının karşısına yüksek puanlı, çok yorumlu bir işletme olarak çıkarsınız."
      },
      {
        "title": "Galeriye özel web sitesi ve stok vitrini",
        "desc": "İsteğe bağlı, mobil uyumlu ve hızlı bir web sitesiyle stokunuzu kendi vitrininizde sergiler; portala bağımlılığınızı azaltırız. Araç detay sayfaları, iletişim/WhatsApp butonları ve reklamların ineceği net bir adres; markanızı portalların gölgesinden çıkarır."
      }
    ],
    "faqs": [
      {
        "q": "Araçları çekmek için galeriye mi geliyorsunuz?",
        "a": "Evet. Antalya içinde galerinize ya da araçların bulunduğu lokasyona gelip profesyonel foto, video ve isteğe bağlı 360° çekim yaparız. Yoğun stokta düzenli çekim günleri planlayarak yeni gelen araçların hızla ekrana çıkmasını sağlarız."
      },
      {
        "q": "Sadece sosyal medya mı yönetiyorsunuz, sahibinden ilanlarına da bakıyor musunuz?",
        "a": "İkisini birlikte ele alırız. Portal ilanlarındaki görsel kalitesi ve bilgi tutarlılığı ile sosyal medya içeriğini aynı standartta yönetiriz; böylece alıcı nereye bakarsa baksın aynı güveni ve aynı fiyatı görür."
      },
      {
        "q": "Belirli bir aracı hızlı satmak istiyorum, reklam işe yarar mı?",
        "a": "Evet, en güçlü olduğumuz alanlardan biri. O aracın modeline, fiyat aralığına ve Antalya'daki alıcı profiline göre Google ve Meta'da hedefli kampanya kurar, gelen talepleri takip eder ve sonucu şeffaf raporlarla paylaşırız."
      },
      {
        "q": "Gelen mesaj ve aramaları da siz mi yönetiyorsunuz?",
        "a": "Talepleri tek akışta toplayıp hangi aracın hangi alıcıyla ilgilendiğini görünür kılan bir lead düzeni kurarız. Hızlı yanıt ve takip kurgusuyla satışı siz yaparsınız, biz sıcak alıcının elinizden kaçmamasını sağlarız."
      },
      {
        "q": "Google yorumlarımı nasıl artırıyorsunuz?",
        "a": "Kendi geliştirdiğimiz NFC Google yorum kartıyla, memnun müşteri tek dokunuşla yorum sayfasına yönlenir. İkinci el araçta güven her şeydir; yüksek puan ve çok sayıda yorum, galerinizi arama sonuçlarında öne çıkarır."
      },
      {
        "q": "Fiyatlandırma nasıl işliyor?",
        "a": "Her galerinin stok büyüklüğü, hedefi ve rekabeti farklı olduğu için tek tip paket sunmayız. İhtiyacınızı dinledikten sonra çekim, sosyal medya, reklam ve lead yönetimini kapsayan net bir teklif hazırlarız. İlk görüşme ve teklif ücretsizdir."
      }
    ]
  },
  {
    "slug": "spor-salonu-fitness",
    "name": "Spor Salonu, Fitness & Pilates",
    "seoTitle": "Spor Salonu & Fitness Dijital Pazarlama Antalya",
    "seoDescription": "Antalya'da spor salonu, fitness, pilates ve crossfit için üyelik getiren Instagram, Reels ve yerel reklam yönetimi. VOYO ile dolu ders ve düzenli üye akışı.",
    "primaryKeyword": "spor salonu dijital pazarlama Antalya",
    "secondaryKeywords": [
      "fitness salonu Instagram reklam Antalya",
      "pilates stüdyosu sosyal medya yönetimi",
      "crossfit box Google reklam Antalya",
      "spor salonu üyelik kampanyası dijital pazarlama",
      "Antalya fitness Google yorum",
      "yaz öncesi spor salonu reklamı"
    ],
    "heroHeadline": "Dolu Dersler, Düzenli Üyeler: Antalya'da Spor Salonunuza Sürekli Üye Getiren Dijital Pazarlama",
    "intro": [
      "Spor salonu, fitness, pilates ve crossfit işinde ciro bir şeye bağlıdır: yeni üye akışı ile mevcut üyenin kalıcılığı. Potansiyel üye 'evime yakın spor salonu' veya 'Antalya pilates' diye aradığında karşısına siz mi çıkıyorsunuz? Instagram'ınıza baktığında salonun enerjisini, ekipmanı, eğitmenleri ve gerçek üye sonuçlarını görüyor mu, yoksa üç ay önce paylaşılmış tozlu bir gönderi mi buluyor? Bu izlenim, o kişinin deneme dersine gelip gelmeyeceğini doğrudan belirler.",
      "Antalya bu iş için hem fırsat hem zorluk. Muratpaşa, Konyaaltı, Lara gibi semtlerde salon yoğunluğu yüksek, rekabet sert; ama yaz öncesi form tutma isteği, yıl başı motivasyonu ve sağlıklı yaşam ilgisi de o kadar canlı. Doğru mahalleye, doğru mevsimde, doğru mesajla çıkmak; deneme dersini kolaylaştırmak ve gelen ilgiyi kaçırmadan üyeliğe çevirmek, bu sektörde kazananı belirler.",
      "VOYO olarak salon dinamiğini biliyoruz: sezonsal iniş çıkışları, üye eriyip gitmesini, deneme dersinin altın değerini. Amacımız sadece takipçi toplamak değil; deneme dersi, dolu grup dersleri, imzalanan üyelik ve aylarca devam eden sadık üye getirmek. Salonunuzu sadece güzel göstermiyoruz, dolu çalıştırıyoruz."
    ],
    "challenges": [
      {
        "title": "Salonun enerjisi ekrana yansımıyor",
        "desc": "Fitness ve pilates satın alma kararı duyguyla verilir: 'ben de orada olmak isterim' hissi. Karanlık, telefonla üstünkörü çekilmiş gönderiler salonun gerçek enerjisini, temizliğini ve ekipmanını gösteremez. Reels ve profesyonel video olmadan potansiyel üye salonu hayalinde canlandıramaz, deneme dersine adım atmaz."
      },
      {
        "title": "Yeni üye gelir ama birkaç ay sonra kaybolur",
        "desc": "Asıl sorun sadece yeni üye bulmak değil; gelenin kalmasını sağlamak. Üye eğer topluluğa ait hissetmezse, ilerlemesini görmezse ve düzenli motive edilmezse sessizce devam etmeyi bırakır. İçerik ve iletişim kurgusu olmadan her ay aynı 'kaçak' döngüsünde dönersiniz."
      },
      {
        "title": "Reklam bütçesi yanlış semte ve kitleye akıyor",
        "desc": "Spor salonu yerel bir iştir; kimse şehrin öbür ucundaki salona her gün gitmez. Mahalle bazında daraltılmamış reklamlar, salona hiç gelmeyecek insanlara gösterilip parayı yakar. Yaş, ilgi alanı ve mesafe hedeflemesi yapılmadan verilen kampanyalar tıklama getirir ama üye getirmez."
      },
      {
        "title": "Sezon ve kampanya zamanlaması kaçırılıyor",
        "desc": "Yaz öncesi form telaşı, yıl başı kararları, tatil sonrası dönüş; bunlar salonun altın dönemleridir. Bu pencereler doğru kampanyayla yakalanmazsa, en yoğun talep döneminde rakip salonlar üyeleri toplarken siz seyredersiniz. Yaz ortası ve sezon sonu düşüşleri de kampanyasız yönetildiğinde ciroyu sarsar."
      },
      {
        "title": "Deneme dersi talebi geliyor ama üyeye dönmüyor",
        "desc": "Instagram'dan veya WhatsApp'tan 'fiyat ne kadar', 'deneme dersi var mı' mesajları düşer ama geç yanıt, dağınık takip ve net olmayan yönlendirme yüzünden çoğu buharlaşır. Gelen ilgiyi randevuya ve imzalı üyeliğe çeviren bir akış olmadan reklam bütçesi yarı yolda kaybolur."
      },
      {
        "title": "Google yorumları az, haritada geride kalıyorsunuz",
        "desc": "'Yakınımdaki spor salonu' araması yapan kişi önce Google Haritalar'daki yıldızlara ve yorum sayısına bakar. Memnun üyeler yorum bırakmayı unutur, tek bir olumsuz deneyim ise puanı aşağı çeker. Yorum sayınız rakibin gerisindeyse, kapınızın önünden geçen kişi bile içeri girmeden başka salona yönelir."
      }
    ],
    "approach": [
      {
        "title": "Salonun enerjisini yansıtan profesyonel foto & video",
        "desc": "Salonunuzda yerinde çekim yaparız: ders anları, ter ve efor, ekipman, eğitmen enerjisi ve topluluk ruhu. Reels ve kısa video kurgularıyla o 'ben de orada olmak isterim' hissini ekrana taşırız. Pilates için sakinlik ve estetik, crossfit için yoğunluk ve azim; her disiplinin dilini görselle konuştururuz."
      },
      {
        "title": "Üye getiren ve tutan Instagram & sosyal medya yönetimi",
        "desc": "Sadece paylaşım yapmayız; deneme dersine çeken ve mevcut üyeyi bağlayan bir strateji kurarız. Eğitmen tanıtımları, üye başarı hikayeleri, öncesi/sonrası, egzersiz ipuçları, ders programları ve DM/yorum yönetimiyle hesabınızı canlı bir topluluk vitrinine dönüştürürüz."
      },
      {
        "title": "Mahalle bazlı Google & Meta reklam yönetimi",
        "desc": "Konyaaltı, Lara, Muratpaşa ya da hedef semtinizde 'yakınımdaki spor salonu' aramalarında öne çıkmak için Google Arama ve Harita reklamları; Instagram/Facebook'ta yaş, ilgi ve mesafeye göre daraltılmış kampanyalar kurarız. Bütçeniz sadece gerçekten gelebilecek yerel kitleye harcanır."
      },
      {
        "title": "Yaz öncesi & sezonsal kampanya kurgusu",
        "desc": "Yaz öncesi form kampanyası, yıl başı 'yeni yıl yeni ben', tatil dönüşü ve arkadaş getirene indirim gibi kurguları takvime bağlarız. Yoğun dönemleri maksimum doldurur, düşük sezonu hedefli kampanyayla ayakta tutarız. Doğru teklif, doğru zamanda önünüze gelir."
      },
      {
        "title": "Deneme dersi & üyelik lead akışı kurgusu",
        "desc": "Instagram, WhatsApp ve web üzerinden gelen 'fiyat/deneme dersi' taleplerini kaçırmayan bir akış kurarız: hızlı ve profesyonel dönüş, deneme dersi randevusu, ardından üyeliğe yönlendirme ve takip. Gelen ilgiyi imzalı üyeliğe çeviririz."
      },
      {
        "title": "Google yorumları & itibar yönetimi (NFC yorum kartı)",
        "desc": "Resepsiyona koyduğunuz NFC yorum kartıyla memnun üye tek dokunuşla Google'da yorum bırakır. Yorum sayınız ve yıldız ortalamanız hızla yükselir; haritada hem üstte çıkar hem tıklanır olursunuz. Gelen yorumlara profesyonel yanıt yönetimi de bizde."
      }
    ],
    "faqs": [
      {
        "q": "Küçük bir stüdyoyum, büyük zincir salonlarla nasıl rekabet edeceğim?",
        "a": "Aslında en büyük avantajınız yerellik ve topluluk. Büyük zincirler geniş konuşur; siz mahallenizin insanına, o semtin diliyle ulaşırsınız. Reklamı sizin semtinize daraltır, içerikte gerçek eğitmenlerinizi ve üye hikayelerinizi öne çıkarır, kişisel ilgiyi vurgularız. Bu samimiyet, deneme dersinde zinciri geçmenizi sağlar."
      },
      {
        "q": "Yeni üye kadar mevcut üyelerin kalmasına da yardımcı oluyor musunuz?",
        "a": "Evet, bu iş sadece yeni üye bulmak değil, tutmaktır. Üye başarı hikayeleri, ders programı hatırlatmaları, motivasyon içerikleri ve topluluk hissi veren paylaşımlarla üyelerin salona bağını güçlendiririz. Ayrıca geri dönmeyen üyeler için hatırlatma ve geri kazanım kampanyaları kurgularız."
      },
      {
        "q": "Yaz öncesi dönemde reklamı ne zaman başlatmalıyım?",
        "a": "Yaz talebi kapıya dayanmadan, genelde birkaç hafta önceden başlamak gerekir; çünkü kişi karar verip deneme dersine gelene kadar zaman geçer. Biz sezon takvimini önceden planlar, kampanyayı talebin zirveye çıkacağı döneme denk gelecek şekilde erkenden kurarız. Böylece rakip henüz uyanmadan üyeleri siz toplarsınız."
      },
      {
        "q": "Reklam ve sosyal medyanın gerçekten üyeye dönüştüğünü nasıl ölçüyorsunuz?",
        "a": "Sadece beğeni ve takipçiye bakmayız; gelen mesaj, deneme dersi talebi, arama ve imzalanan üyelik sayısını takip ederiz. Hangi kampanyanın kaç deneme dersi ve üye getirdiğini şeffaf raporlarla gösterir, bütçeyi en çok üye getiren kanala yönlendiririz."
      },
      {
        "q": "Google yorumlarımı NFC kartla artırmak gerçekten işe yarıyor mu?",
        "a": "Evet. Memnun üyeler genelde yorum bırakmayı unutur; NFC kart bu süreci tek dokunuşa indirir. Resepsiyonda üyeye kartı uzattığınızda yorum sayınız ve yıldız ortalamanız belirgin şekilde artar. Bu da 'yakınımdaki spor salonu' aramalarında hem sıralamanızı hem tıklanma oranınızı yükseltir."
      }
    ]
  },
  {
    "slug": "mimarlik-ic-mimari",
    "name": "Mimarlık & İç Mimari",
    "seoTitle": "Mimarlık & İç Mimari Dijital Pazarlama Antalya",
    "seoDescription": "Antalya mimarlık ve iç mimarlık ofisleri için portföyünüzü premium sunan Instagram, proje foto/render çekimi ve nitelikli lead getiren dijital pazarlama. VOYO ile.",
    "primaryKeyword": "mimarlık ofisi dijital pazarlama Antalya",
    "secondaryKeywords": [
      "iç mimar sosyal medya yönetimi Antalya",
      "mimarlık ofisi Instagram yönetimi",
      "iç mimari proje görselleştirme çekimi",
      "dekorasyon firması dijital reklam Antalya",
      "mimarlık ofisi web tasarım portföy",
      "iç mimar Google reklam Antalya"
    ],
    "heroHeadline": "Portföyünüz Kadar İyi Görünün: Antalya'da Mimarlık & İç Mimari Ofisinize Premium Marka Algısı ve Nitelikli Proje Getiren Dijital Pazarlama",
    "intro": [
      "Mimarlık ve iç mimaride müşteri, henüz sizinle tanışmadan kararının yarısını vermiştir. Villa yaptıracak, ofisini tasarlatacak ya da evini baştan aşağı yenileyecek kişi; önce Instagram'ınıza bakar, feed'inizdeki projelerin kalitesini ölçer, web sitenizdeki portföyü inceler ve 'bu ofis benim hayal ettiğim işi çıkarır mı' sorusunun cevabını orada arar. Sunumunuz projelerinizin kalitesinin gerisinde kalıyorsa, en iyi işi çıkarsanız bile o değerli müşteri sizi hiç aramadan başka bir ofisin sayfasında kaybolur. İşte bu yüzden mimarlık ofisleri için dijital pazarlama estetik bir tercih değil; hangi büyüklükte proje kapınıza gelecek onu belirleyen bir konumlandırma aracıdır.",
      "Antalya bu iş için Türkiye'nin en canlı pazarlarından biri: villa yatırımları, butik otel ve kafe projeleri, yazlık dekorasyonu, yabancı alıcıların konut yenilemeleri ve hızla büyüyen sitelerin iç mekan işleri sürekli akıyor. Ama bu talep, işini profesyonelce sunan ofise gidiyor. 'Antalya iç mimar', 'Konyaaltı villa iç tasarım' ya da 'Lara ofis dekorasyon' aramalarında karşılarına çıkmak; projelerinizi doğru ışıkta çekilmiş fotoğraf ve etkileyici render'larla göstermek; Instagram'ı bir vitrin gibi çalıştırmak, yüksek bütçeli müşteriyi masaya oturtan şeydir.",
      "VOYO olarak biz bu sektörün diline hakimiz. Bir projenin nasıl fotoğraflanması, bir render'ın nasıl sunulması, moodboard ve malzeme detayının nasıl anlatılması gerektiğini biliyoruz. Amacımız takipçi sayınızı şişirmek değil; markanızı premium konumlandırıp size doğru ölçekte, bütçesi hazır ve niyeti net müşteri adayları getirmek. Ofisinizi sadece güzel göstermiyoruz; hak ettiği projelerle buluşturuyoruz."
    ],
    "challenges": [
      {
        "title": "İşiniz mükemmel, ama sunumu portföyün gerisinde kalıyor",
        "desc": "Bu sektör tamamen görsele dayanır. Şantiyeden telefonla çekilmiş, kötü ışıklı, dağınık kareler ya da düşük kaliteli render ekran görüntüleri; ne kadar iyi bir mimar olursanız olun premium algıyı anında bozar. Müşteri feed'inizde 'benim villamı da böyle mi teslim edecekler' güvenini göremezse, yüksek bütçeli işi size emanet etmez. Profesyonel proje fotoğrafı ve tutarlı bir görsel dil olmadan yüksek proje bedeli talep etmek zorlaşır."
      },
      {
        "title": "Instagram bir vitrin değil, dağınık bir arşiv gibi çalışıyor",
        "desc": "Mimarlık ofislerinin çoğunda Instagram, projelerin gelişigüzel atıldığı bir depoya döner: kimi düşey kimi yatay, farklı filtreler, tutarsız üslup. Oysa potansiyel müşteri feed'e ilk baktığında estetik bir bütünlük ve karakter arar. Görsel kimliği oturmamış, akışı bozuk bir hesap; ofisinizin tasarım anlayışına dair yanlış bir ilk izlenim verir ve o ilk izlenimi düzeltme şansınız çoğu zaman olmaz."
      },
      {
        "title": "Gelen talepler nitelikli değil, vaktinizi çalıyor",
        "desc": "Hedefleme yapılmadan çıkılan yol, alakasız kişileri kapıya getirir: sadece fiyat soran, bütçesi projeyle uyuşmayan, 'bir bakalım' diyen ziyaretçiler. Bu tür talepler hem zamanınızı hem enerjinizi tüketir. Konum, ilgi alanı ve niyet bazında daraltılmamış reklamlar bütçeyi de yakar; asıl ulaşmak istediğiniz villa, otel ya da butik proje sahibi kişiye hiç ulaşamazsınız."
      },
      {
        "title": "Web siteniz portföyünüzü satmıyor, sadece var",
        "desc": "Birçok ofisin sitesi ya güncel değildir ya da projeleri hak ettiği kalitede sunmaz: yavaş açılan galeriler, telefonda bozulan düzen, bulunması zor iletişim. Oysa müşteri Instagram'dan sonra en çok web sitenizde karar verir. Portföyü etkileyici sunmayan, mobilde çalışmayan ve iletişime yönlendirmeyen bir site; kazanılmış ilgiyi bile kaybettirir."
      },
      {
        "title": "Google'da ve haritada görünmüyor, itibarınız sessiz kalıyor",
        "desc": "Memnun müşterileriniz projelerini övüyor ama bu memnuniyet dijitalde hiçbir iz bırakmıyor. Google İşletme profiliniz zayıfsa, yorumlarınız azsa, 'Antalya iç mimar' araması yapan biri sizi hiç görmeden rakibinizi arar. İyi iş çıkarmak yetmez; o işin dijitalde görünür ve doğrulanabilir olması gerekir."
      }
    ],
    "approach": [
      {
        "title": "Projelerinizi premium sunan profesyonel foto & video çekimi",
        "desc": "Tamamlanan villalarınızda, ofis ve mekan projelerinizde yerinde profesyonel çekim yaparız: doğru ışık, doğru açı, malzeme dokusunu ve mekanın atmosferini hissettiren kareler. Detay çekimleri, geniş açılar ve kısa mekan videolarıyla projenizi olduğundan da etkileyici sunarız. İster tamamlanmış iş fotoğrafı, ister sunuma hazır görselleştirme desteği; portföyünüz premium görünür, premium müşteri getirir."
      },
      {
        "title": "Vitrin gibi çalışan Instagram & sosyal medya yönetimi",
        "desc": "Hesabınızı dağınık bir arşivden, ofisinizin tasarım karakterini yansıtan bir vitrine dönüştürürüz. Tutarlı görsel kimlik, kürasyonlu bir feed düzeni, öncesi/sonrası dönüşümleri, proje süreç videoları, malzeme ve moodboard içerikleriyle takipçiyi hayran bırakır; hayranı da proje talebine çeviririz. Karmaşayı değil, karakteri gösteririz."
      },
      {
        "title": "Nitelikli müşteri getiren Google & Meta reklam yönetimi",
        "desc": "Konyaaltı, Lara, Belek, Kalkan ya da hedeflediğiniz bölgelerde 'iç mimar', 'villa iç tasarım', 'ofis dekorasyon' gibi gerçek niyet taşıyan aramalarda öne çıkarız. Meta tarafında ilgi alanı, bölge ve profil bazında daraltılmış kampanyalarla bütçenizi sadece doğru kişiye harcarız. Amaç ucuz tıklama değil; bütçesi projenizle uyuşan nitelikli lead."
      },
      {
        "title": "Portföyünüzü satan, mobil uyumlu web sitesi",
        "desc": "Projelerinizi hak ettiği gibi sunan, hızlı açılan, mobilde kusursuz çalışan ve ziyaretçiyi iletişime yönlendiren bir portföy sitesi tasarlarız. Kategorize edilmiş proje galerileri, güçlü açılış görselleri ve net iletişim akışıyla siteniz sessiz bir broşür değil, çalışan bir satış aracı olur. SEO altyapısıyla da Google'da bulunur hale gelirsiniz."
      },
      {
        "title": "Google itibarı & yorum yönetimi (NFC yorum kartı)",
        "desc": "Proje tesliminde memnun müşterinize uzattığınız NFC yorum kartıyla, mutlu müşteri tek dokunuşla Google'da yorum bırakır. Yorum sayınız ve puanınız yükselir; 'Antalya mimarlık ofisi' aramalarında hem üstte çıkar hem de tercih edilir hale gelirsiniz. Gelen yorumlara profesyonel yanıt yönetimi de bize ait; itibarınız artık dijitalde görünür."
      },
      {
        "title": "Marka kimliği & premium konumlandırma",
        "desc": "Logo, renk paleti, tipografi ve sunum şablonlarından, sosyal medya görsel diline kadar tutarlı bir marka kimliği kurarız. Ofisinizi kalabalık pazarda 'ucuz alternatif' değil, 'değerine değer' bir marka olarak konumlandırırız. Tutarlı ve profesyonel bir kimlik, sizi yüksek bütçeli işlerde tercih edilen isim yapar."
      }
    ],
    "faqs": [
      {
        "q": "Henüz tamamlanmamış ya da sadece render aşamasındaki projeleri de sunabilir miyiz?",
        "a": "Kesinlikle. Tamamlanmış projelerinizi yerinde profesyonel olarak fotoğraflarken; render, 3D görselleştirme ve konsept çalışmalarınızı da sosyal medya ve web için sunuma hazır, tutarlı bir görsel dille işleriz. Devam eden projelerin süreç videoları ve öncesi/sonrası kurguları da güçlü içeriklerdir; portföyünüz sadece bitmiş işlerle sınırlı kalmaz."
      },
      {
        "q": "Bize sadece fiyat soran değil, gerçekten proje niyeti olan müşteri nasıl getiriyorsunuz?",
        "a": "Sırrı doğru konumlandırma ve doğru hedeflemede. Markanızı premium kurgulayıp, reklamları konum, ilgi alanı ve niyet bazında daraltırız; içeriği de bütçesi düşük kitleyi değil, kalite arayan müşteriyi çekecek şekilde tasarlarız. Böylece gelen talepler azalırken niteliği ve dönüşüm oranı yükselir; vaktinizi sadece gerçek projelerle geçirirsiniz."
      },
      {
        "q": "Antalya dışındaki ya da yurt dışından gelen müşterilere de ulaşabilir miyiz?",
        "a": "Evet. Antalya'da özellikle yabancı konut alıcıları ve şehir dışından yatırımcılar önemli bir pazar. Talebiniz olursa çok dilli içerik ve İngilizce ağırlıklı kampanyalarla bu kitleye de ulaşır; villa, yazlık ve yatırım amaçlı projeler için sınırlarınızı Antalya'nın ötesine taşırız."
      },
      {
        "q": "Instagram ve reklamın gerçekten yeni projeye dönüştüğünü nasıl ölçüyorsunuz?",
        "a": "Beğeni ve takipçi sayısını değil; gelen mesaj, form, arama ve görüşmeye dönüşen nitelikli talep sayısını takip ederiz. Hangi kanalın ve kampanyanın kaç proje adayı getirdiğini şeffaf raporlarla gösterir, bütçeyi en çok nitelikli lead getiren yere yönlendiririz. Sizin için önemli olan tek metrik masaya oturan gerçek müşteridir."
      }
    ]
  },
  {
    "slug": "dugun-organizasyon",
    "name": "Düğün, Davet & Organizasyon",
    "seoTitle": "Düğün & Organizasyon Dijital Pazarlama Antalya | VOYO",
    "seoDescription": "Antalya düğün ve organizasyon firmaları için sosyal medya, Instagram, foto/video ve reklam yönetimi. Sezonu dolu geçirin, premium algı yaratın. Hemen görüşün.",
    "primaryKeyword": "düğün organizasyon sosyal medya Antalya",
    "secondaryKeywords": [
      "organizasyon firması reklam Antalya",
      "düğün mekanı Instagram yönetimi",
      "davet organizasyon dijital pazarlama",
      "Antalya düğün fotoğrafçısı reklam",
      "kına nişan organizasyon tanıtım"
    ],
    "heroHeadline": "Antalya'nın en çok konuşulan düğünleri sizin imzanızı taşısın",
    "intro": [
      "Düğün ve organizasyon sektöründe rakip mekân sayısı değil, çift ile kurduğunuz ilk temas belirleyicidir. Gelin adayı sabahın köründe Instagram'da mekân keşfeder, kaydeder, story'sine ekler, arkadaşına gönderir. O keşif akışında görünmüyorsanız, ne kadar güzel bir bahçeniz, ne kadar usta bir ekibiniz olduğu önemli değil. VOYO olarak Antalya'daki düğün mekânları, organizasyon firmaları, davet ve kına-nişan ekipleri için tam da bu görünürlüğü kuruyoruz.",
      "Bu sektör duyguyla satar. İnsanlar bir 'hizmet' değil, hayatlarının en özel gününü satın alır. Bu yüzden içerik kalitesi her şeydir: düşük ışıkta çekilmiş bulanık bir masa fotoğrafı, o premium algıyı bir saniyede yok eder. Biz profesyonel foto/video prodüksiyonu, sezonsal içerik takvimi, reklam yönetimi ve Google itibar yönetimini tek çatı altında toplayarak, sizi 'bakılan' değil 'seçilen' marka yapıyoruz."
    ],
    "challenges": [
      {
        "title": "Sezon dolarken takvim boş kalıyor",
        "desc": "Düğün sezonu yoğun ama talep dalgalı. Kış aylarında ajanda boşalıyor, mayıs-eylül arası ise doğru çifte ulaşamadığınız için son dakika rezervasyonlarıyla oynuyorsunuz. Sezon öncesi doğru zamanda, doğru kitleye (nişanlanmış çiftler, düğün planlayan aileler) reklam çıkmadan takvimi dolu tutmak zor."
      },
      {
        "title": "Görseller işi hak ettiği gibi anlatmıyor",
        "desc": "Mekânınız gerçekte muhteşem ama telefonla çekilmiş, ışığı kaçmış, çift değil masa dizilimi gösteren fotoğraflar premium algıyı öldürüyor. Gelin adayı ekranda gördüğü kaliteyi kafasında canlandırır; zayıf görsel, düşük fiyat beklentisi ve pazarlık demektir."
      },
      {
        "title": "Referans ve yorum var ama görünmüyor",
        "desc": "Yüzlerce mutlu çift ağırladınız ama Google'da bir avuç yorumunuz var. Yeni çift araştırırken sizi değil, daha az iş yapmış ama itibar yönetimini ciddiye almış rakibi güvenilir buluyor. Mutlu müşterinin memnuniyetini yorum ve içeriğe çevirmek sistematik bir iş, tesadüf değil."
      },
      {
        "title": "Gelen mesaj çok, dönüşen az",
        "desc": "DM ve yorumlar dolup taşıyor: 'fiyat?', 'müsait mi?', 'kaç kişilik?'. Ama bu ilgi somut rezervasyona dönmüyor. Hızlı, düzenli ve satışa yönlendiren bir lead akışı olmadan, en sıcak talepler bile soğuyup rakibe gidiyor."
      }
    ],
    "approach": [
      {
        "title": "Premium algı yaratan foto/video prodüksiyonu",
        "desc": "Mekânınızı, süslemenizi ve gerçek düğün anlarını profesyonel ekipmanla çekiyoruz. Reels, mekân turu, gün batımı setup'ları, öncesi/sonrası dekorasyon videoları... Gelin adayının 'burada evlenmek istiyorum' dediği, kaydettiği ve paylaştığı içerikler üretiyoruz. Kalite, fiyatınızı savunur."
      },
      {
        "title": "Sezona göre kurgulanmış içerik ve Instagram yönetimi",
        "desc": "Düğün sektörü takvimle yaşar. Nişan sezonu, sezon açılışı, son dakika kampanyaları, kış davetleri... İçerik planını bu ritme göre kuruyoruz. Instagram ve keşfet odaklı, tutarlı bir marka hesabıyla organik erişiminizi ve takipçi güveninizi büyütüyoruz."
      },
      {
        "title": "Doğru çifte ulaşan hedefli reklam",
        "desc": "Meta ve Google reklamlarını 'nişanlı', belli yaş aralığında ve Antalya'da düğün planlayan kitleye kurguluyoruz. Bütçenizi rastgele değil, dönüşen kitleye harcarız; her lead'in maliyetini ölçer, sezon boyunca optimize ederiz."
      },
      {
        "title": "Google itibarı ve NFC yorum kartıyla güven inşası",
        "desc": "Mutlu çiftlerin memnuniyetini Google yıldızlarına çeviriyoruz. NFC yorum kartlarımızla düğün sonrası tek dokunuşla yorum toplar, itibarınızı sistematik büyütürüz. Araştıran her çift önce yıldızlara bakar; orada güçlü görünmenizi sağlıyoruz."
      },
      {
        "title": "Lead ve randevu akışını düzene sokma",
        "desc": "DM, form ve yorumlardan gelen talepleri hızlı yanıtlanan, takip edilen bir akışa bağlıyoruz. Fiyat soran her mesajı mekân gezisine, gezmeye geleni rezervasyona taşıyan bir dönüşüm mantığı kuruyoruz."
      },
      {
        "title": "Antalya yerel gücü ve destinasyon düğün potansiyeli",
        "desc": "Antalya sadece yerel çiftlerin değil, destinasyon düğünü ve yurt dışından gelen çiftlerin de hedefinde. Yerel SEO ile Antalya aramalarında öne çıkarken, gerektiğinde çok dilli içerikle turizm odaklı düğün talebini de yakalarız."
      }
    ],
    "faqs": [
      {
        "q": "Küçük bir organizasyon firmasıyız, sosyal medyaya bütçe ayırmaya değer mi?",
        "a": "Bu sektörde işlerin çoğu görsel keşif ve tavsiyeyle geliyor; yani sosyal medya sizin için vitrin değil, doğrudan satış kanalı. Küçük ekipler için asıl risk bütçe değil, sezonu boş geçirmek. Doğru kurgulanmış içerik ve ölçülü bir reklam bütçesiyle, tek bir düğün rezervasyonu bile aylık yatırımınızı fazlasıyla karşılar. Size özel, bütçenize oturan bir plan çıkarıyoruz."
      },
      {
        "q": "Zaten fotoğrafçımız/videografımız var, sizin çekiminize ihtiyacım var mı?",
        "a": "Düğün günü çekimi ile pazarlama içeriği farklı işlerdir. Çiftin albümü müşteriye teslim edilir; sizin hesabınızın ise keşfette çıkan, mekânı ve markanızı satan içeriğe ihtiyacı var. İkisi çakışmaz, tamamlar. Mevcut çekimlerinizden de sosyal medyaya uygun içerik kurgulayabiliriz."
      },
      {
        "q": "Sezon dışında da çalışmalı mıyız yoksa sadece yaz mı?",
        "a": "Aksine, kazandıran markalar sezon dışında hazırlanır. Çiftler düğünlerini aylar öncesinden planlar; siz sezon açıldığında değil, onlar araştırmaya başladığında görünür olmalısınız. Kış ayları itibar biriktirmek, içerik arşivi oluşturmak ve nişan sezonu talebini erken yakalamak için en değerli dönem."
      },
      {
        "q": "Google yorumları gerçekten rezervasyona etki ediyor mu?",
        "a": "Kesinlikle. Hayatının en özel gününü emanet edecek bir çift, karar vermeden önce mutlaka yorumlara bakar. Az sayıda ya da eski yorum, ne kadar iyi iş yaparsanız yapın güven zedeler. NFC yorum kartlarımızla mutlu çiftlerden düğün sonrası pratikçe yorum toplayarak, araştıran herkesin karşısına güçlü bir itibarla çıkmanızı sağlıyoruz."
      },
      {
        "q": "Reklam bütçemin karşılığını nasıl göreceğim?",
        "a": "Her kampanyayı ölçülebilir kurarız: kaç kişiye ulaştı, kaç mesaj/lead geldi, lead başına maliyet ne oldu. Rakamları düzenli olarak sizinle paylaşır, sezon boyunca dönüşen kitleye göre optimize ederiz. Bütçenizin nereye gittiğini ve ne getirdiğini net görürsünüz; havada kalan bir harcama olmaz."
      }
    ]
  },
  {
    "slug": "ozel-egitim-kurslar",
    "name": "Özel Eğitim & Kurslar",
    "seoTitle": "Özel Eğitim & Kurs Dijital Pazarlama Antalya | VOYO",
    "seoDescription": "Antalya'da özel okul, dil, sınav ve sürücü kurslarına kayıt dönemi kampanyası, veli güveni, sosyal medya ve lead odaklı dijital pazarlama. Ücretsiz görüşün.",
    "primaryKeyword": "özel eğitim kurumları dijital pazarlama Antalya",
    "secondaryKeywords": [
      "kurs sosyal medya yönetimi Antalya",
      "özel okul reklam ajansı Antalya",
      "dil kursu Google reklam Antalya",
      "sürücü kursu dijital pazarlama",
      "kurs kayıt kampanyası reklam",
      "eğitim kurumu web tasarım Antalya",
      "veli lead toplama",
      "Antalya kurs tanıtım videosu"
    ],
    "heroHeadline": "Antalya'da Kayıt Dönemini Dolduran Dijital Pazarlama: Özel Eğitim Kurumları ve Kurslar İçin",
    "intro": [
      "Özel okul, dil kursu, sınav hazırlık merkezi, sürücü ya da hobi kursu... Sektörünüz ne olursa olsun tek bir gerçek değişmiyor: yıl boyu emek verdiğiniz işin kaderi, birkaç haftalık kayıt dönemine sığıyor. Veli ya da öğrenci, kurumunuza güvenmeden imza atmıyor; kararını Instagram'da gördüğü paylaşımlara, Google'da okuduğu yorumlara ve arkadaş tavsiyesine göre veriyor. Dijital vitrininiz zayıfsa, en iyi eğitim kadrosuna sahip olsanız bile rakibiniz o veliyi çoktan aramış oluyor.",
      "VOYO olarak Antalya'daki eğitim kurumlarının bu döngüyü nasıl kırdığını biliyoruz. İşimiz sadece güzel görseller üretmek değil; kayıt döneminde doğru veliye doğru mesajı ulaştırmak, formu dolduran ilgili kişiyi kuruma çağırmak ve kapanan her kaydı ölçülebilir hale getirmek. Antalya yerel pazarını, ilçe ilçe hedeflemeyi ve eğitim sektörünün hassas güven dengesini bilen bir ekiple çalışıyorsunuz."
    ],
    "challenges": [
      {
        "title": "Kayıt dönemi geçiyor, kontenjan boş kalıyor",
        "desc": "Eğitim işinin en büyük stresi zamanlama. Kampanyayı geç başlatırsanız veliler kararını çoktan vermiş oluyor; erken başlatıp yanlış kitleye harcarsanız bütçe kayıt olmayacak kişilere gidiyor. Reklamları kayıt takvimine göre kurgulayıp, ilgi gösteren velileri son ana kadar takip eden bir sistem olmadan her dönem aynı 'keşke daha erken başlasaydık' cümlesini kuruyorsunuz."
      },
      {
        "title": "Veli güvenini dijitalde kuramamak",
        "desc": "Bir kursa ya da özel okula para ödemek, veli için duygusal bir karar. 'Çocuğumu buraya emanet eder miyim?' sorusuna cevap veren bir dijital varlık yoksa, sayfanızda ne kadar reklam yaparsanız yapın dönüşüm düşük kalır. Öğrenci başarıları, mezun yorumları, kadro ve fiziki ortam düzgün anlatılmadığında kurumunuz 'bilinmeyen bir yer' olarak kalıyor."
      },
      {
        "title": "Google yorumları ve itibar yönetimi",
        "desc": "Veliler bir kurumu araştırırken ilk baktıkları yer Google. Az sayıda ya da eski yorum, tek bir olumsuz yorumun üstte kalması, kayıt kararını doğrudan baltalıyor. Memnun öğrenci ve velilerden düzenli yorum toplamak için bir sisteminiz yoksa, itibarınız şansa kalıyor; oysa rakibiniz her memnun veliyi yoruma dönüştürüyor."
      },
      {
        "title": "Gelen ilgiyi kayda çeviren bir hat olmaması",
        "desc": "Instagram'dan mesaj geliyor, formdan başvuru düşüyor, telefon çalıyor... ama bunların kaçı gerçek kayda dönüşüyor belli değil. İlgi gösteren veli hızlı geri dönüş alamayınca başka kuruma gidiyor. Hangi reklamın gerçekten kayıt getirdiğini bilmeden bütçe harcamak, karanlıkta ilerlemek demek."
      },
      {
        "title": "Sadece belirli semtlerdeki velilere ulaşmak",
        "desc": "Bir sürücü kursu ya da dil merkezi için Antalya'nın tamamına reklam vermek para israfı. Öğrenciniz genelde belli ilçelerden, belli mesafeden geliyor. Muratpaşa, Konyaaltı, Lara, Kepez gibi bölgeleri ayırt etmeden yapılan reklam, ulaşamayacağınız kişilere bütçe yakıyor."
      },
      {
        "title": "Dağınık marka görüntüsü ve zayıf içerik",
        "desc": "Her dönem aceleyle hazırlanan afişler, birbirini tutmayan renkler, telefonla çekilmiş bulanık sınıf fotoğrafları... Bunlar velinin gözünde kurumsallık değil amatörlük sinyali. Tutarlı bir marka dili ve kaliteli görsel olmadan, fiyatınız ne olursa olsun 'ucuz görünen' bir kurum algısından kurtulamıyorsunuz."
      }
    ],
    "approach": [
      {
        "title": "Kayıt takvimine göre kampanya planı",
        "desc": "Kayıt dönemlerinizi, erken kayıt avantajlarını ve dönem geçişlerini takvime döküp reklamları buna göre kurguluyoruz. Farkındalık, ilgi ve son çağrı aşamalarını ayrı ayrı yönetiyoruz; böylece veli kararını verirken kurumunuz her aşamada karşısında oluyor ve kontenjanlarınız dönem başlamadan doluyor."
      },
      {
        "title": "Veli güvenini kuran görsel ve içerik üretimi",
        "desc": "Profesyonel foto ve video ekibimizle kurumunuzun gerçek atmosferini, kadronuzu, öğrenci başarılarını ve mezun hikayelerini anlatıyoruz. 'Öncesi/sonrası' başarı hikayeleri, öğrenci ve veli videoları, tanıtım filmleriyle kurumunuz ekranın diğer tarafındaki veliye güven veren, tanıdık bir yere dönüşüyor."
      },
      {
        "title": "Google yorumları için NFC çözümü",
        "desc": "Kendi ürettiğimiz NFC Google yorum kartı ve standlarıyla, memnun öğrenci ve velinizin tek dokunuşla yorum bırakmasını sağlıyoruz. Kayıt anında, kurs bitiminde ya da başarı sonrası doğru zamanlanmış bu sistemle Google puanınız ve yorum sayınız düzenli büyür; itibarınız şansa değil sisteme bağlı olur."
      },
      {
        "title": "Lead toplayan sayfa ve hızlı geri dönüş hattı",
        "desc": "Ön kayıt formu, WhatsApp hattı ve tıklanabilir arama butonlarıyla ilgilenen veliyi anında yakalayan bir yapı kuruyoruz. Google ve Meta reklamlarını doğrudan bu formlara bağlıyor, hangi reklamın kaç başvuru ve kaç kayıt getirdiğini ölçüyoruz; böylece bütçeniz tahmine değil verilere göre yönetiliyor."
      },
      {
        "title": "Antalya ilçe bazlı yerel hedefleme",
        "desc": "Reklamlarınızı kurumunuzun gerçekten öğrenci çektiği bölgelere odaklıyoruz. Muratpaşa, Konyaaltı, Lara, Kepez, Aksu gibi ilçeleri ayrı ayrı hedefleyip, 'yakınımdaki kurs' aramalarında üst sıralarda çıkmanız için Google İşletme Profilinizi ve yerel SEO'nuzu güçlendiriyoruz."
      },
      {
        "title": "Sosyal medya yönetimi ve kurumsal marka dili",
        "desc": "Instagram ve diğer kanallarınızı düzenli, tutarlı ve güven veren bir içerik akışıyla yönetiyoruz. Kurumunuza özel bir görsel kimlik, şablonlar ve içerik takvimiyle her paylaşım aynı profesyonel dili konuşur. Web tasarımından yazılıma kadar tüm dijital vitrininiz tek elden, tutarlı biçimde yönetilir."
      }
    ],
    "faqs": [
      {
        "q": "Kayıt dönemine ne kadar önce başlamalıyız?",
        "a": "İdeal olarak kayıt döneminin başlamasından 4-6 hafta önce farkındalık çalışmalarına başlamanızı öneririz. Böylece veli karar verme sürecine girdiğinde kurumunuzu zaten tanıyor olur. Sizinle kayıt takviminizi konuşup kampanyayı buna göre planlıyoruz; dönem ortasında da devreye girebilecek hızlandırılmış planlarımız mevcut."
      },
      {
        "q": "Özel okul, dil kursu ve sürücü kursu için aynı yöntem mi işliyor?",
        "a": "Temel mantık aynı olsa da her alt sektörün dinamiği farklı. Özel okulda veli güveni ve uzun karar süreci öne çıkarken, sürücü kursunda hız ve fiyat/konum, dil kursunda ise sonuç ve başarı vurgusu belirleyici oluyor. Kurumunuzun tipine ve hedef kitlesine göre mesajı, kanalı ve hedeflemeyi özelleştiriyoruz."
      },
      {
        "q": "Reklam bütçemizin gerçekten kayıt getirip getirmediğini nasıl anlarız?",
        "a": "Reklamları ön kayıt formu, WhatsApp ve arama butonlarına bağlayıp her kanaldan gelen başvuruyu ölçümlüyoruz. Hangi reklamın kaç lead ve kaç kayıt ürettiğini raporlarla görüyorsunuz. Böylece işe yaramayan yerlere harcama yapılmaz, bütçe kayıt getiren kanallara yönlendirilir."
      },
      {
        "q": "Google yorumlarımız az ve düşük. NFC kartı bu durumu nasıl düzeltir?",
        "a": "NFC Google yorum kartımız, öğrenci ya da velinin telefonunu dokundurmasıyla doğrudan yorum sayfanızı açar; hiçbir uygulama ya da link aramaya gerek kalmaz. Kayıt, kurs bitimi veya başarı gibi memnuniyetin en yüksek olduğu anlarda kullanıldığında düzenli ve gerçek yorum akışı oluşturur, Google puanınızı zamanla yükseltir."
      },
      {
        "q": "Fiyatlarınız nasıl belirleniyor?",
        "a": "Her kurumun ihtiyacı, kayıt dönemi yoğunluğu ve hedefleri farklı olduğu için tek tip paket sunmuyoruz. Sizinle kısa bir görüşme yapıp kurumunuzun durumunu ve hedeflerini anladıktan sonra size özel, net bir teklif hazırlıyoruz. İlk görüşme ve ihtiyaç analizi ücretsizdir."
      },
      {
        "q": "Antalya dışına da hizmet veriyor musunuz?",
        "a": "Merkezimiz Antalya Muratpaşa'da ve yerel gücümüz burada; ilçe bazlı hedefleme ve saha çalışmalarımız Antalya'ya özel. Foto/video çekimi gibi yerinde hizmetleri Antalya genelinde veriyoruz. Sosyal medya, reklam ve web gibi uzaktan yürütülebilen hizmetler için Antalya dışındaki kurumlarla da çalışabiliyoruz; detayları görüşmede netleştiriyoruz."
      }
    ]
  },
  {
    "slug": "veteriner-klinikleri",
    "name": "Veteriner Klinikleri",
    "seoTitle": "Veteriner Kliniği Dijital Pazarlama Antalya | VOYO",
    "seoDescription": "Antalya veteriner klinikleri için Google yorumları, randevu odaklı reklam, duygusal sosyal medya ve acil hizmet vurgusu. Hayvan sahibinin güvenini kazanan dijital pazarlama.",
    "primaryKeyword": "veteriner kliniği dijital pazarlama Antalya",
    "secondaryKeywords": [
      "veteriner kliniği sosyal medya yönetimi Antalya",
      "veteriner Google reklam Antalya",
      "yakınımdaki veteriner kliniği",
      "veteriner kliniği Google yorum kartı",
      "veteriner kliniği web sitesi Antalya",
      "petshop veteriner sosyal medya",
      "acil veteriner Antalya reklam",
      "veteriner randevu sistemi"
    ],
    "heroHeadline": "Antalya'da Veteriner Kliniğinizi Mahallenin İlk Tercihi Yapan Dijital Pazarlama: Daha Çok Güven, Daha Çok Randevu",
    "intro": [
      "Bir hayvan sahibi için kliniğiniz sıradan bir işletme değil; ailesinden birinin emanet edildiği yer. Kedisi kusmaya başladığında, köpeği aksadığında ya da yıllık aşı vakti geldiğinde ilk yaptığı şey telefonunu açıp 'yakınımdaki veteriner' veya 'Antalya acil veteriner' diye aramak. Çıkan kliniklerin yıldız puanına, yorum sayısına ve Instagram'daki sıcaklığına bakıp saniyeler içinde 'buna güvenebilir miyim' kararını veriyor. Veteriner hekimliği tamamen güven ve duygu üzerine kurulu bir sektör ve bu güven artık ilk olarak dijitalde kazanılıyor.",
      "Sorun şu ki çoğu iyi klinik, hekimliğini şefkatle ve ustalıkla yapsa da dijitalde görünmez kalıyor. 40 yorumlu bir klinik, iki sokak öteki 350 yorumlu rakibine hasta kaptırıyor. Instagram'da düzensiz, ilhamsız paylaşımlar hayvan sahibinin içini ısıtmıyor; 'acil bakıyor musunuz', 'gece açık mısınız' gibi hayati sorulara hızlı cevap verilmediği için panik anındaki sahip başka kliniğe gidiyor. Oysa iyileşen bir patinin fotoğrafı, mutlu bir sahibin teşekkürü ve tek bir doğru Google yorumu, en pahalı reklamdan daha çok yeni hasta getiriyor.",
      "VOYO Dijital olarak Antalya merkezli full-service bir ajans olarak veteriner kliniklerini tam bu noktada büyütüyoruz: itibarı görünür kılan Google yorum sistemi, hayvan sahibinin kalbine dokunan duygusal içerik, acil ve randevu talebini kaçırmayan bir iletişim akışı ve mahallenizde ilk sırada çıkmanızı sağlayan yerel reklam. Amacımız beğeni toplamak değil; kliniğinizin bekleme salonunu dolduran, geri gelen ve çevresine sizi öneren sadık hayvan sahipleri kazandırmak."
    ],
    "challenges": [
      {
        "title": "Google yorumları az, panik anındaki sahibe güven veremiyor",
        "desc": "Hayvan sahibi kliniği büyük ölçüde yıldız puanı ve yorumlara göre seçer; özellikle acil bir durumda gözü kapalı ilk sıradakine gider. Memnun sahipleriniz çok ama neredeyse hiçbiri kendiliğinden yorum bırakmıyor. Klinik haritada zayıf görünüyor ve daha az yorumlu olduğunuz için, hekimliğiniz kat kat iyi olsa bile daha çok yorumlu rakibinize hasta kaptırıyorsunuz."
      },
      {
        "title": "Acil ve randevu talepleri kaçıyor",
        "desc": "Veteriner talebinin büyük kısmı aciliyet içerir; sahip 'şu an bakıyor musunuz', 'gece açık mısınız', 'bugün randevu var mı' diye yazar ve dakikalar içinde cevap alamazsa panikle başka kliniğe geçer. Instagram DM'i, WhatsApp ve telefon dağınık yönetildiğinde en sıcak hasta adayı elinizden akıp gider."
      },
      {
        "title": "Sosyal medya sıkıcı ve mesafeli, duyguya dokunmuyor",
        "desc": "Bu sektörün gücü duygu ve hikayedir: iyileşen bir yavru, sahibiyle kavuşan bir kedi, klinikteki şefkatli an. Sadece aşı hatırlatması ve kuru bilgi paylaşan bir hesap kimseyi bağlamaz. İçerik sevimli, samimi ve insani değilse, hayvan sahibi sizi 'ailesini emanet edeceği yer' olarak hissetmez ve takipçi gerçek hastaya dönüşmez."
      },
      {
        "title": "Reklam bütçesi yanlış kişilere, yanlış semte akıyor",
        "desc": "Hedefleme yapılmadan verilen reklamlar şehrin yarısına, hiç hayvanı olmayan ya da çok uzaktaki kişilere gösterilir. Veteriner tercihi büyük ölçüde yakınlık işidir; mahalle ve ilçe bazında daraltılmamış kampanyalar parayı yakar. 'Yakınımdaki veteriner' aramalarında öne çıkmadığınızda, kapınızın önünden geçen sahip bile sizi bulamaz."
      }
    ],
    "approach": [
      {
        "title": "NFC Google yorum kartı ile itibarınızı görünür kılma",
        "desc": "Muayene sonrası memnun hayvan sahibinin telefonuna kartı okutması yeterli; saniyeler içinde Google yorum sayfanıza yönlenir. Resepsiyon ve taburcu akışına entegre ettiğimiz bu sistemle yorum sayınız ve yıldız ortalamanız düzenli yükselir; klinik 'yakınımdaki veteriner' aramalarında ve haritada öne çıkar, sahibin güveni somut bir rakama dönüşür. Gelen yorumlara profesyonel yanıt yönetimi de bizde."
      },
      {
        "title": "Duyguya dokunan sosyal medya ve içerik yönetimi",
        "desc": "Sadece aşı hatırlatması paylaşmıyoruz; iyileşme hikayeleri, sevimli hasta kareleri, klinikteki şefkatli anlar ve eğitici sahiplik ipuçlarıyla hayvan sahibinin kalbine dokunuyoruz. Tutarlı görsel kimlik, sıcak Reels ve hikaye akışı, soru-cevap içerikleriyle takipçiyi 'ailesini emanet edeceği yer' hissine, oradan da gerçek randevuya taşıyoruz."
      },
      {
        "title": "Acil ve randevu talebini kaçırmayan iletişim akışı",
        "desc": "WhatsApp, Instagram DM ve telefonu tek akışta toplar; çalışma saatleri, acil/gece durumu ve randevu adımını netleştiren hızlı yönlendirmeler kurarız. Panik anındaki sahip doğru bilgiyi hemen alır, en sıcak hasta adayı kaçmaz. Boş randevu saatlerini ve rutin aşı/kontrol hatırlatmalarını da bu akışla dolduruyoruz."
      },
      {
        "title": "Mahalle bazında Google & Meta reklam yönetimi",
        "desc": "Muratpaşa, Konyaaltı, Lara ya da hedef semtlerinizde 'yakınımdaki veteriner' ve 'acil veteriner' aramalarında öne çıkmak için Google Arama ve Harita reklamları; Instagram/Facebook'ta hayvan sahibi profiline ve lokasyona göre daraltılmış kampanyalar kurarız. Bütçeniz şehrin yarısına değil, kapınıza yakın gerçek müşteriye gider."
      },
      {
        "title": "Hasta adayını kaçırmayan, güven veren web sitesi",
        "desc": "Mobil öncelikli, hızlı açılan, çalışma saatleri, acil hizmet, konum ve WhatsApp/randevu butonuyla sahibi anında yönlendiren bir site kuruyoruz. Hizmet sayfaları (aşı, cerrahi, dahiliye, acil) güven verici biçimde yazılır; Google'da yerel olarak bulunmanızı sağlayan teknik SEO altyapısıyla birlikte gelir."
      },
      {
        "title": "Profesyonel klinik foto & video çekimi",
        "desc": "Klinik ortamında profesyonel çekim yaparız: hijyenik ve güven veren klinik atmosferi, hekim ve ekip tanıtımı, sahip onayıyla iyileşme ve mutlu kavuşma anları. Sıcak, samimi ve kaliteli görsel dil, kliniğinizi ekranda 'gidilebilir' ve güvenilir gösterir; sahiplerin sizi hem kalpten hem akıldan tercih etmesini sağlar."
      }
    ],
    "faqs": [
      {
        "q": "Google yorumlarımı gerçekten artırabilir misiniz?",
        "a": "Evet. Memnun hayvan sahipleri neredeyse hiç kendiliğinden yorum bırakmaz; oysa iyi bir deneyim yaşamışlardır. NFC Google yorum kartımızla muayene sonrası sahip, kartı telefonuna okutarak saniyeler içinde yorum sayfanıza ulaşır. Bu akışı resepsiyon ve taburcu rutininize entegre ederek yorum sayınızı ve yıldız ortalamanızı düzenli ve doğal yoldan artırırız; bu da 'yakınımdaki veteriner' aramalarında ve haritada öne çıkmanızı sağlar."
      },
      {
        "q": "Acil talepleri ve mesai dışı gelen mesajları kaçırmamak için ne yapıyorsunuz?",
        "a": "Veteriner talebinin çoğu aciliyet içerir ve geç kalan cevap, hastanın başka kliniğe gitmesi demektir. WhatsApp, Instagram DM ve telefonu tek akışta toplar; çalışma saatlerini, acil/gece durumunu ve randevu adımını netleştiren otomatik yönlendirmeler kurarız. Böylece panik anındaki sahip doğru bilgiyi hemen alır, en sıcak hasta adayını kaçırmazsınız."
      },
      {
        "q": "Sosyal medyada hastaların ve hayvanların fotoğraflarını nasıl kullanıyorsunuz?",
        "a": "Her zaman hayvan sahibinin onayıyla. İyileşme hikayelerini, sevimli hasta karelerini ve klinik anlarını yalnızca sahip izin verdiğinde, saygılı ve etik bir dille paylaşırız. Hassas vakalarda kimlik/detay gizleyerek ilerler; duyguya dokunan ama kimseyi rahatsız etmeyen, kliniğinize güven kazandıran bir içerik dili kurarız."
      },
      {
        "q": "Reklamların gerçekten randevuya ve yeni hastaya dönüştüğünü nasıl ölçüyorsunuz?",
        "a": "Sadece beğeni ve takipçi değil; gelen arama, WhatsApp mesajı, randevu talebi ve yeni hasta sayısını takip ederiz. Hangi kampanyanın hangi mahalleden kaç randevu getirdiğini şeffaf raporlarla gösterir, bütçeyi en çok yeni hasta getiren kanala ve semte yönlendiririz. Amaç tıklama değil, kliniğinizin bekleme salonunu dolduran gerçek hasta akışıdır."
      }
    ]
  },
  {
    "slug": "otel-konaklama",
    "name": "Otel & Konaklama",
    "seoTitle": "Otel & Konaklama Dijital Pazarlama Antalya | VOYO",
    "seoDescription": "Antalya'da otel, butik otel, pansiyon ve villa için doğrudan rezervasyon odaklı dijital pazarlama: profesyonel görsel, çok dilli reklam, Google yorumları. Booking komisyonundan kurtulun.",
    "primaryKeyword": "otel dijital pazarlama Antalya",
    "secondaryKeywords": [
      "butik otel sosyal medya yönetimi Antalya",
      "otel doğrudan rezervasyon dijital pazarlama",
      "villa kiralama Instagram reklam Antalya",
      "otel Google reklam ve metasearch",
      "pansiyon web sitesi Antalya",
      "otel drone foto video çekim",
      "konaklama tesisi çok dilli reklam",
      "otel Google yorum kartı"
    ],
    "heroHeadline": "Booking'e Komisyon Ödemekten Yorulmadınız mı? Antalya'da Otelinize Doğrudan Rezervasyon Getiren Dijital Pazarlama",
    "intro": [
      "Bir misafir tatilini planlarken önce hayal eder, sonra arar. Antalya'da konaklayacağı yeri seçerken otelinizin fotoğraflarına bakar, Instagram'ınızı inceler, Google puanınızı ve yorumlarınızı okur, odanın manzarasını, havuzu, kahvaltıyı gözünde canlandırır. Bu yolculuğun her adımında güçlü bir izlenim bırakırsanız doğrudan sizden rezervasyon yapar; zayıf kalırsanız aynı misafir Booking veya bir başka platform üzerinden gelir ve siz her gecelik konaklamadan %15-25 komisyonu aracıya ödersiniz. Konaklama sektöründe dijital pazarlama, bu komisyonu kendi cebinizde tutmanın en güçlü yoludur.",
      "Antalya, dünyanın en yoğun tatil destinasyonlarından biri; ama bu yoğunluk aynı zamanda sert bir rekabet demek. Sezon kısa, doluluk her şey, boş oda ise geri kazanılamayan kayıp gelir. İster deniz kenarında bir resort, ister Kaleiçi'nde butik bir otel, ister bir pansiyon ya da villa kiralama işletmesi olun; misafiri aracı platformlara kaptırmadan, doğrudan kendi kanallarınızdan çekmek doluluğunuzu ve kâr marjınızı doğrudan belirler. Doğru misafire, doğru dilde, doğru anda ulaşmak; sezonu erken doldurmak ve ölü dönemi kampanyayla canlandırmak işin özüdür.",
      "VOYO Dijital olarak konaklama sektörünün dilini biliyoruz: doluluk baskısını, sezonsallığı, çok dilli misafir kitlesini, görselin belirleyiciliğini ve komisyon derdini. Amacımız beğeni ya da takipçi toplamak değil; otelinizin kendi web sitesinden, Instagram'ından ve Google'dan gelen doğrudan rezervasyonu artırmak, aracı bağımlılığını azaltmak ve boş oda sayısını düşürmek. Otelinizi sadece güzel göstermiyoruz; dolu çalıştırıyoruz."
    ],
    "challenges": [
      {
        "title": "Rezervasyonlar Booking'e ve komisyona esir",
        "desc": "Doluluğunuzun büyük kısmı aracı platformlardan geliyorsa, her rezervasyonda yüksek komisyon ödüyor ve misafirle doğrudan ilişki kuramıyorsunuz. Kendi web sitenizden gelen rezervasyon kanalınız zayıfsa, platformlar sizi hem fiyat hem de görünürlük olarak kontrol eder. Misafirin verisi, tekrar satış fırsatı ve kâr marjı hep aracıda kalır."
      },
      {
        "title": "Görseller otelin gerçek kalitesini yansıtmıyor",
        "desc": "Konaklama %100 görselle satılır. Kötü ışıkta, telefonla çekilmiş oda fotoğrafları, manzarayı gösteremeyen kareler ve havadan görüntüsü olmayan bir tesis, ne kadar güzel olursanız olun misafiri ikna edemez. Misafir ekranda gördüğü kalitesizliği konaklama kalitesiyle eşleştirir ve daha iyi çekilmiş rakibe rezervasyon yapar. Profesyonel foto, video ve drone çekimi olmadan premium fiyat isteyemezsiniz."
      },
      {
        "title": "Yabancı misafire kendi dilinde ulaşılamıyor",
        "desc": "Antalya'nın misafir kitlesi çok uluslu: Rus, Alman, İngiliz, İskandinav ve daha fazlası. Sadece Türkçe içerik ve tek dilli bir web sitesiyle bu kitlenin çoğuna görünmez kalır, doğrudan rezervasyon şansını aracı platformlara bırakırsınız. Doğru dilde reklam ve içerik olmadan yabancı misafiri kendi kanalınıza çekemezsiniz."
      },
      {
        "title": "Sezonsallık ve boş oda geliri yönetilemiyor",
        "desc": "Sezon başında geç kalınan kampanya, sezon sonunda seyrekleşen doluluk, hafta içi boş kalan odalar ve son dakika iptalleriyle oluşan boşluklar; hepsi geri kazanılamayan gelir kaybıdır. Erken rezervasyon dönemini kaçırmak veya ölü dönemi kampanyasız geçirmek, koca bir sezonun kârını eritir. Doğru zamanlı kampanya kurgusu olmadan bu dalgalanma yönetilemez."
      }
    ],
    "approach": [
      {
        "title": "Doğrudan rezervasyon odaklı web sitesi ve funnel",
        "desc": "Amacımız net: misafiri aracı platformdan değil, kendi kanalınızdan getirmek. Hızlı açılan, mobil öncelikli, çok dilli ve doğrudan rezervasyon/talep formuyla misafiri anında yakalayan bir web sitesi kurarız. \"Web sitesinden rezervasyona özel avantaj\" gibi kurgularla misafiri Booking yerine doğrudan size yönlendirir, komisyonu cebinizde tutarız."
      },
      {
        "title": "Profesyonel foto, video ve drone çekimi",
        "desc": "Kendi ekibimizle tesisinizde profesyonel çekim yaparız: doğru ışıkta oda ve süit görselleri, havuz, plaj, kahvaltı ve mekan atmosferi; havadan drone görüntüleriyle konumunuzu ve manzaranızı etkileyici biçimde gösteririz. Reels ve tanıtım videolarıyla misafirin tatilini daha rezervasyon yapmadan hayal etmesini sağlarız. Premium görsel, premium doluluk getirir."
      },
      {
        "title": "Çok dilli sosyal medya ve reklam yönetimi",
        "desc": "Instagram, Facebook ve gerektiğinde diğer kanalları otelinizin hedef misafir profiline göre yönetiriz. Rus, Alman, İngiliz ve yerli misafir için doğru dilde içerik ve reklam kurgular; tesisinizi hedef pazarların önüne kendi dilinde çıkarırız. Takipçi değil, doğrudan rezervasyona hazır bir kitle büyütürüz."
      },
      {
        "title": "Google, Meta reklamları ve metasearch görünürlüğü",
        "desc": "\"Antalya otel\", \"Kaleiçi butik otel\", \"deniz manzaralı villa\" gibi yüksek niyetli aramalarda ve Google Otel/metasearch alanlarında tesisinizi görünür kılarız. Lokasyon, dil ve ilgi alanına göre daraltılmış Google ve Meta kampanyalarıyla bütçenizi gerçekten rezervasyon yapacak misafire yönlendirir, her kampanyayı rezervasyon başına maliyetle ölçeriz."
      },
      {
        "title": "Google yorumları ve itibar yönetimi (NFC yorum kartı)",
        "desc": "Misafirin Google puanı, rezervasyon kararının en belirleyici unsurlarından biri. Resepsiyona veya odaya koyduğunuz NFC yorum kartıyla memnun misafir, tek dokunuşla Google'da yorum bırakır; yorum sayınız ve yıldız ortalamanız hızla yükselir. Gelen yorumlara profesyonel yanıt yönetimiyle hem aramada üstte çıkar hem de tıklanır, güvenilir bir tesis haline gelirsiniz."
      },
      {
        "title": "Sezonsal kampanya ve erken rezervasyon kurgusu",
        "desc": "Erken rezervasyon dönemini, bayram ve özel gün tatillerini, son dakika ve ölü dönem fırsatlarını takvime bağlar; boş kalacak odaları zamanında kampanyayla doldururuz. Geçmiş misafirlere yönelik geri kazanım ve sadakat kurgularıyla bir kez gelen misafiri tekrar gelen, doğrudan rezervasyon yapan sadık misafire dönüştürürüz."
      }
    ],
    "faqs": [
      {
        "q": "Gerçekten Booking gibi platformlara olan bağımlılığımı azaltabilir misiniz?",
        "a": "Evet, hedefimiz tam olarak bu. Aracı platformları tamamen bırakmanızı önermeyiz; ama doluluğunuzun daha büyük kısmını kendi web siteniz, Instagram'ınız ve Google üzerinden doğrudan getirerek komisyon yükünü ciddi biçimde azaltırız. Doğrudan rezervasyona özel avantajlar, güçlü görsel içerik ve çok dilli reklamla misafiri platformlar yerine sizin kanalınıza yönlendiririz; böylece hem kâr marjınız hem de misafir verisi sizde kalır."
      },
      {
        "q": "Yabancı misafirlere kendi dillerinde ulaşabilir misiniz?",
        "a": "Evet. Antalya'nın misafir kitlesinin çok uluslu olduğunu biliyoruz. Web sitenizi çok dilli kurar; hedef pazarlarınıza (örneğin Rusça, Almanca, İngilizce) uygun içerik ve reklam kampanyaları hazırlarız. Reklamları doğru lokasyon ve dil ayarlarıyla ilgili ülkelerdeki potansiyel misafire ulaştırır, tesisinizi onların diliyle ve beklentileriyle konumlandırırız."
      },
      {
        "q": "Drone ve profesyonel çekim doğrudan rezervasyona etki eder mi?",
        "a": "Kesinlikle. Konaklama tamamen görsele dayalı bir karardır. Doğru ışıkta çekilmiş oda ve manzara görselleri, havadan drone görüntüleri ve kısa tanıtım videoları, misafirin tatilini rezervasyon yapmadan hayal etmesini sağlar. Kaliteli görsel hem doğrudan rezervasyon oranını artırır hem de premium fiyat talep edebilmenizin önünü açar; ekranda gördüğü kalite, misafirin güvenini ve tercihini belirler."
      },
      {
        "q": "Google yorumlarımı NFC kartla artırmak konaklamada işe yarıyor mu?",
        "a": "Evet. Memnun misafirler genelde yorum bırakmayı unutur; NFC kart bu süreci tek dokunuşa indirir. Resepsiyonda check-out sırasında veya odada bulunan kartla misafir saniyeler içinde Google yorum sayfanıza ulaşır. Yorum sayınız ve yıldız ortalamanız arttıkça hem aramalarda ve haritada öne çıkar hem de rezervasyon kararında sizi tercih ettiren o kritik güveni kazanırsınız."
      },
      {
        "q": "Sezon dışı doluluğu artırmak için ne yapıyorsunuz?",
        "a": "Sezonsallığı bir takvim üzerinden yönetiriz. Erken rezervasyon dönemini kaçırmadan kampanya başlatır; ölü dönem, hafta içi ve son dakika boşlukları için özel fırsat kurguları hazırlarız. Ayrıca geçmiş misafirlerinize yönelik geri kazanım ve sadakat kampanyalarıyla tekrar rezervasyonu teşvik ederiz. Amaç, geri kazanılamayan boş oda gelirini mümkün olduğunca azaltmaktır."
      }
    ]
  },
  {
    "slug": "restoran-kafe-bar",
    "name": "Restoran, Kafe & Bar",
    "seoTitle": "Restoran & Kafe Dijital Pazarlama Antalya | VOYO",
    "seoDescription": "Antalya'da restoran, kafe ve barlar için sosyal medya, yemek fotoğrafçılığı, Google yorum ve harita yönetimi. Masaları dolduran dijital çözümler VOYO'da.",
    "primaryKeyword": "restoran sosyal medya yönetimi Antalya",
    "secondaryKeywords": [
      "kafe dijital pazarlama Antalya",
      "restoran Google yorum yönetimi",
      "yemek fotoğrafçılığı Antalya",
      "restoran reklam ajansı Antalya",
      "bar sosyal medya reklam",
      "Google harita yakınımdaki restoran",
      "restoran Instagram Reels ajans"
    ],
    "heroHeadline": "Boş masaları dolduran, telefonu çaldıran dijital pazarlama",
    "intro": [
      "Antalya'da bir restoran, kafe ya da bar işletmek; mutfakta mükemmel olmakla bitmiyor. Bugün müşteri, masaya oturmadan önce sizi telefonundan buluyor: \"yakınımdaki restoran\" araması, Instagram'daki bir Reels, Google'daki yıldız sayısı ve son yorumlar. Yemeğiniz ne kadar iyi olursa olsun, ekranda kötü görünüyorsanız o müşteri yan sokaktaki rakibinize gidiyor.",
      "VOYO olarak biz bu sektörün ritmini biliyoruz: cuma akşamı doluluk, sezon yoğunluğu, turist ile yerel misafir dengesi, bir kötü yorumun akşam servisini nasıl etkilediği. İştah açan yemek fotoğrafçılığından Google haritada üst sıralara çıkmaya, Instagram Reels'tan NFC yorum kartıyla itibarınızı büyütmeye kadar; işletmenizi hem tabakta hem ekranda doyurucu hale getiriyoruz."
    ],
    "challenges": [
      {
        "title": "Ekranda iştah açmayan görseller",
        "desc": "Telefonla çekilen loş, sarı ışıklı yemek fotoğrafları menünüzü olduğundan ucuz ve sıradan gösteriyor. Oysa insanlar önce gözüyle yer. Profesyonel foto ve Reels olmadan, en lezzetli tabağınız bile akışta kaydırılıp geçiliyor."
      },
      {
        "title": "Google haritada görünmemek",
        "desc": "\"Yakınımdaki kafe\" veya \"Antalya'da kahvaltı\" arandığında ilk çıkanlar masaları dolduruyor. İşletme profiliniz eksik, kategoriler yanlış ya da yorumlar güncel değilse, aç ve yakında olan müşteri sizi hiç görmeden başka yere oturuyor."
      },
      {
        "title": "Yorumların kontrolden çıkması",
        "desc": "Tek bir olumsuz yorum, düzeltilmeyen bir puan ya da yorum sayısının azlığı güveni yıkıyor. Memnun misafirler yorum bırakmayı unutuyor, kızgın olanlar hemen yazıyor. Sonuçta harita puanınız gerçek kalitenizi yansıtmıyor."
      },
      {
        "title": "Turist ve yerel misafir dengesi",
        "desc": "Antalya'da yaz sezonu turistle, kış ise yerel sadık müşteriyle dönüyor. Tek dilde, tek tip içerikle her iki kitleye de ulaşamıyorsunuz. Sezona ve kitleye göre değişmeyen iletişim, dolu geçmesi gereken masaları boş bırakıyor."
      },
      {
        "title": "Kampanyaların duyulmaması",
        "desc": "Brunch fırsatı, happy hour, yeni menü ya da canlı müzik gecesi... En güzel kampanya bile doğru kişiye, doğru saatte ulaşmazsa duvara asılı afişten öteye geçmiyor. Hedefsiz paylaşımlar bütçeyi yakıyor, masaları doldurmuyor."
      }
    ],
    "approach": [
      {
        "title": "İştah açan foto & video prodüksiyon",
        "desc": "Mekanınıza gelip yemeklerinizi, atmosferinizi ve o \"gelme isteği\" uyandıran anları profesyonel ekipmanla çekiyoruz. Menü fotoğrafları, Instagram Reels ve story içerikleri; ekranda görüldüğü an sipariş verdiren görseller üretiyoruz."
      },
      {
        "title": "Google İşletme & harita optimizasyonu",
        "desc": "İşletme profilinizi baştan sona düzenliyoruz: doğru kategoriler, menü, çalışma saatleri, kaliteli görseller ve düzenli gönderiler. \"Yakınımdaki\" aramalarında ve Antalya yerel sonuçlarında üst sıralara çıkmanız için haritanızı sürekli canlı tutuyoruz."
      },
      {
        "title": "NFC yorum kartı ile itibar yönetimi",
        "desc": "Masaya ya da kasaya koyduğunuz NFC yorum kartıyla, memnun misafir telefonunu okuttuğu an tek dokunuşla Google yorum ekranına gidiyor. Böylece olumlu deneyimler yoruma dönüşüyor, puanınız gerçek kalitenizi yansıtıyor ve yeni müşteri güven duyarak kapıdan giriyor."
      },
      {
        "title": "Hedefli sosyal medya & reklam yönetimi",
        "desc": "İçerik takvimi, düzenli paylaşım ve Meta/Google reklamlarıyla doğru kitleyi hedefliyoruz: belirli bir yarıçaptaki yerel misafirler, Antalya'daki turistler ya da kahvaltı arayanlar. Sezona ve kampanyaya göre kurgulanan reklamlarla bütçenizi masaya çeviriyoruz."
      },
      {
        "title": "Sezonluk kampanya & çok dilli içerik",
        "desc": "Brunch, happy hour, yeni menü ve özel gecelerinizi görsel kampanyaya dönüştürüyoruz. Turist yoğun sezonlarda çok dilli içerik ve rezervasyon odaklı çağrılarla hem yerel hem yabancı misafire aynı anda ulaşıyoruz."
      }
    ],
    "faqs": [
      {
        "q": "Restoranımın sosyal medyasını tamamen siz mi yönetiyorsunuz?",
        "a": "Evet. İçerik takviminden çekime, paylaşımdan reklam yönetimine kadar süreci uçtan uca üstleniyoruz. Siz mutfağa ve servise odaklanırken, biz mekanınızın ekrandaki iştahını canlı tutuyoruz. Dilerseniz onay akışıyla her paylaşımı görüp yönlendirebilirsiniz."
      },
      {
        "q": "Yemek fotoğrafları ve Reels için mekana geliyor musunuz?",
        "a": "Kesinlikle. Antalya içinde işletmenize gelip yemeklerinizi, atmosferinizi ve servis anlarını profesyonel ekipmanla çekiyoruz. Menü fotoğraflarından sosyal medya Reels'larına kadar, işletmenize özel bir görsel arşiv oluşturuyoruz."
      },
      {
        "q": "Google puanımı ve yorumlarımı nasıl artırıyorsunuz?",
        "a": "İşletme profilinizi optimize ediyor, düzenli gönderilerle haritada aktif tutuyor ve NFC yorum kartıyla memnun misafirlerin tek dokunuşla yorum bırakmasını kolaylaştırıyoruz. Olumsuz yorumlara profesyonel yanıt stratejisiyle yaklaşarak itibarınızı koruyoruz. Sahte yorum değil, gerçek memnuniyeti görünür kılıyoruz."
      },
      {
        "q": "Sadece belirli bir kampanya için de çalışabilir miyiz?",
        "a": "Evet. Yeni menü lansmanı, açılış, sezon açılışı ya da özel bir gece için proje bazlı da çalışabiliriz. Ancak restoran ve kafelerde asıl sonuç, düzenli ve sürdürülebilir bir dijital varlıktan gelir; ihtiyacınıza göre en doğru modeli birlikte belirleriz."
      },
      {
        "q": "Fiyatlandırma nasıl işliyor?",
        "a": "Her işletmenin ihtiyacı farklı olduğu için tek tip paket sunmuyoruz. Mekanınızın büyüklüğü, hedefleriniz ve istediğiniz hizmetlere (sosyal medya, foto/video, reklam, harita yönetimi) göre size özel bir teklif hazırlıyoruz. Ücretsiz keşif görüşmesi için bizimle iletişime geçmeniz yeterli."
      }
    ]
  },
  {
    "slug": "tur-transfer-seyahat",
    "name": "Tur, Transfer & Seyahat",
    "seoTitle": "Tur & Transfer Dijital Pazarlama Antalya | VOYO",
    "seoDescription": "Antalya tur, transfer ve seyahat acenteleri için çok dilli web, online rezervasyon, Google/Meta reklam ve Google yorum yönetimi. VOYO ile dolu sezon.",
    "primaryKeyword": "tur ve transfer dijital pazarlama Antalya",
    "secondaryKeywords": [
      "seyahat acentesi sosyal medya Antalya",
      "transfer firması reklam Antalya",
      "tur şirketi web tasarım",
      "Antalya turizm Google yorum",
      "çok dilli tur sitesi",
      "online rezervasyon sistemi tur",
      "günübirlik tur reklamı Antalya"
    ],
    "heroHeadline": "Antalya'ya Gelen Turisti Rakibinizden Önce Siz Yakalayın",
    "intro": [
      "Antalya'ya inen turist, tur ve transferini genelde daha uçağa binmeden telefonundan arıyor. Havalimanı transferi, tekne turu, Pamukkale-Kapadokya günübirliği, VIP araç... Bu aramaların hepsi Google'da, Instagram'da ve karşılaştırma sitelerinde geçiyor. Sorun şu: müşteri sizi orada bulamıyorsa, sizden 200 metre ötedeki rakibinizi ya da komisyonunuzu yiyen aracı platformu buluyor.",
      "VOYO olarak tur, transfer ve seyahat sektörünün gerçek dinamiklerini biliyoruz: sezon kısa ve yoğundur, müşteri çok dillidir, karar dakikalar içinde verilir, güven her şeydir. Turist tanımadığı bir şehirde tanımadığı bir firmaya para gönderirken tek dayanağı sizin dijital vitrininizdir; site profesyonelliği, Google yıldızınız ve yorumlarınız. Biz bu vitrini kurar, doğru dillerde konuşturur ve dolu bir sezon için lead ve rezervasyon akışını sürekli hale getiririz.",
      "Antalya merkezli bir ajans olarak sahayı, sezonu ve rekabeti yerinde görüyoruz. Amacımız güzel bir sayfa yapmak değil; havalimanından, otelden ve Google'dan gelen talebi ölçülebilir rezervasyona çevirmek."
    ],
    "challenges": [
      {
        "title": "Turist sizi değil, aracı platformu buluyor",
        "desc": "Transfer ve tur aramalarının büyük kısmı global rezervasyon platformlarına ve reklam verenlere gidiyor. Kendi doğrudan kanalınız zayıfsa, her müşteriyi komisyonla kaybediyor ya da hiç göremiyorsunuz. Doğrudan gelen rezervasyon, cebinizde kalan kâr demektir."
      },
      {
        "title": "Site tek dilli ya da mobil rezervasyona uygun değil",
        "desc": "Rus, Alman, İngiliz, Arap turist kendi dilinde okuyamadığı, telefonundan 3 adımda rezervasyon yapamadığı siteyi saniyeler içinde terk eder. Çok dilli, mobil öncelikli ve WhatsApp'a bağlı bir akış olmadan gelen trafiğin çoğu boşa gider."
      },
      {
        "title": "Google yıldızı ve yorumlar güveni belirliyor",
        "desc": "Tanımadığı şehirde tanımadığı firmaya ödeme yapan turist için Google puanınız ve yorum sayınız neredeyse tek referans. Az yorum ya da düşük puan, kaçırılmış rezervasyon demek. Yorum toplamak da mutlu müşteriyi doğru anda yakalamayı gerektirir."
      },
      {
        "title": "Sezon kısa, reklam bütçesi yanlış akıyor",
        "desc": "Antalya sezonu birkaç yoğun aya sıkışır. Reklamı yanlış hedefte, yanlış dilde ya da yanlış zamanda harcamak sezonun kaçması demektir. Bütçenin doğru kitleye, doğru rota ve turlara, doğru anda yönlendirilmesi gerekir."
      },
      {
        "title": "Görsel yoksa satış yok",
        "desc": "Tekne turu, jip safari, VIP transfer... Bu ürünler tamamen hayal ettirmekle satılır. Karanlık, düşük çözünürlüklü telefon fotoğrafları premium fiyatı desteklemez. Profesyonel foto ve video olmadan aynı turu rakibinizin yarı fiyatına savunmak zorunda kalırsınız."
      }
    ],
    "approach": [
      {
        "title": "Çok dilli, rezervasyon odaklı web sitesi",
        "desc": "Hedef kitlenizin dillerinde (İngilizce, Rusça, Almanca, Arapça vb.), mobil öncelikli, hızlı açılan bir site kuruyoruz. Tur ve rota sayfaları, fiyat/kontenjan, online rezervasyon veya anında WhatsApp talebi tek akışta. Turist merak ettiği anda değil, karar verdiği anda size ulaşır."
      },
      {
        "title": "Google ve Meta'da doğru turiste doğru reklam",
        "desc": "Havalimanı transferi, günübirlik turlar ve popüler rotalar için arama ve sosyal reklamlarını dile, milliyete ve sezona göre kurgular; bütçeyi dönüşen kampanyalara kaydırırız. Amaç tıklama değil, ölçülebilir rezervasyon ve WhatsApp talebi."
      },
      {
        "title": "Google İşletme Profili ve NFC ile yorum çarkı",
        "desc": "İşletme profilinizi turizme göre optimize eder, kendi NFC Google yorum ürünümüzle mutlu müşteriden turun/transferin hemen ardından yorum toplarız. Yıldız puanınız ve yorum sayınız artar; yeni turist için güven, yerel aramada da görünürlük yükselir."
      },
      {
        "title": "Turları satan profesyonel foto & video",
        "desc": "Tekneden, jipten, VIP araçtan, rotalardan profesyonel fotoğraf ve reels/kısa video çekeriz. Instagram ve TikTok'ta hareket eden, hayal ettiren içerik; sitenizde ve reklamlarınızda satışı kapatan görseller. Premium fiyatınızı görsel kalite destekler."
      },
      {
        "title": "Sosyal medya ve sezon planı",
        "desc": "Instagram ve TikTok'u sadece paylaşım değil, talep motoru olarak yönetiriz. Rota tanıtımları, müşteri deneyimleri, sezon öncesi erken rezervasyon kampanyaları ve acenteyle iş birliği içeriğiyle takvim boyunca akış kurar; sezonu boş güne bırakmayız."
      }
    ],
    "faqs": [
      {
        "q": "Turlarımı zaten global rezervasyon platformlarından satıyorum, dijital pazarlamaya neden ihtiyacım var?",
        "a": "O platformlar size müşteri getirir ama her rezervasyonda ciddi komisyon alır ve müşteri ilişkisi onların elinde kalır. Kendi çok dilli siteniz, Google görünürlüğünüz ve sosyal medyanız güçlendikçe doğrudan gelen, komisyonsuz rezervasyonlar artar. Platformları tamamen bırakmanız gerekmez; hedefimiz doğrudan kanalınızı kârlı bir alternatif haline getirmek."
      },
      {
        "q": "Sitem kaç dilde olmalı?",
        "a": "Bu, gelen turist profilinize bağlı. Antalya için genellikle İngilizce esas alınır; ağırlıklı Rus, Alman veya Arap pazarına çalışıyorsanız o dilleri ekleriz. Rezervasyon verinize ve reklam hedeflerinize bakarak hangi dillerin gerçekten dönüşüm getirdiğine birlikte karar veririz; her dil ayrı bir maliyet ve bakım demektir, gereksiz dille bütçe şişirmeyiz."
      },
      {
        "q": "Google yorumlarını nasıl artırıyorsunuz?",
        "a": "Sahte yorumla değil, gerçek mutlu müşteriyi doğru anda yakalayarak. Kendi NFC Google yorum ürünümüzle tur veya transfer biterken, deneyim tazeyken müşteriyi tek dokunuşla yorum sayfanıza yönlendiririz. Rehberiniz veya şoförünüz bunu akışa doğal şekilde ekler; yorum sayınız ve puanınız zamanla organik olarak yükselir."
      },
      {
        "q": "Sezon çok kısa, reklam bütçem sınırlı. Yine de mantıklı mı?",
        "a": "Kısa sezon, bütçeyi doğru yönetmeyi daha da önemli kılar. Reklamı sezon öncesi erken rezervasyon ve sezon içi yüksek talep dönemlerine odaklar, dönüşmeyen kelime ve kitleleri hızla keser, bütçeyi rezervasyon getiren kampanyalara kaydırırız. Sınırlı bütçeyle çalışmak sorun değil; savurgan harcamayla çalışmak sorundur."
      },
      {
        "q": "Antalya dışındaki turist trafiğine de ulaşabilir miyiz?",
        "a": "Evet. Reklamları ülke ve dil bazında hedefleyebildiğimiz için turist daha Antalya'ya gelmeden, kendi ülkesindeyken sizi görebilir. Aynı zamanda otel, rehber ve yerel acentelerle iş birliğini destekleyen içerik ve landing sayfalarıyla hem uluslararası hem yerel talebi birlikte kurgularız."
      }
    ]
  },
];

export function getSectorBySlug(slug: string): SectorPage | undefined {
  return sectorPages.find((s) => s.slug === slug);
}
