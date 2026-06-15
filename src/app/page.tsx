import Link from "next/link";
import { Quote } from "lucide-react";
import { AchievementCard } from "@/components/achievement-card";
import { DotGrid } from "@/components/dot-grid";
import { ExperienceAccordion } from "@/components/experience-accordion";
import { GridIntersections } from "@/components/grid-intersections";
import { GithubActivity } from "@/components/github-activity";
import { HeroProfile } from "@/components/hero-profile";
import { PageTransition } from "@/components/page-transition";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SkillsSection } from "@/components/skills-section";
import { SocialButton } from "@/components/social-button";
import { StripeSeparator } from "@/components/stripe-separator";
import {
  achievements,
  experiences,
  projects,
  socialLinks,
  volunteering,
} from "@/data/portfolio";

export default function Home() {
  return (
    <PageTransition>
      <DotGrid className="border-t-0" />
      <HeroProfile />
      <StripeSeparator />

      <Section id="experience" title="Experience">
        <ExperienceAccordion items={experiences} />
      </Section>
      <StripeSeparator />

      <Section id="projects" title="Projects">
        <div className="grid gap-3.5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-7 text-center">
          <Link className="text-[13px] font-semibold text-muted transition-colors hover:text-foreground" href="/projects">
            View project archive →
          </Link>
        </div>
      </Section>
      <StripeSeparator />

      <Section id="skills" title="Skills & Tools">
        <SkillsSection />
      </Section>
      <StripeSeparator />

      <Section id="achievements" title="Achievements">
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </Section>
      <StripeSeparator />

      <Section id="volunteering" title="Volunteering">
        <div className="space-y-3">
          {volunteering.map((item) => (
            <article
              key={item.organization}
              className="rounded-md border border-edge bg-surface p-3.5"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-mono text-[14px] font-semibold leading-5 text-foreground">
                    {item.organization}
                  </h3>
                  <p className="text-[13px] leading-5 text-muted">{item.role}</p>
                </div>
              </div>
              <p className="mt-3 text-[13px] leading-6 text-muted">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <StripeSeparator />

      <Section id="github-activity" title="GitHub Activity" bodyClassName="py-5 sm:py-6">
        <GithubActivity />
      </Section>
      <StripeSeparator />

      <Section id="connect" title="Connect" bodyClassName="py-5 sm:py-6">
        <div className="flex flex-wrap items-center gap-2.5">
          {socialLinks.map((social) => (
            <SocialButton key={social.label} social={social} />
          ))}
        </div>
      </Section>
      <StripeSeparator />

      <section className="site-section relative flex flex-col items-center justify-center px-6 py-12 text-center sm:py-14">
        <GridIntersections />
        <Quote className="mb-5 size-8 fill-current text-muted/45" strokeWidth={1.5} />
        <blockquote className="max-w-2xl text-lg font-semibold italic leading-relaxed text-foreground sm:text-xl">
          “Obsession with the craft creates excellence”
        </blockquote>
      </section>
      <StripeSeparator />
    </PageTransition>
  );
}
