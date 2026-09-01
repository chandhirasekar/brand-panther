"use client";

import { SectionTitle } from "./ui/SectionTitle";

export function Testimonials() {
  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Testimonials"
        />

        <div className="max-w-3xl mx-auto mt-16 bg-[#111] border border-white/5 p-12 rounded-3xl relative text-center">
          <p className="text-white/80 text-xl leading-relaxed italic mb-8">
            "Founding clients — case studies coming soon"
          </p>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-white font-bold">Balaji</h4>
            <p className="text-white/50 text-sm">Founder, Brand Panther</p>
          </div>
        </div>
      </div>
    </section>
  );
}
