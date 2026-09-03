import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Materials() {
  const materials = [
    {
      title: "Granite",
      description: "Natural strength with distinctive patterns.",
      image: "https://plus.unsplash.com/premium_photo-1764687618864-37c1aee713be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Marble",
      description: "Timeless elegance for sophisticated spaces.",
      image: "https://images.unsplash.com/photo-1785535573662-417e82193598?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Tiles",
      description: "Versatile surfaces for modern interiors.",
      image: "https://images.unsplash.com/photo-1760749124145-8ceea3f541b5?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Premium Finishing",
      description: "Finishing-focused selection for refined results.",
      image: "https://images.unsplash.com/photo-1763076470404-23554ef26747?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="materials" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-primary mb-4"
          >
            Explore Our Materials
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto font-light"
          >
            Premium surfaces for interiors, architecture and everyday living.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading text-2xl text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 font-light mb-6 flex-1">{item.description}</p>
                <button 
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-2 text-accent font-medium uppercase text-sm tracking-wide group-hover:text-primary transition-colors mt-auto text-left"
                >
                  <span>Enquire</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
