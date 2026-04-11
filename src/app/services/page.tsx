'use client';

import { motion } from 'framer-motion';
import { Globe, Brain, Zap, Microscope, Database, FileText, Languages, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  const traditionalServices = [
    {
      icon: Languages,
      title: 'Translation',
      description: 'Quality technical translations in any electronic format, certified to ISO 17100 standards.',
      features: ['Technical Documentation', 'Legal Documents', 'Medical Content', 'Financial Reports'],
      color: 'bg-blue-600'
    },
    {
      icon: Users,
      title: 'Interpretation',
      description: 'Our personable and enthusiastic interpreters are ready to assist bridge the language barrier on your behalf.',
      features: ['Simultaneous Interpretation', 'Consecutive Interpretation', 'Remote Interpretation', 'On-site Services'],
      color: 'bg-purple-600'
    },
    {
      icon: FileText,
      title: 'Certification',
      description: 'Following a legal process to allow proper legal use of documents in other domiciles.',
      features: ['Legal Certification', 'Notarization', 'Apostille Services', 'Consular Legalization'],
      color: 'bg-green-600'
    },
    {
      icon: Globe,
      title: 'Localization',
      description: 'Excellence in cultural and regional linguistic fine-tuning to ensure the effectiveness of your translation project.',
      features: ['Website Localization', 'Software Localization', 'Cultural Adaptation', 'Regional Compliance'],
      color: 'bg-orange-600'
    },
    {
      icon: FileText,
      title: 'Voice Over',
      description: 'Compel your target audience effectively after selecting from our diverse team, the perfect voice over artist.',
      features: ['Commercial Voice Over', 'E-learning Narration', 'Documentary Voice Over', 'Multi-language Dubbing'],
      color: 'bg-pink-600'
    },
    {
      icon: FileText,
      title: 'Transcription',
      description: 'Accurately convert media or scanned documents of your project into its electronic text format.',
      features: ['Audio Transcription', 'Video Transcription', 'Medical Transcription', 'Legal Transcription'],
      color: 'bg-cyan-600'
    }
  ];

  const aiServices = [
    {
      icon: Brain,
      title: 'AI Post-Editing',
      description: 'Enhance machine-translated content with expert human oversight. Our AI-assisted post-editing ensures nuance, context, and cultural accuracy.',
      features: ['99%+ accuracy guarantee', '50% faster than traditional', 'Context-aware refinement', 'Quality metrics'],
      color: 'bg-blue-600',
      price: '$0.03 - $0.08 per word',
      link: '/services/ai-post-editing'
    },
    {
      icon: Zap,
      title: 'MTPE Services',
      description: 'Machine Translation Post-Editing combines cutting-edge MT engines with expert human linguists to deliver high-quality translations.',
      features: ['Neural MT integration', 'Custom engine training', 'Real-time quality metrics', 'Scalable solutions'],
      color: 'bg-purple-600',
      price: '$0.02 - $0.06 per word',
      link: '/services/mtpe-services'
    },
    {
      icon: Microscope,
      title: 'Multilingual LLM Training',
      description: 'Specialized training data and methodologies for developing multilingual large language models.',
      features: ['Custom dataset creation', 'Fine-tuning expertise', 'Cultural context integration', 'Model optimization'],
      color: 'bg-green-600',
      price: 'Custom pricing',
      link: '/services/multilingual-llm-training'
    },
    {
      icon: Database,
      title: 'AI Data Collection',
      description: 'Comprehensive multilingual data collection services for AI training. From parallel corpora to annotated datasets.',
      features: ['140+ language coverage', 'Quality-verified datasets', 'Custom data solutions', 'Ethical sourcing'],
      color: 'bg-orange-600',
      price: 'Custom pricing',
      link: '/services/ai-data-collection'
    },
    {
      icon: FileText,
      title: 'Data Annotation',
      description: 'Expert linguistic annotation services for machine learning. Our team provides precise labeling, tagging, and classification.',
      features: ['NLP annotation experts', 'Quality assurance protocols', 'Scalable operations', 'Multiple annotation types'],
      color: 'bg-pink-600',
      price: 'Custom pricing',
      link: '/services/data-annotation'
    }
  ];

  const industries = [
    'Education', 'Finance', 'Technology', 'Medical', 'Legal', 'Engineering', 'Media', 'E-commerce', 'Gaming', 'Government'
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
              <a href="/" className="hover:text-blue-400 transition">Home</a>
              <a href="/services" className="text-blue-400">Services</a>
              <a href="/#ai-services" className="hover:text-blue-400 transition">AI Services</a>
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Translation Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the future of translation with AI-driven solutions. 80% of our business focuses on 
              advanced AI services combining cutting-edge technology with human expertise.
            </p>
          </motion.div>

          {/* AI Services - Primary Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-blue-400">AI-Powered</span> Translation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our core focus - 80% of our business is now AI-driven translation solutions combining cutting-edge technology with human expertise
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/60 to-blue-900/30 border border-blue-400/20 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-blue-900/40 transition group relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold border border-blue-400/30">
                    {service.price}
                  </div>
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-lg shadow-blue-500/20`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-100">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={service.link} className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-400/30 px-4 py-2 rounded-lg font-semibold flex items-center group transition">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Traditional Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-400">Traditional Translation Services</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Supporting our AI services with traditional human expertise for specialized requirements
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {traditionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                  className="bg-slate-800/30 border border-white/5 rounded-2xl p-6 hover:bg-slate-800/40 transition group"
                >
                  <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition opacity-80`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-300">{service.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-gray-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="text-gray-400 hover:text-gray-300 font-medium text-sm flex items-center group">
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industries Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Industries We Serve</h2>
            <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
                We provide specialized translation and AI services across various industries, 
                ensuring domain-specific expertise and terminology accuracy.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-slate-700/30 border border-white/5 rounded-lg p-4 text-center hover:bg-slate-700/50 transition"
                  >
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We can tailor our services to meet your specific requirements. 
              Contact us to discuss your unique translation and AI service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold">Stealth Translations</span>
            </div>
            <p className="text-gray-400">
              AI-powered translation services for the global economy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#ai-services" className="hover:text-white transition">AI Post-Editing</a></li>
              <li><a href="/#ai-services" className="hover:text-white transition">MTPE</a></li>
              <li><a href="/#ai-services" className="hover:text-white transition">LLM Training</a></li>
              <li><a href="/#ai-services" className="hover:text-white transition">Data Collection</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Certifications</a></li>
              <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Global Headquarters</li>
              <li>Belfast, Northern Ireland</li>
              <li>info@stealthtranslations.com</li>
              <li>+44 28 9099 7000</li>
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
