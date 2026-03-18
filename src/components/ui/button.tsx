"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-widest uppercase transition-colors duration-200 outline-none cursor-pointer select-none disabled:pointer-events-none disabled:opacity-50 min-h-[44px] min-w-[44px] rounded-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
  {
    variants: {
      variant: {
        primary:
          "bg-amber-700 text-zinc-950 px-8 py-4 text-sm hover:bg-amber-600",
        secondary:
          "border border-amber-700/50 text-amber-500 px-8 py-4 text-sm hover:bg-amber-700/10 bg-transparent",
        ghost:
          "text-zinc-400 hover:text-zinc-50 underline underline-offset-4 tracking-normal normal-case font-normal",
        nav: "bg-amber-700 text-zinc-950 px-5 py-2.5 text-xs hover:bg-amber-600",
      },
      size: {
        default: "",
        sm: "px-5 py-2.5 text-xs",
        lg: "px-10 py-5 text-base",
        full: "w-full px-8 py-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * Simple Slot: renders the single child element with merged props/className.
 */
function Slot({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) {
  if (React.isValidElement<Record<string, unknown>>(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      className: cn(className, children.props.className as string),
    });
  }
  return <>{children}</>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));

    if (asChild) {
      return (
        <Slot className={classes} {...(props as React.HTMLAttributes<HTMLElement>)}>
          {props.children}
        </Slot>
      );
    }

    return (
      <button className={classes} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
