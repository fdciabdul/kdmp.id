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
    <footer className="bg-gradient-to-br from-red-700 via-red-600 to-red-400 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-max section-padding py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">Koperasi Sejahtera Bersama</h3>
                <p className="text-white/80 text-sm">Membangun Kesejahteraan Bersama</p>
              </div>
            </div>
            
            <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm">
              Koperasi yang telah dipercaya selama 28 tahun dalam melayani masyarakat pedesaan. 
              Kami berkomitmen untuk terus memberikan pelayanan terbaik dan membangun 
              kesejahteraan ekonomi anggota.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white/80 flex-shrink-0" />
                <span className="text-white/90">Menara Palma Jalan H.R Rasuna Said Lantai 12 Jakarta 12710</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                <a 
                  href="https://wa.me/6282320841260" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-green-300 transition-colors duration-300 cursor-pointer"
                >
                  +62 823-2084-1260
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                <span className="text-white/90">admin@kdmp.id</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white drop-shadow-sm">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white drop-shadow-sm">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/10"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/80 text-sm drop-shadow-sm">
                © 2025 Koperasi Sejahtera Bersama. Semua hak dilindungi.
              </p>
              <p className="text-white/60 text-xs mt-1 drop-shadow-sm">
                Dibuat dengan ❤️ untuk kemajuan koperasi Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}