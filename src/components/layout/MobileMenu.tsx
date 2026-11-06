"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactDetails, siteConfig } from "@/data/site";
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

  return (
    <div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="animate-menu-in fixed inset-x-0 bottom-0 top-[72px] z-30 flex flex-col justify-between overflow-y-auto bg-paper px-5 pb-8 pt-4 sm:px-8 xl:hidden"
    >
      <nav aria-label="Mobile">
        <ul className="flex flex-col divide-y divide-line">
          {siteConfig.nav.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-baseline gap-4 py-5 font-serif text-[1.75rem] leading-none transition-colors",
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
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="space-y-5 pt-8">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={contactDetails.phoneHref}
            className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line font-sans text-[15px] font-semibold text-ink"
          >
            <Phone className="h-4 w-4 stroke-[1.75]" aria-hidden="true" />
            Call
          </a>
          <a
            href={contactDetails.emailHref}
            className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line font-sans text-[15px] font-semibold text-ink"
          >
            <Mail className="h-4 w-4 stroke-[1.75]" aria-hidden="true" />
            Email
          </a>
        </div>
        <Button variant="primary" size="lg" href={siteConfig.headerCta.href} onClick={onClose} className="w-full justify-between">
          {siteConfig.headerCta.label}
        </Button>
        <p className="text-center font-sans text-[13px] text-ink-600">{siteConfig.tagline}</p>
      </div>
    </div>
  );
};
