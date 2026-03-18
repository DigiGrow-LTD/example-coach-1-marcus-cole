import { CheckCircle, X } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

const forYou = [
  "You're talented but underperforming when it matters",
  "You overthink, second-guess, or play safe under pressure",
  "You want practical tools, not motivational fluff",
  "You're willing to be honest about what's not working",
  "You'll commit to the work between sessions",
];

const notForYou = [
  "You want someone to just tell you everything will be fine",
  "You're looking for a magic fix without putting in the effort",
  "You're not ready to be challenged or uncomfortable",
  "You want therapy or clinical mental health support",
];

export function WhoItsForSection() {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow="Is This Right For You?"
        headline="Honest expectations"
        description="This coaching works — but only if you're the right fit. Here's how to know."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <AnimateOnScroll>
          <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="font-display text-lg tracking-wide uppercase text-zinc-50 mb-6">
              This is for you if...
            </h3>
            <ul className="space-y-4">
              {forYou.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-zinc-300"
                >
                  <CheckCircle
                    className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
            <h3 className="font-display text-lg tracking-wide uppercase text-zinc-50 mb-6">
              This isn&apos;t for you if...
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-zinc-400"
                >
                  <X
                    className="w-5 h-5 text-red-500 mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
