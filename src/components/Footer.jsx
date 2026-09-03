import React from 'react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="block font-heading font-bold text-xl tracking-wider uppercase text-white">
                Space Granite
              </span>
              <span className="block text-xs tracking-[0.2em] uppercase mt-1 text-gray-400">
                International - RM Jain Group
              </span>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm">
              Premium granite, marble, and tiles for residential and commercial architecture. Quality and finishing you can trust.
            </p>
          </div>

          <div>
            <h4 className="font-medium tracking-widest uppercase text-sm mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><button onClick={() => scrollTo('about')} className="hover:text-accent transition-colors">About Us</button></li>
              <li><button onClick={() => scrollTo('materials')} className="hover:text-accent transition-colors">Materials</button></li>
              <li><button onClick={() => scrollTo('why-us')} className="hover:text-accent transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => scrollTo('reviews')} className="hover:text-accent transition-colors">Customer Reviews</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-widest uppercase text-sm mb-6 text-white">Business</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><button onClick={() => scrollTo('materials')} className="hover:text-accent transition-colors">Granite</button></li>
              <li><button onClick={() => scrollTo('materials')} className="hover:text-accent transition-colors">Marble</button></li>
              <li><button onClick={() => scrollTo('materials')} className="hover:text-accent transition-colors">Tiles</button></li>
              <li><button onClick={() => scrollTo('showroom')} className="hover:text-accent transition-colors">Showroom</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-widest uppercase text-sm mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li>
                <a href="tel:+919821045228" className="hover:text-accent transition-colors block">
                  Call: +91 98210 45228
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919821045228?text=Hello%20Space%20Granite%20International%2C%20I%20would%20like%20to%20know%20more%20about%20your%20granite%2C%20marble%20and%20tiles."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors block"
                >
                  WhatsApp Enquiry
                </a>
              </li>
              <li className="leading-relaxed">
                Shop No. 3 & 4, Beacon Apartment,<br />
                Milan Subway Road, Vile Parle East,<br />
                Mumbai, Maharashtra 400057
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light tracking-wide gap-4 text-center md:text-left">
          <p>© 2026 Space Granite International - RM Jain Group. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
}
