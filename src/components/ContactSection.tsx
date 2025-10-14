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
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Telepon & WhatsApp',
      primary: '+62 823-2084-1260',
      tertiary: 'WhatsApp: +62 823-2084-1260',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Resmi',
      primary: 'admin@kdmp.id',
      color: 'from-blue-500 to-cyan-500'
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
      {/* Background with gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-red-50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-100/30 to-pink-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
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
            return (
              <div 
                key={index} 
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
              >
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
                      href="https://wa.me/6282320841260" 
                      target="_blank" 
                      rel="noopener noreferrer"
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