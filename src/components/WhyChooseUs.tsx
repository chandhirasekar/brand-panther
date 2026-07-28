"use client";

import { SectionTitle } from "./ui/SectionTitle";
import { Zap, ShieldCheck, TrendingUp, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "AI-Powered Efficiency",
      description: "We leverage cutting-edge AI tools to accelerate content creation and campaign optimization, getting you results faster.",
      icon: Cpu,
    },
    {
      title: "Data-Driven Decisions",
      description: "No guesswork. Every strategy is backed by analytics, ensuring your marketing budget delivers maximum ROI.",
      icon: TrendingUp,
    },
    {
      title: "End-to-End System",
      description: "From the first ad click to the final WhatsApp conversation, we manage the entire customer journey.",
      icon: Zap,
    },
    {
      title: "Transparent Reporting",
      description: "Weekly performance reports and a dedicated account manager so you always know exactly how your campaigns are performing.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Why Choose Us" 
          subtitle="The Panther Advantage"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 group hover:bg-white/[0.02]"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
