import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

const packages = [
  {
    name: "Kickstart",
    duration: "6 Weeks",
    price: "Get in touch",
    description:
      "For those who want a focused, intensive introduction to performance mindset coaching. Ideal if you have a specific challenge or event coming up.",
    features: [
      "6 x 60-minute coaching sessions",
      "Initial performance assessment",
      "Personalised action plan",
      "Email support between sessions",
      "Session recordings for review",
    ],
    recommended: false,
  },
  {
    name: "Full Programme",
    duration: "12 Weeks",
    price: "Get in touch",
    description:
      "The complete transformation. Enough time to identify, rewire, and embed lasting mental performance habits. This is where real change happens.",
    features: [
      "12 x 60-minute coaching sessions",
      "Deep performance assessment",
      "Personalised action plan",
      "Priority email & voice note support",
      "Session recordings for review",
      "Mid-programme progress review",
      "Post-programme maintenance plan",
    ],
    recommended: true,
  },
];

export function PackagesSection() {
  return (
    <SectionWrapper alternate>
      <SectionHeader
        eyebrow="Investment"
        headline="Choose your programme"
        description="Both programmes follow The Edge Method. Choose based on the depth of change you're after."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {packages.map((pkg, i) => (
          <AnimateOnScroll key={pkg.name} delay={i * 0.1}>
            <div
              className={`relative border p-8 md:p-10 h-full flex flex-col ${
                pkg.recommended
                  ? "bg-gradient-to-b from-zinc-900 to-zinc-950 border-amber-700/50"
                  : "bg-zinc-900 border-zinc-800"
              }`}
            >
              {pkg.recommended && (
                <span className="absolute -top-3 left-8 bg-amber-700 text-zinc-950 px-4 py-1 text-xs font-semibold tracking-widest uppercase">
                  Recommended
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl tracking-wide uppercase text-zinc-50">
                  {pkg.name}
                </h3>
                <p className="text-amber-500 font-display text-lg tracking-wide mt-1">
                  {pkg.duration}
                </p>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-6">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <CheckCircle
                      className="w-4 h-4 text-amber-700 mt-0.5 shrink-0"
                      strokeWidth={1.5}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.recommended ? "primary" : "secondary"}
                size="full"
                asChild
              >
                <Link href="#booking" className="gap-2">
                  {pkg.price === "Get in touch"
                    ? "BOOK YOUR FREE CALL"
                    : `GET STARTED — ${pkg.price}`}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
