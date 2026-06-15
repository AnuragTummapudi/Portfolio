import { MapPin } from "lucide-react";
import Image from "next/image";
import avatarImage from "../../anurag-anime.png";
import { GridIntersections } from "@/components/grid-intersections";
import { RotatingRoleText } from "@/components/rotating-role-text";
import { profile } from "@/data/portfolio";

export function HeroProfile() {
  return (
    <section className="site-section relative">
      <GridIntersections />
      <div className="relative flex flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:px-6">
        <div className="avatar-frame">
          <div className="avatar-inner">
            <Image
              src={avatarImage}
              alt="Anurag Tummapudi anime portrait"
              priority
              sizes="116px"
              placeholder="blur"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="flex flex-wrap items-center gap-2 font-mono text-[31px] font-semibold leading-none tracking-[-0.05em] text-foreground sm:text-[33px]">
              <span>{profile.name}</span>
              <VerifiedBadge />
            </h1>
          </div>

          <p className="flex items-center gap-1.5 text-[13px] leading-5 text-muted">
            <RotatingRoleText />
          </p>
          <p className="flex items-center gap-1.5 text-[13px] leading-5 text-muted">
            <span className="size-1.5 rounded-full bg-muted/50" aria-hidden="true" />
            <MapPin className="size-3.5" strokeWidth={1.8} />
            {profile.location}
          </p>
          <p className="max-w-[520px] text-[13px] leading-5 text-muted">
            {profile.focus}
          </p>
        </div>
      </div>
    </section>
  );
}

function VerifiedBadge() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-label="Verified"
      className="size-5 shrink-0 text-info sm:size-6"
      role="img"
    >
      <circle cx="10" cy="10" r="9" fill="currentColor" />
      <path
        d="m6.1 10.4 2.35 2.35 5.45-5.7"
        fill="none"
        stroke="var(--background)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
    </svg>
  );
}
