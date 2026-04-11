'use client';

import { motion } from 'framer-motion';
import { Brain, CheckCircle, ArrowRight, Globe, Zap, Clock, Shield, Star, BarChart, Users, FileText, TrendingUp } from 'lucide-react';

export default function AIPostEditing() {
  const benefits = [
    {
      icon: CheckCircle,
      title: '99%+ Accuracy Guarantee',
      description: 'Our AI post-editing process ensures near-perfect accuracy with human oversight'
    },
    {
      icon: Clock,
      title: '50% Faster Delivery',
      description: 'Significantly reduced turnaround times compared to traditional translation'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Multi-layer review process combining AI efficiency with human expertise'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Handle large volumes efficiently without compromising quality'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'AI Initial Translation',
      description: 'Advanced neural networks provide the first-pass translation'
    },
    {
      step: '2',
      title: 'Expert Review',
      description: 'Human linguists review and refine the AI output'
    },
    {
      step: '3',
      title: 'Contextual Enhancement',
      description: 'Cultural and contextual nuances are carefully integrated'
    },
    {
      step: '4',
      title: 'Final Quality Check',
      description: 'Comprehensive review ensures accuracy and natural flow'
    }
  ];

  const useCases = [
    {
      icon: FileText,
      title: 'Technical Documentation',
      description: 'Complex technical manuals and specifications'
    },
    {
      icon: Users,
      title: 'Marketing Content',
      description: 'Marketing materials that require cultural adaptation'
    },
    {
      icon: Globe,
      title: 'Legal Documents',
      description: 'Legal contracts and compliance documentation'
    },
    {
      icon: BarChart,
      title: 'Financial Reports',
      description: 'Annual reports and financial statements'
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
              <a href="/services/ai-post-editing" className="text-blue-400">AI Post-Editing</a>
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
              <Brain className="w-16 h-16 text-blue-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Post-Editing
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Enhance machine-translated content with expert human oversight. Our AI-assisted post-editing ensures 
              nuance, context, and cultural accuracy with 99%+ accuracy guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                View Sample
              </button>
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center mb-16"
          >
            <h2 className="text-2xl font-bold mb-4">
              Ready to Transform Your Translation Workflow?
            </h2>
            <p className="text-blue-100 mb-6">
              Get started today and see how AI post-editing can save you 50% on translation costs while maintaining 99%+ accuracy.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition">
              Request Free Sample
            </button>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose AI Post-Editing?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <benefit.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Perfect For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <useCase.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
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
            <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/30 border border-blue-400/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us for competitive pricing tailored to your needs
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Basic</h3>
                  <p className="text-gray-400 text-sm">Standard AI post-editing</p>
                </div>
                <div className="bg-blue-600/20 border border-blue-400/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Professional</h3>
                  <p className="text-gray-300 text-sm">Enhanced review + cultural adaptation</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                  <p className="text-gray-400 text-sm">Premium + dedicated support</p>
                </div>
              </div>
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition">
                Get Custom Quote
              </a>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Transform Your Translation Strategy Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of companies leveraging AI post-editing for faster, more accurate translations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
