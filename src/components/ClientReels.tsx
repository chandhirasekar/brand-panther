"use client";

import { useState, useRef } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

export function ClientReels() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const reels = [
    { title: "Creative Campaign 1", category: "Brand Growth", src: "/videos/reels-1.mp4" },
    { title: "Creative Campaign 2", category: "Brand Growth", src: "/videos/reels-2.mp4" },
    { title: "Creative Campaign 3", category: "Brand Growth", src: "/videos/reels-3.mp4" },
    { title: "Creative Campaign 4", category: "Brand Growth", src: "/videos/reels-4.mp4" },
    { title: "Creative Campaign 5", category: "Brand Growth", src: "/videos/reels-5.mp4" }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by roughly the width of one card + gap
      const scrollAmount = clientWidth > 768 ? clientWidth / 3 : clientWidth;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative bg-[#050308]">
      <div className="container mx-auto px-6 md:px-12 relative">
        <SectionTitle 
          title="Our Work — Reels & Creatives" 
          subtitle="Real Results"
        />
        <p className="text-gray-400 text-center max-w-3xl mx-auto -mt-8 mb-12 text-lg">
          We create reels and posters using AI tools combined with human editing and Tamil-first scripting. Here's some of what we've made for our clients.
        </p>

        <div className="relative max-w-6xl mx-auto mt-12">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full items-center justify-center text-white z-20 transition-colors hidden md:flex border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full items-center justify-center text-white z-20 transition-colors hidden md:flex border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 px-4 md:px-0 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveVideo(reel.src)}
                className="relative flex-none w-[75%] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] aspect-[9/16] snap-center bg-black border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <video 
                  src={reel.src}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transition-transform duration-300 group-hover:translate-y-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-1 inline-block mb-2 border border-white/10">
                    <span className="text-accent text-xs font-bold">{reel.category}</span>
                  </div>
                  <h4 className="text-white font-semibold text-lg">{reel.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[60]"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={activeVideo}
                className="w-full h-full object-cover"
                autoPlay
                controls
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
