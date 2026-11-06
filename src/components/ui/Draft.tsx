import React from "react";
import { showDrafts } from "@/lib/content-status";
import { cn } from "@/lib/utils";

interface DraftProps {
  /** Short reason this block is not yet publishable. */
  label?: string;
  className?: string;
  children: React.ReactNode;
}

/** Wraps unverified copy. Hidden in production; marked on previews. */
export const Draft: React.FC<DraftProps> = ({
  label = "Draft — pending client verification",
  className,
  children,
}) => {
  if (!showDrafts()) return null;
  return (
    <div
      className={cn(
        "relative rounded border border-dashed border-purple/50 bg-purple-100/30 p-5 pt-8",
        className
      )}
      data-draft="true"
    >
      <span className="absolute left-3 top-2 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-purple-700">
        {label}
      </span>
      {children}
    </div>
  );
};

interface SlotProps {
  /** What content belongs here. */
  label: string;
  /** Which client confirmation unlocks it (e.g. "E-09 · G1"). */
  gate: string;
  className?: string;
}

/** Placeholder for content that does not exist yet. Hidden in production. */
export const ContentSlot: React.FC<SlotProps> = ({ label, gate, className }) => {
  if (!showDrafts()) return null;
  return (
    <div
      className={cn(
        "rounded border border-dashed border-ink-400/70 p-5 font-sans text-[14px] text-ink-600",
        className
      )}
      data-slot="true"
    >
      <span className="font-semibold text-ink">Awaiting verified content:</span> {label}{" "}
      <span className="whitespace-nowrap text-ink-400">({gate})</span>
    </div>
  );
};
