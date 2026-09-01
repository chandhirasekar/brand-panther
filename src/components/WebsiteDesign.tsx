"use client";

import { SectionTitle } from "./ui/SectionTitle";
import { motion } from "framer-motion";
import { ExternalLink, Monitor, Smartphone, Globe } from "lucide-react";

export function WebsiteDesign() {
  const websites = [
    {
      client: "Tekera Training Centre",
      url: "https://tekera.in",
      displayUrl: "tekera.in",
      description: "Full-stack booking and training platform — streamlined enrollments and automated course tracking."
    },
    {
      client: "Merge steel",
      url: "https://www.mergesteel.com/",
      displayUrl: "mergesteel.com",
      description: "Corporate B2B website — clean architecture and robust lead generation for steel fabrication."
    },
    {
      client: "Madurai DrivO Tourism",
      url: "https://madurai-driv-o-tourism.vercel.app/",
      displayUrl: "madurai-driv-o-tourism.vercel.app",
      description: "Tour package booking hub — seamless mobile experience for booking cabs and holiday packages."
    }
  ];

  return (
    <section className="py-24 relative bg-accent/5 border-y border-accent/20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle 
          title="Websites We've Built" 
          subtitle="Optional add-on • custom pricing"
        />
        
        <div className="flex items-center justify-center gap-2 -mt-10 mb-6">
          <Monitor className="w-5 h-5 text-accent" />
          <Smartphone className="w-5 h-5 text-white/50" />
          <Globe className="w-5 h-5 text-white/50" />
        </div>

        <p className="text-white/70 text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Ads and reels bring attention — your website is where the sale happens. We build fast, mobile-first, conversion-focused websites that turn visitors into enquiries.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {websites.map((site, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6 group hover:bg-white/5 transition-colors relative flex flex-col"
            >
              <div className="aspect-[16/9] bg-[#1a1a1a] rounded-lg mb-6 border border-white/10 overflow-hidden relative flex items-center justify-center group-hover:border-accent/50 transition-colors">
                 {site.url !== "#" ? (
                   <>
                     <iframe 
                       src={site.url} 
                       className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-25 border-0 pointer-events-none" 
                       title={site.client} 
                       scrolling="no"
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10 pointer-events-none" />
                   </>
                 ) : (
                   <span className="text-white/30 text-sm">Screenshot Placeholder</span>
                 )}
              </div>
              <h4 className="text-white font-bold text-xl mb-2">{site.client}</h4>
              <a href={site.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4 hover:underline">
                {site.displayUrl}
                <ExternalLink size={14} />
              </a>
              <p className="text-white/60 text-sm leading-relaxed mt-auto">
                {site.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
