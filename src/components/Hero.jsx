import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute -top-[30%] left-0 w-full h-[130%] z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Granite Showroom" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 md:mb-6">
            Space Granite International
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Premium Granite & Marble <br className="hidden md:block" />
            for Exceptional Spaces
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
            Discover premium granite, marble and tiles selected for quality, finishing and lasting beauty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={() => {
                const el = document.getElementById('materials');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center justify-center space-x-2 bg-white text-primary px-8 py-4 rounded-full font-medium tracking-wide transition-all hover:bg-gray-100"
            >
              <span>Explore Materials</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a 
              href="https://wa.me/919821045228?text=Hello%20Space%20Granite%20International%2C%20I%20would%20like%20to%20know%20more%20about%20your%20granite%2C%20marble%20and%20tiles."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-white/30 hover:border-white/80 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Small Trust Indicators */}
          <div className="flex flex-wrap gap-6 items-center text-sm font-medium text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="text-accent text-lg">★</span>
              <span>4.9 Google Rating</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
            <div>58+ Reviews</div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
            <div>Premium Showroom in Mumbai</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
