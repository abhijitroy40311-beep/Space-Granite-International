import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Materials', id: 'materials' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col z-50">
            <button onClick={() => scrollTo('top')} className="flex flex-col text-left">
              <span className={`font-heading font-bold text-xl md:text-2xl tracking-wider uppercase transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                Space Granite
              </span>
              <span className={`text-[0.65rem] md:text-xs tracking-[0.2em] uppercase mt-0.5 transition-colors ${
                isScrolled ? 'text-gray-500' : 'text-gray-300'
              }`}>
                International - RM Jain Group
              </span>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent relative group ${
                      isScrolled ? 'text-primary' : 'text-white'
                    }`}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+919821045228" 
              className={`flex items-center space-x-2 text-sm font-medium tracking-wide transition-colors ${
                isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
              }`}
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <a 
              href="https://wa.me/919821045228?text=Hello%20Space%20Granite%20International%2C%20I%20would%20like%20to%20know%20more%20about%20your%20granite%2C%20marble%20and%20tiles."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden z-50 p-2 transition-colors ${
              isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 lg:hidden pt-24 px-6 pb-6 flex flex-col"
          >
            <nav className="flex-1">
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        scrollTo(link.id);
                      }}
                      className="text-2xl font-heading text-primary hover:text-accent transition-colors block text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col space-y-4 mt-8 pb-12">
              <a 
                href="tel:+919821045228"
                className="flex justify-center items-center space-x-2 border border-primary text-primary py-3 rounded-full font-medium"
              >
                <Phone size={18} />
                <span>+91 98210 45228</span>
              </a>
              <a 
                href="https://wa.me/919821045228?text=Hello%20Space%20Granite%20International%2C%20I%20would%20like%20to%20know%20more%20about%20your%20granite%2C%20marble%20and%20tiles."
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-accent text-white py-3 rounded-full font-medium"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
