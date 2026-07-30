"use client";

import { motion } from "framer-motion";

export function PackageIncludes() {
  const categories = [
    {
      num: "01",
      title: "STRATEGY & REPORTING",
      items: [
        "Business Audit Included",
        "Marketing Strategy Consultation",
      ],
    },
    {
      num: "02",
      title: "CONTENT & CREATIVE",
      items: [
        "Monthly Content Calendar",
        "12 Premium Social Media Posters",
        "2 Standard Video Reels",
        "2 Advanced AI Reels (worth ₹1,500 each)",
        "2 Campaign Reels",
      ],
    },
    {
      num: "03",
      title: "SOCIAL MEDIA MANAGEMENT",
      items: [
        "Instagram Management",
        "Facebook Management",
        "WhatsApp Business Marketing",
        "Google Business Profile",
      ],
    },
    {
      num: "04",
      title: "PAID ADVERTISING",
      items: [
        "Meta Ads Campaign Support",
        "Campaign Review & Optimisation",
      ],
    },
    {
      num: "05",
      title: "CLIENT SUPPORT",
      items: [
        "Dedicated Account Manager",
        "Lead Generation Strategy",
        "Performance Monitoring",
      ],
    },
  ];

  return (
    <section className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4">What's Included</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything in Your ₹15,000/month</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <span className="text-2xl font-black text-accent">{category.num}</span>
                <h3 className="text-lg font-bold text-white tracking-wide uppercase">{category.title}</h3>
              </div>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm font-medium leading-relaxed">{item}</span>
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
