import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface BrandImageProps extends Omit<ImageProps, "className"> {
  className?: string;
}

export function BrandImage({ className, alt, ...props }: BrandImageProps) {
  return (
    <Image
      alt={alt}
      className={cn(
        "saturate-[0.8] contrast-[1.1] brightness-[0.9]",
        className
      )}
      {...props}
    />
  );
}
