import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] bg-paper">
      {/* Top indeterminate progress bar */}
      <div className="w-full h-1 bg-purple/10 overflow-hidden">
        <div className="h-full bg-purple w-1/3 animate-pulse" />
      </div>

      <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-24 space-y-12">
        {/* Opener skeleton */}
        <div className="space-y-4 max-w-2xl">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
        </div>

        {/* Content grid skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 border-t border-line">
          <div className="lg:col-span-4 space-y-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-8 w-48" />
          </div>
          <div className="lg:col-span-8 space-y-6">
            <Skeleton className="h-32 w-full rounded" />
            <Skeleton className="h-24 w-full rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

