'use client';

import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = '' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/team', label: 'Team' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-emerald-400" />
            <span className="text-xl font-bold">Stealth Translations</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition ${
                  currentPage === item.href || (item.href === '/' && currentPage === '')
                    ? 'text-emerald-400'
                    : 'hover:text-emerald-400'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a href="/contact" className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full transition">
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-400 transition"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition ${
                    currentPage === item.href || (item.href === '/' && currentPage === '')
                      ? 'text-emerald-400'
                      : 'hover:text-emerald-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full transition inline-block text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
