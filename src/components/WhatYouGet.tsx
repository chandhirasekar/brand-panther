"use client";

import { CheckCircle2, UserPlus, FolderOpen, Users, Magnet, Monitor, Store, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function WhatYouGet() {
  const features = [
    { title: "AI Marketing Strategy", description: "A clear monthly plan based on your goals, audience, and competitors." },
    { title: "AI Content Creation", description: "Posters, captions, and creatives made for your brand, every month." },
    { title: "AI Reel Creation", description: "Short-form reels built to stop the scroll and earn saves and shares." },
    { title: "Meta Ads Management", description: "Facebook & Instagram campaigns set up, tested, and optimised." },
    { title: "Google Ads Support", description: "Search & display campaigns to catch people already looking for you." },
    { title: "Lead Tracking", description: "Every enquiry captured and followed up, so nothing slips." },
    { title: "Competitor Analysis", description: "We show you what's working for others in your space." },
    { title: "WhatsApp Follow-up", description: "Leads reach you directly and get answered fast." },
    { title: "Weekly Performance Reports", description: "Simple reports showing spend, leads, and cost per lead." },
  ];

  const rings = [
    {
      size: 350,
      duration: 30, // 30 seconds for one full orbit
      icons: [
        { icon: Users, angle: 0, color: "text-accent" },
        { icon: CheckCircle2, angle: 180, color: "text-white" },
      ]
    },
    {
      size: 550,
      duration: 45,
      icons: [
        { icon: FolderOpen, angle: 45, color: "text-white" },
        { icon: Monitor, angle: 165, color: "text-accent" },
        { icon: Magnet, angle: 285, color: "text-white" },
      ]
    },
    {
      size: 750,
      duration: 60,
      icons: [
        { icon: UserPlus, angle: 90, color: "text-accent" },
        { icon: Store, angle: 210, color: "text-white" },
        { icon: ShoppingBag, angle: 330, color: "text-accent" },
      ]
    }
  ];

  return (
    <section id="services" className="pt-24 md:pt-32 pb-24 relative bg-[#050308]">

      {/* Wrapper for Radial Animation to manage clipping properly */}
      <div className="relative w-full h-[400px] mb-16 hidden md:block">

        {/* Orbital Rings (Clipped to top half) */}
        <div className="absolute inset-0 overflow-hidden">
          {rings.map((ring, rIdx) => (
            <motion.div
              key={rIdx}
              animate={{ rotate: 360 }}
              transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border-[1.5px] border-dashed border-white/10 flex items-center justify-center z-0"
              style={{
                width: `${ring.size}px`,
                height: `${ring.size}px`,
                marginBottom: `-${ring.size / 2}px`
              }}
            >
              {ring.icons.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="absolute w-14 h-14"
                  style={{ transform: `rotate(${item.angle}deg) translateY(-${ring.size / 2}px)` }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-[#0f0a18] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(157,78,221,0.2)] border border-white/10"
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Center Logo Area (Unclipped, sitting exactly at the orbital center) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 flex flex-col items-center justify-center"
        >
          <Image
            src="/brand-panther.png"
            alt="Brand Panther"
            width={250}
            height={80}
            className="h-20 md:h-28 w-auto object-contain drop-shadow-[0_0_20px_rgba(157,78,221,0.6)]"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">

        {/* Custom Title matching the exact screenshot */}
        <div className="text-center mx-auto mb-16 flex flex-col items-center">
          <p
            data-aos="fade-up"
            className="text-accent uppercase tracking-widest text-xs md:text-sm font-bold mb-4"
          >
            Everything your marketing needs, run by one team
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            What We Do
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="h-1 bg-accent w-24 mx-auto"
          />
        </div>

        {/* 3x3 Grid of features */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0f0a18] border border-white/5 rounded-2xl p-6 flex flex-col items-start gap-3 hover:border-white/10 transition-colors shadow-lg shadow-black/50 group"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-medium text-white">
                  {feature.title}
                </h4>
              </div>
              <p className="text-white/60 text-sm leading-relaxed pl-8">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
