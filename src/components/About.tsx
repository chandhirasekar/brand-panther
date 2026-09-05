"use client";

import { SectionTitle } from "./ui/SectionTitle";

export function About() {
  return (
    <section id="about" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Who We Work With" 
          subtitle="Is this for me?"
        />
        
        <div className="max-w-4xl mx-auto text-center mt-12">
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            We work with local and growing businesses across all industries that want a steady flow of enquiries instead of one-off posts.
          </p>
          <p className="text-xl text-accent font-semibold mb-16">
            If you're spending on ads without knowing what's working, or posting without getting leads, this is built for you.
          </p>
        </div>
      </div>
    </section>
  );
}
