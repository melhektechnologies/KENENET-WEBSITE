import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("skeleton-shimmer rounded bg-mist", className)}
      aria-hidden="true"
      {...props}
    />
  );
};

export const CardSkeleton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        "p-6 sm:p-8 bg-paper border border-line rounded flex flex-col justify-between space-y-4",
        className
      )}
      aria-hidden="true"
    >
      <div className="space-y-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="pt-4 flex items-center justify-between border-t border-line/60">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
    </div>
  );
};

export const ConsultationFormSkeleton: React.FC = () => {
  return (
    <div
      className="space-y-6 max-w-2xl bg-paper/60 p-6 sm:p-8 border border-line/70 rounded"
      aria-label="Loading consultation form"
      role="status"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-purple/40 animate-pulse" />
        <Skeleton className="h-4 w-40" />
      </div>

      {/* Row 1: Name & Org */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>

      {/* Interest */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-12 w-full" />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-3 w-40" />
        </div>
        <Skeleton className="h-36 w-full" />
      </div>

      {/* Consent & Submit */}
      <div className="flex items-center gap-3 pt-2">
        <Skeleton className="h-5 w-5 rounded" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      <div className="pt-2">
        <Skeleton className="h-14 w-48 rounded" />
      </div>
    </div>
  );
};

