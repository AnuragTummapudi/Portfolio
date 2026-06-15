"use client";

import dynamic from "next/dynamic";
import { githubUsername } from "@/data/portfolio";

const calendarTheme = {
  light: ["#ffffff", "#d7f5dd", "#8fdc9e", "#42b45b", "#207a35"],
  dark: ["#ffffff", "#d7f5dd", "#8fdc9e", "#42b45b", "#207a35"],
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
        colorScheme="light"
        theme={calendarTheme}
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
