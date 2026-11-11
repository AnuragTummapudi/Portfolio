import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { iconForTag, SkillIcon } from "@/components/skill-icon";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const { live, github } = project.links;
  const [from, to] = project.accent;

  return (
    <article className="group flex flex-col gap-4 border border-dashed border-edge p-3.5 sm:p-4">
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-xl"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <div className="absolute left-[12%] top-[16%] h-full w-full overflow-hidden rounded-tl-lg bg-surface shadow-2xl shadow-black/40 ring-1 ring-black/10 transition-transform duration-500 ease-out motion-safe:group-hover:-translate-x-1 motion-safe:group-hover:-translate-y-1">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              width={2880}
              height={1374}
              sizes="(min-width: 768px) 420px, 90vw"
              className="h-full w-full object-cover object-left-top"
            />
          ) : (
            <PreviewPlaceholder project={project} />
          )}
        </div>

        {project.badge ? (
          <span className="absolute -right-14 top-7 w-56 rotate-45 border-y border-dashed border-black/40 bg-[#ffd43b] py-1 text-center text-[10px] font-semibold text-black shadow-md">
            {project.badge}
          </span>
        ) : null}
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 space-y-1">
          <h3 className="font-mono text-[18px] font-semibold leading-tight text-foreground">
            {project.title}
          </h3>
          <p className="text-[12px] leading-5 text-foreground/65">{project.subtitle}</p>
        </div>
        {live ? (
          <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 text-[12px] text-muted">
            <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Live
          </span>
        ) : null}
      </div>

      <p className="text-[13px] leading-6 text-foreground/80">{project.description}</p>

      <div className="mt-auto flex items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.tags.map((tag) => (
            <li
              key={tag}
              title={tag}
              className="inline-flex size-8 items-center justify-center rounded-md border border-edge bg-surface-2"
            >
              <SkillIcon icon={iconForTag(tag)} className="size-4 text-foreground/80" />
              <span className="sr-only">{tag}</span>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-1">
          {live ? (
            <IconLink href={live} label={`${project.title} website`}>
              <Globe className="size-4" strokeWidth={1.8} />
            </IconLink>
          ) : null}
          {github ? (
            <IconLink href={github} label={`${project.title} on GitHub`}>
              <FaGithub className="size-4" />
            </IconLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex size-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
    >
      {children}
    </Link>
  );
}

// Used when a project has no live site to screenshot.
function PreviewPlaceholder({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="size-2 rounded-full bg-edge" />
        <span className="size-2 rounded-full bg-edge" />
        <span className="size-2 rounded-full bg-edge" />
      </div>
      <p className="pt-4 font-mono text-[22px] font-semibold leading-tight tracking-tight text-foreground">
        {project.title}
      </p>
      <p className="max-w-[70%] text-[11px] leading-4 text-muted">{project.subtitle}</p>
    </div>
  );
}
