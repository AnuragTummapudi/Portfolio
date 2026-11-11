import { cn } from "@/lib/utils";
import { GridIntersections } from "@/components/grid-intersections";

type SectionProps = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  action?: React.ReactNode;
};

export function Section({
  id,
  title,
  children,
  className,
  bodyClassName,
  action,
}: SectionProps) {
  return (
    <section id={id} className={cn("site-section section-grid", className)}>
      <GridIntersections />
      {title ? (
        <header className="flex items-center justify-between gap-4 border-b border-edge px-5 sm:px-6">
          <h2 className="py-3 font-mono text-[28px] font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-[30px]">
            {title}
          </h2>
          {action}
        </header>
      ) : null}
      <div className={cn("px-5 py-5 sm:px-6 sm:py-6", bodyClassName)}>{children}</div>
    </section>
  );
}
