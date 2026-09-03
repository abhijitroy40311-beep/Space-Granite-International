import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: <Star size={20} />, title: "4.9★ Google Rating" },
    { icon: <MessageSquare size={20} />, title: "58 Reviews" },
    { icon: <ShieldCheck size={20} />, title: "30+ Years of Experience" },
    { icon: <Clock size={20} />, title: "Timely Delivery" },
  ];

  return (
    <div className="bg-primary text-white border-b border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x divide-white/10">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex items-center justify-center space-x-3 px-2 ${index % 2 !== 0 ? 'border-l border-white/10 md:border-0' : 'border-0'} ${index > 1 ? 'pt-4 md:pt-0 border-t border-white/10 md:border-t-0' : ''}`}
            >
              <div className="text-accent shrink-0">
                {item.icon}
              </div>
              <span className="text-sm md:text-base font-medium tracking-wide">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
