'use client';

import { motion } from 'framer-motion';
import { FileText, CheckCircle, ArrowRight, Globe, Mic, Shield, Star, Volume2 } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function VoiceOver() {
  const services = [
    {
      icon: Mic,
      title: 'Commercial Voice Over',
      description: 'Professional voice overs for commercials and advertisements'
    },
    {
      icon: Volume2,
      title: 'E-learning Narration',
      description: 'Educational content narration and e-learning voice overs'
    },
    {
      icon: FileText,
      title: 'Documentary Voice Over',
      description: 'Documentary narration and storytelling voice overs'
    },
    {
      icon: Globe,
      title: 'Multi-language Dubbing',
      description: 'Dubbing services for multiple languages and markets'
    }
  ];

  const features = [
    {
      icon: Star,
      title: 'Professional Voice Artists',
      description: 'Experienced voice talent with diverse vocal ranges'
    },
    {
      icon: Mic,
      title: 'High-Quality Recording',
      description: 'Professional studio recording and editing'
    },
    {
      icon: Globe,
      title: 'Multiple Languages',
      description: 'Voice over services in 140+ languages'
    },
    {
      icon: Shield,
      title: 'Quick Turnaround',
      description: 'Fast delivery without compromising quality'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 text-white">
      <Navigation currentPage="/services/voice-over" />

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
              <FileText className="w-16 h-16 text-pink-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Voice Over Services
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Compel your target audience effectively after selecting from our diverse team, the perfect voice over artist. 
              Professional voice over services for all your audio needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Get Voice Over Quote
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
            <h2 className="text-4xl font-bold mb-12 text-center">Voice Over Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <service.icon className="w-12 h-12 text-pink-400 mb-4" />
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
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Voice Over?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/60 to-pink-900/30 border border-pink-400/20 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-pink-900/40 transition"
                >
                  <feature.icon className="w-12 h-12 text-rose-400 mb-4" />
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
            className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Need Professional Voice Over Services?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Let our voice artists bring your content to life with professional narration.
            </p>
            <a href="/contact" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center mx-auto">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
