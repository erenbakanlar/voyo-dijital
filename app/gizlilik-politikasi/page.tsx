import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal-layout";
import { ContactLink } from "@/components/contact-link";
import { site } from "@/lib/site-data";
import { encodeContact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
  description:
    "VOYO Dijital gizlilik politikası ve 6698 sayılı KVKK kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function GizlilikPolitikasiPage() {
  return (
    <LegalLayout
      title="Gizlilik Politikası ve KVKK Aydınlatma Metni"
      updated="26 Haziran 2026"
    >
      <p>
        VOYO Dijital (&quot;VOYO&quot;, &quot;biz&quot;) olarak kişisel
        verilerinizin güvenliğine önem veriyoruz. Bu metin, 6698 sayılı Kişisel
        Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında, internet
        sitemizi ({site.name.toLowerCase()}ajans.com) kullandığınızda veya
        bizimle iletişime geçtiğinizde kişisel verilerinizin nasıl işlendiğini
        açıklar.
      </p>

      <h2>1. Veri Sorumlusu</h2>
      <p>
        Kişisel verileriniz, veri sorumlusu sıfatıyla{" "}
        <strong>[Şirket/işletme tam unvanı]</strong> tarafından, aşağıda
        belirtilen amaç ve kapsamda işlenmektedir.
      </p>
      <ul>
        <li>Unvan: [Şirket/işletme tam unvanı]</li>
        <li>Adres: {site.location} — [açık adres]</li>
        <li>
          İletişim:{" "}
          <ContactLink
            encodedHref={encodeContact(`mailto:${site.email}`)}
            encodedLabel={encodeContact(site.email)}
            placeholder="••••••@••••••"
          />
        </li>
      </ul>

      <h2>2. İşlenen Kişisel Veriler</h2>
      <p>Sitemiz üzerinden veya bizimle iletişiminiz kapsamında:</p>
      <ul>
        <li>
          <strong>İletişim verileri:</strong> WhatsApp, telefon veya e-posta
          yoluyla bize ulaştığınızda paylaştığınız ad-soyad, telefon ve e-posta
          gibi bilgiler.
        </li>
        <li>
          <strong>İşlem/teknik veriler:</strong> Barındırma altyapısının
          otomatik tuttuğu IP adresi, tarayıcı ve erişim kayıtları gibi
          loglar.
        </li>
        <li>
          <strong>Tercih verileri:</strong> Açık/koyu tema tercihiniz, yalnızca
          tarayıcınızda yerel olarak (localStorage) saklanır ve sunucularımıza
          aktarılmaz.
        </li>
      </ul>
      <p>
        Sitemizde şu an çevrimiçi iletişim formu, üyelik veya analitik/pazarlama
        izleme kodu bulunmamaktadır. Bu hizmetler ileride eklenirse işbu metin
        güncellenecek ve gerekli hâllerde açık rızanız alınacaktır.
      </p>

      <h2>3. İşleme Amaçları</h2>
      <ul>
        <li>Talep ve sorularınızı yanıtlamak, teklif sunmak,</li>
        <li>Sözleşmesel ilişki kurmak ve hizmetleri sunmak,</li>
        <li>Site güvenliğini sağlamak ve hukuki yükümlülükleri yerine getirmek.</li>
      </ul>

      <h2>4. Hukuki Sebepler</h2>
      <p>
        Kişisel verileriniz KVKK m.5 uyarınca; bir sözleşmenin kurulması veya
        ifası, hukuki yükümlülüğün yerine getirilmesi, temel hak ve
        özgürlüklerinize zarar vermemek kaydıyla meşru menfaat ve gereken
        hâllerde açık rızanız hukuki sebeplerine dayanılarak işlenir.
      </p>

      <h2>5. Aktarım</h2>
      <p>
        Verileriniz; barındırma ve altyapı hizmeti aldığımız tedarikçiler ile
        yasal olarak yetkili kamu kurum ve kuruluşlarına, ilgili mevzuat ve
        KVKK m.8-9 sınırları çerçevesinde aktarılabilir.
      </p>

      <h2>6. Saklama Süresi</h2>
      <p>
        Kişisel verileriniz, işleme amacının gerektirdiği süre ve ilgili
        mevzuatta öngörülen yasal saklama süreleri boyunca muhafaza edilir;
        sürenin sonunda silinir, yok edilir veya anonim hâle getirilir.
      </p>

      <h2>7. İlgili Kişi Olarak Haklarınız (KVKK m.11)</h2>
      <p>Veri sahibi olarak;</p>
      <ul>
        <li>Kişisel verinizin işlenip işlenmediğini öğrenme,</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
        <li>Eksik/yanlış işlenmişse düzeltilmesini isteme,</li>
        <li>Şartları oluştuğunda silinmesini/yok edilmesini isteme,</li>
        <li>İşlemenin münhasıran otomatik sistemlerle analizi sonucu aleyhinize bir sonuç çıkmasına itiraz etme,</li>
        <li>Kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme</li>
      </ul>
      <p>haklarına sahipsiniz.</p>

      <h2>8. Başvuru</h2>
      <p>
        Haklarınıza ilişkin taleplerinizi{" "}
        <ContactLink
          encodedHref={encodeContact(`mailto:${site.email}`)}
          encodedLabel={encodeContact(site.email)}
          placeholder="••••••@••••••"
        />{" "}
        üzerinden veya <Link href="/#iletisim">iletişim kanallarımız</Link>{" "}
        aracılığıyla bize iletebilirsiniz. Başvurularınız KVKK ve ilgili
        mevzuatta öngörülen sürelerde sonuçlandırılır.
      </p>

      <h2>9. Güncellemeler</h2>
      <p>
        İşbu metin, mevzuat değişiklikleri veya sitemizdeki güncellemeler
        doğrultusunda revize edilebilir. Güncel sürüm her zaman bu sayfada
        yayımlanır.
      </p>
    </LegalLayout>
  );
}
