'use client';

import { motion } from 'framer-motion';
import { Globe, Award, Users, MapPin, CheckCircle, Star, Target, Shield } from 'lucide-react';

export default function About() {
  const certifications = [
    {
      name: 'ISO 9001',
      description: 'Quality Management Systems',
      icon: Award
    },
    {
      name: 'ISO 17100',
      description: 'Translation Services Quality',
      icon: Shield
    },
    {
      name: '20+ Years',
      description: 'Industry Experience',
      icon: Target
    },
    {
      name: '140+ Languages',
      description: 'Global Language Coverage',
      icon: Globe
    }
  ];

  const offices = [
    { city: 'Belfast', country: 'Northern Ireland', type: 'Global Headquarters' },
    { city: 'Paris', country: 'France', type: 'European Operations' },
    { city: 'Warsaw', country: 'Poland', type: 'Eastern Europe Hub' },
    { city: 'Tirana', country: 'Albania', type: 'Balkans Operations' },
    { city: 'Berlin', country: 'Germany', type: 'Central Europe' },
    { city: 'Manila', country: 'Philippines', type: 'Asia Pacific' },
    { city: 'New York', country: 'USA', type: 'Americas Hub' }
  ];

  const values = [
    {
      title: 'Quality Excellence',
      description: 'Committed to delivering highest quality translations through rigorous processes and continuous improvement.',
      icon: CheckCircle
    },
    {
      title: 'Customer Centric',
      description: 'Every client is unique. We listen carefully to understand your specific needs and requirements.',
      icon: Users
    },
    {
      title: 'Professional Trust',
      description: 'Diligent, dependable, and trustworthy service with utmost care for privacy and confidentiality.',
      icon: Shield
    },
    {
      title: 'Global Reach',
      description: 'Strategically positioned worldwide to serve the global market with AI-powered linguistic services.',
      icon: MapPin
    }
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
              <a href="/#services" className="hover:text-blue-400 transition">Services</a>
              <a href="/#ai-services" className="hover:text-blue-400 transition">AI Services</a>
              <a href="/about" className="text-blue-400">About</a>
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
              About Stealth Translations
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              For more than 20 years, the award-winning global multilingual data services agency 
              has been providing high-quality AI data and linguistic services across 140 languages.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Recognised Quality Standards</h2>
            <div className="aspect-video bg-slate-700/50 rounded-xl overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/images/video-poster.jpg"
              >
                <source src="https://stealthtranslations.com/wp-content/uploads/2019/01/stealth_intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-300 mt-4 text-center">
              Learn more about our ISO 9001 and ISO 17100 certifications and quality protocols
            </p>
          </motion.div>

          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 mb-4">
                  Stealth Translations Ltd has evolved from a traditional translation agency into a 
                  cutting-edge AI-powered linguistic services provider. Our journey began over two 
                  decades ago with a simple mission: to break down language barriers and connect 
                  the global community through quality translations.
                </p>
                <p className="text-gray-300 mb-4">
                  Today, we combine our deep linguistic expertise with artificial intelligence, 
                  offering innovative solutions like AI Post-Editing, Machine Translation Post-Editing, 
                  and multilingual LLM training data services.
                </p>
                <p className="text-gray-300">
                  Certified with quality standards ISO 9001 and ISO 17100, we follow stringent 
                  quality protocols to ensure consistent, efficient processes while nurturing an 
                  environment of continuous improvement.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-slate-700/50 border border-white/10 rounded-xl p-4">
                    <cert.icon className="w-8 h-8 text-blue-400 mb-2" />
                    <h3 className="font-bold text-lg">{cert.name}</h3>
                    <p className="text-sm text-gray-400">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Global Presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Global Presence</h2>
            <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 mb-6 text-center">
                Headquartered in Belfast, Northern Ireland, with operational offices worldwide, 
                we are strategically positioned to serve the global market with AI Data and Linguistic services.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {offices.map((office, index) => (
                  <div key={index} className="bg-slate-700/30 border border-white/5 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <h3 className="font-semibold">{office.city}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{office.country}</p>
                    <p className="text-xs text-blue-400 mt-1">{office.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
                  <value.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quality Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Quality Commitment</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-blue-100 mb-4">
                  Stealth Translations are dedicated to quality through continuous improvement. 
                  In dealing with our customers we strive to be:
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Diligent and dependable</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Professional and trustworthy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Friendly and approachable</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Careful and resourceful</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Particularly in regards to privacy</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <Award className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Award Winning</h3>
                  <p className="text-blue-100">
                    Recognized for excellence in translation and AI data services
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Perfect! Thanks a lot for your help!"
                </p>
                <p className="font-semibold">Alex Britton</p>
                <p className="text-sm text-gray-400">Whitenoise Studios</p>
              </div>

              <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Thanks a lot. Exactly what we were looking for!"
                </p>
                <p className="font-semibold">Brano Pajer</p>
                <p className="text-sm text-gray-400">Managing Director, InfoSoft NI Ltd</p>
              </div>

              <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Great service! The pension documents translated from Norwegian use the correct specific financial terminology..."
                </p>
                <p className="font-semibold">David Hill</p>
                <p className="text-sm text-gray-400">Managing Director, Hills Financial Planning</p>
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
