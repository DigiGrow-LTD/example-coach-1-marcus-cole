import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NoiseOverlay } from "@/components/shared/noise-overlay";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { BackstorySection } from "@/components/about/backstory-section";
import { PhilosophySection } from "@/components/about/philosophy-section";
import { CredentialsSection } from "@/components/about/credentials-section";

export const metadata: Metadata = {
  title: "About Marcus Cole | From Rugby to Mindset Coaching",
  description:
    "Ex-semi-professional rugby player turned performance mindset coach. Marcus Cole helps athletes and executives break through mental barriers.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-zinc-950 overflow-hidden">
        <NoiseOverlay />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-amber-700 font-semibold text-xs tracking-[0.2em] uppercase mb-3">
              About
            </p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] tracking-wide uppercase leading-[0.95] text-zinc-50 max-w-3xl">
              The man behind the method
            </h1>
            <p className="mt-4 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              From semi-professional rugby to performance mindset coaching. This
              is how I got here — and why I do what I do.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <BackstorySection />
      <PhilosophySection />
      <CredentialsSection />

      {/* CTA section */}
      <SectionWrapper alternate noise>
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-amber-700 font-semibold text-xs tracking-[0.2em] uppercase mb-3">
              Ready to start?
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide uppercase leading-none text-zinc-50">
              Work with me
            </h2>
            <p className="mt-4 text-zinc-400 text-lg md:text-xl leading-relaxed">
              See the coaching packages and book your free discovery call.
            </p>
            <div className="mt-8">
              <Button variant="primary" asChild>
                <Link href="/coaching" className="gap-2">
                  VIEW COACHING PACKAGES
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>
    </>
  );
}
