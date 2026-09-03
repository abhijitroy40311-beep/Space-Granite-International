import React from 'react';
import { motion } from 'motion/react';

export default function Applications() {
  const applications = [
    "Kitchen Countertops",
    "Flooring",
    "Wall Cladding",
    "Staircases",
    "Vanity Areas",
    "Commercial Spaces",
    "Luxury Interiors",
    "Architectural Projects"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-8">
              Designed for <br />
              <span className="italic text-accent">Beautiful Spaces</span>
            </h2>
            <p className="text-gray-600 font-light text-lg mb-10 leading-relaxed">
              Our premium granite, marble, and tiles are selected to suit a diverse range of applications. From residential elegance to commercial durability, these natural and engineered surfaces provide the perfect foundation for any design vision.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {applications.map((app, index) => (
                <li key={index} className="flex items-center space-x-3 text-primary font-medium">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full grid grid-cols-2 gap-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Kitchen Countertop" 
              className="w-full h-64 object-cover rounded-sm mt-8 shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Luxury Interior" 
              className="w-full h-64 object-cover rounded-sm shadow-md"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
