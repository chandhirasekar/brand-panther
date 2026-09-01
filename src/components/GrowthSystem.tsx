"use client";

import { SectionTitle } from "./ui/SectionTitle";
import { motion } from "framer-motion";

export function GrowthSystem() {
  const steps = [
    {
      num: "01",
      title: "AI Business & Competitor Audit",
      description: "Business analysis and competitor insights.",
    },
    {
      num: "02",
      title: "Onboarding & Growth Strategy",
      description: "Goals, audience, brand, and offer mapping.",
    },
    {
      num: "03",
      title: "Monthly Social Media Planner",
      description: "Content calendar and campaign planning.",
    },
    {
      num: "04",
      title: "AI-Powered Content Creation",
      description: "Social creatives, reels, and ad content.",
    },
    {
      num: "05",
      title: "Meta Ads Setup & Launch",
      description: "Audience targeting and campaign setup.",
    },
    {
      num: "06",
      title: "Lead Generation",
      description: "Meta lead ads, WhatsApp, and website leads.",
    },
    {
      num: "07",
      title: "Lead Tracking & Conversion",
      description: "Qualification, follow-up, and conversion.",
    },
    {
      num: "08",
      title: "Performance Analysis & Optimisation",
      description: "Reporting and continuous optimisation.",
    },
  ];

  return (
    <section id="system" className="py-24 relative bg-[#0a0514]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="How It Works" 
          subtitle="The 8-Step System"
        />

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-white/80 leading-relaxed font-medium">
            We run all eight stages for you — under one roof.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-accent/50 transition-colors"
            >
              <div className="absolute -top-4 -right-4 text-7xl font-black text-white/5 group-hover:text-accent/10 transition-colors duration-500 pointer-events-none select-none">
                {step.num}
              </div>
              
              <div className="text-accent font-bold text-lg mb-4">
                Step {step.num}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {step.title}
              </h3>
              
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16 pt-12 border-t border-white/10">
          <p className="text-lg text-white/60 italic">
            Ask any other agency — do they run all eight under one roof?
          </p>
        </div>
      </div>
    </section>
  );
}
