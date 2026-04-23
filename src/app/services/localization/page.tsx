'use client';

import { motion } from 'framer-motion';
import { Globe, CheckCircle, ArrowRight, Languages, Shield, Star, Map } from 'lucide-react';

export default function Localization() {
  const services = [
    {
      icon: Globe,
      title: 'Website Localization',
      description: 'Complete website adaptation for target markets'
    },
    {
      icon: Languages,
      title: 'Software Localization',
      description: 'Software and app localization for global users'
    },
    {
      icon: Map,
      title: 'Cultural Adaptation',
      description: 'Cultural nuance adaptation for local relevance'
    },
    {
      icon: Shield,
      title: 'Regional Compliance',
      description: 'Compliance with regional regulations and standards'
    }
  ];

  const features = [
    {
      icon: Star,
      title: 'Cultural Experts',
      description: 'Native speakers with cultural expertise'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Localization for 140+ languages and regions'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes'
    },
    {
      icon: CheckCircle,
      title: 'Technical Integration',
      description: 'Seamless integration with existing systems'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-orange-400" />
              <span className="text-xl font-bold">Stealth Translations</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/services" className="hover:text-orange-400 transition">Services</a>
              <a href="/services/localization" className="text-orange-400">Localization</a>
              <a href="/about" className="hover:text-orange-400 transition">About</a>
              <a href="/contact" className="hover:text-orange-400 transition">Contact</a>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-full transition">
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
              <Globe className="w-16 h-16 text-orange-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Localization Services
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Excellence in cultural and regional linguistic fine-tuning to ensure the effectiveness of your translation project. 
              Professional localization for global market success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Get Localization Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Localization Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <service.icon className="w-12 h-12 text-orange-400 mb-4" />
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
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Localization?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/60 to-orange-900/30 border border-orange-400/20 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-orange-900/40 transition"
                >
                  <feature.icon className="w-12 h-12 text-amber-400 mb-4" />
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
            className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Go Global?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Let our localization experts help you reach global markets with cultural precision.
            </p>
            <a href="/contact" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center mx-auto">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
