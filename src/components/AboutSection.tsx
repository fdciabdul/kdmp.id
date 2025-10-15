'use client';

import { Target, Star, Award, Users, Heart } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Visi & Misi',
      description: 'Mewujudkan kemandirian ekonomi desa melalui koperasi modern berbasis digital yang memperkuat ketahanan pangan dan kesehatan rakyat.'
    }
  ];

  const stats = [
    { number: '83,762', label: 'Koperasi Desa', icon: Users },
    { number: '16', label: 'Kementerian', icon: Award },
    { number: '137', label: 'Kota', icon: Star },
    { number: '300+', label: 'Klien', icon: Heart }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background dengan gradient merah putih */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Tentang
            </span>{' '}
            <span className="text-gray-900">Koperasi Merah Putih</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-red-700">Koperasi Merah Putih (KDMP & KKMP)</span> beroperasi berdasarkan 
            <span className="font-semibold text-red-700"> Instruksi Presiden Nomor 9 Tahun 2025</span> dengan 
            dukungan dari 16 Kementerian.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-red-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Main Visi Misi Card */}
        <div className="flex justify-center">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-white via-red-50 to-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center max-w-4xl border-2 border-red-100 hover:border-red-200 overflow-hidden"
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-red-500 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600 rounded-full blur-2xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <h4 className="text-4xl md:text-5xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                      {value.title}
                    </span>
                  </h4>
                  
                  <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    {value.description}
                  </p>
                  

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}