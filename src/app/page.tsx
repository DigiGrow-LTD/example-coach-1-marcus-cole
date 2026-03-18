import { HeroSection } from "@/components/home/hero-section";
import { SocialProofBar } from "@/components/home/social-proof-bar";
import { AboutTeaser } from "@/components/home/about-teaser";
import { ServicesOverview } from "@/components/home/services-overview";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { LeadMagnetSection } from "@/components/home/lead-magnet-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <AboutTeaser />
      <ServicesOverview />
      <TestimonialsSection />
      <LeadMagnetSection />
      <FinalCtaSection />
    </>
  );
}
