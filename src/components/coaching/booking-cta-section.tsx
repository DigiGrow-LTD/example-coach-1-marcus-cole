import { Calendar, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function BookingCtaSection() {
  return (
    <SectionWrapper id="booking" noise>
      <AnimateOnScroll>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-amber-700 font-semibold text-xs tracking-[0.2em] uppercase mb-3">
            Let&apos;s Talk
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide uppercase leading-none text-zinc-50">
            Book your free discovery call
          </h2>
          <p className="mt-4 text-zinc-400 text-lg md:text-xl leading-relaxed">
            A 20-minute conversation to understand where you are, where you want
            to be, and whether I&apos;m the right coach to get you there. No
            commitment. No sales pitch.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" asChild>
              <a
                href="mailto:marcus@marcuscole.co.uk?subject=Discovery%20Call%20Enquiry"
                className="gap-2"
              >
                <Calendar className="w-4 h-4" strokeWidth={1.5} />
                BOOK YOUR FREE CALL
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-zinc-500 text-sm">
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            <span>
              Or email{" "}
              <a
                href="mailto:marcus@marcuscole.co.uk"
                className="text-amber-700 hover:text-amber-600 transition-colors duration-200"
              >
                marcus@marcuscole.co.uk
              </a>
            </span>
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
