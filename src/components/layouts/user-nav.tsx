"use client";

import React from "react";

import { motion } from "framer-motion";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuShortcut,
} from "~/components/ui/dropdown-menu";
import { DropdownMenuItem } from "~/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "~/components/ui/dropdown-menu";
import { DropdownMenuLabel } from "~/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { DropdownMenuContent } from "~/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from "~/components/ui/dropdown-menu";
import { UnifiedWalletButton, useWallet } from "@jup-ag/wallet-adapter";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import { MoveRightIcon } from "lucide-react";
import { USER_NAV_ROUTES } from "~/config/constants";

export function UserNav() {
  const { connected } = useWallet();
  return (
    <div className="flex items-center space-x-4 px-2 transition-all duration-300 ease-in-out">
      <UnifiedWalletButton
        buttonClassName="!text-center !px-4 !w-44"
        currentUserClassName="!p-4"
      />
      {connected ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.div
              whileTap={{ scale: 0.97 }}
              className=" border-none outline-none"
            >
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" alt="test user avatar" />
                  <AvatarFallback>TEST</AvatarFallback>
                </Avatar>
              </Button>
            </motion.div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="mt-3 w-64 px-2"
            align="end"
            forceMount
          >
            <DropdownMenuLabel className="font-mono font-normal">
              <div className="flex items-center justify-between">
                <div className="flex flex-col space-y-1">
                  <div className="space-x-2 text-lg font-medium leading-none">
                    <span>Name</span>
                    <span className="text-sm">@name</span>
                  </div>
                  <p className="text-xs leading-none text-muted-foreground">
                    m@example.com
                  </p>
                </div>
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="space-y-1.5">
              {USER_NAV_ROUTES.main.map((item, index) => (
                <DropdownMenuItem key={index} className="group duration-300 ">
                  {item.name}
                  {item.badge ? (
                    <Badge variant="secondary" className="ml-2 text-green-600">
                      {item.badge_text}
                    </Badge>
                  ) : null}
                  <DropdownMenuShortcut className="hidden group-hover:block group-hover:animate-ping">
                    <MoveRightIcon size={12} />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="space-y-1.5">
              {USER_NAV_ROUTES.public.map((item, index) => (
                <DropdownMenuItem key={index} className="group duration-300 ">
                  {item.name}
                  {item.badge ? (
                    <Badge variant="secondary" className="ml-2 text-green-600">
                      {item.badge_text}
                    </Badge>
                  ) : null}
                  <DropdownMenuShortcut className="hidden group-hover:block group-hover:animate-ping">
                    <MoveRightIcon size={12} />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="flex items-center justify-start space-x-2.5">
              <DropdownMenuItem>About</DropdownMenuItem>
              <DropdownMenuItem>Privacy</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
    </div>
  );
}
