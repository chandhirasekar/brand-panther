"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatYouGet } from "@/components/WhatYouGet";
import { GrowthSystem } from "@/components/GrowthSystem";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Pricing } from "@/components/Pricing";
import { PackageIncludes } from "@/components/PackageIncludes";
import { CTABanner } from "@/components/CTABanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <link rel="canonical" href="https://brand-panther-eta.vercel.app/" />
      <Navbar />
      <Hero />
      <About />
      <WhatYouGet />
      <GrowthSystem />
      <WhyChooseUs />
      <Pricing />
      <PackageIncludes />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
