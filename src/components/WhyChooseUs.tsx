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
      description: "Every rupee is guided by analytics. We move budget toward what’s already converting — so your spend compounds, not guesses.",
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

  const placeholderLogos = ["Client A", "Client B", "Client C", "Client D", "Client E"];

  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Why Choose Us" 
          subtitle="The Panther Advantage"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
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

        {/* Client Logo Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto border-t border-white/5 pt-12 text-center relative"
        >
          {/* Blurred Content */}
          <div className="opacity-40 blur-md pointer-events-none select-none">
            <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-8">
              Trusted by ambitious brands
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">
              {placeholderLogos.map((logo, idx) => (
                <div key={idx} className="text-xl font-bold text-white">
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 pt-12 flex justify-center items-center z-10 pointer-events-none">
            <div className="px-5 py-2 border border-white/10 rounded-full bg-[#0a0a0a]/80 shadow-[0_0_30px_rgba(157,78,221,0.2)] backdrop-blur-md">
              <p className="text-white font-bold tracking-[0.2em] uppercase text-xs">Coming Soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
