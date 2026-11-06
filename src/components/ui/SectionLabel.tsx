import React from "react";
import { cn } from "@/lib/utils";

export interface SectionLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "h2" | "span";
  /** Optional two-digit section index rendered before the label, e.g. "01". */
  index?: string;
  tone?: "light" | "dark";
  children: React.ReactNode;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  as: Component = "p",
  index,
  tone = "light",
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "inline-flex items-center gap-3 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] sm:text-[14px]",
        tone === "dark" ? "text-orange" : "text-purple",
        className
      )}
      {...props}
    >
      {index && (
        <>
          <span className={cn("tabular", tone === "dark" ? "text-paper/70" : "text-ink-600")} aria-hidden="true">
            {index}
          </span>
          <span className={cn("h-px w-8", tone === "dark" ? "bg-paper/30" : "bg-purple/40")} aria-hidden="true" />
        </>
      )}
      <span>{children}</span>
    </Component>
  );
};
