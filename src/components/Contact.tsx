"use client";

import { useState } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { Button } from "./ui/Button";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "9f64087a-cef2-49f0-819c-650c49637f6d"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Error", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      
      if (submitStatus !== "error") {
          setTimeout(() => {
              setSubmitStatus("idle");
          }, 3000);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Contact Us"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's build your growth system.</h3>
            <p className="text-white/70 mb-10 leading-relaxed">
              Tell us about your business. We’ll send back a free audit showing where you’re losing leads — usually within 24 hours.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@brandpanther.org" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Email Us</p>
                  <p className="text-white font-medium group-hover:text-accent transition-colors">hello@brandpanther.org</p>
                </div>
              </a>

              <a href="tel:+919025430301" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Call Us</p>
                  <p className="text-white font-medium group-hover:text-accent transition-colors">+91 90254 30301</p>
                </div>
              </a>

              <a href="https://wa.me/919025430301" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">WhatsApp</p>
                  <p className="text-white font-medium group-hover:text-[#25D366] transition-colors">Chat with us</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Location</p>
                  <p className="text-white font-medium">Chennai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first_name" className="text-sm text-white/70">First Name</label>
                  <input type="text" id="first_name" name="first_name" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last_name" className="text-sm text-white/70">Last Name</label>
                  <input type="text" id="last_name" name="last_name" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-white/70">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-white/70">Message</label>
                <textarea id="message" name="message" required rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell us about your business goals..."></textarea>
              </div>
              
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
              
              <Button type="submit" disabled={isSubmitting} className="w-full mt-4 flex items-center justify-center gap-2">
                {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <Send size={16} />}
              </Button>

              {submitStatus === "success" && (
                <div className="text-green-400 text-sm flex items-center justify-center gap-2 mt-4 bg-green-400/10 py-2 px-4 rounded-lg">
                  <CheckCircle2 size={16} /> Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="text-red-400 text-sm text-center mt-4 bg-red-400/10 py-2 px-4 rounded-lg">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
