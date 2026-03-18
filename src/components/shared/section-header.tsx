import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  headline,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <p className="text-amber-700 font-semibold text-xs tracking-[0.2em] uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide uppercase leading-none text-zinc-50">
        {headline}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
