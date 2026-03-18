import ExportedImage, { type ExportedImageProps } from "next-image-export-optimizer";
import { cn } from "@/lib/utils";

interface BrandImageProps extends Omit<ExportedImageProps, "className"> {
  className?: string;
}

export function BrandImage({ className, alt, ...props }: BrandImageProps) {
  return (
    <ExportedImage
      alt={alt}
      className={cn(
        "saturate-[0.8] contrast-[1.1] brightness-[0.9]",
        className
      )}
      {...props}
    />
  );
}
