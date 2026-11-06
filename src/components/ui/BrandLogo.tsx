import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
  /** Rendered width in CSS pixels, used for `sizes`. */
  width: number;
  alt?: string;
}

/**
 * The original logo artwork prints the retired tagline "A fertile ground for
 * growth!" beneath the wordmark. Until a tagline-free file is supplied, the
 * frame crops that line off visually; the artwork itself is not altered.
 * Source is 720×324; the wordmark occupies the top 280px.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ className, priority, width, alt = "Kenenét Consultancy" }) => (
  <span className={cn("relative block aspect-[720/280] overflow-hidden", className)} style={{ width }}>
    <Image
      src="/logo/kenenet-logo-720.png"
      alt={alt}
      width={720}
      height={324}
      priority={priority}
      sizes={`${width}px`}
      className="absolute left-0 top-0 h-auto w-full max-w-none"
    />
  </span>
);
