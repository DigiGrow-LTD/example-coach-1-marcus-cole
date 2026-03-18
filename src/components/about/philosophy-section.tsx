import { Target, Brain, Trophy, CheckCircle } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

const beliefs = [
  {
    icon: Brain,
    title: "Mindset Is Trainable",
    description:
      "Mental toughness isn't something you're born with. It's a skill set you can develop like any other — with the right practice and the right guidance.",
  },
  {
    icon: Target,
    title: "Simplicity Over Complexity",
    description:
      "The best mental techniques are the ones you'll actually use under pressure. I strip away the jargon and give you tools that work in the real world.",
  },
  {
    icon: CheckCircle,
    title: "Accountability Matters",
    description:
      "Insight without action is entertainment. Every session ends with something concrete to do. I'll hold you to it, because that's what creates change.",
  },
  {
    icon: Trophy,
    title: "Results First",
    description:
      "I measure success by your performance, not by how many sessions we do. If something isn't working, we change it. No ego, no attachment to methods.",
  },
];

export function PhilosophySection() {
  return (
    <SectionWrapper alternate>
      <SectionHeader
        eyebrow="My Approach"
        headline="What I believe"
        description="The principles that guide every coaching relationship."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {beliefs.map((belief, i) => (
          <AnimateOnScroll key={belief.title} delay={i * 0.1}>
            <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
              <belief.icon
                className="w-6 h-6 text-amber-700 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-lg tracking-wide uppercase text-zinc-50 mb-2">
                {belief.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {belief.description}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
