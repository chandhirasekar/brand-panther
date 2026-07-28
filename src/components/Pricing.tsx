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
            <div className="absolute -top-4 right-10 bg-accent text-white text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-[0_0_20px_rgba(229,0,0,0.5)] flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Best Value
            </div>
            
            <div className="bg-[#0a0a0a] rounded-[2.25rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <p className="text-white/60 font-medium tracking-widest uppercase mb-4">Package Value</p>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-white/40 line-through decoration-accent decoration-4">
                    ₹25,000+
                  </h3>
                </div>
                <div className="inline-block border border-accent/30 bg-accent/10 text-accent font-semibold px-4 py-2 rounded-lg mb-8">
                  SAVE ₹10,000 EVERY MONTH
                </div>
                <p className="text-white/70 text-sm">worth of services delivered every month</p>
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
                <p className="text-white/60 mb-8 text-sm">
                  + ₹5,000 for your first month & campaigns
                </p>
                <Button size="lg" className="w-full md:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Lock in this price
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
