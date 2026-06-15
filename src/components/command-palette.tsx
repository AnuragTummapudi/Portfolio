"use client";

import { Command } from "cmdk";
import { ArrowRight, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Description, Title } from "@radix-ui/react-dialog";
import { useEffect } from "react";
import {
  navigationCommands,
  sectionCommands,
  socialCommands,
  type CommandItem,
} from "@/data/portfolio";

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        onOpenChange(!open);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onOpenChange, open]);

  function runCommand(item: CommandItem) {
    onOpenChange(false);

    if (item.href.startsWith("http") || item.href.startsWith("mailto:")) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }

    if (item.href.startsWith("#")) {
      if (pathname !== "/") {
        router.push(`/${item.href}`);
        return;
      }

      const target = document.querySelector(item.href);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", item.href);
      return;
    }

    router.push(item.href);
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Global Command Menu"
      loop
      shouldFilter
      overlayClassName="fixed inset-0 z-[80] bg-black/55 backdrop-blur-[2px] data-[state=closed]:animate-out data-[state=open]:animate-in"
      contentClassName="fixed left-1/2 top-24 z-[90] w-[calc(100vw-2rem)] max-w-[560px] -translate-x-1/2 overflow-hidden rounded-xl border border-edge bg-surface text-foreground shadow-2xl shadow-black/30"
    >
      <Title className="sr-only">Global Command Menu</Title>
      <Description className="sr-only">
        Search pages, sections, and social links.
      </Description>
      <div className="flex h-14 items-center gap-3 border-b border-edge px-4">
        <Search className="size-4 shrink-0 text-muted" strokeWidth={2} />
        <Command.Input
          placeholder="Search pages, sections, social..."
          className="h-full flex-1 bg-transparent font-mono text-sm outline-none placeholder:text-muted"
        />
        <kbd className="rounded-md border border-edge bg-surface-2 px-1.5 py-1 text-[10px] uppercase text-muted">
          esc
        </kbd>
      </div>

      <Command.List className="max-h-[420px] overflow-y-auto p-2">
        <Command.Empty className="px-3 py-8 text-center text-sm text-muted">
          No results found.
        </Command.Empty>
        <CommandGroup title="Navigation" items={navigationCommands} onRun={runCommand} />
        <CommandGroup title="Sections" items={sectionCommands} onRun={runCommand} />
        <CommandGroup title="Social" items={socialCommands} onRun={runCommand} />
      </Command.List>
    </Command.Dialog>
  );
}

function CommandGroup({
  title,
  items,
  onRun,
}: {
  title: string;
  items: CommandItem[];
  onRun: (item: CommandItem) => void;
}) {
  return (
    <Command.Group
      heading={title.toUpperCase()}
      className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:tracking-[0.18em] [&_[cmdk-group-heading]]:text-muted"
    >
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Command.Item
            key={`${title}-${item.title}`}
            value={`${item.title} ${item.description}`}
            onSelect={() => onRun(item)}
            className="group flex cursor-pointer items-center gap-3 rounded-lg border border-transparent px-2.5 py-2.5 text-sm text-foreground outline-none transition-colors aria-selected:border-edge aria-selected:bg-accent"
          >
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-edge bg-surface-2 text-muted">
              <Icon className="size-4" strokeWidth={2} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-semibold">{item.title}</span>
              <span className="block truncate text-xs text-muted">{item.description}</span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-muted opacity-0 transition-opacity group-aria-selected:opacity-100" />
          </Command.Item>
        );
      })}
    </Command.Group>
  );
}
