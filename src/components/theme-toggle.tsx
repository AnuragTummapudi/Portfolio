"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { flushSync } from "react-dom";

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void) => unknown;
};

export function ThemeToggle() {
  const mounted = useClientMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const nextTheme = isDark ? "light" : "dark";

  function handleThemeToggle() {
    if (!mounted) {
      return;
    }

    const updateTheme = () => {
      document.documentElement.classList.remove(isDark ? "dark" : "light");
      document.documentElement.classList.add(nextTheme);
      document.documentElement.style.colorScheme = nextTheme;
      flushSync(() => setTheme(nextTheme));
    };

    const transitionDocument = document as ViewTransitionDocument;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!transitionDocument.startViewTransition || prefersReducedMotion) {
      updateTheme();
      return;
    }

    transitionDocument.startViewTransition(updateTheme);
  }

  return (
    <button
      type="button"
      aria-label="Theme Toggle"
      className="inline-flex size-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
      onClick={handleThemeToggle}
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-4" strokeWidth={2} />
        ) : (
          <Moon className="size-4" strokeWidth={2} />
        )
      ) : (
        <span className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}

function subscribe(onStoreChange: () => void) {
  const frame = requestAnimationFrame(onStoreChange);
  return () => cancelAnimationFrame(frame);
}

function useClientMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
