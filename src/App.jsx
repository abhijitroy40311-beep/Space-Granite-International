import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Materials from './components/Materials';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Applications from './components/Applications';
import Showroom from './components/Showroom';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileContactBar from './components/MobileContactBar';

export default function App() {
  return (
    <div className="relative min-h-screen pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Materials />
        <Gallery />
        <WhyChooseUs />
        <Applications />
        <Showroom />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileContactBar />
    </div>
  );
}
