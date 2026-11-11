import { SkillIcon } from "@/components/skill-icon";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <div className="grid gap-3.5 md:grid-cols-2">
      {skillGroups.map((group) => (
        <article
          key={group.title}
          className="rounded-md border border-edge bg-surface p-3.5"
        >
          <h3 className="font-mono text-[14px] font-semibold text-foreground">
            {group.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {group.skills.map((skill) => {
              return (
                <span key={skill.name} className="tag gap-1.5">
                  <SkillIcon icon={skill.icon} className="size-3.5 shrink-0" />
                  {skill.name}
                </span>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
