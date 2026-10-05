"use client";

import { CheckCircle2, UserPlus, FolderOpen, Users, Magnet, Monitor, Store, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface GrowthPackageBox {
  number: string;
  title: string;
  items: string[];
}

export function WhatYouGet() {
  const growthBoxes: GrowthPackageBox[] = [
    {
      number: "01",
      title: "STRATEGY & REPORTING",
      items: [
        "Business audit",
        "Competitor analysis",
        "Strategy consultation",
        "Weekly performance reports",
      ],
    },
    {
      number: "02",
      title: "CONTENT & CREATIVE",
      items: [
        "Monthly content calendar",
        "12 premium posters",
        "2 standard reels",
        "2 advanced AI reels (worth ₹1,500 each)",
        "2 campaign reels",
      ],
    },
    {
      number: "03",
      title: "SOCIAL MEDIA MANAGEMENT",
      items: [
        "Instagram",
        "Facebook",
        "WhatsApp Business",
        "Google Business Profile",
      ],
    },
    {
      number: "04",
      title: "PAID ADVERTISING",
      items: [
        "Meta Ads campaign management",
        "Campaign review & optimisation",
      ],
    },
    {
      number: "05",
      title: "CLIENT SUPPORT",
      items: [
        "Dedicated account manager",
        "Lead generation strategy",
        "Performance monitoring",
      ],
    },
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

        {/* Custom Title matching screenshot */}
        <div className="text-center mx-auto mb-16 flex flex-col items-center">
          <p
            data-aos="fade-up"
            className="text-accent uppercase tracking-widest text-xs md:text-sm font-bold mb-4"
          >
            Category, offer, and campaign performance.
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 uppercase"
          >
            What We Do in the Growth Packages
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="h-1 bg-accent w-24 mx-auto"
          />
        </div>

        {/* Growth package boxes grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {growthBoxes.map((box, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0c0814]/90 border border-white/10 rounded-2xl p-7 md:p-8 flex flex-col justify-start hover:border-accent/40 transition-all duration-300 shadow-xl shadow-black/60 group"
            >
              {/* Card Header with red box number & uppercase title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#ff3b3b] font-black text-2xl md:text-3xl tracking-wide font-mono">
                  {box.number}
                </span>
                <h3 className="text-base md:text-lg font-bold text-white tracking-wider uppercase leading-snug">
                  {box.title}
                </h3>
              </div>

              {/* Horizontal Divider */}
              <div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white/20 transition-colors" />

              {/* Bullet list of items */}
              <ul className="space-y-3.5">
                {box.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3 text-white/90 text-sm md:text-base font-normal">
                    <span className="text-[#ff3b3b] text-base leading-tight select-none shrink-0 mt-0.5">•</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

