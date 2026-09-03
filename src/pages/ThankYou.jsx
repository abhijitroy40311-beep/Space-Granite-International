import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative pb-16 md:pb-0">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl w-full bg-white p-10 md:p-16 rounded-sm shadow-sm text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-green-50 text-green-600 p-4 rounded-full">
              <CheckCircle2 size={64} strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading text-primary mb-4">
            Thank You!
          </h1>
          
          <p className="text-gray-600 text-lg mb-10 font-light">
            Your enquiry has been sent successfully. Our team will get back to you shortly to discuss your requirement.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors rounded-sm"
          >
            <ArrowLeft size={20} />
            <span>Return to Home</span>
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
