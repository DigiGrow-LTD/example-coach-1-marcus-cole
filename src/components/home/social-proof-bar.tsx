import { Trophy, Target, Brain, CheckCircle } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

const stats = [
  { icon: Trophy, label: "50+ Athletes Coached" },
  { icon: Target, label: "Ex Semi-Pro Rugby" },
  { icon: Brain, label: "Certified Mindset Coach" },
  { icon: CheckCircle, label: "Manchester Based" },
];

export function SocialProofBar() {
  return (
    <section className="relative bg-zinc-900 border-y border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 justify-center"
              >
                <stat.icon
                  className="w-5 h-5 text-amber-700 shrink-0"
                  strokeWidth={1.5}
                />
                <span className="text-xs md:text-sm font-medium tracking-[0.05em] text-zinc-400 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
