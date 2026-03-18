import type { Metadata } from "next";
import { NoiseOverlay } from "@/components/shared/noise-overlay";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { MethodologySection } from "@/components/coaching/methodology-section";
import { PackagesSection } from "@/components/coaching/packages-section";
import { WhoItsForSection } from "@/components/coaching/who-its-for-section";
import { FaqSection } from "@/components/coaching/faq-section";
import { BookingCtaSection } from "@/components/coaching/booking-cta-section";

export const metadata: Metadata = {
  title: "1:1 Coaching Packages | Marcus Cole Performance Coaching",
  description:
    "6-week and 12-week 1:1 mindset coaching packages designed for athletes and high-performing professionals who refuse to settle.",
};

export default function CoachingPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-zinc-950 overflow-hidden">
        <NoiseOverlay />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-amber-700 font-semibold text-xs tracking-[0.2em] uppercase mb-3">
              Coaching
            </p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] tracking-wide uppercase leading-[0.95] text-zinc-50 max-w-3xl">
              Your path to peak performance
            </h1>
            <p className="mt-4 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              A structured, no-nonsense approach to building the mental edge
              that separates good from great.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <MethodologySection />
      <PackagesSection />
      <WhoItsForSection />
      <FaqSection />
      <BookingCtaSection />
    </>
  );
}
