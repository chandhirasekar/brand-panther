"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "System", href: "#system" },
    { name: "Package", href: "#package" },
  ];

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center",
        isScrolled ? "top-6 px-4 md:px-12" : "top-0 px-0"
      )}
    >
      <div
        className={cn(
          "w-full transition-all duration-500 flex items-center justify-between",
          isScrolled
            ? "max-w-6xl rounded-full px-6 py-3 bg-[#0d0a14]/90 backdrop-blur-xl border border-[#2a2438] shadow-2xl"
            : "max-w-full rounded-none px-6 md:px-12 py-6 bg-transparent border-transparent"
        )}
      >
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <Image 
              src="/brand-panther.png" 
              alt="Brand Panther Logo" 
              width={100} 
              height={100} 
              className="h-12 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
            />
            <span
              className="font-gothic text-2xl md:text-3xl tracking-wide text-white group-hover:text-accent transition-colors"
              style={{ textShadow: "0 0 15px rgba(255,255,255,0.2)" }}
            >
              Brand Panther
            </span>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav
          className={cn(
            "hidden md:flex items-center gap-8 px-8 py-2 transition-all duration-500",
            isScrolled ? "bg-[#1a1423] rounded-full border border-transparent" : "bg-transparent border border-transparent"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end hidden md:flex">
          <Button size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Free Audit
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white shrink-0 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full mt-4 left-4 right-4 bg-[#0d0a14] border border-[#2a2438] rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            className="w-full mt-4"
            onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Free Business Audit
          </Button>
        </div>
      )}
    </header>
  );
}
