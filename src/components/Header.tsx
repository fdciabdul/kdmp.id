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

          {/* Desktop Navigation - positioned more to the right */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto mr-8">
            <a href="#hero" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Beranda
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Tentang Kami
            </a>
            <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Layanan Digital
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Kontak
            </a>
          </nav>

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
                href="#hero"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Layanan Digital
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;