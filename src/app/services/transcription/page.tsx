'use client';

import { motion } from 'framer-motion';
import { FileText, CheckCircle, ArrowRight, Globe, Mic, Shield, Star, Headphones } from 'lucide-react';

export default function Transcription() {
  const services = [
    {
      icon: Mic,
      title: 'Audio Transcription',
      description: 'Professional audio transcription for all formats'
    },
    {
      icon: Headphones,
      title: 'Video Transcription',
      description: 'Video content transcription with timestamp accuracy'
    },
    {
      icon: FileText,
      title: 'Medical Transcription',
      description: 'Specialized medical transcription services'
    },
    {
      icon: Shield,
      title: 'Legal Transcription',
      description: 'Legal proceedings and document transcription'
    }
  ];

  const features = [
    {
      icon: Star,
      title: '99% Accuracy',
      description: 'High accuracy transcription with quality assurance'
    },
    {
      icon: Mic,
      title: 'Multiple Formats',
      description: 'Support for all audio and video formats'
    },
    {
      icon: Globe,
      title: 'Multiple Languages',
      description: 'Transcription services in 140+ languages'
    },
    {
      icon: Shield,
      title: 'Confidential Service',
      description: 'Secure handling of sensitive information'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold">Stealth Translations</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/services" className="hover:text-cyan-400 transition">Services</a>
              <a href="/services/transcription" className="text-cyan-400">Transcription</a>
              <a href="/about" className="hover:text-cyan-400 transition">About</a>
              <a href="/contact" className="hover:text-cyan-400 transition">Contact</a>
            </div>
            <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-full transition">
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
              <FileText className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Transcription Services
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Accurately convert media or scanned documents of your project into its electronic text format. 
              Professional transcription services with high accuracy and fast turnaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Get Transcription Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                Upload Sample
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
            <h2 className="text-4xl font-bold mb-12 text-center">Transcription Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
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
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Transcription?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/60 to-cyan-900/30 border border-cyan-400/20 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-cyan-900/40 transition"
                >
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
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
            className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Need Professional Transcription Services?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let our transcription experts convert your audio and video content to accurate text.
            </p>
            <a href="/contact" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center mx-auto">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
