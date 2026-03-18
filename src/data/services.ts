import { Target, Brain, Trophy } from "lucide-react";

export const services = [
  {
    icon: Target,
    title: "Performance Clarity",
    description:
      "Cut through the noise and identify exactly what's holding you back. We pinpoint the mental barriers between where you are and where you want to be.",
    features: [
      "Deep-dive performance assessment",
      "Mental barrier identification",
      "Personalised action roadmap",
    ],
  },
  {
    icon: Brain,
    title: "Mindset Rewiring",
    description:
      "Replace the patterns that sabotage you with ones that serve you. Practical techniques you can use under pressure — not just theory.",
    features: [
      "Pressure performance training",
      "Self-talk restructuring",
      "Pre-performance routines",
    ],
  },
  {
    icon: Trophy,
    title: "Sustained Results",
    description:
      "Build the habits and accountability structures that make your progress permanent. This isn't a quick fix — it's a lasting edge.",
    features: [
      "Weekly accountability check-ins",
      "Progress tracking system",
      "Long-term maintenance plan",
    ],
  },
] as const;
