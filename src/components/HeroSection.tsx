'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/pedesaan.jpg"
          alt="Pemandangan Pedesaan"
          fill
          className="object-cover object-center sm:object-center md:object-center lg:object-center xl:object-center"
          priority
          quality={90}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        {/* Responsive Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50 sm:from-black/50 sm:via-black/30 sm:to-black/40 md:from-black/40 md:via-black/20 md:to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent sm:from-black/60 md:from-black/50"></div>
      </div>



      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-1 gap-8 lg:gap-16 items-center min-h-screen">
          {/* Main Content - Centered */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in text-center">
            {/* Main Heading */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                <span className="text-red-400">
                  Koperasi Merah Putih
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  Membangun Ketahanan Pangan
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  dan Kesehatan Desa Indonesia
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
                Bersama <span className="text-red-300 font-semibold">83.762 Koperasi Desa Merah Putih</span> di seluruh Indonesia, 
                kkami menghadirkan ekosistem digital untuk memperkuat ekonomi rakyat melalui ketahanan pangan, ketahanan kesehatan, 
                dan tata kelola koperasi modern yang transparan dan berkeadilan.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 lg:pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Gabung Sekarang
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.3s both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;