import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ArrowLinkProps {
  href: string;
  tone?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
}

/** Text link with an animated underline and a circular arrow affordance. */
export const ArrowLink: React.FC<ArrowLinkProps> = ({ href, tone = "light", className, children }) => {
  const dark = tone === "dark";
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded font-sans text-[16px] font-semibold transition-colors",
        dark ? "text-paper hover:text-orange" : "text-purple-700 hover:text-purple",
        className
      )}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className={cn(
            "absolute -bottom-0.5 left-0 h-px w-full transition-colors duration-300",
            dark ? "bg-paper/40 group-hover:bg-orange" : "bg-purple/30 group-hover:bg-purple"
          )}
        />
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full border transition-[background-color,border-color,color,transform] duration-500 ease-emphasis motion-safe:group-hover:translate-x-1",
          dark
            ? "border-paper/30 group-hover:border-orange group-hover:bg-orange group-hover:text-purple-900"
            : "border-purple/30 group-hover:border-purple group-hover:bg-purple group-hover:text-paper"
        )}
      >
        <ArrowRight className="h-4 w-4 stroke-[1.75]" />
      </span>
    </Link>
  );
};
