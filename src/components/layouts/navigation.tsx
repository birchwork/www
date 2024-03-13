/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";

import { cn } from "~/lib/utils";
import { routes } from "~/config/site";
import { usePathname } from "next/navigation";

import homeIcon from "public/icons/static/home.json";
import demoOneIcon from "public/icons/static/demo_one.json";
import demoTwoIcon from "public/icons/static/demo_two.json";
import TooltipBox from "./tooltip-box";

const iconList = [homeIcon, demoOneIcon, demoTwoIcon];

interface NavigationProps {
  isCollapsed: boolean;
}

export function Navigation({ isCollapsed }: NavigationProps) {
  const path = usePathname();

  return (
    <div
      data-collapsed={isCollapsed}
      className={cn(
        "group fixed flex h-full flex-col items-center justify-center py-2",
        {
          "data-[collapsed=true]:py-2": isCollapsed,
        },
      )}
    >
      <nav
        className={cn(
          "grid gap-4 px-2 transition-all duration-300 ease-in-out",
          {
            "group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2":
              isCollapsed,
          },
        )}
      >
        {routes.map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const ref = React.useRef<any>();
          const isActive = path === item.link;
          const linkClasses = cn(
            "flex items-center hover:text-primary justify-between mr-1 gap-2 rounded-lg px-2.5 py-2 font-semibold text-foreground duration-300 hover:bg-neutral-800",
            { "text-primary/50": !isActive },
            { "bg-neutral-800 text-primary": isActive },
            { "transition-all duration-500 ease-in-out  w-60": !isCollapsed },
          );

          return (
            <TooltipBox content={<span>{item.name}</span>} key={item.name}>
              <Link
                href={item.link}
                onMouseEnter={() => ref.current?.play()}
                onMouseLeave={() => ref.current?.stop()}
                className={linkClasses}
              >
                {!isCollapsed && (
                  <span className="text-sm capitalize">{item.name}</span>
                )}
                <Lottie
                  lottieRef={ref}
                  animationData={iconList[index]}
                  style={{ width: 24, height: 24 }}
                  autoplay={false}
                  loop={false}
                />
              </Link>
            </TooltipBox>
          );
        })}
      </nav>
    </div>
  );
}
