'use client';

import { motion } from 'framer-motion';
import { Microscope, CheckCircle, ArrowRight, Globe, Brain, Cpu, Database, Users, FileText, TrendingUp, Code, BookOpen } from 'lucide-react';

export default function MultilingualLLMTraining() {
  const capabilities = [
    {
      icon: Brain,
      title: 'Custom Dataset Creation',
      description: 'Build specialized multilingual datasets tailored to your domain and use case'
    },
    {
      icon: Cpu,
      title: 'Fine-Tuning Expertise',
      description: 'Advanced fine-tuning techniques for optimal model performance'
    },
    {
      icon: Globe,
      title: 'Cultural Context Integration',
      description: 'Ensure cultural nuance and regional accuracy in multilingual models'
    },
    {
      icon: TrendingUp,
      title: 'Model Optimization',
      description: 'Optimize for performance, accuracy, and deployment efficiency'
    }
  ];

  const services = [
    {
      icon: Database,
      title: 'Data Curation',
      description: 'Source, clean, and prepare high-quality multilingual training data'
    },
    {
      icon: Code,
      title: 'Model Architecture',
      description: 'Design optimal architectures for multilingual understanding'
    },
    {
      icon: BookOpen,
      title: 'Training Pipeline',
      description: 'End-to-end training with continuous evaluation and improvement'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Linguistic and technical expertise throughout the process'
    }
  ];

  const useCases = [
    {
      icon: FileText,
      title: 'Customer Support',
      description: 'Multilingual chatbots and support automation'
    },
    {
      icon: Users,
      title: 'Content Generation',
      description: 'Automated content creation in multiple languages'
    },
    {
      icon: Globe,
      title: 'Cross-Communication',
      description: 'Real-time translation and understanding systems'
    },
    {
      icon: Brain,
      title: 'Research & Development',
      description: 'Advanced NLP research and innovation projects'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Requirements Analysis',
      description: 'Understand your specific multilingual AI needs and objectives'
    },
    {
      step: '2',
      title: 'Data Strategy',
      description: 'Develop comprehensive data collection and preparation strategy'
    },
    {
      step: '3',
      title: 'Model Development',
      description: 'Train and fine-tune models with continuous evaluation'
    },
    {
      step: '4',
      title: 'Deployment & Support',
      description: 'Deploy models and provide ongoing optimization support'
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
              <a href="/services/multilingual-llm-training" className="text-green-400">LLM Training</a>
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
              <Microscope className="w-16 h-16 text-green-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Multilingual LLM Training
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Specialized training data and methodologies for developing multilingual large language models. 
              Build AI that truly understands and communicates across languages and cultures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                View Case Studies
              </button>
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center mb-16"
          >
            <h2 className="text-2xl font-bold mb-4">
              Build Truly Multilingual AI Systems
            </h2>
            <p className="text-green-100 mb-6">
              Leverage our expertise in multilingual AI to create models that understand cultural nuance and context.
            </p>
            <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition">
              Schedule Consultation
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
                  <capability.icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Comprehensive Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/60 to-green-900/30 border border-green-400/20 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-green-900/40 transition"
                >
                  <service.icon className="w-12 h-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
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
            <h2 className="text-4xl font-bold mb-12 text-center">Our Development Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <useCase.icon className="w-12 h-12 text-green-400 mb-4" />
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
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-green-900/30 border border-green-400/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Custom Pricing Solutions</h2>
              <p className="text-xl text-gray-300 mb-8">
                Tailored pricing based on your specific requirements and scope
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Starter</h3>
                  <p className="text-gray-400 text-sm">Basic multilingual model training</p>
                </div>
                <div className="bg-green-600/20 border border-green-400/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Professional</h3>
                  <p className="text-gray-300 text-sm">Advanced fine-tuning + optimization</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                  <p className="text-gray-400 text-sm">Full-scale development + support</p>
                </div>
              </div>
              <a href="/contact" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold transition">
                Get Custom Quote
              </a>
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">140+ Language Support</h3>
                      <p className="text-gray-400">Comprehensive coverage including low-resource languages</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Cultural Expertise</h3>
                      <p className="text-gray-400">Deep understanding of cultural nuances and context</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Technical Excellence</h3>
                      <p className="text-gray-400">State-of-the-art training methodologies and tools</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="bg-slate-800/50 border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                <p className="text-gray-300 mb-6">
                  Transform your AI capabilities with truly multilingual models that understand and communicate across cultures.
                </p>
                <a href="/contact" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition">
                  Schedule Expert Consultation
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Multilingual AI?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Partner with us to create sophisticated multilingual models that truly understand the world's languages and cultures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Start Your Project
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
