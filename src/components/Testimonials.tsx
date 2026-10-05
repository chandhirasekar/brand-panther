"use client";

import { SectionTitle } from "./ui/SectionTitle";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  client: string;
  role: string;
  initials: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Brand Panther brought much more structure to our social media presence. From content planning to creatives and campaign execution, the process became much easier for us to manage. Their team was responsive and understood our brand requirements well.",
    client: "Antara Fashion",
    role: "Brand & Social Media Client",
    initials: "AF",
    rating: 5,
  },
  {
    quote:
      "The team understood what we wanted and helped us present our training centre more professionally online. The content and advertising support made our digital presence much more consistent.",
    client: "Tekera Training Center",
    role: "Digital Marketing Client",
    initials: "TT",
    rating: 5,
  },
  {
    quote:
      "What I liked most about working with Brand Panther was their involvement beyond just creating posts. They looked at the bigger picture — branding, content, communication and lead generation.",
    client: "Virtual kids School",
    role: "Branding & Lead Generation Client",
    initials: "VK",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Testimonials"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-3xl relative flex flex-col justify-between group hover:border-accent/30 hover:bg-white/[0.03] transition-all duration-300 shadow-lg"
            >
              <div>
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 rotate-180" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-white/80 text-base md:text-lg leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 flex items-center justify-center text-white font-bold text-base border border-accent/30 shadow-inner">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-accent transition-colors">
                    {item.client}
                  </h4>
                  <p className="text-white/50 text-sm font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

