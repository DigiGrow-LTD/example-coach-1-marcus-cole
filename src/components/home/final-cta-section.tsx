import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function FinalCtaSection() {
  return (
    <SectionWrapper noise>
      <AnimateOnScroll>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-amber-700 font-semibold text-xs tracking-[0.2em] uppercase mb-3">
            Ready?
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide uppercase leading-none text-zinc-50">
            Let&apos;s find your edge
          </h2>
          <p className="mt-4 text-zinc-400 text-lg md:text-xl leading-relaxed">
            A 20-minute call to see if we&apos;re the right fit. No pressure. No
            sales pitch. Just a straight conversation about where you are and
            where you want to be.
          </p>
          <div className="mt-8">
            <Button variant="primary" asChild>
              <Link href="/coaching#booking" className="gap-2">
                BOOK YOUR FREE DISCOVERY CALL
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </Button>
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
