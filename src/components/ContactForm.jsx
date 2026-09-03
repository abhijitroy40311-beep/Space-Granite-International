import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    material: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.material) newErrors.material = 'Please select a material';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setStatus('submitting');
    setErrors({});
    
    try {
      const response = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send enquiry');
      }

      setFormData({ name: '', phone: '', email: '', material: '', message: '' });
      navigate('/thank-you');
    } catch (error) {
      console.error(error);
      setStatus('error');
      // Set idle after showing error for 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-6">
              Let's Find the Right Stone for Your Space
            </h2>
            <p className="text-gray-600 font-light text-lg mb-10">
              Have a requirement? Speak with our team about granite, marble or tiles for your project.
            </p>
            
            <div className="space-y-6">
              <a href="tel:+919821045228" className="flex items-center space-x-4 p-6 bg-white shadow-sm rounded-sm group hover:shadow-md transition-shadow">
                <div className="bg-secondary p-3 rounded-full text-primary group-hover:text-accent transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Call Us</div>
                  <div className="text-xl font-medium text-primary">+91 98210 45228</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-white p-8 md:p-12 shadow-sm rounded-sm"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-heading text-3xl text-primary mb-2">Enquiry Sent Successfully</h3>
                <p className="text-gray-600">Thank you for reaching out. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-sm">
                    There was an error sending your enquiry. Please try again later.
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors`}
                      placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors`}
                      placeholder="Enter phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email (Optional)</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-2">Material Interested In *</label>
                    <div className="relative">
                      <select 
                        id="material" 
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${errors.material ? 'border-red-500' : 'border-gray-300'} rounded-sm appearance-none bg-transparent focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors`}
                      >
                        <option value="" disabled>Select Material</option>
                        <option value="Granite">Granite</option>
                        <option value="Marble">Marble</option>
                        <option value="Tiles">Tiles</option>
                        <option value="Not Sure">Not Sure</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    {errors.material && <p className="text-red-500 text-xs mt-1">{errors.material}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Tell us about your requirement..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-primary text-white py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors rounded-sm flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Enquiry</span>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
