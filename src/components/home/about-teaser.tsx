import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { BrandImage } from "@/components/shared/brand-image";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function AboutTeaser() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimateOnScroll>
          <div className="relative aspect-[4/5] lg:aspect-[3/4]">
            <BrandImage
              src="/images/about/marcus-portrait.jpg"
              alt="Marcus Cole, performance mindset coach"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <SectionHeader
            eyebrow="Who I Am"
            headline="I've been where you are"
            align="left"
          />

          <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
            <p>
              I spent years as a semi-professional rugby player in Manchester,
              convinced that more training, more reps, and more hours would get
              me to the top. It didn&apos;t.
            </p>
            <p>
              What changed everything wasn&apos;t physical. It was learning to
              control what happens between my ears — the self-doubt before a big
              game, the fear of failure that made me play safe, the mental noise
              that drowned out my instincts.
            </p>
            <p>
              Now I help athletes and driven professionals do the same. No
              jargon. No fluff. Just practical tools that work under pressure.
            </p>
          </div>

          <div className="mt-8">
            <Button variant="ghost" asChild>
              <Link href="/about" className="gap-2">
                Read my full story
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
