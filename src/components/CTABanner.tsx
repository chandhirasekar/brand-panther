"use client";

import { Button } from "./ui/Button";
import { motion } from "framer-motion";

export function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] p-12 md:p-20 text-center overflow-hidden bg-[#0d0a14] border border-[#2a2438]"
        >
          
          <div className="relative z-10">
            <h4 className="text-accent uppercase tracking-widest text-sm font-semibold mb-4">
              Next Step
            </h4>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Scale?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Start free. See exactly where your marketing leaks leads — then decide. The audit is yours whether or not you sign up.
            </p>
            <Button size="lg" withArrow onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Free AI Business Audit
            </Button>
            <p className="text-sm text-white/50 mt-6 font-medium tracking-wide">
              Free · No obligation · 24-hour response
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
