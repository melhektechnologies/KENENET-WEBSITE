import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
  /** Rendered width in CSS pixels, used for sizing and Next.js sizes attribute. */
  width: number;
  alt?: string;
}

/**
 * Official Kenenét Consultancy brand logo.
 * Displays the complete verified artwork (brand mark, company wordmark, and tagline)
 * with zero cropping and perfect optical alignment.
 * Natural source dimensions: 720 × 320 (aspect ratio 2.25:1).
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className,
  priority,
  width,
  alt = "Kenenét Consultancy",
}) => {
  const height = Math.round(width * (320 / 720));

  return (
    <span
      className={cn("relative inline-block aspect-[720/320]", className)}
      style={{ width, height }}
    >
      <Image
        src="/logo/kenenet-logo-720.png"
        alt={alt}
        width={720}
        height={320}
        priority={priority}
        sizes={`${width}px`}
        className="h-full w-full object-contain object-left"
      />
    </span>
  );
};
