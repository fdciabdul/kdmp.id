'use client';

import { MapPin, Phone, Mail, MessageCircle, Users, Building2, Globe } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat Kantor',
      primary: 'Menara Palma Jalan H.R Rasuna Said Lantai 12',
      secondary: 'Kecamatan Setiabudi, Kota Jakarta Selatan',
      tertiary: 'Jakarta 12710',
      color: 'from-red-500 to-pink-500',
      link: 'https://share.google/7k2K3LUvZOHvuxCa9',
      linkType: 'external'
    },
    {
      icon: Phone,
      title: 'Telepon & WhatsApp',
      primary: '+6281181209758',
      tertiary: 'WhatsApp: +6281181209758',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Resmi',
      primary: 'admin@subagamilenia.com',
      color: 'from-blue-500 to-cyan-500',
      link: 'mailto:admin@subagamilenia.com',
      linkType: 'email'
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Chat WhatsApp',
      description: 'Hubungi kami langsung via WhatsApp untuk respon cepat',
      action: 'Chat Sekarang',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Building2,
      title: 'Kunjungi Kantor',
      description: 'Datang langsung ke kantor kami untuk pelayanan terbaik',
      action: 'Lihat Lokasi',
      color: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Enhanced Red and White Background Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100"></div>
      
      {/* Multi-layered Gradient System for Enhanced Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/12 via-transparent to-red-600/8"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-red-200/15 via-transparent to-white/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-red-300/10 via-white/20 to-red-100/25"></div>
      
      {/* Sophisticated Decorative Elements with Animation */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-red-300/30 via-red-100/20 to-white/25 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-red-400/25 via-white/20 to-red-50/30 rounded-full blur-2xl translate-x-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-0 left-1/4 w-[480px] h-[480px] bg-gradient-to-tr from-white/35 via-red-200/25 to-red-300/20 rounded-full blur-3xl translate-y-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-red-500/22 via-red-100/30 to-white/25 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      
      {/* Enhanced Geometric Accents with Sophisticated Styling */}
      <div className="absolute top-16 right-16 w-48 h-48 border-2 border-red-300/40 rounded-full opacity-70 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute top-20 right-20 w-40 h-40 border border-red-200/50 rounded-full opacity-60"></div>
      <div className="absolute bottom-20 left-12 w-36 h-36 border-2 border-red-400/35 rotate-45 rounded-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-24 left-16 w-28 h-28 border border-red-300/40 rotate-45 rounded-2xl opacity-50"></div>
      <div className="absolute top-1/3 left-1/5 w-24 h-24 bg-gradient-to-br from-red-200/50 to-white/40 rounded-full opacity-80 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-tl from-white/45 to-red-200/40 rounded-2xl rotate-12 opacity-70 animate-pulse" style={{animationDelay: '2.5s'}}></div>
      
      {/* Advanced Flowing Wave Pattern with Enhanced Gradients */}
      <div className="absolute inset-0 opacity-25">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0,350 Q200,300 400,350 T800,350 Q1000,300 1200,350 V800 H0 Z" fill="url(#enhancedRedGradient)" opacity="0.15"/>
          <path d="M0,420 Q300,370 600,420 T1200,420 V800 H0 Z" fill="url(#enhancedWhiteGradient)" opacity="0.2"/>
          <path d="M0,480 Q150,450 300,480 T600,480 Q750,450 900,480 T1200,480 V800 H0 Z" fill="url(#accentGradient)" opacity="0.12"/>
          <defs>
            <linearGradient id="enhancedRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fca5a5" />
              <stop offset="30%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#f87171" />
              <stop offset="100%" stopColor="#fecaca" />
            </linearGradient>
            <linearGradient id="enhancedWhiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#fef2f2" />
              <stop offset="75%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#fef7f7" />
            </linearGradient>
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fee2e2" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#fecaca" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Radial Gradient Overlay for Enhanced Visual Appeal */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-red-50/20 to-red-100/30 opacity-60"></div>
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Hubungi Kami
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Kami siap melayani Anda dengan sepenuh hati. Hubungi kami melalui berbagai channel komunikasi 
            yang tersedia untuk mendapatkan informasi dan layanan terbaik.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const CardContent = (
              <>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-800 font-semibold">{info.primary}</p>
                    <p className="text-gray-600">{info.secondary}</p>
                    <p className="text-gray-500 text-sm">{info.tertiary}</p>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${info.color} opacity-10 rounded-bl-full`}></div>
              </>
            );

            if (info.link) {
              return (
                <a
                  key={index}
                  href={info.link}
                  target={info.linkType === 'external' ? '_blank' : undefined}
                  rel={info.linkType === 'external' ? 'noopener noreferrer' : undefined}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 block cursor-pointer"
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div 
                key={index} 
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Quick Actions Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Cara Cepat <span className="text-red-600">Menghubungi Kami</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih cara yang paling nyaman untuk Anda berkomunikasi dengan tim kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/30"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{action.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{action.description}</p>
                  
                  {/* Action Button */}
                  {action.title === 'Chat WhatsApp' ? (
                    <a 
                      href="https://wa.me/6281181209758" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      referrerPolicy="no-referrer"
                      className={`block w-full py-3 px-6 bg-gradient-to-r ${action.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-center`}
                    >
                      {action.action}
                    </a>
                  ) : action.title === 'Kunjungi Kantor' ? (
                    <a 
                      href="https://share.google/7k2K3LUvZOHvuxCa9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`block w-full py-3 px-6 bg-gradient-to-r ${action.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-center`}
                    >
                      {action.action}
                    </a>
                  ) : (
                    <button className={`w-full py-3 px-6 bg-gradient-to-r ${action.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                      {action.action}
                    </button>
                  )}
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white/20 to-white/5 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-white/10 to-white/5 rounded-full"></div>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}