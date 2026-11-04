import React from "react";
import { cn } from "@/lib/utils";

export interface SectionLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "h2" | "span";
  children: React.ReactNode;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  as: Component = "p",
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "font-sans text-[14px] font-semibold tracking-[0.12em] uppercase text-purple",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

