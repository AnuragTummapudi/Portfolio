"use client";

import dynamic from "next/dynamic";
import type { Activity } from "react-github-calendar";
import { githubUsername } from "@/data/portfolio";

const calendarTheme = {
  light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((module) => module.GitHubCalendar),
  {
    ssr: false,
    loading: CalendarSkeleton,
  },
);

export function GithubActivity() {
  return (
    <div className="heatmap-scroll overflow-x-auto pb-2">
      <GitHubCalendar
        username={githubUsername}
        colorScheme="dark"
        theme={calendarTheme}
        transformData={emphasizeContributionLevels}
        blockSize={11}
        blockMargin={4}
        blockRadius={3}
        fontSize={11}
        labels={{
          totalCount: "{{count}} contributions in the last year",
          legend: {
            less: "Less",
            more: "More",
          },
        }}
        errorMessage="GitHub contributions are temporarily unavailable."
      />
    </div>
  );
}

function emphasizeContributionLevels(data: Activity[]) {
  return data.map((activity) => {
    if (activity.count === 0) {
      return activity;
    }

    return {
      ...activity,
      level: Math.max(activity.level, 2) as Activity["level"],
    };
  });
}

function CalendarSkeleton() {
  return (
    <div className="min-w-[720px] space-y-3" aria-label="Loading GitHub calendar">
      <div className="h-4 w-48 rounded-full bg-accent" />
      <div className="grid grid-flow-col grid-rows-7 gap-1">
        {Array.from({ length: 53 * 7 }).map((_, index) => (
          <span
            key={index}
            className="size-3 animate-pulse rounded-[3px] border border-edge/50 bg-accent"
          />
        ))}
      </div>
    </div>
  );
}
