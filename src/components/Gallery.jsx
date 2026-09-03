import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1745301558339-44eb3217d5da?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Interior Applications" },
    { id: 2, src: "https://images.unsplash.com/photo-1723712315295-a848a7c9276c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Granite" },
    { id: 3, src: "https://images.unsplash.com/photo-1646349336117-559f1f5c94e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Tiles" },
    { id: 4, src: "https://plus.unsplash.com/premium_photo-1691030925305-823bb3f578c7?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Marble" },
    { id: 5, src: "https://images.unsplash.com/photo-1727689484465-c704c115740e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2xhYnMlMjBUaWxlJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D", category: "Slabs" },
    { id: 6, src: "https://media.istockphoto.com/id/1036248830/photo/ceramic-shop-picture.webp?a=1&b=1&s=612x612&w=0&k=20&c=WN83bfrWcDmhngUSQIQEVuTP3nDZlSknTvHRSEd5JXU=", category: "Showroom" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 bg-background border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-primary"
          >
            Visual Gallery
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-sm bg-gray-100"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={img.src} 
                alt={img.category} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <ZoomIn className="text-white mb-2" size={32} />
                <span className="text-white font-medium tracking-wide uppercase text-sm">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2 hidden md:block"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2 hidden md:block"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img 
                src={images[currentImageIndex].src} 
                alt={images[currentImageIndex].category}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-white/80 font-medium tracking-widest uppercase text-sm">
                {images[currentImageIndex].category}
              </div>
              
              {/* Mobile controls inside container */}
              <div className="flex md:hidden justify-between w-full mt-6">
                <button className="text-white/70 hover:text-white p-2" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="text-white/70 hover:text-white p-2" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
