import { cn } from "@/lib/utils";
import { GridIntersections } from "@/components/grid-intersections";

export function DotGrid({ className }: { className?: string }) {
  return (
    <div className={cn("site-section select-none p-5", className)} aria-hidden="true">
      <GridIntersections />
      <div className="dot-grid h-20 w-full sm:h-[96px]" />
    </div>
  );
}
