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
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white transition-all text-xs font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white transition-all text-xs font-bold">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white transition-all text-xs font-bold">
                IN
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white transition-all text-xs font-bold">
                X
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/60 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/60 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#system" className="text-white/60 hover:text-accent transition-colors">Growth System</a></li>
              <li><a href="#package" className="text-white/60 hover:text-accent transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>brandpanther.ai@gmail.com</li>
              <li>+91 90254 30301</li>
              <li>Chennai, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Brand Panther. All rights reserved.
          </p>
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
