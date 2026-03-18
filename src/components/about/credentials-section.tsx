import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { BrandImage } from "@/components/shared/brand-image";

const credentials = [
  { label: "Certified Performance Mindset Coach", detail: "ICF Accredited" },
  { label: "NLP Practitioner", detail: "Certified 2019" },
  { label: "Sports Psychology Foundation", detail: "University of Manchester" },
  { label: "Semi-Professional Rugby", detail: "5 years competitive" },
];

const numbers = [
  { value: "50+", label: "Clients Coached" },
  { value: "500+", label: "Sessions Delivered" },
  { value: "6", label: "Years Coaching" },
];

export function CredentialsSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimateOnScroll>
          <div>
            <SectionHeader
              eyebrow="Credentials"
              headline="Qualified. Experienced. Proven."
              align="left"
            />

            <ul className="space-y-4">
              {credentials.map((cred) => (
                <li key={cred.label} className="flex items-start gap-3">
                  <span className="text-amber-700 mt-1 shrink-0">—</span>
                  <div>
                    <p className="text-zinc-50 font-medium">{cred.label}</p>
                    <p className="text-zinc-500 text-sm">{cred.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-zinc-800/50">
              {numbers.map((num) => (
                <div key={num.label} className="text-center">
                  <p className="font-display text-3xl md:text-4xl text-amber-500 tracking-wide">
                    {num.value}
                  </p>
                  <p className="text-zinc-500 text-xs uppercase tracking-[0.05em] mt-1">
                    {num.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="relative aspect-[4/3]">
            <BrandImage
              src="/images/about/coaching-session.jpg"
              alt="Marcus Cole in a coaching session with a client"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
