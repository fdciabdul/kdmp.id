'use client';

import { Target, Eye, Award, Heart } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Misi Kami',
      description: 'Memberdayakan masyarakat pedesaan melalui koperasi yang solid dan berkelanjutan untuk mencapai kesejahteraan bersama.'
    },
    {
      icon: Eye,
      title: 'Visi Kami',
      description: 'Menjadi koperasi terdepan yang mengutamakan kepentingan anggota dan berkontribusi pada pembangunan ekonomi desa.'
    },
    {
      icon: Award,
      title: 'Prestasi',
      description: 'Meraih berbagai penghargaan sebagai koperasi terbaik tingkat kabupaten dan provinsi selama 5 tahun berturut-turut.'
    },
    {
      icon: Heart,
      title: 'Komitmen',
      description: 'Berkomitmen penuh untuk transparansi, akuntabilitas, dan pelayanan terbaik kepada seluruh anggota koperasi.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="text-primary-600">Koperasi Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Koperasi Merah Putih (KDMP & KKMP) beroperasi berdasarkan Instruksi Presiden Nomor 9 Tahun 2025 dengan 
            dukungan dari 16 Kementerian. Dikelola oleh PT Subaga Inti Milenia (Subaga Group) sebagai holding, 
            menaungi 13 perusahaan, 31 HAKI, dan lebih dari 300 klien di 137 kota. Terdapat 83.762 koperasi 
            desa/kelurahan (KDMP & KKMP) di seluruh Indonesia.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Perjalanan Membangun Kesejahteraan
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Berawal dari sekelompok petani yang memiliki visi sama untuk meningkatkan 
                kesejahteraan ekonomi masyarakat desa, koperasi kami tumbuh menjadi institusi 
                keuangan yang dipercaya oleh ribuan anggota.
              </p>
              <p>
                Dengan prinsip gotong royong dan transparansi, kami telah membantu anggota 
                mengembangkan usaha, mengakses modal dengan bunga rendah, dan meningkatkan 
                taraf hidup keluarga.
              </p>
              <p>
                Hari ini, koperasi kami tidak hanya melayani simpan pinjam, tetapi juga 
                mengembangkan berbagai unit usaha yang memberikan manfaat langsung kepada 
                masyarakat sekitar.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Pencapaian Kami</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Total Aset</span>
                  <span className="font-bold">Rp 15,2 Miliar</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Anggota Aktif</span>
                  <span className="font-bold">5,247 Orang</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Kredit Tersalurkan</span>
                  <span className="font-bold">Rp 8,9 Miliar</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>SHU Dibagikan</span>
                  <span className="font-bold">Rp 890 Juta</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}