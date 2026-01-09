import { useState, useEffect, useRef } from 'react';
import { galleryImages } from '../../../mocks/gallery';

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="gallery" className="py-24 bg-[#1A2B4A]">
      <div className="max-w-[1360px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#D4A574] text-[#1A2B4A] text-sm font-['Playfair_Display'] rounded-full mb-6">
            Gallery
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F4E8] mb-6">
            Craftsmanship in Motion
          </h2>
          <p className="text-[#F8F4E8]/70 text-lg max-w-2xl mx-auto">
            Explore our workshop, artisan hands at work, and the stunning carpets that grace homes worldwide.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div
          className="relative h-[70vh] rounded-2xl overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Images */}
          <div className="relative w-full h-full">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Caption */}
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#F8F4E8] font-semibold">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#F8F4E8]/20 backdrop-blur-sm hover:bg-[#D4A574] text-[#F8F4E8] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-10"
          >
            <i className="ri-arrow-left-line text-2xl"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#F8F4E8]/20 backdrop-blur-sm hover:bg-[#D4A574] text-[#F8F4E8] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-10"
          >
            <i className="ri-arrow-right-line text-2xl"></i>
          </button>

          {/* Progress Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? 'w-8 bg-[#D4A574]'
                    : 'w-2 bg-[#F8F4E8]/40 hover:bg-[#F8F4E8]/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-[#D4A574] scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
