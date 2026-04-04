'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Globe, Calculator, FileText, Clock, Users, CheckCircle, ArrowRight, DollarSign } from 'lucide-react';

export default function Quote() {
  const [formData, setFormData] = useState({
    serviceType: '',
    sourceLanguage: '',
    targetLanguages: [] as string[],
    documentType: '',
    wordCount: '',
    deadline: '',
    qualityLevel: '',
    additionalInfo: '',
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const services = [
    {
      id: 'ai-post-editing',
      name: 'AI Post-Editing',
      description: 'Enhance machine translations with expert human oversight',
      priceRange: '$0.03 - $0.08 per word',
      features: ['99%+ accuracy', '50% faster delivery', 'Context-aware refinement']
    },
    {
      id: 'mtpe',
      name: 'MTPE Services',
      description: 'Machine Translation Post-Editing with neural MT engines',
      priceRange: '$0.02 - $0.06 per word',
      features: ['Neural MT integration', 'Custom engine training', 'Real-time quality metrics']
    },
    {
      id: 'llm-training',
      name: 'Multilingual LLM Training',
      description: 'Specialized training for multilingual language models',
      priceRange: 'Custom pricing',
      features: ['Custom dataset creation', 'Fine-tuning expertise', 'Cultural context integration']
    },
    {
      id: 'data-collection',
      name: 'AI Data Collection',
      description: 'Comprehensive multilingual data for AI training',
      priceRange: 'Custom pricing',
      features: ['140+ language coverage', 'Quality-verified datasets', 'Custom data solutions']
    },
    {
      id: 'traditional',
      name: 'Traditional Translation',
      description: 'ISO 17100 certified human translation services',
      priceRange: '$0.08 - $0.25 per word',
      features: ['Certified translators', 'Subject matter experts', '24/7 delivery options']
    }
  ];

  const documentTypes = [
    'Technical Documentation',
    'Legal Documents',
    'Medical Content',
    'Financial Reports',
    'Marketing Materials',
    'Software Localization',
    'Training Materials',
    'Website Content',
    'Other'
  ];

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese',
    'Chinese (Simplified)', 'Chinese (Traditional)', 'Japanese', 'Korean',
    'Arabic', 'Russian', 'Polish', 'Dutch', 'Swedish', 'Norwegian',
    'Danish', 'Finnish', 'Greek', 'Turkish', 'Hebrew', 'Hindi',
    'Thai', 'Vietnamese', 'Indonesian', 'Malay', 'Filipino', 'Other'
  ];

  const qualityLevels = [
    {
      id: 'standard',
      name: 'Standard',
      description: 'Professional quality with basic review',
      multiplier: 1.0
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Enhanced quality with expert review',
      multiplier: 1.25
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Highest quality with multiple reviews',
      multiplier: 1.5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    // Handle quote submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({
      ...prev,
      targetLanguages: selected
    }));
  };

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
              <a href="/#services" className="hover:text-blue-400 transition">Services</a>
              <a href="/#ai-services" className="hover:text-blue-400 transition">AI Services</a>
              <a href="/#about" className="hover:text-blue-400 transition">About</a>
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
              Get Your Quote
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Receive a customized quote for your translation and AI service needs. 
              Our pricing is transparent and competitive.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 border border-white/10 rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Service Selection */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Calculator className="w-6 h-6 mr-2 text-blue-400" />
                    Select Service Type
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`border rounded-xl p-4 cursor-pointer transition ${
                          formData.serviceType === service.id
                            ? 'border-blue-400 bg-blue-400/10'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, serviceType: service.id }))}
                      >
                        <h3 className="font-semibold mb-2">{service.name}</h3>
                        <p className="text-sm text-gray-300 mb-2">{service.description}</p>
                        <p className="text-xs text-blue-400 font-medium">{service.priceRange}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-blue-400" />
                    Project Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Source Language *</label>
                      <select
                        name="sourceLanguage"
                        value={formData.sourceLanguage}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
                      >
                        <option value="">Select source language</option>
                        {languages.map(lang => (
                          <option key={lang} value={lang}>{lang}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Target Languages *</label>
                      <select
                        name="targetLanguages"
                        multiple
                        value={formData.targetLanguages}
                        onChange={handleLanguageChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
                        size={4}
                      >
                        {languages.map(lang => (
                          <option key={lang} value={lang}>{lang}</option>
                        ))}
                      </select>
                      <p className="text-xs text-gray-400 mt-1">Hold Ctrl/Cmd to select multiple</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Document Type *</label>
                      <select
                        name="documentType"
                        value={formData.documentType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
                      >
                        <option value="">Select document type</option>
                        {documentTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Word Count *</label>
                      <input
                        type="number"
                        name="wordCount"
                        value={formData.wordCount}
                        onChange={handleChange}
                        required
                        min="1"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
                        placeholder="Approximate word count"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Deadline *</label>
                      <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Quality Level *</label>
                      <select
                        name="qualityLevel"
                        value={formData.qualityLevel}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
                      >
                        <option value="">Select quality level</option>
                        {qualityLevels.map(level => (
                          <option key={level.id} value={level.id}>
                            {level.name} - {level.description}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Additional Information</label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition resize-none"
                      placeholder="Any specific requirements, context, or special instructions..."
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-2 text-blue-400" />
                    Contact Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center"
                >
                  Get Your Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Pricing Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 bg-slate-800/50 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-2 text-blue-400" />
                Pricing Information
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Factors Affecting Price</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span>Language pair complexity and rarity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span>Technical difficulty and subject matter</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span>Urgency and turnaround time</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span>Quality level and review requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span>Volume and ongoing partnership discounts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Volume Discounts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span>Under 10,000 words</span>
                      <span className="text-blue-400">Standard Rate</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span>10,000 - 50,000 words</span>
                      <span className="text-green-400">10% Discount</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span>50,000 - 100,000 words</span>
                      <span className="text-green-400">15% Discount</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span>Over 100,000 words</span>
                      <span className="text-green-400">20%+ Discount</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              <li><a href="/#ai-services" className="hover:text-white transition">AI Post-Editing</a></li>
              <li><a href="/#ai-services" className="hover:text-white transition">MTPE</a></li>
              <li><a href="/#ai-services" className="hover:text-white transition">LLM Training</a></li>
              <li><a href="/#ai-services" className="hover:text-white transition">Data Collection</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
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
