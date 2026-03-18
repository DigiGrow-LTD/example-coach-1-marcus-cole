import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "We start by mapping your current mental game — where you perform well, where you don't, and what patterns drive both. No guesswork.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "We pinpoint the specific mental barriers holding you back. Self-doubt, fear of failure, overthinking under pressure — we name it and understand it.",
  },
  {
    number: "03",
    title: "Equip",
    description:
      "I give you practical tools and techniques tailored to your situation. Things you can use in the moment when pressure hits — not just in a coaching session.",
  },
  {
    number: "04",
    title: "Apply",
    description:
      "You take the tools into the real world. Matches, meetings, high-stakes moments. We review what worked, what didn't, and refine.",
  },
  {
    number: "05",
    title: "Embed",
    description:
      "The techniques become second nature. You don't think about them — you just perform. That's when the edge becomes permanent.",
  },
];

export function MethodologySection() {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow="The Process"
        headline="The Edge Method"
        description="A proven five-step framework for building a performance mindset that lasts."
      />

      <div className="max-w-3xl mx-auto space-y-8">
        {steps.map((step, i) => (
          <AnimateOnScroll key={step.number} delay={i * 0.1}>
            <div className="flex gap-6 items-start">
              <span className="font-display text-4xl md:text-5xl text-amber-700/30 leading-none shrink-0 w-16 text-right">
                {step.number}
              </span>
              <div className="border-l border-zinc-800 pl-6 pb-2">
                <h3 className="font-display text-xl tracking-wide uppercase text-zinc-50 mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
