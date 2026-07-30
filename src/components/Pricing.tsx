"use client";

import { SectionTitle } from "./ui/SectionTitle";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Sparkles } from "lucide-react";

export function Pricing() {
  return (
    <section id="package" className="py-24 relative overflow-hidden bg-[#050308]">
      
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="One Package. Everything You Need." 
          subtitle="The AI Growth Package"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="relative rounded-[2.5rem] p-1 bg-gradient-to-b from-accent to-accent/10">
            <div className="bg-[#0a0a0a] rounded-[2.25rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <p className="text-white/60 font-medium tracking-widest uppercase mb-6">Package Value</p>
                <div className="inline-block text-left w-full max-w-[280px]">
                  <ul className="text-white/70 text-sm md:text-base space-y-3 mb-6 font-medium">
                    <li className="flex justify-between gap-4"><span>Posters & Branding</span> <span className="text-white/40 line-through decoration-accent decoration-2">₹5,000</span></li>
                    <li className="flex justify-between gap-4"><span>AI Reels & Video</span> <span className="text-white/40 line-through decoration-accent decoration-2">₹10,000</span></li>
                    <li className="flex justify-between gap-4"><span>Ads Management</span> <span className="text-white/40 line-through decoration-accent decoration-2">₹10,000</span></li>
                    <li className="flex justify-between gap-4 border-t border-white/10 pt-3 mt-3">
                      <span className="font-bold text-white">Total Value</span> 
                      <span className="font-bold text-white/40 line-through decoration-accent decoration-2 text-lg">₹25,000</span>
                    </li>
                  </ul>
                </div>
                <div className="block">
                  <div className="inline-block border border-accent/30 bg-accent/10 text-accent font-semibold px-4 py-2 rounded-lg text-sm">
                    SAVE ₹10,000 EVERY MONTH
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-px h-48 bg-white/10" />
              <div className="md:hidden w-full h-px bg-white/10" />

              <div className="flex-1 text-center md:text-left">
                <p className="text-white/60 font-medium tracking-widest uppercase mb-4">Now Available For</p>
                <div className="flex items-end justify-center md:justify-start gap-2 mb-4">
                  <h2 className="text-6xl md:text-7xl font-black text-white">
                    ₹<CountUp end={15000} duration={2.5} separator="," />
                  </h2>
                  <span className="text-xl text-white/50 font-medium mb-2">/ month</span>
                </div>
                <p className="text-white/60 mb-8 text-xs leading-relaxed max-w-[320px] mx-auto md:mx-0">
                  One-time onboarding + first-campaign setup: ₹5,000 (billed once). Ad spend is separate and paid directly to Google/Meta.
                </p>
                <Button size="lg" className="w-full md:w-auto text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Start with a Free Audit
                </Button>
              </div>
            </div>
          </div>

          <p className="text-center text-xl text-white/70 mt-12 italic">
            Everything above, delivered every month — <span className="text-accent font-semibold not-italic">one team, one simple price.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
