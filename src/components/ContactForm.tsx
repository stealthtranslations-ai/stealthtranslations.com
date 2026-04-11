'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
          });
        }, 3000);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again or contact us directly at info@stealthtranslations.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">Your message has been sent successfully. We'll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Contact Information */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
        
        <div className="flex items-start space-x-4">
          <div className="bg-blue-600/20 p-3 rounded-lg">
            <Mail className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Email Us</h4>
            <p className="text-gray-300">sales@stealthtranslations.com</p>
            <p className="text-gray-400 text-sm">We respond within 24 hours</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-blue-600/20 p-3 rounded-lg">
            <Phone className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Call Us</h4>
            <p className="text-gray-300">+44 28 28 267 103</p>
            <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM GMT</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-blue-600/20 p-3 rounded-lg">
            <MessageSquare className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Live Chat</h4>
            <p className="text-gray-300">Available on our website</p>
            <p className="text-gray-400 text-sm">Instant support during business hours</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-500/30">
          <h4 className="text-white font-semibold mb-2">Global Offices</h4>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li> Belfast, Northern Ireland (HQ)</li>
            <li> France, Poland, Albania</li>
            <li> Germany, Philippines, USA</li>
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+44 20 1234 5678"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Acme Corporation"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a service...</option>
            <optgroup label="AI-Powered Services">
              <option value="ai-data-engineering">AI Data Engineering</option>
              <option value="ai-post-editing">AI Post-Editing</option>
              <option value="mtpe-services">MTPE Services</option>
              <option value="multilingual-llm-training">Multilingual LLM Training</option>
              <option value="ai-data-collection">AI Data Collection</option>
              <option value="data-annotation">Data Annotation</option>
            </optgroup>
            <optgroup label="Traditional Services">
              <option value="translation">Translation</option>
              <option value="interpretation">Interpretation</option>
              <option value="certification">Certification</option>
              <option value="localization">Localization</option>
              <option value="voice-over">Voice Over</option>
              <option value="transcription">Transcription</option>
            </optgroup>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </motion.button>

        <p className="text-gray-400 text-sm text-center">
          We respect your privacy. Your information is secure and will never be shared.
        </p>
      </motion.form>
    </div>
  );
}
