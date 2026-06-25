import { ArrowRight, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CtaLink } from "@/components/cta-link";
import { ContactLink } from "@/components/contact-link";
import { team } from "@/lib/site-data";
import { encodeContact } from "@/lib/contact";

const avatarGradients = [
  "from-[#F5A623]/30 to-[#6C47FF]/20",
  "from-[#4F8CFF]/30 to-[#F5A623]/20",
  "from-[#6C47FF]/30 to-[#4F8CFF]/20",
  "from-[#F5A623]/30 to-[#4F8CFF]/20",
];

export function TeamPreview() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div id="ekip" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 sm:px-8 lg:scroll-mt-28">
        <SectionHeading
          eyebrow="Ekibimiz"
          title="Arkamızdaki Ekip"
          subtitle="VOYO, dört alanda uzman dört kişiden oluşuyor. Küçük ama güçlü. Hızlı ama özenli."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-1.5 hover:ring-voyo-orange/40 hover:shadow-[0_20px_50px_-24px_rgba(245,166,35,0.4)]">
                {/* Fotoğraf yer tutucu */}
                <div
                  className={`relative flex aspect-[4/5] shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]}`}
                >
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <span className="relative text-6xl font-extrabold tracking-tight text-foreground/90">
                    {member.initials}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="text-lg font-bold leading-tight tracking-tight text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-voyo-orange">
                    {member.role}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>

                  <div className="mt-auto flex flex-col gap-2 border-t border-foreground/10 pt-4">
                    <ContactLink
                      encodedHref={encodeContact(member.phoneHref)}
                      encodedLabel={encodeContact(member.phone)}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-voyo-orange"
                    >
                      <Phone className="size-3.5 shrink-0 text-voyo-orange" />
                    </ContactLink>
                    <ContactLink
                      encodedHref={encodeContact(`mailto:${member.email}`)}
                      encodedLabel={encodeContact(member.email)}
                      placeholder="••••••@••••••"
                      className="inline-flex items-center gap-2 break-all text-sm text-muted-foreground transition-colors hover:text-voyo-orange"
                    >
                      <Mail className="size-3.5 shrink-0 text-voyo-orange" />
                    </ContactLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <CtaLink href="#iletisim" variant="secondary" size="lg">
            Ekibimizle Tanışın
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
