'use client';

import { Building2, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Kontak', href: '#contact' },
  ];

  const services = [
    { name: 'Simpanan', href: '#services' },
    { name: 'Pinjaman', href: '#services' },
    { name: 'Unit Usaha', href: '#services' },
    { name: 'Investasi', href: '#services' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Koperasi Sejahtera Bersama</h3>
                <p className="text-gray-400 text-sm">Membangun Kesejahteraan Bersama</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Koperasi yang telah dipercaya selama 28 tahun dalam melayani masyarakat pedesaan. 
              Kami berkomitmen untuk terus memberikan pelayanan terbaik dan membangun 
              kesejahteraan ekonomi anggota.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">Jl. Raya Desa Sejahtera No. 123, Kec. Makmur</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">(0274) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">info@koperasisejahtera.co.id</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Koperasi Sejahtera Bersama. Semua hak dilindungi.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Dibuat dengan ❤️ untuk kemajuan koperasi Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}