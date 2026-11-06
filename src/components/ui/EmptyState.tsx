import React from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
  };
  icon?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  action,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "p-8 sm:p-12 bg-mist border border-line rounded flex flex-col items-center text-center max-w-xl mx-auto space-y-4",
        className
      )}
    >
      <div className="w-12 h-12 rounded bg-purple-100 flex items-center justify-center text-purple mb-2">
        {icon || (
          <svg
            className="w-6 h-6 stroke-[1.5]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="16" y1="2" x2="16" y2="6" />
          </svg>
        )}
      </div>

      <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal">
        {title}
      </h3>

      <p className="font-sans text-[15px] sm:text-base text-ink-600 leading-relaxed max-w-md">
        {description}
      </p>

      {action && (
        <div className="pt-2">
          <Button variant="secondary" size="sm" href={action.href}>
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
};

