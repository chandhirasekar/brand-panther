"use client";

import { SectionTitle } from "./ui/SectionTitle";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const benefits = [
    "Attract qualified leads",
    "Automate marketing",
    "Create engaging content",
    "Increase revenue",
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div data-aos="fade-right">
            <SectionTitle 
              title="Building Growth Systems" 
              subtitle="About Us"
              align="left"
              className="mb-8"
            />
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              We don't just run ads or make posts. From AI-generated creatives to intelligent advertising and analytics, we build complete growth systems that deliver measurable business results from the first click to the final sale.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-white/90 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" className="relative">
            <div className="bg-[#0d0a14] border border-[#2a2438] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <h3 className="text-3xl font-bold text-white mb-6">The Output</h3>
              <p className="text-xl text-white/80 mb-12">
                Not six services on a menu — one connected engine. Every asset we create feeds the next stage.
              </p>
              <div className="p-6 rounded-xl bg-black/50 border border-white/10 backdrop-blur-sm">
                <p className="text-2xl md:text-3xl font-bold text-center">
                  <span className="text-white">QUALIFIED LEADS.</span><br/>
                  <span className="text-accent">MEASURABLE REVENUE.</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
