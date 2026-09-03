import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Mukesh Kumawat",
      text: "Best Quality Granite Supplier with 30 year Experience with Good Behaviour Delivery on Time"
    },
    {
      name: "Ashish Pal",
      text: "Premium Granite Showroom with Good Quality"
    },
    {
      name: "Local Guide",
      text: "Best Showroom in Mumbai"
    },
    {
      name: "Customer",
      text: "They offer outstanding quality, fair prices, and excellent customer service."
    },
    {
      name: "Customer",
      text: "Providing granite, marble and tiles with best quality and pure finishing work."
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl text-primary mb-4"
            >
              What Customers Say
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-3"
            >
              <span className="font-heading text-3xl text-primary font-bold">4.9 / 5</span>
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">58 Google Reviews</span>
            </motion.div>
          </div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://www.google.com/search?q=Space+Granite+International+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-primary pb-1 text-primary font-medium tracking-wide uppercase text-sm hover:text-accent hover:border-accent transition-colors"
          >
            View Google Reviews
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-sm shadow-sm flex flex-col h-full"
            >
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed flex-1 mb-6">
                "{review.text}"
              </p>
              <div className="font-medium text-primary border-t border-gray-100 pt-4">
                {review.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
