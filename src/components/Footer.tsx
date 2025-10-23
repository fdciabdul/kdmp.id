'use client';

import { Building2, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        try {
          history.replaceState(null, '', href);
        } catch {}
      }
    }
  };
  const quickLinks = [
    { name: 'Beranda', href: '#hero' },
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
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">Koperasi Desa Merah Putih</h3>
                <p className="text-white/80 text-sm">Membangun Kesejahteraan Bersama</p>
              </div>
            </div>
            
            <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm">
              Koperasi yang terpercaya dalam melayani masyarakat pedesaan. Kami berkomitmen untuk 
              terus memberikan pelayanan terbaik dan membangun kesejahteraan ekonomi anggota.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white/80 flex-shrink-0" />
                <a 
                  href="https://share.google/7k2K3LUvZOHvuxCa9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-red-300 transition-colors duration-300 cursor-pointer"
                >
                  Menara Palma Jalan H.R Rasuna Said Lantai 12 Jakarta 12710
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                <a 
                  href="https://wa.me/6281181209758" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="text-white/90 hover:text-green-300 transition-colors duration-300 cursor-pointer"
                >
                  +6281181209758
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                <a 
                  href="mailto:admin@subagamilenia.com"
                  className="text-white/90 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                >
                  admin@subagamilenia.com
                </a>
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
                    onClick={(e) => handleHashClick(e, link.href)}
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

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <p className="text-white/80 text-sm drop-shadow-sm">
                © {new Date().getFullYear()} Koperasi Desa Merah Putih. Semua hak dilindungi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}