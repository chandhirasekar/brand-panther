"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 group inline-flex mb-6">
              <Image 
                src="/brand-panther.png" 
                alt="Brand Panther" 
                width={100} 
                height={100} 
                className="h-12 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <span
                className="font-gothic text-2xl md:text-3xl tracking-wide text-white group-hover:text-accent transition-colors"
              >
                Brand Panther
              </span>
            </a>
            <p className="text-white/60 max-w-sm leading-relaxed mb-6">
              AI-Powered Digital Growth Partner. We combine AI, creativity, and performance marketing to build revenue systems.
            </p>

          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/60 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#system" className="text-white/60 hover:text-accent transition-colors">System</a></li>
              <li><a href="#package" className="text-white/60 hover:text-accent transition-colors">Package</a></li>
              <li><a href="#about" className="text-white/60 hover:text-accent transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>brandpanther.ai@gmail.com</li>
              <li>+91 90245 30301</li>
              <li>Chennai, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Brand Panther. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent text-xs font-bold tracking-widest uppercase">
              GROW. ENGAGE. CONVERT.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
