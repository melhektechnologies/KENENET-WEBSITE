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
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const elevated = isScrolled || mobileMenuOpen;

  return (
    <>
      {/* Constant 72px height: only the surface changes on scroll, so content and the mobile menu never jump. */}
      <header
        className={cn(
          "sticky top-0 z-40 h-[72px] w-full border-b transition-[background-color,box-shadow,border-color] duration-500 ease-emphasis",
          elevated
            ? "border-line/80 bg-paper/90 shadow-[0_10px_30px_-18px_rgba(43,18,54,0.28)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-paper/70"
            : "border-transparent bg-paper/0"
        )}
      >
        <div className="mx-auto flex h-full max-w-[1336px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="relative -m-2 flex items-center rounded p-2"
            aria-label="Kenenét Consultancy — Home"
          >
            <span className="relative block h-10 w-[132px] sm:h-11 sm:w-[146px]">
              <Image
                src="/logo/kenenet-logo-720.png"
                alt=""
                fill
                priority
                className="object-contain object-left"
                sizes="146px"
              />
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center lg:flex">
            <ul className="flex items-center gap-1 rounded-full border border-line/70 bg-paper/60 p-1 backdrop-blur-md">
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative inline-flex h-10 items-center rounded-full px-5 font-sans text-[15px] font-medium transition-colors duration-300",
                        isActive
                          ? "bg-purple-100 text-purple-700"
                          : "text-ink hover:bg-mist hover:text-purple-700"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center lg:flex">
            <Button variant="brand" size="sm" href={siteConfig.headerCta.href}>
              {siteConfig.headerCta.label}
            </Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper/70 text-ink backdrop-blur-md transition-colors hover:border-purple/40 hover:text-purple lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
