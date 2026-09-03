import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 shadow-2xl">
              <img 
                src="https://plus.unsplash.com/premium_photo-1764687862296-d7b186a812f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJlbWl1bSUyMEdyYW5pdGUlMjBTaG93Um9vbXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Granite Showroom" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-accent/30 z-0 hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary leading-tight mb-8">
              Stone That Defines <br />
              <span className="text-accent italic">Exceptional Spaces</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed mb-10">
              <p>
                Space Granite International - RM Jain Group is a premium granite showroom and supplier serving customers in Mumbai. We focus on quality materials, refined finishing and dependable service for residential, commercial and architectural requirements.
              </p>
              <p>
                From timeless natural stone to contemporary surfaces, our showroom brings together materials designed to add character, durability and elegance to every space.
              </p>
            </div>

            <button 
              onClick={() => {
                const el = document.getElementById('showroom');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Visit Our Showroom
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
