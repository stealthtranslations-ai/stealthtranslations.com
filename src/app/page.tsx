'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Globe, 
  Zap, 
  Users, 
  ChevronRight, 
  ArrowRight,
  CheckCircle,
  Languages,
  FileText,
  Microscope,
  Database
} from 'lucide-react';

export default function Home() {
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
              <a href="#ai-services" className="hover:text-blue-400 transition">AI Services</a>
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
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Translation
              <br />
              <span className="text-3xl md:text-5xl">for the Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Combining 20+ years of linguistic excellence with cutting-edge AI technology. 
              Delivering precision translations across 140 languages with advanced AI services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <a href="/services" className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition flex items-center justify-center">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400">140+</div>
            <div className="text-gray-400">Languages</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">20+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">ISO 9001</div>
            <div className="text-gray-400">Certified</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-gray-400">Global Support</div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section id="ai-services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced <span className="text-blue-400">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence for next-generation translation and language solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Post-Editing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 hover:bg-slate-800/70 transition"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Post-Editing</h3>
              <p className="text-gray-300 mb-6">
                Enhance machine-translated content with expert human oversight. Our AI-assisted post-editing 
                ensures nuance, context, and cultural accuracy while maintaining speed and efficiency.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  99%+ accuracy guarantee
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  50% faster than traditional
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Context-aware refinement
                </li>
              </ul>
            </motion.div>

            {/* MTPE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 hover:bg-slate-800/70 transition"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">MTPE Services</h3>
              <p className="text-gray-300 mb-6">
                Machine Translation Post-Editing combines cutting-edge MT engines with expert human 
                linguists to deliver high-quality translations at unprecedented speeds and scale.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Neural MT integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom engine training
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Real-time quality metrics
                </li>
              </ul>
            </motion.div>

            {/* LLM Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 hover:bg-slate-800/70 transition"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Multilingual LLM Training</h3>
              <p className="text-gray-300 mb-6">
                Specialized training data and methodologies for developing multilingual large language models. 
                We help create AI that truly understands global languages and cultures.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom dataset creation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Fine-tuning expertise
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Cultural context integration
                </li>
              </ul>
            </motion.div>

            {/* Data Collection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 hover:bg-slate-800/70 transition"
            >
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Data Collection</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive multilingual data collection services for AI training. From parallel corpora 
                to annotated datasets, we provide the foundation for next-generation language AI.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  140+ language coverage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Quality-verified datasets
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom data solutions
                </li>
              </ul>
            </motion.div>

            {/* Annotation Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 hover:bg-slate-800/70 transition"
            >
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Data Annotation</h3>
              <p className="text-gray-300 mb-6">
                Expert linguistic annotation services for machine learning. Our team provides precise 
                labeling, tagging, and classification to train superior AI models.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  NLP annotation experts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Quality assurance protocols
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Scalable operations
                </li>
              </ul>
            </motion.div>

            {/* Traditional Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 hover:bg-slate-800/70 transition"
            >
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Traditional Translation</h3>
              <p className="text-gray-300 mb-6">
                ISO 17100 certified translation services across technical, legal, medical, and financial domains. 
                Human expertise combined with AI-powered quality assurance.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Certified translators
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Subject matter experts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24/7 delivery options
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Translation Strategy?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join leading companies leveraging AI-powered translation solutions for global success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition">
              Get Started Today
            </button>
            <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition">
              Schedule Consultation
            </button>
          </div>
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
              <li><a href="#" className="hover:text-white transition">AI Post-Editing</a></li>
              <li><a href="#" className="hover:text-white transition">MTPE</a></li>
              <li><a href="#" className="hover:text-white transition">LLM Training</a></li>
              <li><a href="#" className="hover:text-white transition">Data Collection</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Certifications</a></li>
              <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
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
