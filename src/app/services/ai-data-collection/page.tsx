'use client';

import { motion } from 'framer-motion';
import { Database, CheckCircle, ArrowRight, Globe, Shield, Users, FileText, TrendingUp, Search, Filter, Download } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function AIDataCollection() {
  const capabilities = [
    {
      icon: Globe,
      title: '140+ Language Coverage',
      description: 'Comprehensive data collection across major and low-resource languages'
    },
    {
      icon: Shield,
      title: 'Quality-Verified Datasets',
      description: 'Rigorous quality assurance and validation processes'
    },
    {
      icon: Users,
      title: 'Ethical Sourcing',
      description: 'Compliant with data privacy regulations and ethical guidelines'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Operations',
      description: 'Handle projects of any size with consistent quality'
    }
  ];

  const dataTypes = [
    {
      icon: FileText,
      title: 'Parallel Corpora',
      description: 'Aligned text pairs for machine translation training'
    },
    {
      icon: Users,
      title: 'Conversational Data',
      description: 'Dialogue and chat data for conversational AI'
    },
    {
      icon: Search,
      title: 'Web Content',
      description: 'Curated web content with proper licensing'
    },
    {
      icon: Filter,
      title: 'Domain-Specific Data',
      description: 'Specialized datasets for specific industries and use cases'
    }
  ];

  const industries = [
    {
      icon: FileText,
      title: 'Healthcare',
      description: 'Medical literature, patient records, research papers'
    },
    {
      icon: Users,
      title: 'Finance',
      description: 'Financial reports, market data, compliance documents'
    },
    {
      icon: Globe,
      title: 'E-commerce',
      description: 'Product descriptions, reviews, customer interactions'
    },
    {
      icon: TrendingUp,
      title: 'Technology',
      description: 'Technical documentation, code, support content'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Requirements Definition',
      description: 'Understand your specific data needs and quality standards'
    },
    {
      step: '2',
      title: 'Data Sourcing',
      description: 'Identify and collect data from ethical, licensed sources'
    },
    {
      step: '3',
      title: 'Quality Assurance',
      description: 'Clean, validate, and verify data quality and accuracy'
    },
    {
      step: '4',
      title: 'Delivery & Support',
      description: 'Format and deliver data with ongoing support'
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
              <a href="/services/ai-data-collection" className="text-orange-400">AI Data Collection</a>
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
              <Database className="w-16 h-16 text-orange-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                AI Data Collection
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive multilingual data collection services for AI training. From parallel corpora to 
              annotated datasets, we provide the foundation for your AI success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Start Data Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                View Data Samples
              </button>
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-center mb-16"
          >
            <h2 className="text-2xl font-bold mb-4">
              Build Better AI with Quality Data
            </h2>
            <p className="text-orange-100 mb-6">
              Access ethically sourced, high-quality multilingual datasets trusted by leading AI companies.
            </p>
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition">
              Request Data Consultation
            </button>
          </motion.div>

          {/* Capabilities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <capability.icon className="w-12 h-12 text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Types Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Data Types We Collect</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataTypes.map((dataType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/60 to-orange-900/30 border border-orange-400/20 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-orange-900/40 transition"
                >
                  <dataType.icon className="w-12 h-12 text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{dataType.title}</h3>
                  <p className="text-gray-300">{dataType.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Data Collection Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industries Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Industry Specialization</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <industry.icon className="w-12 h-12 text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quality Assurance Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-orange-900/30 border border-orange-400/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Quality Assurance & Compliance</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-orange-300">Quality Standards</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span>Multi-stage validation process</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span>Native speaker verification</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span>Automated quality scoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span>Regular audits and reviews</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-orange-300">Compliance & Ethics</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span>GDPR and privacy compliance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span>Ethical data sourcing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span>Proper licensing and attribution</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span>Transparent data provenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-orange-900/30 border border-orange-400/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Custom Data Solutions</h2>
              <p className="text-xl text-gray-300 mb-8">
                Tailored pricing based on data volume, complexity, and quality requirements
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Standard</h3>
                  <p className="text-gray-400 text-sm">General purpose datasets</p>
                </div>
                <div className="bg-orange-600/20 border border-orange-400/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Professional</h3>
                  <p className="text-gray-300 text-sm">Domain-specific + enhanced QA</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                  <p className="text-gray-400 text-sm">Custom collection + ongoing support</p>
                </div>
              </div>
              <a href="/contact" className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-full font-semibold transition">
                Get Custom Quote
              </a>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Access Premium AI Training Data?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Partner with us to source high-quality, ethically collected multilingual data for your AI projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Start Data Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                Download Data Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
