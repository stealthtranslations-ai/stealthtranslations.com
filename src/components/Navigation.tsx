'use client';

import { Globe } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = '' }: NavigationProps) {
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
          <div className="hidden md:flex space-x-8">
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
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full transition">
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
