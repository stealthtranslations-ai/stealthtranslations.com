'use client';

import { motion } from 'framer-motion';
import { Globe, Users, Briefcase, Award, MapPin, ArrowRight, Star, Heart, Brain, Code, Languages, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Careers() {
  const benefits = [
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Work with clients and team members across 7 international offices'
    },
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Be at the forefront of AI and translation technology'
    },
    {
      icon: Shield,
      title: 'Professional Development',
      description: 'Continuous learning and certification opportunities'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and supportive environment'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Data Engineer',
      department: 'AI Engineering',
      location: 'Belfast, Northern Ireland',
      type: 'Full-time',
      description: 'Lead data engineering projects for AI/ML applications with multilingual capabilities.'
    },
    {
      title: 'Machine Learning Engineer',
      department: 'AI Engineering',
      location: 'Warsaw, Poland',
      type: 'Full-time',
      description: 'Develop and optimize ML models for multilingual applications and training data.'
    },
    {
      title: 'Senior Project Manager',
      department: 'Operations',
      location: 'Belfast, Northern Ireland',
      type: 'Full-time',
      description: 'Manage complex translation and AI projects for global enterprise clients.'
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'London, UK',
      type: 'Full-time',
      description: 'Drive growth in AI services and traditional translation offerings.'
    },
    {
      title: 'Senior Translator (German)',
      department: 'Translation',
      location: 'Remote',
      type: 'Contract',
      description: 'Technical translation services for AI training data and traditional projects.'
    },
    {
      title: 'Data Annotation Specialist',
      department: 'AI Services',
      location: 'Manila, Philippines',
      type: 'Full-time',
      description: 'Quality annotation and data preparation for AI training datasets.'
    }
  ];

  const cultureValues = [
    {
      icon: Users,
      title: 'Collaborative Excellence',
      description: 'We work together to deliver exceptional results for our global clients'
    },
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technology and creative solutions'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We celebrate diversity and operate across cultures and time zones'
    },
    {
      icon: Shield,
      title: 'Integrity & Trust',
      description: 'We maintain the highest standards of professionalism and confidentiality'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Navigation currentPage="/careers" />

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
              Join Our Global Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build your career with a leading global translation and AI services company. 
              Work with innovative technology, serve international clients, and grow with a team that values excellence and diversity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#open-positions" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/team" className="border-2 border-emerald-400 hover:bg-emerald-400/10 px-8 py-4 rounded-full font-semibold transition">
                Meet Our Team
              </a>
            </div>
          </motion.div>

          {/* Why Join Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Why Join Stealth Translations?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <benefit.icon className="w-12 h-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Culture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Culture</h2>
            <div className="bg-gradient-to-br from-slate-800/60 to-emerald-900/30 border border-emerald-400/20 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cultureValues.map((value, index) => (
                  <div key={index} className="text-center">
                    <value.icon className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Open Positions */}
          <motion.div
            id="open-positions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="bg-emerald-600/20 text-emerald-400 px-2 py-1 rounded">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-semibold transition">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-300">{position.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Submit Application', desc: 'Send your CV and cover letter' },
                { step: '2', title: 'Initial Review', desc: 'Our team reviews your qualifications' },
                { step: '3', title: 'Interviews', desc: 'Meet with team members and leadership' },
                { step: '4', title: 'Decision & Offer', desc: 'Receive feedback and potential offer' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Global Team?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Even if you don't see a perfect match, we'd love to hear from you. 
              We're always looking for talented individuals to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Send Your CV
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/team" className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                Learn About Our Culture
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
              <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
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
          <p>&copy; 2024 Stealth Translations. ISO 9001 & ISO 17100 Certified. Equal Opportunity Employer.</p>
        </div>
      </footer>
    </div>
  );
}
