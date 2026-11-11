"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Achievement } from "@/data/portfolio";

export function AchievementCard({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.32, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-3 border-b border-edge px-0 py-3.5 first:border-t sm:grid-cols-[auto_1fr_auto] sm:items-start"
    >
      <span className="mt-2 hidden size-1.5 rounded-full bg-foreground sm:block" />
      <div className="space-y-1">
        <h3 className="font-mono text-[14px] font-semibold leading-5 text-foreground">
          {achievement.title}
        </h3>
        <p className="text-[13px] leading-6 text-muted">{achievement.description}</p>
        {achievement.prize ? (
          <span className="inline-flex rounded-full border border-edge px-2 py-0.5 text-[11px] font-semibold text-muted">
            {achievement.prize}
          </span>
        ) : null}
      </div>
      <span className="w-fit rounded-full border border-edge px-2 py-0.5 text-[11px] tabular-nums text-muted">
        {achievement.year}
      </span>
    </motion.article>
  );
}
