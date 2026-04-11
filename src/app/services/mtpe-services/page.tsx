'use client';

import { motion } from 'framer-motion';
import { Zap, CheckCircle, ArrowRight, Globe, Clock, Shield, Star, BarChart, Users, FileText, TrendingUp, Cpu } from 'lucide-react';

export default function MTPEServices() {
  const benefits = [
    {
      icon: Zap,
      title: 'Neural MT Integration',
      description: 'State-of-the-art machine translation engines with custom training'
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'Immediate translation with instant quality metrics and feedback'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Multi-tier review process ensuring professional-grade output'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Handle enterprise volumes with consistent quality and speed'
    }
  ];

  const features = [
    {
      icon: Cpu,
      title: 'Custom Engine Training',
      description: 'Domain-specific MT models trained on your industry terminology'
    },
    {
      icon: BarChart,
      title: 'Real-time Quality Metrics',
      description: 'Live scoring and feedback during the translation process'
    },
    {
      icon: Users,
      title: 'Expert Linguists',
      description: 'Professional post-editors specialized in your industry'
    },
    {
      icon: Globe,
      title: '140+ Languages',
      description: 'Comprehensive language coverage with native speakers'
    }
  ];

  const industries = [
    {
      icon: FileText,
      title: 'E-commerce',
      description: 'Product descriptions, customer reviews, and marketing content'
    },
    {
      icon: Users,
      title: 'Software',
      description: 'UI strings, documentation, and technical manuals'
    },
    {
      icon: Globe,
      title: 'Healthcare',
      description: 'Medical records, patient information, and research papers'
    },
    {
      icon: BarChart,
      title: 'Finance',
      description: 'Reports, statements, and compliance documentation'
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
              <a href="/services/mtpe-services" className="text-purple-400">MTPE Services</a>
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
              <Zap className="w-16 h-16 text-purple-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                MTPE Services
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Machine Translation Post-Editing combines cutting-edge MT engines with expert human linguists 
              to deliver high-quality translations at unprecedented speed and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                View Demo
              </button>
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center mb-16"
          >
            <h2 className="text-2xl font-bold mb-4">
              Revolutionize Your Translation Workflow
            </h2>
            <p className="text-purple-100 mb-6">
              Experience 10x faster translation with 95%+ accuracy. Perfect for high-volume content needs.
            </p>
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition">
              Try Free Sample
            </button>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose MTPE?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <benefit.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features</h2>
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

          {/* Industries Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Industry Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <industry.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-purple-900/30 border border-purple-400/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Competitive Pricing</h2>
              <p className="text-xl text-purple-300 mb-8">
                Contact us for competitive pricing tailored to your volume needs
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Light</h3>
                  <p className="text-gray-400 text-sm">Basic MTPE for general content</p>
                </div>
                <div className="bg-purple-600/20 border border-purple-400/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Professional</h3>
                  <p className="text-gray-300 text-sm">Enhanced quality + terminology management</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                  <p className="text-gray-400 text-sm">Custom engines + dedicated team</p>
                </div>
              </div>
              <a href="/contact" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-semibold transition">
                Get Custom Quote
              </a>
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our MTPE Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Content Analysis</h3>
                <p className="text-gray-300">Analyze content type and domain requirements</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">MT Engine Selection</h3>
                <p className="text-gray-300">Choose optimal MT engine for your content</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Post-Editing</h3>
                <p className="text-gray-300">Human linguists refine and perfect translations</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-gray-300">Final review and delivery with metrics</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Scale Your Translation Operations?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join leading companies using MTPE for high-volume, high-quality translations at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
