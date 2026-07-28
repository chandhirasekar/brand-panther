"use client";

import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({ title, subtitle, align = "center", className }: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-16",
        {
          "text-left": align === "left",
          "text-center mx-auto": align === "center",
        },
        className
      )}
    >
      {subtitle && (
        <p
          data-aos="fade-up"
          className="text-accent uppercase tracking-widest text-sm font-semibold mb-4"
        >
          {subtitle}
        </p>
      )}
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
      >
        {title}
      </h2>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className={cn("h-1 bg-accent w-24", {
          "mx-auto": align === "center",
        })}
      />
    </div>
  );
}
