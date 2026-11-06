"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isScrolled?: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, isScrolled = false }) => {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock body scroll
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

  // Trap focus and handle Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && panelRef.current) {
        const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus first link on open
  useEffect(() => {
    if (isOpen && panelRef.current) {
      const firstLink = panelRef.current.querySelector<HTMLElement>("a");
      firstLink?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className={cn(
        "fixed inset-0 z-40 bg-paper px-6 py-8 flex flex-col justify-between overflow-y-auto lg:hidden animate-in fade-in slide-in-from-top-2 duration-200 transition-[top]",
        isScrolled ? "top-16" : "top-20"
      )}
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
            "font-serif text-2xl py-4 transition-colors flex items-center",
            pathname === "/"
              ? "text-purple font-semibold border-l-2 border-purple pl-3 -ml-3"
              : "text-ink hover:text-purple-700"
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
                "font-serif text-2xl py-4 transition-colors flex items-center",
                isActive
                  ? "text-purple font-semibold border-l-2 border-purple pl-3 -ml-3"
                  : "text-ink hover:text-purple-700"
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
            "font-serif text-2xl py-4 transition-colors flex items-center",
            pathname === "/contact"
              ? "text-purple font-semibold border-l-2 border-purple pl-3 -ml-3"
              : "text-ink hover:text-purple-700"
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
