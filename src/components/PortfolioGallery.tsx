'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ExternalLink, ChevronRight } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Medical Device Documentation',
    category: 'Medical',
    tags: ['Technical', 'Regulatory', 'Translation'],
    image: '/api/placeholder/400/300',
    description: 'Complete translation and localization of medical device documentation for EU market entry.',
    link: '#'
  },
  {
    id: '2',
    title: 'Legal Contract Translation',
    category: 'Legal',
    tags: ['Legal', 'Certified', 'Multi-language'],
    image: '/api/placeholder/400/300',
    description: 'Certified translation of international legal contracts and agreements.',
    link: '#'
  },
  {
    id: '3',
    title: 'AI Training Data Collection',
    category: 'AI Services',
    tags: ['Data Collection', 'AI', 'Multilingual'],
    image: '/api/placeholder/400/300',
    description: 'Large-scale multilingual dataset collection for AI model training.',
    link: '#'
  },
  {
    id: '4',
    title: 'Financial Reports Translation',
    category: 'Finance',
    tags: ['Financial', 'Annual Reports', 'Translation'],
    image: '/api/placeholder/400/300',
    description: 'Translation of quarterly and annual financial reports for global stakeholders.',
    link: '#'
  },
  {
    id: '5',
    title: 'Software Localization',
    category: 'Technology',
    tags: ['Software', 'UI/UX', 'Localization'],
    image: '/api/placeholder/400/300',
    description: 'Complete software localization including UI, help files, and documentation.',
    link: '#'
  },
  {
    id: '6',
    title: 'Marketing Campaign Translation',
    category: 'Marketing',
    tags: ['Marketing', 'Transcreation', 'Cultural'],
    image: '/api/placeholder/400/300',
    description: 'Transcreation of marketing materials for multiple international markets.',
    link: '#'
  }
];

const categories = ['All', 'Medical', 'Legal', 'AI Services', 'Finance', 'Technology', 'Marketing'];

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

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
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse range of projects showcasing expertise across multiple industries and service types.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center bg-slate-800/50 rounded-full px-4 py-2 border border-slate-600">
            <Filter className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm text-gray-300 mr-4">Filter:</span>
          </div>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <ExternalLink className="w-8 h-8 text-blue-400" />
                      </div>
                      <p className="text-sm text-gray-400">Project Image</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-blue-400 bg-blue-600/20 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400"
        >
          Showing {filteredItems.length} of {portfolioItems.length} projects
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
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
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors z-10"
                >
                  ×
                </button>

                {/* Header Image */}
                <div className="h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center rounded-t-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ExternalLink className="w-10 h-10 text-blue-400" />
                    </div>
                    <p className="text-gray-400">Project Showcase</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-medium text-blue-400 bg-blue-600/20 px-4 py-2 rounded-full">
                      {selectedItem.category}
                    </span>
                    <div className="flex gap-2">
                      {selectedItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-400 bg-slate-800 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedItem.title}
                  </h2>

                  <p className="text-gray-300 text-lg mb-8">
                    {selectedItem.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <h4 className="text-white font-semibold mb-4">Project Details</h4>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          Client: Confidential
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          Duration: 3-6 months
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          Team Size: 5-8 specialists
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          Languages: 15+ languages
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <h4 className="text-white font-semibold mb-4">Services Provided</h4>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          Translation & Localization
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          Quality Assurance
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          Cultural Adaptation
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          Technical Documentation
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition"
                    >
                      View Full Case Study
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedItem(null)}
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
