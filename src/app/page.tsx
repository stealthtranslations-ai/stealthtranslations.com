'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Brain, 
  Zap, 
  Microscope, 
  Database, 
  FileText, 
  Languages, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star 
} from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Navigation currentPage="" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated AI Background */}
        <div className="absolute inset-0">
          {/* Gradient Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Floating Neural Network Elements */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`neural-${i}`}
                className="absolute"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: `${20 + (Math.random() * 60)}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-16 h-16 border-2 border-blue-400/30 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <motion.line
              x1="10%"
              y1="30%"
              x2="30%"
              y2="50%"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.line
              x1="30%"
              y1="50%"
              x2="50%"
              y2="40%"
              stroke="rgba(147, 51, 234, 0.3)"
              strokeWidth="1"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.line
              x1="50%"
              y1="40%"
              x2="70%"
              y2="60%"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.line
              x1="70%"
              y1="60%"
              x2="90%"
              y2="45%"
              stroke="rgba(147, 51, 234, 0.3)"
              strokeWidth="1"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </svg>
          
          {/* Floating Code Elements */}
          <div className="absolute inset-0">
            {['{AI}', '</>', '[]', '()', '<>', '{}'].map((code, i) => (
              <motion.div
                key={`code-${i}`}
                className="absolute text-blue-400/40 font-mono text-lg"
                style={{
                  left: `${15 + (i * 15)}%`,
                  top: `${25 + (Math.random() * 50)}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.4, 0.8, 0.4],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
              >
                {code}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center" style={{ zIndex: 10 }}>
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
