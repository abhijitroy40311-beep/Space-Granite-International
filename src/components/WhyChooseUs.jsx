import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Layers, Users, Truck, Store } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award size={32} />,
      title: "Premium Quality",
      description: "Carefully selected materials with a focus on quality and finishing."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Trusted Experience",
      description: "More than three decades of experience is referenced in customer feedback."
    },
    {
      icon: <Layers size={32} />,
      title: "Wide Selection",
      description: "Explore granite, marble and tiles for different design requirements."
    },
    {
      icon: <Users size={32} />,
      title: "Professional Service",
      description: "Helpful assistance from selection to delivery."
    },
    {
      icon: <Truck size={32} />,
      title: "Timely Delivery",
      description: "Customers specifically mention timely delivery in reviews."
    },
    {
      icon: <Store size={32} />,
      title: "Showroom Experience",
      description: "Visit the Mumbai showroom and explore materials in person."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-white mb-6"
          >
            Why Choose Space Granite International?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-accent mx-auto"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <div className="text-accent mb-6 p-4 bg-white/5 rounded-full inline-block">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
