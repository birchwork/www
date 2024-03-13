"use client";

import React from "react";

import { cn } from "~/lib/utils";
import { motion } from "framer-motion";

import type { HTMLMotionProps, Variants } from "framer-motion";

interface AnimatedDirectionProps extends HTMLMotionProps<"div"> {
  from:
    | "left"
    | "top"
    | "right"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  delay?: number;
  duration?: number;
  innerClassName?: string;
  callBack?: () => void;
}

export function AnimatedDirection({
  children,
  from,
  delay = 0,
  duration = 0.6,
  className,
  innerClassName,
  callBack,
  ...props
}: AnimatedDirectionProps) {
  const [overflow, setOverflow] = React.useState<string | null>(
    "overflow-hidden",
  );
  const variants: Variants = {
    show: (i = 1) => ({
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: i * delay,
      },
    }),
    hidden: {
      ...(from.includes("top") && { y: "-100%" }),
      ...(from.includes("bottom") && { y: "100%" }),
      ...(from.includes("left") && { x: "-100%" }),
      ...(from.includes("right") && { x: "100%" }),
    },
  };

  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div className={cn(overflow, className)}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        onAnimationComplete={() => {
          if (callBack) {
            callBack();
          }
          setOverflow(null);
          if (ref.current !== null) {
            ref.current.style.transform = "";
          }
        }}
        className={innerClassName}
        ref={ref}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
