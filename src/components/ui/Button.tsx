import React from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "brand" | "secondary" | "secondary-dark" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      icon = true,
      loading = false,
      disabled,
      onClick,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Two-tone focus ring (offset + brand ring) stays visible on light AND dark bands.
    const baseStyles =
      "group inline-flex items-center justify-center font-sans font-semibold rounded-lg select-none transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-emphasis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-safe:active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50";

    const sizeStyles = {
      sm: "h-10 px-4 text-[15px] gap-2.5",
      md: "h-12 px-6 text-base gap-2.5",
      lg: "h-14 px-7 text-[17px] gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-orange text-purple-900 shadow-cta hover:shadow-cta-hover active:bg-orange-600 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 focus-visible:ring-purple focus-visible:ring-offset-paper",
      brand:
        "bg-purple text-paper shadow-brand hover:bg-purple-700 hover:shadow-brand-hover active:bg-purple-700 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 focus-visible:ring-purple focus-visible:ring-offset-paper",
      secondary:
        "bg-transparent border border-purple text-purple-700 hover:bg-mist hover:border-purple-700 hover:shadow-lift active:bg-mist motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 focus-visible:ring-purple focus-visible:ring-offset-paper",
      "secondary-dark":
        "bg-transparent border border-paper/40 text-paper hover:border-paper hover:bg-paper/10 active:bg-paper/10 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 focus-visible:ring-orange focus-visible:ring-offset-purple-900",
      link:
        "bg-transparent p-0 h-auto text-purple hover:text-purple-700 underline underline-offset-4 font-normal hover:no-underline focus-visible:ring-purple focus-visible:ring-offset-paper active:scale-100",
    };

    const combinedClassName = cn(
      baseStyles,
      variant !== "link" ? sizeStyles[size] : "",
      variantStyles[variant],
      className
    );

    const iconElement = !loading && icon && (
      <ArrowRight
        className={cn(
          "stroke-[1.5] transition-transform duration-300 ease-emphasis motion-safe:group-hover:translate-x-1.5",
          size === "sm" ? "w-4 h-4" : size === "lg" ? "w-[18px] h-[18px]" : "w-4 h-4"
        )}
        aria-hidden="true"
      />
    );

    const loadingSpinner = loading && (
      <Loader2
        className={cn(
          "animate-spin stroke-[2]",
          size === "sm" ? "w-4 h-4" : size === "lg" ? "w-5 h-5" : "w-4 h-4"
        )}
        aria-hidden="true"
      />
    );

    if (href && !disabled && !loading) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
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
        disabled={disabled || loading}
        onClick={onClick}
        aria-busy={loading ? "true" : undefined}
        {...props}
      >
        {loadingSpinner}
        <span>{children}</span>
        {iconElement}
      </button>
    );
  }
);

Button.displayName = "Button";
