import { SectionWrapper } from "@/components/shared/section-wrapper";
import { BrandImage } from "@/components/shared/brand-image";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function BackstorySection() {
  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimateOnScroll>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                I grew up in Manchester with one goal: make it in rugby. I
                trained harder than anyone I knew. I was first on the pitch and
                last to leave. By 20, I was playing semi-professionally and
                convinced I was on the verge of something big.
              </p>
              <p>
                But the harder I pushed, the worse I performed when it mattered.
                Big games, selection trials, moments where it all counted — I
                choked. Not because I wasn&apos;t good enough physically. Because
                my head wasn&apos;t right.
              </p>
              <p>
                It took a knee injury and six months on the sidelines to finally
                confront what was really holding me back. I started working with
                a mindset coach and everything changed — not just my rugby, but
                how I approached every challenge in life.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="relative aspect-[4/5]">
              <BrandImage
                src="/images/about/rugby-athlete.jpg"
                alt="Athletic training environment representing Marcus's rugby background"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll>
          <div className="mt-12 lg:mt-16 space-y-6 text-zinc-400 text-lg leading-relaxed max-w-3xl">
            <p>
              That experience lit a fire. I immersed myself in performance
              psychology, got certified, and started coaching others who were
              stuck in the same cycle I&apos;d been in — talented people
              underperforming because of what was happening between their ears.
            </p>
            <p>
              Today I work with athletes from amateur to semi-professional level,
              and with ambitious professionals who want the same mental edge in
              their careers. The work is practical, direct, and built around what
              actually changes behaviour — not theory.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
