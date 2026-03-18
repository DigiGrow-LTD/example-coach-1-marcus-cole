import { cn } from "@/lib/utils";
import { NoiseOverlay } from "./noise-overlay";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alternate?: boolean;
  noise?: boolean;
  fullBleed?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  alternate = false,
  noise = false,
  fullBleed = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-24 lg:py-32",
        alternate ? "bg-zinc-900" : "bg-zinc-950",
        className
      )}
    >
      {noise && <NoiseOverlay />}
      <div
        className={cn(
          "relative z-10",
          !fullBleed && "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        )}
      >
        {children}
      </div>
    </section>
  );
}
