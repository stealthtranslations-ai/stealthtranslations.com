'use client';

import { motion } from 'framer-motion';
import { Globe, ArrowRight, CheckCircle, Users, BarChart, Award, Target, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Global Financial Institution Multilingual Platform',
      client: 'International Banking Corporation',
      industry: 'Financial Services',
      location: 'London, UK | New York, USA | Singapore',
      challenge: 'Needed to translate and localize their online banking platform for 12 markets across Europe, Asia, and North America with strict regulatory compliance.',
      solution: 'Implemented a comprehensive translation and localization strategy combining AI-powered translation with human expert review. Created specialized financial terminology databases and established quality assurance protocols for regulatory compliance.',
      results: [
        '95% reduction in translation turnaround time',
        '100% regulatory compliance across all markets',
        '30% increase in customer satisfaction scores',
        'Support for 12 languages with consistent quality'
      ],
      services: ['Financial Translation', 'Software Localization', 'Regulatory Compliance', 'AI Post-Editing'],
      duration: '6 months',
      team: '15 specialists including financial experts, linguists, and QA professionals'
    },
    {
      title: 'AI Healthcare Model Training Data Pipeline',
      client: 'MedTech AI Solutions',
      industry: 'Healthcare Technology',
      location: 'Boston, USA | Berlin, Germany',
      challenge: 'Required high-quality multilingual medical training data for AI diagnostic models across 8 languages with strict privacy and accuracy requirements.',
      solution: 'Developed a secure data collection and annotation pipeline with medical professionals. Implemented ethical data sourcing practices and created specialized annotation guidelines for medical terminology.',
      results: [
        '500,000+ accurately annotated medical records',
        '99.8% accuracy in medical terminology',
        'HIPAA and GDPR compliant data handling',
        'Improved AI model accuracy by 35%'
      ],
      services: ['AI Data Collection', 'Medical Data Annotation', 'Data Pipeline Engineering', 'Quality Assurance'],
      duration: '9 months',
      team: '20 data scientists, medical professionals, and annotation specialists'
    },
    {
      title: 'E-learning Platform Global Expansion',
      client: 'EduGlobal Learning Systems',
      industry: 'Education Technology',
      location: 'San Francisco, USA | Multiple International Markets',
      challenge: 'Needed to localize their e-learning platform and content for 15 markets including multimedia elements, interactive assessments, and cultural adaptation.',
      solution: 'Comprehensive localization strategy including subtitle translation, voice-over services, cultural content adaptation, and LMS integration. Developed scalable workflow for ongoing content updates.',
      results: [
        '15 markets launched in 8 months',
        '40% increase in international student enrollment',
        '98% user satisfaction with localized content',
        'Reduced content update time by 60%'
      ],
      services: ['E-learning Localization', 'Voice Over Services', 'Multimedia Translation', 'Cultural Adaptation'],
      duration: '8 months',
      team: '12 localization specialists, voice artists, and project managers'
    },
    {
      title: 'Legal Document Management System',
      client: 'Global Legal Partners',
      industry: 'Legal Services',
      location: 'London, UK | Paris, France | Frankfurt, Germany',
      challenge: 'Required translation and certification of legal documents for cross-border litigation with strict confidentiality and accuracy requirements.',
      solution: 'Established secure translation workflows with legal experts, implemented document management system integration, and created certified translation processes for court submissions.',
      results: [
        '100% court acceptance rate for translated documents',
        '50% faster document processing time',
        'Zero confidentiality breaches',
        'Support for 8 European legal systems'
      ],
      services: ['Legal Translation', 'Document Certification', 'Secure Workflows', 'Court Certification'],
      duration: '12 months ongoing',
      team: '8 legal translators and certification specialists'
    },
    {
      title: 'Manufacturing Technical Documentation',
      client: 'AeroTech Industries',
      industry: 'Manufacturing & Engineering',
      location: 'Seattle, USA | Tokyo, Japan | Munich, Germany',
      challenge: 'Needed translation of complex technical manuals and safety documentation for aerospace equipment with precise terminology and regulatory compliance.',
      solution: 'Created specialized technical terminology databases, implemented translation memory systems, and established engineering review processes for technical accuracy.',
      results: [
        '99.9% technical accuracy achieved',
        'Reduced translation costs by 45% through TM reuse',
        '100% regulatory compliance for safety documentation',
        'Support for 6 languages with consistent terminology'
      ],
      services: ['Technical Translation', 'Translation Memory', 'Terminology Management', 'Engineering Review'],
      duration: '4 months',
      team: '6 technical translators and engineering specialists'
    }
  ];

  const stats = [
    { number: '500+', label: 'Global Clients', icon: Globe },
    { number: '140+', label: 'Languages Supported', icon: Users },
    { number: '99.8%', label: 'Client Satisfaction', icon: Award },
    { number: '20+', label: 'Years Experience', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Navigation currentPage="/case-studies" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped global organizations overcome language barriers and achieve their international business objectives through our comprehensive translation and AI services.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 border border-white/10 rounded-2xl p-8"
              >
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold mb-4 text-emerald-400">{study.title}</h2>
                    <div className="mb-6">
                      <span className="text-xl font-semibold text-blue-400">{study.client}</span>
                      <span className="text-gray-400 ml-2">| {study.industry}</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      <span className="font-semibold">Location:</span> {study.location}
                    </p>
                    <p className="text-gray-300 mb-6">
                      <span className="font-semibold">Duration:</span> {study.duration}
                    </p>
                    <p className="text-gray-300 mb-6">
                      <span className="font-semibold">Team:</span> {study.team}
                    </p>
                  </div>
                  <div>
                    <div className="bg-gradient-to-br from-emerald-900/30 to-blue-900/30 border border-emerald-400/20 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4">Services Provided</h3>
                      <div className="space-y-2">
                        {study.services.map((service, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-400">The Challenge</h3>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-emerald-400">Our Solution</h3>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-purple-400">Results Achieved</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300">
                          <BarChart className="w-4 h-4 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 text-center mt-20"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join our global clients who have achieved international success through our comprehensive translation and AI services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/testimonials" className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                Read Client Testimonials
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
              Global translation and AI services company with 20+ years of excellence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services/ai-data-engineering" className="hover:text-white transition">AI Data Engineering</a></li>
              <li><a href="/services/translation" className="hover:text-white transition">Translation Services</a></li>
              <li><a href="/services/interpretation" className="hover:text-white transition">Interpretation</a></li>
              <li><a href="/services/certification" className="hover:text-white transition">Certification</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/team" className="hover:text-white transition">Our Team</a></li>
              <li><a href="/case-studies" className="hover:text-white transition">Case Studies</a></li>
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
