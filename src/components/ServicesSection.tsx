'use client';

import { PiggyBank, CreditCard, Store, TrendingUp, Users, Shield } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: PiggyBank,
      title: 'Simpanan',
      description: 'Berbagai produk simpanan dengan bunga kompetitif dan sistem yang aman.',
      features: ['Simpanan Pokok', 'Simpanan Wajib', 'Simpanan Sukarela', 'Simpanan Berjangka'],
      color: 'bg-blue-500'
    },
    {
      icon: CreditCard,
      title: 'Pinjaman',
      description: 'Kredit dengan bunga rendah dan proses yang mudah untuk anggota.',
      features: ['Kredit Usaha', 'Kredit Konsumtif', 'Kredit Musiman', 'Kredit Darurat'],
      color: 'bg-green-500'
    },
    {
      icon: Store,
      title: 'Unit Usaha',
      description: 'Berbagai unit usaha yang memberikan keuntungan bagi anggota.',
      features: ['Toko Serba Ada', 'Unit Pertanian', 'Jasa Transportasi', 'Warung Makan'],
      color: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Investasi',
      description: 'Program investasi jangka panjang untuk masa depan yang lebih baik.',
      features: ['Deposito', 'Saham Koperasi', 'Investasi Emas', 'Reksadana'],
      color: 'bg-orange-500'
    },
    {
      icon: Users,
      title: 'Pelatihan',
      description: 'Program pelatihan dan pemberdayaan untuk meningkatkan keterampilan.',
      features: ['Pelatihan Usaha', 'Literasi Keuangan', 'Keterampilan Teknis', 'Leadership'],
      color: 'bg-pink-500'
    },
    {
      icon: Shield,
      title: 'Asuransi',
      description: 'Perlindungan finansial untuk anggota dan keluarga.',
      features: ['Asuransi Jiwa', 'Asuransi Kesehatan', 'Asuransi Usaha', 'Asuransi Kendaraan'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Layanan <span className="text-primary-600">Koperasi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai layanan keuangan dan non-keuangan yang dirancang 
            khusus untuk memenuhi kebutuhan anggota dan meningkatkan kesejahteraan bersama.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all duration-300">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Bergabung dengan Koperasi Kami?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Dapatkan akses ke semua layanan koperasi dan mulai membangun masa depan 
            finansial yang lebih baik bersama ribuan anggota lainnya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Daftar Sekarang
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}