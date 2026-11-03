import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "brand" | "secondary" | "secondary-dark" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      icon = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group inline-flex items-center justify-center font-sans font-semibold rounded transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2";

    const sizeStyles = {
      sm: "h-10 px-4 text-[15px] gap-2.5",
      md: "h-12 px-6 text-base gap-2.5",
      lg: "h-14 px-7 text-[17px] gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-orange text-purple-900 hover:bg-orange-600 focus-visible:outline-purple active:bg-orange-600",
      brand:
        "bg-purple text-paper hover:bg-purple-700 focus-visible:outline-purple active:bg-purple-700",
      secondary:
        "bg-transparent border border-purple text-purple-700 hover:bg-mist focus-visible:outline-purple active:bg-mist",
      "secondary-dark":
        "bg-transparent border border-paper/40 text-paper hover:border-paper hover:bg-paper/10 focus-visible:outline-orange active:bg-paper/10",
      link:
        "bg-transparent p-0 h-auto text-purple hover:text-purple-700 underline underline-offset-4 font-normal hover:no-underline focus-visible:outline-purple",
    };

    const combinedClassName = cn(
      baseStyles,
      variant !== "link" ? sizeStyles[size] : "",
      variantStyles[variant],
      className
    );

    const iconElement = icon && (
      <ArrowRight
        className={cn(
          "stroke-[1.5] transition-transform duration-150 group-hover:translate-x-1",
          size === "sm" ? "w-4 h-4" : size === "lg" ? "w-[18px] h-[18px]" : "w-4 h-4"
        )}
        aria-hidden="true"
      />
    );

    if (href) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          <span>{children}</span>
          {iconElement}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...props}
      >
        <span>{children}</span>
        {iconElement}
      </button>
    );
  }
);

Button.displayName = "Button";

