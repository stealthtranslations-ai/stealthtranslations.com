'use client';

import { motion } from 'framer-motion';
import { Globe, Users, Award, MapPin, Mail, Phone } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Brano Pajer',
      position: 'Managing Director',
      image: '/images/team/brano-pajer.jpg',
      bio: 'Leading our global operations with over 15 years of experience in international business and linguistic services.',
      location: 'Poland Office',
      linkedin: '#',
      email: 'brano.pajer@stealthtranslations.com'
    },
    {
      name: 'David Hill',
      position: 'Managing Director',
      image: '/images/team/david-hill.jpg',
      bio: 'Expert in financial translations and corporate communications, ensuring precision in complex financial documentation.',
      location: 'UK Headquarters',
      linkedin: '#',
      email: 'david.hill@stealthtranslations.com'
    },
    {
      name: 'Aiden Carlin',
      position: 'Legal Director',
      image: '/images/team/aiden-carlin.jpg',
      bio: 'Specializing in legal translations and certification services, maintaining our ISO 17100 standards.',
      location: 'Belfast Headquarters',
      linkedin: '#',
      email: 'aiden.carlin@stealthtranslations.com'
    },
    {
      name: 'Alex Britton',
      position: 'Technical Director',
      image: '/images/team/alex-britton.jpg',
      bio: 'Leading our technical translation and AI integration teams with expertise in engineering and software localization.',
      location: 'France Office',
      linkedin: '#',
      email: 'alex.britton@stealthtranslations.com'
    }
  ];

  const departments = [
    {
      name: 'Executive Leadership',
      description: 'Strategic direction and global operations management',
      members: 4
    },
    {
      name: 'Linguistic Team',
      description: 'Certified translators and subject matter experts',
      members: 150
    },
    {
      name: 'AI & Technology',
      description: 'AI specialists and data scientists',
      members: 25
    },
    {
      name: 'Quality Assurance',
      description: 'ISO certification and quality control experts',
      members: 12
    },
    {
      name: 'Client Services',
      description: 'Customer support and project management',
      members: 30
    },
    {
      name: 'Sales & Marketing',
      description: 'Business development and client relations',
      members: 15
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
              <a href="/team" className="text-blue-400">Team</a>
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
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of linguistic experts, AI specialists, and industry professionals 
              work together to deliver exceptional translation and AI data services worldwide.
            </p>
          </motion.div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-8 mb-20"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">140+</div>
              <div className="text-gray-400">Languages Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">7</div>
              <div className="text-gray-400">Global Offices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </motion.div>

          {/* Leadership Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition group"
                >
                  <div className="aspect-square bg-slate-700/50 rounded-xl mb-6 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      onError={(e: any) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1e293b&color=fff&size=200`;
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.position}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {member.location}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-white transition"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-white transition"
                      aria-label={`${member.name} Email`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Departments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Departments</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold">{dept.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{dept.description}</p>
                  <div className="text-2xl font-bold text-blue-400">{dept.members}</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Join Our Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented linguists, AI specialists, and industry experts 
              to join our global team. Explore career opportunities at Stealth Translations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition">
                View Open Positions
              </button>
              <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition">
                Send Your CV
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
              <li><a href="/team" className="hover:text-white transition">Our Team</a></li>
              <li><a href="/testimonials" className="hover:text-white transition">Testimonials</a></li>
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
