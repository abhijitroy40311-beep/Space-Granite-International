import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-[60] md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <div className="flex w-full">
        
        <a 
          href="tel:+919821045228"
          className="flex-1 flex flex-col items-center justify-center py-3 text-primary hover:bg-gray-50 transition-colors border-r border-gray-200"
        >
          <Phone size={20} className="mb-1" />
          <span className="text-[10px] font-medium tracking-wide uppercase">Call</span>
        </a>

        <a 
          href="https://wa.me/919821045228?text=Hello%20Space%20Granite%20International%2C%20I%20would%20like%20to%20know%20more%20about%20your%20granite%2C%20marble%20and%20tiles."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 text-[#25D366] hover:bg-gray-50 transition-colors border-r border-gray-200"
        >
          <MessageCircle size={20} className="mb-1" />
          <span className="text-[10px] font-medium tracking-wide uppercase text-primary">WhatsApp</span>
        </a>

        <a 
          href="https://maps.google.com/?q=Space+Granite+International+Shop+No+3+4+Beacon+Apartment+Milan+Subway+Road+Vile+Parle+East+Mumbai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 text-primary hover:bg-gray-50 transition-colors"
        >
          <MapPin size={20} className="mb-1 text-accent" />
          <span className="text-[10px] font-medium tracking-wide uppercase">Directions</span>
        </a>

      </div>
    </div>
  );
}
