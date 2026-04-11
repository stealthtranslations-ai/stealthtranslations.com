'use client';

import { motion } from 'framer-motion';
import { FileText, CheckCircle, ArrowRight, Globe, Shield, Star, Award } from 'lucide-react';

export default function Certification() {
  const services = [
    {
      icon: Shield,
      title: 'Legal Certification',
      description: 'Official certification for legal documents and proceedings'
    },
    {
      icon: Award,
      title: 'Notarization',
      description: 'Notarized translations for official use'
    },
    {
      icon: Globe,
      title: 'Apostille Services',
      description: 'Apostille certification for international documents'
    },
    {
      icon: FileText,
      title: 'Consular Legalization',
      description: 'Consular services for document authentication'
    }
  ];

  const features = [
    {
      icon: Star,
      title: 'Government Recognized',
      description: 'Certifications recognized by government authorities'
    },
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Full compliance with international legal standards'
    },
    {
      icon: Globe,
      title: 'International Validity',
      description: 'Valid in multiple countries and jurisdictions'
    },
    {
      icon: CheckCircle,
      title: 'Fast Processing',
      description: 'Efficient processing and delivery of certified documents'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold">Stealth Translations</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/services" className="hover:text-green-400 transition">Services</a>
              <a href="/services/certification" className="text-green-400">Certification</a>
              <a href="/about" className="hover:text-green-400 transition">About</a>
              <a href="/contact" className="hover:text-green-400 transition">Contact</a>
            </div>
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition">
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
              <FileText className="w-16 h-16 text-green-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Certification Services
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Following a legal process to allow proper legal use of documents in other domiciles. 
              Professional certification services for international document validation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Get Certification Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                View Requirements
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
            <h2 className="text-4xl font-bold mb-12 text-center">Certification Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <service.icon className="w-12 h-12 text-green-400 mb-4" />
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
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Certification?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/60 to-green-900/30 border border-green-400/20 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-green-900/40 transition"
                >
                  <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />
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
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Need Document Certification?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Let our experts handle your document certification needs with professional accuracy.
            </p>
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center mx-auto">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
