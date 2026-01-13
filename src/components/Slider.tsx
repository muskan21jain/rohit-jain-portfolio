"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[110vh] md:h-screen overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slider image ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}

      {/* Left Arrow */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button className="bg-black bg-opacity-50 text-white p-2 rounded-full" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button className="bg-black bg-opacity-50 text-white p-2 rounded-full" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
