'use client';

import { motion } from 'framer-motion';
import { Globe, Brain, Zap, Microscope, Database, FileText, Languages, Users, CheckCircle, ArrowRight, Code, Cpu } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Services() {
  const aiEngineeringServices = [
    {
      icon: Database,
      title: 'AI Data Engineering',
      description: 'Comprehensive data engineering solutions for AI/ML workflows. Build scalable data pipelines, cloud architectures, and ETL systems optimized for machine learning applications.',
      features: ['Data Pipeline Architecture', 'Cloud Data Solutions', 'ETL/ELT Development', 'Real-time Processing'],
      color: 'bg-emerald-600',
      link: '/services/ai-data-engineering'
    },
    {
      icon: Code,
      title: 'AI Software Development',
      description: 'Custom AI software development and integration services. Build intelligent applications, ML models, and automated systems with multilingual capabilities.',
      features: ['Custom AI Applications', 'ML Model Development', 'API Integration', 'System Architecture'],
      color: 'bg-indigo-600',
      link: '/services/ai-software-development'
    },
    {
      icon: Brain,
      title: 'Multilingual AI Training',
      description: 'Specialized services for training multilingual AI models. Create diverse datasets, fine-tune models for global markets, and optimize cross-lingual performance.',
      features: ['Multilingual Dataset Creation', 'Cross-lingual Training', 'Model Fine-tuning', 'Performance Optimization'],
      color: 'bg-violet-600',
      link: '/services/multilingual-llm-training'
    },
    {
      icon: Database,
      title: 'AI Data Collection & Annotation',
      description: 'High-quality data collection and annotation services for AI training. Ethical data sourcing, expert annotation, and quality assurance for diverse datasets.',
      features: ['Ethical Data Sourcing', 'Expert Annotation', 'Quality Assurance', 'Scalable Solutions'],
      color: 'bg-teal-600',
      link: '/services/ai-data-collection'
    }
  ];

  const traditionalServices = [
    {
      icon: Languages,
      title: 'Translation Services',
      description: 'Professional translation services certified to ISO 17100 standards for technical, legal, medical, and financial content.',
      features: ['Technical Documentation', 'Legal Documents', 'Medical Content', 'Financial Reports'],
      color: 'bg-blue-600',
      link: '/services/translation'
    },
    {
      icon: Users,
      title: 'Interpretation Services',
      description: 'Professional interpretation services for meetings, conferences, and legal proceedings with experienced linguists.',
      features: ['Simultaneous Interpretation', 'Consecutive Interpretation', 'Remote Interpretation', 'On-site Services'],
      color: 'bg-purple-600',
      link: '/services/interpretation'
    },
    {
      icon: FileText,
      title: 'Certification & Legalization',
      description: 'Document certification and legalization services for international legal use and compliance requirements.',
      features: ['Legal Certification', 'Notarization', 'Apostille Services', 'Consular Legalization'],
      color: 'bg-green-600',
      link: '/services/certification'
    },
    {
      icon: Globe,
      title: 'Localization Services',
      description: 'Cultural and regional adaptation of content, websites, and software for global market effectiveness.',
      features: ['Website Localization', 'Software Localization', 'Cultural Adaptation', 'Regional Compliance'],
      color: 'bg-orange-600',
      link: '/services/localization'
    },
    {
      icon: FileText,
      title: 'Voice Over Services',
      description: 'Professional voice over services for commercials, e-learning, documentaries, and multimedia content.',
      features: ['Commercial Voice Over', 'E-learning Narration', 'Documentary Voice Over', 'Multi-language Dubbing'],
      color: 'bg-pink-600',
      link: '/services/voice-over'
    },
    {
      icon: FileText,
      title: 'Transcription Services',
      description: 'Accurate transcription services for audio, video, medical, and legal content in multiple languages.',
      features: ['Audio Transcription', 'Video Transcription', 'Medical Transcription', 'Legal Transcription'],
      color: 'bg-cyan-600',
      link: '/services/transcription'
    }
  ];

  const industries = [
    'Education', 'Finance', 'Technology', 'Medical', 'Legal', 'Engineering', 'Media', 'E-commerce', 'Gaming', 'Government'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white">
      <Navigation currentPage="/services" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              AI Engineering & Translation Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced AI software engineering solutions with multilingual capabilities. 
              We build intelligent systems, data pipelines, and ML applications while maintaining our foundation of professional translation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Start AI Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/sell-sheets/ai-data-collection-annotation-sell-sheet.zip" 
                 download 
                 className="border-2 border-emerald-400 hover:bg-emerald-400/10 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                <FileText className="mr-2 w-5 h-5" />
                Download AI Services Overview
              </a>
            </div>
          </motion.div>

          {/* AI Engineering Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">AI Engineering Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced software engineering solutions for AI/ML applications with multilingual capabilities
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {aiEngineeringServices.map((service: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/60 to-emerald-900/30 border border-emerald-400/20 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-emerald-900/40 transition group"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature: any, i: number) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={service.link} className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold transition group">
                    Explore Solution
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Traditional Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-400">Traditional Translation Services</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Supporting our AI services with traditional human expertise for specialized requirements
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {traditionalServices.map((service: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
                  className="bg-slate-800/30 border border-white/5 rounded-2xl p-6 hover:bg-slate-800/40 transition group"
                >
                  <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition opacity-80`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-300">{service.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature: any, i: number) => (
                      <li key={i} className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-gray-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={service.link} className="text-gray-400 hover:text-gray-300 font-medium text-sm flex items-center group">
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition" />
                  </a>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-400">Industries We Serve</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Specialized expertise across multiple sectors with domain-specific terminology
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {industries.map((industry: string, index: number) => (
                <div
                  key={index}
                  className="bg-slate-800/30 border border-white/5 rounded-lg p-4 text-center hover:bg-slate-800/50 transition"
                >
                  <span className="text-gray-300 text-sm">{industry}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-emerald-600 to-indigo-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your AI Solution?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let our AI engineering team help you build intelligent systems with multilingual capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Start Your AI Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/team" className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                Meet Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-6 h-6 text-emerald-400" />
              <span className="text-lg font-bold">Stealth Translations</span>
            </div>
            <p className="text-gray-400">
              AI engineering solutions with multilingual capabilities for the global economy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services/ai-data-engineering" className="hover:text-white transition">AI Data Engineering</a></li>
              <li><a href="/services/ai-software-development" className="hover:text-white transition">AI Software Development</a></li>
              <li><a href="/services/multilingual-llm-training" className="hover:text-white transition">Multilingual AI Training</a></li>
              <li><a href="/services/ai-data-collection" className="hover:text-white transition">AI Data Collection</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/team" className="hover:text-white transition">Our Team</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Global Headquarters</li>
              <li>Belfast, Northern Ireland</li>
              <li>sales@stealthtranslations.com</li>
              <li>+44 28 28 267 103</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2024 Stealth Translations. ISO 9001 & ISO 17100 Certified.</p>
        </div>
      </footer>
    </div>
  );
}
