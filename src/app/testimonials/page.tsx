'use client';

import { motion } from 'framer-motion';
import { Globe, Star, CheckCircle, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Aiden Carlin',
      company: 'Carlin Solicitors',
      position: 'Senior Partner',
      content: 'Carlin Solicitors instruct Stealth Translations because they consistently provide us with first class translations. With Stealth Translations we are assured of a fast, friendly and efficient service which is customer centred and involves the legal team at every stage. Stealth Translations take time to listen because every customer is different and each case has its own demands in terms of funding, urgency or volume. It is our privilege to highly recommend Stealth Translations to the legal profession in Northern Ireland.',
      rating: 5,
      service: 'Legal Translation',
      location: 'Belfast, Northern Ireland'
    },
    {
      name: 'David Hill',
      company: 'Hills Financial Planning',
      position: 'Managing Director',
      content: 'Great service! The pension documents translated from Norwegian use the correct specific financial terminology and I was kept informed throughout the whole translation process. The attention to detail and understanding of financial regulations was impressive.',
      rating: 5,
      service: 'Financial Translation',
      location: 'Dublin, Ireland'
    },
    {
      name: 'Brano Pajer',
      company: 'InfoSoft NI Ltd',
      position: 'Managing Director',
      content: 'Thanks a lot. Exactly what we were looking for! The technical documentation was translated accurately and delivered on time. Their understanding of software terminology and localization requirements exceeded our expectations.',
      rating: 5,
      service: 'Technical Translation',
      location: 'Belfast, Northern Ireland'
    },
    {
      name: 'Alex Britton',
      company: 'Whitenoise Studios',
      position: 'Creative Director',
      content: 'Perfect! Thanks a lot for your help! The marketing materials and creative content were translated with cultural nuance and creativity that resonated with our target markets across Europe.',
      rating: 5,
      service: 'Marketing Translation',
      location: 'London, UK'
    },
    {
      name: 'Sarah Mitchell',
      company: 'GlobalTech Solutions',
      position: 'Project Manager',
      content: 'Stealth Translations has been our trusted partner for multilingual documentation for over 5 years. Their AI-powered workflow combined with human expertise delivers consistent quality across 15 languages. The team is responsive, professional, and always meets our tight deadlines.',
      rating: 5,
      service: 'AI Data Engineering',
      location: 'New York, USA'
    },
    {
      name: 'Jean-Pierre Dubois',
      company: 'MedTech International',
      position: 'Regulatory Affairs Director',
      content: 'The medical device documentation required precise translation for regulatory submissions across multiple markets. Stealth Translations demonstrated exceptional understanding of medical terminology and regulatory requirements. Their certified translations helped us achieve market entry in record time.',
      rating: 5,
      service: 'Medical Translation',
      location: 'Paris, France'
    },
    {
      name: 'Maria Rodriguez',
      company: 'EduLearn Systems',
      position: 'CEO',
      content: 'Our e-learning platform localization project was complex, involving multimedia content and interactive elements. Stealth Translations handled everything seamlessly - from subtitle translation to cultural adaptation of learning materials. Their attention to detail and educational expertise made all the difference.',
      rating: 5,
      service: 'E-learning Localization',
      location: 'Madrid, Spain'
    },
    {
      name: 'Dr. Michael Chen',
      company: 'AI Research Labs',
      position: 'Head of Research',
      content: 'The multilingual AI training data provided by Stealth Translations was exceptional. Their data collection and annotation services helped us improve our models\' performance across 12 languages. The quality control processes and ethical data sourcing practices were exactly what we needed.',
      rating: 5,
      service: 'AI Data Collection',
      location: 'Singapore'
    }
  ];

  const industries = [
    {
      name: 'Legal Services',
      description: 'Accurate legal translations for solicitors, law firms, and legal departments',
      icon: CheckCircle
    },
    {
      name: 'Financial Services',
      description: 'Specialized financial translations for banking, insurance, and investment firms',
      icon: CheckCircle
    },
    {
      name: 'Technology',
      description: 'Technical translations for software, hardware, and IT documentation',
      icon: CheckCircle
    },
    {
      name: 'Medical & Healthcare',
      description: 'Precise medical translations for pharmaceutical companies and healthcare providers',
      icon: CheckCircle
    },
    {
      name: 'Engineering',
      description: 'Technical translations for engineering specifications and documentation',
      icon: CheckCircle
    },
    {
      name: 'Education',
      description: 'Educational content translation for e-learning and academic institutions',
      icon: CheckCircle
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
              <a href="/services" className="hover:text-blue-400 transition">Services</a>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.filter((_, index) => index !== 2).map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                    </div>
                    <div className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                      {testimonial.service}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industries We Serve */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve With Excellence</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <industry.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                      <p className="text-gray-300 text-sm">{industry.description}</p>
                    </div>
                  </div>
                </motion.div>
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
