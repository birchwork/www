"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import type { Tasks } from "~/config/constants";
import React from "react";

interface TasksListProps {
  items: Tasks[];
}

export function TasksList({ items }: TasksListProps) {
  return (
    <React.Suspense>
      <div className="flex grid-cols-1 flex-col space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index, ease: "easeOut" }}
            className="relative flex w-full max-w-4xl flex-col gap-5 rounded-xl border border-white/10 bg-neutral-950 px-10 py-8"
          >
            <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
            <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center">
              <span className="text-lg font-bold">{item.name}</span>
              <span>{new Date(item.date).toLocaleString()}</span>
            </div>
            <p className="text-base leading-[1.5] text-foreground/80">
              “{item.text}”
            </p>
            <div className="flex items-center justify-between">
              <div className="flex max-w-48 items-center space-x-4 overflow-x-hidden">
                {item.reader.map((item, index) => (
                  <Avatar key={index} className="h-8 w-8">
                    <AvatarImage src={`/avatars/0${(index % 5) + 1}.png`} />
                    <AvatarFallback>{item.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </React.Suspense>
  );
}
