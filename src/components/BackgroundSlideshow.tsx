'use client';

import { useState, useEffect } from 'react';

// Array of gradient backgrounds that simulate rural scenery themes
const backgrounds = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Mountain sky
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Sunset field
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // Clear sky
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // Green meadow
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'  // Golden hour
];

export default function BackgroundSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  // Horizontal parallax animation
  useEffect(() => {
    const animateBackground = () => {
      setTranslateX((prev) => {
        const newValue = prev - 0.5;
        return newValue <= -100 ? 0 : newValue;
      });
    };

    const animationInterval = setInterval(animateBackground, 50); // 20fps for smooth animation

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="slideshow-container">
      {backgrounds.map((background, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            background: background,
            transform: `translateX(${translateX}px)`,
            backgroundSize: '120% 100%', // Slightly larger to accommodate movement
            backgroundPosition: `${translateX * 0.3}px center`, // Parallax effect
          }}
        />
      ))}
      
      {/* Red overlay for consistent theme with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-red-600/20 z-10"
        style={{
          transform: `translateX(${translateX * 0.1}px)`, // Slower parallax for overlay
        }}
      />
    </div>
  );
}