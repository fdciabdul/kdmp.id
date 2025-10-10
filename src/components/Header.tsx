'use client';

import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-red-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18">
              <Image
                src="/logo.jpg"
                alt="Logo Koperasi"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Beranda
            </a>
            <a href="#tentangkami" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Tentangkami
            </a>
            <a href="#layanandigital" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Layanan Digital
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Sign Up Button */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-red-100">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#service"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Service
              </a>
              <a
                href="#agents"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Agents
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center space-x-4 pt-4">
                <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                  Sign up
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;