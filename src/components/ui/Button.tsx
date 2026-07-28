"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", withArrow, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-accent text-white hover:bg-accent-hover shadow-[0_0_20px_rgba(229,0,0,0.3)] hover:shadow-[0_0_30px_rgba(229,0,0,0.5)]": variant === "primary",
            "bg-white text-primary hover:bg-gray-100": variant === "secondary",
            "border border-white/20 bg-transparent text-white hover:bg-white/10": variant === "outline",
            "text-muted hover:text-white": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-12 px-8 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
        {withArrow && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
      </button>
    );
  }
);

Button.displayName = "Button";
