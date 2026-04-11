'use client';

import { motion } from 'framer-motion';
import { FileText, CheckCircle, ArrowRight, Globe, Tag, Users, Brain, TrendingUp, Search, Filter, Edit3, Layers, Shield } from 'lucide-react';

export default function DataAnnotation() {
  const capabilities = [
    {
      icon: Tag,
      title: 'NLP Annotation Experts',
      description: 'Specialized linguists trained in machine learning annotation techniques'
    },
    {
      icon: Shield,
      title: 'Quality Assurance Protocols',
      description: 'Multi-tier review process ensuring annotation accuracy and consistency'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Operations',
      description: 'Handle large-scale annotation projects with consistent quality'
    },
    {
      icon: Brain,
      title: 'Multiple Annotation Types',
      description: 'Comprehensive annotation services for various ML applications'
    }
  ];

  const annotationTypes = [
    {
      icon: Tag,
      title: 'Text Classification',
      description: 'Categorize and label text data for supervised learning'
    },
    {
      icon: Edit3,
      title: 'Named Entity Recognition',
      description: 'Identify and classify entities within text content'
    },
    {
      icon: Layers,
      title: 'Sentiment Analysis',
      description: 'Annotate emotional tone and sentiment in text'
    },
    {
      icon: Filter,
      title: 'Intent Recognition',
      description: 'Label user intents for conversational AI training'
    }
  ];

  const industries = [
    {
      icon: Users,
      title: 'Healthcare',
      description: 'Medical text annotation, entity recognition, and classification'
    },
    {
      icon: FileText,
      title: 'Finance',
      description: 'Financial document analysis and sentiment annotation'
    },
    {
      icon: Globe,
      title: 'E-commerce',
      description: 'Product categorization and review sentiment analysis'
    },
    {
      icon: Brain,
      title: 'Technology',
      description: 'Technical documentation annotation and code classification'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Project Setup',
      description: 'Define annotation guidelines and quality standards'
    },
    {
      step: '2',
      title: 'Team Training',
      description: 'Train annotators on specific requirements and guidelines'
    },
    {
      step: '3',
      title: 'Annotation Execution',
      description: 'Perform annotation with continuous quality monitoring'
    },
    {
      step: '4',
      title: 'Quality Review',
      description: 'Multi-tier review and validation of annotated data'
    }
  ];

  const qualityMetrics = [
    {
      metric: '95%+',
      label: 'Annotation Accuracy',
      description: 'Consistent high accuracy across all annotation types'
    },
    {
      metric: '24-48h',
      label: 'Turnaround Time',
      description: 'Fast delivery for standard annotation projects'
    },
    {
      metric: '140+',
      label: 'Languages Supported',
      description: 'Multilingual annotation capabilities'
    },
    {
      metric: '99.9%',
      label: 'Consistency Rate',
      description: 'High inter-annotator agreement and consistency'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-pink-400" />
              <span className="text-xl font-bold">Stealth Translations</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/services" className="hover:text-pink-400 transition">Services</a>
              <a href="/services/data-annotation" className="text-pink-400">Data Annotation</a>
              <a href="/about" className="hover:text-pink-400 transition">About</a>
              <a href="/contact" className="hover:text-pink-400 transition">Contact</a>
            </div>
            <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full transition">
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
              <FileText className="w-16 h-16 text-pink-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Data Annotation Services
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Expert linguistic annotation services for machine learning. Our team provides precise 
              labeling, tagging, and classification to train your AI models effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Start Annotation Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                View Annotation Samples
              </button>
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 text-center mb-16"
          >
            <h2 className="text-2xl font-bold mb-4">
              Train Better AI with Expert Annotation
            </h2>
            <p className="text-pink-100 mb-6">
              Leverage our linguistic expertise to create high-quality training data for your machine learning models.
            </p>
            <button className="bg-white text-pink-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition">
              Schedule Annotation Consultation
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
                  <capability.icon className="w-12 h-12 text-pink-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Annotation Types Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Annotation Types</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {annotationTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/60 to-pink-900/30 border border-pink-400/20 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-pink-900/40 transition"
                >
                  <type.icon className="w-12 h-12 text-rose-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quality Metrics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Quality Metrics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 text-center hover:bg-slate-800/70 transition"
                >
                  <div className="text-3xl font-bold text-pink-400 mb-2">{metric.metric}</div>
                  <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Annotation Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Industry Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <industry.icon className="w-12 h-12 text-pink-400 mb-4" />
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
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-pink-900/30 border border-pink-400/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Quality Assurance Framework</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert Annotators</h3>
                  <p className="text-gray-300">Trained linguists with ML annotation expertise</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Multi-Tier Review</h3>
                  <p className="text-gray-300">Multiple validation layers for accuracy</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Continuous QA</h3>
                  <p className="text-gray-300">Ongoing quality monitoring and feedback</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-pink-900/30 border border-pink-400/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Flexible Pricing Models</h2>
              <p className="text-xl text-gray-300 mb-8">
                Custom pricing based on annotation complexity, volume, and turnaround requirements
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Basic</h3>
                  <p className="text-gray-400 text-sm">Standard annotation projects</p>
                </div>
                <div className="bg-pink-600/20 border border-pink-400/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Professional</h3>
                  <p className="text-gray-300 text-sm">Complex annotation + expert review</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                  <p className="text-gray-400 text-sm">Large-scale + dedicated team</p>
                </div>
              </div>
              <a href="/contact" className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-full font-semibold transition">
                Get Custom Quote
              </a>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Annotate Your Training Data?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Partner with our expert annotation team to create high-quality training data for your AI models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Start Annotation Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/contact" className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                <ArrowRight className="ml-2 w-5 h-5" />
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
