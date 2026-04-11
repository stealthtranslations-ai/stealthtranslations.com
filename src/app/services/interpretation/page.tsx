'use client';

import { motion } from 'framer-motion';
import { Users, CheckCircle, ArrowRight, Globe, Clock, Shield, Star, Mic } from 'lucide-react';

export default function Interpretation() {
  const services = [
    {
      icon: Mic,
      title: 'Simultaneous Interpretation',
      description: 'Real-time interpretation for conferences and large events'
    },
    {
      icon: Users,
      title: 'Consecutive Interpretation',
      description: 'Professional interpretation for meetings and presentations'
    },
    {
      icon: Globe,
      title: 'Remote Interpretation',
      description: 'Virtual interpretation services for online events'
    },
    {
      icon: Shield,
      title: 'On-site Services',
      description: 'In-person interpretation at your location'
    }
  ];

  const features = [
    {
      icon: Star,
      title: 'Expert Interpreters',
      description: 'Professional certified interpreters with industry expertise'
    },
    {
      icon: Globe,
      title: '140+ Languages',
      description: 'Comprehensive language coverage including rare languages'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock interpretation services'
    },
    {
      icon: Shield,
      title: 'Confidential Service',
      description: 'Strict confidentiality and professional standards'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold">Stealth Translations</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/services" className="hover:text-purple-400 transition">Services</a>
              <a href="/services/interpretation" className="text-purple-400">Interpretation</a>
              <a href="/about" className="hover:text-purple-400 transition">About</a>
              <a href="/contact" className="hover:text-purple-400 transition">Contact</a>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition">
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Users className="w-16 h-16 text-purple-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Interpretation Services
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our personable and enthusiastic interpreters are ready to assist bridge the language barrier on your behalf. 
              Professional interpretation services for any event or occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Get Interpretation Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                View Our Interpreters
              </button>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Interpretation Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Interpreters?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/60 to-purple-900/30 border border-purple-400/20 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-purple-900/40 transition"
                >
                  <feature.icon className="w-12 h-12 text-pink-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Need Professional Interpretation Services?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let our expert interpreters help you communicate effectively across language barriers.
            </p>
            <a href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center mx-auto">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
