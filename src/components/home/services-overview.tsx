import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <SectionWrapper alternate>
      <SectionHeader
        eyebrow="How I Work"
        headline="Your coaching packages"
        description="A structured approach to breaking through the mental barriers that hold you back."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, i) => (
          <AnimateOnScroll key={service.title} delay={i * 0.1}>
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-8 md:p-10 h-full flex flex-col">
              <service.icon
                className="w-8 h-8 text-amber-700 mb-6"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-xl tracking-wide uppercase text-zinc-50 mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-zinc-500"
                  >
                    <span className="text-amber-700 mt-0.5 shrink-0">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll>
        <div className="mt-12 text-center">
          <Button variant="primary" asChild>
            <Link href="/coaching" className="gap-2">
              {/* "SEE HOW I WORK" is the hero secondary; use services CTA here */}
              VIEW PACKAGES
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </Button>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
