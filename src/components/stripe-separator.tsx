import { cn } from "@/lib/utils";
import { GridIntersections } from "@/components/grid-intersections";

export function StripeSeparator({ className }: { className?: string }) {
  return (
    <div
      className={cn("site-section stripe-band h-6 sm:h-7", className)}
      aria-hidden="true"
    >
      <GridIntersections />
    </div>
  );
}
