import React from "react";
import Link from "next/link";

import { UserNav } from "./user-nav";
import { CommandSearch } from "./command-search";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex max-w-screen-2xl items-center justify-between gap-6 px-1.5 py-4">
        <Link
          href="/"
          className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
        >
          <span className="text-2xl">[Renaissance]</span>
        </Link>
        <CommandSearch />
        <UserNav />
      </div>
    </header>
  );
}
