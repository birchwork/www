"use client";

import React from "react";
import { cn } from "~/lib/utils";

import { TooltipProvider } from "~/components/ui/tooltip";
import { ResizablePanelGroup } from "~/components/ui/resizable";
import { ResizableHandle, ResizablePanel } from "~/components/ui/resizable";
import { Navigation } from "./navigation";

interface WrapperProps {
  navCollapsedSize: number;
  children: React.ReactNode;
  defaultCollapsed?: boolean;
  defaultLayout: number[] | undefined;
}

export function Wrapper(props: WrapperProps) {
  const {
    children,
    navCollapsedSize,
    defaultCollapsed = false,
    defaultLayout = [265, 1100],
  } = props;

  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  return (
    <TooltipProvider>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes,
          )}`;
        }}
        className="container max-w-screen-2xl flex-1 items-stretch px-1.5"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={(collapsed) => {
            setIsCollapsed(collapsed);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              collapsed,
            )}`;
          }}
          className={cn(
            isCollapsed &&
              "min-w-[64px] transition-all duration-300 ease-in-out",
          )}
        >
          <Navigation isCollapsed={isCollapsed} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
