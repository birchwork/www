"use client";

import React from "react";

import { Button } from "../ui/button";

import { CommandInput, CommandList } from "~/components/ui/command";
import { CommandDialog, CommandEmpty } from "~/components/ui/command";

import type { DialogProps } from "@radix-ui/react-alert-dialog";

export function CommandSearch({ ...props }: DialogProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="flex w-full items-center md:justify-center">
      <Button
        variant="outline"
        className="flex justify-between gap-2.5 px-4 text-sm text-muted-foreground md:w-full md:max-w-96 xl:max-w-lg"
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search task...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="flex items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>test.</CommandEmpty>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
