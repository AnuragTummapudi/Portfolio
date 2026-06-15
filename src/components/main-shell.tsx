"use client";

import { useState } from "react";
import { CommandPalette } from "@/components/command-palette";
import { DotGrid } from "@/components/dot-grid";
import { GridIntersections } from "@/components/grid-intersections";
import { Navbar } from "@/components/navbar";
import { PixelCat } from "@/components/pixel-cat";

export function MainShell({ children }: { children: React.ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="main-shell">
        <header className="site-section sticky top-0 z-50 bg-background/94 backdrop-blur-md">
          <GridIntersections />
          <Navbar onSearch={() => setCommandOpen(true)} />
        </header>

        <main>{children}</main>

        <footer>
          <div className="site-section flex items-end justify-between gap-6 px-5 py-7 sm:px-6">
            <GridIntersections />
            <div className="space-y-1 text-[13px] leading-5 text-muted">
              <p>© 2026 Anurag</p>
              <p>Built with love, LLMs and Coffee</p>
            </div>
            <PixelCat />
          </div>
          <DotGrid />
        </footer>
      </div>

      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </div>
  );
}
