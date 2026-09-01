"use client";

import { SectionTitle } from "./ui/SectionTitle";
import { ShoppingBag, GraduationCap, Stethoscope, Store } from "lucide-react";

export function About() {
  const clientTypes = [
    { icon: ShoppingBag, label: "Fashion Labels" },
    { icon: GraduationCap, label: "Training Centres" },
    { icon: Stethoscope, label: "Clinics" },
    { icon: Store, label: "Retail Stores" },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Who We Work With" 
          subtitle="Is this for me?"
        />
        
        <div className="max-w-4xl mx-auto text-center mt-12">
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            We work with local and growing businesses across Chennai — fashion labels, training centres, clinics, retail stores, and service businesses — that want a steady flow of enquiries instead of one-off posts. 
          </p>
          <p className="text-xl text-accent font-semibold mb-16">
            If you're spending on ads without knowing what's working, or posting without getting leads, this is built for you.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientTypes.map((type, idx) => (
              <div key={idx} className="bg-black/50 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-white/10 transition-colors">
                <type.icon className="w-8 h-8 text-white/50" />
                <span className="text-white/80 font-medium">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
