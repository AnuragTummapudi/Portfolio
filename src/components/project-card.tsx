"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion();
  const hasLiveLink = Boolean(project.links.live);
  const hasGithubLink = Boolean(project.links.github);

  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-md border border-edge bg-surface transition-colors hover:border-strong"
    >
      <div className="space-y-3 p-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 space-y-1">
            <h3 className="font-mono text-[15px] font-semibold leading-tight text-foreground">
              {project.title}
            </h3>
            <p className="text-[12px] leading-5 text-muted">{project.subtitle}</p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1">
            <span className="pt-0.5 text-[11px] tabular-nums text-muted">{project.date}</span>
            <span className="rounded-full border border-edge bg-surface-2 px-2 py-0.5 text-[10px] font-semibold text-muted">
              {project.badge}
            </span>
          </div>
        </div>
        <p className="text-[13px] leading-6 text-muted">{project.description}</p>
        {project.highlights?.length ? (
          <ul className="space-y-1 pl-4 text-[12px] leading-5 text-muted marker:text-foreground">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="list-disc">
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="dotted-divider" aria-hidden="true" />
        <div className="flex items-center justify-center gap-4 text-[13px] font-semibold">
          {hasLiveLink ? (
            <Link
              href={project.links.live!}
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="size-3" />
              Live
            </Link>
          ) : null}
          {hasLiveLink && hasGithubLink ? (
            <span className="text-edge" aria-hidden="true">
              /
            </span>
          ) : null}
          {hasGithubLink ? (
            <Link
              href={project.links.github!}
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="size-3" />
              GitHub
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
