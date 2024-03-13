"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Loading() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.45,
        }}
        variants={{
          initialState: {
            backgroundColor: "#F49A4D !important",
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            backgroundColor: "#F49A4D !important",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="h-screen w-screen"
      ></motion.div>
    </AnimatePresence>
  );
}
