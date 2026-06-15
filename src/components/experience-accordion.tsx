"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Experience } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ExperienceAccordion({ items }: { items: Experience[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  return (
    <div className="space-y-2.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const metaParts = Array.from(new Set([item.type, item.location].filter(Boolean)));

        return (
          <div key={item.company} className="overflow-hidden rounded-md border border-edge bg-surface">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-start gap-3 p-3.5 text-left transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/35"
              aria-expanded={isOpen}
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground" />
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[14px] font-semibold leading-5 text-foreground">
                  {item.company}
                </span>
                <span className="block text-[13px] leading-5 text-muted">{item.role}</span>
                <span className="mt-0.5 block text-[11px] leading-5 text-muted">
                  {metaParts.join(" · ")} | {item.period}
                </span>
              </span>
              <ChevronDown
                className={cn(
                  "mt-1 size-4 shrink-0 text-muted transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={reducedMotion ? undefined : { height: "auto", opacity: 1 }}
                  exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="border-t border-edge px-3.5 py-3.5">
                    <ul className="space-y-1.5 pl-4 text-[13px] leading-6 text-muted marker:text-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="list-disc">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
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
