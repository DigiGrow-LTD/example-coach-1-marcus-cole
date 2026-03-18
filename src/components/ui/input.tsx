import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full bg-zinc-800 border border-zinc-700 text-zinc-50 placeholder:text-zinc-500 px-4 py-3.5 text-base rounded-none outline-none transition-colors duration-200 focus:border-amber-700 focus:ring-1 focus:ring-amber-700/50 disabled:pointer-events-none disabled:opacity-50 min-h-[44px]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
