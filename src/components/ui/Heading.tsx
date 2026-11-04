import React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  variant?: "display-xl" | "display-lg" | "heading-xl" | "heading-md";
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = "h2",
  variant = "heading-xl",
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    "display-xl":
      "font-serif text-[clamp(2.75rem,1.83rem+4.5vw,5.75rem)] leading-[0.98] tracking-[-0.02em] font-normal",
    "display-lg":
      "font-serif text-[clamp(2.25rem,1.83rem+2.5vw,4.25rem)] leading-[1.04] tracking-[-0.02em] font-normal",
    "heading-xl":
      "font-serif text-[clamp(1.85rem,1.67rem+1.2vw,2.75rem)] leading-[1.14] tracking-[-0.015em] font-normal",
    "heading-md":
      "font-serif text-[clamp(1.35rem,1.25rem+0.5vw,1.75rem)] leading-[1.25] tracking-[-0.005em] font-medium",
  };

  return (
    <Component
      className={cn(variantStyles[variant], "text-ink [text-wrap:balance]", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

