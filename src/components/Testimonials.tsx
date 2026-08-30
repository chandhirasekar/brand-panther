"use client";

import { SectionTitle } from "./ui/SectionTitle";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Arjun Krishnan",
      role: "CEO, Apex Ventures",
      content: "Brand Panther transformed our online presence. Our lead quality has never been better, and the AI-generated creatives are stunning.",
      rating: 5,
    },
    {
      name: "Rohit Varma",
      role: "Founder, Nova Growth",
      content: "The transparency and tracking they provide give me complete peace of mind. Every rupee we spend is accounted for and compounding.",
      rating: 5,
    },
    {
      name: "Karthik Rajan",
      role: "Director, UrbanEdge Solutions",
      content: "We were struggling with Meta ads before Brand Panther stepped in. Within 90 days, we saw a 3x increase in conversion volume.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Testimonials"
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111] border border-white/5 p-8 rounded-3xl relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold text-white/50 uppercase">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
