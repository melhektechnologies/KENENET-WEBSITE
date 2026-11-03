"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "@/lib/../components/ui/Button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 top-16 z-40 bg-paper px-6 py-8 flex flex-col justify-between overflow-y-auto lg:hidden animate-in fade-in duration-200"
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex flex-col divide-y divide-line">
        <Link
          href="/"
          onClick={onClose}
          className={cn(
            "font-serif text-2xl py-4 transition-colors",
            pathname === "/" ? "text-purple font-semibold" : "text-ink hover:text-purple-700"
          )}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Home
        </Link>
        {siteConfig.nav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "font-serif text-2xl py-4 transition-colors",
                isActive ? "text-purple font-semibold" : "text-ink hover:text-purple-700"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          onClick={onClose}
          className={cn(
            "font-serif text-2xl py-4 transition-colors",
            pathname === "/contact" ? "text-purple font-semibold" : "text-ink hover:text-purple-700"
          )}
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Contact Us
        </Link>
      </div>

      <div className="pt-8">
        <Button
          variant="primary"
          size="lg"
          href={siteConfig.headerCta.href}
          onClick={onClose}
          className="w-full justify-between"
        >
          {siteConfig.headerCta.label}
        </Button>
      </div>
    </div>
  );
};

