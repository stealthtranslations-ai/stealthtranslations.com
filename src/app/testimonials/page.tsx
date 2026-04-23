'use client';

import { motion } from 'framer-motion';
import { Globe, Star, CheckCircle, Quote } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Testimonials() {
  const testimonials = [
    {
      client: 'Leading AI Research Company',
      industry: 'Artificial Intelligence',
      content: 'Stealth Translations has become our preferred supplier for multilingual data collection. Their professional workflows and ethical data sourcing practices align perfectly with our R&D requirements. The quality control processes and attention to data privacy make them an ideal partner for sensitive AI training projects.',
      rating: 5,
      service: 'AI Data Collection',
      region: 'North America',
      projectType: 'Confidential R&D'
    },
    {
      client: 'Global Technology Corporation',
      industry: 'Machine Learning',
      content: 'The data annotation quality and workflow professionalism exceeded our expectations. Their team understands the specific requirements of ML training data and maintains the highest standards for accuracy and consistency. We\'ve made them our go-to partner for all multilingual annotation needs.',
      rating: 5,
      service: 'Data Annotation',
      region: 'Asia Pacific',
      projectType: 'Proprietary Model Training'
    },
    {
      client: 'Major Automotive AI Developer',
      industry: 'Autonomous Vehicles',
      content: 'Professional workflows and exceptional data quality are why we continue to work with Stealth Translations. Their understanding of automotive AI requirements and ability to handle large-scale multilingual datasets while maintaining confidentiality is impressive. They\'ve become an integral part of our development pipeline.',
      rating: 5,
      service: 'AI Data Engineering',
      region: 'Europe',
      projectType: 'Autonomous Driving Systems'
    },
    {
      client: 'Healthcare AI Company',
      industry: 'Medical AI',
      content: 'The medical data annotation expertise and privacy-first approach made them the perfect partner for our healthcare AI projects. Their professional team understands the regulatory requirements and maintains the highest standards for data security and accuracy in medical contexts.',
      rating: 5,
      service: 'Medical Data Annotation',
      region: 'North America',
      projectType: 'Healthcare AI Development'
    },
    {
      client: 'Enterprise Software Leader',
      industry: 'Enterprise AI',
      content: 'Their multilingual LLM training data services have been instrumental in improving our models\' performance across global markets. The professional project management and quality assurance processes ensure consistent delivery of high-quality training datasets for our enterprise applications.',
      rating: 5,
      service: 'Multilingual LLM Training',
      region: 'Global',
      projectType: 'Enterprise AI Solutions'
    },
    {
      client: 'Financial Technology Firm',
      industry: 'FinTech',
      content: 'The data engineering solutions provided for our AI systems have been exceptional. Their team understands the complexity of financial data requirements and delivers robust, scalable solutions that meet our stringent security and compliance needs.',
      rating: 5,
      service: 'AI Data Engineering',
      region: 'Europe',
      projectType: 'Financial AI Systems'
    }
  ];

  const industries = [
    {
      name: 'AI Research',
      description: 'Multilingual data collection and annotation for cutting-edge AI research',
      icon: CheckCircle
    },
    {
      name: 'Machine Learning',
      description: 'Training data preparation for ML models across multiple languages',
      icon: CheckCircle
    },
    {
      name: 'Autonomous Systems',
      description: 'Specialized data for autonomous vehicles and robotics development',
      icon: CheckCircle
    },
    {
      name: 'Healthcare AI',
      description: 'Medical data annotation with privacy and regulatory compliance',
      icon: CheckCircle
    },
    {
      name: 'Enterprise AI',
      description: 'Large-scale data engineering for enterprise AI applications',
      icon: CheckCircle
    },
    {
      name: 'Financial AI',
      description: 'Secure data solutions for fintech and financial AI systems',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Navigation currentPage="/testimonials" />

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
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what some of our happy customers have to say about our translation and AI services.
            </p>
          </motion.div>

          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16"
          >
            <div className="flex items-center mb-6">
              <Quote className="w-12 h-12 text-white/50 mr-4" />
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-2xl text-white mb-8 italic">
              "Carlin Solicitors instruct Stealth Translations because they consistently provide us with first class translations. With Stealth Translations we are assured of a fast, friendly and efficient service which is customer centred and involves the legal team at every stage. Stealth Translations take time to listen because every customer is different and each case has its own demands in terms of funding, urgency or volume. It is our privilege to highly recommend Stealth Translations to the legal profession in Northern Ireland."
            </blockquote>
            <div className="flex items-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                <span className="text-2xl font-bold">AC</span>
              </div>
              <div>
                <p className="font-bold text-xl">Aiden Carlin</p>
                <p className="text-blue-100">Carlin Solicitors</p>
                <p className="text-sm text-blue-200">Legal Translation Services</p>
              </div>
            </div>
          </motion.div>

          {/* All Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">More Client Success Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="mb-2">
                    <span className="font-semibold">{testimonial.client}</span>
                    <span className="text-gray-400 ml-2">| {testimonial.industry}</span>
                  </div>
                  <p className="text-sm text-gray-400">{testimonial.projectType}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-emerald-600/20 text-emerald-400 px-2 py-1 rounded">
                      {testimonial.service}
                    </span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">
                      {testimonial.region}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Professional Workflow Excellence</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '99.8%', description: 'Data Accuracy Rate', detail: 'Across all annotation projects' },
                { metric: '95%', description: 'Client Retention', detail: 'Preferred supplier status' },
                { metric: '48h', description: 'Average Turnaround', detail: 'For standard datasets' },
                { metric: '100%', description: 'NDA Compliance', detail: 'Zero privacy breaches' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.metric}</div>
                  <div className="text-xl font-semibold mb-1">{stat.description}</div>
                  <div className="text-sm text-gray-400">{stat.detail}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industries We Serve */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">AI/ML Industries Served</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                  <industry.icon className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                  <p className="text-gray-300 text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quality Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Stealth Translations are dedicated to quality through continuous improvement. 
              In dealing with our customers we strive to be diligent and dependable, professional 
              and trustworthy, friendly and approachable, careful and resourceful, particularly 
              in regards to privacy.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-700/30 rounded-xl p-4">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">ISO 9001 Certified</h3>
                <p className="text-sm text-gray-400">Quality Management Systems</p>
              </div>
              <div className="bg-slate-700/30 rounded-xl p-4">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">ISO 17100 Certified</h3>
                <p className="text-sm text-gray-400">Translation Services Quality</p>
              </div>
              <div className="bg-slate-700/30 rounded-xl p-4">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">24/7 Support</h3>
                <p className="text-sm text-gray-400">Global Customer Service</p>
              </div>
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
              <li><a href="/testimonials" className="hover:text-white transition">Testimonials</a></li>
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
