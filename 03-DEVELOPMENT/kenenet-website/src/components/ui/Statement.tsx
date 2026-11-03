import React from "react";
import { cn } from "@/lib/utils";

export interface StatementProps extends React.HTMLAttributes<HTMLParagraphElement> {
  lead: string;
  rest?: string;
}

export const Statement: React.FC<StatementProps> = ({
  lead,
  rest,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        "font-serif text-[clamp(1.625rem,1.25rem+1.5vw,2.5rem)] leading-[1.25] tracking-[-0.01em] max-w-[26em] [text-wrap:pretty]",
        className
      )}
      {...props}
    >
      <span className="text-ink">{lead} </span>
      {rest && <span className="text-ink-600">{rest}</span>}
    </p>
  );
};

