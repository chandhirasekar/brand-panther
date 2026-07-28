"use client";

import { SectionTitle } from "./ui/SectionTitle";
import { PenTool, Target, MessageSquareCode } from "lucide-react";
import { motion } from "framer-motion";

export function GrowthSystem() {
  const steps = [
    {
      num: "01",
      title: "Create",
      subtitle: "BUILD THE ASSETS",
      icon: PenTool,
      items: ["Branding", "Posters", "Videos", "AI Reels"],
    },
    {
      num: "02",
      title: "Attract",
      subtitle: "DRIVE THE TRAFFIC",
      icon: Target,
      items: ["Google", "Meta Ads", "Instagram", "Facebook"],
    },
    {
      num: "03",
      title: "Convert",
      subtitle: "CLOSE THE SALE",
      icon: MessageSquareCode,
      items: ["WhatsApp", "Lead Tracking", "Reporting"],
    },
  ];

  return (
    <section id="system" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="The Growth System" 
          subtitle="How It Works"
        />

        <div className="max-w-6xl mx-auto relative mt-16">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="glass-card p-8 bg-secondary/90 relative overflow-hidden group"
              >
                {/* Large Background Number */}
                <div className="absolute -top-6 -right-6 text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500 pointer-events-none select-none">
                  {step.num}
                </div>

                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon size={28} />
                </div>
                
                <h4 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">
                  {step.subtitle}
                </h4>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {step.title}
                </h3>
                
                <ul className="space-y-3">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
