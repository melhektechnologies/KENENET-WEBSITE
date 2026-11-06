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
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, triggerRef }) => {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) triggerRef.current?.focus();
    wasOpenRef.current = isOpen;
  }, [isOpen, triggerRef]);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [{ label: "Home", href: "/" }, ...siteConfig.nav, { label: "Contact Us", href: "/contact" }];

  return (
    <div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="animate-menu-in fixed inset-x-0 bottom-0 top-[72px] z-30 flex flex-col justify-between overflow-y-auto bg-paper/95 px-5 pb-8 pt-4 backdrop-blur-2xl sm:px-8 lg:hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-field" />

      <nav aria-label="Mobile">
        <ul className="flex flex-col divide-y divide-line">
          {links.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group flex items-baseline gap-4 py-5 font-serif text-[1.75rem] leading-none transition-colors",
                    isActive ? "text-purple" : "text-ink hover:text-purple-700"
                  )}
                >
                  <span
                    className={cn(
                      "tabular w-6 font-sans text-[12px] font-semibold tracking-[0.12em]",
                      isActive ? "text-purple" : "text-ink-600"
                    )}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={cn(isActive && "italic")}>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

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
        <p className="mt-5 text-center font-sans text-[13px] text-ink-600">{siteConfig.tagline}</p>
      </div>
    </div>
  );
};
