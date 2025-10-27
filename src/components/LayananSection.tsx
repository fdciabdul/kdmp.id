'use client';

import { 
  Wheat, 
  Truck, 
  Users, 
  Stethoscope, 
  Building2, 
  Calculator, 
  BarChart3,
  Network,
  CreditCard,
  QrCode,
  Wallet,
  TrendingUp,
  Package,
  Warehouse,
  UserCheck,
  Bell,
  Video,
  Pill,
  Activity,
  DollarSign,
  FileText,
  PieChart,
  Globe,
  BookOpen,
  Play,
  GraduationCap
} from 'lucide-react';

export default function LayananSection() {
  // Function to get button colors based on module title
  const getButtonColors = (moduleTitle: string, buttonType: 'video' | 'manual') => {
    const colors = {
      'Modul Point of Sales (POS)': {
        video: { normal: 'from-red-500 to-red-600', hover: 'hover:from-red-500 hover:to-red-600', border: 'border-red-400/30 hover:border-red-300/30' },
        manual: { normal: 'from-red-500 to-red-600', hover: 'hover:from-red-500 hover:to-red-600', border: 'border-red-400/30 hover:border-red-300/30' }
      },
      'Modul eLogistik & Inventory': {
        video: { normal: 'from-red-500 to-red-600', hover: 'hover:from-red-500 hover:to-red-600', border: 'border-red-400/30 hover:border-red-300/30' },
        manual: { normal: 'from-red-500 to-red-600', hover: 'hover:from-red-500 hover:to-red-600', border: 'border-red-400/30 hover:border-red-300/30' }
      },
      'Modul Keanggotaan': {
        video: { normal: 'from-red-500 to-red-600', hover: 'hover:from-red-500 hover:to-red-600', border: 'border-red-400/30 hover:border-red-300/30' },
        manual: { normal: 'from-red-500 to-red-600', hover: 'hover:from-red-500 hover:to-red-600', border: 'border-red-400/30 hover:border-red-300/30' }
      },
      'Modul Tele-Health Services': {
        video: { normal: 'from-red-500 to-red-600', hover: 'hover:from-red-500 hover:to-red-600', border: 'border-red-400/30 hover:border-red-300/30' },
        manual: { normal: 'from-gray-500 to-gray-600', hover: 'hover:from-gray-500 hover:to-gray-600', border: 'border-gray-400/30 hover:border-gray-300/30' }
      },
      'Modul Gerai Klinik & Obat': {
        video: { normal: 'from-red-500 to-red-600', hover: 'hover:from-red-500 hover:to-red-600', border: 'border-red-400/30 hover:border-red-300/30' },
        manual: { normal: 'from-gray-500 to-gray-600', hover: 'hover:from-gray-500 hover:to-gray-600', border: 'border-gray-400/30 hover:border-gray-300/30' }
      },
      'Modul Keuangan': {
        video: { normal: 'from-red-500 to-red-600', hover: 'hover:from-red-500 hover:to-red-600', border: 'border-red-400/30 hover:border-red-300/30' },
        manual: { normal: 'from-red-500 to-red-600', hover: 'hover:from-red-500 hover:to-red-600', border: 'border-red-400/30 hover:border-red-300/30' }
      }
    };

    const moduleColors = colors[moduleTitle as keyof typeof colors];
    if (moduleColors) {
      return moduleColors[buttonType];
    }
    
    // Default colors if module not found
    return {
      normal: 'from-gray-300 to-gray-400',
      hover: 'hover:from-red-500 hover:to-red-600',
      border: 'border-gray-300/30 hover:border-red-300/30'
    };
  };

  const digitalModules = [
    {
      icon: Wheat,
      title: 'Modul Point of Sales (POS)',
      description: 'Sistem Point of Sales modern untuk sektor pangan dengan teknologi terintegrasi.',
      features: [
        'Transaksi Penjualan & Pembelian Digital',
        'Manajemen Stok Otomatis', 
        'Integrasi QRIS, Transfer & E-Wallet',

      ],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      iconBg: 'bg-gradient-to-r from-green-500 to-emerald-600',
      url: 'https://pos.kdmp.id/',
      videoTutorialUrl: 'https://drive.google.com/file/d/19cxd9IoPR2GgKvFJl6vlhD7GKOKBt4x4/view?usp=drive_link',
      manualBookUrl: 'https://drive.google.com/file/d/1a2_z1bjROiTeKUzQQJA6s54SA3aByYeZ/view?usp=drive_link'
    },
    {
      icon: Truck,
      title: 'Modul eLogistik & Inventory',
      description: 'Manajemen logistik dan inventori terintegrasi untuk efisiensi maksimal.',
      features: [
        'Manajemen Stok Real-time',
        'Sistem Gudang Pintar',
        'Distribusi & Supplier Management',
        'Forecasting Kebutuhan AI'
      ],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-gradient-to-r from-blue-500 to-cyan-600',
      url: 'https://gudang.kdmp.id/',
      videoTutorialUrl: 'https://drive.google.com/drive/folders/1-tF3KpxqLX7aBeoydyHYcnGmx1rDv0IM?usp=sharing',
      manualBookUrl: 'https://drive.google.com/file/d/1z7W4ietNdw5BEnYM0xO6o4tJbVW1KRJy/view?usp=sharing'
    },
    {
      icon: Users,
      title: 'Modul Keanggotaan',
      description: 'Platform keanggotaan digital yang komprehensif dan user-friendly.',
      features: [
        'Registrasi Online/Offline',
        'ID Digital & QR Code',
        'Riwayat Aktivitas Lengkap',
        'Hak Suara & Notifikasi Otomatis'
      ],
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50',
      iconBg: 'bg-gradient-to-r from-purple-500 to-violet-600',
      url: 'https://anggota.kdmp.id/',
      videoTutorialUrl: 'https://drive.google.com/file/d/1BLaRyacBXw1jtG7jdh_ya1-wAVrEBIPO/view?usp=drive_link',
      manualBookUrl: 'https://drive.google.com/file/d/1pQsKW8owFuw-bQiGtxYXZubLFgaenmhX/view?usp=drive_link'
    },
    {
      icon: Stethoscope,
      title: 'Modul Tele-Health Services',
      description: 'Layanan kesehatan digital terintegrasi untuk akses kesehatan yang mudah.',
      features: [
        'Konsultasi Online 24/7',
        'Resep Elektronik Digital',
        'Asesmen Kesehatan AI',
        'Integrasi Klinik & Apotek'
      ],
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-50 to-pink-50',
      iconBg: 'bg-gradient-to-r from-red-500 to-pink-600',
      url: 'http://dokter.kdmp.id',
      videoTutorialUrl: 'https://drive.google.com/file/d/1jD01k8ISB3Uljm5HelJsaMa5As1G1-1l/view?usp=drive_link'
    },
    {
      icon: Building2,
      title: 'Modul Gerai Klinik & Obat',
      description: 'Manajemen gerai kesehatan dan farmasi dengan sistem terintegrasi.',
      features: [
        'Manajemen Layanan Medis',
        'Stok Obat Real-time',
        'Pelaporan BPJS Otomatis',
        'Transaksi Farmasi Digital'
      ],
      color: 'from-orange-500 to-amber-600',
      bgColor: 'from-orange-50 to-amber-50',
      iconBg: 'bg-gradient-to-r from-orange-500 to-amber-600',
      url: 'http://mobile-klinik.kdmp.id/',
      videoTutorialUrl: 'https://drive.google.com/drive/folders/1TdlkUgdsAlSktS9akV_UDesnlT4rlgJO?usp=drive_link'
    },
    {
      icon: Calculator,
      title: 'Modul Keuangan',
      description: 'Sistem keuangan komprehensif dengan pelaporan real-time.',
      features: [
        'Kas & Jurnal Otomatis',
        'Perhitungan SHU Digital',
        'Laporan Neraca Real-time',
        'Arus Kas & Analytics'
      ],
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'from-indigo-50 to-blue-50',
      iconBg: 'bg-gradient-to-r from-indigo-500 to-blue-600',
      url: 'https://koperasi.kdmp.id/',
      videoTutorialUrl:
        'https://drive.google.com/file/d/1pnVBRLaG2wPAXQ_V7K1bWbaKUECRPqfO/view?usp=drive_link',
      manualBookUrl:
        'https://drive.google.com/file/d/1bTnIuQY3KfWj0qP2eRqMtznD2wTbyHkJ/view?usp=drive_link',
    },
    {
      icon: BarChart3,
      title: 'Modul Dashboard EIS',
      description: 'Executive Information System dengan visualisasi data yang powerful.',
      features: [
        'KPI Koperasi Real-time',
        'Visualisasi Laporan Keuangan',
        'Monitoring Kesehatan Operasional',
        'Business Intelligence Dashboard'
      ],
      color: 'from-teal-500 to-green-600',
      bgColor: 'from-teal-50 to-green-50',
      iconBg: 'bg-gradient-to-r from-teal-500 to-green-600',
      hideButton: false,
      showOnlySegeraHadir: true
    },
    {
      icon: GraduationCap,
      title: 'Modul LMS',
      description: 'Platform pembelajaran digital dengan sertifikasi dan monitoring otomatis.',
      features: [
        'Kelas Online & Materi Interaktif',
        'Sistem Sertifikasi & Penilaian Otomatis',
        'Monitoring Kemajuan Peserta',
        'Integrasi Program Pelatihan Desa'
      ],
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50',
      iconBg: 'bg-gradient-to-r from-yellow-500 to-orange-600',
      hideButton: false,
      showOnlySegeraHadir: true
    }
  ];

  const integrations = [
    {
      icon: Network,
      title: 'Dinas Koperasi',
      description: 'Integrasi dengan sistem pemerintah daerah'
    },
    {
      icon: Activity,
      title: 'BPJS Kesehatan',
      description: 'Koneksi langsung dengan sistem BPJS'
    },
    {
      icon: Globe,
      title: 'Mitra Strategis',
      description: 'Jaringan partner bisnis nasional'
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background dengan gradient merah-putih yang elegan */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100"></div>
      
      {/* Decorative tech elements dengan aksen merah-putih */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 shadow-2xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-300/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 shadow-2xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-100/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Tech grid pattern dengan warna merah */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-red-200/60 rounded bg-red-100/20"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header dengan aksen merah-putih */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-8 shadow-2xl border-2 border-red-200/50">
            <Network className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent drop-shadow-lg">
              Ekosistem Digital
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto mb-10 shadow-lg"></div>
          
          <p className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium bg-red-50/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-200/40">
            <span className="font-bold text-red-800">KDMP.ID</span> menghadirkan solusi digital lengkap dari 
            <span className="font-semibold text-red-700"> pangan hingga kesehatan</span>, dalam satu platform 
            <span className="font-bold text-red-900"> koperasi nasional</span> yang terintegrasi.
          </p>
        </div>

        {/* Digital Modules Grid - 2 Rows Layout */}
        <div className="space-y-8 mb-20">
          {/* Baris Pertama - 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {digitalModules.slice(0, 4).map((module, index) => {
              const Icon = module.icon;
              return (
                <div 
                   key={index}
                   className={`group relative bg-red-50/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-red-200/60 overflow-hidden flex flex-col ${
                     module.showOnlySegeraHadir ? 'h-auto' : 'h-full'
                   }`}
                 >
                 {/* Decorative background pattern dengan aksen merah-putih */}
                 <div className="absolute inset-0 opacity-20">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200 to-red-300 rounded-full blur-xl"></div>
                   <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-100 to-red-200 rounded-full blur-lg"></div>
                   <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-red-200/40 rounded-full blur-md -translate-x-1/2 -translate-y-1/2"></div>
                 </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 ${module.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-red-200/30`}>
                     <Icon className="w-8 h-8 text-white" />
                   </div>
                   
                   <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300 leading-tight">
                     {module.title}
                   </h3>
                   
                   <p className="text-gray-700 mb-4 leading-relaxed font-medium text-sm flex-grow">
                     {module.description}
                   </p>
                   
                   <div className={`space-y-2 ${module.showOnlySegeraHadir ? 'mb-6' : 'mb-4'}`}>
                     {module.features.map((feature, featureIndex) => (
                       <div key={featureIndex} className="flex items-center text-gray-700">
                         <div className={`w-2 h-2 bg-gradient-to-r ${module.color} rounded-full mr-2 flex-shrink-0 shadow-sm border border-red-200/50`}></div>
                         <span className="text-xs font-medium">{feature}</span>
                       </div>
                     ))}
                   </div>
                   
                   {!module.hideButton && (
                     <div className={`${module.showOnlySegeraHadir ? 'mt-0' : 'mt-auto'} space-y-3`}>
                       {/* Show only Segera Hadir button for specific modules */}
                       {module.showOnlySegeraHadir ? (
                         <button
                           disabled
                           className={`w-full bg-gradient-to-r ${module.color} text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 opacity-60 cursor-not-allowed border border-red-200/30 text-sm`}
                         >
                           Segera Hadir
                         </button>
                       ) : (
                         <>
                           {/* Original Buka Modul button */}
                           {module.url ? (
                             <a
                               href={module.url}
                               target="_blank"
                               rel="noopener noreferrer"
                               referrerPolicy="no-referrer"
                               className={`block w-full bg-gradient-to-r ${module.color} hover:shadow-lg text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-center border border-red-200/30 text-sm`}
                             >
                               Buka Modul
                             </a>
                           ) : (
                             <button
                               disabled
                               className={`w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 opacity-60 cursor-not-allowed border border-gray-400/30 text-sm`}
                             >
                               Segera Hadir
                             </button>
                           )}
                           
                           {/* Video Tutorial and Manual Book buttons */}
                           <div className="grid grid-cols-2 gap-3">
                             {module.videoTutorialUrl ? (
                               <a
                                 href={module.videoTutorialUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 referrerPolicy="no-referrer"
                                 className={`flex items-center justify-center gap-2 bg-gradient-to-r ${getButtonColors(module.title, 'video').normal} ${getButtonColors(module.title, 'video').hover} text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm shadow-md hover:shadow-lg ${getButtonColors(module.title, 'video').border}`}
                               >
                                 <Play className="w-4 h-4" />
                                 <span>Video Tutorial</span>
                               </a>
                             ) : (
                               <button className={`flex items-center justify-center gap-2 bg-gradient-to-r ${getButtonColors(module.title, 'video').normal} ${getButtonColors(module.title, 'video').hover} text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm shadow-md hover:shadow-lg ${getButtonColors(module.title, 'video').border}`}>
                                 <Play className="w-4 h-4" />
                                 <span>Video Tutorial</span>
                               </button>
                             )}
                             {module.manualBookUrl ? (
                               <a
                                 href={module.manualBookUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 referrerPolicy="no-referrer"
                                 className={`flex items-center justify-center gap-2 bg-gradient-to-r ${getButtonColors(module.title, 'manual').normal} ${getButtonColors(module.title, 'manual').hover} text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm shadow-md hover:shadow-lg ${getButtonColors(module.title, 'manual').border}`}
                               >
                                 <BookOpen className="w-4 h-4" />
                                 <span>Manual Book</span>
                               </a>
                             ) : (
                               <button className={`flex items-center justify-center gap-2 bg-gradient-to-r ${getButtonColors(module.title, 'manual').normal} ${getButtonColors(module.title, 'manual').hover} text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm shadow-md hover:shadow-lg ${getButtonColors(module.title, 'manual').border}`}>
                                 <BookOpen className="w-4 h-4" />
                                 <span>Manual Book</span>
                               </button>
                             )}
                           </div>
                         </>
                       )}
                     </div>
                   )}
                 </div>
              </div>
            );
          })}
          </div>
          
          {/* Baris Kedua - 4 Cards (termasuk LMS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {digitalModules.slice(4, 8).map((module, index) => {
              const Icon = module.icon;
              return (
                <div 
                   key={index + 4}
                   className={`group relative bg-red-50/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-red-200/60 overflow-hidden flex flex-col ${
                     module.showOnlySegeraHadir ? 'h-auto' : 'h-full'
                   }`}
                 >
                   {/* Decorative background pattern dengan aksen merah-putih */}
                   <div className="absolute inset-0 opacity-20">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200 to-red-300 rounded-full blur-xl"></div>
                     <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-100 to-red-200 rounded-full blur-lg"></div>
                     <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-red-200/40 rounded-full blur-md -translate-x-1/2 -translate-y-1/2"></div>
                   </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                     <div className={`w-20 h-20 ${module.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-red-200/30`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300 leading-tight">
                        {module.title}
                      </h3>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed font-medium flex-grow">
                        {module.description}
                      </p>
                      
                      <div className={`space-y-3 ${module.showOnlySegeraHadir ? 'mb-6' : 'mb-6'}`}>
                        {module.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-700">
                            <div className={`w-3 h-3 bg-gradient-to-r ${module.color} rounded-full mr-3 flex-shrink-0 shadow-sm border border-red-200/50`}></div>
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {!module.hideButton && (
                        <div className={`${module.showOnlySegeraHadir ? 'mt-0' : 'mt-auto'} space-y-3`}>
                          {/* Show only Segera Hadir button for specific modules */}
                          {module.showOnlySegeraHadir ? (
                            <button
                              disabled
                              className={`w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 opacity-70 cursor-not-allowed border-2 border-gray-300/50 shadow-2xl shadow-gray-400/30 hover:shadow-2xl hover:shadow-gray-500/40`}
                            >
                              Segera Hadir
                            </button>
                          ) : (
                            <>
                              {/* Original Buka Modul button */}
                              {module.url ? (
                                <a
                                  href={module.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  referrerPolicy="no-referrer"
                                  className={`block w-full bg-gradient-to-r ${module.color} hover:shadow-lg text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-center border border-red-200/30`}
                                >
                                  Buka Modul
                                </a>
                              ) : (
                                <button
                                  disabled
                                  className={`w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 opacity-70 cursor-not-allowed border-2 border-gray-300/50 shadow-2xl shadow-gray-400/30 hover:shadow-2xl hover:shadow-gray-500/40`}
                                >
                                  Segera Hadir
                                </button>
                              )}
                              
                              {/* Video Tutorial and Manual Book buttons */}
                           <div className="grid grid-cols-2 gap-3">
                             {module.videoTutorialUrl ? (
                               <a
                                 href={module.videoTutorialUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 referrerPolicy="no-referrer"
                                 className={`flex items-center justify-center gap-2 bg-gradient-to-r ${getButtonColors(module.title, 'video').normal} ${getButtonColors(module.title, 'video').hover} text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm shadow-md hover:shadow-lg ${getButtonColors(module.title, 'video').border}`}
                               >
                                 <Play className="w-4 h-4" />
                                 <span>Video Tutorial</span>
                               </a>
                             ) : (
                               <button className={`flex items-center justify-center gap-2 bg-gradient-to-r ${getButtonColors(module.title, 'video').normal} ${getButtonColors(module.title, 'video').hover} text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm shadow-md hover:shadow-lg ${getButtonColors(module.title, 'video').border}`}>
                                 <Play className="w-4 h-4" />
                                 <span>Video Tutorial</span>
                               </button>
                             )}
                             {module.manualBookUrl ? (
                               <a
                                 href={module.manualBookUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 referrerPolicy="no-referrer"
                                 className={`flex items-center justify-center gap-2 bg-gradient-to-r ${getButtonColors(module.title, 'manual').normal} ${getButtonColors(module.title, 'manual').hover} text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm shadow-md hover:shadow-lg ${getButtonColors(module.title, 'manual').border}`}
                               >
                                 <BookOpen className="w-4 h-4" />
                                 <span>Manual Book</span>
                               </a>
                             ) : (
                               <button className={`flex items-center justify-center gap-2 bg-gradient-to-r ${getButtonColors(module.title, 'manual').normal} ${getButtonColors(module.title, 'manual').hover} text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm shadow-md hover:shadow-lg ${getButtonColors(module.title, 'manual').border}`}>
                                 <BookOpen className="w-4 h-4" />
                                 <span>Manual Book</span>
                               </button>
                             )}
                           </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integration Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Integrasi Sistem Eksternal
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Terhubung dengan berbagai sistem pemerintah dan mitra strategis untuk ekosistem yang komprehensif
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div 
                  key={index}
                  className="group bg-red-50/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-200/60"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-red-200/40 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{integration.title}</h4>
                  <p className="text-gray-600 font-medium">{integration.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Network className="w-12 h-12 text-white" />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Bergabung dengan Revolusi Digital
            </h3>
            
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Rasakan pengalaman koperasi masa depan dengan teknologi terdepan. 
              Akses semua modul digital dan mulai transformasi bisnis Anda hari ini.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="https://anggota.kdmp.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="bg-white text-red-600 hover:bg-red-50 font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Mulai Sekarang
              </a>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-3">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i} 
                className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-700 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}