import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Showroom() {
  return (
    <section id="showroom" className="py-24 bg-primary text-white relative overflow-hidden">
      
      {/* Subtle Background Pattern/Image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1620624021278-f7169bbaea3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Texture" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl mb-6"
        >
          Experience the Stone in Person
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-300 font-light text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          Visit our showroom in Vile Parle East, Mumbai and explore materials, textures and finishes in person.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm mb-12 backdrop-blur-sm max-w-2xl mx-auto flex flex-col items-center"
        >
          <MapPin size={32} className="text-accent mb-4" />
          <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light">
            Shop No. 3 & 4, Beacon Apartment,<br />
            Next To Fire Brigade, Milan Subway Road,<br />
            Veer Makrand Ghanekar Marg,<br />
            Vile Parle East, Vile Parle,<br />
            Mumbai, Maharashtra 400057
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a 
            href="https://maps.google.com/?q=Space+Granite+International+Shop+No+3+4+Beacon+Apartment+Milan+Subway+Road+Vile+Parle+East+Mumbai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-primary px-8 py-4 rounded-full font-medium tracking-wide transition-colors hover:bg-gray-100"
          >
            <MapPin size={18} />
            <span>Get Directions</span>
          </a>
          
          <a 
            href="tel:+919821045228" 
            className="w-full sm:w-auto flex items-center justify-center space-x-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium tracking-wide transition-colors hover:bg-white/10"
          >
            <Phone size={18} />
            <span>Call Showroom</span>
          </a>

          <a 
            href="https://wa.me/919821045228?text=Hello%20Space%20Granite%20International%2C%20I%20would%20like%20to%20know%20more%20about%20your%20granite%2C%20marble%20and%20tiles."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-full font-medium tracking-wide transition-colors hover:bg-accent/90"
          >
            <MessageCircle size={18} />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
