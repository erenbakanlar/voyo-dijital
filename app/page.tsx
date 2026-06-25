import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { WhyVoyo } from "@/components/sections/why-voyo";
import { TeamPreview } from "@/components/sections/team-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyVoyo />
        <TeamPreview />
        <Testimonials />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
