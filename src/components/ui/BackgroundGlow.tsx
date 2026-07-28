"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BackgroundGlowProps {
  className?: string;
}

export function BackgroundGlow({ className }: BackgroundGlowProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-red-900/20 blur-[100px]"
      />
    </div>
  );
}
