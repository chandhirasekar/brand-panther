"use client";

import { SectionTitle } from "./ui/SectionTitle";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function ClientReels() {
  const reels = [
    { title: "Client Reel 1", views: "1.2M Views" },
    { title: "Client Reel 2", views: "800K Views" },
    { title: "Client Reel 3", views: "2.5M Views" }
  ];

  return (
    <section className="py-24 relative bg-[#050308]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Viral AI Reels" 
          subtitle="Real Results"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reels.map((reel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative aspect-[9/16] bg-black border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />
              
              {/* Placeholder background with fake content */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1525] to-[#050308]">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/30 rounded-full blur-[50px]" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px]" />
              </div>
              
              {/* Blur Overlay & Coming Soon */}
              <div className="absolute inset-0 backdrop-blur-xl bg-black/40 flex flex-col justify-center items-center z-20">
                <div className="px-6 py-3 border border-white/10 rounded-full bg-black/60 shadow-[0_0_30px_rgba(157,78,221,0.2)]">
                  <p className="text-white font-bold tracking-[0.2em] uppercase text-sm">Coming Soon</p>
                </div>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30 opacity-50">
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-1 inline-block mb-2 border border-white/10">
                  <span className="text-accent text-xs font-bold">{reel.views}</span>
                </div>
                <h4 className="text-white font-semibold text-lg">{reel.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
