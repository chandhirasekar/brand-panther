"use client";

import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BarChart3, Target, Zap } from "lucide-react";

export function Hero() {
  const stats = [
    { label: "Content and reels made for you every month", icon: Zap },
    { label: "Meta + Google ads, managed in one place", icon: Target },
    { label: "Weekly reports in plain language", icon: BarChart3 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#0a0514] via-[#130826] to-[#050308]">

      {/* Starry Background Layers (KEPT) */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px', backgroundPosition: '0 0' }} />
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1.5px, transparent 1.5px)', backgroundSize: '100px 100px', backgroundPosition: '20px 20px' }} />
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 2px, transparent 2px)', backgroundSize: '150px 150px', backgroundPosition: '50px 50px' }} />

      {/* Geometric Dotted Circles (Right) */}
      <div className="absolute right-[-20%] top-[10%] w-[800px] h-[800px] rounded-full border-[1.5px] border-dashed border-white/10 z-0 pointer-events-none" />
      <div className="absolute right-[5%] top-[5%] w-[500px] h-[500px] rounded-full border-[1.5px] border-dashed border-white/5 z-0 pointer-events-none" />
      <div className="absolute right-[-10%] top-[30%] w-[600px] h-[600px] rounded-full border-[1.5px] border-dashed border-white/5 z-0 pointer-events-none" />
      <div className="absolute right-[15%] top-[40%] w-[300px] h-[300px] rounded-full border-[1.5px] border-dashed border-white/5 z-0 pointer-events-none" />

      {/* Shooting Star Light Beam (Left) */}
      <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent z-0 pointer-events-none" />
      <motion.div
        animate={{ y: [-100, 1000] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        className="absolute left-[15%] top-0 w-[4px] h-[4px] bg-white rounded-full shadow-[0_0_20px_8px_rgba(255,255,255,0.7)] -translate-x-1/2 z-0"
      />

      {/* Radiant glow behind the central content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Original Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mt-16">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              We Bring You <span className="text-accent">Qualified Leads.</span><br />
              You Focus On <span className="text-white/60 italic">Closing Them.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Brand Panther is a Chennai-based digital marketing team. We create your content, run your Meta and Google ads, and track every lead — so your marketing brings qualified leads, not just likes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center mb-20"
          >
            <Button size="lg" className="w-full sm:w-auto text-lg group mb-4" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Your Free Business Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-white/50 text-center max-w-sm">
              No cost, no obligation. We show you where your enquiries are leaking before you decide anything.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 w-full"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center flex flex-col items-center justify-center">
                <div className="mb-3 p-3 bg-white/5 rounded-full">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-white/80 uppercase tracking-wider text-sm font-semibold max-w-[250px] mx-auto">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
