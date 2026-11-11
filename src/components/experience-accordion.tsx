"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { Experience } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ExperienceAccordion({ items }: { items: Experience[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  return (
    <div className="space-y-2.5">
      {items.map((item, index) => {
        const hasDetails = Boolean(item.bullets.length || item.tags.length || item.roles?.length);
        const isOpen = hasDetails && openIndex === index;
        const isCurrent = item.period.includes("Present");
        const metaParts = Array.from(new Set([item.type, item.location].filter(Boolean)));

        return (
          <div key={item.company} className="overflow-hidden rounded-md border border-edge bg-surface">
            <button
              type="button"
              disabled={!hasDetails}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-start gap-3 p-3.5 text-left transition-colors enabled:hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/35"
              aria-expanded={hasDetails ? isOpen : undefined}
            >
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt=""
                  width={36}
                  height={36}
                  className="size-9 shrink-0 rounded-md border border-edge bg-white object-contain"
                />
              ) : (
                <span className="flex size-9 shrink-0 items-center justify-center">
                  <span className="size-1.5 rounded-full bg-foreground" />
                </span>
              )}
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[14px] font-semibold leading-5 text-foreground">
                  {item.company}
                </span>
                <span className="block text-[13px] leading-5 text-muted">{item.role}</span>
                <span className="mt-0.5 block text-[11px] leading-5 text-muted">
                  {metaParts.join(" · ")} | {item.period}
                </span>
              </span>
              {isCurrent ? (
                <span className="mt-0.5 shrink-0 rounded-md border border-edge bg-surface-2 px-2 py-0.5 text-[11px] font-semibold text-muted">
                  Present
                </span>
              ) : null}
              {hasDetails ? (
                <ChevronDown
                  className={cn(
                    "mt-1 size-4 shrink-0 text-muted transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              ) : null}
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={reducedMotion ? undefined : { height: "auto", opacity: 1 }}
                  exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="space-y-3 border-t border-edge px-3.5 py-3.5">
                    {item.roles?.length ? (
                      <ol className="space-y-3 border-l border-edge pl-4" aria-label="Roles">
                        {item.roles.map((role) => (
                          <li key={role.title} className="relative">
                            <span className="absolute -left-[19.5px] top-1.5 size-2 rounded-full bg-muted" aria-hidden="true" />
                            <p className="text-[13px] font-semibold leading-5 text-foreground">{role.title}</p>
                            <p className="text-[11px] leading-5 text-muted">
                              {role.meta ? `${role.meta} | ` : null}
                              {role.period}
                            </p>
                          </li>
                        ))}
                      </ol>
                    ) : null}
                    {item.bullets.length ? (
                      <ul className="space-y-1.5 pl-4 text-[13px] leading-6 text-muted marker:text-foreground">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="list-disc">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {item.tags.length ? (
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
