"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export const SiteHeader: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 w-full border-b transition-[height,background-color,box-shadow,border-color] duration-300 ease-emphasis",
          isScrolled
            ? "h-16 border-line bg-paper/95 supports-[backdrop-filter]:bg-paper/75 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_24px_-14px_rgba(43,18,54,0.18)]"
            : "h-20 border-transparent bg-paper"
        )}
      >
        <div className="max-w-[1336px] mx-auto h-full px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 relative py-2"
            aria-label="Kenenét Consultancy"
          >
            <div className={cn("relative transition-all duration-200", isScrolled ? "h-9 w-28" : "h-11 w-36")}>
              <Image
                src="/logo/kenenet_consultancy_logo_transparent.png"
                alt="Kenenét Consultancy"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 768px) 120px, 160px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-10">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[16px] font-sans font-medium transition-colors relative py-1",
                    isActive
                      ? "text-purple"
                      : "text-ink hover:text-purple-700"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button (Purple solid) */}
          <div className="hidden lg:flex items-center">
            <Button variant="brand" size="sm" href={siteConfig.headerCta.href}>
              {siteConfig.headerCta.label}
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="lg:hidden w-11 h-11 flex items-center justify-center text-ink hover:text-purple rounded focus-visible:outline-2 focus-visible:outline-purple"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.75]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.75]" />
            )}
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isScrolled={isScrolled}
      />
    </>
  );
};

