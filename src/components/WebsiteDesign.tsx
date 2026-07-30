"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe } from "lucide-react";
import Image from "next/image";

export function WebsiteDesign() {
  return (
    <section className="py-20 relative bg-accent/5 border-y border-accent/20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="w-5 h-5 text-accent" />
              <Smartphone className="w-5 h-5 text-white/50" />
              <Globe className="w-5 h-5 text-white/50" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Traffic Needs a Hub.
            </h3>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Ads and reels get attention, but your website is where the sale happens. We design fast, conversion-optimized websites that catch your AI traffic and turn visitors into buyers.
            </p>
            <div className="inline-block px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white/80 text-sm font-medium">
              Optional Add-on • Custom Pricing
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl group cursor-pointer">
              {/* Fake Browser Window */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#1a1a1a] border-b border-white/10 flex items-center px-4 gap-2 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              
              {/* Real Image Mockup */}
              <div className="absolute top-8 left-0 right-0 bottom-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-60" />
                <Image 
                  src="/website-mockup.png" 
                  alt="Premium Website Design Mockup" 
                  fill
                  className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
