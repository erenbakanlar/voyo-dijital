import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { NfcTeaser } from "@/components/sections/nfc-teaser";
import { WhyVoyo } from "@/components/sections/why-voyo";
import { TeamPreview } from "@/components/sections/team-preview";
import { References } from "@/components/sections/references";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <NfcTeaser />
        <Services />
        <Stats />
        <WhyVoyo />
        <TeamPreview />
        <References />
        <Testimonials />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
