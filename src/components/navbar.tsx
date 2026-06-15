"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { socialLinks } from "@/data/portfolio";

type NavbarProps = {
  onSearch: () => void;
};

const resumeHref =
  socialLinks.find((social) => social.kind === "resume")?.href ?? "#connect";

const navLinks = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Achievements", href: "/#achievements" },
  { label: "GitHub", href: "/#github-activity" },
  { label: "Resume", href: resumeHref },
];

export function Navbar({ onSearch }: NavbarProps) {
  return (
    <div className="flex h-[58px] items-center justify-between gap-3 px-4 sm:px-5">
      <Link
        href="/"
        aria-label="Home"
        className="inline-flex size-7 items-center justify-center text-foreground transition-opacity hover:opacity-70"
      >
        <ATMonogram />
      </Link>

      <div className="flex flex-1 items-center justify-end gap-2.5">
        <nav className="hidden items-center gap-3 md:flex" aria-label="Primary navigation">
          {navLinks.map((item) => {
            const isExternal = item.href.startsWith("http") || item.href.startsWith("mailto:");

            return (
              <Link
                key={item.label}
                className="nav-link"
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Search (Ctrl+K)"
          onClick={onSearch}
          className="inline-flex h-8 items-center gap-1.5 rounded-full border border-edge bg-background px-2.5 text-[13px] text-muted transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
        >
          <Search className="size-3.5" strokeWidth={2} />
          <span className="sm:hidden">Search</span>
          <span className="hidden items-center gap-1 sm:inline-flex">
            <kbd className="kbd">Ctrl</kbd>
            <kbd className="kbd">K</kbd>
          </span>
        </button>

        <span className="h-4 w-px bg-edge" aria-hidden="true" />
        <ThemeToggle />
      </div>
    </div>
  );
}

function ATMonogram() {
  return (
    <svg
      viewBox="0 0 28 28"
      className="size-7"
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      <path
        d="M3 23V9h3v14H3Zm3-14V6h9v3H6Zm3 6v-3h5v3H9Zm4 8V9h3v14h-3Zm7 0V9h-4V6h11v3h-4v14h-3Z"
        fill="currentColor"
      />
    </svg>
  );
}
