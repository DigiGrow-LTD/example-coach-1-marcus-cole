import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" noise>
      <SectionHeader
        eyebrow="What Clients Say"
        headline="Results speak louder than promises"
        description="Real transformations from athletes and professionals who committed to the work."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, i) => (
          <AnimateOnScroll key={testimonial.name} delay={i * 0.1}>
            <div className="bg-zinc-900/80 border border-zinc-700/50 p-6 md:p-8 hover:border-amber-700/30 transition-colors duration-300 h-full flex flex-col">
              <Quote
                className="w-8 h-8 text-amber-700/60 mb-4 shrink-0"
                strokeWidth={1.5}
              />
              <blockquote className="text-zinc-200 text-lg leading-relaxed italic flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <div className="w-12 h-px bg-amber-700/40 mb-4" />
                <p className="text-zinc-50 font-semibold text-sm tracking-wide uppercase">
                  {testimonial.name}
                </p>
                <p className="text-zinc-500 text-sm mt-1">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
