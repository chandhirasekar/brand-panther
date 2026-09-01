"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

export function PackageIncludes() {
  const categories = [
    {
      num: "01",
      title: "STRATEGY & REPORTING",
      items: [
        "Business audit",
        "Competitor analysis",
        "Strategy consultation",
        "Weekly performance reports",
      ],
    },
    {
      num: "02",
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
      num: "03",
      title: "SOCIAL MEDIA MANAGEMENT",
      items: [
        "Instagram",
        "Facebook",
        "WhatsApp Business",
        "Google Business Profile",
      ],
    },
    {
      num: "04",
      title: "PAID ADVERTISING",
      items: [
        "Meta Ads campaign management",
        "Campaign review & optimisation",
      ],
    },
    {
      num: "05",
      title: "CLIENT SUPPORT",
      items: [
        "Dedicated account manager",
        "Lead generation strategy",
        "Performance monitoring",
      ],
    },
  ];

  return (
    <section className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <SectionTitle 
          title="The Growth Package" 
          subtitle="Everything above, delivered every month — one team, one simple price."
        />

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-white font-semibold mb-4">
            Set up and fully managed for you.
          </p>
          <p className="text-lg text-white/70">
            Target of 15+ qualified leads a month. Volume can scale to 100+ depending on your business category, offer, and campaign performance.
          </p>
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
