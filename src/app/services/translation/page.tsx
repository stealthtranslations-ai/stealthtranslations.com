'use client';

import { motion } from 'framer-motion';
import { Languages, CheckCircle, ArrowRight, Globe, Users, FileText, Star, Clock, Shield } from 'lucide-react';

export default function Translation() {
  const features = [
    {
      icon: Globe,
      title: '140+ Languages',
      description: 'Comprehensive language coverage including rare and regional languages'
    },
    {
      icon: Shield,
      title: 'ISO 17100 Certified',
      description: 'Quality management system certified to international standards'
    },
    {
      icon: Users,
      title: 'Expert Linguists',
      description: 'Native speakers with subject matter expertise'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Efficient workflows ensuring timely delivery'
    }
  ];

  const specializations = [
    {
      icon: FileText,
      title: 'Technical Documentation',
      description: 'Manuals, specifications, and technical guides'
    },
    {
      icon: Users,
      title: 'Legal Documents',
      description: 'Contracts, patents, and legal correspondence'
    },
    {
      icon: Star,
      title: 'Medical Content',
      description: 'Clinical trials, research papers, and patient information'
    },
    {
      icon: FileText,
      title: 'Financial Reports',
      description: 'Annual reports, statements, and analysis'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Stealth Translations</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/services" className="hover:text-blue-400 transition">Services</a>
              <a href="/services/translation" className="text-blue-400">Translation</a>
              <a href="/about" className="hover:text-blue-400 transition">About</a>
              <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition">
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
              <Languages className="w-16 h-16 text-blue-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Professional Translation
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Quality technical translations in any electronic format, certified to ISO 17100 standards. 
              Our expert linguists deliver accurate, culturally appropriate translations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Get Translation Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                View Sample
              </button>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Translation Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Specializations Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Specializations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specializations.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/60 to-blue-900/30 border border-blue-400/20 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-blue-900/40 transition"
                >
                  <spec.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{spec.title}</h3>
                  <p className="text-gray-300">{spec.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Translate Your Content?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get professional translation services that meet international quality standards.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center mx-auto">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
