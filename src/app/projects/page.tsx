import { PageTransition } from "@/components/page-transition";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { DotGrid } from "@/components/dot-grid";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: "Projects | Anurag Tummapudi",
  description: "AI, ML, realtime, and Web3 projects by Anurag Tummapudi.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <DotGrid className="border-t-0" />
      <Section title="Projects" bodyClassName="space-y-7">
        <p className="max-w-[720px] text-[13px] leading-6 text-muted">
          A collection of projects I’ve built, combining AI, development, and
          real-world problem solving.
        </p>
        <div className="grid gap-3.5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>
    </PageTransition>
  );
}
