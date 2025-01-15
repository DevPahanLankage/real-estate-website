'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: '/images/house1.png',
    alt: 'Luxury New Zealand Home'
  },
  {
    id: 2,
    image: '/images/house2.png',
    alt: 'Modern Auckland Property'
  },
  {
    id: 3,
    image: '/images/house3.png',
    alt: 'Waterfront New Zealand Estate'
  },
  {
    id: 4,
    image: '/images/house4.png',
    alt: 'Coastal New Zealand Property'
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 bg-primary">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSlide === index ? 1 : 0,
            transition: { duration: 1.5, ease: 'easeInOut' }
          }}
          className="absolute inset-0"
          style={{ display: Math.abs(currentSlide - index) <= 1 || 
                  (currentSlide === 0 && index === slides.length - 1) || 
                  (currentSlide === slides.length - 1 && index === 0) 
                    ? 'block' : 'none' }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        </motion.div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-white scale-125'
                : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 