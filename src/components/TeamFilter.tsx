'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, Briefcase, MapPin, Filter } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  location: string;
  bio: string;
  expertise: string[];
  image: string;
  email?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    position: 'Chief Executive Officer',
    department: 'Leadership',
    location: 'Belfast, UK',
    bio: 'Leading Stealth Translations for over 15 years with expertise in international business development and linguistic services.',
    expertise: ['Business Strategy', 'International Relations', 'Quality Management'],
    image: '/api/placeholder/200/200',
    email: 's.mitchell@stealthtranslations.com',
    linkedin: '#'
  },
  {
    id: '2',
    name: 'Jean-Pierre Dubois',
    position: 'Technical Director',
    department: 'Technical',
    location: 'Paris, France',
    bio: 'Specializing in technical translation and localization with over 20 years of experience in engineering and medical sectors.',
    expertise: ['Technical Translation', 'Localization', 'Quality Assurance'],
    image: '/api/placeholder/200/200',
    email: 'j.dubois@stealthtranslations.com',
    linkedin: '#'
  },
  {
    id: '3',
    name: 'Anna Kowalska',
    position: 'Head of AI Services',
    department: 'AI Services',
    location: 'Warsaw, Poland',
    bio: 'Pioneering AI-powered translation solutions and machine learning applications for linguistic services.',
    expertise: ['AI/ML', 'NLP', 'Data Science'],
    image: '/api/placeholder/200/200',
    email: 'a.kowalska@stealthtranslations.com',
    linkedin: '#'
  },
  {
    id: '4',
    name: 'Michael Chen',
    position: 'Senior Project Manager',
    department: 'Operations',
    location: 'Berlin, Germany',
    bio: 'Managing complex multilingual projects with focus on quality, timeline, and client satisfaction.',
    expertise: ['Project Management', 'Quality Control', 'Client Relations'],
    image: '/api/placeholder/200/200',
    email: 'm.chen@stealthtranslations.com',
    linkedin: '#'
  },
  {
    id: '5',
    name: 'Elena Rodriguez',
    position: 'Lead Translator',
    department: 'Linguistic',
    location: 'Madrid, Spain',
    bio: 'Expert translator specializing in legal and financial documents with native fluency in 5 languages.',
    expertise: ['Legal Translation', 'Financial Translation', 'Certified Translation'],
    image: '/api/placeholder/200/200',
    email: 'e.rodriguez@stealthtranslations.com',
    linkedin: '#'
  },
  {
    id: '6',
    name: 'Dr. James Wilson',
    position: 'Medical Translation Specialist',
    department: 'Medical',
    location: 'Belfast, UK',
    bio: 'Medical doctor turned translator with deep expertise in medical device documentation and clinical research.',
    expertise: ['Medical Translation', 'Regulatory Compliance', 'Clinical Research'],
    image: '/api/placeholder/200/200',
    email: 'j.wilson@stealthtranslations.com',
    linkedin: '#'
  }
];

const departments = ['All', 'Leadership', 'Technical', 'AI Services', 'Operations', 'Linguistic', 'Medical'];
const locations = ['All', 'Belfast, UK', 'Paris, France', 'Warsaw, Poland', 'Berlin, Germany', 'Madrid, Spain'];

export default function TeamFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === 'All' || member.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || member.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our diverse team of experts brings together linguistic excellence, technical expertise, and innovative AI solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-800/50 rounded-xl p-6 mb-12 border border-slate-700"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Department Filter */}
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-center bg-slate-900/50 rounded-lg px-4 py-3 border border-slate-600">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-300">
                {filteredMembers.length} of {teamMembers.length} members
              </span>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all">
                  {/* Profile Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-blue-600/30 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-blue-400" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-medium text-blue-400 bg-blue-600/20 px-2 py-1 rounded-full">
                        {member.department}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-400 text-sm mb-4 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {member.location}
                    </p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {member.bio}
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.slice(0, 2).map((exp) => (
                        <span
                          key={exp}
                          className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded"
                        >
                          {exp}
                        </span>
                      ))}
                      {member.expertise.length > 2 && (
                        <span className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded">
                          +{member.expertise.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredMembers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No team members found</h3>
            <p className="text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
          </motion.div>
        )}
      </div>

      {/* Team Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors z-10"
                >
                  ×
                </button>

                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-t-2xl">
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 bg-blue-600/30 rounded-full flex items-center justify-center">
                      <Users className="w-12 h-12 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                      <p className="text-blue-400 text-lg font-medium">{selectedMember.position}</p>
                      <p className="text-gray-400 flex items-center mt-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {selectedMember.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Bio */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">About</h3>
                      <p className="text-gray-300 mb-6">{selectedMember.bio}</p>
                      
                      <h3 className="text-xl font-semibold text-white mb-4">Department</h3>
                      <div className="bg-slate-800/50 p-4 rounded-lg mb-6">
                        <p className="text-blue-400 font-medium">{selectedMember.department}</p>
                      </div>
                    </div>

                    {/* Expertise */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Expertise</h3>
                      <div className="space-y-2 mb-6">
                        {selectedMember.expertise.map((exp) => (
                          <div key={exp} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">{exp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Contact */}
                      <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
                      <div className="space-y-3">
                        {selectedMember.email && (
                          <div className="flex items-center space-x-3 text-gray-300">
                            <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center">
                              <span className="text-xs text-blue-400">@</span>
                            </div>
                            <span>{selectedMember.email}</span>
                          </div>
                        )}
                        {selectedMember.linkedin && (
                          <div className="flex items-center space-x-3 text-gray-300">
                            <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center">
                              <span className="text-xs text-blue-400">in</span>
                            </div>
                            <span>LinkedIn Profile</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-8">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition"
                    >
                      Send Message
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedMember(null)}
                      className="px-8 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition"
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
